import Reveal from "@/components/Reveal";
import { Check, CtaButton, Eyebrow } from "@/components/ui";
import { ctaButton, offer } from "@/lib/copy";

/**
 * The stacked deliverable. Value is laid out in full here; the word price
 * does not appear until the block further down the page.
 */
export default function Offer() {
  return (
    <section id="pakken" className="on-light bg-bone pb-11 sm:pb-20">
      <div className="shell">
        <div className="border-t border-line pt-10 sm:pt-14">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Reveal className="lg:sticky lg:top-32">
                <Eyebrow className="text-muted">{offer.eyebrow}</Eyebrow>
                <h2 className="mt-4 text-title font-semibold sm:mt-5">{offer.title}</h2>
                <p className="mt-3.5 text-lead text-muted sm:mt-4">{offer.lead}</p>
                {/* the wrapper carries the visibility: a display utility on the
                    button itself loses to the one baked into CtaButton */}
                <div className="mt-8 hidden lg:block">
                  <CtaButton>{ctaButton}</CtaButton>
                </div>
              </Reveal>
            </div>

            <ul className="lg:col-span-7">
              {offer.items.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={i * 60}
                  className="flex gap-4 border-b border-line py-5 first:border-t first:border-line sm:gap-7 sm:py-6"
                >
                  <Check className="mt-0.5 text-petrol" />
                  <div>
                    <h3 className="text-heading font-semibold">{item.title}</h3>
                    <p className="mt-2 text-muted">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Phones get the sticky bar here instead. Kept from sm to lg, where
              the column layout has not yet moved the button up beside the list. */}
          <Reveal className="hidden sm:mt-8 sm:block lg:hidden">
            <CtaButton className="w-full">{ctaButton}</CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
