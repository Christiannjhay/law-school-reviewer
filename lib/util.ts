export function shuffle<T>(arr: readonly T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function sample<T>(arr: readonly T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

export function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[“”"'’`.,;:()\[\]!?-]/g, " ")
    .replace(/\b(the|a|an|of|v|vs)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Lenient answer check: exact after normalizing, or high token overlap. */
export function isCloseEnough(input: string, accepted: string[]) {
  const n = normalize(input);
  if (!n) return false;
  return accepted.some((a) => {
    const t = normalize(a);
    if (n === t) return true;
    const want = t.split(" ").filter((w) => w.length > 2);
    if (!want.length) return false;
    const got = new Set(n.split(" "));
    const hit = want.filter((w) => got.has(w)).length;
    return hit / want.length >= 0.75;
  });
}

/** Keyword-based match for enumeration items: true if most key words appear. */
export function matchesItem(input: string, item: string) {
  const key = normalize(item.split(/[:(—–]/)[0])
    .split(" ")
    .filter((w) => w.length > 3);
  if (!key.length) return normalize(input) === normalize(item);
  const got = normalize(input);
  const hit = key.filter((w) => got.includes(w.slice(0, Math.max(4, w.length - 2)))).length;
  return hit / key.length >= 0.6;
}

export function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function cx(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}
