'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import AnimatedText from '@/components/ui/AnimatedText';
import SectionLabel from '@/components/ui/SectionLabel';
import { EASE_UI } from '@/lib/motion';

interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

const FAQ_ITEMS: readonly FAQItem[] = [
  {
    question: 'Voces trabalham com qual tipologia de projetos?',
    answer:
      'Residencial, comercial e institucional. O criterio de selecao nao e a tipologia — e o alinhamento de valores. Trabalhamos com clientes que buscam arquitetura com intencao, independentemente da escala.',
  },
  {
    question: 'Como e o processo de orcamento?',
    answer:
      'Comecamos por uma conversa. Entendemos o contexto, o programa e o desejo antes de qualquer numero. O investimento e apresentado apos essa escuta inicial, com transparencia sobre escopo e etapas.',
  },
  {
    question: 'Quanto tempo dura um projeto?',
    answer:
      'Depende da escala e da complexidade. Projetos residenciais medios levam entre 4 e 8 meses na fase de desenvolvimento. Nunca comprometemos o rigor do processo por prazo.',
    /* [SUGESTAO] Ajustar com dados reais do escritorio */
  },
  {
    question: 'Voces acompanham a obra?',
    answer:
      'Sim. O acompanhamento de obra faz parte do nosso processo — e onde garantimos que a intencao do projeto se traduz fielmente em materia e construcao.',
  },
  {
    question: 'Como a LAR se diferencia de outros escritorios de alto padrao?',
    answer:
      'A maioria dos escritorios de alto padrao entrega sofisticacao de acabamento. A LAR entrega profundidade conceitual. O luxo que almejamos e o do tempo, da intencao, da ideia — nao do brilho ou da marca.',
  },
  {
    question: 'Voces repetem solucoes de projetos anteriores?',
    answer:
      'Nao. Cada projeto comeca do zero — como uma hipotese arquitetonica especifica para aquele lugar, aquele contexto e aquela pessoa. E o que nos define.',
  },
  {
    question: 'Como posso iniciar um projeto com a LAR?',
    answer:
      'Pelo botao "Converse com a LAR". Abrimos com uma conversa — sem formularios longos, sem burocracia. Escutamos o que voce tem em mente antes de qualquer proposta.',
  },
] as const;

/**
 * Single FAQ accordion item with expand/collapse animation.
 */
function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="border-t border-[var(--color-border)]">
      <button
        type="button"
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-[16px] lg:text-[18px] font-[400] text-[var(--color-ink)] pr-4">
          {item.question}
        </span>
        {/* Toggle icon: + / - */}
        <span
          className="shrink-0 w-5 h-5 flex items-center justify-center text-[var(--color-ink-secondary)]"
          aria-hidden="true"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className={`transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isOpen ? 'rotate-45' : 'rotate-0'
            }`}
          >
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { height: 0, opacity: 0 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { height: 'auto', opacity: 1 }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { height: 0, opacity: 0 }
            }
            transition={{
              duration: shouldReduceMotion ? 0.05 : 0.35,
              ease: EASE_UI,
            }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[16px] font-[300] leading-[1.7] text-[var(--color-ink-secondary)] max-w-[640px]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * FAQ section — accordion with 7 questions.
 * No decorative icons. Hairline borders between items.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section
      className="bg-[var(--color-bg)] py-[80px] lg:py-[80px]"
      aria-label="Perguntas frequentes"
    >
      <div className="max-w-[720px] mx-auto px-6 md:px-12">
        <AnimatedText>
          <SectionLabel>Perguntas frequentes</SectionLabel>
        </AnimatedText>

        <div className="mt-8">
          {FAQ_ITEMS.map((item, index) => (
            <FAQAccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
