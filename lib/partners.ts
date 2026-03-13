export type Partner = {
  name: string;
  slug: string;
  logoPath: string;
  description: string;
  integrationType: "provider" | "backend" | "ecosystem";
  docsPath: string;
  externalUrl?: string;
  adapterPackage?: string;
  certificationStatus?: "certified" | "in-review" | "community";
};

export const aiProviderPartners: Partner[] = [
  {
    name: "Anthropic",
    slug: "anthropic",
    logoPath: "/logos/anthropic.svg",
    description:
      "Claude as a Commerce Gateway AI actor - natural language commerce queries with structured product responses.",
    integrationType: "provider",
    docsPath: "/docs/adapters/anthropic",
    adapterPackage: "@commerce-gateway/adapter-anthropic",
    certificationStatus: "certified",
  },
  {
    name: "OpenAI",
    slug: "openai",
    logoPath: "/logos/openai.svg",
    description:
      "GPT-4o for LLM-native commerce operations - product search, comparison, and cart management via natural language.",
    integrationType: "provider",
    docsPath: "/docs/adapters/openai",
    adapterPackage: "@commerce-gateway/adapter-openai",
    certificationStatus: "certified",
  },
  {
    name: "Grok",
    slug: "grok",
    logoPath: "/logos/xai.svg",
    description: "Grok 3 for commerce intelligence via xAI's API.",
    integrationType: "provider",
    docsPath: "/docs/adapters/grok",
    adapterPackage: "@commerce-gateway/adapter-grok",
    certificationStatus: "certified",
  },
  {
    name: "Gemini",
    slug: "gemini",
    logoPath: "/logos/gemini.svg",
    description:
      "Gemini for multi-modal commerce - product image analysis and natural language catalog search.",
    integrationType: "provider",
    docsPath: "/docs/adapters/gemini",
    adapterPackage: "@commerce-gateway/adapter-gemini",
    certificationStatus: "certified",
  },
];

export const commerceBackendPartners: Partner[] = [
  {
    name: "Shopify",
    slug: "shopify",
    logoPath: "/logos/shopify.svg",
    description:
      "Connect any LLM to Shopify - product catalog, cart, checkout, and order management via Commerce Gateway.",
    integrationType: "backend",
    docsPath: "/docs/backends/shopify",
    adapterPackage: "@commerce-gateway/backend-shopify",
    certificationStatus: "certified",
  },
  {
    name: "BigCommerce",
    slug: "bigcommerce",
    logoPath: "/logos/bigcommerce.svg",
    description:
      "BigCommerce catalog and storefront operations for LLM agents.",
    integrationType: "backend",
    docsPath: "/docs/backends/bigcommerce",
    adapterPackage: "@commerce-gateway/backend-bigcommerce",
    certificationStatus: "certified",
  },
  {
    name: "WooCommerce",
    slug: "woocommerce",
    logoPath: "/logos/woocommerce.svg",
    description:
      "WordPress + WooCommerce as a commerce backend for AI agents.",
    integrationType: "backend",
    docsPath: "/docs/backends/woocommerce",
    adapterPackage: "@commerce-gateway/backend-woocommerce",
    certificationStatus: "community",
  },
];
