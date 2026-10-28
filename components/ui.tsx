"use client";

import type { ReactNode } from "react";
import { RULES } from "@/data/rules";
import type { RuleId } from "@/lib/types";
import { cx } from "@/lib/util";

export function PageHeader({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <header className="mb-6">
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>}
      <h1 className="mt-1 font-serif text-[1.75rem] font-bold leading-tight sm:text-3xl">{title}</h1>
      {children && <div className="mt-2 max-w-2xl text-[15px] text-muted">{children}</div>}
    </header>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("rounded-2xl border border-line bg-surface p-4 sm:p-5", className)}>{children}</div>;
}

export function Button({
  children,
  onClick,
  variant = "primary",
  className,
  disabled,
  type = "button",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cx(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition active:scale-[0.98] disabled:opacity-40",
        variant === "primary" && "bg-accent text-white hover:brightness-110 dark:text-[#1b0a10]",
        variant === "secondary" && "border border-line bg-surface text-ink hover:bg-surface-2",
        variant === "ghost" && "text-ink/80 hover:bg-surface-2",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function RuleChip({ rule }: { rule: RuleId }) {
  return (
    <span className="inline-flex items-center rounded-md bg-gold-soft px-1.5 py-0.5 text-[11px] font-semibold text-gold">
      Rule {rule}
    </span>
  );
}

/** Multi-select rule filter. Empty selection means all rules. */
export function RuleFilter({ value, onChange }: { value: RuleId[]; onChange: (v: RuleId[]) => void }) {
  const toggle = (id: RuleId) => onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id]);
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Rules</p>
        <button type="button" onClick={() => onChange([])} className="text-xs font-semibold text-accent">
          {value.length ? "Clear (all rules)" : "All rules selected"}
        </button>
      </div>
      <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-6">
        {RULES.map((r) => {
          const on = value.includes(r.id);
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => toggle(r.id)}
              aria-pressed={on}
              className={cx(
                "min-h-11 rounded-xl border px-2 py-1.5 text-left transition",
                on ? "border-accent bg-accent-soft" : "border-line bg-surface hover:bg-surface-2",
              )}
            >
              <span className={cx("block text-sm font-bold", on && "text-accent")}>{r.id}</span>
              <span className="block truncate text-[11px] text-muted">{r.short}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Segmented<T extends string | number>({
  options,
  value,
  onChange,
  label,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  label?: string;
}) {
  return (
    <div>
      {label && <p className="mb-2 text-sm font-semibold">{label}</p>}
      <div className="no-scrollbar flex gap-1 overflow-x-auto rounded-xl bg-surface-2 p-1">
        {options.map((o) => (
          <button
            key={String(o.value)}
            type="button"
            onClick={() => onChange(o.value)}
            className={cx(
              "min-h-10 flex-1 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition",
              o.value === value ? "bg-surface text-ink shadow-sm" : "text-muted",
            )}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ProgressBar({ value, max, className }: { value: number; max: number; className?: string }) {
  const pct = max ? Math.round((value / max) * 100) : 0;
  return (
    <div className={cx("h-2 w-full overflow-hidden rounded-full bg-surface-2", className)}>
      <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}

export function Empty({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl border border-dashed border-line p-8 text-center text-muted">{children}</div>;
}
