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
      name: "Boss Loops",
      role: "Governance & control",
      body: "Optional expansion for high-value actions (approvals, audit). Not wired as a mandatory gate on every Gateway create_order today.",
      href: "https://loopengine.io",
      cta: "Boss Loops →",
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
          Self-host the OSS gateway. Registry is the discovery plane. Boss Loops and Commerce Chain are platform
          expansions when you need authority or operational context — not shipped checkout governance on the OSS path.
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
          Developer path: install → attach a storefront → expose MCP. Add hosted ops or Loops only when you have that need.
        </p>
      </div>
    </section>
  );
}
