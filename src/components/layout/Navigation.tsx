'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import useScrollPosition from '@/hooks/use-scroll-position';
import { EASE_UI, EASE_REVEAL } from '@/lib/motion';

const NAV_LINKS = [
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Processo', href: '/#processo' },
  { label: 'Sobre', href: '/#manifesto' },
  { label: 'Contato', href: '/#contato' },
] as const;

const SCROLL_THRESHOLD = 80;

/**
 * Fixed navigation bar.
 * Transparent over Hero, solid with blur after scroll threshold.
 * Mobile: hamburger overlay with full-screen menu.
 */
export default function Navigation() {
  const scrollY = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const isScrolled = scrollY > SCROLL_THRESHOLD;

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  /* Close menu on scroll — direct listener to avoid setState-in-effect lint rule */
  const isMenuOpenRef = useRef(isMenuOpen);
  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);
  useEffect(() => {
    function onScroll() {
      if (isMenuOpenRef.current && window.scrollY > 0) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const textColor = isScrolled
    ? 'text-[var(--color-ink)]'
    : 'text-[var(--color-bg-dark-text)]';

  const lineColor = isScrolled
    ? 'bg-[var(--color-ink)]'
    : 'bg-[var(--color-bg-dark-text)]';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-16 z-50 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled
            ? 'bg-[rgba(248,248,248,0.92)] backdrop-blur-[8px]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="block transition-opacity duration-[400ms]"
            aria-label="LAR Arquitetura — voltar ao topo"
          >
            <Image
              src="/images/logo-lar.png"
              alt="LAR Arquitetura"
              width={80}
              height={28}
              priority
              className={`h-7 w-auto transition-all duration-[400ms] ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </a>

          {/* Desktop nav links */}
          <nav
            className="hidden lg:flex items-center gap-10"
            aria-label="Navegacao principal"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[12px] font-[500] uppercase tracking-[0.12em] ${textColor} transition-colors duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[var(--color-accent)]`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden relative w-6 h-6 flex items-center justify-center"
            onClick={handleToggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`absolute w-6 h-[1px] ${lineColor} transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-[11px]' : 'top-[7px]'
              }`}
            />
            <span
              className={`absolute w-6 h-[1px] ${lineColor} transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-[11px]' : 'top-[16px]'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.05 : 0.3,
              ease: EASE_UI,
            }}
            className="fixed inset-0 z-40 bg-[var(--color-bg)] flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegacao"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleCloseMenu}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.05 : 0.4,
                    ease: EASE_REVEAL,
                    delay: shouldReduceMotion ? 0 : i * 0.08,
                  }}
                  className="text-[40px] font-[300] text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors duration-[250ms]"
                  style={{
                    fontFamily: 'var(--font-heading), Georgia, serif',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
