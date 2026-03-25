import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SplashScreen from '@/components/ui/SplashScreen';
import Hero from '@/components/sections/Hero';

import Reconhecimento from '@/components/sections/Reconhecimento';
import Projetos from '@/components/sections/Projetos';
import Diferenciadores from '@/components/sections/Diferenciadores';
import Depoimentos from '@/components/sections/Depoimentos';
import ParaQuem from '@/components/sections/ParaQuem';
import CTAFinal from '@/components/sections/CTAFinal';
import Equipe from '@/components/sections/Equipe';
import FAQ from '@/components/sections/FAQ';

/**
 * Landing page for LAR Arquitetura.
 * Assembles all 11 sections in editorial order.
 * Server component — all interactivity is in child client components.
 */
export default function HomePage() {
  return (
    <SplashScreen>
      <Navigation />
      <main id="main-content">
        <Hero />

        <Reconhecimento />
        <Projetos />
        <Diferenciadores />
        <Depoimentos />
        <ParaQuem />
        <CTAFinal />
        <Equipe />
        <FAQ />
      </main>
      <Footer />
    </SplashScreen>
  );
}
