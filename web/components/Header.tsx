import Image from "next/image";

import { site } from "@/lib/site";

/**
 * Identity only. A campaign page has one job, so the header carries the mark
 * and nothing else: no navigation, no button, no number competing with the
 * call to action in the hero and in the form.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-petrol-line/50 bg-petrol/95 backdrop-blur-sm">
      <div className="shell flex h-16 items-center sm:h-20">
        <a
          href="#topp"
          className="flex items-center gap-3 text-white"
          aria-label={`${site.name}, til toppen av siden`}
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
            <span className="eyebrow mt-1 text-[0.5625rem] text-white/65">
              Fasadevask uten høytrykk
            </span>
          </span>
        </a>
      </div>
    </header>
  );
}
