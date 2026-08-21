/**
 * A holding pen for leads the browser could not deliver.
 *
 * The relay in app/api/skjema/route.ts solves leads being *blocked*: the post
 * is same-origin, so a content blocker cannot drop it. It does nothing for
 * leads being *lost*. A phone that slides into a tunnel mid-submit, a dead
 * spot in a stairwell, a tab closed a second too early: the request never
 * lands, the visitor sees an error and a phone number, and whoever does not
 * feel like calling is gone. This keeps that lead on the device and sends it
 * on the next page load instead.
 *
 * WHAT GOES IN HERE IS PERSONAL DATA: a name, a phone number, an address. It
 * lives in the visitor's own browser, never leaves the device except to the
 * same endpoint the form already posts to, and is deleted the moment it is
 * delivered. Storing it needs no consent because it is strictly necessary to
 * complete the request the visitor themselves made. It is disclosed under
 * "Informasjonskapsler og måling" on the privacy page, and if the rules here
 * change, that section changes the same day.
 */

const KEY = "rf_utboks_v1";

/** Enough for a person having a bad signal day, not enough to hoard. */
const MAX_ENTRIES = 5;
/** After a week the enquiry is stale and the visitor has moved on. */
const MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
/** Roughly a week of page loads before we accept it is never going through. */
const MAX_ATTEMPTS = 10;

export type QueuedLead = {
  /** Idempotency key, sent on to the CRM so a double delivery is spottable. */
  ref: string;
  payload: Record<string, string>;
  queuedAt: number;
  attempts: number;
};

function newRef(): string {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  } catch {
    // fall through
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Every read and write is wrapped. Private windows, storage-blocking settings
 * and full disks all throw here, and none of them may take the form down with
 * them: a failed outbox is a lost safety net, not a broken page.
 */
function read(): QueuedLead[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const now = Date.now();
    return parsed.filter(
      (e): e is QueuedLead =>
        !!e &&
        typeof e === "object" &&
        typeof (e as QueuedLead).ref === "string" &&
        typeof (e as QueuedLead).queuedAt === "number" &&
        now - (e as QueuedLead).queuedAt < MAX_AGE_MS &&
        !!(e as QueuedLead).payload,
    );
  } catch {
    return [];
  }
}

function write(list: QueuedLead[]): void {
  try {
    if (list.length === 0) window.localStorage.removeItem(KEY);
    else window.localStorage.setItem(KEY, JSON.stringify(list.slice(-MAX_ENTRIES)));
  } catch {
    // nothing to do: the lead is already lost, and throwing here helps nobody
  }
}

/** Called by the form when a submission did not get through. */
export function queueLead(payload: Record<string, string>): void {
  if (typeof window === "undefined") return;
  const list = read();
  list.push({ ref: newRef(), payload, queuedAt: Date.now(), attempts: 0 });
  write(list);
}

export function outboxSize(): number {
  if (typeof window === "undefined") return 0;
  return read().length;
}

/**
 * Tries every held lead, oldest first, one at a time.
 *
 * A 4xx is dropped rather than retried: the endpoint rejected the shape of the
 * data, and sending the identical body again on every page load for a week
 * would only repeat the same rejection. A 5xx or a dead connection is kept,
 * because those are ours or the network's fault, not the lead's.
 */
export async function flushOutbox(): Promise<{ sent: number; dropped: number; kept: number }> {
  if (typeof window === "undefined") return { sent: 0, dropped: 0, kept: 0 };

  const list = read();
  if (list.length === 0) return { sent: 0, dropped: 0, kept: 0 };

  const keep: QueuedLead[] = [];
  let sent = 0;
  let dropped = 0;

  for (const entry of list) {
    try {
      const response = await fetch("/api/skjema", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...entry.payload, ref: entry.ref }),
      });

      if (response.ok) {
        sent += 1;
        continue;
      }

      if (response.status >= 400 && response.status < 500) {
        dropped += 1;
        continue;
      }

      const attempts = entry.attempts + 1;
      if (attempts >= MAX_ATTEMPTS) dropped += 1;
      else keep.push({ ...entry, attempts });
    } catch {
      const attempts = entry.attempts + 1;
      if (attempts >= MAX_ATTEMPTS) dropped += 1;
      else keep.push({ ...entry, attempts });
    }
  }

  write(keep);
  return { sent, dropped, kept: keep.length };
}
