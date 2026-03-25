/**
 * Shared Framer Motion animation variants and constants.
 * Based on design-specs.md Animation & Motion section.
 */

/** Custom easing curves */
export const EASE_REVEAL: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_UI: [number, number, number, number] = [0.4, 0, 0.2, 1];

/** Stagger delay between sibling elements */
export const STAGGER_DELAY = 0.12;

/** Default scroll-reveal animation */
export const scrollReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE_REVEAL },
  viewport: { once: true, amount: 0.2 },
} as const;

/** Clip-path reveal for project images (bottom to top) */
export const clipPathReveal = {
  initial: { clipPath: 'inset(100% 0 0 0)' },
  whileInView: { clipPath: 'inset(0% 0 0 0)' },
  transition: { duration: 1.2, ease: EASE_REVEAL },
  viewport: { once: true, amount: 0.2 },
} as const;

/** Ken Burns scale animation for Hero */
export const kenBurns = {
  animate: { scale: [1.04, 1.0] },
  transition: { duration: 2, ease: 'easeOut' as const },
} as const;

/** Reduced motion fallback — instant opacity only */
export const reducedMotionReveal = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.15 },
  viewport: { once: true, amount: 0.2 },
} as const;

/** Container variant for staggered children */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_DELAY,
    },
  },
} as const;

/** Child variant for staggered items */
export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_REVEAL },
  },
} as const;
