# Visual References -- LAR Arquitetura

## Contexto do Projeto

- **Setor:** Arquitetura autoral e contextual (residencial, comercial, institucional)
- **Publico-alvo:** Pessoas com repertorio cultural e sensibilidade estetica desenvolvida. Transitam entre arte, cinema, moda e literatura. Buscam um espaco que seja extensao de si -- nao um showroom de tendencias. Elegantes sem ostentacao. Intelectualmente inquietas. Alto nivel de sofisticacao visual e verbal.
- **Tom da marca:** Editorial, intelectual, poetico
- **Deve reforcar:** Processo investigativo (cada projeto como hipotese), contextualidade radical (a obra responde ao lugar), densidade intelectual (nenhuma decisao sem pensamento), narrativa espacial (espacos que comunicam identidade), rigor sem repeticao
- **Deve evitar:** Luxo ostensivo (competidores de alto padrao), estetica generica de construtora, frieza corporativa, visual de startup/SaaS, superficialidade estetica sem profundidade conceitual, repeticao de formulas visuais

### Alternativas competitivas (e como se diferenciar visualmente)
1. **Escritorios de luxo ostensivo** -- tendem a sites com dourado, marmores, tipografia decorativa. LAR deve ser o oposto: sobriedade intelectual.
2. **Arquitetos autorais inacessiveis** -- sites minimalistas ate a frieza. LAR deve ter calor humano sem perder rigor.
3. **Escritorios boutique superficiais** -- visual bonito sem substancia. LAR deve demonstrar profundidade no proprio ritmo da pagina.
4. **Designers de interiores** -- foco em "antes e depois", moods decorativos. LAR deve comunicar processo e pensamento, nao apenas resultado.

---

## Referencias

### 1. OSPA -- https://ospa.com.br/

**Relevance score:** 4/5

**Por que esta referencia:**
OSPA e um estudio de arquitetura brasileiro contemporaneo com uma abordagem visual monocromatica e limpa que se alinha com o tom intelectual e nao-ostensivo da LAR. Compartilha o mesmo mercado geografico e cultural, o que torna seus padroes de design diretamente relevantes como ponto de partida.

**O que usar desta referencia:**

- **Paleta monocromatica off-white/preto:** A abordagem de cor e exemplar -- o off-white levemente quente (oklch 0.985) como fundo transmite sofisticacao sem frieza, enquanto o quase-preto (oklch 0.21) para texto garante legibilidade com elegancia. A ausencia de cores vibrantes comunica seriedade intelectual. Essa paleta e altamente adequada para a LAR, que precisa evitar tanto o luxo ostensivo quanto a frieza corporativa.

- **Peso tipografico leve (300-500):** O uso predominante de font-weight 300 cria uma leveza visual que comunica refinamento e confianca. Titulos em 300-500 (nunca bold agressivo) evitam o tom "gritante" e reforcan o posicionamento da LAR como escritorio que nao precisa de estridencia para ser percebido. O line-height generoso (1.33) tambem contribui para a respiracao do conteudo.

- **Easing suave -- cubic-bezier(0.4, 0, 0.2, 1):** A curva de animacao transmite intencionalidade e cuidado. Duracoes entre 0.3s-0.7s sao suficientes para criar presenca sem atrasar a navegacao. Fade de opacidade combinado com translate e uma tecnica discreta que funciona bem para conteudo editorial.

- **Abordagem sem icones:** A ausencia de icones decorativos e absolutamente correta para a LAR. O conteudo do copy.md ja e forte e autoexplicativo -- icones genéricos (lampada para "conceito", engrenagem para "processo") banalizariam a mensagem. Texto bem tipografado e suficiente.

- **Botoes ghost/pill discretos:** Fundo transparente, borda 1px, border-radius 20px. Essa linguagem de botao nao compete com o conteudo e se alinha com o CTA "Converse com a LAR" -- um convite, nao uma ordem. A cor cinza para bordas e texto reforça a discrição.

- **Cinza intermediario para hierarquia:** O uso de cinza para textos secundarios e bordas cria camadas de leitura sem introduzir cores adicionais.

**O que NAO usar desta referencia:**

- **Scroll hijacking (navegacao full-screen por secoes):** O OSPA usa sequestro de scroll que controla a experiencia de rolagem do usuario. Isso contradiz o principio de "escuta" da LAR -- um site que controla como voce navega nao respeita a autonomia do visitante. Alem disso, scroll nativo permite que o usuario descubra o conteudo no seu proprio ritmo, o que e mais poetico e menos agressivo.

- **Tom corporativo/tech:** Embora a paleta do OSPA seja adequada, a estrutura geral do site (grid de 3 colunas para produtos, logo bar com marquee) tem uma cadencia de landing page de produto digital, nao de escritorio de arquitetura autoral. A LAR precisa de uma cadencia editorial, nao comercial.

- **Fonte Manrope (geometrica):** Manrope e uma sans-serif geometrica contemporanea que funciona bem para tech/design mas carece da personalidade necessaria para comunicar "arquitetura como linguagem e cultura". E neutra demais para um escritorio que se posiciona como investigativo e poetico.

- **Grid de 3 colunas para servicos:** Essa estrutura equipara itens em importancia e cria uma leitura rapida, quase de e-commerce. Os diferenciadores da LAR ("Investigacao antes de forma", "A obra responde ao lugar", "Espacos que comunicam identidade") merecem tratamento mais editorial -- possivelmente sequencial, com cada bloco ocupando largura total e mais espaco vertical.

- **Footer denso com multiplas colunas:** O footer do OSPA e informacionalmente denso, adequado para uma empresa multi-produto. A LAR precisa de um footer limpo e minimal -- navegacao, contato, redes, copyright. Nada mais.

- **Marquee infinito de logos:** Um padrão que comunica volume de clientes ou parcerias, mais adequado para agencias ou studios de design. A LAR nao precisa de prova social por volume -- precisa de profundidade (publicacoes, projetos autorais, tempo de atuacao).

**Padroes de design extraidos:**
- **Cores:** Off-white quente (#fafaf8 aproximado) + quase-preto (#1a1a1a aproximado) + cinzas intermediarios. Monocromatico puro, sem cores de acento.
- **Tipografia:** Manrope, weight 300-500, line-height 1.33, sem uppercase em titulos.
- **Layout:** Full-screen por secao, cards com cantos arredondados, 3 colunas para conteudo paralelo.
- **Motion:** CSS puro (sem bibliotecas), cubic-bezier(0.4, 0, 0.2, 1), 0.3s-0.7s, fade + translate.
- **Botoes:** Ghost/outline, pill shape (border-radius 20px), borda 1px cinza, texto cinza, weight 300.

---

## Padroes Extraidos

Com apenas uma referencia analisada, esta secao substitui a analise cruzada convencional. Os padroes abaixo sao extraidos do OSPA e avaliados individualmente quanto a sua aplicabilidade ao projeto LAR.

### Padroes confirmados para uso
| Padrao | Origem | Aplicabilidade LAR |
|--------|--------|-------------------|
| Paleta monocromatica off-white/preto | OSPA | Alta -- comunica sobriedade intelectual sem frieza |
| Peso tipografico leve (300-500) | OSPA | Alta -- transmite refinamento e confianca |
| Easing cubic-bezier(0.4, 0, 0.2, 1) | OSPA | Alta -- intencional sem ser chamativo |
| Ausencia de icones decorativos | OSPA | Alta -- alinhado com conteudo editorial forte |
| Botoes ghost/pill | OSPA | Alta -- convite discreto, nao comando |
| Duracoes de animacao 0.3s-0.7s | OSPA | Media-alta -- adequado para transicoes UI, insuficiente para motion poetico |

### Padroes rejeitados
| Padrao | Origem | Motivo da rejeicao |
|--------|--------|-------------------|
| Scroll hijacking | OSPA | Contraria autonomia do usuario e cadencia editorial |
| Grid de 3 colunas para conteudo | OSPA | Cadencia de e-commerce, nao editorial |
| Marquee infinito | OSPA | Comunica volume, nao profundidade |
| Footer denso | OSPA | Excesso informacional para site single-purpose |
| Fonte geometrica (Manrope) | OSPA | Neutra demais para posicionamento autoral |

### Lacunas nao cobertas pela referencia
Estas sao areas criticas para o projeto LAR que o OSPA nao demonstra e que devem ser resolvidas na fase de design specs:

1. **Tipografia editorial/serif:** A LAR precisa de uma voz tipografica com personalidade. O OSPA usa sans-serif geometrica pura. Para um escritorio que fala em "narrativa espacial" e "poesia", e necessario pelo menos um par tipografico que inclua uma serif editorial ou transicional.

2. **Layout com respiro e scroll nativo:** O OSPA aprisiona o conteudo em telas fixas. A LAR precisa de uma pagina que flui naturalmente, com generoso espaco em branco entre secoes, permitindo que o silencio visual "respire" (como indicado no copy.md: "deixar o silencio respirar").

3. **Apresentacao de portfolio com imagens grandes:** O OSPA nao demonstra tratamento de fotografia arquitetonica em grande escala. A secao de projetos da LAR ("o visual dos projetos carrega o peso") exige imagens que dominem o viewport -- possivelmente full-bleed ou com margens minimas.

4. **Tratamento de manifesto/bloco filosofico:** O OSPA nao possui equivalente ao bloco de manifesto da LAR. Esse e um momento tipografico critico: texto corrido em tamanho generoso, possivelmente em serif, com espacamento que convide a leitura contemplativa.

5. **Motion poetico e cinematografico:** As animacoes do OSPA sao funcionais (fade + translate). A LAR precisa de momentos de motion que sejam narrativos -- revelacoes lentas de imagens de projeto, transicoes entre secoes que sugiram "passagem de tempo", parallax sutil que de profundidade espacial.

6. **Depoimentos discretos:** O OSPA nao demonstra tratamento de testimonials. A LAR precisa de um formato que trate depoimentos como citacoes literarias -- aspas grandes, nome discreto, sem foto de perfil, sem estrelas.

---

## Direcao Recomendada

A sintese abaixo combina os padroes validos extraidos do OSPA com respostas especificas para as lacunas identificadas. Esta direcao deve guiar a fase de design specs.

### Estetica Geral

**Editorial-arquitetonico com sobriedade poetica.**

O site da LAR deve ler-se como uma publicacao de arquitetura, nao como um site comercial. A cadencia e a de uma revista: blocos de texto com espacamento generoso, imagens que dominam o campo visual, transicoes que sugerem virar paginas. O tom e de galeria silenciosa -- a obra fala, o site emoldura.

A referencia do OSPA fornece a base cromatica e o principio de contencao (sem excesso, sem decoracao). O que falta ao OSPA -- e que define a LAR -- e a dimensao editorial e poetica: tipografia com carater, imagens com escala, ritmo com respiro.

### Tipografia

**Direcao: Par tipografico serif editorial + sans-serif humanista.**

O OSPA confirma que peso leve (300-500) e line-height generoso (1.33+) sao o caminho correto. Mas a Manrope deve ser substituida.

- **Titulos e manifesto:** Serif editorial ou transicional. Opcoes a explorar na fase de specs: serifs com personalidade arquitetonica (nao decorativas, nao classicas demais). O peso deve permanecer leve (300-400) para manter a elegancia do OSPA sem a neutralidade geometrica.
- **Corpo e navegacao:** Sans-serif humanista (nao geometrica). Algo com mais calor que Manrope mas igualmente legivel. Weight 300-400 para corpo, 500 para enfase.
- **Manifesto:** Tratamento tipografico especial -- possivelmente serif em tamanho maior que o corpo padrao, com line-height ainda mais generoso (1.5-1.6), criando um momento de pausa e contemplacao.
- **Numeros de prova social:** Tabular, discretos, possivelmente na sans-serif em peso 300. Nao heroicos.
- **Uppercase:** Usar com extrema moderacao -- possivelmente apenas em labels de navegacao ou categorias de projeto, nunca em titulos.

### Paleta de Cores

**Direcao: Monocromatica quente, herdada do OSPA com ajustes minimos.**

A paleta do OSPA e quase perfeita para a LAR. Refinar:

- **Fundo principal:** Off-white quente. Nao branco puro (#fff), nao creme. O OSPA acerta com oklch 0.985 -- um branco que tem temperatura sem ter cor. Manter essa abordagem.
- **Texto principal:** Quase-preto quente. Nao preto puro (#000). O OSPA usa oklch 0.21 -- adequado. Garantir que o preto tenha a mesma temperatura quente do fundo.
- **Texto secundario:** Cinza intermediario para subtitulos, descricoes de projeto, labels. Deve ser visivelmente mais leve que o texto principal mas completamente legivel.
- **Bordas e separadores:** Cinza muito leve, quase imperceptivel. Separacao por espacamento e preferivel a linhas, mas quando necessario (accordion do FAQ, por exemplo), a linha deve ser discreta.
- **Secoes escuras (inversao):** Fundo quase-preto com texto off-white para momentos de contraste. Usar com parcimonia -- possivelmente apenas no manifesto ou no CTA final, criando "respiro visual" por inversao. O OSPA demonstra essa tecnica com sucesso.
- **Sem cores de acento:** A LAR nao precisa de cor de marca alem do monocromatico. A fotografia dos projetos fornece toda a cor necessaria. Introduzir uma cor de acento competiria com as imagens e reduziria a sobriedade.

### Layout

**Direcao: Vertical editorial com scroll nativo, imagens full-bleed, respiro generoso.**

- **Scroll:** Nativo, sem hijacking. O usuario controla a velocidade. A pagina recompensa o scroll lento com revelacoes progressivas, mas nao pune o scroll rapido.
- **Largura do conteudo textual:** Contida (max-width entre 720-900px para texto corrido). Titulos podem ser mais largos. Imagens podem ser full-bleed (100vw) ou quase full-bleed com margens minimas.
- **Secao Hero:** Imagem de projeto em tela cheia como fundo. Titulo curto ("Cada projeto, uma resposta. Nunca uma formula.") sobreposto com contraste suficiente. CTA discreto. A imagem faz o trabalho pesado.
- **Secao Manifesto:** Bloco de texto centralizado, sem imagem de fundo. Tipografia serif em tamanho generoso. Possivelmente com fundo escuro (inversao) para marcar a transicao de tom.
- **Secao Projetos:** Galeria com imagens grandes -- cada projeto ocupando a maior parte do viewport. Nao grid denso. Transicao entre projetos com espaco generoso. Nome + conceito em uma linha abaixo ou sobre a imagem.
- **Secao Diferenciadores:** Sequencial e vertical, nao em grid de 3 colunas. Cada diferenciador ocupa largura total com espaco entre eles. Titulo + paragrafo, sem cards com borda.
- **Secao Processo:** Timeline vertical ou horizontal numerada. 5 etapas com tratamento tipografico claro (numero grande + titulo + descricao curta). Linear e progressiva.
- **Secao Depoimentos:** Citacao centralizada, uma por vez (carousel minimo ou empilhado). Aspas como elemento tipografico decorativo. Nome e contexto em tamanho pequeno abaixo.
- **FAQ:** Accordion com animacao suave. Sem bordas agressivas -- separacao por espaco ou linha hairline.
- **Footer:** Minimal. Uma linha de navegacao, contato, redes. Copyright. Nada mais.
- **Espacamento entre secoes:** Generoso (minimo 120-160px em desktop). O silencio entre secoes e parte da linguagem.

### Motion

**Direcao: Poetico e cinematografico, nao funcional.**

O OSPA fornece a base tecnica (CSS puro, easing suave), mas a LAR precisa de motion com intencao narrativa:

- **Easing base:** Manter cubic-bezier(0.4, 0, 0.2, 1) do OSPA para transicoes UI (hover, accordion, navegacao).
- **Easing para revelacoes de conteudo:** Mais lento e expressivo. cubic-bezier(0.16, 1, 0.3, 1) ou similar -- entrada suave com desaceleracao longa. Duracao 0.8s-1.2s para elementos de conteudo que entram no viewport.
- **Imagens de projeto:** Revelacao com clip-path ou mascara que "abre" a imagem progressivamente, como uma cortina ou uma pagina. Nao apenas fade. Duracao mais longa (1s-1.5s).
- **Texto do manifesto:** Entrada palavra-por-palavra ou linha-por-linha e uma opcao poetica, mas deve ser sutil e nao bloquear a leitura. Alternativa mais segura: fade + translate sutil do bloco inteiro.
- **Parallax:** Sutil e apenas em imagens de projeto. Profundidade de 5-15% no maximo. Nunca em texto.
- **Scroll-triggered animations:** Elementos entram conforme o usuario rola. Intersection Observer com thresholds generosos (trigger quando 20-30% do elemento esta visivel). Sem repeticao -- animacao acontece uma vez.
- **Hover states:** Minimos e precisos. Mudanca de opacidade (0.7-1) ou translate sutil (2-4px) em links e botoes. Transicao 0.3s.
- **Cursor personalizado:** Nao recomendado. Adiciona complexidade sem valor para o posicionamento.
- **Implementacao:** CSS puro para transicoes UI. Para motion narrativo (revelacao de imagens, scroll-triggered), avaliar necessidade de biblioteca leve na fase de specs. Evitar GSAP/Framer Motion se possivel, mas nao ao custo de sacrificar a qualidade do motion.

### O que Definitivamente Evitar

1. **Scroll hijacking ou snap scrolling.** Respeitar a autonomia do usuario e uma extensao do principio de "escuta" da LAR.
2. **Icones genericos.** Lampadas, engrenagens, setas em circulos. O conteudo textual da LAR e forte o suficiente sozinho.
3. **Grid de cards para tudo.** Nem tudo deve ser igualado em importancia. O manifesto nao e um card. Um diferenciador nao e um card igual ao outro. Hierarquia visual e fundamental.
4. **Cores vibrantes ou gradientes.** A fotografia dos projetos e a unica fonte de cor. O site e a moldura, nao a obra.
5. **Tipografia geometrica pura.** Manrope, Inter, Poppins -- sao neutras demais para um escritorio que se posiciona como autoral.
6. **Animacoes de loading ou splash screens.** Impaciencia nao combina com o publico, mas artificialidade de "espere pela experiencia" tambem nao.
7. **Hamburger menu em desktop.** Navegacao deve ser visivel e acessivel. O menu e simples (4-5 itens).
8. **Fotos de equipe sorrindo.** O site e sobre a obra, nao sobre os arquitetos. Se houver foto da equipe, deve ser tao cuidada quanto a fotografia de projeto.
9. **Numeros heroicos.** "500+ projetos" em tamanho gigante e linguagem de SaaS. Os numeros da LAR devem ser discretos e significativos.
10. **Efeitos de glassmorphism, neumorphism, ou qualquer tendencia de UI.** O site deve envelhecer bem. Tendencias datam rapidamente.
11. **Marquee ou carrossel automatico de logos.** A LAR nao comunica volume. Comunica profundidade.
12. **Footer denso ou mega-footer.** O site e single-purpose. O footer e um encerramento silencioso, nao um segundo menu.

---

*Este documento serve como material de pesquisa para a fase de design specs. Nenhuma decisao de design system esta sendo definida aqui -- apenas direcoes baseadas em analise de referencia e posicionamento do projeto.*
