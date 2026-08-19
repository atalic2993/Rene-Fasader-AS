import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Same-origin relay for the lead form.
 *
 * The browser posts here instead of straight to the CRM, because content
 * blockers on the visitor's phone routinely drop requests to marketing
 * endpoints and the lead disappears without anyone noticing. The forward to
 * the CRM happens server side, where nothing can block it.
 *
 * Set LEAD_WEBHOOK_URL in the Vercel project (the GoHighLevel inbound webhook).
 */

type Payload = Record<string, unknown>;

const REQUIRED = ["navn", "telefon", "epost", "adresse", "postnummer"] as const;

function clean(value: unknown, max = 200): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/**
 * Norwegian subscriber numbers are eight digits. Whatever shape the number
 * arrives in, it leaves here as +4712345678, or not at all: anything that is
 * not exactly eight digits after the country code is rejected rather than
 * guessed at. The browser already enforces this; the check is repeated here
 * because the endpoint is open to anything that can post JSON.
 */
function normalisePhone(value: string): string | null {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("0047")) digits = digits.slice(4);
  else if (digits.length > 8 && digits.startsWith("47")) digits = digits.slice(2);
  return /^\d{8}$/.test(digits) ? `+47${digits}` : null;
}

const EMAIL =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "ugyldig_json" }, { status: 400 });
  }

  // Honeypot. Answer with a success so the bot stops retrying.
  if (clean(body.botfelt)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    navn: clean(body.navn, 120),
    telefon: clean(body.telefon, 40),
    epost: clean(body.epost, 160).toLowerCase(),
    adresse: clean(body.adresse, 200),
    postnummer: clean(body.postnummer, 10),
    kommune: clean(body.kommune, 60),
    kilde: clean(body.kilde, 400),
  };

  const missing = REQUIRED.filter((field) => !lead[field]);
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: "mangler_felt", felt: missing },
      { status: 400 },
    );
  }

  const telefon = normalisePhone(lead.telefon);
  if (!telefon) {
    return NextResponse.json({ ok: false, error: "ugyldig_telefon" }, { status: 400 });
  }
  lead.telefon = telefon;

  if (!EMAIL.test(lead.epost)) {
    return NextResponse.json({ ok: false, error: "ugyldig_epost" }, { status: 400 });
  }

  if (!/^\d{4}$/.test(lead.postnummer)) {
    return NextResponse.json({ ok: false, error: "ugyldig_postnummer" }, { status: 400 });
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    console.error(
      "LEAD_WEBHOOK_URL is not set. The lead was received but has nowhere to go.",
    );
    return NextResponse.json({ ok: false, error: "mangler_webhook" }, { status: 500 });
  }

  const payload = {
    ...lead,
    kampanje: "Fotoklar-pakken",
    tjeneste: "Fasadevask",
    mottatt: new Date().toISOString(),
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.error("Lead webhook rejected the lead", response.status);
      return NextResponse.json({ ok: false, error: "webhook_feilet" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead webhook unreachable", error);
    return NextResponse.json({ ok: false, error: "webhook_utilgjengelig" }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}
