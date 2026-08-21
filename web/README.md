# Rene Fasader AS, fasadevask campaign

Campaign landing page for facade washing (fasadevask) in Oslo, Bærum, Sandvika,
Asker and Lillestrøm. One page, one service, one conversion action.

Written to a B2B reader: eiendomsforvaltere, utleiere, boligutviklere and
meglere. Address them as "dere/deres" about the company and the building, and
"deg" only about the person we ring. Never "boligen din", the reader is
responsible for the property rather than living in it. The rules that govern
every string, including the three formerly locked lines that were reworded on
2026-08-20, are at the top of `lib/copy.ts`.

## Stack

Next.js 16 (App Router) with React 19, TypeScript and Tailwind v4. No UI
libraries and no animation libraries: the motion is 40 lines of CSS plus one
IntersectionObserver, which keeps the JavaScript at the framework baseline.

General Sans (the client's own typeface) is self-hosted from `app/fonts` through
`next/font/local`, so there are no third-party font requests and no layout shift.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Environment

Copy `.env.example` to `.env.local`. Two variables:

| Variable | What it does |
|---|---|
| `LEAD_WEBHOOK_URL` | The GoHighLevel inbound webhook. **Required in production.** Without it the form returns an error and points the visitor at the phone number. |
| `NEXT_PUBLIC_SITE_URL` | Production URL for canonical tags, Open Graph and the sitemap. No trailing slash. |

## Deploying to Vercel

1. Import the repository and set **Root Directory** to `web`.
2. Add both environment variables above to Production and Preview.
3. Point the campaign domain at the project.

Nothing else is needed. Everything except `/api/skjema` is statically generated.

## Routes

| Route | Purpose |
|---|---|
| `/` | Serves all five places at once ("Oslo og omegn"). |
| `/fasadevask/[kommune]` | One page per municipality: `oslo`, `baerum`, `sandvika`, `asker`, `lillestrom`. The headline names that place, so the first line of the page repeats the first line of the ad. **Point each ad set at its own municipality URL.** |
| `/takk` | Thank-you page. Not indexed. |
| `/personvern` | Privacy page. Written from what this site actually does. Linked from the footer, so the visitor never leaves the campaign to read it. |
| `/api/skjema` | Same-origin relay that forwards the lead to the CRM. |

## What the CRM receives

The relay posts JSON with `navn`, `telefon`, `epost`, `adresse`, `postnummer`,
`kommune`, `kilde`, plus a fixed `kampanje` and `tjeneste` and the `mottatt`
timestamp.

Two fields are normalised before they leave, in the browser and again on the
server, so a lead posted straight at the endpoint cannot skip the rules:

- **`telefon`** always arrives as `+4712345678`. The field itself takes eight
  digits and shows them as `12 34 56 78`; the country code is never typed. A
  number pasted with `+47` or `0047` has the prefix stripped. Anything that is
  not exactly eight digits is rejected rather than guessed at.
- **`epost`** is trimmed and lower-cased, and must be a real address: one `@`,
  a domain with a dot, and a letters-only ending of at least two characters.
- **`postnummer`** is four digits, the Norwegian format. The field drops
  anything that is not a digit as it is typed and stops at four, so a pasted
  "0367 Oslo" becomes `0367`. It stays a text field on purpose: the leading
  zero is part of the code, and `0367` is Oslo while `367` is nothing. A five
  digit code is rejected rather than trimmed to four, which would silently send
  a different address than the one that was typed.

A retried lead also carries a `ref`. See **Leads that fail to send** below.

## Leads that fail to send

The relay stops a lead being **blocked**. `lib/outbox.ts` stops one being
**lost**: a phone that hits a tunnel mid-submit, a dead spot in a stairwell, a
tab closed a second early.

A failed submission is held in `localStorage` and sent again by
`components/LeadOutbox.tsx`, which is mounted in the root layout and so runs on
every page. Delivered leads are deleted immediately.

- **Queued** on a network failure or a `5xx`. Both mean the lead was fine and
  the delivery was not.
- **Not queued** on a `4xx`. The endpoint rejected the data itself, and the
  identical body would be rejected identically on every page load for a week.
- **Caps:** 5 leads, 7 days, 10 attempts. Past any of those it is dropped.
- **Duplicates:** each held lead carries a `ref` (UUID) that is passed on to the
  CRM. If a retry ever lands on top of a delivery that did get through, the two
  rows share a `ref` and the duplicate is obvious rather than looking like two
  enquiries about the same building.

Every storage read and write is wrapped: private windows and storage-blocking
settings throw here, and a missing safety net must never take the form down with
it. The visitor is not told any of this. They were already shown the error and
the phone number, and that message stays true whether or not the outbox works.

Holding the lead needs no consent, because it is strictly necessary to complete
the request the visitor themselves made. It is disclosed on `/personvern`, and
if the rules above change, that page changes the same day.

## Tracking

`components/MetaPixel.tsx` carries the Meta pixel, id in `lib/site.ts`. It is the
base code and nothing more: `init`, then `PageView`.

**Do not add a Lead event.** The Lead is sent server side from the GoHighLevel
automation over the Conversions API. A browser Lead on top of that counts every
submission twice, and the same goes for Contact, CompleteRegistration,
SubmitApplication and Schedule.

The component also fires `PageView` on client-side path changes, because the form
reaches `/takk` with `router.push` and the snippet only runs on a real document
load. The first load is skipped, since the snippet has already counted it.

Two things that look like faults but are not: the snippet is absent from the
served HTML, because it loads `afterInteractive`, and on `localhost` the real
library initialises but sends no `/tr` beacon. Confirm delivery in Meta Events
Manager against the live domain.

Anything that changes here changes `/personvern` the same day. There is no
consent banner yet, which is an open question for the client rather than a bug.

## Where the words live

All copy is in `lib/copy.ts`, all verified company facts in `lib/site.ts`, and
the place names in `lib/kommuner.ts`. Nothing is hard-coded in a component.

Lines marked `LOCKED` in `lib/copy.ts` are verbatim from the campaign brief and
must not be reworded: the message DNA, the price framing, the site visit line,
the scarcity line, the CTA line and the thank-you text.

Standing copy rules, enforced when editing:

- Never the word "garanti" or "garantert". The fixed written price is the risk
  reversal, not a guarantee.
- "uten høytrykk", never "softwash" or "skånsom".
- No price figure and no discount percentage, anywhere.
- Sentences join with a comma or a full stop, never a dash.
- The championship title always carries its year: "Norgesmester i vinduspuss 2023".

## Images

Real photography from renefasader.no only, in `public/img`. No stock, no
generated imagery, no fabricated before/after.

The brief refers to a `research/materiell` folder with facade-washing footage
and a half-washed wall. That folder was not delivered with the brief, so the
page currently uses the one real work photo that exists. To swap in the real
facade-washing shots later, replace the file behind `Hero`'s `<Image>` and its
caption; the layout expects a portrait crop on desktop.
