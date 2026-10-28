import { CASES, MCQS, PERIODS, TRUE_FALSE } from "@/lib/content";
import type { CaseDoctrine, MCQ, Period, RuleId, TrueFalse } from "@/lib/types";
import { sample, shuffle } from "@/lib/util";

/** A normalized multiple-choice question used by the quiz, drill and exam runners. */
export interface ChoiceQ {
  id: string;
  rule: RuleId;
  kind: "MCQ" | "True or False" | "Case doctrine" | "Periods & numbers";
  prompt: string;
  choices: string[];
  answer: number;
  explain?: string;
}

export function fromMCQ(m: MCQ): ChoiceQ {
  const order = shuffle(m.choices.map((_, i) => i));
  return {
    id: m.id,
    rule: m.rule,
    kind: "MCQ",
    prompt: m.q,
    choices: order.map((i) => m.choices[i]),
    answer: order.indexOf(m.answer),
    explain: m.explain,
  };
}

export function fromTF(t: TrueFalse): ChoiceQ {
  return {
    id: t.id,
    rule: t.rule,
    kind: "True or False",
    prompt: t.s,
    choices: ["True", "False"],
    answer: t.answer ? 0 : 1,
    explain: t.explain,
  };
}

function distractors<T>(item: T, pool: T[], key: (t: T) => string, n: number, prefer?: (t: T) => boolean) {
  const seen = new Set([key(item)]);
  const out: string[] = [];
  const ordered = [...shuffle(pool.filter((p) => prefer?.(p))), ...shuffle(pool)];
  for (const p of ordered) {
    const k = key(p);
    if (!seen.has(k)) {
      seen.add(k);
      out.push(k);
      if (out.length === n) break;
    }
  }
  return out;
}

/** Case question in one of two directions: doctrine → case name, or case name → doctrine. */
export function fromCase(c: CaseDoctrine, direction: "name" | "doctrine" = Math.random() < 0.5 ? "name" : "doctrine"): ChoiceQ {
  const sameRule = (o: CaseDoctrine) => o.rule === c.rule;
  if (direction === "name") {
    const wrong = distractors(c, CASES, (x) => x.name, 3, sameRule);
    const choices = shuffle([c.name, ...wrong]);
    return {
      id: c.id,
      rule: c.rule,
      kind: "Case doctrine",
      prompt: `Which case held: "${c.doctrine}"`,
      choices,
      answer: choices.indexOf(c.name),
      explain: `${c.name} — ${c.doctrine}`,
    };
  }
  const wrong = distractors(c, CASES, (x) => x.doctrine, 3, sameRule);
  const choices = shuffle([c.doctrine, ...wrong]);
  return {
    id: c.id,
    rule: c.rule,
    kind: "Case doctrine",
    prompt: `What did ${c.name} hold?`,
    choices,
    answer: choices.indexOf(c.doctrine),
    explain: `${c.name} — ${c.doctrine}`,
  };
}

export function fromPeriod(p: Period): ChoiceQ {
  const wrong = distractors(p, PERIODS, (x) => x.answer, 3, (x) => x.group === p.group);
  const choices = shuffle([p.answer, ...wrong]);
  return {
    id: p.id,
    rule: p.rule,
    kind: "Periods & numbers",
    prompt: p.q,
    choices,
    answer: choices.indexOf(p.answer),
  };
}

export type Source = "mcq" | "tf" | "cases" | "periods";

export function buildChoiceSet(sources: Source[], rules: RuleId[], count: number): ChoiceQ[] {
  const inRule = <T extends { rule: RuleId }>(arr: T[]) => (rules.length ? arr.filter((x) => rules.includes(x.rule)) : arr);
  const pool: ChoiceQ[] = [];
  if (sources.includes("mcq")) pool.push(...inRule(MCQS).map(fromMCQ));
  if (sources.includes("tf")) pool.push(...inRule(TRUE_FALSE).map(fromTF));
  if (sources.includes("cases")) pool.push(...inRule(CASES).map((c) => fromCase(c)));
  if (sources.includes("periods")) pool.push(...inRule(PERIODS).map(fromPeriod));
  return count > 0 ? sample(pool, count) : shuffle(pool);
}

export function poolCount(sources: Source[], rules: RuleId[]) {
  const n = <T extends { rule: RuleId }>(arr: T[]) => (rules.length ? arr.filter((x) => rules.includes(x.rule)).length : arr.length);
  return (
    (sources.includes("mcq") ? n(MCQS) : 0) +
    (sources.includes("tf") ? n(TRUE_FALSE) : 0) +
    (sources.includes("cases") ? n(CASES) : 0) +
    (sources.includes("periods") ? n(PERIODS) : 0)
  );
}

/** Rebuild questions for specific ids (used for "review mistakes"). */
export function choiceById(id: string): ChoiceQ | null {
  if (id.startsWith("mcq-")) {
    const m = MCQS.find((x) => x.id === id);
    return m ? fromMCQ(m) : null;
  }
  if (id.startsWith("tf-")) {
    const t = TRUE_FALSE.find((x) => x.id === id);
    return t ? fromTF(t) : null;
  }
  if (id.startsWith("case-")) {
    const c = CASES.find((x) => x.id === id);
    return c ? fromCase(c) : null;
  }
  if (id.startsWith("per-")) {
    const p = PERIODS.find((x) => x.id === id);
    return p ? fromPeriod(p) : null;
  }
  return null;
}
