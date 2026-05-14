import Link from "next/link";
import {
  BETTERDATA_CCO_URL,
  ECOSYSTEM_STRIP,
} from "@/lib/betterdata-ecosystem";

export function EcosystemBanner() {
  return (
    <div
      className="border-b"
      style={{
        background: "color-mix(in srgb, var(--color-primary) 8%, var(--color-surface))",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="container flex flex-col gap-1 py-2 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-3 sm:text-left">
        <p className="mono text-[11px] leading-snug sm:text-xs" style={{ color: "var(--color-ink-secondary)" }}>
          {ECOSYSTEM_STRIP}
        </p>
        <Link
          href={BETTERDATA_CCO_URL}
          className="mono shrink-0 text-[11px] font-semibold underline-offset-2 hover:underline sm:text-xs"
          style={{ color: "var(--color-primary)" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          See Commerce Chain Optimization →
        </Link>
      </div>
    </div>
  );
}
