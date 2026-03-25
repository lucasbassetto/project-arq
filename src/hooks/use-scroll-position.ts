'use client';

import { useState, useEffect } from 'react';

/**
 * Tracks the current vertical scroll position of the window.
 * Used by Navigation to switch between transparent and solid states.
 */
export default function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll(): void {
      setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}
