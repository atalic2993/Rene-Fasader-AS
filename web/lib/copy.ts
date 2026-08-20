import { areaList } from "./kommuner";
import { championship, site } from "./site";

/**
 * All page copy lives here.
 *
 * Rules that apply to everything below: banned words are "garanti"/"garantert",
 * "softwash" and "skånsom"; no price figure and no discount percentage appears
 * anywhere; sentences are joined with a comma or a full stop, never a dash.
 *
 * AUDIENCE, 2026-08-20. Neutral B2B fasadevask. The reader manages or sells
 * property for a living: eiendomsforvaltere, utleiere, boligutviklere and
 * meglere. The estate-agent photo date is no longer the campaign's spine. It
 * survives only as the scheduling mechanism, "we plan the start against your
 * date", which is true for every one of those buyers.
 *
 * Form of address, and it is easy to get wrong: "dere/deres" about the company
 * and the property, "deg" only about the person we ring. Never "boligen din".
 * The reader is responsible for the building, they do not live in it.
 *
 * THIS OVERRIDES §7 AND §8 OF THE LOCKED BRIEF, on the client's own message of
 * 2026-08-20 ("focus more only on fasadevask for B2B ... just make it more
 * neutral fasadevask B2B focused"). Three lines the brief marks LOCKED are
 * reworded below and each one is flagged where it stands. All of it needs the
 * client's written sign-off.
 */

/**
 * Was LOCKED. The campaign message DNA. Reworded 2026-08-20: the first sentence
 * read "Fasadevasken er ferdig før fotografen kommer". The deadline is now the
 * reader's own date rather than a photographer's. The rest is untouched.
 */
export const dnaSentence =
  "Fasadevasken er ferdig til datoen dere setter. Hele veggen ren, helt opp, på én dag, med fast pris skriftlig før vi starter.";

/** LOCKED, copy verbatim. Price framing. */
export const priceFraming =
  "Du får fast pris skriftlig på befaringen, og den prisen står. Ingen tillegg kommer på etterpå.";

/** LOCKED, copy verbatim. The site visit. */
export const befaringLine =
  "Befaringen er gratis og uforpliktende. Vi kan komme innom, eller gjøre den digitalt ut fra bilder du sender. Du får fast pris skriftlig etterpå, og velger selv om du vil gå videre.";

/**
 * Was LOCKED. Reworded 2026-08-20. The count of 15 and the "first come" logic
 * are the brief's and stay. What changed is the consequence: the original said
 * the next free start falls after the photographer has been, which only means
 * something to an estate agent. The replacement is the season, which is a
 * physical fact rather than a claim, since facade washing needs temperatures
 * above freezing.
 */
export const scarcityLine = `Vi tar inn 15 fasadevask-jobber i ${areaList} denne måneden, i den rekkefølgen henvendelsene kommer. Fasadevask krever plussgrader, så når nettene faller under frysepunktet stopper vi til våren, og fasaden står som den står til da.`;

/** LOCKED, copy verbatim. Thank-you page. */
export const takkLines = [
  "Takk. Henvendelsen din er registrert, og Rene Fasader ringer deg raskt.",
  "Ha telefonen klar. Du får fast pris skriftlig etter befaringen, og du er ikke bundet til noe før du selv sier ja.",
];

/** LOCKED. The call to action line that sits directly above the form. */
export const ctaLine = "Fyll ut skjemaet under 👇";

/**
 * Was LOCKED as "Få fast pris før fotodagen". Reworded 2026-08-20 with the rest
 * of the photo-day framing. Says the same thing to every B2B buyer.
 *
 * Kept short on purpose. This string is also the label on the sticky bar and on
 * the submit button, and anything longer wraps to three lines inside the hero
 * button at 320px, which pushes the hero off one screen.
 */
export const ctaButton = "Få fast pris skriftlig";

export const proofChips = [
  championship.title,
  "Offentlig godkjent renholdsbedrift",
  "Egen lift, ingen stillas",
];

/**
 * The hero. Written to whoever is responsible for the building, not to whoever
 * lives in it.
 */
export const hero = {
  /**
   * Kept to one line down to 360px. Every extra word here wraps the eyebrow and
   * pushes the hero past one screen on a small phone, so a fourth segment does
   * not go in this line, it goes in the FAQ.
   */
  eyebrow: "Forvaltere, utleiere og meglere",
  lead: "Dere melder inn eiendommen. Hele fasaden vaskes uten høytrykk, med egen lift.",
  leadTail: " Fast pris skriftlig før vi starter.",
};

export const problem = {
  eyebrow: "Utfordringen",
  title: "Fasaden er det første alle ser, og det siste noen rekker å ta tak i.",
  body: [
    "Begroing kommer tilbake hvert år, verst på nordveggen. Den gjør at en eiendom som faktisk er godt vedlikeholdt, ser dårligere vedlikeholdt ut enn den er, og det inntrykket fester seg hos leietakere, kjøpere og eiere.",
    "Selve vasken er sjelden det som stopper jobben. Det er koordineringen: stillas som skal stå, flere leverandører som skal inn, og en dato som må holde. Her melder dere inn adressen og får én dato og én pris tilbake.",
  ],
};

export const offer = {
  eyebrow: "Oppdraget",
  title: "Alt dette ligger i én dato.",
  lead: "Ett oppdrag, én dag, én pris. Dere melder inn eiendommen, og resten følger med.",
  items: [
    {
      title: "Én kontakt fra befaring til ferdig vegg",
      body: "Dere forholder dere til Oliver. Han tar befaringen, kjører liften og gir beskjed når veggen er ferdig.",
    },
    {
      title: "Komplett fasadevask uten høytrykk",
      body: "Hele fasaden vaskes på én dag. Det er lavt trykk og riktig middel som løsner begroingen, ikke kraft.",
    },
    {
      title: "Egen lift, hele veggen helt opp",
      body: "Vi eier liften selv og kjenner den godt. Den gir tilkomst til hele fasaden, også toppen og gavlen på baksiden.",
    },
    {
      title: "Ingen stillas som blir stående",
      body: "Riggen er inn og ut samme dag. Uteområdet er ryddig igjen samme kveld, ikke om tre uker.",
    },
    {
      title: "Takrenner rengjort og spylt",
      body: "Inkludert med fasadevasken, ikke bare med takvask. Vi tar dem mens vi likevel står oppe i liften.",
    },
    {
      title: "Oppstart planlagt mot datoen deres",
      body: "Vi legger jobben etter datoen dere trenger den ferdig, ikke etter vår kalender. Derfor spør vi om datoen med en gang.",
    },
    {
      title: "Ingen trenger å være til stede",
      body: "Verken dere eller den som bor der trenger å ta fri. Ingenting skal ryddes bort. Vi trenger tilgang til vann og litt plass rundt bygget.",
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
    body: `Rene Fasader AS står oppført hos Arbeidstilsynet under org.nr. ${site.orgNr}. Godkjenningen ligger åpent i registeret, så dere kan slå den opp selv.`,
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
      body: "Liften er grunnen til at vi tar hele fasaden, også der ingen kommer til fra bakken. Vi kjenner den godt, og vi trenger ikke leie den inn når datoen deres nærmer seg.",
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
  title: "Tre steg, og fasaden er ren.",
  items: [
    {
      n: "1",
      title: "Dere melder inn eiendommen",
      body: "Navn, telefon, e-post og adressen til eiendommen. Vi ringer raskt, og da spør vi når den må være ferdig.",
    },
    {
      n: "2",
      title: "Vi tar befaringen",
      body: "Vi kommer innom, eller gjør den digitalt ut fra bilder dere sender. Fast pris skriftlig etterpå, som dere kan legge frem for den som skal godkjenne den.",
    },
    {
      n: "3",
      title: "Vi vasker på én dag",
      body: "Planlagt mot datoen deres. Ingen trenger å være til stede.",
    },
  ],
};

export const safety = {
  eyebrow: "Trygghet",
  title: "Det som er avtalt, er det som står.",
  items: [
    "Fast pris skriftlig før vi starter, uten tillegg etterpå",
    "Befaring uten forpliktelser, verken dere eller eieren er bundet til noe",
    `Offentlig godkjent renholdsbedrift hos Arbeidstilsynet, org.nr. ${site.orgNr}`,
    "Vi rydder etter oss og spyler ned det vi har brukt",
  ],
};

export const faq = {
  eyebrow: "Spørsmål vi får",
  title: "Det dere lurer på før dere melder inn.",
  items: [
    {
      q: "Hvor store bygg tar dere?",
      a: "Vi vasker med egen lift, og et normalt småhus tar én dag. Er bygget større eller høyere enn liften rekker, sier vi fra på befaringen i stedet for å love en dato vi ikke kommer til å holde.",
    },
    {
      q: "Rekker dere det til datoen vi trenger?",
      a: "Vi planlegger oppstarten mot datoen deres, og det er derfor vi spør om den med en gang og ikke til slutt. Selve vasken tar én dag.",
    },
    {
      q: "Kan vi melde inn flere eiendommer?",
      a: "Ja. Meld inn én adresse om gangen i skjemaet. Hver eiendom får sin egen befaring og sin egen faste pris skriftlig.",
    },
    {
      q: "Blir det skader på kledningen eller pussen?",
      a: "Vi vasker uten høytrykk. Det er lavt trykk og riktig middel som løsner begroingen, ikke kraft, og det er nettopp derfor kledningen og pussen holder.",
    },
    {
      q: "Blir det stillas stående etter at dere er ferdige?",
      a: "Nei. Vi bruker egen lift som kommer inn og ut raskt, så uteområdet er ryddig igjen samme dag.",
    },
    {
      q: "Kommer dere helt opp under mønet, eller blir toppen skitten?",
      a: "Vi kommer helt opp. Liften er hele grunnen til at vi tar hele fasaden, også gavlen på baksiden og flatene det er umulig å nå fra bakken.",
    },
    {
      q: "Hva koster det?",
      a: "Dere får fast pris skriftlig på befaringen, og den prisen står. Befaringen er gratis og uforpliktende, så dere kan spørre om prisen uten å binde dere til noe.",
    },
    {
      q: "Må noen være til stede mens dere jobber?",
      a: "Nei. Verken dere eller den som bor der trenger å være der, og ingenting skal ryddes bort. Vi trenger bare tilgang til vann og litt plass rundt bygget.",
    },
    {
      q: "Hva om eieren ikke vil bruke penger på det?",
      a: "Da har det ikke kostet noe å spørre. Befaringen er gratis og uforpliktende, og dere sitter igjen med en fast pris skriftlig å legge frem, ikke et anslag.",
    },
    {
      q: "Blir det søl på terrassen og vinduene?",
      a: "Vi rydder etter oss og spyler ned det vi har brukt. Terrassen og vinduene ser bedre ut når vi drar enn da vi kom.",
    },
    {
      q: "Når på året kan dere vaske?",
      a: "Fasadevask krever plussgrader. Vi vasker fra våren til nettene faller under frysepunktet om høsten, og da tar vi pause til våren igjen.",
    },
    {
      q: "Hvem er dere?",
      a: `Rene Fasader er et familiedrevet firma fra Oslo. Oliver Olaussen har jobbet med utvendig renhold siden 2011 og er ${championship.title}. Firmaet står oppført som offentlig godkjent renholdsbedrift hos Arbeidstilsynet, og dere kan slå opp org.nr. ${site.orgNr} selv.`,
    },
  ],
};

export const formCopy = {
  eyebrow: "Fasadevask",
  title: "Få fast pris på fasadevasken.",
  lead: befaringLine,
  formLead: "Fem felt, og vi ringer deg raskt. Da spør vi når fasaden må være ferdig.",
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
      label: "Adressen til eiendommen",
      type: "text",
      autoComplete: "street-address",
      placeholder: "Gateadressen til eiendommen",
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
  /** Phones get the areas in the tagline, because they have no areas column. */
  tagline: `Fasadevask uten høytrykk i ${areaList}.`,
  /** From sm the areas stand in their own column, so the tagline stops listing them. */
  taglineWide: "Fasadevask uten høytrykk, hele veggen helt opp, på én dag.",
  contactLabel: "Kontakt",
  areasLabel: "Vi jobber i",
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
        "Skjemaet har fem felt: navn, telefonnummer, e-postadresse, adressen til eiendommen som skal vaskes og postnummer.",
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
