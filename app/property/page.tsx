import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { PropertyStats } from "@/components/property/PropertyStats";
import { CODAL_MCQS } from "@/data/property/codal-mcq";
import { CODAL_TF } from "@/data/property/codal-truefalse";
import { PROPERTY_ESSAYS } from "@/data/property/essays";
import { PROPERTY_MCQS } from "@/data/property/mcq";
import { PROPERTY_TOPICS } from "@/data/property/topics";
import { PROPERTY_TF } from "@/data/property/truefalse";
import { PROPERTY_NAV } from "@/lib/nav";

export const metadata: Metadata = { title: "Property" };

const counts: Record<string, number> = {
  "/property/notes": PROPERTY_TOPICS.length,
  "/property/mock-board": PROPERTY_ESSAYS.length,
  "/property/mcq": PROPERTY_MCQS.length,
  "/property/true-false": PROPERTY_TF.length,
  "/property/codal": CODAL_MCQS.length + CODAL_TF.length,
};

export default function PropertyHome() {
  return (
    <>
      <section className="rounded-3xl bg-accent px-5 py-7 text-white sm:px-8 sm:py-9 dark:bg-accent-soft dark:text-ink">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">Civil Law · Book II</p>
        <h1 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl">Property</h1>
        <p className="mt-2 max-w-xl text-[15px] opacity-90">
          Study notes from the <em>Pre-Bar Reviewer in Civil Law</em> (Rabuya, 2021), pp. 156–240. Review questions from <em>QUAMTO Civil Law</em> (UST
          Golden Notes, 2026), pp. 76–121.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/property/notes/classification" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-accent dark:bg-accent dark:text-[#1b0a10]">
            <Icon name="book" className="size-4" /> Start reading
          </Link>
          <Link href="/property/mock-board" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white/15 px-4 text-sm font-semibold ring-1 ring-white/30 dark:bg-surface dark:ring-line">
            <Icon name="scale" className="size-4" /> Mock board
          </Link>
        </div>
      </section>

      <PropertyStats />

      <section className="mt-8 grid gap-3 sm:grid-cols-2">
        {PROPERTY_NAV.map((n) => (
          <Link key={n.href} href={n.href} className="group flex items-start gap-3 rounded-2xl border border-line bg-surface p-4 transition hover:border-accent/40 hover:shadow-sm">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
              <Icon name={n.icon} />
            </span>
            <span className="min-w-0">
              <span className="flex items-baseline gap-2">
                <span className="font-semibold group-hover:text-accent">{n.label}</span>
                <span className="text-xs text-muted">{counts[n.href]}</span>
              </span>
              <span className="mt-0.5 block text-sm leading-snug text-muted">{n.desc}</span>
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}
