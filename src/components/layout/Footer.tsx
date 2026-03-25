import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Sobre', href: '/#diferenciadores' },
  { label: 'Equipe', href: '/#equipe' },
  { label: 'Contato', href: '/#contato' },
] as const;

const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'WhatsApp', href: '#' },
] as const;

/**
 * Robust dark footer — logo, tagline, nav, contact, social, copyright.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[var(--color-bg-dark)] pt-[80px] pb-[48px]"
      role="contentinfo"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">

        {/* Top row: Logo + tagline | Nav */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-0">

          {/* Left — Logo + tagline + description */}
          <div className="lg:max-w-[380px]">
            <a href="/" aria-label="LAR Arquitetura">
              <Image
                src="/images/logo-lar.png"
                alt="LAR Arquitetura"
                width={80}
                height={28}
                className="h-7 w-auto brightness-0 invert"
                loading="lazy"
              />
            </a>
            <p className="mt-8 text-[22px] lg:text-[28px] font-[300] leading-[1.35] text-[var(--color-bg-dark-text)]"
              style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
            >
              Arquitetura que responde<br />ao lugar e a quem habita.
            </p>
            <p className="mt-5 text-[14px] font-[300] leading-[1.7] text-[rgba(248,248,248,0.5)]">
              Porto Alegre, RS — Brasil
            </p>
          </div>

          {/* Right — Nav + Contact + Social */}
          <div className="flex flex-col sm:flex-row gap-14 lg:gap-20">

            {/* Navigation */}
            <div>
              <p className="text-[10px] font-[500] uppercase tracking-[0.14em] text-[rgba(248,248,248,0.35)] mb-5">
                Navegação
              </p>
              <nav className="flex flex-col gap-3" aria-label="Navegação do rodapé">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[15px] font-[300] text-[rgba(248,248,248,0.7)] transition-colors duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[var(--color-bg-dark-text)]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[10px] font-[500] uppercase tracking-[0.14em] text-[rgba(248,248,248,0.35)] mb-5">
                Contato
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:contato@lararquitetura.com.br"
                  className="text-[15px] font-[300] text-[rgba(248,248,248,0.7)] transition-colors duration-[250ms] hover:text-[var(--color-bg-dark-text)]"
                >
                  contato@lararquitetura.com.br
                </a>
                <a
                  href="tel:+555100000000"
                  className="text-[15px] font-[300] text-[rgba(248,248,248,0.7)] transition-colors duration-[250ms] hover:text-[var(--color-bg-dark-text)]"
                >
                  +55 (51) 0000-0000
                </a>

                {/* Social */}
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-[12px] font-[500] uppercase tracking-[0.1em] text-[rgba(248,248,248,0.4)] transition-colors duration-[250ms] hover:text-[var(--color-bg-dark-text)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px bg-[rgba(248,248,248,0.08)]" aria-hidden="true" />

        {/* Bottom row: Copyright + Privacy */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] font-[300] text-[rgba(248,248,248,0.3)]">
          <span suppressHydrationWarning>
            &copy; {currentYear} LAR Arquitetura. Todos os direitos reservados.
          </span>
          <a
            href="#"
            className="transition-colors duration-[250ms] hover:text-[rgba(248,248,248,0.7)]"
          >
            Política de Privacidade
          </a>
        </div>

      </div>
    </footer>
  );
}
