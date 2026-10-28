"use client";

import { useEffect } from "react";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui";
import { markRuleRead, toggleBookmark, useProgress } from "@/lib/store";
import { cx } from "@/lib/util";

export function ReadBadge({ rule }: { rule: number }) {
  const p = useProgress();
  if (!p.readRules.includes(rule)) return null;
  return (
    <span className="inline-flex items-center gap-0.5 rounded-full bg-good-soft px-1.5 py-0.5 text-[10px] font-semibold text-good">
      <Icon name="check" className="size-3" /> Read
    </span>
  );
}

/** Marks a rule as read once the reader reaches the end of its notes. */
export function ReadTracker({ rule }: { rule: number }) {
  useEffect(() => {
    const el = document.getElementById("notes-end");
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) markRuleRead(rule);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [rule]);
  return <div id="notes-end" />;
}

export function BookmarkButton({ id }: { id: string }) {
  const p = useProgress();
  const on = p.bookmarks.includes(id);
  return (
    <Button variant="secondary" onClick={() => toggleBookmark(id)} className={cx(on && "border-gold text-gold")}>
      <Icon name="bookmark" className={cx("size-4", on && "fill-current")} />
      {on ? "Bookmarked" : "Bookmark"}
    </Button>
  );
}
