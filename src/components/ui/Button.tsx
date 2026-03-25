'use client';

import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'ghost-light';
  href?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * CTA Button with three variants:
 * - primary: dark border on light background
 * - ghost: accent border (optional secondary contexts)
 * - ghost-light: light border on dark background (inversions)
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className,
}: Props) {
  const baseClasses =
    'inline-block border px-6 py-3 lg:px-8 lg:py-3.5 text-[11px] lg:text-[12px] font-[500] uppercase tracking-[0.12em] transition-[color,background-color,border-color] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]';

  const variantClasses = {
    primary:
      'border-[var(--color-ink)] text-[var(--color-ink)] bg-transparent hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)]',
    ghost:
      'border-[var(--color-accent)] text-[var(--color-accent)] bg-transparent hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]',
    'ghost-light':
      'border-[var(--color-bg-dark-text)] text-[var(--color-bg-dark-text)] bg-transparent hover:bg-[var(--color-bg-dark-text)] hover:text-[var(--color-bg-dark)]',
  };

  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
