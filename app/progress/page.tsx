import type { Metadata } from "next";
import { DashboardStats } from "@/components/DashboardStats";
import { ProgressView } from "@/components/ProgressView";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Progress" };

export default function ProgressPage() {
  return (
    <>
      <PageHeader eyebrow="Exam" title="Your progress">
        Saved on this device as you study.
      </PageHeader>
      <DashboardStats />
      <div className="mt-5">
        <ProgressView />
      </div>
    </>
  );
}
