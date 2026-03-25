'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_REVEAL } from '@/lib/motion';
import { getProjectImagePath } from '@/data/projects';

interface Props {
  slug: string;
  name: string;
  typology: string;
  heroImage: string;
  index?: number;
}

export default function ProjectGridCard({
  slug,
  name,
  typology,
  heroImage,
  index = 0,
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }
      }
      whileInView={
        shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
      }
      transition={{
        duration: shouldReduceMotion ? 0.15 : 0.8,
        ease: EASE_REVEAL,
        delay: shouldReduceMotion ? 0 : index * 0.12,
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link
        href={`/projetos/${slug}`}
        className="group block"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-border)]">
          <Image
            src={getProjectImagePath(slug, heroImage)}
            alt={`${name} — ${typology}`}
            fill
            className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
        <div className="mt-4">
          <span className="block text-[11px] lg:text-[12px] font-[500] uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
            {typology}
          </span>
          <h3
            className="mt-1 text-[18px] lg:text-[22px] leading-[1.25] font-[400] transition-colors duration-[250ms] group-hover:text-[var(--color-accent)]"
            style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
          >
            {name}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}
