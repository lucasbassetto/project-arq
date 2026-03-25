'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import AnimatedText from '@/components/ui/AnimatedText';
import {
  PROJECTS,
  getFeaturedProjects,
  getProjectImagePath,
  PROJECT_CATEGORIES,
} from '@/data/projects';
import type { ProjectCategory, ProjectData } from '@/data/projects';
import { EASE_REVEAL } from '@/lib/motion';

type Filter = 'Todos' | ProjectCategory;
const FILTERS: readonly Filter[] = ['Todos', ...PROJECT_CATEGORIES];

function ProjectCard({
  project,
  index,
}: {
  project: ProjectData;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key={project.slug}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
      transition={{
        duration: shouldReduceMotion ? 0.15 : 0.55,
        ease: EASE_REVEAL,
        delay: shouldReduceMotion ? 0 : (index % 6) * 0.07,
      }}
    >
      <Link href={`/projetos/${project.slug}`} className="group block">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-border)]">
          <Image
            src={getProjectImagePath(project.slug, project.images[0])}
            alt={`${project.name} — ${project.typology}`}
            fill
            className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
            loading="lazy"
          />
        </div>

        {/* Caption */}
        <div className="mt-3">
          <span className="block text-[10px] font-[500] uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
            {project.typology}
          </span>
          <h3
            className="mt-1 text-[16px] lg:text-[18px] font-[400] leading-[1.3] text-[var(--color-ink)] transition-colors duration-[250ms] group-hover:text-[var(--color-accent)] underline-offset-4 group-hover:underline"
            style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
          >
            {project.name}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projetos() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Todos');

  const filteredProjects: readonly ProjectData[] =
    activeFilter === 'Todos'
      ? getFeaturedProjects()
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projetos"
      className="bg-[var(--color-bg-warm)] py-[80px] lg:py-[120px]"
      aria-label="Projetos"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
        {/* Header */}
        <AnimatedText>
          <SectionLabel>Projetos</SectionLabel>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <h2
            className="mt-4 text-[28px] lg:text-[44px] leading-[1.2] font-[400] italic max-w-[640px] text-wrap-balance"
            style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
          >
            Cada projeto, uma investigação. Cada obra, uma resposta.
          </h2>
        </AnimatedText>

        {/* Body: sidebar + grid */}
        <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row lg:gap-16">

          {/* Sidebar filters — vertical on desktop, horizontal scroll on mobile */}
          <AnimatedText
            delay={0.15}
            className="shrink-0 lg:w-[160px] xl:w-[180px]"
          >
            {/* Mobile: horizontal scrollable row */}
            <div className="flex flex-row flex-wrap gap-x-6 gap-y-2 lg:hidden mb-8">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`text-[11px] font-[500] uppercase tracking-[0.12em] transition-colors duration-[200ms] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] pb-0.5 ${
                    activeFilter === filter
                      ? 'text-[var(--color-ink)] border-b border-[var(--color-ink)]'
                      : 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]'
                  }`}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Desktop: vertical stack */}
            <nav
              className="hidden lg:flex flex-col gap-3 sticky top-24"
              aria-label="Filtrar projetos por categoria"
            >
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`text-left text-[12px] font-[500] uppercase tracking-[0.12em] transition-colors duration-[200ms] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${
                    activeFilter === filter
                      ? 'text-[var(--color-ink)]'
                      : 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]'
                  }`}
                  aria-pressed={activeFilter === filter}
                >
                  {/* Active indicator */}
                  <span className="flex items-center gap-2">
                    <span
                      className={`block h-px transition-[width] duration-[300ms] bg-[var(--color-ink)] ${
                        activeFilter === filter ? 'w-4' : 'w-0'
                      }`}
                      aria-hidden="true"
                    />
                    {filter}
                  </span>
                </button>
              ))}
            </nav>
          </AnimatedText>

          {/* Project grid + CTA */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 lg:gap-x-8 lg:gap-y-14"
              >
                {filteredProjects.map((project, index) => (
                  <div key={project.slug} className={index >= 5 ? 'hidden lg:block' : ''}>
                    <ProjectCard
                      project={project}
                      index={index}
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <AnimatedText className="mt-14 lg:mt-16 flex justify-end">
              <Button
                variant="primary"
                href={activeFilter === 'Todos' ? '/projetos' : `/projetos?categoria=${encodeURIComponent(activeFilter)}`}
              >
                Ver todos os projetos
              </Button>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
}
