import type { ReactNode } from "react";
import { DocsSidebar } from "@/components/nav/DocsSidebar";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <section className="container py-8">
      <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div
          className="rounded-lg border p-4 lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-auto"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-surface)",
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "thin",
          }}
        >
          <DocsSidebar />
        </div>
        <article className="prose min-w-0 pb-12">{children}</article>
      </div>
    </section>
  );
}
