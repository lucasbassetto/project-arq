'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { EASE_REVEAL } from '@/lib/motion';

/**
 * Splash screen — shown once on initial load.
 * Dark background with logo fade-in, then the screen slides up to reveal the site.
 */
export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  const [showSplash, setShowSplash] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (shouldReduceMotion) {
      setShowSplash(false);
      setIsAnimating(false);
      return;
    }

    /* After logo fades in and holds, remove from tree to trigger exit animation */
    const timer = setTimeout(() => setShowSplash(false), 2200);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isAnimating]);

  return (
    <>
      <AnimatePresence onExitComplete={() => setIsAnimating(false)}>
        {showSplash && (
          <motion.div
            key="splash"
            exit={{ y: '-100%' }}
            transition={{
              duration: 0.8,
              ease: EASE_REVEAL,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1C1C1C]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: EASE_REVEAL,
                delay: 0.3,
              }}
            >
              <Image
                src="/images/logo-lar.png"
                alt="LAR Arquitetura"
                width={140}
                height={50}
                priority
                className="brightness-0 invert"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
