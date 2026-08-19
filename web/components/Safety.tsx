import Reveal from "@/components/Reveal";
import { Check, Eyebrow } from "@/components/ui";
import { safety, scarcityLine } from "@/lib/copy";

/**
 * A safety block, not a guarantee block. Oliver has given no guarantee, so the
 * page promises none. The fixed written price carries the risk reversal on its
 * own, backed by the public approval and the tidy-up.
 *
 * The scarcity line rides along at the bottom because it only works once the
 * visitor already believes the job is safe to buy.
 */
export default function Safety() {
  return (
    <section id="trygghet" className="on-light bg-bone py-11 sm:py-20">
      <div className="shell grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-4">
          <Eyebrow className="text-muted">{safety.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-title font-semibold sm:mt-5">{safety.title}</h2>
        </Reveal>

        <div className="lg:col-span-8">
          <ul className="grid gap-px bg-line sm:grid-cols-2">
            {safety.items.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                delay={i * 60}
                className="flex items-start gap-4 bg-bone p-5 sm:p-6"
              >
                <Check className="mt-0.5 text-petrol" />
                <span className="font-medium">{item}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal
            delay={120}
            className="mt-5 border-l-2 border-sand bg-white p-5 sm:mt-5 sm:p-6"
          >
            <Eyebrow className="text-muted">Kapasitet denne måneden</Eyebrow>
            <p className="mt-4 text-lead sm:mt-5">{scarcityLine}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
