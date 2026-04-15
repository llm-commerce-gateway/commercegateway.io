export function HowItWorks() {
  const steps = [
    {
      title: "Run the gateway",
      body: "Self-host or use Better Data hosted — same protocol, one unified system. Configure connectors and auth in your workspace; external MCP endpoints come after setup.",
    },
    {
      title: "Connect tools",
      body: "Wire Shopify, custom APIs, or any HTTP backend. The gateway normalizes tool schemas so Claude, GPT-4o, Grok, and Gemini all speak one interface.",
    },
    {
      title: "Build on the demo experience",
      body: "The Commerce Demo is a developer accelerator — a reference app, not a separate product. Use it to validate flows before you ship your own UI.",
    },
    {
      title: "Add governance",
      body: "Layer Loop Engine on actions executed through the gateway for approvals, guards, and audit — governance as a control layer, not a standalone bot.",
    },
  ];

  return (
    <section className="border-b py-16">
      <div className="container">
        <h2 className="text-3xl">Developer path</h2>
        <p className="mt-2 max-w-[720px] text-sm" style={{ color: "var(--color-ink-secondary)" }}>
          Commerce Registry (discovery) is a native platform capability — configure it in Better Data alongside the gateway;
          docs here describe the open protocol for self-hosted and OSS deployments.
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
