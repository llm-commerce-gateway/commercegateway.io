import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { getAllPosts, getPost } from "@/lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

const portableTextComponents: PortableTextComponents = {
  types: {
    code: ({ value }) => {
      const maybeCode = typeof value?.code === "string" ? value.code : "";
      const maybeLanguage =
        typeof value?.language === "string" ? value.language : undefined;
      return <CodeBlock language={maybeLanguage}>{maybeCode}</CodeBlock>;
    },
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-600 underline underline-offset-4 hover:text-emerald-700"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    code: ({ children }) => (
      <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-[0.85em] text-zinc-100">
        {children}
      </code>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-8 mb-3 border-b pb-1 font-semibold text-2xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-2 font-semibold text-xl">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 text-base text-muted-foreground leading-[1.75]">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-5 border-emerald-600 border-l-[3px] pl-4 text-muted-foreground italic">
        {children}
      </blockquote>
    ),
  },
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug.current }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found - Commerce Gateway Blog",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${post.title} - Commerce Gateway Blog`,
    description: post.excerpt,
    robots: { index: false, follow: false },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="px-4 py-12">
      <article className="mx-auto max-w-4xl">
        {post.tags.length > 0 ? (
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={`${post._id}-${tag}`}
                className="rounded-full bg-emerald-100 px-2 py-1 font-mono text-[10px] text-emerald-700 uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <h1 className="max-w-[720px] font-semibold text-4xl">{post.title}</h1>
        <p className="mt-3 text-muted-foreground text-sm">
          By {post.author} · {formatDate(post.publishedAt)}
        </p>

        {post.coverImage?.asset?.url ? (
          <div className="relative mt-6 h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]">
            <Image
              src={post.coverImage.asset.url}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        ) : null}

        <div className="mx-auto mt-8 max-w-[720px]">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>

        <footer className="mx-auto mt-10 max-w-[720px] border-t pt-6">
          {post.tags.length > 0 ? (
            <div className="mb-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={`footer-${post._id}-${tag}`}
                  className="rounded-full border px-2 py-1 font-mono text-[10px] text-muted-foreground uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <Link href="/blog" className="text-emerald-600 underline underline-offset-4 hover:text-emerald-700">
            ← Back to Blog
          </Link>

          <div className="mt-6 border-t pt-6">
            <p className="font-semibold">Built with Commerce Gateway</p>
            <p className="mt-2 text-muted-foreground text-sm">
              Interested in LLM-native commerce integration?{" "}
              <Link className="text-emerald-600 underline underline-offset-4 hover:text-emerald-700" href="/docs">
                View the docs →
              </Link>{" "}
              or{" "}
              <a
                className="text-emerald-600 underline underline-offset-4 hover:text-emerald-700"
                href="https://github.com/commercegateway/commerce-gateway"
                target="_blank"
                rel="noopener noreferrer"
              >
                star on GitHub →
              </a>
            </p>
          </div>
        </footer>
      </article>
    </main>
  );
}
