import FacadeGrid from "@/components/FacadeGrid";
import Reveal from "@/components/Reveal";
import { dnaSentence } from "@/lib/copy";

/**
 * The campaign's message DNA, verbatim and in one piece. It sits immediately
 * under the hero so the promise the visitor clicked on in the ad is restated
 * in full before the page starts arguing for anything.
 *
 * Treated as a plate rather than a strip: hairline edges seat it against the
 * dark hero above and the bone section below, the window grid from the logo
 * mark carries the sand across the right-hand side, and a heavy keyline turns
 * the sentence into a statement instead of a paragraph in a yellow band. The
 * sentence itself is never split or restyled in parts.
 */
export default function MessageBand() {
  return (
    <section className="on-light relative overflow-hidden border-y border-petrol/20 bg-sand text-petrol">
      {/*
        The window grid from the logo mark, fading in from the right edge so
        the sentence always sits on flat sand. A texture rather than a panel:
        no hard seam for a line of type to collide with.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden sm:block [mask-image:linear-gradient(to_left,black_6%,transparent_52%)]"
      >
        <FacadeGrid id="band-grid" tone="text-petrol" opacity={0.26} />
      </div>
      <div className="shell relative grid gap-4 py-7 sm:gap-5 sm:py-10 lg:grid-cols-12 lg:items-start lg:gap-8">
        <Reveal className="lg:col-span-2">
          <p className="eyebrow flex items-center gap-3 text-petrol/75">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
            Løftet
          </p>
        </Reveal>

        <Reveal delay={90} className="lg:col-span-8 lg:col-start-3">
          <p className="max-w-[34rem] border-l-[3px] border-petrol pl-5 text-[clamp(1.35rem,1.02rem+1.45vw,2.15rem)] font-medium leading-[1.22] tracking-[-0.02em] text-pretty sm:pl-7 sm:max-w-[42rem] lg:max-w-none">
            {dnaSentence}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
