"use client";

import { PROPERTY_TOPICS } from "@/data/property/topics";
import type { PropertyTopicId } from "@/data/property/types";
import { cx } from "@/lib/util";

/** Multi-select topic filter. An empty selection means all topics. */
export function TopicFilter({
  value,
  onChange,
  counts,
}: {
  value: PropertyTopicId[];
  onChange: (v: PropertyTopicId[]) => void;
  counts: Partial<Record<PropertyTopicId, number>>;
}) {
  const topics = PROPERTY_TOPICS.filter((t) => counts[t.id]);
  const toggle = (id: PropertyTopicId) => onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id]);
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Topics</p>
        <button type="button" onClick={() => onChange([])} className="text-xs font-semibold text-accent">
          {value.length ? "Clear (all topics)" : "All topics selected"}
        </button>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {topics.map((t) => {
          const on = value.includes(t.id);
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => toggle(t.id)}
              aria-pressed={on}
              className={cx(
                "min-h-10 rounded-xl border px-3 py-1.5 text-sm transition",
                on ? "border-accent bg-accent-soft font-semibold text-accent" : "border-line bg-surface hover:bg-surface-2",
              )}
            >
              {t.short} <span className="text-xs text-muted">{counts[t.id]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function countByTopic(items: { topic: PropertyTopicId }[]) {
  const out: Partial<Record<PropertyTopicId, number>> = {};
  for (const i of items) out[i.topic] = (out[i.topic] ?? 0) + 1;
  return out;
}
