'use client';

import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion';
import { EASE_REVEAL } from '@/lib/motion';
import SectionLabel from '@/components/ui/SectionLabel';

interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly studio: string;
}

/* [SUGESTÃO] Substituir pelos dados reais de cada membro */
const TEAM: readonly TeamMember[] = [
  { name: 'Edson', role: 'Sócio-fundador', studio: 'LAR Arquitetura' },
  { name: 'Vinícius', role: 'Arquiteto Sênior', studio: 'LAR Arquitetura' },
  { name: 'Luana', role: 'Arquiteta de Interiores', studio: 'LAR Arquitetura' },
  { name: 'João', role: 'Coordenador de Projetos', studio: 'LAR Arquitetura' },
  { name: 'Gustavo', role: 'Arquiteto de Projetos', studio: 'LAR Arquitetura' },
  { name: 'Amanda', role: 'Designer de Interiores', studio: 'LAR Arquitetura' },
  { name: 'Lucas', role: 'Arquiteto Urbanista', studio: 'LAR Arquitetura' },
  { name: 'Guilherme', role: 'Gerente de Obras', studio: 'LAR Arquitetura' },
] as const;

// Height of each name row in px — must match the rendered button height
const ITEM_H = 96;
const VISIBLE = 5;
const HIDDEN = TEAM.length - VISIBLE; // 3 items hidden below

// Each name gets 2× ITEM_H of page scroll — enough room to avoid skipping on trackpad.
const EXTRA_SCROLL = (TEAM.length - 1) * ITEM_H * 2;

// The list window only starts moving after the first VISIBLE items have been "activated".
const LIST_SCROLL_START = (VISIBLE - 1) / (TEAM.length - 1);

/**
 * Equipe section — scroll-linked name list.
 * Section is taller than 100vh. As the user scrolls through the extra height,
 * the sticky content panel stays in place while the name list slides up,
 * revealing hidden members and updating the active detail on the left.
 */
export default function Equipe() {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // List stays still while first VISIBLE names activate, then slides up for the rest
  const listY = useTransform(
    scrollYProgress,
    [0, LIST_SCROLL_START, 1],
    [0, 0, -(HIDDEN * ITEM_H)]
  );

  // Sync active index from scroll position
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(
      Math.round(v * (TEAM.length - 1)),
      TEAM.length - 1
    );
    setActive(idx);
  });

  const member = TEAM[active];

  return (
    <section
      ref={sectionRef}
      style={{ minHeight: `calc(100vh + ${EXTRA_SCROLL}px)` }}
      id="equipe"
      className="relative bg-[var(--color-bg-dark)]"
      aria-label="Equipe"
    >
      {/* Sticky content panel — stays in view while section scrolls */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE_REVEAL }}
          >
            <SectionLabel className="text-[rgba(248,248,248,0.4)]">Equipe</SectionLabel>
          </motion.div>

          <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row">

            {/* Left — active member detail */}
            <div className="lg:w-[45%] lg:pr-16 mb-12 lg:mb-0">
              {/* No AnimatePresence — key-based instant swap + fast fade-in avoids skipping */}
              <motion.div
                key={active}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.2, ease: EASE_REVEAL }}
              >
                <p
                  className="text-[32px] lg:text-[48px] font-[300] leading-[1.2] text-[var(--color-bg-dark-text)]"
                  style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
                >
                  {member.name}
                </p>
                <p className="mt-4 text-[14px] font-[300] leading-[1.5] text-[rgba(248,248,248,0.6)]">
                  {member.role}
                </p>
                <p className="mt-1 text-[11px] font-[500] uppercase tracking-[0.12em] text-[rgba(248,248,248,0.35)]">
                  {member.studio}
                </p>
              </motion.div>
            </div>

            {/* Right — scroll-linked name list, clipped to VISIBLE items */}
            <div
              className="lg:w-[55%] overflow-hidden lg:flex lg:justify-end"
              style={{ height: VISIBLE * ITEM_H }}
              aria-label="Membros da equipe"
            >
              <motion.div
                style={shouldReduceMotion ? undefined : { y: listY }}
                className="flex flex-col items-end"
              >
                {TEAM.map((person, index) => (
                  <div
                    key={person.name}
                    style={{ height: ITEM_H }}
                    className={`flex items-center transition-colors duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      active === index
                        ? 'text-[var(--color-bg-dark-text)]'
                        : 'text-[rgba(248,248,248,0.3)]'
                    }`}
                    aria-current={active === index ? 'true' : undefined}
                  >
                    <span
                      className={`text-[28px] lg:text-[44px] leading-[1.2] ${
                        active === index ? 'font-[400]' : 'font-[300]'
                      }`}
                      style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
                    >
                      {person.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
