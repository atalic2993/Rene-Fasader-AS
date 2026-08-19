import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/ui";
import { faq } from "@/lib/copy";

/**
 * Native details/summary, so it is keyboard operable, screen reader friendly
 * and findable with the browser's own in-page search without any JavaScript.
 */
export default function Faq() {
  return (
    <section id="sporsmal" className="on-light bg-white py-11 sm:py-20">
      <div className="shell grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-32">
            <SectionHead eyebrow={faq.eyebrow} title={faq.title} />
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          {faq.items.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i, 4) * 50}>
              <details
                open={i === 0}
                className="group border-b border-line first:border-t"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left sm:py-6 font-semibold transition-colors duration-200 hover:text-muted [&::-webkit-details-marker]:hidden">
                  <span className="text-[1.0625rem] sm:text-lg">{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="relative mt-2 h-3 w-3 shrink-0"
                  >
                    <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-petrol" />
                    <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-petrol transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="max-w-[42rem] pb-6 text-muted">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
