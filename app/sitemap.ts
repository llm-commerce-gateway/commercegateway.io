import type { MetadataRoute } from "next";
import { getAllDocs } from "@/lib/docs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docs = await getAllDocs();
  const base = "https://commercegateway.io";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/docs/getting-started/quick-start`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${base}/docs/adapters/claude`, priority: 0.8, changeFrequency: "weekly" },
  ];

  const docRoutes: MetadataRoute.Sitemap = docs.map((doc) => ({
    url: `${base}/docs/${doc.pathSlug}`,
    priority: doc.pathSlug.startsWith("getting-started/") ? 0.9 : doc.pathSlug.startsWith("adapters/") ? 0.8 : 0.7,
    changeFrequency: "weekly",
  }));

  return [...staticRoutes, ...docRoutes];
}
