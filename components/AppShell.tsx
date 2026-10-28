"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Icon } from "@/components/icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { EXAM_NAV, MOBILE_TABS, PRACTICE_NAV, STUDY_NAV, type NavItem } from "@/lib/nav";
import { cx } from "@/lib/util";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
}

function SideGroup({ title, items, pathname }: { title: string; items: NavItem[]; pathname: string }) {
  return (
    <div className="mt-5">
      <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-muted">{title}</p>
      <ul className="mt-1.5 space-y-0.5">
        {items.map((n) => (
          <li key={n.href}>
            <Link
              href={n.href}
              className={cx(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive(pathname, n.href)
                  ? "bg-accent-soft font-semibold text-accent"
                  : "text-ink/80 hover:bg-surface-2 hover:text-ink",
              )}
            >
              <Icon name={n.icon} className="size-[18px] shrink-0" />
              {n.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-dvh lg:flex">
      {/* Sidebar: iPad landscape and desktop */}
      <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col overflow-y-auto border-r border-line bg-surface px-3 py-5 lg:flex">
        <Link href="/" className="flex items-center gap-2.5 px-3">
          <span className="grid size-9 place-items-center rounded-xl bg-accent text-white">
            <Icon name="scale" className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[15px] font-bold">CrimPro Reviewer</span>
            <span className="block text-xs text-muted">Rules 115–126</span>
          </span>
        </Link>
        <nav className="mt-2 flex-1">
          <ul className="mt-4">
            <li>
              <Link
                href="/"
                className={cx(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm",
                  pathname === "/" ? "bg-accent-soft font-semibold text-accent" : "text-ink/80 hover:bg-surface-2",
                )}
              >
                <Icon name="home" className="size-[18px]" /> Dashboard
              </Link>
            </li>
          </ul>
          <SideGroup title="Study" items={STUDY_NAV} pathname={pathname} />
          <SideGroup title="Practice" items={PRACTICE_NAV} pathname={pathname} />
          <SideGroup title="Exam" items={EXAM_NAV} pathname={pathname} />
        </nav>
        <div className="mt-4 flex items-center justify-between px-3">
          <span className="text-xs text-muted">Theme</span>
          <ThemeToggle />
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        {/* Top bar: phone and iPad portrait */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-line bg-bg/85 px-4 py-3 backdrop-blur lg:hidden">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-accent text-white">
              <Icon name="scale" className="size-[18px]" />
            </span>
            <span className="font-serif text-base font-bold">CrimPro Reviewer</span>
          </Link>
          <div className="flex items-center gap-1">
            <Link href="/search" aria-label="Search" className="grid size-10 place-items-center rounded-full hover:bg-surface-2">
              <Icon name="search" />
            </Link>
            <ThemeToggle />
          </div>
        </header>

        <main className="mx-auto w-full max-w-5xl px-4 pb-28 pt-5 sm:px-6 md:pt-8 lg:px-10 lg:pb-16">{children}</main>
      </div>

      {/* Bottom tab bar: phone and iPad portrait */}
      <nav className="pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 backdrop-blur lg:hidden">
        <ul className="mx-auto grid max-w-xl grid-cols-5">
          {MOBILE_TABS.map((t) => {
            const active = t.match.some((m) => isActive(pathname, m));
            return (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className={cx(
                    "flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium",
                    active ? "text-accent" : "text-muted",
                  )}
                >
                  <Icon name={t.icon} className="size-[22px]" />
                  {t.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
