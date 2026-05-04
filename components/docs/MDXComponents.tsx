import type { MDXComponents as Components } from "mdx/types";
import { CodeBlock } from "./CodeBlock";

type CalloutVariant = "info" | "warning" | "tip";

function Callout({ variant = "info", children }: { variant?: CalloutVariant; children: React.ReactNode }) {
  const styles: Record<CalloutVariant, { bg: string; border: string; text: string }> = {
    info: { bg: "#f1f5f9", border: "#cbd5e1", text: "#334155" },
    warning: { bg: "#fffbeb", border: "#fde68a", text: "#92400e" },
    tip: { bg: "#ecfdf5", border: "#a7f3d0", text: "#065f46" },
  };
  const style = styles[variant];
  return (
    <div className="my-4 rounded-md border px-4 py-3 text-sm" style={{ background: style.bg, borderColor: style.border, color: style.text }}>
      {children}
    </div>
  );
}

function APITable({ children }: { children: React.ReactNode }) {
  return <div className="my-4 overflow-x-auto">{children}</div>;
}

function SelfHostBadge() {
  return (
    <span className="mono rounded-full px-2 py-1 text-xs" style={{ background: "var(--color-primary-light)", color: "var(--color-primary-dark)" }}>
      Self-hostable
    </span>
  );
}

function HostedBadge() {
  return (
    <span className="mono rounded-full border px-2 py-1 text-xs" style={{ borderColor: "var(--color-border)", color: "var(--color-ink-secondary)" }}>
      Better Data Hosted
    </span>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return <Callout variant="tip">{children}</Callout>;
}

export const MDXComponents: Components = {
  pre: ({ children }) => <>{children}</>,
  code: ({ children, className }) => {
    if (!className) {
      return (
        <code
          className="rounded px-1 py-0.5"
          style={{ background: "var(--color-surface-alt)", color: "var(--color-ink)" }}
        >
          {children}
        </code>
      );
    }
    const language = className?.replace("language-", "") ?? "text";
    if (typeof children === "string") {
      return <CodeBlock language={language}>{children}</CodeBlock>;
    }
    return <code className={className}>{children}</code>;
  },
  table: ({ children }) => (
    <table className="w-full border-collapse text-sm">
      {children}
    </table>
  ),
  thead: ({ children }) => <thead style={{ background: "var(--color-surface-alt)" }}>{children}</thead>,
  th: ({ children }) => <th className="border px-3 py-2 text-left" style={{ borderColor: "var(--color-border)" }}>{children}</th>,
  td: ({ children }) => <td className="border px-3 py-2" style={{ borderColor: "var(--color-border)" }}>{children}</td>,
  Callout,
  Note,
  APITable,
  SelfHostBadge,
  HostedBadge,
};

export { Callout, Note, APITable, SelfHostBadge, HostedBadge };
