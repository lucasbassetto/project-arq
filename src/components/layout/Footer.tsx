import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Processo', href: '/#processo' },
  { label: 'Sobre', href: '/#diferenciadores' },
  { label: 'Contato', href: '/#contato' },
] as const;

/**
 * Minimal footer — navigation, social links, contact, copyright.
 * No mega-footer. Silent ending.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[var(--color-bg)] pt-[60px] pb-[40px]"
      role="contentinfo"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
        {/* Row 1: Logo - Nav - Social */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          {/* Logo */}
          <a
            href="/"
            className="block"
            aria-label="LAR Arquitetura"
          >
            <Image
              src="/images/logo-lar.png"
              alt="LAR Arquitetura"
              width={80}
              height={28}
              className="h-7 w-auto"
              loading="lazy"
            />
          </a>

          {/* Nav links */}
          <nav
            className="flex flex-wrap justify-center gap-8"
            aria-label="Navegacao do rodape"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] font-[500] uppercase tracking-[0.12em] text-[var(--color-ink)] transition-colors duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            {/* [SUGESTAO] Confirmar quais redes estao ativas */}
            <a
              href="#"
              className="text-[var(--color-ink-secondary)] transition-colors duration-[250ms] hover:text-[var(--color-accent)]"
              aria-label="Instagram da LAR Arquitetura"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="#"
              className="text-[var(--color-ink-secondary)] transition-colors duration-[250ms] hover:text-[var(--color-accent)]"
              aria-label="LinkedIn da LAR Arquitetura"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Row 2: Contact info */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-6 text-[13px] lg:text-[14px] font-[300] text-[var(--color-ink-muted)]">
          {/* [SUGESTAO] Substituir pelos dados reais de contato */}
          <span>contato@lararquitetura.com.br</span>
          <span className="hidden lg:inline" aria-hidden="true">
            ·
          </span>
          <span>+55 (00) 0000-0000</span>
          <span className="hidden lg:inline" aria-hidden="true">
            ·
          </span>
          <span>Porto Alegre, RS</span>
        </div>

        {/* Row 3: Copyright + Privacy */}
        <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-2 text-[13px] lg:text-[14px] font-[300] text-[var(--color-ink-muted)]">
          <span suppressHydrationWarning>&copy; {currentYear} LAR Arquitetura. Todos os direitos reservados.</span>
          <a
            href="#"
            className="transition-colors duration-[250ms] hover:text-[var(--color-accent)]"
          >
            Politica de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
