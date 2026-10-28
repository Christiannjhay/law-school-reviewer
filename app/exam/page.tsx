import type { Metadata } from "next";
import { MockExam } from "@/components/MockExam";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Mock exam" };

export default function ExamPage() {
  return (
    <>
      <PageHeader eyebrow="Exam" title="Mock exam">
        A timed, mixed exam drawn from every objective question bank. Results show your score per rule and the doctrine behind
        each miss.
      </PageHeader>
      <MockExam />
    </>
  );
}
