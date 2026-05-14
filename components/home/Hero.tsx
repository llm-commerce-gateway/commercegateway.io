import Link from "next/link";
import { BETTERDATA_CCO_URL, GATEWAY_ROLE_LINE } from "@/lib/betterdata-ecosystem";

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
            Commerce Gateway is an open protocol and self-hostable server that lets any AI agent — Claude, GPT-4o, Grok,
            Gemini — call typed commerce tools and data through one consistent tool interface. Pair it with Commerce Registry for
            discovery; both are first-class in the Better Data workspace (self-host and OSS paths use the same protocol).
          </p>
          <p className="mt-4 max-w-[600px] text-sm leading-relaxed" style={{ color: "var(--color-ink-secondary)" }}>
            {GATEWAY_ROLE_LINE}
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
            <a
              href={BETTERDATA_CCO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mono rounded border px-5 py-3"
              style={{ borderColor: "var(--color-border-dark)", color: "var(--color-ink)" }}
            >
              See Commerce Chain Optimization
            </a>
          </div>
          <div
            className="mono mt-5 flex items-center justify-between rounded-md border px-3 py-2 text-sm"
            style={{ background: "var(--color-code-bg)", color: "var(--color-primary-mid)", borderColor: "var(--color-border-dark)" }}
          >
            <span>npm install @commerce-gateway/sdk @anthropic-ai/sdk</span>
            <span aria-hidden>Copy</span>
          </div>
        </div>
        <pre
          className="overflow-x-auto rounded-lg p-5 text-sm"
          style={{ background: "var(--color-code-bg)", color: "var(--color-code-text)" }}
        >
{`import { AnthropicAdapter } from "@commerce-gateway/sdk/adapters";

const adapter = new AnthropicAdapter({
  apiKey: process.env.ANTHROPIC_API_KEY!,
  tools: ["search_products", "get_product_details"],
});

const result = await adapter.handleRequest({
  model: "claude-sonnet-4-6",
  messages: [{ role: "user", content: "Find running shoes under $100" }],
});

// Same AnthropicAdapter + handleRequest pattern as the quick start`}
        </pre>
      </div>
    </section>
  );
}
