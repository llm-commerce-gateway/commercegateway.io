"use client";

import { useEffect } from "react";
import { trackDocsPageView } from "@/lib/analytics/events";

type DocsPageViewProps = {
  slugPath: string;
  title: string;
};

export function DocsPageView({ slugPath, title }: DocsPageViewProps) {
  useEffect(() => {
    trackDocsPageView({ slug: slugPath, title });
  }, [slugPath, title]);

  return null;
}
