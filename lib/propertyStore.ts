"use client";

import { useSyncExternalStore } from "react";

/** Per-device Property progress, kept apart from the Criminal Procedure stats. */
export interface PropertyProgress {
  answers: Record<string, { r: number; w: number }>;
  read: string[];
}

const KEY = "property-progress-v1";
const empty: PropertyProgress = { answers: {}, read: [] };

let state = empty;
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

function update(fn: (s: PropertyProgress) => PropertyProgress) {
  load();
  state = fn(state);
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable: keep in memory */
  }
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function usePropertyProgress() {
  return useSyncExternalStore(
    subscribe,
    () => {
      load();
      return state;
    },
    () => empty,
  );
}

export function recordPropertyAnswer(id: string, correct: boolean) {
  update((s) => {
    const prev = s.answers[id] ?? { r: 0, w: 0 };
    return { ...s, answers: { ...s.answers, [id]: { r: prev.r + (correct ? 1 : 0), w: prev.w + (correct ? 0 : 1) } } };
  });
}

export function markPropertyTopicRead(id: string) {
  update((s) => (s.read.includes(id) ? s : { ...s, read: [...s.read, id] }));
}
