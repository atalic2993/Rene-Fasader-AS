"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import { ctaButton, formCopy } from "@/lib/copy";
import type { Kommune } from "@/lib/kommuner";
import { site } from "@/lib/site";

type Errors = Partial<Record<string, string>>;

/**
 * The field holds eight digits and nothing else. The country code is never
 * typed: +47 is added when the lead is sent, so the CRM always receives
 * +4712345678 no matter how the visitor spaced the number out.
 */
export function phoneDigits(value: string): string {
  let digits = value.replace(/\D/g, "");

  // A visitor who starts with the country code should not be fighting the
  // field. 0047 always goes; a bare 47 only when more than eight digits are
  // present, because 47 12 34 56 is itself a perfectly good Norwegian number.
  if (digits.startsWith("0047")) {
    digits = digits.slice(4);
  } else if (digits.length > 8 && digits.startsWith("47")) {
    digits = digits.slice(2);
  }

  return digits.slice(0, 8);
}

/** 12 34 56 78, grouped as the digits arrive. */
export function formatPhone(value: string): string {
  const digits = phoneDigits(value);
  return digits.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
}

/**
 * One @, a local part without spaces or stray dots, a domain with at least one
 * dot and a letters-only ending. Deliberately stricter than the browser's own
 * check, which accepts things like "a@b".
 */
const EMAIL =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

function validate(values: Record<string, string>): Errors {
  const errors: Errors = {};

  if (values.navn.trim().length < 2) {
    errors.navn = "Skriv inn fullt navn.";
  }

  if (phoneDigits(values.telefon).length !== 8) {
    errors.telefon = "Telefonnummeret er åtte siffer, for eksempel 12 34 56 78.";
  }

  const epost = values.epost.trim();
  if (epost.length > 160 || !EMAIL.test(epost)) {
    errors.epost = "Skriv inn en gyldig e-postadresse, for eksempel navn@epost.no.";
  }

  if (values.adresse.trim().length < 4) {
    errors.adresse = "Skriv inn adressen til boligen som skal vaskes.";
  }

  if (!/^\d{4}$/.test(values.postnummer.trim())) {
    errors.postnummer = "Postnummer er fire siffer.";
  }

  return errors;
}

/**
 * Groups the number as it is typed and keeps the caret where the visitor left
 * it, counting digits rather than characters so an inserted space never pushes
 * the cursor off course.
 */
function handlePhoneInput(event: React.FormEvent<HTMLInputElement>) {
  const el = event.currentTarget;
  const caret = el.selectionStart ?? el.value.length;
  const digitsBeforeCaret = el.value.slice(0, caret).replace(/\D/g, "").length;
  const next = formatPhone(el.value);
  if (next === el.value) return;

  el.value = next;

  let position = 0;
  let seen = 0;
  while (position < next.length && seen < digitsBeforeCaret) {
    if (/\d/.test(next[position])) seen += 1;
    position += 1;
  }
  el.setSelectionRange(position, position);
}

export default function LeadForm({ kommune }: { kommune: Kommune }) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "failed">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(
      formCopy.fields.map((field) => [
        field.name,
        String(formData.get(field.name) ?? ""),
      ]),
    ) as Record<string, string>;

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = formCopy.fields.find((field) => nextErrors[field.name]);
      if (firstInvalid) {
        formRef.current
          ?.querySelector<HTMLInputElement>(`[name="${firstInvalid.name}"]`)
          ?.focus();
      }
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/skjema", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          epost: values.epost.trim().toLowerCase(),
          // the CRM only ever sees the full international number
          telefon: `+47${phoneDigits(values.telefon)}`,
          kommune: kommune.name,
          kilde: typeof window === "undefined" ? "" : window.location.href,
          botfelt: String(formData.get("botfelt") ?? ""),
        }),
      });

      if (!response.ok) throw new Error(`Status ${response.status}`);

      router.push("/takk");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="mt-6 sm:mt-7">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-4">
        {formCopy.fields.map((field, i) => {
          const errorId = `${field.name}-feil`;
          const hasError = Boolean(errors[field.name]);
          const spansFull = i < 1 || field.name === "adresse";
          const isPhone = field.name === "telefon";

          return (
            <div key={field.name} className={spansFull ? "sm:col-span-2" : ""}>
              <label
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium text-petrol"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                inputMode={field.inputMode}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                onInput={isPhone ? handlePhoneInput : undefined}
                // room to type the country code before it is stripped back out
                maxLength={isPhone ? 15 : undefined}
                required
                aria-required="true"
                aria-invalid={hasError || undefined}
                aria-describedby={hasError ? errorId : undefined}
                className="field"
              />
              {hasError ? (
                <p id={errorId} className="mt-2 text-sm text-[#a3341f]">
                  {errors[field.name]}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* honeypot, hidden from people and from assistive technology */}
      <div aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0">
        <label htmlFor="botfelt">La dette feltet stå tomt</label>
        <input id="botfelt" name="botfelt" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 flex w-full items-center sm:mt-6 justify-center gap-3 bg-sand px-8 py-[1.125rem] text-base font-semibold text-petrol transition-[background-color,transform] duration-200 hover:bg-sand-deep active:translate-y-px disabled:cursor-wait disabled:opacity-70 sm:text-lg"
      >
        {status === "sending" ? formCopy.submitting : ctaButton}
      </button>

      <p className="mt-4 text-center text-sm text-muted">
        Befaringen er gratis og uforpliktende.
      </p>

      <div aria-live="polite" className="empty:hidden">
        {status === "failed" ? (
          <div className="mt-5 border-l-2 border-[#a3341f] bg-white p-5">
            <p className="font-semibold text-[#a3341f]">{formCopy.errorTitle}</p>
            <p className="mt-1 text-sm text-muted">
              Prøv en gang til, eller ring oss på{" "}
              <a href={site.phoneHref} className="font-medium text-petrol underline">
                {site.phone}
              </a>
              .
            </p>
          </div>
        ) : null}
      </div>
    </form>
  );
}
