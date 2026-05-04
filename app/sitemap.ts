import type { MetadataRoute } from "next";
import { getAllDocs } from "@/lib/docs";

const BASE = "https://commercegateway.io";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docs = await getAllDocs();

  const docRoutes: MetadataRoute.Sitemap = docs.map((doc) => ({
    url: doc.frontmatter.canonical ?? `${BASE}/docs/${doc.slugPath}`,
    priority: doc.slugPath.startsWith("getting-started/") ? 0.9 : doc.slugPath.startsWith("adapters/") ? 0.8 : 0.7,
    changeFrequency: "weekly",
  }));

  return [
    { url: `${BASE}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE}/partners`, priority: 0.65, changeFrequency: "monthly" },
    { url: `${BASE}/registry`, priority: 0.75, changeFrequency: "weekly" },
    ...docRoutes,
  ];
}
