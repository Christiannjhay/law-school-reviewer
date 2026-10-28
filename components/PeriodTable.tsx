"use client";

import { useState } from "react";
import { RuleChip, Segmented } from "@/components/ui";
import { PERIODS } from "@/lib/content";
import { cx } from "@/lib/util";

export function PeriodTable() {
  const [hide, setHide] = useState<"show" | "hide">("show");
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  return (
    <section className="mt-10">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-serif text-xl font-bold">All periods at a glance</h2>
          <p className="text-sm text-muted">Hide the answers and tap each one to self-test.</p>
        </div>
        <div className="w-48">
          <Segmented
            value={hide}
            onChange={(v) => {
              setHide(v);
              setRevealed(new Set());
            }}
            options={[
              { value: "show", label: "Show" },
              { value: "hide", label: "Hide" },
            ]}
          />
        </div>
      </div>
      <ul className="mt-4 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
        {PERIODS.map((p) => {
          const shown = hide === "show" || revealed.has(p.id);
          return (
            <li key={p.id} className="flex items-center gap-3 px-4 py-3">
              <div className="min-w-0 flex-1">
                <RuleChip rule={p.rule} />
                <p className="mt-1 text-[15px] leading-snug">{p.q}</p>
              </div>
              <button
                type="button"
                onClick={() => setRevealed((s) => new Set(s).add(p.id))}
                className={cx(
                  "min-h-10 min-w-24 shrink-0 rounded-lg px-3 text-right text-sm font-bold tabular-nums",
                  shown ? "text-accent" : "bg-surface-2 text-center text-muted",
                )}
              >
                {shown ? p.answer : "Tap"}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
