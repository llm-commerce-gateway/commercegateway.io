import Link from "next/link";

const useCases = [
  {
    title: "Build merchant-owned commerce experiences",
    for: "Brands, retailers, and commerce teams",
    body: "Power conversational shopping on your website, mobile app, or custom agent. Connect product discovery, details, availability, and supported cart or checkout operations to Shopify Storefront, WooCommerce, or BigCommerce — while you keep the application, merchandising logic, and customer relationship.",
    available: "Self-hosted OSS",
    href: "/docs/getting-started/use-cases",
  },
  {
    title: "Build once, deploy across commerce platforms",
    for: "Developers, agencies, and multi-platform teams",
    body: "Reuse one agent integration across supported backend capabilities. Auth, variants, carts, and orders still differ by platform — you maintain connectors, not a separate tool schema per storefront.",
    available: "Self-hosted OSS",
    href: "/docs/getting-started/connector-capabilities",
  },
  {
    title: "Connect multiple merchants and storefronts",
    for: "Multi-brand retailers and merchant collectives",
    body: "Registry MCP discovers and resolves merchants. Gateway MCP executes against each storefront. That is not a unified cart, split settlement, or cross-merchant checkout.",
    available: "Self-hosted OSS (registry protocol)",
    href: "/docs/getting-started/shopify-and-ucp",
  },
  {
    title: "Embed commerce into your software",
    for: "ISVs, vertical SaaS, and AI application vendors",
    body: "Add catalog and checkout connectivity to your product without a one-off integration per commerce platform. You keep the UX and the customer. We provide the headless layer — self-hosted or a qualified hosted pilot.",
    available: "OSS · qualified hosted pilots",
    href: "/docs/getting-started/for-software-vendors",
  },
  {
    title: "Deliver commerce solutions across a client portfolio",
    for: "Digital agencies and solution providers",
    body: "Reuse the same connectivity across client storefronts. Self-host, or work with Better Data on a manually provisioned managed pilot. One contract for many shops is the Cloud Agency target — not a self-serve GA feature today.",
    available: "OSS · qualified hosted pilots",
    href: "/docs/getting-started/for-agencies",
  },
];

export function UseCases() {
  return (
    <>
      <section className="border-b py-16">
        <div className="container">
          <p className="mono text-xs uppercase tracking-wider" style={{ color: "var(--color-primary)" }}>
            Use cases
          </p>
          <h2 className="mt-2 text-3xl">Open infrastructure for merchant-owned, multi-platform commerce</h2>
          <p className="mt-3 max-w-3xl text-sm" style={{ color: "var(--color-ink-secondary)" }}>
            Commerce Gateway is the connectivity layer other applications run on — not a shopping-assistant product.
            Native Shopify UCP / Shop MCP channels can coexist. See{" "}
            <Link href="/docs/getting-started/shopify-and-ucp" style={{ color: "var(--color-primary)" }}>
              Shopify, UCP, and this gateway
            </Link>
            .
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {useCases.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border p-6"
                style={{ borderColor: "var(--color-border)", background: "#fff" }}
              >
                <h3 className="text-xl">{item.title}</h3>
                <p className="mono mt-1 text-xs" style={{ color: "var(--color-primary)" }}>
                  For: {item.for}
                </p>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-ink-secondary)" }}>
                  {item.body}
                </p>
                <p className="mt-3 text-xs" style={{ color: "var(--color-ink-muted)" }}>
                  {item.available}
                </p>
                <Link href={item.href} className="mono mt-3 inline-block text-sm" style={{ color: "var(--color-primary)" }}>
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b py-16">
        <div className="container">
          <h2 className="text-3xl">Model-independent commerce applications</h2>
          <p className="mt-2 max-w-3xl text-sm" style={{ color: "var(--color-ink-secondary)" }}>
            Keep commerce connectivity stable while you change models for cost, latency, or quality. Adapters today: Anthropic
            (Claude), OpenAI, Grok (xAI), and Google Gemini. Tool-calling behavior is not identical across providers.
          </p>
          <Link href="/#adapters" className="mono mt-4 inline-block text-sm" style={{ color: "var(--color-primary)" }}>
            Supported adapters →
          </Link>
        </div>
      </section>

      <section className="border-b py-16">
        <div className="container">
          <h2 className="text-3xl">Normalized tools, not identical backends</h2>
          <p className="mt-2 max-w-3xl text-sm" style={{ color: "var(--color-ink-secondary)" }}>
            MCP names (`search_products`, `add_to_cart`) are the runtime surface. Capability ids (`product.search`) are a
            separate protocol. What each connector actually does is in the{" "}
            <Link href="/docs/getting-started/connector-capabilities" style={{ color: "var(--color-primary)" }}>
              capability matrix
            </Link>
            .
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <ToolGroup
              title="Product discovery"
              tools={["search_products", "get_product_details", "check_availability", "get_recommendations"]}
            />
            <ToolGroup title="Cart & checkout" tools={["add_to_cart", "create_order (semantics vary)"]} />
            <ToolGroup title="Federation" tools={["shop_merchant", "discover_merchants"]} />
          </div>
        </div>
      </section>

      <section className="border-b py-16">
        <div className="container">
          <h2 className="text-3xl">Run it yourself or a qualified hosted pilot</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border p-6" style={{ borderColor: "var(--color-border)" }}>
              <h3 className="text-xl">Self-hosted</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--color-ink-secondary)" }}>
                Apache-2.0. npm `1.0.0-rc.2`. You operate Node. No usage limits and no phone-home in the OSS runtime.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>✓ `@commercegateway/commerce-gateway` + connectors</li>
                <li>✓ Shopify Storefront, WooCommerce, BigCommerce</li>
                <li>✓ Anthropic, OpenAI, Grok, Gemini adapters</li>
              </ul>
              <Link href="/docs/getting-started/quick-start" className="mono mt-4 inline-block text-sm" style={{ color: "var(--color-primary)" }}>
                Quick start →
              </Link>
            </article>
            <article
              className="rounded-lg border p-6"
              style={{ borderColor: "var(--color-primary-light)", background: "var(--color-primary-light)" }}
            >
              <h3 className="text-xl">Better Data hosted</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--color-primary-dark)" }}>
                Managed runtime for agencies, ISVs, and multi-brand operators. <strong>Private beta — manually provisioned pilots, not self-serve GA.</strong> Tenant isolation, metering, and SLA are not claimed as generally available.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>✓ Deployed runtime (`gateway.betterdata.co`)</li>
                <li>✓ Qualified paid pilots</li>
                <li>✓ Request access — do not self-serve provision</li>
              </ul>
              <a
                href="mailto:hello@betterdata.co?subject=Commerce%20Gateway%20managed%20pilot"
                className="mono mt-4 inline-block text-sm"
                style={{ color: "var(--color-primary-dark)" }}
              >
                Request a managed pilot →
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl">Extend with the Better Data platform</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed" style={{ color: "var(--color-ink-secondary)" }}>
            Commerce Gateway exposes commerce capabilities. It does <strong>not</strong> put `create_order` behind an
            enforceable Boss Loops approval today. Commerce Chain (operational context) and Boss Loops (authority on
            high-value actions — POs, discounts, replenishment) are optional expansions, subject to integration readiness.
          </p>
          <p className="mt-4 text-sm" style={{ color: "var(--color-ink-muted)" }}>
            Every commerce system. Any agent. Your control. — aspirational; supported platforms and models are named above.
          </p>
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
