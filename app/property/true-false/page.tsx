import type { Metadata } from "next";
import { PropertyQuiz } from "@/components/property/PropertyQuiz";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Property true or false" };

export default function PropertyTrueFalsePage() {
  return (
    <>
      <PageHeader eyebrow="Property" title="True or False">
        Statements drawn from the Pre-Bar Reviewer and QUAMTO. Each item shows its source. On a keyboard, press T or F to answer.
      </PageHeader>
      <PropertyQuiz type="tf" />
    </>
  );
}
