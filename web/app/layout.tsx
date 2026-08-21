import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import LeadOutbox from "@/components/LeadOutbox";
import MetaPixel from "@/components/MetaPixel";
import { site } from "@/lib/site";

import "./globals.css";

const generalSans = localFont({
  src: [
    { path: "./fonts/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
  preload: true,
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: `Fasadevask uten høytrykk i Oslo og omegn | ${site.shortName}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Fasadevask uten høytrykk for forvaltere, utleiere og meglere. Hele fasaden ren, helt opp til mønet, på én dag, med fast pris skriftlig på befaringen.",
  applicationName: site.name,
  authors: [{ name: site.name, url: site.mainSite }],
  formatDetection: { telephone: true, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#0C343D",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /*
     * data-scroll-behavior is not decoration. globals.css sets
     * scroll-behavior: smooth so anchor links glide, and up to Next 15 the
     * router quietly overrode that during a route change. Next 16 stopped
     * doing so, which turned the jump to /takk after a submission into an
     * animated scroll from deep down a very long page. The thank-you page is a
     * fraction of that height, so the document collapsed underneath the
     * animation and it settled hundreds of pixels down, with the heading
     * pushed up under the header. This attribute asks the router to take the
     * override back: anchors still glide, route changes land at the top.
     */
    <html lang="nb-NO" className={generalSans.variable} data-scroll-behavior="smooth">
      <body className="antialiased">
        {children}
        <MetaPixel />
        <LeadOutbox />
      </body>
    </html>
  );
}
