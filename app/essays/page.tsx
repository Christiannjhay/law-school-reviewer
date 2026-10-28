import type { Metadata } from "next";
import { EssayDrill } from "@/components/EssayDrill";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Essay / situational" };

export default function EssaysPage() {
  return (
    <>
      <PageHeader eyebrow="Practice" title="Essay & situational problems">
        Bar-type fact patterns. Write your answer, reveal the suggested answer, then tick the key points you covered to grade
        yourself.
      </PageHeader>
      <EssayDrill />
    </>
  );
}
