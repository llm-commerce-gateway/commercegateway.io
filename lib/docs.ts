import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/docs/MDXComponents";

const docsRoot = path.join(process.cwd(), "content/docs");

export type DocFrontmatter = {
  title: string;
  description: string;
  section: string;
};

export type DocRecord = {
  slug: string[];
  pathSlug: string;
  frontmatter: DocFrontmatter;
  source: string;
  readingTimeText: string;
};

async function walk(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walk(full);
      }
      return entry.name.endsWith(".mdx") ? [full] : [];
    })
  );
  return files.flat();
}

function toSlug(filePath: string) {
  const relative = path.relative(docsRoot, filePath).replace(/\.mdx$/, "");
  return relative.split(path.sep);
}

export async function getAllDocs(): Promise<DocRecord[]> {
  const files = await walk(docsRoot);
  const docs = await Promise.all(
    files.map(async (filePath) => {
      const raw = await fs.readFile(filePath, "utf8");
      const parsed = matter(raw);
      const slug = toSlug(filePath);
      return {
        slug,
        pathSlug: slug.join("/"),
        frontmatter: parsed.data as DocFrontmatter,
        source: parsed.content,
        readingTimeText: readingTime(parsed.content).text,
      };
    })
  );

  return docs.sort((a, b) => a.pathSlug.localeCompare(b.pathSlug));
}

export async function getDoc(slug: string[]) {
  const filePath = path.join(docsRoot, `${slug.join("/")}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");
  const parsed = matter(raw);

  const { content } = await compileMDX<DocFrontmatter>({
    source: parsed.content,
    options: { parseFrontmatter: false },
    components: MDXComponents,
  });

  return {
    slug,
    pathSlug: slug.join("/"),
    frontmatter: parsed.data as DocFrontmatter,
    source: parsed.content,
    content,
    readingTimeText: readingTime(parsed.content).text,
  };
}
