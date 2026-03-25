"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { docsNav } from "@/lib/nav";

export function DocsSidebar() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  const nav = useMemo(() => {
    if (!query.trim()) return docsNav;
    const q = query.toLowerCase();
    return docsNav
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => item.title.toLowerCase().includes(q) || item.slug.includes(q)),
      }))
      .filter((section) => section.items.length > 0);
  }, [query]);

  return (
    <aside className="space-y-4">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search docs..."
        className="w-full rounded border px-3 py-2 text-sm"
        style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
      />

      {nav.map((group) => (
        <section key={group.section}>
          <h3 className="mono text-xs" style={{ color: "var(--color-primary)" }}>
            {group.section}
          </h3>
          <ul className="mt-2 space-y-1">
            {group.items.map((item) => {
              const href = `/docs/${item.slug}`;
              const active = pathname === href;
              return (
                <li key={item.slug}>
                  <Link
                    href={href}
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
