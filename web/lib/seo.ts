import type { Metadata } from "next";

import { faq } from "./copy";
import { areaList, kommuner, type Kommune } from "./kommuner";
import { site } from "./site";

export function pageMetadata(kommune: Kommune, path: string): Metadata {
  const title = `Fasadevask for meglere i ${kommune.name}, før fotodagen | ${site.shortName}`;
  const description = `For meglere i ${kommune.name}: fasadevask uten høytrykk før fotodagen. Hele boligen ren, helt opp til mønet, på én dag, med fast pris skriftlig før vi starter. Utført av Norgesmester i vinduspuss 2023.`;
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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
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
    url: site.baseUrl,
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
    name: `Fasadevask i ${kommune.name} før fotografen kommer`,
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
