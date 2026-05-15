import { Adapters } from "@/components/home/Adapters";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { UseCases } from "@/components/home/UseCases";
import { WorksWith } from "@/components/home/WorksWith";

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://betterdata.co/#organization",
        name: "Better Data",
        url: "https://betterdata.co",
      },
      {
        "@type": "WebSite",
        "@id": "https://commercegateway.io/#website",
        url: "https://commercegateway.io",
        name: "Commerce Gateway",
        publisher: { "@id": "https://betterdata.co/#organization" },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://commercegateway.io/#software",
        name: "Commerce Gateway",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Node.js",
        author: { "@id": "https://betterdata.co/#organization" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
      <Hero />
      <HowItWorks />
      <WorksWith />
      <Adapters />
      <UseCases />
    </>
  );
}
