"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import { Button, Card, ProgressBar, RuleChip } from "@/components/ui";
import type { ChoiceQ } from "@/lib/questions";
import { recordAnswer, type Mode } from "@/lib/store";
import { cx } from "@/lib/util";

const LETTERS = ["A", "B", "C", "D", "E"];

/** Practice runner with instant feedback after each answer. */
export function ChoiceRunner({
  questions,
  mode,
  onExit,
  onRetry,
}: {
  questions: ChoiceQ[];
  mode: Mode;
  onExit: () => void;
  onRetry?: (missed: ChoiceQ[]) => void;
}) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [results, setResults] = useState<boolean[]>([]);
  const q = questions[i];
  const done = i >= questions.length;

  function choose(idx: number) {
    if (picked !== null || !q) return;
    setPicked(idx);
    const ok = idx === q.answer;
    setResults((r) => [...r, ok]);
    recordAnswer(q.id, ok, mode);
  }

  function next() {
    setPicked(null);
    setI((n) => n + 1);
  }

  // Keyboard support for iPad keyboards and desktop: 1-4 / A-D to answer, Enter to continue.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (done || !q) return;
      if (picked === null) {
        const k = e.key.toLowerCase();
        const n = "1234".indexOf(k) >= 0 ? Number(k) - 1 : "abcd".indexOf(k);
        if (n >= 0 && n < q.choices.length) choose(n);
        if (q.choices.length === 2 && (k === "t" || k === "f")) choose(k === "t" ? 0 : 1);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        next();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (done) {
    const score = results.filter(Boolean).length;
    const missed = questions.filter((_, idx) => !results[idx]);
    const pct = Math.round((score / questions.length) * 100);
    return (
      <Card className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted">Session complete</p>
        <p className="mt-2 font-serif text-5xl font-bold">
          {score}
          <span className="text-2xl text-muted">/{questions.length}</span>
        </p>
        <p className={cx("mt-1 font-semibold", pct >= 75 ? "text-good" : pct >= 50 ? "text-gold" : "text-bad")}>
          {pct}% {pct >= 75 ? "· Passing" : pct >= 50 ? "· Almost there" : "· Keep reviewing"}
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
          {missed.length > 0 && onRetry && (
            <Button onClick={() => onRetry(missed)}>
              <Icon name="refresh" className="size-4" /> Retry {missed.length} missed
            </Button>
          )}
          <Button variant="secondary" onClick={onExit}>
            New session
          </Button>
        </div>
        {missed.length > 0 && (
          <div className="mt-8 space-y-3 text-left">
            <p className="text-sm font-semibold">Review what you missed</p>
            {missed.map((m) => (
              <div key={m.id} className="rounded-xl border border-line bg-bg p-3">
                <RuleChip rule={m.rule} />
                <p className="mt-1.5 text-[15px] font-medium">{m.prompt}</p>
                <p className="mt-1 text-sm text-good">✓ {m.choices[m.answer]}</p>
                {m.explain && <p className="mt-1 text-sm text-muted">{m.explain}</p>}
              </div>
            ))}
          </div>
        )}
      </Card>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <button type="button" onClick={onExit} className="grid size-10 shrink-0 place-items-center rounded-full hover:bg-surface-2" aria-label="End session">
          <Icon name="x" />
        </button>
        <ProgressBar value={i} max={questions.length} />
        <span className="shrink-0 text-sm tabular-nums text-muted">
          {i + 1}/{questions.length}
        </span>
      </div>

      <Card>
        <div className="flex flex-wrap items-center gap-2">
          <RuleChip rule={q.rule} />
          <span className="text-xs font-medium text-muted">{q.kind}</span>
        </div>
        <p className="mt-3 text-lg font-semibold leading-snug sm:text-xl">{q.prompt}</p>

        <div className={cx("mt-5 grid gap-2.5", q.choices.length === 2 && "grid-cols-2")}>
          {q.choices.map((c, idx) => {
            const isAnswer = idx === q.answer;
            const isPicked = idx === picked;
            const revealed = picked !== null;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => choose(idx)}
                disabled={revealed}
                className={cx(
                  "flex min-h-12 items-start gap-3 rounded-xl border px-3.5 py-3 text-left text-[15px] transition",
                  !revealed && "border-line bg-bg hover:border-accent/50 hover:bg-accent-soft/40",
                  revealed && isAnswer && "border-good bg-good-soft",
                  revealed && isPicked && !isAnswer && "border-bad bg-bad-soft",
                  revealed && !isAnswer && !isPicked && "border-line opacity-60",
                  q.choices.length === 2 && "justify-center text-center font-semibold",
                )}
              >
                {q.choices.length > 2 && (
                  <span
                    className={cx(
                      "grid size-6 shrink-0 place-items-center rounded-md text-xs font-bold",
                      revealed && isAnswer ? "bg-good text-white" : revealed && isPicked ? "bg-bad text-white" : "bg-surface-2 text-muted",
                    )}
                  >
                    {LETTERS[idx]}
                  </span>
                )}
                <span>{c}</span>
              </button>
            );
          })}
        </div>

        {picked !== null && (
          <div className={cx("mt-4 rounded-xl p-3.5", picked === q.answer ? "bg-good-soft" : "bg-bad-soft")}>
            <p className={cx("flex items-center gap-1.5 font-semibold", picked === q.answer ? "text-good" : "text-bad")}>
              <Icon name={picked === q.answer ? "check" : "x"} className="size-4" />
              {picked === q.answer ? "Correct" : `Answer: ${q.choices[q.answer]}`}
            </p>
            {q.explain && <p className="mt-1 text-sm text-ink/80">{q.explain}</p>}
          </div>
        )}
      </Card>

      {picked !== null && (
        <div className="sticky bottom-20 mt-4 lg:bottom-4">
          <Button onClick={next} className="w-full shadow-lg">
            {i + 1 === questions.length ? "See results" : "Next"} <Icon name="right" className="size-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
