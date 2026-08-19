/**
 * One landing page per municipality so the first visible line of the page
 * repeats the first visible line of the ad. Sandvika is written as its own
 * place name in copy even though it sits inside Bærum municipality.
 */

export type Kommune = {
  /** URL segment */
  slug: string;
  /** How the place is written in copy, e.g. "Fasadevask i Bærum" */
  name: string;
  /** Preposition-corrected form for sentences like "et hus i Oslo" */
  inName: string;
};

export const kommuner: Kommune[] = [
  { slug: "oslo", name: "Oslo", inName: "Oslo" },
  { slug: "baerum", name: "Bærum", inName: "Bærum" },
  { slug: "sandvika", name: "Sandvika", inName: "Sandvika" },
  { slug: "asker", name: "Asker", inName: "Asker" },
  { slug: "lillestrom", name: "Lillestrøm", inName: "Lillestrøm" },
];

/** Used on the root page, which serves all five places at once. */
export const defaultKommune: Kommune = {
  slug: "",
  name: "Oslo og omegn",
  inName: "Oslo og omegn",
};

export const areaList = "Oslo, Bærum, Sandvika, Asker og Lillestrøm";

export function getKommune(slug: string): Kommune | undefined {
  return kommuner.find((k) => k.slug === slug);
}
