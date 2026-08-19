import { areaList } from "./kommuner";
import { championship, site } from "./site";

/**
 * All page copy lives here.
 *
 * Lines marked LOCKED are copied verbatim from the campaign brief and must not
 * be reworded, split or translated. Rules that apply to everything below:
 * banned words are "garanti"/"garantert", "softwash" and "skånsom"; no price
 * figure and no discount percentage appears anywhere; sentences are joined with
 * a comma or a full stop, never a dash.
 */

/** LOCKED, copy verbatim. The campaign message DNA. */
export const dnaSentence =
  "Fasadevasken er ferdig før fotografen kommer. Hele veggen ren, helt opp, på én dag, med fast pris skriftlig før vi starter.";

/** LOCKED, copy verbatim. Price framing. */
export const priceFraming =
  "Du får fast pris skriftlig på befaringen, og den prisen står. Ingen tillegg kommer på etterpå.";

/** LOCKED, copy verbatim. The site visit. */
export const befaringLine =
  "Befaringen er gratis og uforpliktende. Vi kan komme innom, eller gjøre den digitalt ut fra bilder du sender. Du får fast pris skriftlig etterpå, og velger selv om du vil gå videre.";

/** LOCKED, copy verbatim. Scarcity. */
export const scarcityLine = `Vi tar inn 15 fasadevask-jobber i ${areaList} denne måneden. Er de fylt, står neste ledige oppstart etter at fotografen har vært hos deg, og da er bildene tatt på et hus som ikke er vasket.`;

/** LOCKED, copy verbatim. Thank-you page. */
export const takkLines = [
  "Takk. Henvendelsen din er registrert, og Rene Fasader ringer deg raskt.",
  "Ha telefonen klar. Du får fast pris skriftlig etter befaringen, og du er ikke bundet til noe før du selv sier ja.",
];

/** LOCKED. The call to action line that sits directly above the form. */
export const ctaLine = "Fyll ut skjemaet under 👇";

export const ctaButton = "Få fast pris før fotodagen";

export const proofChips = [
  championship.title,
  "Offentlig godkjent renholdsbedrift",
  "Egen lift, ingen stillas",
];

export const problem = {
  eyebrow: "Fotodatoen",
  title: "Bildene av huset tas én gang.",
  body: [
    "Megleren har satt en dato for fotografen. Etter den dagen ligger bildene ute så lenge boligen er til salgs, og de kan ikke tas på nytt uten at hele annonsen må gjøres om.",
    "Fasaden er den største flaten i det første bildet, og det bildet avgjør om folk klikker seg inn eller scroller videre.",
  ],
};

export const offer = {
  eyebrow: "Fotoklar-pakken",
  title: "Alt dette står klart til fotodagen.",
  lead: "Én jobb, én dag, én pris. Du bestiller fasadevask, og resten følger med.",
  items: [
    {
      title: "Komplett fasadevask uten høytrykk",
      body: "Hele huset vaskes på én dag. Det er lavt trykk og riktig middel som løsner begroingen, ikke kraft.",
    },
    {
      title: "Egen lift, hele veggen helt opp",
      body: "Vi eier liften selv og kjenner den godt. Den gir tilkomst til hele fasaden, også toppen og gavlen på baksiden.",
    },
    {
      title: "Ingen stillas i hagen",
      body: "Riggen er inn og ut samme dag. Hagen er ryddig igjen før visningen, ikke om tre uker.",
    },
    {
      title: "Takrenner rengjort og spylt",
      body: "Inkludert med fasadevasken, ikke bare med takvask. Vi tar dem mens vi likevel står oppe i liften.",
    },
    {
      title: "Oppstart planlagt mot fotodatoen din",
      body: "Vi legger jobben etter din dato, ikke etter vår kalender. Derfor spør vi om fotodatoen med en gang.",
    },
    {
      title: "Du trenger ikke være hjemme",
      body: "Du trenger heller ikke rydde noe bort. Vi trenger tilgang til vann og litt plass rundt huset.",
    },
  ],
};

export const socialProof = {
  eyebrow: "Hvem som gjør jobben",
  title: "Et familiedrevet firma fra Oslo, med en norgesmester på laget.",
  championship: {
    title: championship.title,
    body: "Oliver vant NM i vinduspuss i 2023. Han slo sin egen bror, som var regjerende mester, og NRK dekket oppgjøret.",
    stats: [
      { ...championship.timeSeconds, label: "vinnertid" },
      { ...championship.competitors, label: "i konkurransen" },
      { ...championship.margin, label: "ned til nummer to" },
    ],
    caveat:
      "Tittelen er i vinduspuss, ikke i fasadevask. Vi bruker den som bevis på håndverk og øye for detaljer i høyden.",
  },
  approval: {
    title: "Offentlig godkjent renholdsbedrift",
    body: `Rene Fasader AS står oppført hos Arbeidstilsynet under org.nr. ${site.orgNr}. Godkjenningen ligger åpent i registeret, så du kan slå den opp selv.`,
  },
  team: {
    title: "Tre navn, samme etternavn",
    body: "Oliver har jobbet med utvendig renhold siden 2011. Stian kom fra entreprenørbransjen. Astrid tar regnskap og fakturering.",
    members: [
      {
        name: "Oliver Olaussen",
        role: "Utvendig renhold siden 2011",
        img: "/img/oliver-olaussen.jpg",
      },
      {
        name: "Stian Olaussen",
        role: "Fra entreprenørbransjen",
        img: "/img/stian-olaussen.jpg",
      },
      {
        name: "Astrid Olaussen",
        role: "Regnskap og fakturering",
        img: "/img/astrid-olaussen.jpg",
      },
    ],
  },
};

export const mechanism = {
  eyebrow: "Slik gjør vi det",
  title: "Veggen blir ren uten at kledningen tar støyten.",
  items: [
    {
      index: "01",
      title: "Uten høytrykk",
      body: "Begroingen løsnes med lavt trykk og riktig middel. Det er kjemien som gjør jobben, ikke kraften, og derfor tåler både kledning og puss vasken.",
    },
    {
      index: "02",
      title: "Egen lift",
      body: "Liften er grunnen til at vi tar hele fasaden, også der ingen kommer til fra bakken. Vi kjenner den godt, og vi trenger ikke leie den inn når din dato nærmer seg.",
    },
    {
      index: "03",
      title: "Ferdig på én dag",
      body: "Et normalt småhus vaskes på én dag. Vi rydder etter oss og spyler ned det vi har brukt før vi kjører.",
    },
  ],
};

export const steps = {
  eyebrow: "Fra skjema til ferdig vegg",
  title: "Tre steg, og du er ute av det.",
  items: [
    {
      n: "1",
      title: "Du fyller ut skjemaet",
      body: "Fem felt. Vi ringer deg raskt, og da spør vi om fotodatoen din.",
    },
    {
      n: "2",
      title: "Vi tar befaringen",
      body: "Vi kommer innom, eller gjør den digitalt ut fra bilder du sender. Du får fast pris skriftlig etterpå.",
    },
    {
      n: "3",
      title: "Vi vasker huset",
      body: "På én dag, planlagt mot fotodatoen din. Du trenger ikke være hjemme.",
    },
  ],
};

export const safety = {
  eyebrow: "Trygghet",
  title: "Det som er avtalt, er det som står.",
  items: [
    "Fast pris skriftlig før vi starter, uten tillegg etterpå",
    "Befaring uten forpliktelser, du velger selv om du går videre",
    `Offentlig godkjent renholdsbedrift hos Arbeidstilsynet, org.nr. ${site.orgNr}`,
    "Vi rydder etter oss og spyler ned det vi har brukt",
  ],
};

export const faq = {
  eyebrow: "Spørsmål vi får",
  title: "Det du lurer på før du fyller ut.",
  items: [
    {
      q: "Rekker dere det før fotografen kommer?",
      a: "Ja, og vi planlegger oppstarten mot din dato. Det er derfor vi spør om fotodatoen med en gang, ikke til slutt. Selve vasken tar én dag.",
    },
    {
      q: "Blir det skader på kledningen eller pussen?",
      a: "Vi vasker uten høytrykk. Det er lavt trykk og riktig middel som løsner begroingen, ikke kraft, og det er nettopp derfor kledningen og pussen holder.",
    },
    {
      q: "Får jeg stillas stående i hagen rett før visning?",
      a: "Nei. Vi bruker egen lift som kommer inn og ut raskt, så hagen er ryddig igjen samme dag.",
    },
    {
      q: "Kommer dere helt opp under mønet, eller blir toppen skitten?",
      a: "Vi kommer helt opp. Liften er hele grunnen til at vi tar hele fasaden, også gavlen på baksiden og flatene det er umulig å nå fra bakken.",
    },
    {
      q: "Hva koster det?",
      a: "Du får fast pris skriftlig på befaringen, og den prisen står. Befaringen er gratis og uforpliktende, så du kan spørre om prisen uten å binde deg til noe.",
    },
    {
      q: "Må jeg være hjemme?",
      a: "Nei. Du trenger verken å være hjemme eller rydde noe bort. Vi trenger bare tilgang til vann og litt plass rundt huset.",
    },
    {
      q: "Blir det søl på terrassen og vinduene rett før visning?",
      a: "Vi rydder etter oss og spyler ned det vi har brukt. Terrassen og vinduene ser bedre ut når vi drar enn da vi kom.",
    },
    {
      q: "Hvem er dere?",
      a: `Rene Fasader er et familiedrevet firma fra Oslo. Oliver Olaussen har jobbet med utvendig renhold siden 2011 og er ${championship.title}. Firmaet står oppført som offentlig godkjent renholdsbedrift hos Arbeidstilsynet, og du kan slå opp org.nr. ${site.orgNr} selv.`,
    },
    {
      q: "Ser megleren og kjøperne egentlig forskjell?",
      a: "Fasaden er den største flaten i det første bildet i boligannonsen, og det bildet avgjør om folk klikker seg inn eller scroller videre. Det er den ene flaten som er verdt å ta før fotografen kommer.",
    },
    {
      q: "Jeg orker ikke å hente inn tre tilbud.",
      a: "Da slipper du. Du fyller ut ett skjema, vi ringer deg, og du får én fast pris skriftlig.",
    },
  ],
};

export const formCopy = {
  eyebrow: "Fotoklar-pakken",
  title: "Få fast pris før fotodagen.",
  lead: befaringLine,
  fields: [
    {
      name: "navn",
      label: "Fullt navn",
      type: "text",
      autoComplete: "name",
      placeholder: "Ola Nordmann",
      inputMode: "text" as const,
    },
    {
      name: "telefon",
      label: "Telefon",
      type: "tel",
      autoComplete: "tel",
      /** Eight digits, grouped the Norwegian way. The +47 is added on send. */
      placeholder: "12 34 56 78",
      inputMode: "tel" as const,
    },
    {
      name: "epost",
      label: "E-post",
      type: "email",
      autoComplete: "email",
      placeholder: "deg@epost.no",
      inputMode: "email" as const,
    },
    {
      name: "adresse",
      label: "Adresse",
      type: "text",
      autoComplete: "street-address",
      placeholder: "Gateadressen til huset",
      inputMode: "text" as const,
    },
    {
      name: "postnummer",
      label: "Postnummer",
      type: "text",
      autoComplete: "postal-code",
      placeholder: "0367",
      inputMode: "numeric" as const,
    },
  ],
  submitting: "Sender ...",
  errorTitle: "Skjemaet kom ikke fram",
  errorBody: `Prøv en gang til, eller ring oss på ${site.phone}.`,
};

export const footerCopy = {
  tagline: `Fasadevask uten høytrykk i ${areaList}.`,
  privacyLabel: "Personvern",
};

/**
 * The privacy page. Facts only, and only about what this site actually does:
 * five form fields, one relay to the CRM, no trackers.
 *
 * If a Meta pixel or any analytics is ever added to this site, the cookie
 * section below stops being true and must be rewritten the same day.
 */
export const privacy = {
  title: "Personvern",
  lead: "Her står det hva som skjer med opplysningene du fyller inn i skjemaet, og hvilke rettigheter du har.",
  updated: "Sist oppdatert 20. august 2026",
  sections: [
    {
      h: "Hvem som behandler opplysningene",
      body: [
        `${site.name} er ansvarlig for opplysningene du sender inn. Org.nr. ${site.orgNr}, ${site.address.street}, ${site.address.postal} ${site.address.city}.`,
        `Du når oss på ${site.email} eller ${site.phone}.`,
      ],
    },
    {
      h: "Hva vi samler inn",
      body: [
        "Skjemaet har fem felt: navn, telefonnummer, e-postadresse, adressen til huset som skal vaskes og postnummer.",
        "I tillegg lagres hvilken side skjemaet ble sendt fra og tidspunktet det kom inn. Vi ber aldri om fødselsnummer eller betalingsopplysninger i skjemaet.",
      ],
    },
    {
      h: "Hva vi bruker dem til",
      body: [
        "Vi bruker opplysningene til å ringe deg, avtale befaring, gi deg fast pris skriftlig og eventuelt utføre oppdraget. Ikke til noe annet. Vi selger dem ikke videre.",
      ],
    },
    {
      h: "Hvorfor vi har lov til det",
      body: [
        "Du ber selv om et tilbud når du sender skjemaet. Behandlingen skjer for å gjennomføre tiltak før en avtale inngås, på din anmodning, etter personvernforordningen artikkel 6 nr. 1 bokstav b.",
      ],
    },
    {
      h: "Hvem som får se dem",
      body: [
        "Opplysningene går til oss som jobber i selskapet, og de lagres i kundesystemet vi bruker til å følge opp henvendelser. Leverandøren av systemet behandler opplysningene på våre vegne, etter avtale, og kan ikke bruke dem til egne formål.",
      ],
    },
    {
      h: "Hvor lenge vi lagrer dem",
      body: [
        "Vi beholder opplysningene så lenge vi trenger dem for å følge opp henvendelsen din, og sletter dem når de ikke lenger er nødvendige. Blir det et oppdrag av det, må fakturaopplysningene oppbevares så lenge bokføringsloven krever.",
        "Du kan be oss slette opplysningene før den tid.",
      ],
    },
    {
      h: "Informasjonskapsler",
      body: [
        "Denne kampanjesiden setter ingen informasjonskapsler til analyse eller markedsføring.",
      ],
    },
    {
      h: "Rettighetene dine",
      body: [
        "Du har rett til innsyn i opplysningene vi har om deg, til å få rettet feil, til å få dem slettet, til å begrense eller protestere mot behandlingen, og til å få dem utlevert i et vanlig filformat.",
        `Send en e-post til ${site.email}, så ordner vi det. Mener du at vi behandler opplysningene dine feil, kan du klage til Datatilsynet.`,
      ],
    },
  ],
};
