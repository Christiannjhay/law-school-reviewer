import type { Metadata } from "next";
import { Flashcards } from "@/components/Flashcards";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Flashcards" };

export default function FlashcardsPage() {
  return (
    <>
      <PageHeader eyebrow="Practice" title="Flashcards">
        Tap a card to flip it, then rate yourself. Cards you know move up a box and show up less; cards you miss go back to
        box 1. On a keyboard: Space flips, ← again, → got it.
      </PageHeader>
      <Flashcards />
    </>
  );
}
