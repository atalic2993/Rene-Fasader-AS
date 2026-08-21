import type { Metadata } from "next";

import { faq } from "./copy";
import { areaList, kommuner, type Kommune } from "./kommuner";
import { site } from "./site";

/** The generated card at app/opengraph-image.tsx, as an absolute URL. */
const ogImage = {
  url: `${site.baseUrl}/opengraph-image`,
  width: 1200,
  height: 630,
};

type PageOptions = {
  /**
   * Whether search engines may index the page.
   *
   * The municipality pages are deliberately false. They exist so the largest
   * line on the page repeats the largest line in the ad, which means all five
   * are the same page with one place name swapped: identical headings,
   * identical paragraphs, identical questions. Indexed, that is a set of
   * doorway pages competing with each other and with the root page, and
   * Google is entitled to discount the lot. Paid traffic reaches them by URL
   * and does not care about indexing, so nothing is lost by keeping them out.
   *
   * They stay `follow`, so whatever authority they attract still flows on to
   * the root page, which is the one page here written to be found.
   */
  indexable?: boolean;
};

export function pageMetadata(
  kommune: Kommune,
  path: string,
  { indexable = true }: PageOptions = {},
): Metadata {
  const title = `Fasadevask i ${kommune.name} uten høytrykk | ${site.shortName}`;
  const description = `Fasadevask i ${kommune.name} for forvaltere, utleiere og meglere. Hele fasaden ren, helt opp til mønet, på én dag, med fast pris skriftlig før vi starter. Egen lift, ingen stillas.`;
  const url = `${site.baseUrl}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "nb_NO",
      siteName: site.name,
      title,
      description,
      url,
      /*
       * Named here rather than left to the file convention. An explicit
       * openGraph block stops a nested route inheriting the generated card
       * from app/opengraph-image.tsx, so without this the five municipality
       * pages share as a bare text link, and the summary_large_image card
       * below promises a picture that was never sent.
       */
      images: [{ ...ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    robots: { index: indexable, follow: true },
  };
}

/**
 * Structured data. Only facts that are documented in the brief or on
 * renefasader.no appear here: no ratings, no review counts, no awards beyond
 * the one real championship title.
 */
export function jsonLd(kommune: Kommune, path: string) {
  const business = {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.baseUrl}/#organisasjon`,
    name: site.name,
    /*
     * The company's own site, not this campaign. The @id above is what ties
     * the graph together; url and sameAs are what tell Google the business on
     * this page is the business at renefasader.no rather than a new one that
     * happens to share a name and an organisation number.
     */
    url: site.mainSite,
    sameAs: [site.mainSite],
    telephone: `+47${site.phone.replace(/\s/g, "")}`,
    email: site.email,
    image: `${site.baseUrl}/img/oliver-i-arbeid-oslo.jpg`,
    logo: `${site.baseUrl}/img/rene-fasader-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postal,
      addressLocality: site.address.city,
      addressCountry: "NO",
    },
    identifier: {
      "@type": "PropertyValue",
      name: "Organisasjonsnummer",
      value: site.orgNr.replace(/\s/g, ""),
    },
    areaServed: kommuner.map((k) => ({ "@type": "Place", name: k.name })),
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Fasadevask uten høytrykk",
        serviceType: "Fasadevask",
        areaServed: areaList,
      },
    },
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${site.baseUrl}${path}#side`,
    url: `${site.baseUrl}${path}`,
    name: `Fasadevask i ${kommune.name} for forvaltere, utleiere og meglere`,
    inLanguage: "nb-NO",
    isPartOf: { "@id": `${site.baseUrl}/#organisasjon` },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${site.baseUrl}${path}#sporsmal`,
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [business, webpage, faqPage],
  };
}
