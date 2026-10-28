"use client";

import { useState } from "react";
import { ChoiceRunner } from "@/components/ChoiceRunner";
import { Button, Card, RuleFilter, Segmented } from "@/components/ui";
import { buildChoiceSet, poolCount, type ChoiceQ, type Source } from "@/lib/questions";
import type { Mode } from "@/lib/store";
import type { RuleId } from "@/lib/types";
import { shuffle } from "@/lib/util";

/** Setup screen (rules + count) followed by a ChoiceRunner session. */
export function ChoicePractice({ sources, mode }: { sources: Source[]; mode: Mode }) {
  const [rules, setRules] = useState<RuleId[]>([]);
  const [count, setCount] = useState(20);
  const [session, setSession] = useState<ChoiceQ[] | null>(null);
  const [key, setKey] = useState(0);

  const available = poolCount(sources, rules);

  if (session) {
    return (
      <ChoiceRunner
        key={key}
        questions={session}
        mode={mode}
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
      <RuleFilter value={rules} onChange={setRules} />
      <Segmented
        label="Number of items"
        value={count}
        onChange={setCount}
        options={[
          { value: 10, label: "10" },
          { value: 20, label: "20" },
          { value: 50, label: "50" },
          { value: 0, label: `All (${available})` },
        ]}
      />
      <Button
        className="w-full"
        disabled={available === 0}
        onClick={() => {
          setSession(buildChoiceSet(sources, rules, count));
          setKey((k) => k + 1);
        }}
      >
        Start · {count === 0 ? available : Math.min(count, available)} items
      </Button>
    </Card>
  );
}
