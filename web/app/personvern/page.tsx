import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Eyebrow } from "@/components/ui";
import { privacy } from "@/lib/copy";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${privacy.title} | ${site.shortName}` },
  description:
    "Hva Rene Fasader gjør med opplysningene du fyller inn i skjemaet, hvor lenge de lagres, og rettighetene dine.",
  alternates: { canonical: `${site.baseUrl}/personvern` },
  robots: { index: true, follow: true },
};

/**
 * A page of its own rather than a link off to the main site, so the visitor
 * never leaves the campaign to find out what happens to their number. Kept to
 * one column and plain words: it is read by people who are already suspicious.
 */
export default function PersonvernPage() {
  return (
    <>
      <Header />

      <main id="innhold" className="on-light bg-bone py-11 sm:py-20">
        <div className="shell">
          <div className="max-w-[46rem]">
            <Eyebrow className="text-muted">{privacy.updated}</Eyebrow>
            <h1 className="mt-4 text-title font-semibold sm:mt-5">
              {privacy.title}
            </h1>
            <p className="mt-3.5 text-lead text-muted sm:mt-4">{privacy.lead}</p>
          </div>

          <div className="mt-9 max-w-[46rem] sm:mt-10">
            {privacy.sections.map((section) => (
              <section
                key={section.h}
                className="border-t border-line py-6 last:border-b sm:py-7"
              >
                <h2 className="text-heading font-semibold">{section.h}</h2>
                <div className="mt-3 space-y-3 text-muted">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-9 sm:mt-10">
            <Link
              href="/"
              className="text-sm font-medium text-petrol underline underline-offset-4 hover:no-underline"
            >
              Tilbake til kampanjesiden
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
