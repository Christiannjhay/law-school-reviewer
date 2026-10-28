"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { Button, Card, RuleChip, RuleFilter } from "@/components/ui";
import { ESSAYS } from "@/lib/content";
import { recordAnswer, useProgress } from "@/lib/store";
import type { Essay, RuleId } from "@/lib/types";
import { cx } from "@/lib/util";

export function EssayDrill() {
  const [rules, setRules] = useState<RuleId[]>([]);
  const [open, setOpen] = useState<Essay | null>(null);
  const progress = useProgress();
  const list = rules.length ? ESSAYS.filter((e) => rules.includes(e.rule)) : ESSAYS;

  if (open) return <EssayView essay={open} onBack={() => setOpen(null)} />;

  return (
    <div className="space-y-5">
      <Card>
        <RuleFilter value={rules} onChange={setRules} />
      </Card>
      <ul className="grid gap-3 md:grid-cols-2">
        {list.map((e) => {
          const done = progress.answers[e.id];
          return (
            <li key={e.id}>
              <button
                type="button"
                onClick={() => setOpen(e)}
                className="flex h-full w-full flex-col rounded-2xl border border-line bg-surface p-4 text-left hover:border-accent/40"
              >
                <div className="flex w-full items-center justify-between gap-2">
                  <RuleChip rule={e.rule} />
                  {done && (
                    <span className={cx("text-xs font-semibold", done.r ? "text-good" : "text-gold")}>
                      {done.r ? "✓ Done" : "Attempted"}
                    </span>
                  )}
                </div>
                <p className="mt-2 font-semibold">{e.title}</p>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{e.facts}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function EssayView({ essay, onBack }: { essay: Essay; onBack: () => void }) {
  const [draft, setDraft] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [checks, setChecks] = useState<boolean[]>(essay.points.map(() => false));
  const got = checks.filter(Boolean).length;

  return (
    <div className="mx-auto max-w-3xl">
      <button type="button" onClick={onBack} className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink">
        <Icon name="left" className="size-4" /> All problems
      </button>
      <Card>
        <RuleChip rule={essay.rule} />
        <h2 className="mt-2 font-serif text-2xl font-bold">{essay.title}</h2>
        <p className="mt-3 text-[16px] leading-relaxed">{essay.facts}</p>
        <p className="mt-3 text-[16px] font-semibold">{essay.question}</p>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          rows={7}
          placeholder="Write your answer (Answer, Legal basis, Application, Conclusion)…"
          className="mt-4 w-full rounded-xl border border-line bg-bg p-3 text-base leading-relaxed outline-none focus:border-accent"
        />
        {!revealed && (
          <Button className="mt-3 w-full" onClick={() => setRevealed(true)}>
            <Icon name="eye" className="size-4" /> Show suggested answer
          </Button>
        )}
      </Card>

      {revealed && (
        <Card className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">Suggested answer</p>
          <p className="mt-2 text-[16px] leading-relaxed">{essay.answer}</p>
          <p className="mt-5 text-sm font-semibold">Key points — tick what your answer covered</p>
          <ul className="mt-2 space-y-2">
            {essay.points.map((pt, idx) => (
              <li key={pt}>
                <label className={cx("flex cursor-pointer items-start gap-3 rounded-xl border px-3 py-2.5", checks[idx] ? "border-good bg-good-soft" : "border-line")}>
                  <input
                    type="checkbox"
                    checked={checks[idx]}
                    onChange={(e) => setChecks((c) => c.map((v, j) => (j === idx ? e.target.checked : v)))}
                    className="mt-1 size-4 accent-[var(--good)]"
                  />
                  <span className="text-[15px]">{pt}</span>
                </label>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-sm text-muted">
              Covered {got}/{essay.points.length}
            </p>
            <Button
              onClick={() => {
                recordAnswer(essay.id, got / essay.points.length >= 0.6, "essay");
                onBack();
              }}
            >
              Save & finish
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
