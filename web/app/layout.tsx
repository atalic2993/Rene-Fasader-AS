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
    <html lang="nb-NO" className={generalSans.variable}>
      <body className="antialiased">
        {children}
        <MetaPixel />
        <LeadOutbox />
      </body>
    </html>
  );
}
