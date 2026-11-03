"use client";

import { useMemo, useState } from "react";
import { ChoiceRunner } from "@/components/ChoiceRunner";
import { countByTopic, TopicFilter } from "@/components/property/TopicFilter";
import { Button, Card, Segmented } from "@/components/ui";
import { PROPERTY_MCQS } from "@/data/property/mcq";
import { PROPERTY_TOPIC_MAP } from "@/data/property/topics";
import { PROPERTY_TF } from "@/data/property/truefalse";
import type { PropertyTopicId } from "@/data/property/types";
import { recordPropertyAnswer } from "@/lib/propertyStore";
import type { RunnerQ } from "@/lib/questions";
import { sample, shuffle } from "@/lib/util";

type Item = { topic: PropertyTopicId; build: () => RunnerQ };

function mcqItems(): Item[] {
  return PROPERTY_MCQS.map((m) => ({
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

function tfItems(): Item[] {
  return PROPERTY_TF.map((t) => ({
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

export function PropertyQuiz({ type }: { type: "mcq" | "tf" }) {
  const items = useMemo(() => (type === "mcq" ? mcqItems() : tfItems()), [type]);
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
