"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { Button, Card, RuleChip, RuleFilter, Segmented } from "@/components/ui";
import { buildChoiceSet, poolCount, type ChoiceQ, type Source } from "@/lib/questions";
import { addExam, recordAnswer } from "@/lib/store";
import type { RuleId } from "@/lib/types";
import { cx, formatTime } from "@/lib/util";

const ALL_SOURCES: { value: Source; label: string }[] = [
  { value: "mcq", label: "Multiple choice" },
  { value: "tf", label: "True or False" },
  { value: "cases", label: "Case doctrines" },
  { value: "periods", label: "Periods" },
];

type Phase = "setup" | "running" | "results";

export function MockExam() {
  const [rules, setRules] = useState<RuleId[]>([]);
  const [sources, setSources] = useState<Source[]>(["mcq", "tf", "cases", "periods"]);
  const [count, setCount] = useState(50);
  const [minutes, setMinutes] = useState(60);
  const [phase, setPhase] = useState<Phase>("setup");
  const [qs, setQs] = useState<ChoiceQ[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [flags, setFlags] = useState<boolean[]>([]);
  const [cur, setCur] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const [now, setNow] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [filter, setFilter] = useState<"all" | "wrong">("wrong");

  const available = poolCount(sources, rules);
  const elapsed = Math.floor((now - startedAt) / 1000);
  const remaining = minutes ? minutes * 60 - elapsed : null;

  function start() {
    const set = buildChoiceSet(sources, rules, count);
    setQs(set);
    setAnswers(set.map(() => null));
    setFlags(set.map(() => false));
    setCur(0);
    const t = Date.now();
    setStartedAt(t);
    setNow(t);
    setPhase("running");
  }

  function submit() {
    const score = qs.filter((q, i) => answers[i] === q.answer).length;
    qs.forEach((q, i) => recordAnswer(q.id, answers[i] === q.answer, "exam"));
    addExam({ at: Date.now(), score, total: qs.length, rules, seconds: Math.floor((Date.now() - startedAt) / 1000) });
    setPhase("results");
    window.scrollTo({ top: 0 });
  }

  // Keep the latest submit for the timer callback, which is created once per exam.
  const submitRef = useRef(submit);
  useEffect(() => {
    submitRef.current = submit;
  });

  useEffect(() => {
    if (phase !== "running") return;
    const t = setInterval(() => {
      const t2 = Date.now();
      setNow(t2);
      if (minutes && t2 - startedAt >= minutes * 60 * 1000) submitRef.current();
    }, 1000);
    return () => clearInterval(t);
  }, [phase, minutes, startedAt]);

  if (phase === "setup") {
    return (
      <Card className="space-y-6">
        <RuleFilter value={rules} onChange={setRules} />
        <div>
          <p className="mb-2 text-sm font-semibold">Question types</p>
          <div className="grid grid-cols-2 gap-2">
            {ALL_SOURCES.map((s) => {
              const on = sources.includes(s.value);
              return (
                <button
                  key={s.value}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setSources((v) => (on ? v.filter((x) => x !== s.value) : [...v, s.value]))}
                  className={cx("min-h-11 rounded-xl border px-3 text-sm font-medium", on ? "border-accent bg-accent-soft text-accent" : "border-line")}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>
        <Segmented
          label="Items"
          value={count}
          onChange={setCount}
          options={[
            { value: 25, label: "25" },
            { value: 50, label: "50" },
            { value: 100, label: "100" },
          ]}
        />
        <Segmented
          label="Time limit"
          value={minutes}
          onChange={setMinutes}
          options={[
            { value: 30, label: "30 min" },
            { value: 60, label: "1 hr" },
            { value: 120, label: "2 hr" },
            { value: 0, label: "None" },
          ]}
        />
        <Button className="w-full" onClick={start} disabled={!sources.length || !available}>
          Begin exam · {Math.min(count, available)} items
        </Button>
        <p className="text-center text-xs text-muted">Answers are not revealed until you submit. You can flag items and jump around.</p>
      </Card>
    );
  }

  if (phase === "results") {
    const score = qs.filter((q, i) => answers[i] === q.answer).length;
    const pct = Math.round((score / qs.length) * 100);
    const byRule = new Map<RuleId, { r: number; t: number }>();
    qs.forEach((q, i) => {
      const e = byRule.get(q.rule) ?? { r: 0, t: 0 };
      e.t++;
      if (answers[i] === q.answer) e.r++;
      byRule.set(q.rule, e);
    });
    const shown = qs.map((q, i) => ({ q, i })).filter(({ q, i }) => filter === "all" || answers[i] !== q.answer);

    return (
      <div className="space-y-5">
        <Card className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted">Exam result</p>
          <p className="mt-2 font-serif text-6xl font-bold">{pct}%</p>
          <p className="mt-1 text-muted">
            {score} of {qs.length} correct · {formatTime(Math.min(elapsed, minutes ? minutes * 60 : elapsed))}
          </p>
          <p className={cx("mt-2 font-semibold", pct >= 75 ? "text-good" : "text-bad")}>{pct >= 75 ? "Passed (75%)" : "Below 75% — review the misses below"}</p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Button onClick={() => setPhase("setup")}>New exam</Button>
          </div>
        </Card>

        <Card>
          <p className="mb-3 text-sm font-semibold">Score by rule</p>
          <div className="space-y-2">
            {[...byRule.entries()]
              .sort((a, b) => a[0] - b[0])
              .map(([rule, e]) => {
                const p = Math.round((e.r / e.t) * 100);
                return (
                  <div key={rule} className="flex items-center gap-3 text-sm">
                    <span className="w-16 shrink-0 font-semibold">Rule {rule}</span>
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-surface-2">
                      <div className={cx("h-full rounded-full", p >= 75 ? "bg-good" : p >= 50 ? "bg-gold" : "bg-bad")} style={{ width: `${p}%` }} />
                    </div>
                    <span className="w-14 shrink-0 text-right tabular-nums text-muted">
                      {e.r}/{e.t}
                    </span>
                  </div>
                );
              })}
          </div>
        </Card>

        <Segmented
          value={filter}
          onChange={setFilter}
          options={[
            { value: "wrong", label: `Wrong (${qs.length - score})` },
            { value: "all", label: `All (${qs.length})` },
          ]}
        />
        <div className="space-y-3">
          {shown.map(({ q, i }) => {
            const a = answers[i];
            const ok = a === q.answer;
            return (
              <Card key={q.id}>
                <div className="flex items-center gap-2">
                  <span className={cx("grid size-6 place-items-center rounded-full text-xs font-bold text-white", ok ? "bg-good" : "bg-bad")}>{i + 1}</span>
                  <RuleChip rule={q.rule} />
                  <span className="text-xs text-muted">{q.kind}</span>
                </div>
                <p className="mt-2 font-semibold">{q.prompt}</p>
                {!ok && <p className="mt-2 text-sm text-bad">Your answer: {a === null ? "— (blank)" : q.choices[a]}</p>}
                <p className="mt-1 text-sm text-good">Correct: {q.choices[q.answer]}</p>
                {q.explain && <p className="mt-1 text-sm text-muted">{q.explain}</p>}
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  const q = qs[cur];
  const answered = answers.filter((a) => a !== null).length;

  return (
    <div>
      <div className="sticky top-[65px] z-20 -mx-4 mb-4 flex items-center justify-between gap-3 border-b border-line bg-bg/90 px-4 py-2.5 backdrop-blur lg:top-0">
        <button type="button" onClick={() => setShowGrid((s) => !s)} className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-semibold hover:bg-surface-2">
          <Icon name="grid" className="size-4" /> {answered}/{qs.length} answered
        </button>
        {remaining !== null && (
          <span className={cx("flex items-center gap-1.5 font-mono text-sm font-bold tabular-nums", remaining < 300 ? "text-bad" : "text-ink")}>
            <Icon name="clock" className="size-4" /> {formatTime(Math.max(0, remaining))}
          </span>
        )}
      </div>

      {showGrid && (
        <Card className="mb-4">
          <div className="grid grid-cols-8 gap-1.5 sm:grid-cols-10 md:grid-cols-[repeat(15,minmax(0,1fr))]">
            {qs.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setCur(i);
                  setShowGrid(false);
                }}
                className={cx(
                  "relative aspect-square rounded-lg text-xs font-semibold tabular-nums",
                  i === cur ? "ring-2 ring-accent" : "",
                  answers[i] !== null ? "bg-accent text-white dark:text-[#1b0a10]" : "bg-surface-2 text-muted",
                )}
              >
                {i + 1}
                {flags[i] && <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-gold" />}
              </button>
            ))}
          </div>
        </Card>
      )}

      <Card>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">#{cur + 1}</span>
            <RuleChip rule={q.rule} />
          </div>
          <button
            type="button"
            onClick={() => setFlags((f) => f.map((v, i) => (i === cur ? !v : v)))}
            className={cx("flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold", flags[cur] ? "bg-gold-soft text-gold" : "text-muted hover:bg-surface-2")}
          >
            <Icon name="bookmark" className={cx("size-3.5", flags[cur] && "fill-current")} /> {flags[cur] ? "Flagged" : "Flag"}
          </button>
        </div>
        <p className="mt-3 text-lg font-semibold leading-snug">{q.prompt}</p>
        <div className={cx("mt-5 grid gap-2.5", q.choices.length === 2 && "grid-cols-2")}>
          {q.choices.map((c, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setAnswers((a) => a.map((v, i) => (i === cur ? idx : v)))}
              className={cx(
                "min-h-12 rounded-xl border px-3.5 py-3 text-left text-[15px] transition",
                answers[cur] === idx ? "border-accent bg-accent-soft font-medium" : "border-line bg-bg hover:border-accent/40",
                q.choices.length === 2 && "text-center font-semibold",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </Card>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <Button variant="secondary" onClick={() => setCur((c) => Math.max(0, c - 1))} disabled={cur === 0}>
          <Icon name="left" className="size-4" /> Previous
        </Button>
        {cur < qs.length - 1 ? (
          <Button onClick={() => setCur((c) => c + 1)}>
            Next <Icon name="right" className="size-4" />
          </Button>
        ) : (
          <Button onClick={submit}>Submit exam</Button>
        )}
      </div>
      {cur < qs.length - 1 && (
        <button type="button" onClick={submit} className="mt-4 w-full text-center text-sm font-semibold text-accent">
          Submit now ({qs.length - answered} unanswered)
        </button>
      )}
    </div>
  );
}
