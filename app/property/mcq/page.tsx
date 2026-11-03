import type { Metadata } from "next";
import { PropertyQuiz } from "@/components/property/PropertyQuiz";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Property multiple choice" };

export default function PropertyMcqPage() {
  return (
    <>
      <PageHeader eyebrow="Property" title="Multiple choice">
        Actual bar questions from QUAMTO, plus items written from the Pre-Bar Reviewer. Each item shows its source. On a keyboard, press 1–4 to answer and
        Enter to continue.
      </PageHeader>
      <PropertyQuiz type="mcq" />
    </>
  );
}
