export const RULE_IDS = [115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126] as const;
export type RuleId = (typeof RULE_IDS)[number];

export interface RuleMeta {
  id: RuleId;
  title: string;
  short: string;
  blurb: string;
}

export interface Flashcard {
  id: string;
  rule: RuleId;
  q: string;
  a: string;
}

export interface MCQ {
  id: string;
  rule: RuleId;
  q: string;
  choices: string[];
  answer: number;
  explain: string;
}

export interface TrueFalse {
  id: string;
  rule: RuleId;
  s: string;
  answer: boolean;
  explain: string;
}

export interface Identification {
  id: string;
  rule: RuleId;
  q: string;
  /** Accepted answers; the first is the canonical one shown on reveal. */
  answers: string[];
  explain?: string;
}

export interface Mnemonic {
  id: string;
  rule: RuleId;
  topic: string;
  mnemonic: string;
  items: string[];
}

export interface CaseDoctrine {
  id: string;
  rule: RuleId;
  name: string;
  doctrine: string;
}

export interface Period {
  id: string;
  rule: RuleId;
  q: string;
  answer: string;
  /** Items in the same group are used as distractors for each other. */
  group: "days" | "months" | "years" | "amount" | "count" | "other";
}

export interface Essay {
  id: string;
  rule: RuleId;
  title: string;
  facts: string;
  question: string;
  answer: string;
  points: string[];
}

export interface Comparison {
  id: string;
  rule: RuleId;
  title: string;
  headers: string[];
  rows: string[][];
}
