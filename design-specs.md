# Design Specs — LAR Arquitetura

> Documento gerado na Fase 3 do pipeline. Fonte autoritativa para implementação.
> Não modificar sem revisar `copy.md` e `visual-references.md`.

---

## Design System

### Color Palette

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-bg` | `#F8F8F8` | Fundo principal — off-white quente |
| `--color-bg-warm` | `#EDE7D6` | Fundo secundário — seções alternadas, cards |
| `--color-border` | `#D8CBB8` | Bordas hairline, separadores, backgrounds sutis |
| `--color-ink-muted` | `#A4A4A4` | Texto muted, labels, numeração decorativa |
| `--color-ink-secondary` | `#5E5E5E` | Texto secundário, subtítulos, descrições |
| `--color-accent` | `#A18461` | Acento camel — hover states, detalhe ativo, links em foco |
| `--color-ink` | `#1C1C1C` | Texto principal, fundos escuros (Manifesto, Depoimentos, CTA Final) |
| `--color-bg-dark` | `#1C1C1C` | Fundo de seções invertidas |
| `--color-bg-dark-text` | `#F8F8F8` | Texto em fundos escuros |

**Rationale:**
- Paleta quente e monocromática reforça sobriedade intelectual sem frieza corporativa.
- `#EDE7D6` como bg alternado cria ritmo visual entre seções sem introduzir nova cor.
- `#A18461` (camel) é o único acento — usado com parcimônia em estados interativos. Nunca como cor dominante. A fotografia de projeto é a principal fonte de cor na página.
- Seções escuras (`#1C1C1C`) aplicadas em Manifesto, Depoimentos e CTA Final criam 3 inversões rítmicas que marcam momentos filosóficos/emocionais da narrativa.

---

### Typography

**Heading font: Editorial New** (Pangram Pangram — licença comercial web obrigatória)
- Weights: 300 (Light), 400 (Regular), 400 Italic
- Justificativa: Serif contemporânea com presença autoral. O italic expressivo é ideal para o Manifesto e depoimentos. Transmite profundidade intelectual sem classicismo excessivo. Diferencia a LAR de escritórios que usam apenas sans-serif.

**Body font: Neue Haas Grotesk** (Linotype/Monotype — licença comercial web obrigatória)
- Weights: 300 (Light), 400 (Roman), 500 (Medium)
- Justificativa: "Intelectual, discreta, sólida" — vocabulário direto do briefing. Mais calor e caráter que Suisse Int'l ou Helvetica Neue. Usada por museus, galerias e escritórios de arquitetura sérios. Não carrega conotação tech.

**Escala tipográfica:**

| Token | Mobile | Desktop | Font | Weight | Line-height | Letter-spacing | Uso principal |
|-------|--------|---------|------|--------|-------------|----------------|---------------|
| `display` | 48px | 80px | Editorial New | 300 | 1.1 | −0.02em | Hero headline |
| `h1` | 40px | 64px | Editorial New | 300 | 1.15 | −0.01em | Títulos de seção principais |
| `h2` | 28px | 44px | Editorial New | 400 italic | 1.2 | 0 | Manifesto, subheadings editoriais |
| `h3` | 22px | 32px | Editorial New | 400 | 1.25 | 0 | Títulos de cards, steps |
| `lead` | 18px | 22px | Neue Haas Grotesk | 300 | 1.6 | 0 | Subtítulo Hero, parágrafos introdutórios |
| `body` | 16px | 18px | Neue Haas Grotesk | 300 | 1.7 | 0 | Corpo de texto, respostas FAQ |
| `quote` | 20px | 28px | Editorial New | 400 italic | 1.6 | 0 | Depoimentos, Manifesto |
| `label` | 11px | 12px | Neue Haas Grotesk | 500 | 1.4 | 0.12em | Eyebrows, nav, categorias (uppercase) |
| `small` | 13px | 14px | Neue Haas Grotesk | 400 | 1.5 | 0 | Metadados, copyright, atribuições |
| `number-display` | 40px | 64px | Editorial New | 300 | 1.0 | 0 | Numeração decorativa (Diferenciadores, Processo) |
| `stat` | 32px | 44px | Editorial New | 300 | 1.1 | 0 | Números de Prova Social |

**Regras tipográficas:**
- Uppercase APENAS em: `label` scale (eyebrows, nav, categorias). Nunca em títulos.
- Itálico APENAS em Editorial New. Nunca em Neue Haas Grotesk.
- Weight máximo: 500. Nunca bold (700+) em nenhuma fonte.
- Numeração decorativa (01, 02…) sempre em Editorial New 300 — funciona como elemento gráfico, não informacional.

---

### Spacing System

- **Base unit:** 4px
- **Escala:** 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120, 160px

**Section padding-y (vertical):**
| Contexto | Mobile | Desktop |
|----------|--------|---------|
| Seções padrão | 80px | 120px |
| Seções filosóficas (Manifesto, CTA Final) | 100px | 160px |
| Prova Social (bloco compacto) | 60px | 80px |
| Footer | 60px top / 40px bottom | 60px top / 40px bottom |

**Container:**
- `max-width: 1280px`
- Padding horizontal: 24px (mobile) → 48px (md) → 80px (xl)

**Largura de conteúdo textual:**
- Texto corrido (body, FAQ): `max-width: 720px`
- Títulos de seção: `max-width: 900px`
- Manifesto e depoimentos: `max-width: 800px`
- Imagens: podem ser full-bleed (100vw) ou 60–65% da largura do container

**Espaçamento entre seções:** Mínimo 0px de gap — o padding-y de cada seção cria o respiro. O silêncio entre seções é parte da linguagem visual.

**Filosofia:** Generosa. Cada elemento respira. Nunca comprimir por falta de espaço — reduzir conteúdo se necessário.

---

### Shape Language

- **Border-radius:** `0px` em todos os elementos — cantos retos em botões, cards, imagens, inputs. A linguagem arquitetônica é de ângulos precisos, não de suavização ornamental.
- **Borders:** `1px solid var(--color-border)` — apenas quando necessário (separadores FAQ, linha conectora do Processo). Preferir separação por espaçamento a linhas.
- **Shadows:** Nenhuma. Hierarquia visual por espaçamento, tipografia e cor — nunca por sombra.
- **Philosophy:** Sharp e intencional. Cada aresta é uma decisão arquitetônica.

---

### Iconography

- **Nenhum ícone decorativo** em qualquer seção de conteúdo. O copy da LAR é suficientemente forte. Ícones genéricos (lâmpada, engrenagem, seta em círculo) banalizariam o posicionamento.
- **FAQ toggle:** Símbolo `+` / `−` como inline SVG mínimo (não biblioteca). Stroke 1px, `--color-ink-secondary`.
- **Redes sociais (Footer):** SVG custom inline para Instagram e LinkedIn apenas. Stroke 1.5px, 20×20px. Sem ícones de biblioteca.
- **Seta "Ver projeto":** Inline SVG de seta diagonal (→ ou ↗), stroke 1px. Nunca fill.

---

## Components

### Botão CTA

**Variante padrão (fundos claros):**
- Background: transparente
- Border: `1px solid var(--color-ink)`
- Texto: Neue Haas Grotesk 500, `label` scale, uppercase, `--color-ink`
- Padding: 14px 32px (desktop) / 12px 24px (mobile)
- Border-radius: 0
- Hover: `background: var(--color-ink)`, `color: var(--color-bg)`, transição 250ms `cubic-bezier(0.4, 0, 0.2, 1)`
- Focus: outline `2px solid var(--color-accent)`, outline-offset 3px

**Variante invertida (fundos escuros):**
- Background: transparente
- Border: `1px solid var(--color-bg-dark-text)`
- Texto: `--color-bg-dark-text`
- Hover: `background: var(--color-bg-dark-text)`, `color: var(--color-bg-dark)`

**Variante acento (uso opcional em contextos secundários):**
- Border: `1px solid var(--color-accent)`
- Texto: `--color-accent`
- Hover: `background: var(--color-accent)`, `color: var(--color-bg)`

---

### Navigation

**Desktop:**
- `position: fixed`, `top: 0`, `width: 100%`, `height: 64px`, `z-index: 50`
- Estado inicial (sobre Hero): `background: transparent`, logo e links em `--color-bg-dark-text`
- Após 80px de scroll: `background: rgba(248,248,248,0.92)`, `backdrop-filter: blur(8px)`, logo e links em `--color-ink`. Transição 400ms ease.
- Logo: "LAR" em Editorial New 400, 20px, tracking normal
- Nav links: Neue Haas Grotesk 500, `label` scale, uppercase, 4 itens: `Projetos · Processo · Sobre · Contato`
- Gap entre links: 40px
- Hover: `opacity: 1 → 0.5 → 1`? Não — hover em `color: var(--color-accent)`, transição 250ms
- Link ativo: `color: var(--color-accent)`
- Layout: logo à esquerda, links à direita, ambos `align-items: center`

**Mobile (< 768px):**
- Hamburger: 2 linhas horizontais, `width: 24px`, `height: 1px` cada, `--color-ink` (ou `--color-bg-dark-text` sobre Hero). Animam para `×` ao abrir.
- Menu aberto: overlay full-screen `background: var(--color-bg)`, links em Editorial New 300, 40px, centrados verticalmente e horizontalmente, stagger 80ms de entrada
- Fecha em: tap no `×`, tap fora, ou scroll

---

### Eyebrow / Label de seção

- Neue Haas Grotesk 500, `label` scale, uppercase, `--color-ink-muted`
- Margin-bottom: 24px (separa do título abaixo)
- Nenhum elemento decorativo (sem linha, sem dot, sem ícone)
- Uso: antes de títulos de seção onde o título sozinho não contextualiza

---

### Card de Projeto

- Sem borda, sem sombra, sem border-radius
- Estrutura vertical: imagem → tipologia → nome → conceito → link
- **Imagem:** aspect-ratio 3:2, `object-fit: cover`, `overflow: hidden`. Hover: scale `1.0 → 1.02`, transição 400ms ease. O container da imagem tem `overflow: hidden` para conter o scale.
- **Tipologia:** Neue Haas Grotesk 500, `label` scale, uppercase, `--color-ink-muted`. Margin-top: 20px.
- **Nome:** Editorial New 400, `h3` scale, `--color-ink`. Margin-top: 8px.
- **Conceito (1 frase):** Neue Haas Grotesk 300, `body` scale, `--color-ink-secondary`. Margin-top: 12px. `max-width: 480px`.
- **Link "Ver projeto":** Neue Haas Grotesk 400, `small` scale, `--color-ink`. Underline com `text-underline-offset: 4px`. Hover: `color: var(--color-accent)`. Margin-top: 16px. Com seta inline SVG → .

---

### Depoimento

- Aspas abertas: Editorial New 300, 80px, `--color-ink-muted` (ou equivalente em fundos escuros: `rgba(248,248,248,0.3)`). Elemento decorativo puramente tipográfico.
- Quote text: Editorial New 400 italic, `quote` scale, `--color-bg-dark-text` (em fundo escuro)
- Atribuição: Neue Haas Grotesk 300, `small` scale, `opacity: 0.6`, `--color-bg-dark-text`
- Separação entre depoimentos: 80px
- Sem foto de perfil, sem estrelas, sem métricas numéricas

---

### Accordion FAQ

- **Container:** `max-width: 720px`, centrado
- **Item:** separado por `1px solid var(--color-border)` hairline (no topo de cada item)
- **Pergunta:** Neue Haas Grotesk 400, 18px (desktop) / 16px (mobile), `--color-ink`. Padding: 24px 0. Flex row com `+`/`−` SVG à direita (`--color-ink-secondary`).
- **Resposta:** Neue Haas Grotesk 300, `body` scale, `--color-ink-secondary`. Padding: 0 0 24px 0. Overflow: hidden.
- **Animação:** `max-height: 0 → [content height]`, `opacity: 0 → 1`, 350ms `cubic-bezier(0.4, 0, 0.2, 1)`. Usar Framer Motion `AnimatePresence` com `height: "auto"`.
- **Estado aberto:** `+` rota 45° → `×` (não troca para `−`). Alternativa: `+` some, `−` aparece.

---

### Step Indicator (Processo)

- **Número:** Editorial New 300, `number-display` scale, `--color-ink-muted`. Funciona como elemento gráfico.
- **Linha conectora (desktop):** `1px solid var(--color-border)`, vertical, conecta o centro dos números entre steps consecutivos. Altura calculada dinamicamente.
- **Título do step:** Neue Haas Grotesk 500, 16px, uppercase, `--color-ink`. Margin-top: 8px do número.
- **Descrição:** Neue Haas Grotesk 300, `body` scale, `--color-ink-secondary`. Margin-top: 8px do título.

---

### Números de Prova Social

- Valor: Editorial New 300, `stat` scale, `--color-ink`
- Label: Neue Haas Grotesk 500, `label` scale, uppercase, `--color-ink-muted`. Margin-top: 8px.
- Separador vertical entre itens: `1px solid var(--color-border)`, `height: 40px`, visível apenas em desktop

---

## Sections

### 1. Hero

**Purpose:** Declaração de posicionamento + primeira impressão visual imediata.
**Background:** Imagem de projeto full-bleed `100svh`. Gradient overlay: `linear-gradient(to top, rgba(28,28,28,0.75) 0%, rgba(28,28,28,0.2) 50%, transparent 100%)` — escurece o terço inferior para legibilidade do texto.
**Layout:**
- Desktop: texto no terço inferior-esquerdo da tela. `position: absolute; bottom: 15%; left: 80px; max-width: 800px`.
- Mobile: texto centralizado, `bottom: 12%`.
**Content mapping:**
- "Cada projeto, uma resposta. Nunca uma fórmula." → `display` Editorial New 300, `--color-bg-dark-text`
- "Arquitetura autoral e contextual…" → `lead` Neue Haas Grotesk 300, `--color-bg-dark-text` opacity 0.85, margin-top 20px, max-width 600px
- "Converse com a LAR" → Botão CTA variante invertida, margin-top 36px
**Key components:** Navigation (variante transparente), Botão CTA invertido
**Imagery:** Fotografia de projeto arquitetônico — ambiente com luz natural, ângulos precisos. Aspecto 16:9 mínimo, `object-position: center`. `priority` no Next.js Image. Sem pessoas em destaque.
**Responsive:** Mobile: título `h1` scale (40px) ao invés de `display`. Subtítulo reduzido para 16px.

---

### 2. Manifesto

**Purpose:** Declaração filosófica — transição do visual para o intelectual.
**Background:** `--color-bg-dark` (`#1C1C1C`) — primeira inversão. Marca a mudança de tom.
**Layout:** Bloco único centralizado, `max-width: 800px`, vertical e horizontalmente centrado no container. `padding-y: 160px` desktop / `100px` mobile.
**Content mapping:**
- Aspas decorativas `"` → Editorial New 300, 80px, `rgba(248,248,248,0.2)`, `display: block`, margin-bottom `-40px` (sobrepõe visualmente o início do texto)
- Texto do manifesto completo → `quote` Editorial New 400 italic, `--color-bg-dark-text`
**Key components:** Nenhum componente reutilizável — bloco tipográfico puro.
**Imagery:** Nenhuma imagem. O texto é o único elemento visual.
**Responsive:** Mobile: `quote` scale reduz para 20px. Padding-y: 80px.

---

### 3. Reconhecimento / Prova Social

**Purpose:** Credibilidade quantitativa — discreta, não heroica.
**Background:** `--color-bg` — retorno ao claro após inversão do Manifesto.
**Layout:**
- Desktop: 4 itens em `flex-row`, `justify-content: center`, `gap: 0`, separador vertical `1px --color-border` entre cada item. Cada item `padding: 0 64px`.
- Mobile: `grid 2×2`, `gap: 40px`. Sem separadores verticais.
**Content mapping:**
- "XX projetos autorais entregues" → valor em `stat` Editorial New 300, label em `label` Neue Haas Grotesk 500 uppercase abaixo
- "Publicado em [publicação]" → valor em `stat`, label abaixo
- "Desde [ano], sem projeto repetido" → valor em `stat`, label abaixo
- "Residencial · Comercial · Institucional" → valor em `stat` (menor, ~28px), label abaixo
**Key components:** Números de Prova Social
**Imagery:** Nenhuma.
**Responsive:** Mobile: 2×2, `stat` reduz para 32px, sem separadores.

---

### 4. Projetos em Destaque

**Purpose:** Portfolio curado — o visual dos projetos é o argumento principal.
**Background:** `--color-bg-warm` (`#EDE7D6`) — alternância de bg cria ritmo sem nova cor.
**Layout:**
- Eyebrow "Projetos" no topo da seção
- Projetos empilhados verticalmente, `gap: 80px` entre cada
- Desktop: alternating — projeto ímpar: imagem 65% largura à esquerda + texto à direita; projeto par: texto à esquerda + imagem 65% à direita. Ambos em `align-items: center`.
- Mobile: imagem full-width (100%) + texto abaixo, todos alinhados à esquerda.
- CTA "Ver todos os projetos" centrado 64px abaixo do último projeto.
**Content mapping (por projeto):**
- Imagem → Card de Projeto (componente)
- Tipologia → `label` uppercase muted
- Nome → `h3` Editorial New 400
- Conceito → `body` Neue Haas Grotesk 300 secondary
- "Ver projeto" → link com seta inline
**Key components:** Card de Projeto, Botão CTA (ghost padrão)
**Imagery:** 3–4 fotografias de projeto, aspect-ratio 3:2. Alta qualidade. Sem filtros.
**Responsive:** Mobile: stack vertical único. Imagem full-width. Texto padding 24px.

---

### 5. Diferenciadores

**Purpose:** Articular o que separa a LAR das alternativas. Profundidade conceitual, não lista de features.
**Background:** `--color-bg`
**Layout:**
- Título "O que nos separa" (`h1` scale) + subtítulo ("A diferença entre uma obra com alma e um projeto com acabamento.") em `lead` scale, `--color-ink-secondary`. Margin-bottom: 80px.
- Desktop: 3 items em sequência vertical, `gap: 64px`. Cada item em grid 2 colunas: número (`20%`) + conteúdo (`80%`).
- Mobile: stack vertical. Número em `number-display` scale reduzido (40px) acima do título de cada item.
**Content mapping (por card):**
- 01, 02, 03 → `number-display` Editorial New 300, `--color-ink-muted`
- "Investigação antes de forma" / "A obra responde ao lugar" / "Espaços que comunicam identidade" → `h3` Editorial New 400
- Parágrafo descritivo → `body` Neue Haas Grotesk 300, `--color-ink-secondary`, `max-width: 600px`
**Key components:** Nenhum componente de UI — layout tipográfico.
**Imagery:** Nenhuma imagem nesta seção.
**Responsive:** Mobile: número 40px, título `h3` 22px, stacked.

---

### 6. Processo

**Purpose:** Desmistificar o processo e gerar confiança. Mostrar que é rigoroso e poético.
**Background:** `--color-bg-warm` (`#EDE7D6`)
**Layout:**
- Título "Como trabalhamos" + subtítulo "Um processo tão rigoroso quanto poético."
- Desktop: 2 colunas. Coluna esquerda (`30%`): números + linha conectora vertical. Coluna direita (`70%`): título + descrição do step. 5 rows, `gap: 48px` entre steps.
- Linha conectora: `1px solid var(--color-border)`, posicionada no centro dos números, `height` = distância entre centros dos números consecutivos.
- Mobile: stack vertical. Número acima do título, sem linha conectora.
**Content mapping (por step):**
- "01" … "05" → `number-display` Editorial New 300, `--color-ink-muted`
- "Escuta" / "Investigação" / "Conceito" / "Projeto" / "Obra" → Neue Haas Grotesk 500, 16px, uppercase, `--color-ink`
- Descrição de cada etapa → Neue Haas Grotesk 300, `body`, `--color-ink-secondary`
**Key components:** Step Indicator
**Imagery:** Nenhuma.
**Responsive:** Mobile: número 40px acima de cada step, sem grid de 2 colunas, sem linha conectora.

---

### 7. Depoimentos

**Purpose:** Prova social qualitativa — reforça os diferenciadores pela voz do cliente.
**Background:** `--color-bg-dark` (`#1C1C1C`) — segunda inversão.
**Layout:**
- 3 depoimentos empilhados verticalmente, `gap: 80px`. Sem carousel.
- Cada depoimento centralizado, `max-width: 720px`, com margin auto.
- `padding-y: 120px` desktop / `80px` mobile.
**Content mapping (por depoimento):**
- `"` decorativo → Editorial New 300, 80px, `rgba(248,248,248,0.2)`, `display: block`, margin-bottom `-32px`
- Quote text → `quote` Editorial New 400 italic, `--color-bg-dark-text`
- "— [Nome], [role], [tipo de projeto]" → Neue Haas Grotesk 300, `small`, `rgba(248,248,248,0.6)`, margin-top 24px
**Key components:** Componente Depoimento
**Imagery:** Nenhuma. Sem foto de perfil.
**Responsive:** `quote` scale reduz para 20px mobile. `padding-y: 60px` mobile.

---

### 8. Para Quem é a LAR

**Purpose:** Qualificação do cliente ideal — espelho para que o visitante se reconheça.
**Background:** `--color-bg`
**Layout:**
- Título "Para quem busca mais do que um projeto" (`h1`) + subtítulo em `lead` secondary. Margin-bottom: 64px.
- Desktop: grid `2×2`, `gap: 48px` horizontal / `64px` vertical. Borda `1px --color-border` hairline separando quadrantes (grid lines).
- Mobile: stack vertical, hairline 1px entre perfis.
**Content mapping (por perfil):**
- "01" … "04" → Editorial New 300, 32px, `--color-ink-muted`. Margin-bottom: 16px.
- "Quem vive com propósito" / etc. → extraído da primeira linha do perfil como label visual. Neue Haas Grotesk 500, `label` scale, uppercase, `--color-ink-muted`. Margin-bottom: 12px.
- Texto descritivo → Neue Haas Grotesk 300, `body`, `--color-ink-secondary`
**Key components:** Nenhum componente de UI — layout tipográfico em grid.
**Imagery:** Nenhuma imagem, sem ícones.
**Responsive:** Mobile: 1 coluna, stack. Sem grid lines horizontais.

---

### 9. CTA Final

**Purpose:** Conversão aspiracional — não comercial. Convite, não pressão.
**Background:** `--color-bg-dark` (`#1C1C1C`) — terceira e última inversão.
**Layout:**
- Todo o conteúdo centralizado (text-align: center).
- `padding-y: 160px` desktop / `100px` mobile.
- Sequência vertical: headline → bullet points → botão → elemento de confiança.
**Content mapping:**
- "Pronto para uma arquitetura que responde ao que você é?" → `h1` Editorial New 300, `--color-bg-dark-text`
- 3 bullet points → Neue Haas Grotesk 300, `body`, `rgba(248,248,248,0.7)`. Margin-top: 40px. `list-style: none`. Separados por `·` ou espaçamento de 12px vertical.
- "Converse com a LAR" → Botão CTA variante invertida, margin-top: 48px
- "Consultoria inicial sem compromisso…" → Neue Haas Grotesk 300, `small`, `rgba(248,248,248,0.5)`, margin-top: 24px
**Key components:** Botão CTA invertido
**Imagery:** Nenhuma — impacto 100% tipográfico.
**Responsive:** `h1` reduz para 32px mobile. Bullet points stack vertical.

---

### 10. FAQ

**Purpose:** Remover objeções de forma direta e honesta.
**Background:** `--color-bg`
**Layout:**
- Eyebrow "Perguntas frequentes" + título "FAQ" opcional (pode ser apenas o eyebrow).
- Accordion, `max-width: 720px`, `margin: 0 auto`.
- `padding-y: 80px`.
**Content mapping:**
- 7 perguntas → componente Accordion FAQ
- Cada pergunta: Neue Haas Grotesk 400, 18px, `--color-ink`
- Cada resposta: Neue Haas Grotesk 300, 16px, `--color-ink-secondary`
**Key components:** Accordion FAQ
**Imagery:** Nenhuma.
**Responsive:** Mobile: pergunta 16px, resposta 15px. Padding do item reduz para 20px 0.

---

### 11. Footer

**Purpose:** Encerramento silencioso — navegação e contato sem excesso informacional.
**Background:** `--color-bg` (ou `--color-bg-warm` para leve distinção visual do final da página)
**Layout:**
- `padding-top: 60px`, `padding-bottom: 40px`
- Desktop: 3 linhas
  - Linha 1: `flex-row space-between` — logo "LAR" (esq) · nav 4 links (centro) · social icons (dir)
  - Linha 2: contato e localização, `small` muted, centrado ou alinhado à esquerda
  - Linha 3: copyright + política de privacidade, `small` muted, `justify-content: space-between`
- Mobile: stack vertical centrado. Logo → nav (2×2 grid) → social → contato → copyright.
**Content mapping:**
- "LAR" → Editorial New 400, 20px, `--color-ink`
- "Projetos · Processo · Sobre · Contato" → Neue Haas Grotesk 500, `label` scale, uppercase, `gap: 32px`. Hover: `--color-accent`.
- Instagram + LinkedIn → SVG inline 20×20px, `--color-ink-secondary`. Hover: `--color-accent`.
- Email · Telefone · Localização → Neue Haas Grotesk 300, `small`, `--color-ink-muted`
- Copyright + Política de Privacidade → Neue Haas Grotesk 300, `small`, `--color-ink-muted`
**Key components:** Ícones SVG inline
**Imagery:** Nenhuma.
**Responsive:** Mobile: stack vertical, tudo centrado. Gap entre blocos: 32px.

---

## Animation & Motion

### Valores globais

| Variável | Valor | Uso |
|----------|-------|-----|
| `--ease-ui` | `cubic-bezier(0.4, 0, 0.2, 1)` | Hover, accordion, nav scroll — interações UI |
| `--ease-reveal` | `cubic-bezier(0.16, 1, 0.3, 1)` | Scroll-triggered content reveal — entrada suave com desaceleração longa |
| `--ease-clip` | `cubic-bezier(0.16, 1, 0.3, 1)` | Clip-path reveal de imagens |
| `--duration-fast` | `200ms` | Hover states |
| `--duration-ui` | `300ms` | Accordion, nav, botões |
| `--duration-reveal` | `800ms` | Scroll reveal padrão |
| `--duration-clip` | `1200ms` | Imagens clip-path |
| `--duration-hero` | `2000ms` | Ken Burns no Hero |
| `--stagger` | `120ms` | Delay entre siblings em grupos |

### Padrão global de scroll reveal (Framer Motion)

```
initial: { opacity: 0, y: 24 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
viewport: { once: true, amount: 0.2 }
```

### Reduced motion

Implementar com `useReducedMotion()` do Framer Motion em todos os componentes animados:
- Sem transforms (y, scale, clip-path)
- Sem parallax
- Transições ≤ 150ms, apenas opacity
- Ken Burns desativado

### Por seção

**Hero:**
- Imagem: `scale: 1.04 → 1.0` em `2000ms ease-out` no load (Ken Burns sutil — cria profundidade cinematográfica)
- Título: `opacity: 0, y: 30 → opacity: 1, y: 0`, `800ms --ease-reveal`, delay `400ms` (após imagem estar visível)
- Subtítulo: mesmo padrão, delay `550ms`
- Botão CTA: delay `700ms`

**Manifesto:**
- Bloco inteiro: `opacity: 0, y: 24 → opacity: 1, y: 0`, `800ms --ease-reveal`. Scroll-triggered.
- Não word-by-word — respeitar a leitura do usuário.

**Prova Social:**
- 4 items com stagger `120ms`: `opacity: 0, y: 16 → opacity: 1, y: 0`, `600ms --ease-reveal`
- Números: count-up animation quando entra no viewport. Duração: `1200ms`, `--ease-reveal`. Usar `tabular-nums` (Neue Haas Grotesk).

**Projetos em Destaque:**
- Imagens: clip-path reveal `inset(100% 0 0 0) → inset(0% 0 0 0)`, `1200ms --ease-clip`. Revela de baixo como cortina.
- Texto (tipologia + nome + conceito): fade + y stagger `120ms` após imagem iniciar (delay `200ms`).

**Diferenciadores:**
- 3 items com stagger `150ms`: `opacity: 0, x: -16 → opacity: 1, x: 0` (desliza da esquerda — reforça leitura progressiva).

**Processo:**
- 5 steps com stagger `150ms`: `opacity: 0, y: 20 → opacity: 1, y: 0`
- Linha conectora: `scaleY: 0 → 1`, `transform-origin: top`, duração `600ms` por segmento, triggered pelo step acima entrar no viewport.

**Depoimentos:**
- 3 quotes com stagger `200ms`: `opacity: 0 → 1`, `600ms`. Sem y translation — o italic do manifesto já cria movimento visual.

**Para Quem é a LAR:**
- Grid 2×2: stagger por linha → `120ms` entre items, `200ms` entre linhas.

**CTA Final:**
- Headline: `opacity: 0, y: 24 → opacity: 1, y: 0`, `800ms`
- Bullets + botão: stagger `150ms` após headline.

**Navigation:**
- Transição transparent → solid: `background` e `backdropFilter`, `400ms --ease-ui`.
- Menu mobile: overlay `opacity: 0 → 1`, `300ms`. Links stagger `80ms`.

**FAQ Accordion:**
- `height: 0 → auto` com Framer Motion `AnimatePresence`, `350ms --ease-ui`
- `opacity: 0 → 1` simultâneo.

**Hover states globais:**
- Links: `color → --color-accent`, `250ms --ease-ui`
- Imagens de projeto: `scale: 1 → 1.02`, `400ms --ease-ui` (no container `overflow: hidden`)
- Botões: background fill, `250ms --ease-ui`

**Parallax:**
- Apenas em imagem do Hero: `y: 0 → -8%` conforme scroll. `useScroll` + `useTransform` do Framer Motion.
- Nunca em texto, nunca em outras imagens.

---

## Responsive Strategy

### Breakpoints (Tailwind padrão)

| Token | Width | Uso |
|-------|-------|-----|
| base | 0–639px | Mobile portrait — layout base |
| `sm` | 640px | Mobile landscape — ajustes menores |
| `md` | 768px | Tablet — transição de layouts |
| `lg` | 1024px | Laptop — layouts bifurcados ativos |
| `xl` | 1280px | Desktop — larguras máximas |

Mobile-first: base = mobile. Additive changes em cada breakpoint.

### Mudanças críticas de layout por breakpoint

**< 768px (base → sm):**
- Nav: hamburger overlay
- Hero: texto centralizado, `h1` scale ao invés de `display`
- Manifesto: `quote` 20px, padding-y 80px
- Diferenciadores: stack vertical, número acima do título
- Processo: stack vertical, sem linha conectora, sem 2 colunas
- Projetos: stack único, imagem full-width
- Depoimentos: padding-y 60px
- Para Quem: 1 coluna, sem grid lines
- Footer: stack vertical centrado

**768px–1023px (md):**
- Nav: hamburger ainda ativo (tablet)
- Hero: texto pode ir para a esquerda
- Projetos: imagem full-width + texto abaixo (ainda não side-by-side)
- Processo: 2 colunas com padding reduzido
- Para Quem: 2×2 ativo

**≥ 1024px (lg):**
- Nav: links visíveis, sem hamburger
- Diferenciadores: grid 2 colunas (número + texto)
- Projetos: alternating (imagem 65% + texto lado a lado)
- Processo: 2 colunas completas com linha conectora
- Prova Social: flex-row com separadores verticais

### Touch considerations
- Tap targets mínimos: 44×44px (botões, links de nav, accordion triggers)
- FAQ accordion: funciona por tap, sem hover-only
- Sem swipe gestures (sem carousel que exija swipe)
- Menu mobile: fecha por tap no overlay (área fora dos links)

---

## Image & Asset Direction

### Estilo fotográfico
- Fotografia arquitetônica de alta qualidade
- Luz natural preferencial — horas de ouro, difusa ou lateral
- Ângulos precisos, perspectiva controlada — sem distorções excessivas de grande angular
- Sem pessoas como elemento principal (exceção: figura humana para escala, de costas ou em movimento)
- Atmosfera: silêncio, presença, profundidade espacial

### Treatment
- **Sem filtros, sem overlays de cor.** A imagem aparece em seu estado natural.
- A paleta monocromática do site serve como moldura — o contraste entre a contenção do UI e a riqueza das fotos é intencional.
- Não converter para P&B — a cor natural das fotos é a única cor de acento da página.
- Qualidade mínima: 2400px no lado maior para uso full-bleed.

### Aspect ratios por contexto
| Uso | Ratio | Notas |
|-----|-------|-------|
| Hero full-bleed | 16:9 | `object-position: center` ajustável |
| Project cards | 3:2 | Paisagem — padrão |
| Project cards (portrait) | 2:3 | Para projetos com fotografia vertical marcante |
| Manifesto | Sem imagem | — |

### Fontes de imagem
- **Produção:** Client-provided. Fotografia profissional de cada projeto.
- **Desenvolvimento:** Placeholder com `background: #D8CBB8` (--color-border) + texto "Projeto [N]" em Neue Haas Grotesk 400, `small`, `--color-ink-muted`, centrado.

### Implementação Next.js
- Usar `<Image>` com `sizes` correto por breakpoint
- `priority` no Hero (above-the-fold)
- `loading="lazy"` em todos os outros
- Formato automático: WebP/AVIF via Next.js optimization
- `alt` text descritivo e semântico para acessibilidade

---

## Notes for Implementation

### Licenciamento de fontes (crítico — resolver antes da implementação)
- **Editorial New** — Pangram Pangram (pangram-pangram.com). Requer licença web. Verificar tier por pageviews.
- **Neue Haas Grotesk** — Monotype/Adobe Fonts. Disponível via Adobe Fonts subscription ou licença de desktop web.
- **Fallback stack enquanto sem licença (desenvolvimento):** `"Playfair Display", Georgia, serif` para Editorial New; `"DM Sans", system-ui, sans-serif` para Neue Haas Grotesk.

### Implementação do `--color-accent`
- `#A18461` (camel) é usado APENAS em: hover de links (nav, footer, "Ver projeto"), link ativo na nav, focus outline de botões.
- Nunca como cor de fundo de seções, nunca em texto de corpo, nunca em títulos.
- O acento não compete com a fotografia — aparece apenas em micro-interações.

### Prioridade de implementação sugerida
1. Design System tokens (CSS variables + Tailwind config)
2. Navigation + Footer (presentes em todas as páginas)
3. Hero (first impression)
4. Manifesto + CTA Final (inversões escuras — validar o ritmo)
5. Projetos em Destaque (mais complexo — alternating layout + clip-path)
6. Processo + Diferenciadores (layout bifurcado desktop)
7. Prova Social + Para Quem + Depoimentos
8. FAQ (accordion)
9. Animações (adicionar por último — após layout aprovado)

### Conteúdo marcado como `[SUGESTÃO]`
Vários elementos em `copy.md` estão marcados como sugestão (números de projetos, ano de fundação, publicações, depoimentos reais). Implementar com placeholders visuais claramente marcados. Não inventar dados reais.

### Acessibilidade
- Contraste de texto: verificar todas as combinações `--color-ink-secondary` / `#5E5E5E` sobre `#F8F8F8` → ratio 7.1:1 ✅. Verificar `--color-ink-muted` / `#A4A4A4` — pode estar abaixo de WCAG AA para texto pequeno. Usar apenas para elementos decorativos (numeração, separadores), não para texto de conteúdo.
- `prefers-reduced-motion`: implementar em todos os componentes animados com `useReducedMotion()`.
- Links com texto descritivo — nunca "clique aqui".
- `alt` em todas as imagens.
- FAQ accordion: `aria-expanded`, `aria-controls` corretos.
