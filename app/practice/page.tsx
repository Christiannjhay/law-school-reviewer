import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { PageHeader } from "@/components/ui";
import { EXAM_NAV, PRACTICE_NAV, STUDY_NAV } from "@/lib/nav";

export const metadata: Metadata = { title: "Practice" };

export default function PracticeHub() {
  const groups = [
    { title: "Practice modes", items: PRACTICE_NAV },
    { title: "Exam & review", items: EXAM_NAV },
    { title: "Study aids", items: STUDY_NAV },
  ];
  return (
    <>
      <PageHeader eyebrow="Practice" title="Choose a format">
        Each format mirrors a type of exam question. All of them can be filtered by rule.
      </PageHeader>
      {groups.map((g) => (
        <section key={g.title} className="mb-8">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">{g.title}</h2>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {g.items.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-4 hover:border-accent/40"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon name={n.icon} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">{n.label}</span>
                  <span className="block text-sm text-muted">{n.desc}</span>
                </span>
                <Icon name="right" className="size-4 text-muted" />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
