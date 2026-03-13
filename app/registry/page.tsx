import type { Metadata } from "next";

type AdapterRow = {
  name: string;
  provider: string;
  status: "Certified" | "Community";
  npm: string;
};

const llmAdapters: AdapterRow[] = [
  {
    name: "@commerce-gateway/adapter-anthropic",
    provider: "Anthropic",
    status: "Certified",
    npm: "https://www.npmjs.com/package/@commerce-gateway/adapter-anthropic",
  },
  {
    name: "@commerce-gateway/adapter-openai",
    provider: "OpenAI",
    status: "Certified",
    npm: "https://www.npmjs.com/package/@commerce-gateway/adapter-openai",
  },
  {
    name: "@commerce-gateway/adapter-grok",
    provider: "xAI",
    status: "Certified",
    npm: "https://www.npmjs.com/package/@commerce-gateway/adapter-grok",
  },
  {
    name: "@commerce-gateway/adapter-gemini",
    provider: "Google",
    status: "Certified",
    npm: "https://www.npmjs.com/package/@commerce-gateway/adapter-gemini",
  },
];

const commerceBackends: AdapterRow[] = [
  {
    name: "@commerce-gateway/backend-shopify",
    provider: "Shopify",
    status: "Certified",
    npm: "https://www.npmjs.com/package/@commerce-gateway/backend-shopify",
  },
  {
    name: "@commerce-gateway/backend-bigcommerce",
    provider: "BigCommerce",
    status: "Certified",
    npm: "https://www.npmjs.com/package/@commerce-gateway/backend-bigcommerce",
  },
  {
    name: "@commerce-gateway/backend-woocommerce",
    provider: "WooCommerce",
    status: "Community",
    npm: "https://www.npmjs.com/package/@commerce-gateway/backend-woocommerce",
  },
];

export const metadata: Metadata = {
  title: "Commerce Gateway Registry",
  description: "Registered LLM adapters and commerce backends for Commerce Gateway.",
  robots: { index: false, follow: false },
};

function StatusPill({ status }: { status: AdapterRow["status"] }) {
  if (status === "Certified") {
    return (
      <span className="rounded-full bg-emerald-100 px-2 py-1 font-mono text-[10px] text-emerald-700 uppercase">
        Certified
      </span>
    );
  }

  return (
    <span className="rounded-full bg-zinc-100 px-2 py-1 font-mono text-[10px] text-zinc-700 uppercase">
      Community
    </span>
  );
}

function RegistryTable({
  heading,
  firstColName,
  secondColName,
  rows,
}: {
  heading: string;
  firstColName: string;
  secondColName: string;
  rows: AdapterRow[];
}) {
  return (
    <section className="mt-10">
      <h2 className="font-semibold text-2xl">{heading}</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border bg-background">
        <table className="min-w-[760px] w-full border-collapse text-left text-sm">
          <thead className="bg-muted/40">
            <tr className="border-b">
              <th className="px-4 py-3 font-medium">{firstColName}</th>
              <th className="px-4 py-3 font-medium">{secondColName}</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">npm</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="border-b last:border-b-0">
                <td className="px-4 py-3 font-mono text-[12px]">{row.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.provider}</td>
                <td className="px-4 py-3">
                  <StatusPill status={row.status} />
                </td>
                <td className="px-4 py-3">
                  <a
                    className="text-emerald-600 underline underline-offset-4 hover:text-emerald-700"
                    href={row.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    npm
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function RegistryPage() {
  return (
    <main className="px-4 py-12">
      <section className="mx-auto max-w-6xl">
        <h1 className="font-semibold text-4xl">Commerce Gateway Registry</h1>
        <p className="mt-3 max-w-3xl text-base text-muted-foreground">
          Registered LLM adapters and commerce backends - browse, verify, and connect.
        </p>
        <span className="mt-4 inline-block rounded-full bg-emerald-100 px-3 py-1 font-mono text-[11px] text-emerald-700 uppercase tracking-wide">
          Registry in development
        </span>
      </section>

      <div className="mx-auto max-w-6xl">
        <RegistryTable heading="LLM Adapters" firstColName="Adapter" secondColName="Provider" rows={llmAdapters} />
        <RegistryTable
          heading="Commerce Backends"
          firstColName="Backend"
          secondColName="Platform"
          rows={commerceBackends}
        />

        <section className="mt-10 rounded-xl border bg-background p-6">
          <h2 className="font-semibold text-2xl">Register your adapter</h2>
          <p className="mt-3 text-muted-foreground text-sm">
            Building a Commerce Gateway adapter? Submit it to the registry.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              className="text-emerald-600 underline underline-offset-4 hover:text-emerald-700"
              href="https://github.com/commercegateway/commerce-gateway/discussions"
              target="_blank"
              rel="noopener noreferrer"
            >
              → Open an RFC
            </a>
            <a
              className="text-emerald-600 underline underline-offset-4 hover:text-emerald-700"
              href="mailto:oss@betterdata.co"
            >
              → Apply for certification
            </a>
          </div>
        </section>

        <section className="mt-10 rounded-xl border bg-background p-6">
          <h2 className="font-semibold text-2xl">Coming soon</h2>
          <p className="mt-3 text-muted-foreground text-sm leading-7">
            registry.commercegateway.io - searchable adapter registry with version history, conformance test results, and download
            stats.
          </p>
        </section>
      </div>
    </main>
  );
}
