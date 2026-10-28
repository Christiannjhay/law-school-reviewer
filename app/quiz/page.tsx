import type { Metadata } from "next";
import { ChoicePractice } from "@/components/ChoicePractice";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Multiple choice" };

export default function QuizPage() {
  return (
    <>
      <PageHeader eyebrow="Practice" title="Multiple choice">
        Bar-style questions with four options. You get instant feedback and the doctrine behind each answer. On a keyboard,
        press 1–4 to answer and Enter to continue.
      </PageHeader>
      <ChoicePractice sources={["mcq"]} mode="quiz" />
    </>
  );
}
