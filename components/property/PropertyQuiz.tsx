"use client";

import { useMemo, useState } from "react";
import { ChoiceRunner } from "@/components/ChoiceRunner";
import { countByTopic, TopicFilter } from "@/components/property/TopicFilter";
import { Button, Card, Segmented } from "@/components/ui";
import { CODAL_MCQS } from "@/data/property/codal-mcq";
import { CODAL_TF } from "@/data/property/codal-truefalse";
import { PROPERTY_MCQS } from "@/data/property/mcq";
import { PROPERTY_TOPIC_MAP } from "@/data/property/topics";
import { PROPERTY_TF } from "@/data/property/truefalse";
import type { PropertyMCQ, PropertyTF, PropertyTopicId } from "@/data/property/types";
import { recordPropertyAnswer } from "@/lib/propertyStore";
import type { RunnerQ } from "@/lib/questions";
import { sample, shuffle } from "@/lib/util";

type Item = { topic: PropertyTopicId; build: () => RunnerQ };

function mcqItems(bank: PropertyMCQ[]): Item[] {
  return bank.map((m) => ({
    topic: m.topic,
    build: () => {
      const order = shuffle(m.choices.map((_, i) => i));
      return {
        id: m.id,
        tag: PROPERTY_TOPIC_MAP[m.topic].short,
        kind: m.source,
        prompt: m.q,
        choices: order.map((i) => m.choices[i]),
        answer: order.indexOf(m.answer),
        explain: m.explain,
      };
    },
  }));
}

function tfItems(bank: PropertyTF[]): Item[] {
  return bank.map((t) => ({
    topic: t.topic,
    build: () => ({
      id: t.id,
      tag: PROPERTY_TOPIC_MAP[t.topic].short,
      kind: t.source,
      prompt: t.s,
      choices: ["True", "False"],
      answer: t.answer ? 0 : 1,
      explain: t.explain,
    }),
  }));
}

/** `codal` switches to the separate Arts. 414–773 codal banks, kept apart from the regular sets. */
export function PropertyQuiz({ type, codal = false }: { type: "mcq" | "tf"; codal?: boolean }) {
  const items = useMemo(
    () => (type === "mcq" ? mcqItems(codal ? CODAL_MCQS : PROPERTY_MCQS) : tfItems(codal ? CODAL_TF : PROPERTY_TF)),
    [type, codal],
  );
  const [topics, setTopics] = useState<PropertyTopicId[]>([]);
  const [count, setCount] = useState(20);
  const [session, setSession] = useState<RunnerQ[] | null>(null);
  const [key, setKey] = useState(0);

  const pool = topics.length ? items.filter((i) => topics.includes(i.topic)) : items;

  if (session) {
    return (
      <ChoiceRunner
        key={key}
        questions={session}
        onAnswer={recordPropertyAnswer}
        onExit={() => setSession(null)}
        onRetry={(missed) => {
          setSession(shuffle(missed));
          setKey((k) => k + 1);
        }}
      />
    );
  }

  return (
    <Card className="space-y-6">
      <TopicFilter value={topics} onChange={setTopics} counts={countByTopic(items)} />
      <Segmented
        label="Number of items"
        value={count}
        onChange={setCount}
        options={[
          { value: 10, label: "10" },
          { value: 20, label: "20" },
          { value: 50, label: "50" },
          { value: 0, label: `All (${pool.length})` },
        ]}
      />
      <Button
        className="w-full"
        disabled={pool.length === 0}
        onClick={() => {
          const picked = count > 0 ? sample(pool, count) : shuffle(pool);
          setSession(picked.map((i) => i.build()));
          setKey((k) => k + 1);
        }}
      >
        Start · {count === 0 ? pool.length : Math.min(count, pool.length)} items
      </Button>
    </Card>
  );
}
