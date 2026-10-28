import type { Metadata } from "next";
import { CompareView } from "@/components/CompareView";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Distinctions" };

export default function ComparePage() {
  return (
    <>
      <PageHeader eyebrow="Study" title="Distinctions">
        &ldquo;Distinguish X from Y&rdquo; questions, laid out side by side. Turn on cover mode to test yourself cell by cell.
      </PageHeader>
      <CompareView />
    </>
  );
}
