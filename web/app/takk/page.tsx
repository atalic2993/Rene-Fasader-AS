import type { Metadata } from "next";
import Image from "next/image";

import FacadeGrid from "@/components/FacadeGrid";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Check, Eyebrow } from "@/components/ui";
import { takkLines } from "@/lib/copy";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Takk for henvendelsen",
  description: "Rene Fasader ringer deg raskt. Ha telefonen klar.",
  robots: { index: false, follow: false },
};

/**
 * Not an end point. Its job is to make sure the caller actually answers
 * when Oliver calls from an unknown number.
 */
export default function TakkPage() {
  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-petrol-deep text-white">
        <FacadeGrid id="takk-grid" opacity={0.08} />

        <div className="shell relative grid gap-12 py-16 sm:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow className="text-sand">Registrert</Eyebrow>
            <h1 className="mt-6 text-title font-semibold">{takkLines[0]}</h1>
            <p className="mt-6 max-w-[34rem] text-lead text-white/75">
              {takkLines[1]}
            </p>

            <div className="mt-10 border border-petrol-line bg-petrol p-7 sm:p-8">
              <h2 className="text-heading font-semibold text-sand">
                Lagre nummeret nå
              </h2>
              <p className="mt-3 text-white/75">
                Vi ringer fra dette nummeret. Lagrer du det, går ikke samtalen
                til telefonsvareren som et ukjent nummer.
              </p>
              <a
                href={site.phoneHref}
                className="mt-6 inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-lg font-semibold transition-colors hover:border-sand hover:text-sand"
              >
                {site.phone}
                <span className="text-sm font-normal text-white/60">
                  ({site.contactPerson})
                </span>
              </a>
            </div>

            <ul className="mt-10 space-y-3 border-t border-white/15 pt-8">
              {[
                "Du får fast pris skriftlig etter befaringen",
                "Befaringen er gratis og uforpliktende",
                "Du er ikke bundet til noe før du selv sier ja",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <Check className="mt-0.5 text-sand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-petrol-mid">
              <Image
                src="/img/oliver-olaussen.jpg"
                alt="Oliver Olaussen, som ringer deg fra Rene Fasader."
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-4 flex items-start gap-3 text-xs leading-relaxed text-white/65">
              <span aria-hidden="true" className="mt-2 inline-block h-px w-6 shrink-0 bg-sand" />
              <span>
                Oliver Olaussen, Norgesmester i vinduspuss 2023. Det er han som
                ringer deg.
              </span>
            </figcaption>
          </figure>
        </div>
      </main>

      <Footer />
    </>
  );
}
