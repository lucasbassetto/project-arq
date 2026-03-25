'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProjectGridCard from '@/components/ui/ProjectGridCard';
import { PROJECTS, PROJECT_CATEGORIES } from '@/data/projects';
import type { ProjectCategory } from '@/data/projects';

type Filter = 'Todos' | ProjectCategory;
const FILTERS: readonly Filter[] = ['Todos', ...PROJECT_CATEGORIES];

export default function ProjetosGrid() {
  const searchParams = useSearchParams();
  const categoriaParam = searchParams.get('categoria') as Filter | null;

  const [activeFilter, setActiveFilter] = useState<Filter>(
    categoriaParam && FILTERS.includes(categoriaParam) ? categoriaParam : 'Todos'
  );

  useEffect(() => {
    if (categoriaParam && FILTERS.includes(categoriaParam)) {
      setActiveFilter(categoriaParam);
    }
  }, [categoriaParam]);

  const filtered = activeFilter === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-x-8 gap-y-2 mb-12">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`text-[12px] font-[500] uppercase tracking-[0.12em] transition-colors duration-[200ms] cursor-pointer pb-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${
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

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {filtered.map((project, index) => (
          <ProjectGridCard
            key={project.slug}
            slug={project.slug}
            name={project.name}
            typology={project.typology}
            heroImage={project.images[0]}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
