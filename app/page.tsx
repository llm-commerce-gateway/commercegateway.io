import { Adapters } from "@/components/home/Adapters";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { UseCases } from "@/components/home/UseCases";

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://commercegateway.io/#website",
        url: "https://commercegateway.io",
        name: "Commerce Gateway",
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://commercegateway.io/#software",
        name: "Commerce Gateway",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Node.js",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
      <Hero />
      <HowItWorks />
      <Adapters />
      <UseCases />
    </>
  );
}
