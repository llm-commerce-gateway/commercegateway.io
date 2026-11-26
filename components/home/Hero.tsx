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
            Every commerce system. Any agent. Your control.
          </h1>
          <p className="mt-4 max-w-[600px]" style={{ color: "var(--color-ink-secondary)", fontSize: "var(--text-lg)" }}>
            Open infrastructure for merchant-owned commerce applications. Connect agents to{" "}
            <strong>Shopify Storefront</strong>, <strong>WooCommerce</strong>, and <strong>BigCommerce</strong> through a
            normalized MCP interface — with Anthropic, OpenAI, Grok, and Gemini adapters. Not Shopify UCP or Shop MCP;
            those native channels can coexist.
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
            <span>npm install @commercegateway/commerce-gateway</span>
            <span aria-hidden>Copy</span>
          </div>
        </div>
        <pre
          className="overflow-x-auto rounded-lg p-5 text-sm"
          style={{ background: "var(--color-code-bg)", color: "var(--color-code-text)" }}
        >
{`import { createGatewayMCPServer } from "@commercegateway/commerce-gateway/mcp";
import { ShopifyConnector } from "@commercegateway/commerce-gateway-connectors/shopify";

const shopify = new ShopifyConnector({
  domain: "my-shop.myshopify.com",
  accessToken: process.env.SHOPIFY_STOREFRONT_TOKEN!,
});

const server = createGatewayMCPServer({
  slug: "my-shop",
  brandName: "My Shop",
  endpoint: "https://example.com/mcp",
  protocol: "mcp",
  capabilities: { catalog_search: true },
  backends: shopify.getBackends(),
});
server.start();`}
        </pre>
      </div>
    </section>
  );
}
