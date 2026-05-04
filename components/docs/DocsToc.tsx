"use client";

import { useEffect, useMemo, useState } from "react";
import type { TocHeading } from "@/lib/docs";

type DocsTocProps = {
  headings: TocHeading[];
};

export function DocsToc({ headings }: DocsTocProps) {
  const [active, setActive] = useState<string | null>(headings[0]?.id ?? null);

  useEffect(() => {
    if (!headings.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-72px 0px -70% 0px", threshold: [0, 1] },
    );

    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((value): value is HTMLElement => Boolean(value));
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [headings]);

  const items = useMemo(() => headings.filter((h) => h.level === 2 || h.level === 3), [headings]);
  if (!items.length) return null;

  return (
    <aside className="hidden shrink-0 lg:block lg:w-[200px] xl:w-[220px]">
      <div className="mono text-xs" style={{ color: "var(--color-ink-muted)" }}>
        On this page
      </div>
      <nav className="sticky top-24 mt-2 max-h-[calc(100vh-8rem)] space-y-2 overflow-auto">
        {items.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className="mono block text-xs leading-snug underline-offset-4 hover:underline"
            style={{
              color: active === heading.id ? "var(--color-primary-dark)" : "var(--color-ink-secondary)",
              marginLeft: heading.level === 3 ? "0.75rem" : 0,
              opacity: heading.level === 3 ? 0.85 : 1,
            }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
