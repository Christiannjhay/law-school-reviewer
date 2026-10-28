"use client";

import { useState } from "react";
import { Card, RuleChip, RuleFilter, Segmented } from "@/components/ui";
import { COMPARISONS } from "@/lib/content";
import type { Comparison, RuleId } from "@/lib/types";
import { cx } from "@/lib/util";

export function CompareView() {
  const [rules, setRules] = useState<RuleId[]>([]);
  const [cover, setCover] = useState<"off" | "on">("off");
  const list = rules.length ? COMPARISONS.filter((c) => rules.includes(c.rule)) : COMPARISONS;

  return (
    <div className="space-y-5">
      <Card className="space-y-5">
        <RuleFilter value={rules} onChange={setRules} />
        <Segmented
          label="Cover mode (hide answers; tap a cell to reveal)"
          value={cover}
          onChange={setCover}
          options={[
            { value: "off", label: "Show all" },
            { value: "on", label: "Cover answers" },
          ]}
        />
      </Card>
      {list.map((c) => (
        <CompareTable key={`${c.id}-${cover}`} c={c} cover={cover === "on"} />
      ))}
    </div>
  );
}

function CompareTable({ c, cover }: { c: Comparison; cover: boolean }) {
  const [open, setOpen] = useState<Set<string>>(new Set());

  function cell(r: number, k: number, text: string) {
    const key = `${r}-${k}`;
    if (cover && k > 0 && !open.has(key)) {
      return (
        <button
          type="button"
          onClick={() => setOpen((s) => new Set(s).add(key))}
          className="min-h-9 w-full rounded-lg bg-surface-2 px-2 text-xs font-semibold text-muted"
        >
          Tap to reveal
        </button>
      );
    }
    return text;
  }

  return (
    <section className="rounded-2xl border border-line bg-surface">
      <div className="flex items-start justify-between gap-2 px-4 pt-4">
        <h2 className="font-semibold">{c.title}</h2>
        <RuleChip rule={c.rule} />
      </div>

      {/* Phones: one stacked block per row */}
      <div className="mt-3 divide-y divide-line border-t border-line sm:hidden">
        {c.rows.map((row, r) => (
          <div key={r} className="px-4 py-3">
            <p className="font-semibold">{row[0] || c.headers[0]}</p>
            <dl className="mt-1.5 space-y-2">
              {row.slice(1).map((text, j) => (
                <div key={j} className="rounded-lg bg-bg px-3 py-2">
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-accent">{c.headers[j + 1]}</dt>
                  <dd className="mt-0.5 text-sm">{cell(r, j + 1, text)}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <div className="mt-3 hidden overflow-x-auto sm:block">
        <table className="w-full min-w-[32rem] border-collapse text-sm">
          <thead>
            <tr>
              {c.headers.map((h, i) => (
                <th key={i} className="border-y border-line bg-surface-2 px-4 py-2.5 text-left font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.rows.map((row, r) => (
              <tr key={r} className="align-top">
                {row.map((text, k) => (
                  <td key={k} className={cx("border-b border-line px-4 py-2.5", k === 0 && "font-medium")}>
                    {cell(r, k, text)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
