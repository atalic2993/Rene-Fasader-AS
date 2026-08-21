import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

/**
 * Only the pages that are meant to be found.
 *
 * The five municipality pages are left out on purpose. They are noindex, and
 * listing a noindex URL in a sitemap asks Google to index the one thing the
 * page itself refuses. See lib/seo.ts for why they are noindex at all.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${site.baseUrl}/`, lastModified: now, priority: 1 },
    { url: `${site.baseUrl}/personvern`, lastModified: now, priority: 0.2 },
  ];
}
