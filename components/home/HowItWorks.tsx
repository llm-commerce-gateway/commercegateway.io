export function HowItWorks() {
  const steps = [
    {
      title: "Install the packages",
      body: "npm install @commercegateway/commerce-gateway and the connectors package (1.0.0-rc.2). Self-host on Node, or ask Better Data for a qualified hosted pilot.",
    },
    {
      title: "Attach a storefront",
      body: "Shopify Storefront, WooCommerce REST, or BigCommerce REST via getBackends(). Capabilities are normalized; behavior is not identical across platforms.",
    },
    {
      title: "Expose MCP tools",
      body: "createGatewayMCPServer so your agent can call search_products and related tools. Registry MCP is optional discovery, not execution.",
    },
    {
      title: "Expand when you need ops",
      body: "Managed hosting, merchandising intelligence, and Boss Loops approvals are Better Data platform expansions — not required to run the OSS gateway.",
    },
  ];

  return (
    <section className="border-b py-16">
      <div className="container">
        <h2 className="text-3xl">Developer path</h2>
        <p className="mt-2 max-w-[720px] text-sm" style={{ color: "var(--color-ink-secondary)" }}>
          Registry MCP discovers merchants. Gateway MCP executes per storefront. Hosted Cloud is a separately provisioned
          pilot — not self-serve GA.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-lg border p-5" style={{ borderColor: "var(--color-border)" }}>
              <p className="mono text-xs" style={{ color: "var(--color-primary)" }}>
                STEP {index + 1}
              </p>
              <h3 className="mt-2 text-lg">{step.title}</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--color-ink-secondary)" }}>
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
