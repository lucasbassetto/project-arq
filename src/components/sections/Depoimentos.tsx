'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_REVEAL } from '@/lib/motion';

interface Testimonial {
  readonly quote: string;
  readonly attribution: string;
}

/* [SUGESTAO] Substituir por depoimentos reais se disponiveis */
const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      'A LAR nao projetou uma casa. Projetou um espaco que finalmente parece meu. O processo foi diferente de tudo que eu havia vivido — eles escutaram antes de desenhar qualquer coisa.',
    attribution: 'Ana Luiza M., colecionadora de arte, Sao Paulo',
  },
  {
    quote:
      'O que me surpreendeu foi a profundidade da investigacao. Eles entenderam o contexto do terreno melhor do que eu. O projeto resultante so poderia existir ali.',
    attribution: 'Rodrigo F., empresario, projeto residencial',
  },
  {
    quote:
      'Eu queria um escritorio que comunicasse o que a nossa empresa acredita, nao apenas que tivesse um visual bonito. A LAR entendeu exatamente isso. Cada detalhe tem um porque.',
    attribution: 'Fernanda C., fundadora de empresa criativa, projeto comercial',
  },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const quoteVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_REVEAL },
  },
};

/**
 * Depoimentos section — dark background, stacked testimonials.
 * Editorial New italic quotes, no photos, no stars.
 */
export default function Depoimentos() {
  const shouldReduceMotion = useReducedMotion();

  const reducedQuoteVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.15 },
    },
  };

  return (
    <section
      className="bg-[var(--color-bg-dark)] py-[60px] md:py-[80px] lg:py-[120px]"
      aria-label="Depoimentos de clientes"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
        <motion.div
          className="flex flex-col gap-20 max-w-[720px] mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.blockquote
              key={testimonial.attribution}
              className="text-center"
              variants={
                shouldReduceMotion ? reducedQuoteVariants : quoteVariants
              }
            >
              {/* Decorative opening quote */}
              <span
                className="block text-[80px] leading-[1] text-[rgba(248,248,248,0.2)] mb-[-32px]"
                style={{
                  fontFamily: 'var(--font-heading), Georgia, serif',
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              {/* Quote text */}
              <p
                className="text-[20px] lg:text-[28px] font-[400] italic leading-[1.6] text-[var(--color-bg-dark-text)]"
                style={{
                  fontFamily: 'var(--font-heading), Georgia, serif',
                }}
              >
                {testimonial.quote}
              </p>
              {/* Attribution */}
              <footer className="mt-6 text-[13px] lg:text-[14px] font-[300] text-[rgba(248,248,248,0.6)]">
                — {testimonial.attribution}
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
