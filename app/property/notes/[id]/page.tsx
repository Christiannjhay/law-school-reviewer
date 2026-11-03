import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { Markdown, tocFrom } from "@/components/Markdown";
import { TopicReadTracker } from "@/components/property/TopicRead";
import { PROPERTY_NOTES } from "@/data/property/notes";
import { PROPERTY_TOPIC_MAP, PROPERTY_TOPICS } from "@/data/property/topics";
import { PROPERTY_TOPIC_IDS, type PropertyTopicId } from "@/data/property/types";

export function generateStaticParams() {
  return PROPERTY_TOPICS.map((t) => ({ id: t.id }));
}

function parse(id: string): PropertyTopicId | null {
  return (PROPERTY_TOPIC_IDS as readonly string[]).includes(id) ? (id as PropertyTopicId) : null;
}

export async function generateMetadata({ params }: PageProps<"/property/notes/[id]">): Promise<Metadata> {
  const id = parse((await params).id);
  return { title: id ? PROPERTY_TOPIC_MAP[id].title : "Property notes" };
}

export default async function PropertyTopicPage({ params }: PageProps<"/property/notes/[id]">) {
  const id = parse((await params).id);
  if (!id) notFound();
  const meta = PROPERTY_TOPIC_MAP[id];
  const md = PROPERTY_NOTES[id];
  const toc = tocFrom(md);
  const idx = PROPERTY_TOPICS.findIndex((t) => t.id === id);
  const prev = PROPERTY_TOPICS[idx - 1];
  const next = PROPERTY_TOPICS[idx + 1];

  return (
    <div className="lg:grid lg:grid-cols-[1fr_14rem] lg:gap-10">
      <article className="min-w-0">
        <Link href="/property/notes" className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink">
          <Icon name="left" className="size-4" /> All topics
        </Link>
        <header className="mt-3 mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Topic {meta.n} · Pre-Bar {meta.pages}
          </p>
          <h1 className="mt-1 font-serif text-3xl font-bold leading-tight">{meta.title}</h1>
          <p className="mt-2 text-muted">{meta.blurb}</p>
        </header>

        <details className="mb-6 rounded-xl border border-line bg-surface lg:hidden">
          <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold">
            <span className="flex items-center justify-between">
              On this page <Icon name="list" className="size-4 text-muted" />
            </span>
          </summary>
          <ul className="border-t border-line px-4 py-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="block py-1.5 text-muted hover:text-accent">
                  {t.title}
                </a>
              </li>
            ))}
          </ul>
        </details>

        <Markdown>{md}</Markdown>
        <TopicReadTracker id={id} />

        <nav className="mt-10 grid grid-cols-2 gap-3 border-t border-line pt-6">
          {prev ? (
            <Link href={`/property/notes/${prev.id}`} className="rounded-xl border border-line bg-surface p-3 hover:border-accent/40">
              <span className="text-xs text-muted">← Previous</span>
              <span className="block truncate text-sm font-semibold">{prev.short}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/property/notes/${next.id}`} className="rounded-xl border border-line bg-surface p-3 text-right hover:border-accent/40">
              <span className="text-xs text-muted">Next →</span>
              <span className="block truncate text-sm font-semibold">{next.short}</span>
            </Link>
          )}
        </nav>
      </article>

      <aside className="hidden lg:block">
        <div className="sticky top-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">On this page</p>
          <ul className="mt-2 space-y-1 border-l border-line text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="-ml-px block border-l-2 border-transparent py-1 pl-3 text-muted hover:border-accent hover:text-ink">
                  {t.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
