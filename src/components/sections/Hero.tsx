'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { EASE_REVEAL } from '@/lib/motion';

/**
 * Hero section — full-bleed video background.
 * Left: headline + CTA. Right: manifesto quote with delayed fade-in.
 * Video plays once automatically (muted, no controls) and stops on the last frame.
 */
export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative h-svh w-full overflow-hidden"
      style={{
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
      }}
      aria-label="Hero"
    >
      {/* Video background — autoplay once, no loop */}
      <div className="absolute inset-0">
        <video
          src="/videos/video-hero.mp4"
          width={1920}
          height={1080}
          autoPlay
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(28,28,28,0.75) 0%, rgba(28,28,28,0.3) 40%, rgba(28,28,28,0.15) 60%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content — diagonal composition: quote top-right, headline bottom-left */}
      <div className="relative h-full w-full px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col justify-between pt-[120px] pb-[10%] lg:pt-[140px] lg:pb-[8%]">

        {/* Top-right — Manifesto quote (desktop only) */}
        <motion.blockquote
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.15 : 1.8,
            ease: EASE_REVEAL,
            delay: shouldReduceMotion ? 0 : 3.5,
          }}
          className="hidden lg:block self-end max-w-[360px] xl:max-w-[400px] text-right"
        >
          <p
            className="text-[17px] xl:text-[19px] font-[300] italic leading-[1.8] text-[var(--color-bg-dark-text)]/80 text-wrap-pretty"
            style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
          >
            Existimos para provocar pensamento e emoção através do espaço.
            Não entregamos projetos. Entregamos narrativas espaciais para
            quem vive com intenção.
          </p>
        </motion.blockquote>

        {/* Bottom — Headline + CTA + mobile quote */}
        <div className="flex flex-col w-full">
          {/* Headline + CTA */}
          <div className="max-w-[600px] text-left">
            {/* Eyebrow */}
            <motion.span
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.15 : 0.8,
                ease: EASE_REVEAL,
                delay: shouldReduceMotion ? 0 : 0.3,
              }}
              className="block text-[11px] lg:text-[12px] font-[500] uppercase tracking-[0.12em] text-[var(--color-bg-dark-text)]/70 mb-6"
            >
              Arquitetura autoral e contextual
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.15 : 0.8,
                ease: EASE_REVEAL,
                delay: shouldReduceMotion ? 0 : 0.4,
              }}
              className="text-[36px] md:text-[52px] lg:text-[72px] font-[31] leading-[1.1] tracking-[-0.02em] text-[var(--color-bg-dark-text)] text-wrap-balance"
              style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
            >
              Cada projeto, uma resposta. Nunca uma fórmula.
            </motion.h1>

            {/* CTA */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.15 : 0.8,
                ease: EASE_REVEAL,
                delay: shouldReduceMotion ? 0 : 0.6,
              }}
              className="mt-9"
            >
              <Button variant="ghost-light" href="#contato">
                Converse com a LAR
              </Button>
            </motion.div>
          </div>

          {/* Manifesto quote — mobile only, full width so it aligns with the hamburger */}
          <motion.blockquote
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.15 : 1.2,
              ease: EASE_REVEAL,
              delay: shouldReduceMotion ? 0 : 0.9,
            }}
            className="lg:hidden mt-60 text-right"
          >
            <p
              className="text-[17px] font-[300] italic leading-[1.8] text-[var(--color-bg-dark-text)]/80 text-wrap-pretty"
              style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
            >
              Existimos para provocar pensamento e emoção através do espaço.
              Não entregamos projetos. Entregamos narrativas espaciais para
              quem vive com intenção.
            </p>
          </motion.blockquote>
        </div>

      </div>
    </section>
  );
}
