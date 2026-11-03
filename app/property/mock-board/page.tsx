import type { Metadata } from "next";
import { MockBoard } from "@/components/property/MockBoard";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Property mock board" };

export default function PropertyMockBoardPage() {
  return (
    <>
      <PageHeader eyebrow="Property" title="Mock board / essay">
        Bar problems from <em>QUAMTO Civil Law</em> (pp. 76–121). Write your answer, reveal the provided answer, then grade yourself. Answers are shown as
        printed.
      </PageHeader>
      <MockBoard />
    </>
  );
}
