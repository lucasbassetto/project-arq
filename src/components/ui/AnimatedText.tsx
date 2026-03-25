'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_REVEAL } from '@/lib/motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Direction of entry: 'up' (default), 'left', or 'none' (opacity only) */
  direction?: 'up' | 'left' | 'none';
}

/**
 * Scroll-reveal wrapper component.
 * Animates children into view with fade + translate.
 * Respects prefers-reduced-motion.
 */
export default function AnimatedText({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  const initialState = shouldReduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        ...(direction === 'up' && { y: 24 }),
        ...(direction === 'left' && { x: -16 }),
      };

  const animateState = shouldReduceMotion
    ? { opacity: 1 }
    : {
        opacity: 1,
        ...(direction === 'up' && { y: 0 }),
        ...(direction === 'left' && { x: 0 }),
      };

  return (
    <motion.div
      initial={initialState}
      whileInView={animateState}
      transition={{
        duration: shouldReduceMotion ? 0.15 : 0.8,
        ease: EASE_REVEAL,
        delay,
      }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
