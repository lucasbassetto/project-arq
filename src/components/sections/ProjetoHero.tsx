'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { getProjectImagePath } from '@/data/projects';

interface Props {
  name: string;
  typology: string;
  slug: string;
  heroImage: string;
}

export default function ProjetoHero({ name, typology, slug, heroImage }: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative h-[70vh] lg:h-[85vh] w-full overflow-hidden">
      {/* Background image with Ken Burns */}
      <motion.div
        className="absolute inset-0"
        animate={shouldReduceMotion ? undefined : { scale: [1.04, 1.0] }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <Image
          src={getProjectImagePath(slug, heroImage)}
          alt={`${name} — ${typology}`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(28,28,28,0.75) 0%, rgba(28,28,28,0.2) 50%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative h-full flex items-end">
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 xl:px-20 pb-16 lg:pb-20">
          <motion.span
            className="block text-[11px] lg:text-[12px] font-[500] uppercase tracking-[0.12em] text-[var(--color-bg-dark-text)] opacity-70"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? { opacity: 0.7 } : { opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {typology}
          </motion.span>
          <motion.h1
            className="mt-3 text-[36px] md:text-[56px] lg:text-[72px] leading-[1.1] font-[300] text-[var(--color-bg-dark-text)]"
            style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {name}
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
