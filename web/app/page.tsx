import type { Metadata } from "next";

import LandingPage from "@/components/LandingPage";
import { defaultKommune } from "@/lib/kommuner";
import { jsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(defaultKommune, "/");

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // schema.org graph built from verified facts only
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd(defaultKommune, "/")),
        }}
      />
      <LandingPage kommune={defaultKommune} />
    </>
  );
}
