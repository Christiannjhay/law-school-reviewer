import { CASES } from "@/data/cases";
import { COMPARISONS } from "@/data/comparisons";
import { ESSAYS } from "@/data/essays";
import { FLASHCARDS } from "@/data/flashcards";
import { IDENTIFICATION } from "@/data/identification";
import { MCQS } from "@/data/mcq";
import { MNEMONICS } from "@/data/mnemonics";
import { PERIODS } from "@/data/periods";
import { TRUE_FALSE } from "@/data/truefalse";
import type { RuleId } from "@/lib/types";

export { CASES, COMPARISONS, ESSAYS, FLASHCARDS, IDENTIFICATION, MCQS, MNEMONICS, PERIODS, TRUE_FALSE };

export const COUNTS = {
  flashcards: FLASHCARDS.length,
  mcq: MCQS.length,
  truefalse: TRUE_FALSE.length,
  identification: IDENTIFICATION.length,
  mnemonics: MNEMONICS.length,
  cases: CASES.length,
  periods: PERIODS.length,
  essays: ESSAYS.length,
  comparisons: COMPARISONS.length,
};

export const TOTAL_ITEMS = Object.values(COUNTS).reduce((a, b) => a + b, 0);

export function byRules<T extends { rule: RuleId }>(items: T[], rules: RuleId[]) {
  return rules.length ? items.filter((i) => rules.includes(i.rule)) : items;
}

export function countForRule(rule: RuleId) {
  return [FLASHCARDS, MCQS, TRUE_FALSE, IDENTIFICATION, MNEMONICS, CASES, PERIODS, ESSAYS, COMPARISONS].reduce(
    (n, arr) => n + (arr as { rule: RuleId }[]).filter((i) => i.rule === rule).length,
    0,
  );
}
