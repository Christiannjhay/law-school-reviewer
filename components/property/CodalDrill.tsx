"use client";

import { useState } from "react";
import { PropertyQuiz } from "@/components/property/PropertyQuiz";
import { Segmented } from "@/components/ui";
import { CODAL_MCQS } from "@/data/property/codal-mcq";
import { CODAL_TF } from "@/data/property/codal-truefalse";

/** Codal drill on Arts. 414–773: its own MCQ and True or False banks, never mixed with the regular Property sets. */
export function CodalDrill() {
  const [type, setType] = useState<"mcq" | "tf">("mcq");
  return (
    <div className="space-y-4">
      <Segmented
        label="Question type"
        value={type}
        onChange={setType}
        options={[
          { value: "mcq", label: `Multiple choice (${CODAL_MCQS.length})` },
          { value: "tf", label: `True or False (${CODAL_TF.length})` },
        ]}
      />
      <PropertyQuiz key={type} type={type} codal />
    </div>
  );
}
