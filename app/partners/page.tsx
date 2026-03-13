import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aiProviderPartners, commerceBackendPartners, type Partner } from "@/lib/partners";

export const metadata: Metadata = {
  title: "Partners - Commerce Gateway",
  description:
    "Commerce Gateway integration partners - LLM providers, commerce backends, and the partner program.",
  robots: { index: false, follow: false },
};

function StatusBadge({ status }: { status: Partner["certificationStatus"] }) {
  if (status === "certified") {
    return (
      <span className="rounded-full bg-emerald-100 px-2 py-1 font-mono text-[10px] text-emerald-700 uppercase">
        Certified
      </span>
    );
  }

  if (status === "community") {
    return (
      <span className="rounded-full bg-zinc-100 px-2 py-1 font-mono text-[10px] text-zinc-700 uppercase">
        Community
      </span>
    );
  }

  return null;
}

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <article className="rounded-lg border bg-background p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="relative h-8 w-28">
          <Image src={partner.logoPath} alt={`${partner.name} logo`} fill className="object-contain object-left" />
        </div>
        <StatusBadge status={partner.certificationStatus} />
      </div>
      <h3 className="font-semibold text-lg">{partner.name}</h3>
      <p className="mt-2 text-muted-foreground text-sm leading-6">
        {partner.description}
      </p>
      {partner.adapterPackage ? (
        <p className="mt-3 inline-block rounded border px-2 py-1 font-mono text-[11px] text-muted-foreground">
          {partner.adapterPackage}
        </p>
      ) : null}
      <p className="mt-4">
        <Link href={partner.docsPath} className="text-emerald-600 text-sm underline underline-offset-4 hover:text-emerald-700">
          View docs →
        </Link>
      </p>
    </article>
  );
}

export default function PartnersPage() {
  return (
    <main className="px-4 py-12">
      <section className="mx-auto max-w-6xl">
        <h1 className="font-semibold text-4xl">Partners</h1>
        <p className="mt-3 max-w-3xl text-base text-muted-foreground">
          LLM providers, commerce backends, and ecosystem integrations certified to work with Commerce Gateway.
        </p>
      </section>

      <section className="mx-auto mt-10 max-w-6xl">
        <h2 className="font-semibold text-2xl">LLM Providers</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground text-sm leading-6">
          Certified adapters for every major AI provider. Any LLM, any commerce backend - that&apos;s the Commerce Gateway promise.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {aiProviderPartners.map((partner) => (
            <PartnerCard key={partner.slug} partner={partner} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl">
        <h2 className="font-semibold text-2xl">Commerce Backends</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground text-sm leading-6">
          Certified backend adapters - connect Commerce Gateway to your existing commerce platform.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {commerceBackendPartners.map((partner) => (
            <PartnerCard key={partner.slug} partner={partner} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl rounded-xl border bg-background p-6">
        <h2 className="font-semibold text-2xl">Partner Program</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground text-sm leading-7">
          Commerce Gateway partners get early adapter access, co-marketing, and
          a listing in the Commerce Gateway registry.
        </p>
        <a className="mt-4 inline-block text-emerald-600 underline underline-offset-4 hover:text-emerald-700" href="mailto:partners@betterdata.co">
          Become a partner →
        </a>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-6 rounded-xl border bg-background p-6 md:grid-cols-2">
        <div>
          <h2 className="font-semibold text-2xl">Commerce Gateway Certification</h2>
          <p className="mt-3 text-muted-foreground text-sm leading-7">A certified adapter guarantees:</p>
          <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
            <li>✓ Correct ProductResult schema output</li>
            <li>✓ Correct CartOperation handling</li>
            <li>✓ Error handling per spec</li>
            <li>✓ Tested against the Commerce Gateway conformance suite</li>
          </ul>
        </div>
        <aside className="rounded-lg border bg-muted/20 p-5">
          <h3 className="font-semibold">Apply for certification</h3>
          <p className="mt-2 text-muted-foreground text-sm">Submit your adapter for conformance review.</p>
          <a className="mt-4 inline-block text-emerald-600 underline underline-offset-4 hover:text-emerald-700" href="mailto:oss@betterdata.co">
            Apply for certification →
          </a>
        </aside>
      </section>
    </main>
  );
}
