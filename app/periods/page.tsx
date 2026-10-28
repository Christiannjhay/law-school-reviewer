import type { Metadata } from "next";
import { ChoicePractice } from "@/components/ChoicePractice";
import { PeriodTable } from "@/components/PeriodTable";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Periods & numbers" };

export default function PeriodsPage() {
  return (
    <>
      <PageHeader eyebrow="Practice" title="Periods & numbers">
        Every day, month, year and peso amount in Rules 115–126. Drill them as a quiz, or scan the full table below.
      </PageHeader>
      <ChoicePractice sources={["periods"]} mode="periods" />
      <PeriodTable />
    </>
  );
}
