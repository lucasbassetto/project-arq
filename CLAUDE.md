# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Site institucional da **LAR Arquitetura**, escritório de arquitetura autoral e contextual. O projeto segue o pipeline de desenvolvimento do workflow em `C:\Users\LUCAS\.claude\workflow.md`.

## Pipeline Status

| Fase | Ferramenta | Status | Output |
|------|-----------|--------|--------|
| 1. Copy | `/landing-page-copy-optimizer` | ✅ Concluída | `copy.md` |
| 2. Visual Research | `design-researcher` (agent) | ✅ Concluída | `visual-references.md` |
| 2.5. Scan Técnico | `scan-site.js` | ✅ Concluída | `references/ospa/` |
| 3. Design Specs | `/frontend-design` | ✅ Concluída | `design-specs.md` |
| 4. Implementação | `frontend-architect` (agent) | ✅ Concluída | `src/` |
| 5. QA | `/review-frontend` + `/web-design-guidelines` + `/simplify` | ⬜ Pendente | — |

## Brand Positioning

**Categoria:** Arquitetura autoral e contextual

**Positioning Statement:** "A LAR é um escritório de arquitetura autoral e contextual que transforma cada projeto em uma narrativa espacial única — concebida com rigor intelectual, sensibilidade estética e profundo respeito ao contexto — para pessoas que desejam habitar o mundo com intenção."

**Diferenciadores:**
1. Processo investigativo autoral — cada projeto nasce como hipótese arquitetônica, sem fórmula
2. Contextualidade radical — a obra responde ao lugar, à luz, à proporção e ao contexto urbano
3. Densidade intelectual — nenhuma decisão estética sem pensamento por trás
4. Narrativa espacial — espaços que comunicam identidade
5. Rigor sem repetição

**Cliente-alvo:** Pessoa com repertório cultural e sensibilidade estética desenvolvida. Vê arquitetura como linguagem e cultura. Transita entre arte, cinema, literatura. Busca um espaço que seja extensão de si.

**Metodologia (5 etapas):** Escuta → Investigação → Conceito → Projeto → Obra

## Key Content Files

- **`copy.md`** — Copy aprovada para todas as seções do site. Fonte autoritativa para conteúdo textual. Não modificar sem revisão do posicionamento.
- **`visual-references.md`** — Referências visuais analisadas e direção visual recomendada para o projeto.
- **`Posicionamento.pdf`** — Documento original de briefing/posicionamento da LAR Arquitetura.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS v3 (custom tokens via `tailwind.config.ts`)
- **Animations:** Framer Motion — sempre com `useReducedMotion()` + fallback
- **Language:** TypeScript — sem `any`
- **Images:** `next/image` com `priority` no Hero, `loading="lazy"` demais

> O projeto Next.js ainda não foi inicializado (`src/` não existe). Iniciar com `npx create-next-app@latest` na Fase 4.

## Design System (from design-specs.md)

### Tokens de Cor (CSS custom properties)
```
--color-bg: #F8F8F8          /* fundo padrão */
--color-bg-warm: #EDE7D6     /* fundo alternado (Projetos, Processo) */
--color-bg-dark: #1C1C1C     /* inversões: Manifesto, Depoimentos, CTA */
--color-ink: #1C1C1C
--color-ink-secondary: #5E5E5E
--color-ink-muted: #A4A4A4
--color-accent: #A18461      /* APENAS micro-interações: hover, focus, nav ativo */
--color-border: #D8CBB8
```

**Regra crítica:** `--color-accent` nunca como fundo ou cor dominante — apenas hover/focus/active.

### Tipografia
- **Display/H1/H2/citações:** Editorial New (Pangram Pangram) — pesos 300, 400, 400 italic
- **Body/UI/labels:** Neue Haas Grotesk — pesos 300, 400, 500
- **Labels:** sempre uppercase, `letter-spacing: 0.12em`
- **border-radius: 0** em todos os elementos — linguagem arquitetônica

### Motion (Framer Motion)
```ts
// Scroll reveal padrão
initial: { opacity: 0, y: 24 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
viewport: { once: true, amount: 0.2 }

// Clip-path para imagens de projetos
initial: { clipPath: 'inset(100% 0 0 0)' }
animate: { clipPath: 'inset(0% 0 0 0)' }
transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }

// Ken Burns no Hero
animate: { scale: [1.04, 1.0] }
transition: { duration: 2, ease: 'easeOut' }
```

### Layout
- Container: `max-w-[1280px] mx-auto px-6`
- Espaçamento entre seções: `py-[120px]` mobile → `py-[160px]` desktop
- Scroll nativo — sem scroll hijacking, sem snap obrigatório

## Seções do Site (ordem)

1. Hero — full-bleed image, Ken Burns, título + CTA ghost
2. Manifesto — fundo dark (#1C1C1C), texto editorial grande
3. Reconhecimento — logotipos de imprensa/prêmios
4. Projetos — grid 1→2 col, imagens com clip-path reveal
5. Diferenciadores — 5 itens, layout alternado texto/imagem
6. Processo — 5 etapas (Escuta → Investigação → Conceito → Projeto → Obra)
7. Depoimentos — fundo dark, citações em Editorial New italic
8. Para Quem — perfil do cliente ideal
9. CTA Final — fundo dark, call-to-action principal
10. FAQ — accordion, sem ícones decorativos
11. Footer — minimal

## Conventions

- PascalCase componentes, camelCase funções, kebab-case arquivos
- Componentes < 150 linhas, responsabilidade única
- Mobile-first, breakpoints: `sm:640px md:768px lg:1024px xl:1280px`
- Todo conteúdo inventado marcado com `[SUGESTÃO]`
- Sem ícones decorativos — tipografia-only para ornamentos
