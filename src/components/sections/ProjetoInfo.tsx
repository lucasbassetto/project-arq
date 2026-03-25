'use client';

import AnimatedText from '@/components/ui/AnimatedText';

interface Props {
  typology: string;
  location: string;
  year: string;
  status: string;
  description: string;
}

export default function ProjetoInfo({
  typology,
  location,
  year,
  status,
  description,
}: Props) {
  return (
    <section className="bg-[var(--color-bg)] py-[80px] lg:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Metadata — left column */}
          <div className="lg:w-[280px] shrink-0">
            <AnimatedText>
              <dl className="space-y-6">
                <div>
                  <dt className="text-[11px] lg:text-[12px] font-[500] uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
                    Tipologia
                  </dt>
                  <dd className="mt-1 text-[16px] font-[300] text-[var(--color-ink)]">
                    {typology}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] lg:text-[12px] font-[500] uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
                    Localização
                  </dt>
                  <dd className="mt-1 text-[16px] font-[300] text-[var(--color-ink)]">
                    {location}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] lg:text-[12px] font-[500] uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
                    Ano
                  </dt>
                  <dd className="mt-1 text-[16px] font-[300] text-[var(--color-ink)]">
                    {year}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] lg:text-[12px] font-[500] uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
                    Status
                  </dt>
                  <dd className="mt-1 text-[16px] font-[300] text-[var(--color-ink)]">
                    {status}
                  </dd>
                </div>
              </dl>
            </AnimatedText>
          </div>

          {/* Description — right column */}
          <div className="flex-1">
            <AnimatedText delay={0.15}>
              <p
                className="text-[18px] lg:text-[22px] leading-[1.6] font-[300] text-[var(--color-ink-secondary)] max-w-[640px]"
              >
                {description}
              </p>
            </AnimatedText>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px bg-[var(--color-border)]" />
      </div>
    </section>
  );
}
