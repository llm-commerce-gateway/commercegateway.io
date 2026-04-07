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
          <a href="https://www.betterdata.co/trust" target="_blank" rel="noopener noreferrer">
            Trust Center
          </a>
          <br />
          <a href="https://betterdata.co" target="_blank" rel="noopener noreferrer">
            Created by Better Data
          </a>
          <br />
          <a href="https://betterdata.co/docs" target="_blank" rel="noopener noreferrer">
            Platform docs
          </a>
          <br />
          <a href="https://loopengine.io" target="_blank" rel="noopener noreferrer">
            Loop Engine
          </a>
          <br />
          <a href="https://commercechain.io" target="_blank" rel="noopener noreferrer">
            Commerce Chain
          </a>
          <br />
          <a href="https://tagd.sh" target="_blank" rel="noopener noreferrer">
            Signal Tags
          </a>
          <br />
          <a href="mailto:security@betterdata.co">security@betterdata.co</a>
        </div>
      </div>

      <div
        className="container flex flex-col gap-3 border-t py-4 text-xs"
        style={{ borderColor: "var(--color-border)", color: "var(--color-ink-tertiary)" }}
      >
        <p className="text-center md:text-left">
          MIT Licensed · © Commerce Gateway Contributors ·{" "}
          <a href="mailto:conduct@commercegateway.io">conduct@commercegateway.io</a>
        </p>
        <p className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-center">
          <a
            href="https://www.betterdata.co/trust/security"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
            className="hover:underline"
          >
            Security
          </a>
          <span aria-hidden="true"> · </span>
          <a
            href="https://www.betterdata.co/privacy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
            className="hover:underline"
          >
            Privacy Policy
          </a>
          <span aria-hidden="true"> · </span>
          <a
            href="https://www.betterdata.co/terms"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
            className="hover:underline"
          >
            Terms of Service
          </a>
          <span aria-hidden="true"> · </span>
          <a
            href="https://www.betterdata.co/cookies"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
            className="hover:underline"
          >
            Cookie Notice
          </a>
          <span aria-hidden="true"> · </span>
          <a
            href="https://www.betterdata.co/trust/open-source"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
            className="hover:underline"
          >
            Open Source disclosures
          </a>
        </p>
      </div>
    </footer>
  );
}
