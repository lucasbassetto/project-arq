'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_REVEAL, STAGGER_DELAY } from '@/lib/motion';

interface StatItem {
  readonly value: string;
  readonly label: string;
}

/* [SUGESTAO] Substituir pelos dados reais do escritorio */
const STATS: readonly StatItem[] = [
  { value: 'XX', label: 'Projetos autorais entregues' },
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
      className="bg-[var(--color-bg)] py-[60px] lg:py-[80px]"
      aria-label="Reconhecimento"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
        <h2 className="sr-only">Reconhecimento</h2>

        <motion.dl
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:flex lg:flex-row lg:justify-center lg:gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`text-center lg:px-16 ${
                index < STATS.length - 1
                  ? 'lg:border-r lg:border-[var(--color-border)]'
                  : ''
              }`}
              variants={shouldReduceMotion ? reducedItemVariants : itemVariants}
            >
              <dt
                className="block text-[32px] lg:text-[44px] font-[300] leading-[1.1] tabular-nums text-[var(--color-ink)]"
                style={{
                  fontFamily: 'var(--font-heading), Georgia, serif',
                }}
              >
                {stat.value}
              </dt>
              <dd className="block mt-2 text-[11px] lg:text-[12px] font-[500] uppercase tracking-[0.12em] text-[var(--color-ink-muted)] text-wrap-balance">
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
