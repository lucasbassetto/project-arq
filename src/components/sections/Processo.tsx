'use client';

import AnimatedText from '@/components/ui/AnimatedText';
import SectionLabel from '@/components/ui/SectionLabel';

interface Step {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

const STEPS: readonly Step[] = [
  {
    number: '01',
    title: 'Escuta',
    description:
      'Entendemos o contexto, a identidade e o desejo antes de qualquer forma.',
  },
  {
    number: '02',
    title: 'Investigacao',
    description:
      'Mapeamos o lugar, a luz e as referencias. Formulamos a hipotese arquitetonica.',
  },
  {
    number: '03',
    title: 'Conceito',
    description:
      'Desenvolvemos uma resposta unica, discutida e validada com voce.',
  },
  {
    number: '04',
    title: 'Projeto',
    description:
      'Traduzimos o conceito em forma, materia e detalhe com rigor tecnico.',
  },
  {
    number: '05',
    title: 'Obra',
    description:
      'Acompanhamos a execucao para garantir que a poesia nao se perca na construcao.',
  },
] as const;

/**
 * Processo section — 5-step methodology.
 * Desktop: 2-column layout with vertical connecting line.
 * Mobile: stacked vertical without connecting line.
 */
export default function Processo() {
  return (
    <section
      id="processo"
      className="bg-[var(--color-bg-warm)] py-[80px] lg:py-[120px]"
      aria-label="Como trabalhamos"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
        {/* Section header */}
        <AnimatedText>
          <SectionLabel>Processo</SectionLabel>
          <h2
            className="text-[40px] lg:text-[64px] font-[300] leading-[1.15] tracking-[-0.01em] text-[var(--color-ink)] max-w-[900px] text-wrap-balance"
            style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
          >
            Como trabalhamos
          </h2>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <p className="mt-5 text-[18px] lg:text-[22px] font-[300] leading-[1.6] text-[var(--color-ink-secondary)] max-w-[720px]">
            Um processo tao rigoroso quanto poetico.
          </p>
        </AnimatedText>

        {/* Steps */}
        <div className="mt-16 lg:mt-20 relative">
          {/* Vertical connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute left-[15%] top-[20px] bottom-[20px] w-[1px] bg-[var(--color-border)]"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12 lg:gap-12">
            {STEPS.map((step, index) => (
              <AnimatedText key={step.number} delay={index * 0.15}>
                <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-12">
                  {/* Number */}
                  <div className="lg:w-[30%] lg:text-right relative">
                    <span
                      className="text-[40px] lg:text-[64px] font-[300] leading-[1] text-[var(--color-ink-muted)] relative z-10 lg:bg-[var(--color-bg-warm)] lg:pr-6"
                      style={{
                        fontFamily:
                          'var(--font-heading), Georgia, serif',
                      }}
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="lg:w-[70%] lg:pt-3">
                    <h3 className="text-[16px] font-[500] uppercase tracking-[0.12em] text-[var(--color-ink)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[16px] lg:text-[18px] font-[300] leading-[1.7] text-[var(--color-ink-secondary)] max-w-[600px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
