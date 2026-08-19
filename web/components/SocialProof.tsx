import Image from "next/image";

import FacadeGrid from "@/components/FacadeGrid";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/ui";
import { socialProof } from "@/lib/copy";

/**
 * Placed early, while the doubt is still forming. Three checkable proofs:
 * a national title with its real numbers, a public approval the visitor can
 * look up on the org number, and three faces with the same surname.
 */
export default function SocialProof() {
  const { championship, approval, team } = socialProof;

  return (
    <section id="hvem" className="relative overflow-hidden bg-petrol-deep py-11 text-white sm:py-20">
      <FacadeGrid id="proof-grid" opacity={0.07} />

      <div className="shell relative">
        <SectionHead
          eyebrow={socialProof.eyebrow}
          title={socialProof.title}
          tone="light-on-dark"
        />

        <div className="mt-9 grid gap-5 sm:mt-10 sm:gap-5 lg:grid-cols-12">
          <Reveal className="border border-petrol-line bg-petrol p-6 sm:p-8 lg:col-span-7">
            <h3 className="text-heading font-semibold text-sand">
              {championship.title}
            </h3>
            <p className="mt-4 max-w-[34rem] text-white/75">{championship.body}</p>

            <dl className="mt-7 grid grid-cols-1 gap-px sm:mt-8 border border-petrol-line bg-petrol-line sm:grid-cols-3">
              {championship.stats.map((stat) => (
                <div key={stat.label} className="bg-petrol px-5 py-5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="flex items-baseline gap-1.5 text-white">
                      <span className="text-[1.875rem] font-semibold tracking-tight sm:text-[2.125rem]">
                        {stat.value}
                      </span>
                      <span className="text-sm text-white/60">{stat.unit}</span>
                    </span>
                    <span className="eyebrow mt-2.5 block text-white/60">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 border-t border-petrol-line pt-5 text-sm leading-relaxed text-white/60">
              {championship.caveat}
            </p>
          </Reveal>

          <Reveal
            delay={90}
            className="flex flex-col justify-between gap-6 border border-petrol-line bg-petrol p-6 sm:p-8 lg:col-span-5"
          >
            <div>
              <h3 className="text-heading font-semibold text-sand">
                {approval.title}
              </h3>
              <p className="mt-4 text-white/75">{approval.body}</p>
            </div>
            <div className="w-fit bg-white p-4">
              <Image
                src="/img/offentlig-godkjent-renholdsbedrift.png"
                alt="Merket for offentlig godkjent renholdsbedrift"
                width={291}
                height={148}
                sizes="180px"
                className="h-auto w-[9rem]"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-11 border-t border-petrol-line pt-9 sm:mt-12 sm:pt-9">
          <Reveal className="max-w-[42rem]">
            <h3 className="text-heading font-semibold">{team.title}</h3>
            <p className="mt-3 text-white/70">{team.body}</p>
          </Reveal>

          {/*
            Three full-width portraits ran to well over a thousand pixels on a
            phone, which is most of a screen each for a face. Below sm they
            become a compact row apiece: a small square portrait beside the
            name. From sm the three-up portrait grid returns.
          */}
          <ul className="mt-8 grid gap-4 sm:mt-8 sm:grid-cols-3 sm:gap-6">
            {team.members.map((member, i) => (
              <Reveal
                as="li"
                key={member.name}
                delay={i * 80}
                className="flex items-center gap-4 sm:block"
              >
                <div className="relative aspect-square w-20 shrink-0 overflow-hidden bg-petrol-mid sm:aspect-[4/5] sm:w-auto">
                  <Image
                    src={member.img}
                    alt={`${member.name}, ${member.role.toLowerCase()}`}
                    fill
                    sizes="(min-width: 640px) 30vw, 5rem"
                    className="object-cover object-top grayscale-[0.15]"
                  />
                </div>
                <div>
                  <h4 className="font-semibold sm:mt-4">{member.name}</h4>
                  <p className="mt-1 text-sm text-white/65">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
