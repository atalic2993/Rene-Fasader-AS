# Rene Fasader AS, campaign landing page

Strategic and design rationale for the page in `web/`. Written against the
campaign brief dated 2026-08-18 and the live site renefasader.no.

## 1. What the research turned up

**The brief.** Present and complete: `campaign-brief-EN.md`, eight sections,
with locked copy, locked form fields, a locked area list and a finished
objection table.

**The existing website.** One long page for five services (window cleaning,
facade washing, roof washing, solar panel washing, icicle removal), built for a
mixed audience, with a five-field open contact form at the bottom. Useful to us
for brand identity and facts only.

What we took from it:

| Element | Value |
|---|---|
| Primary colour | Petrol `#0C343D`, the only colour in the logo |
| Accent | Sand yellow `#FFE599` |
| Typeface | General Sans, Regular and Semibold |
| Logo | A two-plane building mark with windows knocked out and a long shadow |
| Real photography | Oliver working at height over Oslo, three family portraits, the Arbeidstilsynet approval mark |
| Facts | Phone, email, the 2011 start in exterior cleaning, the family roles |

What we deliberately did not take: the layout, the accordion of services, the
tagline "Vi tar fasadevasken til nye høyder", the mixed service offer, and the
org. number shown on that site. The brief's org number `935 269 318` is the
limited company approved with Arbeidstilsynet, and that is what the page uses.

**One caveat worth flagging.** The brief points to `research/materiell` for the
continuous washing sequence and the half-washed wall. That folder was not
delivered. Nothing was fabricated to fill the gap: the page uses the one real
work photograph that exists, captioned honestly, and the layout is ready for the
facade-washing shots to drop in.

## 2. Strategy

**Objective.** Booked site visits (befaringer) from homeowners who already have
a photo date in their calendar.

**Audience.** A homeowner aged 40 to 65 in a detached, semi-detached or terraced
house in Oslo, Bærum, Sandvika, Asker or Lillestrøm, in the middle of selling.
Time-poor, done-for-me, not a bargain hunter, but genuinely afraid of a bill
that grows after the fact.

**The angle: the photographer is coming.** This is a point in time, not a
problem. The homeowner already knows the wall is dirty. What he does not have is
a deadline he can act on, someone who will make it, and certainty about cost.
The listing photo is taken once and stays up for the whole sale.

**Core value proposition.** The whole facade clean, all the way to the ridge, in
one day, without high pressure, planned against the photo date, at a fixed price
in writing.

**Conversion action.** One only: the five-field form, everywhere phrased as
"Få fast pris før fotodagen". The phone is a secondary path for people who need
to hear a voice first, never a competing call to action.

**Objections addressed, in the order they arise.** Will you make my date; will
the cladding be damaged; will scaffolding stand in my garden; do you reach the
top; what does it cost; do I have to be home; will you leave a mess; who are
you; does it really matter; I do not want three quotes.

**Risk reversal.** No guarantee is claimed anywhere, because none was given. The
fixed written price does that work, backed by the public approval and a site
visit with no obligation.

**Why it should convert.** It attaches to a deadline the visitor already owns
rather than inventing urgency; it names the mechanism (own lift) that no local
competitor is claiming; it puts three checkable proofs above the fold; it
answers the money question without ever naming a price; and it asks for five
fields, once.

## 3. Page architecture

| # | Section | Job |
|---|---|---|
| 1 | Hero | Service and place in the largest type, the outcome, the CTA, three proofs. Everything needed to act, without scrolling. |
| 2 | Message band | The campaign DNA sentence verbatim, so the page matches the ad. |
| 3 | The deadline | Three sentences on why the photo is taken once. No lecture on algae. |
| 4 | Fotoklar-pakken | The stacked deliverable, six items, value before price. |
| 5 | Who does the job | Championship with its real numbers, the public approval, three faces. Placed while the doubt is forming. |
| 6 | Method | Low pressure, own lift, one day. The rational defence of an emotional purchase. |
| 7 | Price | The locked price framing and site visit lines. No figure. |
| 8 | Three steps | Kills "this will be a hassle". |
| 9 | Safety and capacity | What is guaranteed by contract rather than by promise, then the 15-slot line. |
| 10 | Questions | The brief's objection table, first one open. |
| 11 | Form | Five fields, one button, the payoff in the button text. |
| 12 | Footer | Identity, tappable contact rows, privacy page. |

No navigation links to anywhere but the form. Nothing on the page sends the
visitor sideways.

## 4. Visual system

**Direction.** Architectural, not decorative. The logo is a building of lit
windows, so the page is built from straight edges, hairline rules and a window
grid, with photography carrying the warmth.

**Colour.** Petrol `#0C343D` as ground, a deeper petrol `#071F26` for layering,
sand `#FFE599` as the single accent reserved for the conversion action and for
emphasis inside headlines. Light sections sit on a warm bone `#F4F2ED` rather
than pure white, so white panels can float on top of them.

The one deviation from the client's palette: their body grey `#757575` fails
WCAG AA against the bone ground, so the muted step is `#5F6C6F`, a petrol-tinted
grey that passes on both bone and white.

**Type.** General Sans alone, at three weights. The editorial feel comes from
scale and tracking, not from a second family. Display sizes run to `-0.035em`
tracking with a line height under 1; body sits at 1.55 with a 34rem measure.
The hero headline's ceiling adapts to the length of the place name, so
"Fasadevask i Oslo" and "Fasadevask i Oslo og omegn" both hold.

**Layout.** A 12-column grid used asymmetrically: 7/5 in the hero, 5/7 for the
offer, 4/8 where a heading anchors a list. Sticky left columns on the offer and
the questions. Generous whitespace, no boxes where a rule will do.

**Surfaces.** Zero border radius throughout, matching the brand's own square
buttons. Cards are defined by a 1px hairline and a shift in ground colour, not
by shadows or glass.

**Imagery.** Real photography only. The work photo is captioned honestly as
window cleaning at height, used as proof of craft rather than as a facade wash.
Portraits are shown at 4:5 with a trace of desaturation to sit with the palette.

**Motion.** Hero elements rise 18px over 850ms on load, staggered. Everything
below settles 14px on first scroll into view. Hover states are colour only,
except the CTA arrow, which nudges 2px. All of it collapses to nothing under
`prefers-reduced-motion`, and the finished state is what renders with
JavaScript off or when printing.

## 5. Verified in the browser

- axe-core: 0 violations on the landing page and the thank-you page, at 1440px
  and 390px, against WCAG 2.0/2.1 A and AA plus best practices.
- No horizontal overflow at 320, 360, 390, 414, 834 and 1440px.
- With JavaScript disabled and with reduced motion on, every section renders in
  its finished state. The only element left at zero opacity is the honeypot.
- Form: empty submit produces five Norwegian field errors and moves focus to the
  first one; a valid submit relays to the webhook and lands on `/takk`.
- Production build: no console errors, CLS 0.0000, AVIF images, framework
  baseline JavaScript with no added libraries.

## 5b. B2B repositioning, 2026-08-20

The client asked for a B2B focus. Of the four candidate audiences, estate agents
are the only one that keeps the campaign intact: the agent books the
photographer, so the photo-date argument lands on the person who controls the
date, and one agent carries repeat listings instead of one house.

Co-op boards, sameier and commercial buildings were rejected. Section 8 of the
brief excludes them outright, and boards would put this client head to head
with Altivon in the same city.

The page reads to the agent and to nobody else, on Aaron's instruction of
2026-08-20. The two lines that spoke to a private seller were removed, the page
title and social card name the audience, and the scarcity line now says the
photographer visits the seller rather than the reader. That last edit touches a
locked line. Every claim on the page is unchanged, because
the B2B pitch is built only from facts that were already verified: one contact,
fixed written price, one day, own lift, no scaffolding, nobody needs to be
present, work planned against the photo date.

**This overrides section 7 of the brief, which is marked LOCKED.** Get that in
writing from the client before the page goes live, and move the ad targeting at
the same time.

## 6. Open items for the client

1. **Facade-washing imagery.** The `research/materiell` assets never arrived.
   The strongest asset in this niche, a half-washed wall, is still missing.
2. **Privacy page.** Written and live at `/personvern`, based only on what this
   site actually does. Two things still need a client answer: whether the CRM
   vendor may be named outright, and whether a retention period should be stated
   as a number. The cookie section says the page sets none for analysis or
   marketing, which stops being true the day a Meta pixel is added.
3. **`LEAD_WEBHOOK_URL`.** Must be set in Vercel before the first ad runs, or
   leads will not reach the CRM.
4. **Photo date field.** The brief locks the form to exactly five fields, while
   the objection answers say the photo date is asked for straight away. The page
   keeps the five locked fields and states in two places that the date is the
   first thing asked on the call. Say the word if it should become a sixth field.
