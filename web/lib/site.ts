/**
 * Verified company facts.
 * Every value here comes from the campaign brief (2026-08-18) or renefasader.no.
 * Nothing in this file may be invented, rounded or embellished.
 */

export const site = {
  name: "Rene Fasader AS",
  shortName: "Rene Fasader",
  /** Non-breaking spaces so the number never splits across a line. */
  orgNr: "935 269 318",
  contactPerson: "Oliver Olaussen",
  phone: "98 80 56 38",
  phoneHref: "tel:+4798805638",
  phoneSecondary: "95 07 90 15",
  /** Same dialling format as the number above, so both are tappable on a phone. */
  phoneSecondaryHref: "tel:+4795079015",
  phoneSecondaryName: "Stian",
  email: "kontakt@renefasader.no",
  emailHref: "mailto:kontakt@renefasader.no",
  address: {
    street: "Neuberggata 3B",
    postal: "0367",
    city: "Oslo",
  },
  mainSite: "https://renefasader.no/",
  /** This site's own privacy page. See app/personvern/page.tsx. */
  privacyUrl: "/personvern",
  /** Set in Vercel. Production domain for canonical + Open Graph URLs. */
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://renefasader.kampanjeside.no",
} as const;

/** The championship result, exactly as documented in the brief. */
export const championship = {
  title: "Norgesmester i vinduspuss 2023",
  timeSeconds: { value: "19,8", unit: "sekunder" },
  competitors: { value: "22", unit: "deltakere" },
  margin: { value: "0,15", unit: "sekunder" },
} as const;
