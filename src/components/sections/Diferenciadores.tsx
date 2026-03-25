'use client';

import AnimatedText from '@/components/ui/AnimatedText';
import SectionLabel from '@/components/ui/SectionLabel';

interface Differentiator {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

const DIFFERENTIATORS: readonly Differentiator[] = [
  {
    number: '01',
    title: 'Investigacao antes de forma',
    description:
      'Nao comecamos pelo partido arquitetonico. Comecamos pela escuta. Cada projeto nasce como uma hipotese — uma resposta especifica ao lugar, ao tempo, ao contexto que o convoca.',
  },
  {
    number: '02',
    title: 'A obra responde ao lugar',
    description:
      'A cidade e um organismo vivo. Valorizamos o contexto urbano como experiencia sensivel — a luz, a proporcao, a historia. A arquitetura que criamos nao existe sem o contexto em que esta inserida.',
  },
  {
    number: '03',
    title: 'Espacos que comunicam identidade',
    description:
      'Nao entregamos projetos. Entregamos espacos que representam quem os habita. O resultado gera orgulho em quem vive e desejo em quem observa.',
  },
] as const;

/**
 * Diferenciadores section — what separates LAR from alternatives.
 * Numbered items with large decorative numbers.
 * Desktop: 2-column grid (number + text). Mobile: stacked.
 */
export default function Diferenciadores() {
  return (
    <section
      className="bg-[var(--color-bg)] py-[80px] lg:py-[120px]"
      aria-label="Diferenciadores"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
        {/* Section header */}
        <AnimatedText>
          <SectionLabel>Diferenciadores</SectionLabel>
          <h2
            className="text-[40px] lg:text-[64px] font-[300] leading-[1.15] tracking-[-0.01em] text-[var(--color-ink)] max-w-[900px]"
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

        {/* Items */}
        <div className="mt-16 lg:mt-20 flex flex-col gap-16">
          {DIFFERENTIATORS.map((item, index) => (
            <AnimatedText
              key={item.number}
              direction="left"
              delay={index * 0.15}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12">
                {/* Decorative number */}
                <span
                  className="block text-[40px] lg:text-[64px] font-[300] leading-[1] text-[var(--color-ink-muted)] lg:w-[20%] lg:text-right shrink-0"
                  style={{
                    fontFamily: 'var(--font-heading), Georgia, serif',
                  }}
                  aria-hidden="true"
                >
                  {item.number}
                </span>
                {/* Content */}
                <div className="lg:w-[80%]">
                  <h3
                    className="text-[22px] lg:text-[32px] font-[400] leading-[1.25] text-[var(--color-ink)]"
                    style={{
                      fontFamily: 'var(--font-heading), Georgia, serif',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[16px] lg:text-[18px] font-[300] leading-[1.7] text-[var(--color-ink-secondary)] max-w-[600px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
}
