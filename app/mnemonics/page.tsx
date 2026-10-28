import type { Metadata } from "next";
import { MnemonicsDrill } from "@/components/MnemonicsDrill";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Mnemonics & enumeration" };

export default function MnemonicsPage() {
  return (
    <>
      <PageHeader eyebrow="Practice" title="Mnemonics & enumeration">
        Enumeration questions are exam favorites. <b>Recall</b> reveals items one at a time; <b>Enumerate</b> has you type the
        whole list and checks it; <b>Browse</b> shows every mnemonic with its items.
      </PageHeader>
      <MnemonicsDrill />
    </>
  );
}
