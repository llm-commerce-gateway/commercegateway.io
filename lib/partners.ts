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
    docsPath: "/docs/adapters/claude",
    adapterPackage: "@commercegateway/commerce-gateway",
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
    adapterPackage: "@commercegateway/commerce-gateway",
    certificationStatus: "certified",
  },
  {
    name: "Grok",
    slug: "grok",
    logoPath: "/logos/xai.svg",
    description: "Grok 3 for commerce intelligence via xAI's API.",
    integrationType: "provider",
    docsPath: "/docs/adapters/grok",
    adapterPackage: "@commercegateway/commerce-gateway",
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
    adapterPackage: "@commercegateway/commerce-gateway",
    certificationStatus: "certified",
  },
];

export const commerceBackendPartners: Partner[] = [
  {
    name: "Shopify",
    slug: "shopify",
    logoPath: "/logos/shopify.svg",
    description:
      "Shopify Storefront API connector for first-party agents. Does not replace Shopify UCP or Shop MCP.",
    integrationType: "backend",
    docsPath: "/docs/getting-started/shopify-storefront",
    adapterPackage: "@commercegateway/commerce-gateway-connectors",
    certificationStatus: "certified",
  },
  {
    name: "BigCommerce",
    slug: "bigcommerce",
    logoPath: "/logos/bigcommerce.svg",
    description:
      "BigCommerce catalog and storefront operations for LLM agents.",
    integrationType: "backend",
    docsPath: "/docs/getting-started/bigcommerce",
    adapterPackage: "@commercegateway/commerce-gateway-connectors",
    certificationStatus: "certified",
  },
  {
    name: "WooCommerce",
    slug: "woocommerce",
    logoPath: "/logos/woocommerce.svg",
    description:
      "WordPress + WooCommerce as a commerce backend for AI agents.",
    integrationType: "backend",
    docsPath: "/docs/getting-started/woocommerce",
    adapterPackage: "@commercegateway/commerce-gateway-connectors",
    certificationStatus: "community",
  },
];
