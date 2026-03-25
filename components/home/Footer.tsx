import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        marginTop: "var(--space-16)",
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-surface-alt)",
      }}
    >
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div className="space-y-2 text-sm">
          <p className="mono" style={{ color: "var(--color-ink)" }}>
            Project
          </p>
          <a href="https://github.com/commercegateway/commerce-gateway" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <br />
          <a href="https://www.npmjs.com/org/commerce-gateway" target="_blank" rel="noreferrer">
            npm
          </a>
          <br />
          <Link href="/docs/resources/changelog">Changelog</Link>
          <br />
          <Link href="/docs/resources/roadmap">Roadmap</Link>
        </div>

        <div className="space-y-2 text-sm">
          <p className="mono" style={{ color: "var(--color-ink)" }}>
            Community
          </p>
          <a href="https://github.com/commercegateway/commerce-gateway/blob/main/CONTRIBUTING.md">Contributing</a>
          <br />
          <a href="https://github.com/commercegateway/commerce-gateway/issues">Issues</a>
          <br />
          <a href="https://github.com/commercegateway/commerce-gateway/discussions">RFC Process</a>
          <br />
          <span>oss@betterdata.co</span>
        </div>

        <div className="space-y-2 text-sm">
          <p className="mono" style={{ color: "var(--color-ink)" }}>
            Better Data
          </p>
          <p>Created by Better Data</p>
          <a href="https://betterdata.co/docs" target="_blank" rel="noreferrer">
            Platform docs
          </a>
          <br />
          <a href="https://loopengine.io" target="_blank" rel="noreferrer">
            Loop Engine
          </a>
          <br />
          <span>security@betterdata.co</span>
        </div>
      </div>

      <div
        className="container flex flex-wrap items-center justify-between gap-3 border-t py-4 text-xs"
        style={{ borderColor: "var(--color-border)", color: "var(--color-ink-tertiary)" }}
      >
        <p>MIT Licensed · © Commerce Gateway Contributors</p>
        <Link href="/privacy">Privacy policy</Link>
        <span>conduct@commercegateway.io</span>
      </div>
    </footer>
  );
}
