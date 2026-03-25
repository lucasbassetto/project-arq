interface Props {
  children: React.ReactNode;
  className?: string;
}

/**
 * Eyebrow / section label component.
 * Neue Haas Grotesk 500, label scale, uppercase, muted color.
 */
export default function SectionLabel({ children, className = '' }: Props) {
  return (
    <span
      className={`block text-[11px] lg:text-[12px] font-[500] uppercase tracking-[0.12em] text-[var(--color-ink-muted)] mb-6 ${className}`}
    >
      {children}
    </span>
  );
}
