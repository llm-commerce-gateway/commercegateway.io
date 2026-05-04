"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { inferPageType } from "@/lib/analytics/posthog";
import { trackCtaClicked, trackOutboundClicked } from "@/lib/analytics/events";

const links = [
  { label: "DOCS", href: "/docs" },
  { label: "BLOG", href: "https://betterdata.co/blog/tags/commerce-gateway" },
  { label: "CHANGELOG", href: "https://betterdata.co/changelog?module=commerce-gateway" },
  { label: "RELEASES", href: "https://github.com/commercegateway/commerce-gateway/releases" },
  { label: "PARTNERS", href: "/partners" },
  { label: "REGISTRY", href: "/registry" },
  { label: "GITHUB", href: "https://github.com/commercegateway/commerce-gateway" },
];

export function TopNav() {
  const pathname = usePathname();
  const pageType = inferPageType(pathname);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        borderBottom: "1px solid var(--color-border)",
        backdropFilter: "blur(8px)",
        background: "color-mix(in srgb, var(--color-surface) 86%, transparent)",
      }}
    >
      <div className="container flex min-h-14 items-center justify-between gap-4 py-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Commerce Gateway" width={190} height={24} priority />
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {links.map((link) => {
            const isExternal = link.href.startsWith("http");
            const active = pathname.startsWith(link.href) && !isExternal;

            const trackClick = () => {
              if (!isExternal) {
                if (link.href.startsWith("/docs")) {
                  trackCtaClicked({
                    cta: "view_docs",
                    location: "top_nav_desktop",
                    destination: link.href,
                    pageType,
                  });
                }
                return;
              }
              const lbl = link.label.toLowerCase();
              if (lbl === "blog" || lbl === "changelog") {
                trackOutboundClicked({
                  label: lbl,
                  destination: link.href,
                  location: "top_nav_desktop",
                  pageType,
                });
              } else if (lbl === "github" || lbl === "releases") {
                trackOutboundClicked({
                  label: lbl,
                  destination: link.href,
                  location: "top_nav_desktop",
                  pageType,
                });
              } else if (lbl === "partners") {
                trackCtaClicked({
                  cta: "partners",
                  location: "top_nav_desktop",
                  destination: link.href,
                  pageType,
                });
              } else if (lbl === "registry") {
                trackCtaClicked({
                  cta: "registry",
                  location: "top_nav_desktop",
                  destination: link.href,
                  pageType,
                });
              }
            };

            const dataPh =
              link.label === "DOCS"
                ? "view_docs"
                : link.label === "BLOG"
                  ? "read_blog"
                  : link.label === "CHANGELOG"
                    ? "read_changelog"
                    : link.label === "GITHUB"
                      ? "github"
                      : undefined;

            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                data-ph-cta={dataPh}
                onClick={trackClick}
                className="mono"
                style={{
                  fontSize: "var(--text-xs)",
                  letterSpacing: "0.08em",
                  color: active ? "var(--color-primary)" : "var(--color-ink-tertiary)",
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.npmjs.com/package/@commerce-gateway/sdk"
            target="_blank"
            rel="noreferrer"
            className="mono hidden rounded-full border px-3 py-1 md:inline-flex"
            style={{
              borderColor: "var(--color-primary-light)",
              background: "var(--color-primary-light)",
              color: "var(--color-primary-dark)",
              fontSize: "var(--text-xs)",
            }}
          >
            @commerce-gateway/sdk
          </a>
          <Link
            href="/docs/getting-started/quick-start"
            className="mono rounded px-3 py-2"
            data-ph-cta="get_started"
            style={{
              background: "var(--color-primary)",
              color: "white",
              fontSize: "var(--text-xs)",
            }}
            onClick={() =>
              trackCtaClicked({
                cta: "get_started",
                location: "top_nav_desktop",
                destination: "/docs/getting-started/quick-start",
                pageType,
              })
            }
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
