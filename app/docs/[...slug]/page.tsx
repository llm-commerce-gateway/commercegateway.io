import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllDocs, getDoc } from "@/lib/docs";

export async function generateStaticParams() {
  const docs = await getAllDocs();
  return docs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const doc = await getDoc(slug);
    return {
      title: doc.frontmatter.title,
      description: doc.frontmatter.description,
      openGraph: {
        title: doc.frontmatter.title,
        description: doc.frontmatter.description,
        images: [
          {
            url: `/og?title=${encodeURIComponent(doc.frontmatter.title)}&section=${encodeURIComponent(
              doc.frontmatter.section
            )}`,
          },
        ],
      },
    };
  } catch {
    return {};
  }
}

export default async function DocsSlugPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  let doc;
  try {
    doc = await getDoc(slug);
  } catch {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: doc.frontmatter.title,
    description: doc.frontmatter.description,
    url: `https://commercegateway.io/docs/${doc.pathSlug}`,
    about: "Commerce Gateway",
    author: { "@type": "Organization", name: "Commerce Gateway Contributors" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <h1>{doc.frontmatter.title}</h1>
      <p>{doc.frontmatter.description}</p>
      <p className="mono text-xs" style={{ color: "var(--color-ink-muted)" }}>
        {doc.readingTimeText} · {doc.frontmatter.section}
      </p>
      <div className="mt-8">{doc.content}</div>
    </>
  );
}
