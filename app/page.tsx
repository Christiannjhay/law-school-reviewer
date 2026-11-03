import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { PROPERTY_ESSAYS } from "@/data/property/essays";
import { PROPERTY_MCQS } from "@/data/property/mcq";
import { PROPERTY_TF } from "@/data/property/truefalse";
import { TOTAL_ITEMS } from "@/lib/content";

const SUBJECTS: { href: string; eyebrow: string; title: string; desc: string; meta: string; icon: IconName }[] = [
  {
    href: "/property",
    eyebrow: "Civil Law",
    title: "Property",
    desc: "Book II study notes from the Pre-Bar Reviewer, and QUAMTO mock board problems with the provided answers.",
    meta: `${PROPERTY_ESSAYS.length} mock board problems · ${PROPERTY_MCQS.length} MCQ · ${PROPERTY_TF.length} True or False`,
    icon: "book",
  },
  {
    href: "/crimpro",
    eyebrow: "Remedial Law",
    title: "Criminal Procedure",
    desc: "Rules 115–126: rights of the accused through search and seizure, in every exam format.",
    meta: `${TOTAL_ITEMS}+ practice items`,
    icon: "gavel",
  },
];

export default function Home() {
  return (
    <>
      <section className="rounded-3xl bg-accent px-5 py-7 text-white sm:px-8 sm:py-9 dark:bg-accent-soft dark:text-ink">
        <h1 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">Law School Reviewer</h1>
        <p className="mt-2 max-w-xl text-[15px] opacity-90">Choose a subject to start reviewing.</p>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        {SUBJECTS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group flex flex-col rounded-2xl border border-line bg-surface p-5 transition hover:border-accent/40 hover:shadow-sm"
          >
            <span className="flex items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                <Icon name={s.icon} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted">{s.eyebrow}</span>
                <span className="block font-serif text-xl font-bold group-hover:text-accent">{s.title}</span>
              </span>
            </span>
            <span className="mt-3 text-[15px] leading-snug text-muted">{s.desc}</span>
            <span className="mt-3 text-xs font-medium text-gold">{s.meta}</span>
          </Link>
        ))}
      </section>
    </>
  );
}
