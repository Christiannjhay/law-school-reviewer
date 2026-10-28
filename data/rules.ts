import type { RuleId, RuleMeta } from "@/lib/types";

export const RULES: RuleMeta[] = [
  { id: 115, title: "Rights of the Accused", short: "Rights", blurb: "The nine rights at trial: innocence, information, counsel, silence, confrontation, speedy trial, appeal." },
  { id: 116, title: "Arraignment and Plea", short: "Arraignment", blurb: "FRA, automatic not-guilty pleas, plea bargaining, capital-offense pleas, bill of particulars, suspension." },
  { id: 117, title: "Motion to Quash", short: "Quash", blurb: "Nine grounds, effects of quashal, double jeopardy, provisional dismissal and the time-bar." },
  { id: 118, title: "Pre-Trial", short: "Pre-trial", blurb: "Matters taken up, stipulations, pre-trial agreement, mediation, non-appearance, the pre-trial order." },
  { id: 119, title: "Trial", short: "Trial", blurb: "Continuous trial, excluded delays, Cagang, state witness, demurrer to evidence, reopening." },
  { id: 120, title: "Judgment", short: "Judgment", blurb: "Form and contents, variance, promulgation (and in absentia), finality and immutability." },
  { id: 121, title: "New Trial or Reconsideration", short: "New trial", blurb: "Grounds, Berry Rule, recantation, form, fresh period rule, effects of grant." },
  { id: 122, title: "Appeal", short: "Appeal", blurb: "Who may appeal, routes and modes, periods, transcripts, effect and withdrawal of appeal." },
  { id: 123, title: "Procedure in the MTCs", short: "MTC", blurb: "Uniform procedure and its two exceptions." },
  { id: 124, title: "Procedure in the Court of Appeals", short: "CA", blurb: "Counsel de oficio, briefs, dismissal, CA powers, certification to the SC, new trial and MR." },
  { id: 125, title: "Procedure in the Supreme Court", short: "SC", blurb: "Uniform procedure, Rule 45 review, equally divided Court, en banc cases." },
  { id: 126, title: "Search and Seizure", short: "Search", blurb: "Search warrants, requisites, execution, chain of custody, warrantless searches, motion to quash." },
];

export const RULE_MAP = Object.fromEntries(RULES.map((r) => [r.id, r])) as Record<RuleId, RuleMeta>;
