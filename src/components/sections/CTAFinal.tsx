'use client';

import AnimatedText from '@/components/ui/AnimatedText';
import Button from '@/components/ui/Button';

const SUPPORT_POINTS = [
  'Cada projeto e unico — nenhuma solucao replicada',
  'Processo investigativo do inicio ao fim',
  'Atendimento direto com os arquitetos responsaveis',
] as const;

/**
 * CTA Final section — dark background, aspirational conversion block.
 * Third and final dark inversion.
 */
export default function CTAFinal() {
  return (
    <section
      id="contato"
      className="bg-[var(--color-bg-warm)] py-[100px] lg:py-[160px]"
      aria-label="Entre em contato"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20 text-center">
        <AnimatedText>
          <h2
            className="text-[32px] lg:text-[64px] font-[300] leading-[1.15] tracking-[-0.01em] text-[var(--color-ink)] max-w-[900px] mx-auto text-wrap-balance"
            style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
          >
            Pronto para uma arquitetura que responde ao que voce e?
          </h2>
        </AnimatedText>

        {/* Support points */}
        <AnimatedText delay={0.15} className="mt-10">
          <ul className="flex flex-col gap-3 items-center">
            {SUPPORT_POINTS.map((point) => (
              <li
                key={point}
                className="text-[16px] lg:text-[18px] font-[300] leading-[1.7] text-[var(--color-ink-secondary)]"
              >
                {point}
              </li>
            ))}
          </ul>
        </AnimatedText>

        {/* CTA button */}
        <AnimatedText delay={0.3} className="mt-12">
          <Button variant="primary" href="https://wa.me/5500000000000">
            Converse com a LAR
          </Button>
        </AnimatedText>

        {/* Trust element */}
        <AnimatedText delay={0.4} className="mt-6">
          <p className="text-[13px] lg:text-[14px] font-[300] text-[var(--color-ink-muted)]">
            Consultoria inicial sem compromisso. Escutamos antes de propor
            qualquer coisa.
          </p>
        </AnimatedText>
      </div>
    </section>
  );
}
