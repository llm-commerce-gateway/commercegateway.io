import Link from "next/link";

export function Hero() {
  return (
    <section className="border-b py-16">
      <div className="container grid gap-10 lg:grid-cols-2">
        <div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 6vw, var(--text-4xl))",
              lineHeight: 1.05,
              maxWidth: 700,
            }}
          >
            Every LLM. Every commerce platform. One tool schema.
          </h1>
          <p className="mt-4 max-w-[600px]" style={{ color: "var(--color-ink-secondary)", fontSize: "var(--text-lg)" }}>
            Commerce Gateway is an open protocol and self-hostable server that lets any AI agent - Claude, GPT-4o,
            Grok, Gemini - call commerce operations through a single, consistent tool interface.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/docs/getting-started/quick-start"
              className="mono rounded px-5 py-3"
              style={{ background: "var(--color-primary)", color: "white" }}
            >
              Get Started
            </Link>
            <a
              href="https://github.com/commercegateway/commerce-gateway"
              target="_blank"
              rel="noreferrer"
              className="mono rounded border px-5 py-3"
              style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
            >
              View on GitHub
            </a>
          </div>
          <div
            className="mono mt-5 flex items-center justify-between rounded-md border px-3 py-2 text-sm"
            style={{ background: "var(--color-code-bg)", color: "var(--color-primary-mid)", borderColor: "var(--color-border-dark)" }}
          >
            <span>npm install @commerce-gateway/sdk</span>
            <span aria-hidden>Copy</span>
          </div>
        </div>
        <pre
          className="overflow-x-auto rounded-lg p-5 text-sm"
          style={{ background: "var(--color-code-bg)", color: "var(--color-code-text)" }}
        >
{`// Claude calls the gateway like any other tool
const result = await anthropic.messages.create({
  model: "claude-opus-4-6",
  tools: await gateway.getTools(["product.search", "cart.add"]),
  messages: [{ role: "user", content: "Find running shoes under $100" }]
});

// Gateway routes to your commerce platform
// Returns structured data back to the LLM`}
        </pre>
      </div>
    </section>
  );
}
