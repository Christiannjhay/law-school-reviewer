import type { Metadata } from "next";
import { ChoicePractice } from "@/components/ChoicePractice";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "True or False" };

export default function TrueFalsePage() {
  return (
    <>
      <PageHeader eyebrow="Practice" title="True or False">
        Rapid-fire statements that test precise knowledge of the rules and their exceptions. Press T or F on a keyboard.
      </PageHeader>
      <ChoicePractice sources={["tf"]} mode="truefalse" />
    </>
  );
}
