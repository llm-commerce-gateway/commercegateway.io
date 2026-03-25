"use client";

import { useState } from "react";

export function CodeBlock({
  children,
  language = "text",
}: {
  children: string;
  language?: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="my-4 overflow-hidden rounded-md border" style={{ borderColor: "var(--color-border-dark)" }}>
      <div
        className="flex items-center justify-between px-3 py-2 text-xs"
        style={{ background: "var(--color-surface-dark-alt)", color: "var(--color-code-text)" }}
      >
        <span className="mono">{language}</span>
        <button type="button" onClick={onCopy} className="mono">
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm" style={{ background: "var(--color-code-bg)", color: "var(--color-code-text)" }}>
        <code>{children}</code>
      </pre>
    </div>
  );
}
