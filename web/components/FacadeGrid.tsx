type FacadeGridProps = {
  className?: string;
  /**
   * Unique per instance. The pattern paints with currentColor, and duplicate
   * ids make every copy resolve to the first one on the page, which then
   * paints in the wrong section colour.
   */
  id: string;
  /** Tailwind colour utility applied to the pattern strokes. */
  tone?: string;
  opacity?: number;
};

/**
 * The window grid lifted out of the Rene Fasader logo mark, used as a quiet
 * architectural texture behind dark sections. Purely decorative.
 */
export default function FacadeGrid({
  id,
  className = "",
  tone = "text-sand",
  opacity = 0.14,
}: FacadeGridProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute inset-0 h-full w-full ${tone} ${className}`}
      style={{ opacity }}
    >
      <defs>
        <pattern
          id={`${id}-pattern`}
          width="72"
          height="88"
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="26" height="34" fill="currentColor" opacity="0.42" />
          <rect x="40" y="0" width="26" height="34" fill="currentColor" opacity="0.2" />
          <rect x="0" y="50" width="26" height="34" fill="currentColor" opacity="0.2" />
          <rect x="40" y="50" width="26" height="34" fill="currentColor" opacity="0.42" />
        </pattern>
        <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="62%" stopColor="white" stopOpacity="0.18" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id={`${id}-mask`}>
          <rect width="100%" height="100%" fill={`url(#${id}-fade)`} />
        </mask>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-pattern)`}
        mask={`url(#${id}-mask)`}
      />
    </svg>
  );
}
