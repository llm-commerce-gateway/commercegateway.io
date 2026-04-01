export type DocsNavSection = {
  section: string;
  items: Array<{ title: string; slug: string }>;
};

export const docsNav: DocsNavSection[] = [
  {
    section: "Getting Started",
    items: [
      { title: "Quick Start", slug: "getting-started/quick-start" },
      { title: "Core Concepts", slug: "getting-started/concepts" },
      { title: "Self-Host or Hosted?", slug: "getting-started/self-host-or-hosted" },
      { title: "Self-Host Setup", slug: "getting-started/self-host" },
    ],
  },
  {
    section: "Tool Schema",
    items: [
      { title: "Overview", slug: "tool-schema/overview" },
      { title: "Product Discovery", slug: "tool-schema/product-search" },
      { title: "Cart Operations", slug: "tool-schema/cart-operations" },
      { title: "Order Management", slug: "tool-schema/order-management" },
    ],
  },
  {
    section: "LLM Adapters",
    items: [
      { title: "Claude (Anthropic)", slug: "adapters/claude" },
      { title: "OpenAI", slug: "adapters/openai" },
      { title: "Grok (xAI)", slug: "adapters/grok" },
      { title: "Gemini (Google)", slug: "adapters/gemini" },
    ],
  },
  {
    section: "Self-Hosting",
    items: [
      { title: "Overview", slug: "self-hosting/overview" },
      { title: "gateway-console", slug: "self-hosting/gateway-console" },
      { title: "Configuration", slug: "self-hosting/configuration" },
      { title: "Docker", slug: "self-hosting/docker" },
      { title: "Registry Connection", slug: "self-hosting/registry-connection" },
    ],
  },
  {
    section: "Registry",
    items: [
      { title: "Overview", slug: "registry/overview" },
      { title: "How It Works", slug: "registry/how-it-works" },
      { title: "Register a Gateway", slug: "registry/registration" },
      { title: "Discovery & Resolution", slug: "registry/discovery" },
      { title: ".well-known Schema", slug: "registry/well-known" },
    ],
  },
  {
    section: "Hosted Platform",
    items: [
      { title: "Overview", slug: "hosted/overview" },
      { title: "Plans", slug: "hosted/plans" },
    ],
  },
];
