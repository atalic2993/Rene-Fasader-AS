import Image from "next/image";

import FacadeGrid from "@/components/FacadeGrid";
import { CtaButton } from "@/components/ui";
import { ctaButton, hero, proofChips } from "@/lib/copy";
import type { Kommune } from "@/lib/kommuner";

/**
 * One full screen, on every device. The section is sized to the viewport less
 * the header, laid out as a column: copy at the top, the photograph taking
 * whatever height is left over, the three proofs pinned to the bottom edge.
 *
 * The photograph is the flexible element on purpose. On a tall phone it is
 * generous, on a short one it gives way, and the button never leaves the
 * first screen either way.
 */
export default function Hero({ kommune }: { kommune: Kommune }) {
  const isShortName = kommune.name.length <= 8;

  return (
    <section
      id="topp"
      className="hero-screen relative flex flex-col overflow-hidden bg-petrol text-white"
    >
      <FacadeGrid id="hero-grid" className="[mask-image:linear-gradient(to_bottom,black,transparent)]" opacity={0.1} />

      {/* the long shadow from the logo mark, redrawn as a section edge */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-petrol-deep to-transparent"
      />

      <div className="hero-body shell relative flex flex-1 flex-col gap-5 pt-6 pb-4 sm:gap-10 sm:pt-12 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16 lg:pt-10 lg:pb-8">
        <div className="lg:col-span-7">
          <p
            className="rise eyebrow flex items-center gap-3 text-sand"
            style={{ "--rise-delay": "60ms" } as React.CSSProperties}
          >
            <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
            {hero.eyebrow}
          </p>

          <h1
            className="rise h1-display mt-5 font-semibold sm:mt-7"
            style={
              {
                "--rise-delay": "140ms",
                "--h1-max": isShortName ? "4.35rem" : "3.5rem",
              } as React.CSSProperties
            }
          >
            {/* short place names are held on one line; long ones must wrap */}
            <span className={isShortName ? "lg:whitespace-nowrap" : undefined}>
              Fasadevask i <span className="text-sand">{kommune.name}</span>
            </span>
            <span className="block font-normal text-white/85">
              helt opp, på én dag.
            </span>
          </h1>

          <p
            className="rise mt-5 max-w-[34rem] text-lead text-white/75 sm:mt-7"
            style={{ "--rise-delay": "220ms" } as React.CSSProperties}
          >
            {hero.lead}
            <span className="hero-lead-tail">{hero.leadTail}</span>
          </p>

          <div
            className="rise mt-6 sm:mt-9"
            style={{ "--rise-delay": "300ms" } as React.CSSProperties}
          >
            <CtaButton className="w-full sm:w-auto">{ctaButton}</CtaButton>
          </div>
        </div>

        <figure
          className="hero-figure rise relative flex min-h-[6rem] flex-1 flex-col justify-center lg:col-span-5 lg:min-h-0 lg:flex-none"
          style={{ "--rise-delay": "260ms" } as React.CSSProperties}
        >
          {/*
            The source photograph is landscape (roughly 17:10), so the further
            the frame drifts from that shape the harder it crops. Below lg the
            frame takes the height that is left over, but never less than 36%
            of the screen width and never taller than 1:1.2 against its own
            width. That keeps it a photograph rather than a letterbox strip on
            a short phone, and stops it going near-square on a tall one. Any
            height still left over is split above and below by justify-center,
            so it reads as air around the picture instead of a hole above the
            proof row. From lg the frame is sized against the viewport instead.
          */}
          <div className="relative min-h-[36vw] w-full flex-1 overflow-hidden border border-white/30 border-t-[3px] border-t-sand bg-petrol-mid max-h-[calc((100vw-2.5rem)/1.2)] lg:h-[52svh] lg:max-h-[30rem] lg:min-h-[17rem] lg:flex-none">
            <Image
              src="/img/oliver-i-arbeid-oslo.jpg"
              alt="Oliver Olaussen i sele og sikringsutstyr mens han vasker glass høyt over Oslo, med byen og fjorden bak seg."
              fill
              priority
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 92vw, 100vw"
              className="object-cover object-[56%_18%]"
            />
          </div>
          <figcaption className="hero-caption mt-3 flex items-start gap-3 text-xs leading-relaxed text-white/65 sm:mt-4">
            <span aria-hidden="true" className="mt-2 inline-block h-px w-6 shrink-0 bg-sand" />
            <span>
              Oliver Olaussen på jobb i høyden i Oslo. Norgesmester i vinduspuss
              2023
              <span className="hidden sm:inline">
                , og mannen som tar befaringen
              </span>
              .
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="hero-proofs shell relative pb-4 sm:pb-10 lg:pb-12">
        <ul
          className="rise grid gap-2 border-t border-white/15 pt-4 sm:gap-8 sm:pt-7 text-[0.8125rem] text-white/75 sm:grid-cols-3 sm:text-sm"
          style={{ "--rise-delay": "420ms" } as React.CSSProperties}
        >
          {proofChips.map((chip) => (
            <li key={chip} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-[0.4rem] inline-block h-1.5 w-1.5 shrink-0 bg-sand"
              />
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
