import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ProjetoHero from '@/components/sections/ProjetoHero';
import ProjetoInfo from '@/components/sections/ProjetoInfo';
import ProjetoGaleria from '@/components/sections/ProjetoGaleria';
import ProjetoNav from '@/components/sections/ProjetoNav';
import { PROJECTS, getProjectBySlug, getAdjacentProjects } from '@/data/projects';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.name} — LAR Arquitetura`,
    description: project.description,
    openGraph: {
      title: `${project.name} — LAR Arquitetura`,
      description: project.description,
      type: 'article',
      locale: 'pt_BR',
    },
  };
}

export default async function ProjetoPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      <Navigation />
      <main>
        <ProjetoHero
          name={project.name}
          typology={project.typology}
          slug={project.slug}
          heroImage={project.images[0]}
        />
        <ProjetoInfo
          typology={project.typology}
          location={project.location}
          year={project.year}
          status={project.status}
          description={project.description}
        />
        <ProjetoGaleria
          slug={project.slug}
          images={project.images}
          name={project.name}
        />
        <ProjetoNav prev={prev} next={next} />
      </main>
      <Footer />
    </>
  );
}
