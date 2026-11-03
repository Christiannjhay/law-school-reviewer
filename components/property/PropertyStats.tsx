"use client";

import { Icon, type IconName } from "@/components/icons";
import { PROPERTY_TOPICS } from "@/data/property/topics";
import { usePropertyProgress } from "@/lib/propertyStore";

export function PropertyStats() {
  const p = usePropertyProgress();
  const answers = Object.values(p.answers);
  const attempts = answers.reduce((n, a) => n + a.r + a.w, 0);
  const right = answers.reduce((n, a) => n + a.r, 0);
  const stats: { label: string; value: string | number; icon: IconName }[] = [
    { label: "Topics read", value: `${p.read.length}/${PROPERTY_TOPICS.length}`, icon: "book" },
    { label: "Items attempted", value: answers.length, icon: "cards" },
    { label: "Accuracy", value: attempts ? `${Math.round((right / attempts) * 100)}%` : "—", icon: "target" },
  ];
  return (
    <section className="mt-6 grid grid-cols-3 gap-3">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl border border-line bg-surface p-4">
          <Icon name={s.icon} className="size-5 text-gold" />
          <p className="mt-2 font-serif text-2xl font-bold tabular-nums">{s.value}</p>
          <p className="text-xs text-muted">{s.label}</p>
        </div>
      ))}
    </section>
  );
}
