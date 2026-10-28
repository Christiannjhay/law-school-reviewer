"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { Button, Card, ProgressBar, RuleChip, RuleFilter, Segmented } from "@/components/ui";
import { IDENTIFICATION } from "@/lib/content";
import { recordAnswer } from "@/lib/store";
import type { Identification, RuleId } from "@/lib/types";
import { cx, isCloseEnough, sample } from "@/lib/util";

type Verdict = "right" | "wrong" | null;

export function IdentificationDrill() {
  const [rules, setRules] = useState<RuleId[]>([]);
  const [count, setCount] = useState(15);
  const [deck, setDeck] = useState<Identification[] | null>(null);
  const [i, setI] = useState(0);
  const [input, setInput] = useState("");
  const [verdict, setVerdict] = useState<Verdict>(null);
  const [score, setScore] = useState<boolean[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const pool = rules.length ? IDENTIFICATION.filter((x) => rules.includes(x.rule)) : IDENTIFICATION;
  const item = deck?.[i];

  function start() {
    setDeck(sample(pool, count || pool.length));
    setI(0);
    setScore([]);
    setInput("");
    setVerdict(null);
  }

  function settle(ok: boolean) {
    if (!item) return;
    setVerdict(ok ? "right" : "wrong");
    setScore((s) => [...s, ok]);
    recordAnswer(item.id, ok, "identification");
  }

  function check() {
    if (!item || verdict) return;
    settle(isCloseEnough(input, item.answers));
  }

  /** Lets the learner overrule the auto-checker (e.g., a correct synonym). */
  function overrule() {
    if (!item || verdict !== "wrong") return;
    setVerdict("right");
    setScore((s) => [...s.slice(0, -1), true]);
    recordAnswer(item.id, true, "identification");
  }

  function next() {
    setI((n) => n + 1);
    setInput("");
    setVerdict(null);
    setTimeout(() => inputRef.current?.focus(), 0);
  }

  if (!deck) {
    return (
      <Card className="space-y-6">
        <RuleFilter value={rules} onChange={setRules} />
        <Segmented
          label="Number of items"
          value={count}
          onChange={setCount}
          options={[
            { value: 15, label: "15" },
            { value: 30, label: "30" },
            { value: 0, label: `All (${pool.length})` },
          ]}
        />
        <Button className="w-full" onClick={start} disabled={!pool.length}>
          Start
        </Button>
      </Card>
    );
  }

  if (!item) {
    const right = score.filter(Boolean).length;
    return (
      <Card className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted">Done</p>
        <p className="mt-2 font-serif text-5xl font-bold">
          {right}
          <span className="text-2xl text-muted">/{deck.length}</span>
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button onClick={start}>Another round</Button>
          <Button variant="secondary" onClick={() => setDeck(null)}>
            Change settings
          </Button>
        </div>
      </Card>
    );
  }

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
        <RuleChip rule={item.rule} />
        <p className="mt-3 text-lg font-semibold leading-snug sm:text-xl">{item.q}</p>
        <form
          className="mt-5"
          onSubmit={(e) => {
            e.preventDefault();
            if (verdict) next();
            else check();
          }}
        >
          <input
            ref={inputRef}
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!!verdict}
            placeholder="Type your answer…"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            className={cx(
              "h-12 w-full rounded-xl border bg-bg px-4 text-base outline-none",
              verdict === "right" ? "border-good" : verdict === "wrong" ? "border-bad" : "border-line focus:border-accent",
            )}
          />
          {verdict && (
            <div className={cx("mt-3 rounded-xl p-3.5", verdict === "right" ? "bg-good-soft" : "bg-bad-soft")}>
              <p className={cx("font-semibold", verdict === "right" ? "text-good" : "text-bad")}>
                {verdict === "right" ? "Correct" : "Not quite"} — {item.answers[0]}
              </p>
              {item.explain && <p className="mt-1 text-sm">{item.explain}</p>}
              {verdict === "wrong" && input.trim() && (
                <button type="button" onClick={overrule} className="mt-2 text-sm font-semibold text-accent underline">
                  I was right — count it
                </button>
              )}
            </div>
          )}
          <div className="mt-4 grid grid-cols-2 gap-3">
            {verdict ? (
              <Button type="submit" className="col-span-2">
                Next <Icon name="right" className="size-4" />
              </Button>
            ) : (
              <>
                <Button variant="secondary" onClick={() => settle(false)}>
                  Show answer
                </Button>
                <Button type="submit" disabled={!input.trim()}>
                  Check
                </Button>
              </>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
}
