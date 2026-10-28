"use client";

import Link from "next/link";
import { Icon } from "@/components/icons";
import { RULES } from "@/data/rules";
import { useProgress, weakIds } from "@/lib/store";

export function DashboardStats() {
  const p = useProgress();
  const answers = Object.values(p.answers);
  const attempts = answers.reduce((n, a) => n + a.r + a.w, 0);
  const right = answers.reduce((n, a) => n + a.r, 0);
  const acc = attempts ? Math.round((right / attempts) * 100) : null;
  const weak = weakIds(p).length;
  const mastered = Object.values(p.boxes).filter((b) => b >= 4).length;
  const lastExam = p.exams[0];

  const stats = [
    { label: "Day streak", value: p.streak.days || 0, icon: "flame" as const },
    { label: "Accuracy", value: acc === null ? "—" : `${acc}%`, icon: "target" as const },
    { label: "Cards mastered", value: mastered, icon: "cards" as const },
    { label: "Rules read", value: `${p.readRules.length}/${RULES.length}`, icon: "book" as const },
  ];

  return (
    <section className="mt-6">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-line bg-surface p-4">
            <Icon name={s.icon} className="size-5 text-gold" />
            <p className="mt-2 font-serif text-2xl font-bold tabular-nums">{s.value}</p>
            <p className="text-xs text-muted">{s.label}</p>
          </div>
        ))}
      </div>
      {(weak > 0 || lastExam) && (
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {weak > 0 && (
            <Link href="/review" className="flex items-center justify-between rounded-2xl border border-bad/30 bg-bad-soft p-4">
              <span>
                <span className="block font-semibold text-bad">{weak} items to review</span>
                <span className="text-sm text-ink/70">Questions you missed more than you got right</span>
              </span>
              <Icon name="right" className="text-bad" />
            </Link>
          )}
          {lastExam && (
            <Link href="/progress" className="flex items-center justify-between rounded-2xl border border-line bg-surface p-4">
              <span>
                <span className="block font-semibold">
                  Last exam: {lastExam.score}/{lastExam.total} ({Math.round((lastExam.score / lastExam.total) * 100)}%)
                </span>
                <span className="text-sm text-muted">See your history</span>
              </span>
              <Icon name="right" className="text-muted" />
            </Link>
          )}
        </div>
      )}
    </section>
  );
}
