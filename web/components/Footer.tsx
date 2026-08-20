import Image from "next/image";
import Link from "next/link";

import FacadeGrid from "@/components/FacadeGrid";

import { footerCopy } from "@/lib/copy";
import { kommuner } from "@/lib/kommuner";
import { site } from "@/lib/site";

/**
 * On a phone the footer is the last thing between a reader and the back
 * button, so it carries one idea: how to reach a person. The three contact
 * details are full-width tappable rows rather than a list of small links,
 * and the identity block sits on one line instead of three. From sm the
 * rows lose their frames and the layout returns to columns.
 */

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-4 w-4 shrink-0 text-sand sm:hidden"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 2.5h3l1.2 3-1.7 1.2a8.5 8.5 0 0 0 3.8 3.8L10.5 8.8l3 1.2v3a1 1 0 0 1-1.1 1A11.5 11.5 0 0 1 2 3.6 1 1 0 0 1 3 2.5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-4 w-4 shrink-0 text-sand sm:hidden"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M1.5 4h13v8h-13z" />
      <path d="m1.5 4.5 6.5 4.5 6.5-4.5" />
    </svg>
  );
}

/**
 * A framed, tappable row on a phone. From sm it loses the frame and becomes a
 * two-line entry: who you are calling above, the number itself below, so the
 * agent reads a name rather than three anonymous strings.
 */
function ContactRow({
  href,
  label,
  note,
  mobileNote,
  icon,
}: {
  href: string;
  label: string;
  /** Sits above the value from sm up. */
  note?: string;
  /** Sits at the right edge on a phone, where there is no room for a line above. */
  mobileNote?: string;
  icon: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="group flex min-h-11 items-center gap-3 border border-white/15 px-4 py-3 text-sm transition-colors hover:border-sand/60 hover:text-sand sm:block sm:min-h-0 sm:border-0 sm:px-0 sm:py-0 sm:hover:border-0"
      >
        {icon}
        {note ? (
          <span className="hidden text-xs text-white/50 transition-colors group-hover:text-sand/70 sm:block">
            {note}
          </span>
        ) : null}
        <span className="sm:mt-0.5 sm:block sm:text-base">{label}</span>
        {mobileNote ? (
          <span className="ml-auto text-white/55 sm:hidden">{mobileNote}</span>
        ) : null}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-petrol-line bg-petrol text-white">
      {/* the window grid again, faint, so the footer reads as part of the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden sm:block [mask-image:linear-gradient(to_left,black,transparent_65%)]"
      >
        <FacadeGrid id="footer-grid" opacity={0.05} />
      </div>

      <div className="shell relative grid gap-6 py-8 sm:grid-cols-12 sm:gap-8 sm:py-12 lg:gap-12">
        <div className="sm:col-span-5">
          <div className="flex items-center gap-3 sm:block">
            <Image
              src="/img/rene-fasader-logo.png"
              alt=""
              width={440}
              height={535}
              className="h-8 w-auto sm:h-10"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-lg font-semibold sm:mt-5">{site.name}</p>
          </div>
          {/* the areas live in their own column from sm, so the line stops repeating them */}
          <p className="mt-3 max-w-[24rem] text-sm text-white/60 sm:hidden">
            {footerCopy.tagline}
          </p>
          <p className="mt-2 hidden max-w-[20rem] text-sm text-white/60 sm:block">
            {footerCopy.taglineWide}
          </p>
        </div>

        <div className="sm:col-span-4">
          <h2 className="eyebrow text-white/60">{footerCopy.contactLabel}</h2>
          <ul className="mt-3 grid gap-1.5 sm:mt-5 sm:gap-4">
            <ContactRow
              href={site.phoneHref}
              label={site.phone}
              note={site.contactPerson.split(" ")[0]}
              mobileNote={site.contactPerson.split(" ")[0]}
              icon={<PhoneIcon />}
            />
            <ContactRow
              href={site.phoneSecondaryHref}
              label={site.phoneSecondary}
              note={site.phoneSecondaryName}
              mobileNote={site.phoneSecondaryName}
              icon={<PhoneIcon />}
            />
            <ContactRow
              href={site.emailHref}
              label={site.email}
              note="E-post"
              icon={<MailIcon />}
            />
          </ul>
        </div>

        {/*
          Coverage answers the first question an agent asks about a supplier,
          and it fills a column that was empty on wide screens. Plain text, not
          links: the campaign deliberately sends nobody sideways.
        */}
        <div className="hidden sm:col-span-3 sm:block">
          <h2 className="eyebrow text-white/60">{footerCopy.areasLabel}</h2>
          <ul className="mt-5 grid gap-2 text-sm text-white/75">
            {kommuner.map((k) => (
              <li key={k.slug} className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="inline-block h-1 w-1 shrink-0 bg-sand"
                />
                {k.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell relative flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-white/10 py-4 text-xs text-white/60 sm:py-5">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href={site.privacyUrl} className="transition-colors hover:text-sand">
            {footerCopy.privacyLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}
