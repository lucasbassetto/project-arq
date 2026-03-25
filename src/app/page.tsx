import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SplashScreen from '@/components/ui/SplashScreen';
import Hero from '@/components/sections/Hero';

import Reconhecimento from '@/components/sections/Reconhecimento';
import Projetos from '@/components/sections/Projetos';
import Diferenciadores from '@/components/sections/Diferenciadores';
import Processo from '@/components/sections/Processo';
import Depoimentos from '@/components/sections/Depoimentos';
import ParaQuem from '@/components/sections/ParaQuem';
import CTAFinal from '@/components/sections/CTAFinal';
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
      <main>
        <Hero />

        <Reconhecimento />
        <Projetos />
        <Diferenciadores />
        <Processo />
        <Depoimentos />
        <ParaQuem />
        <CTAFinal />
        <FAQ />
      </main>
      <Footer />
    </SplashScreen>
  );
}
