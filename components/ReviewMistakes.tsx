"use client";

import Link from "next/link";
import { useState } from "react";
import { ChoiceRunner } from "@/components/ChoiceRunner";
import { Button, Card, Empty, RuleChip } from "@/components/ui";
import { FLASHCARDS, IDENTIFICATION, MNEMONICS } from "@/lib/content";
import { choiceById, type ChoiceQ } from "@/lib/questions";
import { useProgress, weakIds } from "@/lib/store";
import { shuffle } from "@/lib/util";

export function ReviewMistakes() {
  const p = useProgress();
  const [session, setSession] = useState<ChoiceQ[] | null>(null);
  const [key, setKey] = useState(0);

  const weak = weakIds(p);
  const choiceIds = weak.filter((id) => /^(mcq|tf|case|per)-/.test(id));
  const cards = FLASHCARDS.filter((f) => weak.includes(f.id));
  const idents = IDENTIFICATION.filter((f) => weak.includes(f.id));
  const lists = MNEMONICS.filter((m) => weak.includes(m.id));

  if (session) {
    return (
      <ChoiceRunner
        key={key}
        questions={session}
        mode="quiz"
        onExit={() => setSession(null)}
        onRetry={(missed) => {
          setSession(shuffle(missed));
          setKey((k) => k + 1);
        }}
      />
    );
  }

  if (!weak.length) {
    return (
      <Empty>
        No weak items yet. Items you miss more often than you get right will show up here.
        <div className="mt-4">
          <Link href="/quiz" className="font-semibold text-accent">
            Start a quiz →
          </Link>
        </div>
      </Empty>
    );
  }

  return (
    <div className="space-y-5">
      {choiceIds.length > 0 && (
        <Card>
          <p className="font-semibold">{choiceIds.length} objective questions</p>
          <p className="text-sm text-muted">Multiple choice, true or false, cases and periods you got wrong.</p>
          <Button
            className="mt-3 w-full"
            onClick={() => {
              setSession(shuffle(choiceIds.map(choiceById).filter((q): q is ChoiceQ => q !== null)));
              setKey((k) => k + 1);
            }}
          >
            Retake them
          </Button>
        </Card>
      )}
      {[
        { title: "Flashcards to revisit", items: cards.map((c) => ({ id: c.id, rule: c.rule, q: c.q, a: c.a })) },
        { title: "Identification to revisit", items: idents.map((c) => ({ id: c.id, rule: c.rule, q: c.q, a: c.answers[0] })) },
        { title: "Enumerations to revisit", items: lists.map((m) => ({ id: m.id, rule: m.rule, q: `${m.topic} (${m.mnemonic})`, a: m.items.join(" · ") })) },
      ]
        .filter((g) => g.items.length)
        .map((g) => (
          <section key={g.title}>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted">{g.title}</h2>
            <ul className="space-y-2">
              {g.items.map((it) => (
                <li key={it.id} className="rounded-xl border border-line bg-surface p-3.5">
                  <RuleChip rule={it.rule} />
                  <p className="mt-1.5 font-semibold">{it.q}</p>
                  <details className="mt-1">
                    <summary className="cursor-pointer text-sm font-semibold text-accent">Show answer</summary>
                    <p className="mt-1 text-sm">{it.a}</p>
                  </details>
                </li>
              ))}
            </ul>
          </section>
        ))}
    </div>
  );
}
