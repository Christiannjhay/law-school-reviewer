"use client";

import { useSyncExternalStore } from "react";

/**
 * Tiny localStorage-backed store for study progress. Everything is per-device;
 * reads and writes are wrapped so private browsing or blocked storage just
 * falls back to in-memory state.
 */

export type Mode =
  | "flashcards"
  | "quiz"
  | "truefalse"
  | "identification"
  | "mnemonics"
  | "cases"
  | "periods"
  | "essay"
  | "exam";

export interface ExamRecord {
  at: number;
  score: number;
  total: number;
  rules: number[];
  seconds: number;
}

export interface ProgressState {
  /** itemId -> { right, wrong } */
  answers: Record<string, { r: number; w: number; mode: Mode }>;
  /** flashcard id -> Leitner box 1..5 */
  boxes: Record<string, number>;
  bookmarks: string[];
  readRules: number[];
  exams: ExamRecord[];
  streak: { last: string; days: number };
}

const KEY = "crimpro-progress-v1";

const empty: ProgressState = {
  answers: {},
  boxes: {},
  bookmarks: [],
  readRules: [],
  exams: [],
  streak: { last: "", days: 0 },
};

let state: ProgressState = empty;
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) state = { ...empty, ...JSON.parse(raw) };
  } catch {
    state = empty;
  }
}

function save() {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable: keep in memory */
  }
}

function today() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function touchStreak(s: ProgressState): ProgressState["streak"] {
  const t = today();
  if (s.streak.last === t) return s.streak;
  const y = new Date(Date.now() - 86400000);
  const yesterday = `${y.getFullYear()}-${y.getMonth() + 1}-${y.getDate()}`;
  return { last: t, days: s.streak.last === yesterday ? s.streak.days + 1 : 1 };
}

function update(fn: (s: ProgressState) => ProgressState) {
  load();
  state = fn(state);
  save();
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

function getSnapshot() {
  load();
  return state;
}

function getServerSnapshot() {
  return empty;
}

export function useProgress() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function recordAnswer(id: string, correct: boolean, mode: Mode) {
  update((s) => {
    const prev = s.answers[id] ?? { r: 0, w: 0, mode };
    return {
      ...s,
      streak: touchStreak(s),
      answers: {
        ...s.answers,
        [id]: { r: prev.r + (correct ? 1 : 0), w: prev.w + (correct ? 0 : 1), mode },
      },
    };
  });
}

export function setBox(id: string, box: number) {
  update((s) => ({ ...s, streak: touchStreak(s), boxes: { ...s.boxes, [id]: box } }));
}

export function toggleBookmark(id: string) {
  update((s) => ({
    ...s,
    bookmarks: s.bookmarks.includes(id) ? s.bookmarks.filter((b) => b !== id) : [...s.bookmarks, id],
  }));
}

export function markRuleRead(rule: number) {
  update((s) =>
    s.readRules.includes(rule) ? s : { ...s, streak: touchStreak(s), readRules: [...s.readRules, rule] },
  );
}

export function addExam(rec: ExamRecord) {
  update((s) => ({ ...s, streak: touchStreak(s), exams: [rec, ...s.exams].slice(0, 30) }));
}

export function resetProgress() {
  update(() => empty);
}

/** Ids answered wrong more recently/often than right. */
export function weakIds(s: ProgressState) {
  return Object.entries(s.answers)
    .filter(([, v]) => v.w > 0 && v.w >= v.r)
    .map(([id]) => id);
}
