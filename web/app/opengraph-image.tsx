import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const alt =
  "Fasadevask før fotografen kommer. Rene Fasader AS, fasadevask uten høytrykk i Oslo og omegn.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Share card, drawn from the same tokens as the page: petrol, sand, one rule. */
export default async function OpengraphImage() {
  const fontDir = join(process.cwd(), "app", "fonts");
  const [regular, semibold] = await Promise.all([
    readFile(join(fontDir, "GeneralSans-Regular.ttf")),
    readFile(join(fontDir, "GeneralSans-Semibold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0C343D",
          color: "#FFFFFF",
          padding: "72px",
          fontFamily: "General Sans",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "44px", height: "1px", backgroundColor: "#FFE599" }} />
          <div
            style={{
              fontSize: "22px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#FFE599",
              fontWeight: 600,
            }}
          >
            Fotoklar-pakken
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "82px",
              lineHeight: 1.02,
              letterSpacing: "-3px",
              fontWeight: 600,
              maxWidth: "900px",
            }}
          >
            Fasadevask før fotografen kommer.
          </div>
          <div
            style={{
              marginTop: "28px",
              fontSize: "32px",
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.72)",
              maxWidth: "820px",
            }}
          >
            Hele veggen ren, helt opp, på én dag. Fast pris skriftlig før vi
            starter.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.18)",
            paddingTop: "28px",
            fontSize: "24px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div style={{ display: "flex", fontWeight: 600, color: "#FFFFFF" }}>
            {site.name}
          </div>
          <div style={{ display: "flex" }}>Oslo, Bærum, Sandvika, Asker og Lillestrøm</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "General Sans", data: regular, weight: 400, style: "normal" },
        { name: "General Sans", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
