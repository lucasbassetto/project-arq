'use client';

import { motion, useReducedMotion } from 'framer-motion';
import AnimatedText from '@/components/ui/AnimatedText';
import SectionLabel from '@/components/ui/SectionLabel';
import { EASE_REVEAL } from '@/lib/motion';

interface Differentiator {
  readonly title: string;
  readonly description: string;
}

const DIFFERENTIATORS: readonly Differentiator[] = [
  {
    title: 'Investigacao antes de forma',
    description:
      'Nao comecamos pelo partido arquitetonico. Comecamos pela escuta. Cada projeto nasce como uma hipotese — uma resposta especifica ao lugar, ao tempo, ao contexto que o convoca.',
  },
  {
    title: 'A obra responde ao lugar',
    description:
      'A cidade e um organismo vivo. Valorizamos o contexto urbano como experiencia sensivel — a luz, a proporcao, a historia. A arquitetura que criamos nao existe sem o contexto em que esta inserida.',
  },
  {
    title: 'Espacos que comunicam identidade',
    description:
      'Nao entregamos projetos. Entregamos espacos que representam quem os habita. O resultado gera orgulho em quem vive e desejo em quem observa.',
  },
] as const;

/**
 * Diferenciadores section — S-curve alternating layout.
 * Items alternate left/right creating a reading path like road curves.
 * Each item reveals from its respective side on scroll, with a subtle lift on hover.
 */
export default function Diferenciadores() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="diferenciadores"
      className="bg-[var(--color-bg)] py-[80px] lg:py-[120px]"
      aria-label="Diferenciadores"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
        {/* Section header */}
        <AnimatedText>
          <SectionLabel>Diferenciadores</SectionLabel>
          <h2
            className="text-[40px] lg:text-[64px] font-[300] leading-[1.15] tracking-[-0.01em] text-[var(--color-ink)] max-w-[900px] text-wrap-balance"
            style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
          >
            O que nos separa
          </h2>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <p className="mt-5 text-[18px] lg:text-[22px] font-[300] leading-[1.6] text-[var(--color-ink-secondary)] max-w-[720px]">
            A diferenca entre uma obra com alma e um projeto com acabamento.
          </p>
        </AnimatedText>

        {/* S-curve items */}
        <div className="mt-20 lg:mt-28 flex flex-col gap-16 lg:gap-24">
          {DIFFERENTIATORS.map((item, index) => {
            const isRight = index % 2 === 1;
            const xFrom = isRight ? 48 : -48;

            return (
              <motion.div
                key={item.title}
                className={`group flex cursor-default ${isRight ? 'lg:justify-end' : 'lg:justify-start'}`}
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: xFrom }
                }
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  opacity: {
                    duration: shouldReduceMotion ? 0.15 : 0.75,
                    ease: EASE_REVEAL,
                  },
                  x: {
                    duration: shouldReduceMotion ? 0.15 : 0.75,
                    ease: EASE_REVEAL,
                  },
                  y: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                }}
              >
                <div className="max-w-full lg:max-w-[520px]">
                  {/* Decorative line — expands and darkens on hover */}
                  <span
                    className={`block h-px w-8 bg-[var(--color-border)] mb-6 transition-[width,background-color] duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-16 group-hover:bg-[var(--color-ink-secondary)] ${isRight ? 'lg:ml-auto' : ''}`}
                    aria-hidden="true"
                  />
                  <h3
                    className="text-[22px] lg:text-[32px] font-[400] leading-[1.25] text-[var(--color-ink)] text-wrap-balance transition-colors duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-[var(--color-accent)]"
                    style={{
                      fontFamily: 'var(--font-heading), Georgia, serif',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[16px] lg:text-[18px] font-[300] leading-[1.7] text-[var(--color-ink-secondary)]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
