import Link from "next/link";
import { DashboardStats } from "@/components/DashboardStats";
import { Icon } from "@/components/icons";
import { RULES } from "@/data/rules";
import { COUNTS, TOTAL_ITEMS } from "@/lib/content";
import { EXAM_NAV, PRACTICE_NAV, STUDY_NAV, type NavItem } from "@/lib/nav";

const countFor: Record<string, number | undefined> = {
  "/flashcards": COUNTS.flashcards,
  "/quiz": COUNTS.mcq,
  "/true-false": COUNTS.truefalse,
  "/identification": COUNTS.identification,
  "/mnemonics": COUNTS.mnemonics,
  "/cases": COUNTS.cases,
  "/periods": COUNTS.periods,
  "/essays": COUNTS.essays,
  "/compare": COUNTS.comparisons,
};

function Tile({ n }: { n: NavItem }) {
  const c = countFor[n.href];
  return (
    <Link
      href={n.href}
      className="group flex items-start gap-3 rounded-2xl border border-line bg-surface p-4 transition hover:border-accent/40 hover:shadow-sm"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
        <Icon name={n.icon} />
      </span>
      <span className="min-w-0">
        <span className="flex items-baseline gap-2">
          <span className="font-semibold group-hover:text-accent">{n.label}</span>
          {c !== undefined && <span className="text-xs text-muted">{c}</span>}
        </span>
        <span className="mt-0.5 block text-sm leading-snug text-muted">{n.desc}</span>
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden rounded-3xl bg-accent px-5 py-7 text-white sm:px-8 sm:py-9 dark:bg-accent-soft dark:text-ink">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">Revised Rules of Criminal Procedure</p>
        <h1 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl">Rules 115–126 Reviewer</h1>
        <p className="mt-2 max-w-xl text-[15px] opacity-90">
          Rights of the accused through search and seizure — based on Salvador&apos;s <em>Criminal Procedure</em> (2019) and the
          Revised Guidelines for Continuous Trial. {TOTAL_ITEMS}+ practice items across every exam format.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/exam" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-accent dark:bg-accent dark:text-[#1b0a10]">
            <Icon name="target" className="size-4" /> Take a mock exam
          </Link>
          <Link href="/rules/115" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white/15 px-4 text-sm font-semibold ring-1 ring-white/30 dark:bg-surface dark:ring-line">
            <Icon name="book" className="size-4" /> Start reading
          </Link>
        </div>
      </section>

      <DashboardStats />

      <section className="mt-8">
        <h2 className="font-serif text-xl font-bold">Practice by format</h2>
        <p className="text-sm text-muted">Every type of exam question, filterable by rule.</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {PRACTICE_NAV.map((n) => (
            <Tile key={n.href} n={n} />
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-xl font-bold">Study</h2>
          <div className="mt-3 grid gap-3">
            {STUDY_NAV.map((n) => (
              <Tile key={n.href} n={n} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-serif text-xl font-bold">Test yourself</h2>
          <div className="mt-3 grid gap-3">
            {EXAM_NAV.map((n) => (
              <Tile key={n.href} n={n} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl font-bold">Jump to a rule</h2>
        <div className="no-scrollbar -mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-4 sm:px-0 lg:grid-cols-6">
          {RULES.map((r) => (
            <Link
              key={r.id}
              href={`/rules/${r.id}`}
              className="min-w-28 shrink-0 rounded-xl border border-line bg-surface p-3 hover:border-accent/40"
            >
              <span className="block font-serif text-lg font-bold text-accent">{r.id}</span>
              <span className="block truncate text-xs text-muted">{r.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
