import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commerce Registry",
  description:
    "Verified commerce identity for AI agents — canonical gateway URLs, domain proof, and optional GTIN product-line claims. Browse the public directory at registry.betterdata.co.",
};

function TrustBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-emerald-100 px-2 py-1 font-mono text-[10px] text-emerald-700 uppercase tracking-wide">
      {label}
    </span>
  );
}

function TrustBadgeMuted({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-zinc-100 px-2 py-1 font-mono text-[10px] text-zinc-700 uppercase tracking-wide">
      {label}
    </span>
  );
}

function BetaCallout() {
  return (
    <blockquote className="my-6 rounded-lg border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-sm text-foreground leading-7">
      <strong>Free during open beta.</strong> Registration in the Better Data public registry at registry.betterdata.co is free. No
      credit card required.
    </blockquote>
  );
}

export default function RegistryPage() {
  return (
    <main className="px-4 py-12">
      {/* SECTION 1 — Hero */}
      <section className="mx-auto max-w-6xl">
        <h1 className="font-semibold text-4xl">Commerce Registry</h1>
        <div className="mt-4 max-w-3xl space-y-4 text-base text-muted-foreground leading-7">
          <p>
            When an AI agent needs to call commerce operations for a brand — find products, check inventory, start a checkout — it
            needs to know two things: where the gateway is, and whether it can be trusted. The Commerce Registry answers both.
          </p>
          <p>
            Commerce Gateway Registry is the verified commerce identity layer for AI agents. Not a general MCP directory. A
            commerce-specific trust registry where brands prove domain ownership and attach product-line claims — so any AI agent
            knows it&apos;s talking to the real store, not a spoofed endpoint.
          </p>
          <p className="font-medium text-foreground">Free to register during open beta.</p>
        </div>
        <BetaCallout />
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://app.betterdata.co/sign-up?utm_source=commercegateway.io&utm_medium=site&utm_campaign=registry_native"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Open in Better Data
          </a>
          <Link
            href="/docs/registry/setup"
            className="inline-flex items-center justify-center rounded-lg border border-emerald-600 bg-background px-5 py-2.5 text-sm font-medium text-emerald-700 hover:bg-emerald-50"
          >
            View setup docs
          </Link>
          <a
            href="https://registry.betterdata.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-zinc-50"
          >
            Browse the directory
          </a>
        </div>
      </section>

      {/* SECTION 2 — Discovery first */}
      <section className="mx-auto mt-14 max-w-6xl">
        <h2 className="font-semibold text-2xl">Who&apos;s in the registry</h2>
        <p className="mt-3 text-muted-foreground text-sm leading-7">
          Browse verified commerce gateways at{" "}
          <a
            href="https://registry.betterdata.co"
            className="text-emerald-600 underline underline-offset-4 hover:text-emerald-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            registry.betterdata.co
          </a>
          .
        </p>
        <p className="mt-4">
          <a
            href="https://registry.betterdata.co"
            className="inline-flex items-center text-emerald-600 text-sm font-medium underline underline-offset-4 hover:text-emerald-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse the directory →
          </a>
        </p>
        <p className="mt-4 text-muted-foreground text-sm leading-7">Registered gateways show:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground text-sm leading-7">
          <li>Verified domain (proven ownership via DNS or hosted token)</li>
          <li>Commerce capabilities (product search, cart, orders, returns)</li>
          <li>GTIN product-line claims (optional — associates specific product lines with the gateway)</li>
          <li>Protocol version and endpoint URL</li>
          <li>Registration date and last verified timestamp</li>
        </ul>
      </section>

      {/* SECTION 3 — Two registration options + trust between */}
      <section className="mx-auto mt-14 max-w-6xl">
        <h2 className="font-semibold text-2xl">Discovery with proof</h2>
        <div className="mt-4 max-w-3xl text-muted-foreground text-sm leading-7">
          <p>
            The registry is not a walled garden. It implements the open Commerce Registry Protocol — any compliant registry
            deployment can interoperate. Better Data operates a hosted public registry. You can self-host your own.
          </p>
          <p className="mt-4">
            The key distinction: a gateway listed in the registry is <strong className="text-foreground">verified</strong>.
            Verification means you have proven control of the brand domain where the gateway runs — not just that you published a
            file.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-6">
          <article className="rounded-xl border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg">Verified registration</h3>
              <TrustBadge label="Higher trust" />
            </div>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-muted-foreground text-sm leading-7">
              <li>Deploy your gateway on a public HTTPS URL you control (e.g. api.brand.com)</li>
              <li>
                POST /api/gateways to a protocol-compliant registry with your brand, apex domain, endpoint, protocol version, and
                capabilities
              </li>
              <li>Complete domain verification — DNS TXT record or hosted .well-known token — to prove domain control</li>
              <li>Your gateway is discoverable as verified via the registry resolution APIs</li>
            </ol>
            <p className="mt-4">
              <Link href="/docs/registry/setup" className="text-emerald-600 text-sm underline underline-offset-4 hover:text-emerald-700">
                Setup guide →
              </Link>
            </p>
          </article>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6">
            <p className="font-semibold text-foreground text-sm">Why verification matters to AI agents</p>
            <p className="mt-2 text-muted-foreground text-sm leading-7">
              Unverified gateways (<code className="font-mono text-[12px] text-foreground">.well-known</code> only) are discoverable
              but flagged as lower trust. Verified gateways have proven domain control — agents and resolvers treat these as
              authoritative for that brand&apos;s commerce operations. For production use, always complete full verification.
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border bg-background">
              <table className="min-w-[520px] w-full border-collapse text-left text-sm">
                <thead className="bg-muted/40">
                  <tr className="border-b">
                    <th className="px-3 py-2 font-medium">Trust tier</th>
                    <th className="px-3 py-2 font-medium">How it works</th>
                    <th className="px-3 py-2 font-medium">Agent treatment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-3 py-2 text-muted-foreground">✅ Verified</td>
                    <td className="px-3 py-2 text-muted-foreground">Domain proof + registry listing</td>
                    <td className="px-3 py-2 text-muted-foreground">Authoritative — treated as the brand&apos;s canonical gateway</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-muted-foreground">⚠️ Unverified</td>
                    <td className="px-3 py-2 text-muted-foreground">.well-known file only</td>
                    <td className="px-3 py-2 text-muted-foreground">Discoverable but not authoritative</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <article className="rounded-xl border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg">.well-known only</h3>
              <TrustBadgeMuted label="Lower trust" />
            </div>
            <p className="mt-4 text-muted-foreground text-sm leading-7">
              Host /.well-known/commerce-gateway.json on your domain. Resolvers that implement the protocol can find you via
              well-known fallback. The spec treats this as unverified until you complete registry registration.
            </p>
            <p className="mt-4">
              <Link
                href="/docs/registry/well-known"
                className="text-emerald-600 text-sm underline underline-offset-4 hover:text-emerald-700"
              >
                .well-known spec →
              </Link>
            </p>
          </article>
        </div>
      </section>

      <BetaCallout />

      {/* SECTION 4 — Two verification methods */}
      <section className="mx-auto mt-14 max-w-6xl">
        <h2 className="font-semibold text-2xl">Proving domain control</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground text-sm leading-7">
          The registry issues a verification token when you register. Complete verification using either method.
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border bg-background p-6">
            <h3 className="font-semibold text-lg">DNS TXT record</h3>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-muted-foreground text-sm leading-7">
              <li>Register your gateway — receive a verification token</li>
              <li>
                Add a DNS TXT record at:{" "}
                <code className="font-mono text-[12px] text-foreground">_commerce-gateway.{`{your-domain}`}</code> with value:{" "}
                <code className="font-mono text-[12px] text-foreground">{`{your-token}`}</code>
              </li>
              <li>Call POST /api/gateways/{`{id}`}/verify</li>
              <li>DNS propagation is checked automatically</li>
            </ol>
            <p className="mt-4 text-muted-foreground text-xs">DNS changes may take up to 48 hours to propagate.</p>
          </div>
          <div className="rounded-xl border bg-background p-6">
            <h3 className="font-semibold text-lg">Hosted verification file</h3>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-muted-foreground text-sm leading-7">
              <li>Register your gateway — receive a verification token</li>
              <li>
                Serve this file at:{" "}
                <code className="break-all font-mono text-[12px] text-foreground">
                  https://{`{your-domain}`}/.well-known/commerce-gateway-verify.json
                </code>{" "}
                with content:{" "}
                <code className="font-mono text-[12px] text-foreground">{`{ "token": "{your-token}" }`}</code>
              </li>
              <li>Call POST /api/gateways/{`{id}`}/verify</li>
              <li>The registry fetches the file and checks the token</li>
            </ol>
            <p className="mt-4 text-muted-foreground text-xs">
              The file must be served over HTTPS on the exact registered domain.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Why agents use the registry */}
      <section className="mx-auto mt-14 max-w-6xl">
        <h2 className="font-semibold text-2xl">Why agents use the registry</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground text-sm leading-7">
          Without a verified registry, an AI agent connecting to commerce tools has no way to confirm it&apos;s reached the
          legitimate gateway for a brand. The registry provides:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground text-sm leading-7">
          <li>
            <strong className="text-foreground">Canonical endpoint resolution</strong> — look up a brand domain, get back the
            verified gateway URL
          </li>
          <li>
            <strong className="text-foreground">Trust signal</strong> — verified status means someone proved domain control, not just
            published a file
          </li>
          <li>
            <strong className="text-foreground">Capability discovery</strong> — agents see what tools are available before
            connecting (product search, cart, orders, returns, specific categories)
          </li>
          <li>
            <strong className="text-foreground">Product-line scope</strong> — GTIN claims let agents know which brands and product
            lines a gateway serves
          </li>
        </ul>
        <p className="mt-4 text-muted-foreground text-sm leading-7">
          This is the same trust model DNS provides for web browsing — but for AI-accessible commerce infrastructure.
        </p>
      </section>

      {/* SECTION 6 — GTIN claims */}
      <section className="mx-auto mt-14 max-w-6xl rounded-xl border bg-background p-6">
        <h2 className="font-semibold text-2xl">Attach product-line proof</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground text-sm leading-7">
          After your gateway is verified, you can attach GS1 / GTIN claims to associate product lines with your gateway. Submit a
          certificate or proof URL per claim. POST /api/gateways/{`{id}`}/gtins
        </p>
        <p className="mt-4">
          <Link href="/docs/registry/gtins" className="text-emerald-600 text-sm underline underline-offset-4 hover:text-emerald-700">
            GTIN claims →
          </Link>
        </p>
      </section>

      {/* SECTION 7 — Which registry to use */}
      <section className="mx-auto mt-14 max-w-6xl">
        <h2 className="font-semibold text-2xl">Choose your registry</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border bg-background p-6 shadow-sm">
            <h3 className="font-semibold text-lg">Better Data public registry — free during open beta</h3>
            <p className="mt-3 text-muted-foreground text-sm leading-6">
              The default hosted registry for the Commerce Gateway ecosystem. Register your gateway, complete domain verification,
              and appear in the public directory at registry.betterdata.co.
            </p>
            <p className="mt-3 text-muted-foreground text-sm leading-6">
              Free to register. No hosting or Better Data account required to list. A Better Data account unlocks the hosted
              console, analytics, and managed gateway infrastructure.
            </p>
            <p className="mt-4 font-mono text-xs text-foreground break-all">REGISTRY_URL: https://registry.betterdata.co</p>
            <p className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Link href="/docs/registry/setup" className="text-emerald-600 text-sm underline underline-offset-4 hover:text-emerald-700">
                Register now →
              </Link>
              <a
                href="https://app.betterdata.co/sign-up?utm_source=commercegateway.io&utm_medium=site&utm_campaign=registry"
                className="text-emerald-600 text-sm underline underline-offset-4 hover:text-emerald-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Better Data →
              </a>
            </p>
          </article>
          <article className="rounded-xl border bg-background p-6 shadow-sm">
            <h3 className="font-semibold text-lg">Self-hosted registry</h3>
            <p className="mt-3 text-muted-foreground text-sm leading-6">
              Deploy your own registry using the Commerce Registry Protocol. Full control. Interoperable with any compliant
              implementation.
            </p>
            <p className="mt-4">
              <Link
                href="/docs/registry/self-hosting"
                className="text-emerald-600 text-sm underline underline-offset-4 hover:text-emerald-700"
              >
                Self-host docs →
              </Link>
            </p>
          </article>
          <article className="rounded-xl border bg-background p-6 shadow-sm">
            <h3 className="font-semibold text-lg">Protocol spec</h3>
            <p className="mt-3 text-muted-foreground text-sm leading-6">
              The open registry protocol is published and versioned. Build your own compliant registry or resolver.
            </p>
            <p className="mt-4">
              <Link
                href="/docs/protocol/overview"
                className="text-emerald-600 text-sm underline underline-offset-4 hover:text-emerald-700"
              >
                Read the spec →
              </Link>
            </p>
          </article>
        </div>
      </section>

      {/* SECTION 8 — Quick reference + directory anchor */}
      <section id="directory" className="mx-auto mt-14 max-w-6xl scroll-mt-24">
        <h2 className="font-semibold text-2xl">At a glance</h2>
        <p className="mt-3 text-muted-foreground text-sm leading-7">
          Browse and resolve gateways via the public registry API at{" "}
          <a
            href="https://registry.betterdata.co"
            className="text-emerald-600 underline underline-offset-4 hover:text-emerald-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            registry.betterdata.co
          </a>
          . Use the setup guide to register your gateway for verified listing.
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border bg-background">
          <table className="min-w-[640px] w-full border-collapse text-left text-sm">
            <thead className="bg-muted/40">
              <tr className="border-b">
                <th className="px-4 py-3 font-medium">Goal</th>
                <th className="px-4 py-3 font-medium">What to do</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3 text-muted-foreground">Verified gateway in a registry</td>
                <td className="px-4 py-3">Register + DNS TXT or .well-known token verify</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 text-muted-foreground">Gateway discovery without a registry</td>
                <td className="px-4 py-3">Publish /.well-known/commerce-gateway.json</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 text-muted-foreground">Attach product-line proof</td>
                <td className="px-4 py-3">POST /api/gateways/{`{id}`}/gtins after registration</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 text-muted-foreground">Point at a different registry</td>
                <td className="px-4 py-3">Set REGISTRY_URL in your gateway config</td>
              </tr>
              <tr className="border-b last:border-b-0">
                <td className="px-4 py-3 text-muted-foreground">Run your own registry</td>
                <td className="px-4 py-3">Deploy a Commerce Registry Protocol server</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
