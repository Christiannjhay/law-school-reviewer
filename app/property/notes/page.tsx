import type { Metadata } from "next";
import Link from "next/link";
import { TopicReadBadge } from "@/components/property/TopicRead";
import { PageHeader } from "@/components/ui";
import { PROPERTY_TOPICS } from "@/data/property/topics";

export const metadata: Metadata = { title: "Property study notes" };

export default function PropertyNotesPage() {
  return (
    <>
      <PageHeader eyebrow="Property" title="Study notes">
        Condensed from the <em>Pre-Bar Reviewer in Civil Law</em> (Rabuya, 2021), Book II, pp. 156–240, following the book&apos;s order.
      </PageHeader>
      <div className="grid gap-3 sm:grid-cols-2">
        {PROPERTY_TOPICS.map((t) => (
          <Link key={t.id} href={`/property/notes/${t.id}`} className="group flex gap-4 rounded-2xl border border-line bg-surface p-4 transition hover:border-accent/40 hover:shadow-sm">
            <div className="grid size-14 shrink-0 place-items-center rounded-xl bg-accent-soft font-serif text-xl font-bold text-accent">{t.n}</div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-semibold group-hover:text-accent">{t.title}</h2>
                <TopicReadBadge id={t.id} />
              </div>
              <p className="mt-0.5 line-clamp-2 text-sm text-muted">{t.blurb}</p>
              <p className="mt-1.5 text-xs font-medium text-gold">Pre-Bar {t.pages}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
