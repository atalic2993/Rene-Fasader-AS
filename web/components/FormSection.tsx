import FacadeGrid from "@/components/FacadeGrid";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import { Check, Eyebrow } from "@/components/ui";
import { befaringLine, ctaLine, formCopy, proofChips } from "@/lib/copy";
import type { Kommune } from "@/lib/kommuner";

export default function FormSection({ kommune }: { kommune: Kommune }) {
  return (
    <section
      id="skjema"
      className="relative scroll-mt-24 overflow-hidden bg-petrol-deep py-11 text-white sm:py-20"
    >
      <FacadeGrid id="form-grid" opacity={0.08} />

      <div className="shell relative grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow className="text-sand">{formCopy.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[clamp(1.75rem,1.2rem+1.6vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.025em] sm:mt-5">
              Fasadevask i {kommune.name},
              <span className="block text-sand">ferdig før fotodagen.</span>
            </h2>
            <p className="mt-4 max-w-[32rem] text-lead text-white/75 sm:mt-5">
              {befaringLine}
            </p>

            {/* the private seller, told in one line that the form is his too */}
            <p className="mt-4 max-w-[32rem] text-sm text-white/60">
              {formCopy.note}
            </p>

            <ul className="mt-7 space-y-3 border-t border-white/15 pt-6 sm:mt-8 sm:pt-6">
              {proofChips.map((chip) => (
                <li key={chip} className="flex items-start gap-3 text-white/80">
                  <Check className="mt-0.5 text-sand" />
                  <span>{chip}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={100} className="lg:col-span-7">
          <div className="on-light bg-white p-5 text-petrol sm:p-8 lg:p-9">
            <p className="text-heading font-semibold">{ctaLine}</p>
            <p className="mt-2 text-sm text-muted">
              {formCopy.formLead}
            </p>
            <LeadForm kommune={kommune} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
