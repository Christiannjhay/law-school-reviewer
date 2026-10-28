import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";
import { RULES } from "@/data/rules";
import { MNEMONICS, PERIODS } from "@/lib/content";

export const metadata: Metadata = { title: "Cram sheet" };

export default function CramPage() {
  return (
    <>
      <PageHeader eyebrow="Study" title="Cram sheet">
        Every mnemonic and key period, grouped by rule. Built for the last hour before the exam.
      </PageHeader>
      <nav className="no-scrollbar sticky top-[65px] z-20 -mx-4 mb-6 flex gap-2 overflow-x-auto border-b border-line bg-bg/90 px-4 py-2 backdrop-blur lg:top-0">
        {RULES.map((r) => (
          <a key={r.id} href={`#r${r.id}`} className="shrink-0 rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-semibold">
            {r.id}
          </a>
        ))}
      </nav>
      <div className="space-y-8">
        {RULES.map((r) => {
          const ms = MNEMONICS.filter((m) => m.rule === r.id);
          const ps = PERIODS.filter((p) => p.rule === r.id);
          return (
            <section key={r.id} id={`r${r.id}`} className="scroll-mt-32 lg:scroll-mt-8">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="font-serif text-xl font-bold">
                  <span className="text-accent">Rule {r.id}</span> · {r.title}
                </h2>
                <Link href={`/rules/${r.id}`} className="shrink-0 text-sm font-semibold text-accent">
                  Notes →
                </Link>
              </div>
              {ms.length > 0 && (
                <div className="mt-3 overflow-hidden rounded-2xl border border-line bg-surface">
                  {ms.map((m) => (
                    <div key={m.id} className="border-b border-line px-4 py-3 last:border-0 sm:grid sm:grid-cols-[14rem_1fr] sm:gap-4">
                      <p className="text-sm font-semibold text-muted">{m.topic}</p>
                      <div>
                        <p className="font-serif font-bold text-accent">{m.mnemonic}</p>
                        <p className="mt-0.5 text-sm text-ink/80">{m.items.join(" · ")}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {ps.length > 0 && (
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {ps.map((p) => (
                    <div key={p.id} className="flex items-center justify-between gap-3 rounded-xl bg-surface-2 px-3 py-2 text-sm">
                      <span>{p.q}</span>
                      <span className="shrink-0 font-bold text-accent tabular-nums">{p.answer}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
