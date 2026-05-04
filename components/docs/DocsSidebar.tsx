"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import type { DocNavSection } from "@/lib/docs";
import { DOCS_SEARCH_OPEN_EVENT } from "@/lib/docs-search-events";

type DocsSidebarProps = {
  sections: DocNavSection[];
};

function isActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DocsSidebar({ sections }: DocsSidebarProps) {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const visible = useMemo(() => {
    if (!normalizedQuery) return sections;
    return sections
      .map((section) => ({
        ...section,
        items: section.items.filter(
          (item) =>
            item.title.toLowerCase().includes(normalizedQuery) ||
            item.href.toLowerCase().includes(normalizedQuery),
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [normalizedQuery, sections]);

  return (
    <aside className="space-y-4">
      <div>
        <p className="mono mb-2 text-xs" style={{ color: "var(--color-ink-muted)" }}>
          Search
        </p>
        <button
          type="button"
          className="w-full rounded border px-3 py-2 text-left text-sm transition-colors hover:bg-[var(--color-surface-alt)]"
          style={{ borderColor: "var(--color-border)", color: "var(--color-ink-secondary)" }}
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent(DOCS_SEARCH_OPEN_EVENT, { detail: { source: "sidebar" } }),
            )
          }
        >
          Open search <span className="opacity-70">⌘K</span>
        </button>
      </div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter docs..."
        className="w-full rounded border px-3 py-2 text-sm"
        style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
      />

      {visible.length === 0 ? (
        <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
          No matching pages.
        </p>
      ) : null}

      {visible.map((group) => (
        <section key={group.label}>
          <h3 className="mono text-xs" style={{ color: "var(--color-primary)" }}>
            {group.label}
          </h3>
          <ul className="mt-2 space-y-1">
            {group.items.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded px-2 py-1 text-sm"
                    style={{
                      color: active ? "var(--color-primary-dark)" : "var(--color-ink-secondary)",
                      background: active ? "var(--color-primary-light)" : "transparent",
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </aside>
  );
}
