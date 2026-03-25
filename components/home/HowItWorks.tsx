export function HowItWorks() {
  const steps = [
    {
      title: "Define",
      body: "Define your commerce operations once using the Commerce Gateway tool schema. Product search, cart operations, order management - all typed and validated.",
    },
    {
      title: "Connect",
      body: "Connect your commerce platform - Shopify, custom API, or any HTTP endpoint. The gateway handles routing, auth, and response normalization.",
    },
    {
      title: "Use from any LLM",
      body: "Any AI agent that supports tool use can call your gateway. Claude, GPT-4o, Grok, Gemini - the gateway translates tool schemas automatically.",
    },
  ];

  return (
    <section className="border-b py-16">
      <div className="container">
        <h2 className="text-3xl">One gateway. Any agent.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
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
