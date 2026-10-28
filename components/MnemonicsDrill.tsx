"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/icons";
import { Button, Card, ProgressBar, RuleChip, RuleFilter, Segmented } from "@/components/ui";
import { MNEMONICS } from "@/lib/content";
import { recordAnswer } from "@/lib/store";
import type { Mnemonic, RuleId } from "@/lib/types";
import { cx, matchesItem, shuffle } from "@/lib/util";

type Tab = "browse" | "recall" | "type";

export function MnemonicsDrill() {
  const [tab, setTab] = useState<Tab>("recall");
  const [rules, setRules] = useState<RuleId[]>([]);
  const pool = useMemo(() => (rules.length ? MNEMONICS.filter((m) => rules.includes(m.rule)) : MNEMONICS), [rules]);

  return (
    <div className="space-y-5">
      <Segmented
        value={tab}
        onChange={setTab}
        options={[
          { value: "recall", label: "Recall" },
          { value: "type", label: "Enumerate" },
          { value: "browse", label: "Browse" },
        ]}
      />
      {tab === "browse" && (
        <>
          <Card>
            <RuleFilter value={rules} onChange={setRules} />
          </Card>
          <div className="grid gap-3 md:grid-cols-2">
            {pool.map((m) => (
              <MnemonicCard key={m.id} m={m} />
            ))}
          </div>
        </>
      )}
      {tab === "recall" && <Recall pool={pool} rules={rules} setRules={setRules} />}
      {tab === "type" && <Enumerate pool={pool} rules={rules} setRules={setRules} />}
    </div>
  );
}

function MnemonicCard({ m }: { m: Mnemonic }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-semibold text-muted">{m.topic}</p>
        <RuleChip rule={m.rule} />
      </div>
      <p className="mt-2 font-serif text-lg font-bold text-accent">“{m.mnemonic}”</p>
      <ol className="mt-2 list-decimal space-y-1 pl-5 text-[15px]">
        {m.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ol>
    </Card>
  );
}

function Setup({ rules, setRules, onStart, n }: { rules: RuleId[]; setRules: (r: RuleId[]) => void; onStart: () => void; n: number }) {
  return (
    <Card className="space-y-6">
      <RuleFilter value={rules} onChange={setRules} />
      <Button className="w-full" onClick={onStart} disabled={!n}>
        Start · {n} lists
      </Button>
    </Card>
  );
}

/** See the topic and mnemonic, try to recall each item, reveal one at a time, then self-grade. */
function Recall({ pool, rules, setRules }: { pool: Mnemonic[]; rules: RuleId[]; setRules: (r: RuleId[]) => void }) {
  const [deck, setDeck] = useState<Mnemonic[] | null>(null);
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(0);
  const [showMnemonic, setShowMnemonic] = useState(true);
  const m = deck?.[i];

  if (!deck) return <Setup rules={rules} setRules={setRules} n={pool.length} onStart={() => (setDeck(shuffle(pool)), setI(0), setShown(0))} />;
  if (!m)
    return (
      <Card className="text-center">
        <p className="font-semibold">All {deck.length} lists reviewed.</p>
        <div className="mt-4 flex justify-center gap-2">
          <Button onClick={() => (setDeck(shuffle(pool)), setI(0), setShown(0))}>Again</Button>
          <Button variant="secondary" onClick={() => setDeck(null)}>
            Settings
          </Button>
        </div>
      </Card>
    );

  const grade = (ok: boolean) => {
    recordAnswer(m.id, ok, "mnemonics");
    setI((n) => n + 1);
    setShown(0);
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <button type="button" onClick={() => setDeck(null)} className="grid size-10 shrink-0 place-items-center rounded-full hover:bg-surface-2" aria-label="End">
          <Icon name="x" />
        </button>
        <ProgressBar value={i} max={deck.length} />
        <span className="shrink-0 text-sm tabular-nums text-muted">
          {i + 1}/{deck.length}
        </span>
      </div>
      <Card>
        <div className="flex items-start justify-between gap-2">
          <RuleChip rule={m.rule} />
          <label className="flex items-center gap-2 text-xs text-muted">
            <input type="checkbox" checked={showMnemonic} onChange={(e) => setShowMnemonic(e.target.checked)} className="size-4 accent-[var(--accent)]" />
            Show mnemonic hint
          </label>
        </div>
        <p className="mt-3 text-lg font-semibold">{m.topic}</p>
        <p className="mt-1 text-sm text-muted">{m.items.length} items</p>
        {showMnemonic && <p className="mt-3 rounded-xl bg-gold-soft px-3 py-2 font-serif font-bold text-gold">“{m.mnemonic}”</p>}
        <ol className="mt-4 space-y-2">
          {m.items.map((it, idx) => (
            <li key={it} className={cx("flex gap-3 rounded-xl border px-3 py-2.5 text-[15px]", idx < shown ? "border-line bg-bg" : "border-dashed border-line")}>
              <span className="font-bold text-muted tabular-nums">{idx + 1}.</span>
              <span className={idx < shown ? "" : "select-none text-transparent [text-shadow:0_0_8px_var(--muted)]"}>{it}</span>
            </li>
          ))}
        </ol>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {shown < m.items.length ? (
            <>
              <Button variant="secondary" onClick={() => setShown(m.items.length)}>
                Reveal all
              </Button>
              <Button onClick={() => setShown((s) => s + 1)}>Reveal next</Button>
            </>
          ) : (
            <>
              <Button variant="secondary" className="text-bad" onClick={() => grade(false)}>
                Missed some
              </Button>
              <Button className="bg-good" onClick={() => grade(true)}>
                Got them all
              </Button>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}

/** Type as many items as you can; each typed line is matched against the list by keywords. */
function Enumerate({ pool, rules, setRules }: { pool: Mnemonic[]; rules: RuleId[]; setRules: (r: RuleId[]) => void }) {
  const [deck, setDeck] = useState<Mnemonic[] | null>(null);
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const m = deck?.[i];

  const hits = useMemo(() => {
    if (!m || !checked) return [];
    const lines = text.split(/\n|;/).map((l) => l.trim()).filter(Boolean);
    return m.items.map((it) => lines.some((l) => matchesItem(l, it)));
  }, [m, text, checked]);

  if (!deck) return <Setup rules={rules} setRules={setRules} n={pool.length} onStart={() => (setDeck(shuffle(pool)), setI(0))} />;
  if (!m)
    return (
      <Card className="text-center">
        <p className="font-semibold">All lists done.</p>
        <div className="mt-4 flex justify-center gap-2">
          <Button onClick={() => (setDeck(shuffle(pool)), setI(0))}>Again</Button>
          <Button variant="secondary" onClick={() => setDeck(null)}>
            Settings
          </Button>
        </div>
      </Card>
    );

  const got = hits.filter(Boolean).length;

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <button type="button" onClick={() => setDeck(null)} className="grid size-10 shrink-0 place-items-center rounded-full hover:bg-surface-2" aria-label="End">
          <Icon name="x" />
        </button>
        <ProgressBar value={i} max={deck.length} />
        <span className="shrink-0 text-sm tabular-nums text-muted">
          {i + 1}/{deck.length}
        </span>
      </div>
      <Card>
        <RuleChip rule={m.rule} />
        <p className="mt-3 text-lg font-semibold">Enumerate: {m.topic}</p>
        <p className="mt-1 text-sm text-muted">{m.items.length} items · one per line</p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={checked}
          rows={Math.max(4, m.items.length)}
          placeholder={"1. …\n2. …"}
          className="mt-4 w-full rounded-xl border border-line bg-bg p-3 text-base leading-relaxed outline-none focus:border-accent"
        />
        {checked && (
          <div className="mt-3">
            <p className={cx("font-semibold", got === m.items.length ? "text-good" : "text-gold")}>
              {got}/{m.items.length} matched · “{m.mnemonic}”
            </p>
            <ol className="mt-2 space-y-1.5">
              {m.items.map((it, idx) => (
                <li key={it} className={cx("flex gap-2 rounded-lg px-3 py-2 text-[15px]", hits[idx] ? "bg-good-soft" : "bg-bad-soft")}>
                  <Icon name={hits[idx] ? "check" : "x"} className={cx("mt-0.5 size-4 shrink-0", hits[idx] ? "text-good" : "text-bad")} />
                  {it}
                </li>
              ))}
            </ol>
            <p className="mt-2 text-xs text-muted">Matching is by keywords — judge yourself if your wording differs.</p>
          </div>
        )}
        <div className="mt-4">
          {checked ? (
            <Button
              className="w-full"
              onClick={() => {
                setI((n) => n + 1);
                setText("");
                setChecked(false);
              }}
            >
              Next list <Icon name="right" className="size-4" />
            </Button>
          ) : (
            <Button
              className="w-full"
              onClick={() => {
                setChecked(true);
                const lines = text.split(/\n|;/).map((l) => l.trim()).filter(Boolean);
                const all = m.items.every((it) => lines.some((l) => matchesItem(l, it)));
                recordAnswer(m.id, all, "mnemonics");
              }}
            >
              Check
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
