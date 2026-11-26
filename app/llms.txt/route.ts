const body = `# Commerce Gateway

Commerce Gateway is an open protocol and self-hostable gateway that
connects LLM agents (Claude, GPT-4o, Grok, Gemini) to commerce
backends through MCP and typed adapters.

It is not Shopify UCP, Shop MCP, or Catalog MCP. Native Shopify AI
channels stay on Shopify. This runtime is for first-party agents and
multi-platform catalogs (Shopify Storefront API, WooCommerce, BigCommerce).

## Packages (npm, currently 1.0.0-rc.2)

- @commercegateway/commerce-gateway — core runtime, MCP factory, LLM adapters
- @commercegateway/commerce-gateway-mcp — CLI stdio MCP server (demo backends by default)
- @commercegateway/commerce-gateway-connectors — Shopify Storefront, WooCommerce, BigCommerce
- @commercegateway/registry-mcp — registry discovery MCP
- commerce-registry-protocol — protocol spec (MIT)

There is no @commerce-gateway/sdk or @commerce-gateway/server package.

MCP tool names include search_products, get_product_details, add_to_cart,
create_order, shop_merchant, discover_merchants. Well-known capability ids
(product.search, cart.add) are a separate protocol surface.

## Links

- Docs: https://commercegateway.io/docs
- Shopify coexistence: https://commercegateway.io/docs/getting-started/shopify-and-ucp
- GitHub: https://github.com/commercegateway/commerce-gateway
- npm: https://www.npmjs.com/org/commercegateway
- Created by: Better Data (https://betterdata.co)
`;

export function GET() {
  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
