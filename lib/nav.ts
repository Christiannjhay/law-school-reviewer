import type { IconName } from "@/components/icons";

export interface NavItem {
  href: string;
  label: string;
  icon: IconName;
  desc: string;
}

export const STUDY_NAV: NavItem[] = [
  { href: "/rules", label: "Study notes", icon: "book", desc: "Full outline of every rule, with mnemonics and cases" },
  { href: "/cram", label: "Cram sheet", icon: "bolt", desc: "All mnemonics on one page for last-minute review" },
  { href: "/compare", label: "Distinctions", icon: "table", desc: "Side-by-side comparison tables, with cover mode" },
  { href: "/search", label: "Search", icon: "search", desc: "Find any doctrine, case or provision" },
];

export const PRACTICE_NAV: NavItem[] = [
  { href: "/flashcards", label: "Flashcards", icon: "cards", desc: "Flip cards with spaced-repetition boxes" },
  { href: "/quiz", label: "Multiple choice", icon: "quiz", desc: "Bar-style MCQs with explanations" },
  { href: "/true-false", label: "True or False", icon: "check", desc: "Rapid-fire statements to test precision" },
  { href: "/identification", label: "Identification", icon: "pen", desc: "Type the term, case or rule" },
  { href: "/mnemonics", label: "Mnemonics & enumeration", icon: "brain", desc: "Recall every list from its mnemonic" },
  { href: "/cases", label: "Case doctrines", icon: "gavel", desc: "Match cases to their holdings" },
  { href: "/periods", label: "Periods & numbers", icon: "clock", desc: "Drill every day, month and peso amount" },
  { href: "/essays", label: "Essay / situational", icon: "scale", desc: "Bar-type problems with model answers" },
];

export const EXAM_NAV: NavItem[] = [
  { href: "/exam", label: "Mock exam", icon: "target", desc: "Timed, mixed exam with full review" },
  { href: "/review", label: "Review mistakes", icon: "refresh", desc: "Retake only the items you missed" },
  { href: "/progress", label: "Progress", icon: "chart", desc: "Your stats, streak and history" },
];

export const MOBILE_TABS: { href: string; label: string; icon: IconName; match: string[] }[] = [
  { href: "/crimpro", label: "Home", icon: "home", match: ["/crimpro"] },
  { href: "/rules", label: "Study", icon: "book", match: ["/rules", "/cram", "/compare", "/search"] },
  { href: "/practice", label: "Practice", icon: "cards", match: ["/practice", ...PRACTICE_NAV.map((n) => n.href)] },
  { href: "/exam", label: "Exam", icon: "target", match: ["/exam", "/review"] },
  { href: "/progress", label: "Progress", icon: "chart", match: ["/progress"] },
];

export const PROPERTY_NAV: NavItem[] = [
  { href: "/property/notes", label: "Study notes", icon: "book", desc: "Book II – Property, from the Pre-Bar Reviewer (pp. 156–240)" },
  { href: "/property/mock-board", label: "Mock board / essay", icon: "scale", desc: "QUAMTO problems (pp. 76–121) with the provided answers" },
  { href: "/property/mcq", label: "Multiple choice", icon: "quiz", desc: "Actual bar MCQs and new items, with explanations" },
  { href: "/property/true-false", label: "True or False", icon: "check", desc: "Rapid-fire statements to test precision" },
];

export const PROPERTY_TABS: { href: string; label: string; icon: IconName; match: string[] }[] = [
  { href: "/property", label: "Home", icon: "home", match: ["/property"] },
  { href: "/property/notes", label: "Notes", icon: "book", match: ["/property/notes"] },
  { href: "/property/mock-board", label: "Mock board", icon: "scale", match: ["/property/mock-board"] },
  { href: "/property/mcq", label: "MCQ", icon: "quiz", match: ["/property/mcq"] },
  { href: "/property/true-false", label: "T / F", icon: "check", match: ["/property/true-false"] },
];
