import type { Metadata } from "next";
import { SearchView } from "@/components/SearchView";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Search" };

export default function SearchPage() {
  return (
    <>
      <PageHeader eyebrow="Study" title="Search">
        Search the notes, cases, mnemonics, Q&amp;A and periods at once.
      </PageHeader>
      <SearchView />
    </>
  );
}
