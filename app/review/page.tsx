import type { Metadata } from "next";
import { ReviewMistakes } from "@/components/ReviewMistakes";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Review mistakes" };

export default function ReviewPage() {
  return (
    <>
      <PageHeader eyebrow="Exam" title="Review mistakes">
        Everything you have missed more often than you got right, across all practice modes.
      </PageHeader>
      <ReviewMistakes />
    </>
  );
}
