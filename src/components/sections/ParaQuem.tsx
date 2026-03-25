'use client';

import { motion, useReducedMotion } from 'framer-motion';
import AnimatedText from '@/components/ui/AnimatedText';
import SectionLabel from '@/components/ui/SectionLabel';
import { EASE_REVEAL, STAGGER_DELAY } from '@/lib/motion';

interface Profile {
  readonly number: string;
  readonly label: string;
  readonly description: string;
}

const PROFILES: readonly Profile[] = [
  {
    number: '01',
    label: 'Quem vive com proposito',
    description:
      'Voce quer um espaco que seja extensao do que pensa, sente e acredita — nao uma vitrine de tendencias.',
  },
  {
    number: '02',
    label: 'Quem escolhe com criterio',
    description:
      'Tudo que te cerca e narrativa. A arquitetura nao pode ser excecao. Voce quer rigor, nao rotulo.',
  },
  {
    number: '03',
    label: 'Quem ve arquitetura como cultura',
    description:
      'Voce transita entre arte, cinema e literatura. Quer um projeto com a mesma densidade intelectual do que voce consome.',
  },
  {
    number: '04',
    label: 'Quem respeita o lugar',
    description:
      'Voce entende que uma boa obra dialoga com o contexto em que esta — nao o ignora.',
  },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_DELAY,
      delayChildren: 0.2,
    },
  },
};

const profileVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_REVEAL },
  },
};

/**
 * Para Quem section — ideal client profiles in a 2x2 grid.
 * Desktop: grid with hairline borders. Mobile: stacked.
 */
export default function ParaQuem() {
  const shouldReduceMotion = useReducedMotion();

  const reducedProfileVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.15 },
    },
  };

  return (
    <section
      className="bg-[var(--color-bg)] py-[80px] lg:py-[120px]"
      aria-label="Para quem e a LAR"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
        {/* Section header */}
        <AnimatedText>
          <SectionLabel>Para quem</SectionLabel>
          <h2
            className="text-[40px] lg:text-[64px] font-[300] leading-[1.15] tracking-[-0.01em] text-[var(--color-ink)] max-w-[900px] text-wrap-balance"
            style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
          >
            Para quem busca mais do que um projeto
          </h2>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <p className="mt-5 text-[18px] lg:text-[22px] font-[300] leading-[1.6] text-[var(--color-ink-secondary)] max-w-[720px]">
            A LAR e para quem quer ser representado por uma obra com alma.
          </p>
        </AnimatedText>

        {/* Profiles grid */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {PROFILES.map((profile, index) => {
            const isSecondRow = index >= 2;
            const isRightColumn = index % 2 !== 0;
            const isNotFirst = index > 0;
            return (
            <motion.div
              key={profile.number}
              className={`py-10 md:py-12 md:px-10 border-[var(--color-border)] ${
                isNotFirst ? 'border-t' : ''
              } ${
                isSecondRow ? 'md:border-t' : 'md:border-t-0'
              } ${
                isRightColumn ? 'md:border-l' : ''
              }`}
              variants={
                shouldReduceMotion ? reducedProfileVariants : profileVariants
              }
            >
              <span
                className="block text-[32px] font-[300] leading-[1] text-[var(--color-ink-muted)] mb-4"
                style={{
                  fontFamily: 'var(--font-heading), Georgia, serif',
                }}
                aria-hidden="true"
              >
                {profile.number}
              </span>
              <span className="block text-[11px] lg:text-[12px] font-[500] uppercase tracking-[0.12em] text-[var(--color-ink-muted)] mb-3">
                {profile.label}
              </span>
              <p className="text-[16px] lg:text-[18px] font-[300] leading-[1.7] text-[var(--color-ink-secondary)] max-w-[480px]">
                {profile.description}
              </p>
            </motion.div>
          );
          })}
        </motion.div>
      </div>
    </section>
  );
}
