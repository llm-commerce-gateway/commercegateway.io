import type { LoadedDoc } from "./types";

/** Matches prior hand-authored nav + protocol pages. */
export const SECTION_LABEL_ORDER: string[] = [
  "Getting Started",
  "Tool Schema",
  "LLM Adapters",
  "Protocol",
  "Registry",
  "Self-Hosting",
  "Hosted Platform",
  "Resources",
  "Project",
];

const ORDERED_SLUGS = [
  "getting-started/quick-start",
  "getting-started/concepts",
  "getting-started/self-host-or-hosted",
  "getting-started/self-host",
  "tool-schema/overview",
  "tool-schema/product-search",
  "tool-schema/cart-operations",
  "tool-schema/order-management",
  "adapters/claude",
  "adapters/openai",
  "adapters/grok",
  "adapters/gemini",
  "protocol/overview",
  "protocol/registration",
  "protocol/resolution",
  "protocol/well-known",
  "registry/overview",
  "registry/setup",
  "registry/verification",
  "registry/registration",
  "registry/discovery",
  "registry/well-known",
  "registry/gtins",
  "registry/self-hosting",
  "self-hosting/overview",
  "self-hosting/gateway-console",
  "self-hosting/configuration",
  "self-hosting/docker",
  "self-hosting/registry-connection",
  "hosted/overview",
  "hosted/plans",
  "resources/roadmap",
  "resources/changelog",
  "changelog",
];

const CG_SLUG_RANK: Record<string, number> = (() => {
  const m: Record<string, number> = {};
  ORDERED_SLUGS.forEach((s, i) => {
    m[s] = i;
  });
  return m;
})();

function sectionRank(label: string): number {
  const i = SECTION_LABEL_ORDER.indexOf(label);
  if (i !== -1) return i;
  return 100 + label.localeCompare("");
}

function rankKnownSlug(slugPath: string): number | null {
  return slugPath in CG_SLUG_RANK ? CG_SLUG_RANK[slugPath]! : null;
}

function withinSectionSort(a: LoadedDoc, b: LoadedDoc): number {
  const oa = a.frontmatter.order;
  const ob = b.frontmatter.order;
  if (oa != null && ob != null && oa !== ob) return oa - ob;
  if (oa != null && ob == null) return -1;
  if (oa == null && ob != null) return 1;

  const ra = rankKnownSlug(a.slugPath);
  const rb = rankKnownSlug(b.slugPath);
  if (ra != null || rb != null) {
    const fa = ra ?? 9999;
    const fb = rb ?? 9999;
    if (fa !== fb) return fa - fb;
  }

  return a.slugPath.localeCompare(b.slugPath);
}

export function sortLoadedDocsByReaderOrder(docs: LoadedDoc[]): LoadedDoc[] {
  return [...docs].sort((a, b) => {
    const s = sectionRank(a.sectionLabel) - sectionRank(b.sectionLabel);
    if (s !== 0) return s;
    return withinSectionSort(a, b);
  });
}
