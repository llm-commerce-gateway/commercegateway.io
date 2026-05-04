"use client";

import Link from "next/link";

export type DocsPrevNextProps = {
  prev: { title: string; href: string } | null;
  next: { title: string; href: string } | null;
};

export function DocsPrevNext({ prev, next }: DocsPrevNextProps) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Documentation pagination"
      className="not-prose mt-12 flex flex-wrap items-start justify-between gap-6 border-t pt-8"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div>
        {prev ? (
          <Link href={prev.href} className="block">
            <span className="mono block text-xs uppercase" style={{ color: "var(--color-ink-muted)" }}>
              Previous
            </span>
            <span className="text-sm" style={{ color: "var(--color-ink-secondary)" }}>
              {prev.title}
            </span>
          </Link>
        ) : null}
      </div>
      <div className="text-right">
        {next ? (
          <Link href={next.href} className="block">
            <span className="mono block text-xs uppercase" style={{ color: "var(--color-ink-muted)" }}>
              Next
            </span>
            <span className="text-sm font-medium" style={{ color: "var(--color-primary-dark)" }}>
              {next.title}
            </span>
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
