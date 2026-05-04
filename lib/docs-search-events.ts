/** Dispatched to open the docs Pagefind modal (commercegateway.io). */
export const DOCS_SEARCH_OPEN_EVENT = "commercegateway:docs-search-open" as const;

export type DocsSearchOpenSource = "keyboard" | "sidebar" | "header";

export type DocsSearchOpenDetail = {
  source: DocsSearchOpenSource;
};
