"use client";

import { useEffect, useState } from "react";

/**
 * Sections that keep their own call to action on a phone. The bar stays down
 * while any of them is on screen, so it never doubles up on a button the
 * visitor is already looking at. Both sections that carry the Fotoklar-pakken
 * label are listed: the package list, which is there to be read, and the form
 * itself, where the bar would otherwise cover the last field.
 */
const quietSections = ["pakken", "skjema"];

/**
 * Mobile only. One action, the same one the whole page points at. Appears once
 * the hero has scrolled away and steps aside again wherever the page already
 * shows its own button, so it never covers the thing it points at.
 */
export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("topp");
    const quiet = quietSections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!hero) return;

    let heroGone = false;
    const onScreen = new Set<Element>();

    const update = () => setVisible(heroGone && onScreen.size === 0);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroGone = !entry.isIntersecting;
        update();
      },
      { threshold: 0 },
    );

    const quietObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) onScreen.add(entry.target);
          else onScreen.delete(entry.target);
        }
        update();
      },
      { threshold: 0 },
    );

    heroObserver.observe(hero);
    for (const el of quiet) quietObserver.observe(el);

    return () => {
      heroObserver.disconnect();
      quietObserver.disconnect();
    };
  }, []);

  return (
    // a landmark of its own: it lives outside main, and once it is on screen
    // unlabelled content sitting outside every landmark is an audit failure
    <aside
      aria-label="Snarvei til skjemaet"
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-petrol-line bg-petrol/95 backdrop-blur-sm transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      // taken out of the tab order and the accessibility tree while off screen
      inert={!visible}
    >
      <div className="px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href="#skjema"
          className="flex h-12 w-full items-center justify-center bg-sand px-5 text-[0.9375rem] font-semibold text-petrol"
        >
          Få fast pris før fotodagen
        </a>
      </div>
    </aside>
  );
}
