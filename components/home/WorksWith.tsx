import Link from "next/link";

/**
 * Ecosystem surfaces that extend the gateway — layered, not “flat products.”
 * Demos are called out as reference experiences / accelerators.
 */
export function WorksWith() {
  const items = [
    {
      name: "Commerce Registry",
      role: "Discovery & identity",
      body: "Publish and resolve gateways inside the same Better Data system — native capability, not a separate signup elsewhere. Protocol docs cover self-hosted and OSS topologies.",
      href: "/registry",
      cta: "How registry fits →",
    },
    {
      name: "Loop Engine",
      role: "Governance & control",
      body: "Policy, guards, and audit on actions that flow through the gateway. Loop Engine is the control layer — not a parallel automation product.",
      href: "https://loopengine.io",
      cta: "Loop Engine →",
      external: true,
    },
    {
      name: "Commerce Demo",
      role: "Developer accelerator",
      body: "A reference experience that shows gateway + tools end-to-end. It illustrates integration patterns — not a second control plane or operator surface.",
      href: "https://demo.commercegateway.io",
      cta: "Try the demo →",
      external: true,
    },
  ];

  return (
    <section className="border-b py-16" style={{ background: "var(--color-surface-alt)" }}>
      <div className="container">
        <p className="mono text-xs uppercase tracking-wider" style={{ color: "var(--color-primary)" }}>
          Works with
        </p>
        <h2 className="mt-2 text-3xl">Gateway is one layer in a connected stack</h2>
        <p className="mt-3 max-w-[720px] text-sm" style={{ color: "var(--color-ink-secondary)" }}>
          Self-host the gateway, use Better Data hosted, or both — registry and setup stay inside a unified platform
          experience. External endpoints (MCP URLs, connectors) come after you configure the workspace.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.name}
              className="rounded-lg border bg-white p-6"
              style={{ borderColor: "var(--color-border)" }}
            >
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="mono mt-1 text-xs" style={{ color: "var(--color-primary)" }}>
                {item.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-ink-secondary)" }}>
                {item.body}
              </p>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono mt-4 inline-block text-sm"
                  style={{ color: "var(--color-primary)" }}
                >
                  {item.cta}
                </a>
              ) : (
                <Link href={item.href} className="mono mt-4 inline-block text-sm" style={{ color: "var(--color-primary)" }}>
                  {item.cta}
                </Link>
              )}
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs" style={{ color: "var(--color-ink-muted)" }}>
          Developer path: (1) run the gateway → (2) connect tools → (3) build on the demo experience → (4) add governance with
          Loop Engine.
        </p>
      </div>
    </section>
  );
}
