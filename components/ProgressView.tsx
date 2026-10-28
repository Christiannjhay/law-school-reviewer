"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, Card } from "@/components/ui";
import { RULES } from "@/data/rules";
import { CASES, ESSAYS, FLASHCARDS, IDENTIFICATION, MCQS, MNEMONICS, PERIODS, TRUE_FALSE } from "@/lib/content";
import { resetProgress, useProgress } from "@/lib/store";
import type { RuleId } from "@/lib/types";
import { cx, formatTime } from "@/lib/util";

const ALL = [...FLASHCARDS, ...MCQS, ...TRUE_FALSE, ...IDENTIFICATION, ...MNEMONICS, ...CASES, ...PERIODS, ...ESSAYS];
const RULE_OF = new Map<string, RuleId>(ALL.map((x) => [x.id, x.rule]));

const MODES: { mode: string; label: string; total: number }[] = [
  { mode: "flashcards", label: "Flashcards", total: FLASHCARDS.length },
  { mode: "quiz", label: "Multiple choice", total: MCQS.length },
  { mode: "truefalse", label: "True or False", total: TRUE_FALSE.length },
  { mode: "identification", label: "Identification", total: IDENTIFICATION.length },
  { mode: "mnemonics", label: "Mnemonics", total: MNEMONICS.length },
  { mode: "cases", label: "Cases", total: CASES.length },
  { mode: "periods", label: "Periods", total: PERIODS.length },
  { mode: "essay", label: "Essays", total: ESSAYS.length },
];

export function ProgressView() {
  const p = useProgress();
  const [confirm, setConfirm] = useState(false);

  const perRule = new Map<RuleId, { r: number; w: number }>();
  const perMode = new Map<string, { seen: number; r: number; w: number }>();
  for (const [id, a] of Object.entries(p.answers)) {
    const rule = RULE_OF.get(id);
    if (rule) {
      const e = perRule.get(rule) ?? { r: 0, w: 0 };
      e.r += a.r;
      e.w += a.w;
      perRule.set(rule, e);
    }
    const m = perMode.get(a.mode) ?? { seen: 0, r: 0, w: 0 };
    m.seen++;
    m.r += a.r;
    m.w += a.w;
    perMode.set(a.mode, m);
  }

  return (
    <div className="space-y-5">
      <Card>
        <p className="mb-3 font-semibold">Accuracy by rule</p>
        <div className="space-y-2.5">
          {RULES.map((r) => {
            const e = perRule.get(r.id);
            const t = e ? e.r + e.w : 0;
            const pct = t ? Math.round((e!.r / t) * 100) : 0;
            return (
              <Link key={r.id} href={`/rules/${r.id}`} className="flex items-center gap-3 text-sm">
                <span className="w-20 shrink-0">
                  <span className="font-semibold">Rule {r.id}</span>
                  {p.readRules.includes(r.id) && <span className="ml-1 text-good">✓</span>}
                </span>
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-surface-2">
                  {t > 0 && <div className={cx("h-full rounded-full", pct >= 75 ? "bg-good" : pct >= 50 ? "bg-gold" : "bg-bad")} style={{ width: `${pct}%` }} />}
                </div>
                <span className="w-12 shrink-0 text-right tabular-nums text-muted">{t ? `${pct}%` : "—"}</span>
              </Link>
            );
          })}
        </div>
      </Card>

      <Card>
        <p className="mb-3 font-semibold">Coverage by format</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {MODES.map((m) => {
            const e = perMode.get(m.mode);
            const seen = e?.seen ?? 0;
            return (
              <div key={m.mode} className="rounded-xl bg-surface-2 p-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-semibold">{m.label}</span>
                  <span className="text-xs tabular-nums text-muted">
                    {seen}/{m.total} seen
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${Math.min(100, (seen / m.total) * 100)}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card>
        <p className="mb-3 font-semibold">Exam history</p>
        {p.exams.length === 0 ? (
          <p className="text-sm text-muted">
            No exams yet.{" "}
            <Link href="/exam" className="font-semibold text-accent">
              Take one →
            </Link>
          </p>
        ) : (
          <ul className="divide-y divide-line">
            {p.exams.map((e) => {
              const pct = Math.round((e.score / e.total) * 100);
              return (
                <li key={e.at} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                  <span>
                    <span className="block font-medium">{new Date(e.at).toLocaleString()}</span>
                    <span className="text-xs text-muted">
                      {e.rules.length ? `Rules ${e.rules.join(", ")}` : "All rules"} · {formatTime(e.seconds)}
                    </span>
                  </span>
                  <span className={cx("font-serif text-lg font-bold tabular-nums", pct >= 75 ? "text-good" : "text-bad")}>
                    {pct}%
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </Card>

      <Card>
        <p className="font-semibold">Reset progress</p>
        <p className="text-sm text-muted">Progress is saved only on this device. Resetting clears answers, flashcard boxes, bookmarks and exam history.</p>
        {confirm ? (
          <div className="mt-3 flex gap-2">
            <Button
              className="bg-bad"
              onClick={() => {
                resetProgress();
                setConfirm(false);
              }}
            >
              Yes, reset everything
            </Button>
            <Button variant="secondary" onClick={() => setConfirm(false)}>
              Cancel
            </Button>
          </div>
        ) : (
          <Button variant="secondary" className="mt-3" onClick={() => setConfirm(true)}>
            Reset…
          </Button>
        )}
      </Card>
    </div>
  );
}
