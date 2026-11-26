import Link from "next/link";

export function UseCases() {
  return (
    <>
      <section className="border-b py-16">
        <div className="container grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border p-6" style={{ borderColor: "var(--color-border)", background: "#fff7f7" }}>
            <h2 className="text-2xl">Every LLM requires a different tool format</h2>
            <ul className="mt-4 space-y-2 text-sm" style={{ color: "var(--color-ink-secondary)" }}>
              <li>Claude tool format</li>
              <li>OpenAI function calling</li>
              <li>Grok tools API</li>
              <li>Gemini function declarations</li>
              <li>→ Four different schemas. Four integrations. Four maintenance burdens.</li>
            </ul>
          </article>
          <article
            className="rounded-lg border p-6"
            style={{ borderColor: "var(--color-primary-light)", background: "var(--color-primary-light)" }}
          >
            <h2 className="text-2xl">@commercegateway/commerce-gateway</h2>
            <p className="mt-4 text-sm" style={{ color: "var(--color-primary-dark)" }}>
              One schema. All LLMs. Auto-translated.
            </p>
          </article>
        </div>
      </section>

      <section className="border-b py-16">
        <div className="container">
          <h2 className="text-3xl">Commerce tooling, fully typed</h2>
          <p className="mt-2 max-w-3xl text-sm" style={{ color: "var(--color-ink-secondary)" }}>
            MCP tools cover product discovery, cart, and checkout. Federation tools route across registered merchants.
            Well-known capability ids (`product.search`) are documented separately from MCP names (`search_products`).
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <ToolGroup
              title="Product Discovery"
              tools={["search_products", "get_product_details", "check_availability", "get_recommendations"]}
            />
            <ToolGroup title="Cart & Checkout" tools={["add_to_cart", "create_order"]} />
            <ToolGroup title="Federation" tools={["shop_merchant", "discover_merchants"]} />
          </div>
          <Link href="/docs/tool-schema/overview" className="mono mt-4 inline-block text-sm" style={{ color: "var(--color-primary)" }}>
            Full tool schema reference →
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl">Run it yourself or let us run it</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border p-6" style={{ borderColor: "var(--color-border)" }}>
              <h3 className="text-xl">Self-Hosted</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--color-ink-secondary)" }}>
                Full control. Apache-2.0 licensed. Run anywhere Node.js runs.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>✓ Apache-2.0 licensed</li>
                <li>✓ npm packages (`1.0.0-rc.2`)</li>
                <li>✓ No usage limits</li>
                <li>✓ No phone home</li>
              </ul>
              <Link href="/docs/self-hosting/overview" className="mono mt-4 inline-block text-sm" style={{ color: "var(--color-primary)" }}>
                Self-host docs →
              </Link>
            </article>
            <article
              className="rounded-lg border p-6"
              style={{ borderColor: "var(--color-primary-light)", background: "var(--color-primary-light)" }}
            >
              <h3 className="text-xl">Better Data Hosted</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--color-primary-dark)" }}>
                Managed runtime (private beta — not self-serve GA).
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>✓ Managed infrastructure</li>
                <li>✓ Brand portal for merchants</li>
                <li>✓ Usage analytics</li>
                <li>✓ SLA and support</li>
              </ul>
              <a
                href="https://betterdata.co/products/commerce-gateway"
                target="_blank"
                rel="noreferrer"
                className="mono mt-4 inline-block text-sm"
                style={{ color: "var(--color-primary-dark)" }}
              >
                View hosted plans →
              </a>
              <p className="mt-2 text-xs" style={{ color: "var(--color-primary-dark)" }}>
                Hosted by Better Data, the team behind Commerce Gateway.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

function ToolGroup({ title, tools }: { title: string; tools: string[] }) {
  return (
    <article className="rounded-lg border p-5" style={{ borderColor: "var(--color-border)", background: "var(--color-surface-alt)" }}>
      <h3 style={{ color: "var(--color-primary)" }}>{title}</h3>
      <ul className="mt-3 space-y-1 mono text-sm">
        {tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
    </article>
  );
}
