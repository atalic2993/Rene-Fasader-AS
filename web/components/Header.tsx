import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/site";

/**
 * Identity only. A campaign page has one job, so the header carries the mark
 * and nothing else: no navigation, no button, no number competing with the
 * call to action in the hero and in the form.
 *
 * The mark links to "/" rather than "#topp". The header is rendered on every
 * page, but id="topp" lives in the hero, which only the landing pages have, so
 * the fragment was a dead link on /personvern, /takk and the 404 page: the
 * click did nothing and left #topp stranded in the address bar while the label
 * still promised the top of the page. "/" is honest everywhere, and on a
 * landing page it lands on the hero regardless.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-petrol-line/50 bg-petrol/95 backdrop-blur-sm">
      <div className="shell flex h-16 items-center sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-3 text-white"
          aria-label={`${site.name}, til forsiden`}
        >
          <Image
            src="/img/rene-fasader-logo.png"
            alt=""
            width={440}
            height={535}
            priority
            className="h-8 w-auto sm:h-9"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="flex flex-col leading-none">
            <span className="text-[0.95rem] font-semibold tracking-tight sm:text-base">
              Rene Fasader
            </span>
            <span className="eyebrow mt-1 text-[0.6875rem] text-white/65">
              Fasadevask uten høytrykk
            </span>
          </span>
        </Link>
      </div>
    </header>
  );
}
