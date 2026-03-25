'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_REVEAL } from '@/lib/motion';

/**
 * Manifesto section — dark background, large italic Editorial text.
 * Pure typographic block, no components, no images.
 */
export default function Manifesto() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="manifesto"
      className="bg-[var(--color-bg-dark)] py-[80px] md:py-[100px] lg:py-[160px]"
      aria-label="Manifesto"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
        <motion.div
          className="max-w-[800px] mx-auto text-center"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.15 : 0.8,
            ease: EASE_REVEAL,
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Decorative opening quote */}
          <span
            className="block text-[80px] leading-[1] text-[rgba(248,248,248,0.2)] mb-[-40px]"
            style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          {/* Manifesto text */}
          <blockquote>
            <p
              className="text-[20px] md:text-[24px] lg:text-[28px] font-[400] italic leading-[1.6] text-[var(--color-bg-dark-text)]"
              style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
            >
              Existimos para provocar pensamento e emocao atraves do espaco.
              Nao entregamos projetos. Entregamos narrativas espaciais para
              quem vive com intencao. Nossa arquitetura e investigativa,
              autoral e sensivel. Nao seguimos formulas. Escutamos.
              Interpretamos. Traduzimos com rigor e poesia.
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
