import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { problem } from "@/lib/copy";

/**
 * One short beat on the deadline, then straight on to the solution. The
 * homeowner already knows the wall is dirty, so nothing here explains algae.
 */
export default function Problem() {
  return (
    <section className="on-light bg-bone py-11 sm:py-20">
      <div className="shell grid gap-7 sm:gap-8 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-4">
          <Eyebrow className="text-muted">{problem.eyebrow}</Eyebrow>
        </Reveal>

        <div className="lg:col-span-8">
          <Reveal as="h2" className="text-title font-semibold">
            {problem.title}
          </Reveal>
          <div className="mt-5 space-y-4 text-lead text-muted sm:mt-6 sm:space-y-4">
            {problem.body.map((paragraph, i) => (
              <Reveal key={paragraph} as="p" delay={80 + i * 70}>
                {paragraph}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
