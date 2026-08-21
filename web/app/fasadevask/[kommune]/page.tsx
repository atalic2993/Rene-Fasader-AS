import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LandingPage from "@/components/LandingPage";
import { getKommune, kommuner } from "@/lib/kommuner";
import { jsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ kommune: string }> };

/**
 * One statically generated page per municipality. The ad for Asker links to
 * /fasadevask/asker, so the largest line on the page repeats the largest line
 * in the ad word for word.
 */
export function generateStaticParams() {
  return kommuner.map((k) => ({ kommune: k.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kommune: slug } = await params;
  const kommune = getKommune(slug);
  if (!kommune) return {};
  // noindex: five copies of one page with the place name swapped. See lib/seo.ts.
  return pageMetadata(kommune, `/fasadevask/${kommune.slug}`, { indexable: false });
}

export default async function Page({ params }: Props) {
  const { kommune: slug } = await params;
  const kommune = getKommune(slug);
  if (!kommune) notFound();

  const path = `/fasadevask/${kommune.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(kommune, path)) }}
      />
      <LandingPage kommune={kommune} />
    </>
  );
}
