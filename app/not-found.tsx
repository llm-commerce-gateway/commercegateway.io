import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container py-20">
      <h1 className="text-3xl">Page not found</h1>
      <p className="mt-3" style={{ color: "var(--color-ink-secondary)" }}>
        The page you requested is not available.
      </p>
      <Link href="/docs/getting-started/quick-start" className="mono mt-6 inline-block" style={{ color: "var(--color-primary)" }}>
        Go to docs →
      </Link>
    </section>
  );
}
