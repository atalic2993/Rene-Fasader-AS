# Rene Fasader AS, Fotoklar-pakken

Campaign landing page for facade washing (fasadevask) in Oslo, Bærum, Sandvika,
Asker and Lillestrøm. One page, one service, one conversion action.

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
