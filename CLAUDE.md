# Sistema visual — Site AssessorTech

## Marca
- Logo: símbolo "a" minúsculo com balão de fala interno + 3 pontos.
- Metáfora dupla: **conversa** (proximidade) + **dados/insight** (3 pontos = pontos de dado).
- Cores oficiais: **#3374BB** (primária) | **#97C93B** (secundária).

## Posicionamento
"Traduzimos regra de negócio em tecnologia que gera resultados."
Desde 2019. Atendemos indústrias de pequeno, médio e grande porte.

## Tom de voz
- Confiante e direto, sem floreios.
- Próximo e humano.
- Não vendemos "transformação digital"; resolvemos problema com pessoas que entendem o negócio.

## Tipografia (em uso, conferida no `<head>`)
- **Inter Tight** — sans neutra, corpo + UI + títulos.
- **Lora (italic 400/500)** — serif editorial nos acentos ("experiência", "traduz", "responde", etc).
- **Crimson Pro (italic 400/500)** — serif para numeração (`01`, `02`… nos passos da metodologia e diferenciais).
- **Geist Mono** — etiquetas, eyebrows, números técnicos (R$, %, datas).
- Sem Inter, Roboto ou system-ui como fallback display — só como último fallback.

## Cores (tokens em `shared.jsx`)
| Token | Valor | Uso |
|---|---|---|
| `paper` | `#FAFAF7` | Fundo dominante |
| `ink` | `#0E1116` | Texto principal, blocos escuros (Benefícios) |
| `inkSoft` | `rgba(14,17,22,.66)` | Texto secundário |
| `inkMuted` | `rgba(14,17,22,.45)` | Texto terciário, etiquetas |
| `rule` | `rgba(14,17,22,.10)` | Linhas divisórias |
| `primary` | `#3374BB` | Acento azul — CTA, numeração, eyebrow ativo |
| `primaryDeep` | `#1F4F87` | Hover/variantes |
| `accent` | `#97C93B` | Verde — sublinhados, badges, micro-destaques |
| `card` | `#FFFFFF` | Cards e seções alternadas |

## Princípios visuais
1. Papel (`#FAFAF7`) domina. Azul como bloco em momentos-chave. Verde só em pontos.
2. Tipografia GIGANTE no hero e nos manifestos (`clamp(40-56px, vw, 132px)`). Sem timidez.
3. Padding lateral fluido: `clamp(20px, 5vw, 56px)` em todas as seções.
4. Movimento = entrada em scroll (`Reveal`), count-up em números, hovers ricos. Nada gratuito.
5. Sem stock photo. Placeholders honestos onde faltarem assets reais.

## Estrutura do site

**Páginas:**
- `index.html` — home (uma página, scrollytelling)
- `projetos.html` — galeria de demos Power BI com índice sticky
- `privacidade.html` — política LGPD
- `404.html` — página de erro

**Home (ordem fixa):**
1. **Nav** sticky (transparente → vidro com blur ao scrollar)
2. **Hero** — manifesto tipográfico + 2 CTAs + mockup dashboard
3. **Conexões** — frase "qualquer sistema, qualquer fonte" + carrossel infinito de 18 logos
4. **Manifesto (Sobre nós)** — headline + 3 KPIs (100+ clientes, 25+ sistemas, 2019)
5. **Diferenciais** — 4 cards (postura, não features)
6. **Metodologia** — 5 passos (Levantamento → Modelagem → Desenvolvimento → Validação → Suporte)
7. **Benefícios** — bloco escuro (`ink`), 3 cards
8. **Segmentos** — grid de 8 áreas (cards clicáveis levam a `#contato`)
9. **Contato** — 4 cards de info + form (Web3Forms)
10. **Footer**

## Arquitetura técnica
- **Source:** `site/*.jsx` (sem Babel em produção)
- **Build:** bundle pré-compilado em `dist/bundle.js`
- **Regra de ouro:** alterações nos JSX **devem** ser replicadas no bundle.js em paralelo. JSX é a fonte canônica, bundle é o espelho que o navegador carrega.
- HTMLs (index, projetos, privacidade, 404) são editadas à mão e carregam `dist/bundle.js` direto.

## Responsividade mobile (estratégia em 2 camadas)
**Camada 1 — Fluido (nos JSX/bundle):**
- Paddings, gaps, fontes usam `clamp(min, vw, max)` — respiram continuamente.
- Em desktop os clamps batem no `max` → valores idênticos ao design original.

**Camada 2 — Estrutural (`<style id="mobile-overrides">` em cada HTML):**
- Bloco `@media (max-width: 768px) { ... !important }` em `index.html`, `projetos.html`, `privacidade.html`.
- Colapsa grids 2+ col → 1 col (Hero, Contato, Metodologia, etc).
- Segmentos vira 2 cols, Manifesto stats fica 3 cols com fonte reduzida.
- Nav: links inline (`.nav-links`) escondidos, hambúrguer (`.nav-burger`) aparece → abre drawer full-screen.
- Footer: pilha vertical centrada.

**Breakpoint único:** 768px. Mantém simples.

## Convenções de copywriting
- Eyebrows sempre em uma palavra ou frase curta, monospace, uppercase, letter-spacing `0.08em`.
- Manchetes com palavra-chave em *itálico serifa* + cor primária (`Lora italic` em azul).
- Números grandes usam `Crimson Pro italic` (numeração de seções).
- Tom direto: "A gente entrega", "Conta o problema", "Pode clicar".

## Formulário de contato
- Web3Forms endpoint (`api.web3forms.com/submit`)
- Access key pública no JSX (OK ficar exposto, é design do serviço)
- Honeypot anti-bot (`botcheck`)
- Estados: `idle | sending | success | error`
