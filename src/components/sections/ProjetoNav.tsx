'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { getProjectImagePath } from '@/data/projects';
import type { ProjectData } from '@/data/projects';

interface Props {
  prev: ProjectData | undefined;
  next: ProjectData | undefined;
}

export default function ProjetoNav({ prev, next }: Props) {
  const shouldReduceMotion = useReducedMotion();

  const animProps = shouldReduceMotion
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.15 } }
    : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 } };

  return (
    <section className="bg-[var(--color-bg)] py-[60px] lg:py-[80px] border-t border-[var(--color-border)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Previous project */}
          {prev ? (
            <motion.div {...animProps} viewport={{ once: true }} className="flex-1">
              <Link
                href={`/projetos/${prev.slug}`}
                className="group flex items-center gap-4"
              >
                <div className="relative w-[80px] h-[60px] overflow-hidden bg-[var(--color-border)] shrink-0">
                  <Image
                    src={getProjectImagePath(prev.slug, prev.images[0])}
                    alt={prev.name}
                    fill
                    className="object-cover transition-transform duration-[400ms] group-hover:scale-[1.05]"
                    sizes="80px"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="block text-[11px] font-[500] uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
                    Anterior
                  </span>
                  <span
                    className="block mt-1 text-[16px] lg:text-[18px] font-[400] transition-colors duration-[250ms] group-hover:text-[var(--color-accent)]"
                    style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
                  >
                    {prev.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ) : (
            <div className="flex-1" />
          )}

          {/* Back to all */}
          <div className="text-center shrink-0">
            <Link
              href="/projetos"
              className="text-[12px] font-[500] uppercase tracking-[0.12em] text-[var(--color-ink-muted)] transition-colors duration-[250ms] hover:text-[var(--color-accent)]"
            >
              Ver todos
            </Link>
          </div>

          {/* Next project */}
          {next ? (
            <motion.div {...animProps} viewport={{ once: true }} className="flex-1 flex justify-end">
              <Link
                href={`/projetos/${next.slug}`}
                className="group flex items-center gap-4 flex-row-reverse md:flex-row-reverse"
              >
                <div className="relative w-[80px] h-[60px] overflow-hidden bg-[var(--color-border)] shrink-0">
                  <Image
                    src={getProjectImagePath(next.slug, next.images[0])}
                    alt={next.name}
                    fill
                    className="object-cover transition-transform duration-[400ms] group-hover:scale-[1.05]"
                    sizes="80px"
                    loading="lazy"
                  />
                </div>
                <div className="text-right">
                  <span className="block text-[11px] font-[500] uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
                    Próximo
                  </span>
                  <span
                    className="block mt-1 text-[16px] lg:text-[18px] font-[400] transition-colors duration-[250ms] group-hover:text-[var(--color-accent)]"
                    style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
                  >
                    {next.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </section>
  );
}
