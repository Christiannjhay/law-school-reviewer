import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { Markdown, tocFrom } from "@/components/Markdown";
import { BookmarkButton, ReadTracker } from "@/components/ReadBadge";
import { NOTES } from "@/data/notes";
import { RULE_MAP, RULES } from "@/data/rules";
import { RULE_IDS, type RuleId } from "@/lib/types";

export function generateStaticParams() {
  return RULES.map((r) => ({ id: String(r.id) }));
}

function parse(id: string): RuleId | null {
  const n = Number(id);
  return (RULE_IDS as readonly number[]).includes(n) ? (n as RuleId) : null;
}

export async function generateMetadata({ params }: PageProps<"/rules/[id]">): Promise<Metadata> {
  const rule = parse((await params).id);
  return { title: rule ? `Rule ${rule} – ${RULE_MAP[rule].title}` : "Rule" };
}

export default async function RulePage({ params }: PageProps<"/rules/[id]">) {
  const rule = parse((await params).id);
  if (!rule) notFound();
  const meta = RULE_MAP[rule];
  const md = NOTES[rule];
  const toc = tocFrom(md);
  const idx = RULES.findIndex((r) => r.id === rule);
  const prev = RULES[idx - 1];
  const next = RULES[idx + 1];

  return (
    <div className="lg:grid lg:grid-cols-[1fr_14rem] lg:gap-10">
      <article className="min-w-0">
        <Link href="/rules" className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink">
          <Icon name="left" className="size-4" /> All rules
        </Link>
        <header className="mt-3 mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">Rule {rule}</p>
          <h1 className="mt-1 font-serif text-3xl font-bold leading-tight">{meta.title}</h1>
          <p className="mt-2 text-muted">{meta.blurb}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <BookmarkButton id={`rule-${rule}`} />
            <Link
              href="/flashcards"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line bg-surface px-4 text-sm font-semibold hover:bg-surface-2"
            >
              <Icon name="cards" className="size-4" /> Practice
            </Link>
          </div>
        </header>

        {/* Mobile / iPad portrait table of contents */}
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
        <ReadTracker rule={rule} />

        <nav className="mt-10 grid grid-cols-2 gap-3 border-t border-line pt-6">
          {prev ? (
            <Link href={`/rules/${prev.id}`} className="rounded-xl border border-line bg-surface p-3 hover:border-accent/40">
              <span className="text-xs text-muted">← Previous</span>
              <span className="block truncate text-sm font-semibold">
                Rule {prev.id} · {prev.short}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/rules/${next.id}`} className="rounded-xl border border-line bg-surface p-3 text-right hover:border-accent/40">
              <span className="text-xs text-muted">Next →</span>
              <span className="block truncate text-sm font-semibold">
                Rule {next.id} · {next.short}
              </span>
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
