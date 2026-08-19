import type { MetadataRoute } from "next";

import { kommuner } from "@/lib/kommuner";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${site.baseUrl}/`, lastModified: now, priority: 1 },
    ...kommuner.map((k) => ({
      url: `${site.baseUrl}/fasadevask/${k.slug}`,
      lastModified: now,
      priority: 0.9,
    })),
    { url: `${site.baseUrl}/personvern`, lastModified: now, priority: 0.2 },
  ];
}
