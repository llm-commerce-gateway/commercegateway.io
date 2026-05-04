import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { DocsPageView } from "@/components/docs/DocsPageView";
import { DocsPrevNext } from "@/components/docs/DocsPrevNext";
import { DocsShell } from "@/components/docs/DocsShell";
import { mdxComponents } from "@/components/docs/MDXComponents";
import { getAllDocSlugs, getDocBySlug, getPrevNext } from "@/lib/docs";

const SITE = "https://commercegateway.io";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  const slugs = await getAllDocSlugs();
  return slugs.map((s) => ({ slug: s.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  let doc;
  try {
    doc = await getDocBySlug(slug);
  } catch {
    return {};
  }

  const canonical = doc.frontmatter.canonical ?? `${SITE}/docs/${doc.slugPath}`;

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      url: `${SITE}/docs/${doc.slugPath}`,
      images: [
        {
          url: `/og?title=${encodeURIComponent(doc.title)}&section=${encodeURIComponent(doc.sectionLabel)}`,
        },
      ],
    },
    alternates: {
      canonical,
    },
  };
}

export default async function DocsSlugPage({ params }: PageProps) {
  const { slug } = await params;
  let doc;
  try {
    doc = await getDocBySlug(slug);
  } catch {
    notFound();
  }

  const { prev, next } = await getPrevNext(slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: doc.title,
    description: doc.description,
    url: `https://commercegateway.io/docs/${doc.slugPath}`,
    about: "Commerce Gateway",
    author: { "@type": "Organization", name: "Commerce Gateway Contributors" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <DocsShell
        sectionLabel={doc.sectionLabel}
        title={doc.title}
        description={doc.description}
        readingTimeText={doc.readingTimeText}
        headings={doc.headings}
        filePath={doc.filePath}
      >
        <DocsPageView slugPath={doc.slugPath} title={doc.title} />
        <MDXRemote source={doc.source} components={mdxComponents} />
        <DocsPrevNext prev={prev} next={next} />
      </DocsShell>
    </>
  );
}
