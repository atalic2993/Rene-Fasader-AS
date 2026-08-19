import type { ReactNode } from "react";

/* ---------------------------------------------------------------- *
 * Small shared pieces. Square corners throughout: the brand mark is
 * a building, and every surface on this page is built from the same
 * straight edges.
 * ---------------------------------------------------------------- */

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${className}`}>
      <span aria-hidden="true" className="inline-block h-px w-8 bg-current opacity-50" />
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  tone = "dark-on-light",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  tone?: "dark-on-light" | "light-on-dark";
  className?: string;
}) {
  const eyebrowTone = tone === "light-on-dark" ? "text-sand" : "text-muted";
  const leadTone = tone === "light-on-dark" ? "text-white/70" : "text-muted";

  return (
    <div className={`max-w-[46rem] ${className}`}>
      <Eyebrow className={eyebrowTone}>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-title font-semibold sm:mt-5">{title}</h2>
      {lead ? <p className={`mt-3.5 text-lead sm:mt-4 ${leadTone}`}>{lead}</p> : null}
    </div>
  );
}

export function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={`h-4 w-4 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M8 2.5v11M3.5 9.5 8 14l4.5-4.5" strokeLinecap="square" />
    </svg>
  );
}

/**
 * The single conversion action on the page. Every instance points at the
 * form, and every instance carries the same payoff wording.
 */
export function CtaButton({
  children,
  className = "",
  href = "#skjema",
  withArrow = true,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  withArrow?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-3 bg-sand px-7 py-4 text-base font-semibold text-petrol transition-[background-color,transform] duration-200 hover:bg-sand-deep active:translate-y-px sm:px-9 sm:py-[1.125rem] sm:text-lg ${className}`}
    >
      {children}
      {withArrow ? (
        <ArrowDown className="transition-transform duration-300 group-hover:translate-y-0.5" />
      ) : null}
    </a>
  );
}

export function PhoneLink({
  phone,
  href,
  tone = "light-on-dark",
  className = "",
}: {
  phone: string;
  href: string;
  tone?: "dark-on-light" | "light-on-dark";
  className?: string;
}) {
  const base =
    tone === "light-on-dark"
      ? "border-white/25 text-white hover:border-sand hover:text-sand"
      : "border-petrol/25 text-petrol hover:border-petrol hover:bg-petrol hover:text-white";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 border px-7 py-4 text-base font-medium transition-colors duration-200 sm:py-[1.125rem] ${base} ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 2.5h3l1.2 3-1.7 1.2a8.5 8.5 0 0 0 3.8 3.8L10.5 8.8l3 1.2v3a1 1 0 0 1-1.1 1A11.5 11.5 0 0 1 2 3.6 1 1 0 0 1 3 2.5Z" />
      </svg>
      <span>
        <span className="sr-only">Ring oss på </span>
        {phone}
      </span>
    </a>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`h-5 w-5 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="m4 10.5 4 4 8-9" strokeLinecap="square" />
    </svg>
  );
}
