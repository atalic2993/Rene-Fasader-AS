import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/ui";
import { mechanism } from "@/lib/copy";

/**
 * The rational defence of an emotional purchase: why low pressure is safe for
 * the cladding, and why owning the lift is what makes one day realistic.
 */
export default function Mechanism() {
  return (
    <section id="metode" className="on-light bg-bone py-11 sm:py-20">
      <div className="shell">
        <SectionHead eyebrow={mechanism.eyebrow} title={mechanism.title} />

        <ul className="mt-9 grid gap-8 sm:mt-10 sm:grid-cols-3 sm:gap-8 lg:gap-10">
          {mechanism.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 80}
              className="grid grid-cols-[auto_1fr] content-start items-start gap-x-3 border-t border-petrol/25 pt-5 sm:pt-6"
            >
              {/*
                Two columns: the number hangs in the first, the title and the
                body share the second. Number and title carry the same type
                size, so they sit on one line, and the paragraph starts under
                the title rather than under the number. content-start keeps the
                rows at their own height: the three cards are stretched to a
                common height by the list above, and without it that spare
                space would be shared out between the rows, pushing the shortest
                card's text out of line with the other two. The number is hidden
                from screen readers, since the list order already says it.
              */}
              <span
                aria-hidden="true"
                className="text-heading font-medium tabular-nums text-muted"
              >
                {item.index}
              </span>
              <h3 className="text-heading font-semibold">{item.title}</h3>
              <p className="col-start-2 row-start-2 mt-3 text-muted">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
