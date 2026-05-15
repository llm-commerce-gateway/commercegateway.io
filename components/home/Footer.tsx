import Link from "next/link";
import { Fragment } from "react";
import {
  BETTERDATA_CCO_URL,
  BETTERDATA_OPEN_INFRA_URL,
  ECOSYSTEM_STRIP,
} from "@/lib/betterdata-ecosystem";
import {
  BETTER_DATA_DOCS_FOOTER_SECONDARY_LINKS,
  BETTER_DATA_ECOSYSTEM,
  BETTER_DATA_LEGAL_FOOTER_LINKS,
  BETTER_DATA_SUPPORT_FOOTER,
} from "@betterdata/site-links";
import { BetterDataFooterSocialIcons } from "@betterdata/site-links/social-icons";

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
          <a href={BETTERDATA_CCO_URL} target="_blank" rel="noopener noreferrer">
            Commerce Chain Optimization (hosted)
          </a>
          <br />
          <a href={BETTERDATA_OPEN_INFRA_URL} target="_blank" rel="noopener noreferrer">
            Open operational infrastructure hub
          </a>
          <br />
          <a href={BETTER_DATA_ECOSYSTEM.trustCenter} target="_blank" rel="noopener noreferrer">
            Trust Center
          </a>
          <br />
          <a href={BETTER_DATA_ECOSYSTEM.marketingSite} target="_blank" rel="noopener noreferrer">
            Created by Better Data
          </a>
          <br />
          <a href={BETTER_DATA_ECOSYSTEM.docsBrowse} target="_blank" rel="noopener noreferrer">
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
        className="container flex flex-col gap-4 border-t py-6 md:flex-row md:flex-wrap md:items-center md:justify-between"
        style={{ borderColor: "var(--color-border)" }}
      >
        <a
          href={BETTER_DATA_SUPPORT_FOOTER.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline"
          style={{ color: "var(--color-ink-secondary)" }}
        >
          {BETTER_DATA_SUPPORT_FOOTER.label}
        </a>
        <BetterDataFooterSocialIcons
          navClassName="flex flex-wrap gap-2 md:justify-end"
          linkClassName="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-ink-tertiary)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]"
        />
        <div className="flex w-full flex-wrap gap-x-4 gap-y-2 text-sm md:w-auto md:justify-end">
          {BETTER_DATA_DOCS_FOOTER_SECONDARY_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "var(--color-primary)" }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div
        className="container border-t py-4 text-xs"
        style={{ borderColor: "var(--color-border)", color: "var(--color-ink-tertiary)" }}
      >
        <p className="mx-auto max-w-3xl text-center leading-relaxed md:text-left" style={{ marginBottom: "0.75rem" }}>
          {ECOSYSTEM_STRIP}
        </p>
        <p className="text-center md:text-left">
          Apache-2.0 Licensed · © Commerce Gateway Contributors ·{" "}
          <a href="mailto:conduct@commercegateway.io">conduct@commercegateway.io</a>
        </p>
        <p className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-center">
          {BETTER_DATA_LEGAL_FOOTER_LINKS.map((item, i) => (
            <Fragment key={item.href}>
              {i > 0 ? <span aria-hidden="true"> · </span> : null}
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
                className="hover:underline"
              >
                {item.label}
              </a>
            </Fragment>
          ))}
        </p>
      </div>
    </footer>
  );
}
