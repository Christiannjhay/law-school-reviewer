import type { SVGProps } from "react";

const paths = {
  home: "M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9.5Z",
  book: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Zm0 16a2 2 0 0 1 2-2h13v2H6",
  cards: "M4 7h12v13H4zM8 4h12v13",
  quiz: "M9 9a3 3 0 1 1 4.2 2.75c-.75.33-1.2 1.07-1.2 1.88V14m0 3.5h.01M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z",
  check: "M20 6 9 17l-5-5",
  x: "M18 6 6 18M6 6l12 12",
  scale: "M12 3v18M7 21h10M5 7h14M5 7l-3 7a4 4 0 0 0 6 0L5 7Zm14 0-3 7a4 4 0 0 0 6 0l-3-7Z",
  clock: "M12 7v5l3 2M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z",
  brain: "M9 3a3 3 0 0 0-3 3v.5A3 3 0 0 0 4 9.3 3 3 0 0 0 5 14a3 3 0 0 0 3 4 3 3 0 0 0 4 1V4a3 3 0 0 0-3-1Zm6 0a3 3 0 0 1 3 3v.5a3 3 0 0 1 2 2.8 3 3 0 0 1-1 4.7 3 3 0 0 1-3 4 3 3 0 0 1-4 1",
  search: "m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z",
  chart: "M4 20V10m6 10V4m6 16v-7m4 7H2",
  sun: "M12 3v2m0 14v2M5.6 5.6 7 7m10 10 1.4 1.4M3 12h2m14 0h2M5.6 18.4 7 17M17 7l1.4-1.4M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z",
  moon: "M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z",
  bookmark: "M6 3h12v18l-6-4-6 4V3Z",
  shuffle: "M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5",
  left: "m15 18-6-6 6-6",
  right: "m9 18 6-6-6-6",
  pen: "M12 20h9M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5Z",
  table: "M3 5h18v14H3zM3 10h18M3 15h18M9 5v14",
  gavel: "m14 13-8.5 8.5a2.1 2.1 0 1 1-3-3L11 10m5 6 6-6M8 8l6-6m-3 3 8 8",
  list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  hash: "M4 9h16M4 15h16M10 3 8 21M16 3l-2 18",
  bolt: "M13 2 3 14h9l-1 8 10-12h-9l1-8Z",
  target: "M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm0-4a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z",
  grid: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
  flame: "M12 22c4 0 7-3 7-7 0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-3 3-5 5-5 8 0 4 3 7 7 7Z",
  menu: "M4 6h16M4 12h16M4 18h16",
  eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  refresh: "M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.2L3 16m0 5v-5h5",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className = "size-5", ...rest }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      <path d={paths[name]} />
    </svg>
  );
}
