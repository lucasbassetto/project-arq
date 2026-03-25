'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_REVEAL } from '@/lib/motion';
import { getProjectImagePath } from '@/data/projects';

interface Props {
  slug: string;
  images: readonly string[];
  name: string;
}

/**
 * Editorial gallery alternating between full-width and 2-column layouts.
 * Pattern: full → pair → full → pair → ...
 * Inspired by ospaarqurb project pages.
 */
export default function ProjetoGaleria({ slug, images, name }: Props) {
  const shouldReduceMotion = useReducedMotion();

  /* Skip the first image (used as hero) */
  const galleryImages = images.slice(1);

  if (galleryImages.length === 0) return null;

  /* Build layout groups: full-width singles and side-by-side pairs */
  const groups: Array<{ type: 'full'; image: string } | { type: 'pair'; images: [string, string] }> = [];
  let i = 0;

  while (i < galleryImages.length) {
    if (groups.length % 2 === 0 || i + 1 >= galleryImages.length) {
      /* Full-width */
      groups.push({ type: 'full', image: galleryImages[i] });
      i += 1;
    } else {
      /* Side-by-side pair */
      groups.push({ type: 'pair', images: [galleryImages[i], galleryImages[i + 1]] });
      i += 2;
    }
  }

  const clipReveal = (delay = 0) =>
    shouldReduceMotion
      ? {
          initial: { opacity: 0 } as const,
          whileInView: { opacity: 1 } as const,
          transition: { duration: 0.15 },
        }
      : {
          initial: { opacity: 0, y: 40 } as const,
          whileInView: { opacity: 1, y: 0 } as const,
          transition: { duration: 0.8, ease: EASE_REVEAL, delay },
        };

  return (
    <section className="bg-[var(--color-bg)] pb-[80px] lg:pb-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20 flex flex-col gap-6 lg:gap-8">
        {groups.map((group, groupIndex) => {
          if (group.type === 'full') {
            return (
              <motion.div
                key={`full-${groupIndex}`}
                className="relative aspect-[16/9] overflow-hidden bg-[var(--color-border)]"
                {...clipReveal()}
                viewport={{ once: true, amount: 0.15 }}
              >
                <Image
                  src={getProjectImagePath(slug, group.image)}
                  alt={`${name} — imagem ${groupIndex + 2}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  loading="lazy"
                />
              </motion.div>
            );
          }

          return (
            <div
              key={`pair-${groupIndex}`}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {group.images.map((img, pairIndex) => (
                <motion.div
                  key={`pair-${groupIndex}-${pairIndex}`}
                  className="relative aspect-[4/3] overflow-hidden bg-[var(--color-border)]"
                  {...clipReveal(pairIndex * 0.15)}
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <Image
                    src={getProjectImagePath(slug, img)}
                    alt={`${name} — imagem ${groupIndex + pairIndex + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
