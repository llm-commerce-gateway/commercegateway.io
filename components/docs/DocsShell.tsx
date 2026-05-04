import type { ReactNode } from "react";
import type { TocHeading } from "@/lib/docs";
import { DocsToc } from "./DocsToc";
import { EditOnGitHub } from "./EditOnGitHub";

type DocsShellProps = {
  sectionLabel: string;
  title: string;
  description: string;
  readingTimeText: string;
  headings: TocHeading[];
  filePath: string;
  children: ReactNode;
};

export function DocsShell({
  sectionLabel,
  title,
  description,
  readingTimeText,
  headings,
  filePath,
  children,
}: DocsShellProps) {
  return (
    <div className="not-prose flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
      <div className="min-w-0 flex-1">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="mono text-xs uppercase tracking-wide" style={{ color: "var(--color-primary)" }}>
              {sectionLabel}
            </p>
            <h1 className="mt-1 text-3xl font-semibold" style={{ color: "var(--color-ink)" }}>
              {title}
            </h1>
            <p className="mt-3 max-w-2xl text-base" style={{ color: "var(--color-ink-secondary)" }}>
              {description}
            </p>
            <p className="mono mt-2 text-xs" style={{ color: "var(--color-ink-muted)" }}>
              {readingTimeText} · {sectionLabel}
            </p>
          </div>
          <EditOnGitHub filePath={filePath} />
        </div>
        <div className="prose max-w-none">{children}</div>
      </div>
      <DocsToc headings={headings} />
    </div>
  );
}
