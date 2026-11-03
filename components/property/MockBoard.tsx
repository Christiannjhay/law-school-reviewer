"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { countByTopic, TopicFilter } from "@/components/property/TopicFilter";
import { Button, Card, ProgressBar, Segmented } from "@/components/ui";
import { PROPERTY_ESSAYS } from "@/data/property/essays";
import { PROPERTY_TOPIC_MAP } from "@/data/property/topics";
import type { PropertyEssay, PropertyTopicId } from "@/data/property/types";
import { recordPropertyAnswer, usePropertyProgress } from "@/lib/propertyStore";
import { cx, sample } from "@/lib/util";

function Chips({ e }: { e: PropertyEssay }) {
  return (
    <span className="flex flex-wrap items-center gap-1.5">
      <span className="inline-flex rounded-md bg-gold-soft px-1.5 py-0.5 text-[11px] font-semibold text-gold">{PROPERTY_TOPIC_MAP[e.topic].short}</span>
      {e.bar && <span className="text-xs text-muted">{e.bar} Bar</span>}
      <span className="text-xs text-muted">· QUAMTO p. {e.page}</span>
    </span>
  );
}

export function MockBoard() {
  const [topics, setTopics] = useState<PropertyTopicId[]>([]);
  const [setSize, setSetSize] = useState(5);
  const [session, setSession] = useState<PropertyEssay[] | null>(null);
  const [pos, setPos] = useState(0);
  const progress = usePropertyProgress();
  const list = topics.length ? PROPERTY_ESSAYS.filter((e) => topics.includes(e.topic)) : PROPERTY_ESSAYS;

  if (session) {
    if (pos >= session.length) {
      const got = session.filter((e) => (progress.answers[e.id]?.r ?? 0) > 0).length;
      return (
        <Card className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted">Set complete</p>
          <p className="mt-2 font-serif text-3xl font-bold">{session.length} problems reviewed</p>
          <p className="mt-1 text-sm text-muted">{got} of these have been marked as answered well at least once.</p>
          <Button className="mt-5" onClick={() => setSession(null)}>
            Back to problems
          </Button>
        </Card>
      );
    }
    return (
      <div>
        {session.length > 1 && (
          <div className="mx-auto mb-4 flex max-w-3xl items-center gap-3">
            <ProgressBar value={pos} max={session.length} />
            <span className="shrink-0 text-sm tabular-nums text-muted">
              {pos + 1}/{session.length}
            </span>
          </div>
        )}
        <EssayView key={session[pos].id} essay={session[pos]} onBack={() => setSession(null)} onDone={() => setPos((p) => p + 1)} />
      </div>
    );
  }

  const start = (items: PropertyEssay[]) => {
    setSession(items);
    setPos(0);
  };

  return (
    <div className="space-y-5">
      <Card className="space-y-5">
        <TopicFilter value={topics} onChange={setTopics} counts={countByTopic(PROPERTY_ESSAYS)} />
        <Segmented
          label="Random mock set"
          value={setSize}
          onChange={setSetSize}
          options={[
            { value: 5, label: "5" },
            { value: 10, label: "10" },
            { value: 20, label: "20" },
          ]}
        />
        <Button className="w-full" disabled={!list.length} onClick={() => start(sample(list, setSize))}>
          <Icon name="target" className="size-4" /> Start mock set · {Math.min(setSize, list.length)} problems
        </Button>
      </Card>

      <p className="text-sm font-semibold text-muted">{list.length} problems, or pick one:</p>
      <ul className="grid gap-3 md:grid-cols-2">
        {list.map((e) => {
          const done = progress.answers[e.id];
          return (
            <li key={e.id}>
              <button
                type="button"
                onClick={() => start([e])}
                className="flex h-full w-full flex-col rounded-2xl border border-line bg-surface p-4 text-left hover:border-accent/40"
              >
                <span className="flex w-full items-start justify-between gap-2">
                  <Chips e={e} />
                  {done && <span className={cx("shrink-0 text-xs font-semibold", done.r ? "text-good" : "text-gold")}>{done.r ? "✓ Done" : "Review"}</span>}
                </span>
                <span className="mt-2 font-semibold">{e.title}</span>
                <span className="mt-1 line-clamp-2 text-sm text-muted">{e.facts || e.parts[0].q}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function EssayView({ essay, onBack, onDone }: { essay: PropertyEssay; onBack: () => void; onDone: () => void }) {
  const [draft, setDraft] = useState("");
  const [revealed, setRevealed] = useState(false);

  const grade = (ok: boolean) => {
    recordPropertyAnswer(essay.id, ok);
    onDone();
  };

  return (
    <div className="mx-auto max-w-3xl">
      <button type="button" onClick={onBack} className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink">
        <Icon name="left" className="size-4" /> All problems
      </button>
      <Card>
        <Chips e={essay} />
        <h2 className="mt-2 font-serif text-2xl font-bold">{essay.title}</h2>
        {essay.facts && <p className="mt-3 text-[16px] leading-relaxed">{essay.facts}</p>}
        {essay.parts.some((p) => p.q) && (
          <ul className="mt-3 space-y-2">
            {essay.parts.map(
              (p, i) =>
                p.q && (
                  <li key={i} className="text-[16px] font-semibold leading-relaxed">
                    {p.label && <span className="text-accent">({p.label}) </span>}
                    {p.q}
                  </li>
                ),
            )}
          </ul>
        )}
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          rows={7}
          placeholder="Write your answer (Answer, Legal basis, Application, Conclusion)…"
          className="mt-4 w-full rounded-xl border border-line bg-bg p-3 text-base leading-relaxed outline-none focus:border-accent"
        />
        {!revealed && (
          <Button className="mt-3 w-full" onClick={() => setRevealed(true)}>
            <Icon name="eye" className="size-4" /> Show provided answer
          </Button>
        )}
      </Card>

      {revealed && (
        <Card className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">Provided answer (QUAMTO)</p>
          <div className="mt-2 space-y-4">
            {essay.parts.map((p, i) => (
              <div key={i}>
                <p className="text-[16px] leading-relaxed">
                  {p.label && <span className="font-semibold text-accent">({p.label}) </span>}
                  {p.a}
                </p>
                {p.alt && (
                  <p className="mt-2 border-l-2 border-line pl-3 text-[15px] leading-relaxed">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted">Alternative answer</span>
                    {p.alt}
                  </p>
                )}
              </div>
            ))}
          </div>
          {essay.note && (
            <p className="mt-4 rounded-xl bg-gold-soft p-3 text-sm">
              <span className="font-semibold text-gold">Reviewer&apos;s note: </span>
              {essay.note}
            </p>
          )}
          <p className="mt-5 text-sm font-semibold">How did you do?</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Button variant="secondary" onClick={() => grade(false)}>
              Need to review
            </Button>
            <Button onClick={() => grade(true)}>Got it</Button>
          </div>
        </Card>
      )}
    </div>
  );
}
