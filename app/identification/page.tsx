import type { Metadata } from "next";
import { IdentificationDrill } from "@/components/IdentificationDrill";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Identification" };

export default function IdentificationPage() {
  return (
    <>
      <PageHeader eyebrow="Practice" title="Identification">
        Read the description and type the term, doctrine, case or law. Spelling is checked leniently, and you can overrule the
        checker if your answer was right.
      </PageHeader>
      <IdentificationDrill />
    </>
  );
}
