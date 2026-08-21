"use client";

import { useEffect } from "react";

import { flushOutbox } from "@/lib/outbox";

/**
 * Empties the lead outbox in the background.
 *
 * Mounted in the root layout so it runs on every page, including /takk: a
 * visitor whose submission failed may well wander off and come back through a
 * different door, and the held lead should go out whichever page they land on.
 *
 * It renders nothing and says nothing. The visitor was already told the
 * submission failed and given a phone number, and quietly delivering it later
 * is a better outcome than a second notice about plumbing they did not ask
 * about. Deliberately delayed so it never competes with the page itself for
 * bandwidth, and repeated when the connection comes back, since a lead queued
 * in a tunnel is worth retrying the moment there is signal again.
 */
export default function LeadOutbox() {
  useEffect(() => {
    let cancelled = false;
    let running = false;

    const run = () => {
      if (cancelled || running) return;
      running = true;
      void flushOutbox().finally(() => {
        running = false;
      });
    };

    const timer = window.setTimeout(run, 2500);
    window.addEventListener("online", run);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.removeEventListener("online", run);
    };
  }, []);

  return null;
}
