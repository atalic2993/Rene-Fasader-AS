import FacadeGrid from "@/components/FacadeGrid";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { befaringLine, priceFraming } from "@/lib/copy";

/**
 * Never leads with a figure. The job of this block is to remove the fear of a
 * bill that grows, which is the real risk the homeowner is carrying.
 */
export default function PriceBlock() {
  return (
    <section id="pris" className="bg-bone pb-11 sm:pb-20">
      <div className="shell">
        <Reveal className="relative overflow-hidden bg-petrol text-white">
          <FacadeGrid id="price-grid" opacity={0.06} />
          <div className="relative grid gap-8 p-6 sm:gap-8 sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-12">
            <div className="lg:col-span-6">
              <Eyebrow className="text-sand">Pris</Eyebrow>
              <p className="mt-4 text-[clamp(1.6rem,1.05rem+1.7vw,2.35rem)] font-semibold leading-[1.12] tracking-[-0.02em] sm:mt-6">
                {priceFraming}
              </p>
            </div>
            <div className="lg:col-span-6 lg:border-l lg:border-white/15 lg:pl-14">
              <Eyebrow className="text-white/60">Befaringen</Eyebrow>
              <p className="mt-4 text-lead text-white/80 sm:mt-6">{befaringLine}</p>
              <p className="mt-4 text-sm text-white/60 sm:mt-6">
                Vi ser huset før vi setter prisen. Derfor kan prisen stå.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
