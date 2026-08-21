"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { site } from "@/lib/site";

declare global {
  interface Window {
    /** Defined by the snippet below, so it is absent until that has run. */
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * The Meta pixel, base code only.
 *
 * IT FIRES PageView AND NOTHING ELSE. There is deliberately no Lead event here,
 * and none may be added: the Lead is sent server side from the GoHighLevel
 * automation over the Conversions API, and a browser Lead on top of it would
 * double count every submission. If you are here to add `fbq('track', 'Lead')`,
 * the answer is no. Same for Contact, CompleteRegistration, SubmitApplication
 * and Schedule.
 *
 * The form sends the visitor to /takk with `router.push`, which is a
 * client-side navigation, so the browser never loads a new document and the
 * base snippet never fires again. The effect below fires PageView on every path
 * change after the first one, so /takk and the municipality pages are counted.
 * The first load is skipped because the snippet has already counted it.
 */
export default function MetaPixel() {
  const pathname = usePathname();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${site.metaPixelId}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${site.metaPixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
