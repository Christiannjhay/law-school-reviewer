"use client";

import { useEffect } from "react";
import { Icon } from "@/components/icons";
import { markPropertyTopicRead, usePropertyProgress } from "@/lib/propertyStore";

export function TopicReadBadge({ id }: { id: string }) {
  const p = usePropertyProgress();
  if (!p.read.includes(id)) return null;
  return (
    <span className="inline-flex items-center gap-0.5 rounded-full bg-good-soft px-1.5 py-0.5 text-[10px] font-semibold text-good">
      <Icon name="check" className="size-3" /> Read
    </span>
  );
}

/** Marks a topic as read once the reader reaches the end of its notes. */
export function TopicReadTracker({ id }: { id: string }) {
  useEffect(() => {
    const el = document.getElementById("notes-end");
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) markPropertyTopicRead(id);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [id]);
  return <div id="notes-end" />;
}
