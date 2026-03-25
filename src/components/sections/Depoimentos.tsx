'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { EASE_REVEAL } from '@/lib/motion';

interface Testimonial {
  readonly quote: string;
  readonly attribution: string;
}

/* [SUGESTAO] Substituir por depoimentos reais se disponiveis */
const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      '\u201CA LAR nao projetou uma casa. Projetou um espaco que finalmente parece meu. O processo foi diferente de tudo que eu havia vivido \u2014 eles escutaram antes de desenhar qualquer coisa.\u201D',
    attribution: 'Ana Luiza M., colecionadora de arte, Sao Paulo',
  },
  {
    quote:
      '\u201CO que me surpreendeu foi a profundidade da investigacao. Eles entenderam o contexto do terreno melhor do que eu. O projeto resultante so poderia existir ali.\u201D',
    attribution: 'Rodrigo F., empresario, projeto residencial',
  },
  {
    quote:
      '\u201CEu queria um escritorio que comunicasse o que a nossa empresa acredita, nao apenas que tivesse um visual bonito. A LAR entendeu exatamente isso. Cada detalhe tem um porque.\u201D',
    attribution: 'Fernanda C., fundadora de empresa criativa, projeto comercial',
  },
] as const;

/**
 * Depoimentos section — dark background, centered carousel.
 * One testimonial visible at a time, fade transition between slides.
 */
export default function Depoimentos() {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  function prev() {
    setActive((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  function next() {
    setActive((i) => (i + 1) % TESTIMONIALS.length);
  }

  const testimonial = TESTIMONIALS[active];

  return (
    <section
      className="bg-[var(--color-bg-dark)] py-[60px] md:py-[80px] lg:py-[100px]"
      aria-label="Depoimentos de clientes"
      aria-roledescription="carrossel"
    >
      <div className="max-w-[860px] mx-auto px-6 md:px-12 xl:px-20">

        {/* Carousel — fixed min-height prevents layout shift between slides */}
        <div className="relative min-h-[280px] sm:min-h-[260px] lg:min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              className="text-center"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, ease: EASE_REVEAL }}
              aria-live="polite"
            >
              {/* Decorative opening quote */}
              <span
                className="block text-[72px] leading-[1] text-[rgba(248,248,248,0.15)] mb-[-28px]"
                style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              {/* Quote text */}
              <p
                className="text-[20px] lg:text-[26px] font-[400] italic leading-[1.65] text-[var(--color-bg-dark-text)]"
                style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
              >
                {testimonial.quote}
              </p>
              {/* Attribution */}
              <footer className="mt-6 text-[13px] font-[300] text-[rgba(248,248,248,0.5)]">
                — {testimonial.attribution}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-8">
          {/* Prev */}
          <button
            type="button"
            onClick={prev}
            aria-label="Depoimento anterior"
            className="text-[rgba(248,248,248,0.4)] transition-colors duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[rgba(248,248,248,0.9)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-3" role="tablist" aria-label="Selecionar depoimento">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Depoimento ${i + 1}`}
                onClick={() => setActive(i)}
                className={`block transition-[width,opacity] duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] h-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] ${
                  i === active
                    ? 'w-8 bg-[rgba(248,248,248,0.8)]'
                    : 'w-3 bg-[rgba(248,248,248,0.3)] hover:bg-[rgba(248,248,248,0.5)]'
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            aria-label="Próximo depoimento"
            className="text-[rgba(248,248,248,0.4)] transition-colors duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[rgba(248,248,248,0.9)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
