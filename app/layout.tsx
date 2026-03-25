import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/home/Footer";
import { TopNav } from "@/components/nav/TopNav";
import "./globals.css";
import "../styles/tokens.css";

const displayFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display-next",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body-next",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono-next",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://commercegateway.io"),
  title: { default: "Commerce Gateway", template: "%s · Commerce Gateway" },
  description:
    "Open gateway for LLM commerce integrations. Connect any AI agent to any commerce platform with a single tool schema.",
  openGraph: {
    type: "website",
    url: "https://commercegateway.io",
    title: "Commerce Gateway",
    description:
      "Open gateway for LLM commerce integrations. Connect any AI agent to any commerce platform with a single tool schema.",
    images: ["/og"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@commercegateway",
    creator: "@commercegateway",
    title: "Commerce Gateway",
    description:
      "Open gateway for LLM commerce integrations. Connect any AI agent to any commerce platform with a single tool schema.",
    images: ["/og"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="antialiased">
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
