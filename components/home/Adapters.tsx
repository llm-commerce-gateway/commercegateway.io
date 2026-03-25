import Link from "next/link";

const adapters = [
  {
    name: "Claude (Anthropic)",
    description: "tool_use format, streaming supported, multi-turn tool loops",
    href: "/docs/adapters/claude",
  },
  {
    name: "OpenAI (GPT-4o, o-series)",
    description: "function_calling + parallel tool calls, JSON mode",
    href: "/docs/adapters/openai",
  },
  {
    name: "Grok (xAI)",
    description: "OpenAI-compatible API, function calling",
    href: "/docs/adapters/grok",
  },
  {
    name: "Gemini (Google)",
    description: "function_declarations format, Gemini 1.5+ Pro/Flash",
    href: "/docs/adapters/gemini",
  },
];

export function Adapters() {
  return (
    <section id="adapters" className="border-b py-16">
      <div className="container">
        <h2 className="text-3xl">Works with every major AI platform</h2>
        <p className="mt-2 text-sm" style={{ color: "var(--color-ink-secondary)" }}>
          Adapters handle tool schema translation automatically.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {adapters.map((adapter) => (
            <article key={adapter.name} className="rounded-lg border p-5" style={{ borderColor: "var(--color-border)" }}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg">{adapter.name}</h3>
                <span
                  className="mono rounded-full px-3 py-1 text-xs"
                  style={{ background: "var(--color-primary-light)", color: "var(--color-primary-dark)" }}
                >
                  Live
                </span>
              </div>
              <p className="mt-2 text-sm" style={{ color: "var(--color-ink-secondary)" }}>
                {adapter.description}
              </p>
              <Link href={adapter.href} className="mono mt-4 inline-block text-sm" style={{ color: "var(--color-primary)" }}>
                Open docs →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
