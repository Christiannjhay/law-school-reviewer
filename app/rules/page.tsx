import type { Metadata } from "next";
import Link from "next/link";
import { ReadBadge } from "@/components/ReadBadge";
import { PageHeader } from "@/components/ui";
import { RULES } from "@/data/rules";
import { countForRule } from "@/lib/content";

export const metadata: Metadata = { title: "Study notes" };

export default function RulesPage() {
  return (
    <>
      <PageHeader eyebrow="Study" title="Study notes">
        The complete reviewer, rule by rule: provisions, doctrines, leading cases and mnemonic callouts.
      </PageHeader>
      <div className="grid gap-3 sm:grid-cols-2">
        {RULES.map((r) => (
          <Link
            key={r.id}
            href={`/rules/${r.id}`}
            className="group flex gap-4 rounded-2xl border border-line bg-surface p-4 transition hover:border-accent/40 hover:shadow-sm"
          >
            <div className="grid size-14 shrink-0 place-items-center rounded-xl bg-accent-soft font-serif text-xl font-bold text-accent">
              {r.id}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="font-semibold group-hover:text-accent">{r.title}</h2>
                <ReadBadge rule={r.id} />
              </div>
              <p className="mt-0.5 line-clamp-2 text-sm text-muted">{r.blurb}</p>
              <p className="mt-1.5 text-xs font-medium text-gold">{countForRule(r.id)} practice items</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
