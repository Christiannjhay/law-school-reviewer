"use client";

import { useEffect, useMemo, useState } from "react";
import { Icon } from "@/components/icons";
import { Button, Card, ProgressBar, RuleChip, RuleFilter, Segmented } from "@/components/ui";
import { FLASHCARDS } from "@/lib/content";
import { recordAnswer, setBox, useProgress } from "@/lib/store";
import type { Flashcard, RuleId } from "@/lib/types";
import { cx, shuffle } from "@/lib/util";

type Order = "smart" | "shuffle" | "in-order";

export function Flashcards() {
  const progress = useProgress();
  const [rules, setRules] = useState<RuleId[]>([]);
  const [order, setOrder] = useState<Order>("smart");
  const [deck, setDeck] = useState<Flashcard[] | null>(null);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [tally, setTally] = useState({ know: 0, again: 0 });

  const pool = useMemo(() => (rules.length ? FLASHCARDS.filter((c) => rules.includes(c.rule)) : FLASHCARDS), [rules]);
  const boxCounts = useMemo(() => {
    const c = [0, 0, 0, 0, 0];
    pool.forEach((card) => c[(progress.boxes[card.id] ?? 1) - 1]++);
    return c;
  }, [pool, progress.boxes]);

  function start() {
    let d: Flashcard[];
    if (order === "in-order") d = pool;
    else if (order === "shuffle") d = shuffle(pool);
    else {
      // Smart: lower boxes first, shuffled within each box.
      d = shuffle(pool).sort((a, b) => (progress.boxes[a.id] ?? 1) - (progress.boxes[b.id] ?? 1));
    }
    setDeck(d);
    setI(0);
    setFlipped(false);
    setTally({ know: 0, again: 0 });
  }

  const card = deck?.[i];

  function rate(know: boolean) {
    if (!card) return;
    const box = progress.boxes[card.id] ?? 1;
    setBox(card.id, know ? Math.min(5, box + 1) : 1);
    recordAnswer(card.id, know, "flashcards");
    setTally((t) => (know ? { ...t, know: t.know + 1 } : { ...t, again: t.again + 1 }));
    setFlipped(false);
    setI((n) => n + 1);
  }

  useEffect(() => {
    if (!deck) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === " ") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (flipped && e.key === "ArrowRight") rate(true);
      else if (flipped && e.key === "ArrowLeft") rate(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!deck) {
    return (
      <Card className="space-y-6">
        <RuleFilter value={rules} onChange={setRules} />
        <Segmented
          label="Order"
          value={order}
          onChange={setOrder}
          options={[
            { value: "smart", label: "Weakest first" },
            { value: "shuffle", label: "Shuffle" },
            { value: "in-order", label: "In order" },
          ]}
        />
        <div>
          <p className="mb-2 text-sm font-semibold">Leitner boxes</p>
          <div className="grid grid-cols-5 gap-2">
            {boxCounts.map((n, b) => (
              <div key={b} className="rounded-xl bg-surface-2 p-2 text-center">
                <p className="font-serif text-lg font-bold tabular-nums">{n}</p>
                <p className="text-[11px] text-muted">Box {b + 1}</p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted">Box 1 = new or missed. Box 4–5 = mastered.</p>
        </div>
        <Button className="w-full" onClick={start} disabled={!pool.length}>
          Study {pool.length} cards
        </Button>
      </Card>
    );
  }

  if (!card) {
    return (
      <Card className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted">Deck complete</p>
        <p className="mt-3 font-serif text-4xl font-bold">
          <span className="text-good">{tally.know}</span> <span className="text-muted">/</span>{" "}
          <span className="text-bad">{tally.again}</span>
        </p>
        <p className="text-sm text-muted">got it / study again</p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button onClick={start}>Go again</Button>
          <Button variant="secondary" onClick={() => setDeck(null)}>
            Change deck
          </Button>
        </div>
      </Card>
    );
  }

  const box = progress.boxes[card.id] ?? 1;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <button type="button" onClick={() => setDeck(null)} className="grid size-10 shrink-0 place-items-center rounded-full hover:bg-surface-2" aria-label="End">
          <Icon name="x" />
        </button>
        <ProgressBar value={i} max={deck.length} />
        <span className="shrink-0 text-sm tabular-nums text-muted">
          {i + 1}/{deck.length}
        </span>
      </div>

      <button type="button" onClick={() => setFlipped((f) => !f)} className="flip block w-full text-left" aria-label="Flip card">
        <div className={cx("flip-inner", flipped && "flipped")}>
          <div className="flip-face flex min-h-[18rem] flex-col rounded-3xl border border-line bg-surface p-6 shadow-sm sm:min-h-[20rem] sm:p-8">
            <div className="flex items-center justify-between">
              <RuleChip rule={card.rule} />
              <span className="text-xs text-muted">Box {box}</span>
            </div>
            <p className="my-auto py-6 text-center font-serif text-xl font-semibold leading-snug sm:text-2xl">{card.q}</p>
            <p className="text-center text-xs text-muted">Tap to reveal</p>
          </div>
          <div className="flip-face flip-back flex flex-col overflow-y-auto rounded-3xl border border-accent/30 bg-accent-soft p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <RuleChip rule={card.rule} />
              <span className="text-xs font-semibold text-accent">Answer</span>
            </div>
            <p className="my-auto py-4 text-center text-[17px] leading-relaxed sm:text-lg">{card.a}</p>
          </div>
        </div>
      </button>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {flipped ? (
          <>
            <Button variant="secondary" onClick={() => rate(false)} className="border-bad/40 text-bad">
              <Icon name="refresh" className="size-4" /> Again
            </Button>
            <Button onClick={() => rate(true)} className="bg-good">
              <Icon name="check" className="size-4" /> Got it
            </Button>
          </>
        ) : (
          <Button className="col-span-2" variant="secondary" onClick={() => setFlipped(true)}>
            Show answer
          </Button>
        )}
      </div>
    </div>
  );
}
