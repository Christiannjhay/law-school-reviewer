"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { RuleChip } from "@/components/ui";
import { NOTES } from "@/data/notes";
import { RULE_IDS, type RuleId } from "@/lib/types";
import { CASES, FLASHCARDS, MNEMONICS, PERIODS } from "@/lib/content";
import { normalize } from "@/lib/util";

interface Hit {
  key: string;
  rule: RuleId;
  kind: string;
  title: string;
  body: string;
  href: string;
}

// Split notes into bullet/paragraph-sized chunks so results are readable.
const NOTE_CHUNKS: Hit[] = RULE_IDS.flatMap((rule) =>
  NOTES[rule]
    .split("\n")
    .map((l) => l.replace(/^[#>\-\d.\s|]+/, "").replace(/\*\*|\*|\|/g, " ").trim())
    .filter((l) => l.length > 25)
    .map((l, i) => ({ key: `n-${rule}-${i}`, rule, kind: "Notes", title: `Rule ${rule}`, body: l, href: `/rules/${rule}` })),
);

const INDEX: Hit[] = [
  ...NOTE_CHUNKS,
  ...CASES.map((c) => ({ key: c.id, rule: c.rule, kind: "Case", title: c.name, body: c.doctrine, href: "/cases" })),
  ...MNEMONICS.map((m) => ({ key: m.id, rule: m.rule, kind: "Mnemonic", title: `${m.topic} — ${m.mnemonic}`, body: m.items.join(" · "), href: "/mnemonics" })),
  ...FLASHCARDS.map((f) => ({ key: f.id, rule: f.rule, kind: "Q&A", title: f.q, body: f.a, href: "/flashcards" })),
  ...PERIODS.map((p) => ({ key: p.id, rule: p.rule, kind: "Period", title: p.q, body: p.answer, href: "/periods" })),
];

const SEARCHABLE = INDEX.map((h) => normalize(`${h.title} ${h.body}`));

function highlight(text: string, terms: string[]) {
  if (!terms.length) return text;
  const re = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  return text.split(re).map((part, i) =>
    i % 2 ? (
      <mark key={i} className="rounded bg-gold-soft px-0.5 text-ink">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

export function SearchView() {
  const [q, setQ] = useState("");
  const terms = useMemo(() => normalize(q).split(" ").filter((t) => t.length > 1), [q]);
  const results = useMemo(() => {
    if (!terms.length) return [];
    return INDEX.filter((_, i) => terms.every((t) => SEARCHABLE[i].includes(t))).slice(0, 80);
  }, [terms]);

  return (
    <div>
      <input
        type="search"
        autoFocus
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="e.g. demurrer, Cagang, 60 days, plain view…"
        className="h-12 w-full rounded-xl border border-line bg-surface px-4 text-base outline-none focus:border-accent"
      />
      {terms.length > 0 && <p className="mt-3 text-sm text-muted">{results.length === 80 ? "80+" : results.length} results</p>}
      <ul className="mt-3 space-y-2.5">
        {results.map((h) => (
          <li key={h.key}>
            <Link href={h.href} className="block rounded-xl border border-line bg-surface p-3.5 hover:border-accent/40">
              <div className="flex items-center gap-2">
                <RuleChip rule={h.rule} />
                <span className="text-xs font-semibold text-muted">{h.kind}</span>
              </div>
              <p className="mt-1.5 font-semibold leading-snug">{highlight(h.title, terms)}</p>
              <p className="mt-0.5 text-sm text-ink/75">{highlight(h.body, terms)}</p>
            </Link>
          </li>
        ))}
      </ul>
      {!terms.length && (
        <div className="mt-6 flex flex-wrap gap-2">
          {["double jeopardy", "demurrer", "plea bargaining", "Cagang", "plain view", "provisional dismissal", "15 days", "state witness"].map((s) => (
            <button key={s} type="button" onClick={() => setQ(s)} className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm">
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
