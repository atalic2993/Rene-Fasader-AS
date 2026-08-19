import Reveal from "@/components/Reveal";
import { CtaButton, SectionHead } from "@/components/ui";
import { ctaButton, steps } from "@/lib/copy";

/** Kills the "this is going to be a hassle" objection in three lines. */
export default function Steps() {
  return (
    <section id="slik" className="on-light bg-white py-11 sm:py-20">
      <div className="shell">
        <SectionHead eyebrow={steps.eyebrow} title={steps.title} />

        <ol className="mt-9 grid gap-8 sm:mt-10 sm:grid-cols-3 sm:gap-8 lg:gap-10">
          {steps.items.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={i * 80}
              className="grid grid-cols-[auto_1fr] content-start items-start gap-x-3 border-t border-petrol/25 pt-5 sm:pt-6"
            >
              {/*
                Same device as the method section above: the step number hangs
                in the first column at the title's own type size, the title and
                body share the second, and content-start stops the spare height
                in a short card from pushing its text out of line with the rest.
                The visible numeral is padded to two digits to match, and hidden
                from screen readers because the heading already says the step.
              */}
              <span
                aria-hidden="true"
                className="text-heading font-medium tabular-nums text-muted"
              >
                {step.n.padStart(2, "0")}
              </span>
              <h3 className="text-heading font-semibold">
                <span className="sr-only">Steg {step.n}: </span>
                {step.title}
              </h3>
              <p className="col-start-2 row-start-2 mt-3 text-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>

        {/* Phones carry the sticky bar instead, so this button would be the
            second yellow CTA on screen. Kept from sm up, where there is none. */}
        <Reveal className="hidden sm:mt-10 sm:block">
          <CtaButton className="w-full sm:w-auto">{ctaButton}</CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
