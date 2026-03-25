'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_REVEAL } from '@/lib/motion';
import AnimatedText from './AnimatedText';

interface Props {
  /** Project name */
  name: string;
  /** e.g. "Residencial" */
  typology: string;
  /** One-line concept */
  concept: string;
  /** Image path in /public/images/ */
  imageSrc: string;
  /** Image alt text */
  imageAlt: string;
  /** Whether image appears on the right (even projects) */
  isReversed?: boolean;
  /** Index for placeholder display */
  index?: number;
}

/**
 * Project card with clip-path image reveal on scroll.
 * Desktop: alternating image/text layout.
 * Mobile: stacked vertical.
 *
 * [SUGESTAO] Substituir placeholder por <Image> com fotografia real do projeto.
 * Usar: <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 65vw" loading="lazy" />
 */
export default function ProjectCard({
  name,
  typology,
  concept,
  imageAlt,
  isReversed = false,
  index = 0,
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image with clip-path reveal */}
      <motion.div
        className="w-full lg:w-[65%] overflow-hidden"
        initial={
          shouldReduceMotion
            ? { opacity: 0 }
            : { clipPath: 'inset(100% 0 0 0)' }
        }
        whileInView={
          shouldReduceMotion
            ? { opacity: 1 }
            : { clipPath: 'inset(0% 0 0 0)' }
        }
        transition={{
          duration: shouldReduceMotion ? 0.15 : 1.2,
          ease: EASE_REVEAL,
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className="relative aspect-[3/2] bg-[var(--color-border)] group cursor-pointer"
          role="img"
          aria-label={imageAlt}
        >
          {/* Placeholder — replace with next/image when real photography is available */}
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.02]">
            <span className="text-[var(--color-ink-muted)] text-[14px] font-[400]">
              Projeto {index + 1}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Text content */}
      <div className="w-full lg:w-[35%] px-0">
        <AnimatedText delay={0.2}>
          <span className="block text-[11px] lg:text-[12px] font-[500] uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
            {typology}
          </span>
        </AnimatedText>
        <AnimatedText delay={0.32}>
          <h3
            className="mt-2 text-[22px] lg:text-[32px] leading-[1.25] font-[400]"
            style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
          >
            {name}
          </h3>
        </AnimatedText>
        <AnimatedText delay={0.44}>
          <p className="mt-3 text-[16px] lg:text-[18px] leading-[1.7] font-[300] text-[var(--color-ink-secondary)] max-w-[480px]">
            {concept}
          </p>
        </AnimatedText>
        <AnimatedText delay={0.56}>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-4 text-[13px] lg:text-[14px] font-[400] text-[var(--color-ink)] underline underline-offset-4 transition-colors duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[var(--color-accent)]"
          >
            Ver projeto
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              aria-hidden="true"
            >
              <path d="M1 13L13 1M13 1H3M13 1V11" />
            </svg>
          </a>
        </AnimatedText>
      </div>
    </div>
  );
}
