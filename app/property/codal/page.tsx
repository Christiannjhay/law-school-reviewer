import type { Metadata } from "next";
import { CodalDrill } from "@/components/property/CodalDrill";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Property codal drill" };

export default function PropertyCodalPage() {
  return (
    <>
      <PageHeader eyebrow="Property · Codal" title="Arts. 414–773, Civil Code">
        Multiple choice and True or False taken straight from the text of Book II and Book III, Title III (Donation) of the New Civil Code (RA 386, as amended).
        These are kept separate from the regular Property sets. Each item cites its article.
      </PageHeader>
      <CodalDrill />
    </>
  );
}
