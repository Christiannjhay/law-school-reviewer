import type { Metadata } from "next";
import { CasesView } from "@/components/CasesView";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Case doctrines" };

export default function CasesPage() {
  return (
    <>
      <PageHeader eyebrow="Practice" title="Case doctrines">
        Every leading case in the reviewer. Quiz yourself by matching case names and holdings, or browse the digest list.
      </PageHeader>
      <CasesView />
    </>
  );
}
