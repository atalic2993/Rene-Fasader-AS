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

/**
 * The hero. Written to the estate agent who books the photographer, which is
 * who this campaign is for. The homeowner selling privately is welcome and is
 * told so further down, but the page is not written to him.
 */
export const hero = {
  eyebrow: "Fotoklar-pakken for meglere",
  lead: "Du melder inn boligen. Hele veggen vaskes uten høytrykk, helt opp til mønet, på én dag.",
  leadTail: " Selgeren får fast pris skriftlig før vi starter.",
};

export const problem = {
  eyebrow: "Fotodagen",
  title: "Bildene tas én gang, og de bærer hele annonsen.",
  body: [
    "Du setter datoen for fotografen. Etter den dagen ligger bildene ute så lenge boligen er til salgs, og de kan ikke tas på nytt uten at hele annonsen må gjøres om.",
    "Fasaden er den største flaten i det første bildet, og det bildet avgjør om folk klikker seg inn eller scroller videre. Er veggen grønn og stripete, ser boligen dårligere vedlikeholdt ut enn den er.",
  ],
};

export const offer = {
  eyebrow: "Fotoklar-pakken",
  title: "Alt dette står klart til fotodagen.",
  lead: "Ett oppdrag, én dag, én pris. Du melder inn boligen, og resten følger med.",
  items: [
    {
      title: "Én kontakt fra befaring til ferdig vegg",
      body: "Du forholder deg til Oliver. Han tar befaringen, kjører liften og gir beskjed når veggen er ferdig.",
    },
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
      body: "Riggen er inn og ut samme dag. Hagen er ryddig igjen før fotografen kommer, ikke om tre uker.",
    },
    {
      title: "Takrenner rengjort og spylt",
      body: "Inkludert med fasadevasken, ikke bare med takvask. Vi tar dem mens vi likevel står oppe i liften.",
    },
    {
      title: "Oppstart planlagt mot fotodagen",
      body: "Vi legger jobben etter datoen din, ikke etter vår kalender. Derfor spør vi om fotodagen med en gang.",
    },
    {
      title: "Ingen trenger å være til stede",
      body: "Verken du eller selgeren må ta fri. Ingenting skal ryddes bort. Vi trenger tilgang til vann og litt plass rundt boligen.",
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
  eyebrow: "Fra melding til ferdig vegg",
  title: "Tre steg, og boligen er fotoklar.",
  items: [
    {
      n: "1",
      title: "Du melder inn boligen",
      body: "Fem felt. Vi ringer deg raskt, og da spør vi om fotodagen.",
    },
    {
      n: "2",
      title: "Vi tar befaringen",
      body: "Vi kommer innom, eller gjør den digitalt ut fra bilder du sender. Fast pris skriftlig etterpå, som du kan sende videre til selgeren.",
    },
    {
      n: "3",
      title: "Vi vasker før fotodagen",
      body: "På én dag, planlagt mot datoen din. Ingen trenger å være til stede.",
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
  title: "Det du lurer på før du melder inn.",
  items: [
    {
      q: "Rekker dere det før fotografen kommer?",
      a: "Ja, og vi planlegger oppstarten mot datoen din. Det er derfor vi spør om fotodagen med en gang, ikke til slutt. Selve vasken tar én dag.",
    },
    {
      q: "Kan jeg melde inn flere boliger?",
      a: "Ja. Meld inn én bolig av gangen i skjemaet. Hver bolig får sin egen befaring og sin egen faste pris skriftlig.",
    },
    {
      q: "Blir det skader på kledningen eller pussen?",
      a: "Vi vasker uten høytrykk. Det er lavt trykk og riktig middel som løsner begroingen, ikke kraft, og det er nettopp derfor kledningen og pussen holder.",
    },
    {
      q: "Blir det stillas stående i hagen rett før fotografen kommer?",
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
      q: "Må selgeren være hjemme?",
      a: "Nei. Verken du eller selgeren trenger å være der, og ingenting skal ryddes bort. Vi trenger bare tilgang til vann og litt plass rundt boligen.",
    },
    {
      q: "Hva om selgeren ikke vil bruke penger på det?",
      a: "Da har det ikke kostet noe å spørre. Befaringen er gratis og uforpliktende, og selgeren får en fast pris skriftlig å ta stilling til, ikke et anslag.",
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
      q: "Ser kjøperne egentlig forskjell?",
      a: "Fasaden er den største flaten i det første bildet i boligannonsen, og det bildet avgjør om folk klikker seg inn eller scroller videre. Det er den ene flaten som er verdt å ta før fotografen kommer.",
    },
    {
      q: "Jeg er ikke megler, jeg selger boligen selv.",
      a: "Det går helt fint. Du bruker det samme skjemaet, får den samme befaringen og den samme faste prisen skriftlig før vi starter.",
    },
  ],
};

export const formCopy = {
  eyebrow: "Fotoklar-pakken",
  title: "Få fast pris før fotodagen.",
  lead: befaringLine,
  /** The one place the private seller is spoken to directly. */
  note: "Selger du boligen din selv? Bruk det samme skjemaet.",
  formLead: "Fem felt, og vi ringer deg raskt. Da spør vi om fotodagen.",
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
      label: "Adressen til boligen",
      type: "text",
      autoComplete: "street-address",
      placeholder: "Gateadressen til boligen",
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
