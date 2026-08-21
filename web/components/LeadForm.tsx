"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import { ctaButton, formCopy } from "@/lib/copy";
import type { Kommune } from "@/lib/kommuner";
import { queueLead } from "@/lib/outbox";
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
 * Every digit in the value, uncapped. Validation counts these rather than the
 * trimmed four, so a five digit code fails with an error instead of quietly
 * losing its last digit and reaching the CRM as a different address.
 */
function allDigits(value: string): string {
  return value.replace(/\D/g, "");
}

/**
 * A Norwegian postal code is exactly four digits, 0001 to 9999.
 *
 * The leading zero is part of the code: 0367 is Oslo, 367 is nothing. That is
 * why the field is a text input rather than a number input, and why the value
 * is never parsed as a number anywhere on the way to the CRM.
 */
export function postalDigits(value: string): string {
  return allDigits(value).slice(0, 4);
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
    errors.adresse = "Skriv inn adressen til eiendommen som skal vaskes.";
  }

  if (!/^\d{4}$/.test(allDigits(values.postnummer))) {
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

/**
 * Holds the postal code to four digits while it is typed.
 *
 * Anything that is not a digit is dropped on the way in, so a pasted
 * "0367 Oslo" lands as 0367 rather than an error message after the fact, and a
 * fifth digit simply never appears. The caret is counted in digits rather than
 * characters, so a removed character never pushes the cursor off course.
 */
function handlePostalInput(event: React.FormEvent<HTMLInputElement>) {
  const el = event.currentTarget;
  const caret = el.selectionStart ?? el.value.length;
  const digitsBeforeCaret = postalDigits(el.value.slice(0, caret)).length;
  const next = postalDigits(el.value);
  if (next === el.value) return;

  el.value = next;
  el.setSelectionRange(digitsBeforeCaret, digitsBeforeCaret);
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

    const lead = {
      ...values,
      epost: values.epost.trim().toLowerCase(),
      // the CRM only ever sees the full international number
      telefon: `+47${phoneDigits(values.telefon)}`,
      // autofill can set a value without firing an input event, so the
      // field is trimmed to its four digits once more on the way out
      postnummer: postalDigits(values.postnummer),
      kommune: kommune.name,
      kilde: typeof window === "undefined" ? "" : window.location.href,
      botfelt: String(formData.get("botfelt") ?? ""),
    };

    try {
      const response = await fetch("/api/skjema", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });

      if (response.ok) {
        router.push("/takk");
        return;
      }

      /*
       * 5xx means the lead was fine and our side was not: no webhook
       * configured, or the CRM refused it. Worth holding on to and sending
       * again later. A 4xx means the endpoint rejected the data itself, and
       * the identical body would be rejected identically for a week, so it is
       * only reported, never queued.
       */
      if (response.status >= 500) queueLead(lead);
      setStatus("failed");
    } catch {
      // Never reached our own origin at all: offline, in a tunnel, or the tab
      // lost the network mid-flight. Exactly what the outbox is for.
      queueLead(lead);
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
          const isPostal = field.name === "postnummer";

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
                onInput={
                  isPhone
                    ? handlePhoneInput
                    : isPostal
                      ? handlePostalInput
                      : undefined
                }
                // phone: room to type the country code before it is stripped
                // back out. postal code: four digits is the whole of it.
                maxLength={isPhone ? 15 : isPostal ? 4 : undefined}
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
