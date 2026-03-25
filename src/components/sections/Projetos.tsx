'use client';

import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import AnimatedText from '@/components/ui/AnimatedText';
import ProjectGridCard from '@/components/ui/ProjectGridCard';
import { getFeaturedProjects } from '@/data/projects';

const featured = getFeaturedProjects();

export default function Projetos() {
  return (
    <section
      id="projetos"
      className="bg-[var(--color-bg-warm)] py-[80px] lg:py-[120px]"
      aria-label="Projetos em destaque"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
        <AnimatedText>
          <SectionLabel>Projetos</SectionLabel>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2
            className="mt-4 text-[28px] lg:text-[44px] leading-[1.2] font-[400] italic max-w-[640px]"
            style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
          >
            Cada projeto, uma investigação. Cada obra, uma resposta.
          </h2>
        </AnimatedText>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featured.map((project, index) => (
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

        <AnimatedText className="mt-16 text-center">
          <Button variant="primary" href="/projetos">
            Ver todos os projetos
          </Button>
        </AnimatedText>
      </div>
    </section>
  );
}
