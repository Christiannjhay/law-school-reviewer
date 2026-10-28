"use client";

import { useMemo, useState } from "react";
import { ChoicePractice } from "@/components/ChoicePractice";
import { RuleChip, Segmented } from "@/components/ui";
import { CASES } from "@/lib/content";
import { normalize } from "@/lib/util";

export function CasesView() {
  const [tab, setTab] = useState<"quiz" | "browse">("quiz");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const n = normalize(q);
    return n ? CASES.filter((c) => normalize(`${c.name} ${c.doctrine} ${c.rule}`).includes(n)) : CASES;
  }, [q]);

  return (
    <div className="space-y-5">
      <Segmented
        value={tab}
        onChange={setTab}
        options={[
          { value: "quiz", label: "Quiz" },
          { value: "browse", label: `Browse (${CASES.length})` },
        ]}
      />
      {tab === "quiz" ? (
        <ChoicePractice sources={["cases"]} mode="cases" />
      ) : (
        <div>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search cases or doctrines…"
            className="h-12 w-full rounded-xl border border-line bg-surface px-4 text-base outline-none focus:border-accent"
          />
          <ul className="mt-4 grid gap-2.5 md:grid-cols-2">
            {list.map((c) => (
              <li key={c.id} className="rounded-xl border border-line bg-surface p-3.5">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold italic">{c.name}</p>
                  <RuleChip rule={c.rule} />
                </div>
                <p className="mt-1 text-sm text-ink/80">{c.doctrine}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
