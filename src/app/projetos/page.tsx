import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ProjectGridCard from '@/components/ui/ProjectGridCard';
import { PROJECTS } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projetos — LAR Arquitetura',
  description:
    'Portfolio completo de projetos da LAR Arquitetura. Residencial, comercial, corporativo e institucional — cada obra uma resposta unica ao contexto.',
};

export default function ProjetosPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-[var(--color-bg)] pt-[140px] pb-[80px] lg:pt-[180px] lg:pb-[120px]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
            <SectionLabel>Portfólio</SectionLabel>
            <h1
              className="mt-4 text-[40px] lg:text-[64px] leading-[1.15] font-[300] max-w-[800px] text-wrap-balance"
              style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
            >
              Todos os projetos
            </h1>
            <p className="mt-6 text-[16px] lg:text-[18px] leading-[1.7] font-[300] text-[var(--color-ink-secondary)] max-w-[560px]">
              Cada projeto nasce como hipótese arquitetônica — uma investigação
              sobre lugar, programa e identidade.
            </p>
          </div>
        </section>

        <section className="bg-[var(--color-bg-warm)] py-[80px] lg:py-[120px]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {PROJECTS.map((project, index) => (
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
        </section>
      </main>
      <Footer />
    </>
  );
}
