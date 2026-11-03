export const PROPERTY_TOPIC_IDS = [
  "classification",
  "public-private",
  "ownership",
  "accession",
  "quieting",
  "co-ownership",
  "waters",
  "possession",
  "usufruct",
  "easement",
  "nuisance",
  "modes",
  "donation",
] as const;

export type PropertyTopicId = (typeof PROPERTY_TOPIC_IDS)[number];

export interface PropertyTopic {
  id: PropertyTopicId;
  n: number;
  title: string;
  short: string;
  pages: string;
  blurb: string;
}

export interface PropertyEssayPart {
  label?: string;
  q?: string;
  a: string;
  alt?: string;
}

export interface PropertyEssay {
  id: string;
  topic: PropertyTopicId;
  title: string;
  /** Bar exam year(s) as printed in QUAMTO. */
  bar: string;
  /** Printed QUAMTO page where the problem starts. */
  page: number;
  facts: string;
  parts: PropertyEssayPart[];
  /** Reviewer's caution where the printed answer needs a second look. */
  note?: string;
}

export interface PropertyMCQ {
  id: string;
  topic: PropertyTopicId;
  q: string;
  choices: string[];
  answer: number;
  explain: string;
  source: string;
}

export interface PropertyTF {
  id: string;
  topic: PropertyTopicId;
  s: string;
  answer: boolean;
  explain: string;
  source: string;
}
