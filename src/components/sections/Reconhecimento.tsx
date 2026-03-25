'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { EASE_REVEAL, STAGGER_DELAY } from '@/lib/motion';

interface StatItem {
  readonly value: string;
  readonly label: string;
  readonly countTo?: number;
}

/* [SUGESTAO] Substituir pelos dados reais do escritorio */
const STATS: readonly StatItem[] = [
  { value: '50', label: 'Projetos autorais entregues', countTo: 50 },
  { value: 'Archdaily', label: 'Publicado em' },
  { value: '2018', label: 'Sem projeto repetido desde' },
  { value: 'Res · Com · Inst', label: 'Tipologias' },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_DELAY,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_REVEAL },
  },
};

function CountUp({ to, duration = 2 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      setCount(to);
      return;
    }

    const startTime = performance.now();
    let rafId: number;

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * to));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    }

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, to, duration, shouldReduceMotion]);

  return <span ref={ref}>{count}</span>;
}

/**
 * Reconhecimento / Prova Social section.
 * 4 stats in a row (desktop) or 2x2 grid (mobile).
 * Semantic <dl> for value-label pairs. Discrete, not heroic.
 */
export default function Reconhecimento() {
  const shouldReduceMotion = useReducedMotion();

  const reducedItemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.15 },
    },
  };

  return (
    <section
      className="bg-[var(--color-bg)] py-[40px] lg:py-[56px]"
      aria-label="Reconhecimento"
    >
      <div className="max-w-[2000px] mx-auto px-6 md:px-12 xl:px-20">
        <h2 className="sr-only">Reconhecimento</h2>

        <motion.dl
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:flex-row lg:justify-center lg:gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`text-center lg:px-14 ${
                index < STATS.length - 1
                  ? 'lg:border-r lg:border-[var(--color-border)]'
                  : ''
              }`}
              variants={shouldReduceMotion ? reducedItemVariants : itemVariants}
            >
              <dt
                className="block text-[26px] lg:text-[36px] font-[300] leading-[1.1] tabular-nums text-[var(--color-ink)]"
                style={{
                  fontFamily: 'var(--font-heading), Georgia, serif',
                }}
              >
                {stat.countTo ? (
                  <CountUp to={stat.countTo} />
                ) : (
                  stat.value
                )}
              </dt>
              <dd className="block mt-2 text-[10px] lg:text-[11px] font-[500] uppercase tracking-[0.12em] text-[var(--color-ink-muted)] text-wrap-balance">
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
