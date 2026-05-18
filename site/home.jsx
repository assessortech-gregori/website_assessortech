// Página principal (home) — todas as seções + wrapper Home.
// Composto na ordem: Hero → Clientes → Manifesto → Diferenciais →
// Metodologia → Benefícios → Segmentos → Contato.

// ─── HERO ────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" style={{
      padding: 'clamp(40px, 6vw, 64px) clamp(20px, 5vw, 56px) clamp(72px, 12vw, 120px)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: tokens.sans
    }}>
      {/* Grid de fundo discreto */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(to right, rgba(14,17,22,.04) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(14,17,22,.04) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        backgroundPosition: 'center top',
        WebkitMaskImage: 'linear-gradient(180deg, black, black 60%, transparent 100%)',
        maskImage: 'linear-gradient(180deg, black, black 60%, transparent 100%)'
      }} />

      <style>{`
        @keyframes heroLineUp { to { transform: translateY(0); } }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-line-mask { display: block; overflow: hidden; padding-bottom: 0.12em; margin-bottom: -0.12em; }
        .hero-line-mask > span {
          display: inline-block;
          transform: translateY(110%);
          animation: heroLineUp 1.1s cubic-bezier(.2,.8,.2,1) forwards;
        }
        .hero-line-mask:nth-child(1) > span { animation-delay: .15s; }
        .hero-line-mask:nth-child(2) > span { animation-delay: .3s; }
        .hero-line-mask:nth-child(3) > span { animation-delay: .45s; }
        .hero-fade { opacity: 0; animation: heroFadeUp 1s .9s forwards; }
      `}</style>

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
        <h1 style={{
          margin: 0,
          fontSize: 'clamp(40px, 8vw, 132px)',
          lineHeight: 0.92,
          letterSpacing: '-0.04em',
          fontWeight: 500,
          color: tokens.ink
        }}>
          <span className="hero-line-mask"><span>Inteligência de dados</span></span>
          <span className="hero-line-mask"><span>com{' '}
            <span style={{ fontFamily: tokens.serif, fontStyle: 'italic', color: tokens.primary, fontWeight: 500 }}>
              experiência
            </span>
          </span></span>
          <span className="hero-line-mask"><span>de negócio.</span></span>
        </h1>

        <div className="hero-fade" style={{
          marginTop: 'clamp(32px, 5vw, 56px)',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 'clamp(28px, 6vw, 80px)',
          alignItems: 'end'
        }}>
          <p style={{
            fontSize: 22, lineHeight: 1.4, color: tokens.inkSoft,
            maxWidth: 620, margin: 0, letterSpacing: '-0.005em'
          }}>
            Traduzimos a regra do seu negócio em dashboards e indicadores que apoiam decisão.
            Independente do sistema, buscamos os dados e devolvemos clareza —
            sem projetos longos, em pequenas entregas constantes.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="#contato" style={{
              fontSize: 15, fontWeight: 500,
              padding: '14px 22px', borderRadius: 999,
              background: tokens.primary, color: '#fff',
              textDecoration: 'none',
              transition: 'transform .2s, box-shadow .2s',
              boxShadow: '0 1px 0 rgba(0,0,0,.04)'
            }}
            onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-2px)';e.currentTarget.style.boxShadow = `0 8px 24px ${tokens.primary}40`;}}
            onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)';e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,.04)';}}>
              Começar um projeto</a>
            <a href="#metodologia" style={{
              fontSize: 15, fontWeight: 500,
              padding: '14px 22px', borderRadius: 999,
              background: 'transparent', color: tokens.ink,
              textDecoration: 'none',
              border: `1px solid ${tokens.rule}`,
              transition: 'background .15s, border-color .15s'
            }}
            onMouseEnter={(e) => {e.currentTarget.style.background = tokens.card;e.currentTarget.style.borderColor = 'rgba(14,17,22,.2)';}}
            onMouseLeave={(e) => {e.currentTarget.style.background = 'transparent';e.currentTarget.style.borderColor = tokens.rule;}}>
              Como trabalhamos</a>
          </div>
        </div>

        {/* dashboard mockup flutuante */}
        <Reveal delay={400}>
          <div style={{ marginTop: 'clamp(56px, 8vw, 96px)', position: 'relative' }}>
            <HeroMockup />
          </div>
        </Reveal>
      </div>
    </section>);

}

function HeroMockup() {
  // Mockup honesto de dashboard: barras + linha + KPIs
  const bars = [42, 68, 51, 78, 64, 88, 72, 95, 84, 102, 91, 118];
  return (
    <div style={{
      background: tokens.card,
      borderRadius: 14,
      border: `1px solid ${tokens.rule}`,
      boxShadow: '0 1px 0 rgba(0,0,0,.02), 0 24px 56px -20px rgba(14,17,22,.18)',
      padding: 'clamp(20px, 3vw, 28px)',
      maxWidth: 1240,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 'clamp(16px, 3vw, 24px)',
      fontFamily: tokens.sans
    }}>
      {/* KPI 1 */}
      <div style={{ borderRight: `1px solid ${tokens.rule}`, paddingRight: 24 }}>
        <div style={{ fontSize: 12, color: tokens.inkMuted, fontFamily: tokens.mono, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Receita · YTD</div>
        <div style={{ fontSize: 44, letterSpacing: '-0.03em', fontWeight: 500, marginTop: 6, color: tokens.ink }}>
          R$ <CountUp to={48.2} suffix="M" duration={3000} />
        </div>
        <div style={{ fontSize: 13, color: tokens.accent === '#97C93B' ? '#5e8a1f' : tokens.accent, marginTop: 4, fontWeight: 500 }}>
          ↑ 12,4% vs. ano anterior
        </div>
        <svg viewBox="0 0 240 60" style={{ width: '100%', marginTop: 18 }}>
          <path d="M0,45 C30,42 50,38 80,32 S140,18 180,12 S230,8 240,6"
          fill="none" stroke={tokens.primary} strokeWidth="2" />
          <path d="M0,45 C30,42 50,38 80,32 S140,18 180,12 S230,8 240,6 L240,60 L0,60 Z"
          fill={tokens.primary} fillOpacity="0.08" />
        </svg>
      </div>
      {/* Bar chart */}
      <div style={{ borderRight: `1px solid ${tokens.rule}`, paddingRight: 24 }}>
        <div style={{ fontSize: 12, color: tokens.inkMuted, fontFamily: tokens.mono, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Margem por Mês</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 130, marginTop: 18 }}>
          {bars.map((h, i) =>
          <div key={i} style={{
            flex: 1,
            height: `${h}%`,
            background: i === 9 ? tokens.primary : i === 11 ? tokens.accent : 'rgba(51,116,187,.18)',
            borderRadius: '3px 3px 0 0',
            transition: 'opacity .2s'
          }} />
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 10, color: tokens.inkMuted, fontFamily: tokens.mono }}>
          <span>JAN</span><span>ABR</span><span>JUL</span><span>OUT</span><span>DEZ</span>
        </div>
      </div>
      {/* Lista */}
      <div>
        <div style={{ fontSize: 12, color: tokens.inkMuted, fontFamily: tokens.mono, letterSpacing: '0.06em', textTransform: 'uppercase' }}>INDICADORES</div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 12 }}>
          {[
          ['Receita — mês atual', 'R$ 4,1M', 'up'],
          ['Margem bruta', '38,2%', 'up'],
          ['Inadimplência', '2,1%', 'down'],
          ['Ticket médio', 'R$ 1.840', 'up'],
          ['Custo por hora', 'R$ 142', 'flat']].
          map(([label, val, dir]) =>
          <div key={label} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '10px 0', borderBottom: `1px solid ${tokens.rule}`,
            fontSize: 14
          }}>
              <span style={{ color: tokens.inkSoft }}>{label}</span>
              <span style={{
              fontFamily: tokens.mono, color: dir === 'up' ? '#5e8a1f' : dir === 'down' ? '#b3433a' : tokens.ink,
              fontSize: 13, fontWeight: 500
            }}>{val}</span>
            </div>
          )}
        </div>
      </div>
    </div>);

}

// V1 — meio: faixa de prova, manifesto, diferenciais

function Clientes() {
  // 18 logos em site/img/logos/. Os arquivos têm prefixo "logo-" (ex: logo-chandon.png).
  // Pra adicionar/remover/reordenar: edite só este array.
  const logos = [
    { slug: 'giordani',      nome: 'Giordani Turismo' },
    { slug: 'chandon',       nome: 'Chandon' },
    { slug: 'tecnovin',      nome: 'Tecnovin' },
    { slug: 'caderode',      nome: 'Caderode' },
    { slug: 'robopac',       nome: 'Robopac' },
    { slug: 'bepo',          nome: 'Bepo' },
    { slug: 'ultragaz',      nome: 'Ultragaz' },
    { slug: 'neogas',        nome: 'NEOgas' },
    { slug: 'gebb-work',     nome: 'Gebb Work' },
    { slug: 'toli',          nome: 'Toli Distribuidora' },
    { slug: 'ramarim',       nome: 'Calçados Ramarim' },
    { slug: 'rexfort',       nome: 'Rexfort' },
    { slug: 'jopemar',       nome: 'Jopemar' },
    { slug: 'express',       nome: 'Express Restaurantes' },
    { slug: 'fva',           nome: 'FVA' },
    { slug: 'sular',         nome: 'Sular Móveis' },
    { slug: 'irapuru',       nome: 'Irapuru Transportes' },
    { slug: 'control-tech',  nome: 'Control Tech' },
  ];

  // Duplica a lista pra criar o efeito de loop infinito sem corte visual
  const logosLoop = [...logos, ...logos];

  return (
    <section style={{
      padding: 'clamp(48px, 8vw, 64px) clamp(20px, 5vw, 56px)',
      borderTop: `1px solid ${tokens.rule}`,
      borderBottom: `1px solid ${tokens.rule}`,
      background: tokens.card,
      fontFamily: tokens.sans,
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes logosScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .logos-track {
          display: flex;
          gap: 64px;
          align-items: center;
          width: max-content;
          animation: logosScroll 70s linear infinite;
        }
        .logos-mask:hover .logos-track {
          animation-play-state: paused;
        }
        .logo-item {
          flex-shrink: 0;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.55;
          filter: grayscale(100%);
          transition: opacity .25s ease, filter .25s ease;
        }
        .logo-item:hover {
          opacity: 1;
          filter: grayscale(0%);
        }
        .logo-item img {
          max-height: 100%;
          max-width: 160px;
          width: auto;
          height: auto;
          display: block;
          object-fit: contain;
        }
        @media (prefers-reduced-motion: reduce) {
          .logos-track { animation: none; }
        }
      `}</style>

      <div style={{
        display: 'grid', gridTemplateColumns: '280px 1fr', gap: 'clamp(32px, 6vw, 80px)', maxWidth: 1240, margin: '0 auto', alignItems: 'start'
      }}>
        <div>
          <div style={{ fontSize: 12, color: tokens.inkMuted, fontFamily: tokens.mono, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Conexões
          </div>
          
          <p style={{ fontSize: 'clamp(17px, 4.2vw, 22px)', lineHeight: 1.35, margin: '14px 0 0', color: tokens.ink, letterSpacing: '-0.01em', overflowWrap: 'break-word' }}>
            Qualquer sistema. Qualquer fonte.{' '}
            <span style={{ color: tokens.inkSoft }}>Garimpamos o dado onde ele estiver.</span>
          </p>
        </div>

        <div>
          <div style={{ fontSize: 12, color: tokens.inkMuted, fontFamily: tokens.mono, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 28 }}>
            Clientes
          </div>

          <div className="logos-mask" style={{
            position: 'relative',
            overflow: 'hidden',
            WebkitMaskImage: `linear-gradient(90deg, transparent 0, black 60px, black calc(100% - 60px), transparent 100%)`,
            maskImage: `linear-gradient(90deg, transparent 0, black 60px, black calc(100% - 60px), transparent 100%)`
          }}>
            <div className="logos-track">
              {logosLoop.map((logo, i) => (
                <div key={`${logo.slug}-${i}`} className="logo-item" title={logo.nome}>
                  <img src={`site/img/clientes/logo-${logo.slug}.png`} alt={logo.nome} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="sobre" style={{
      padding: 'clamp(96px, 14vw, 160px) clamp(20px, 5vw, 56px) clamp(80px, 12vw, 140px)', fontFamily: tokens.sans
    }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 12, color: tokens.inkMuted, fontFamily: tokens.mono, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Sobre nós
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h2 style={{
            margin: '24px 0 0',
            fontSize: 'clamp(40px, 5.6vw, 84px)',
            lineHeight: 1.02, letterSpacing: '-0.03em', fontWeight: 500, color: tokens.ink, maxWidth: 1100
          }}>
            Sua empresa tem dados.<br />
            A gente <span style={{ fontFamily: tokens.serif, fontStyle: 'italic', fontWeight: 500, color: tokens.primary }}>traduz</span>{' '}
            em decisões que geram <span style={{ textDecoration: 'underline', textDecorationColor: tokens.accent, textDecorationThickness: 6, textUnderlineOffset: 8 }}>resultados</span>.
          </h2>
        </Reveal>
        <Reveal delay={260}>
          <div style={{ marginTop: 'clamp(40px, 6vw, 64px)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(12px, 3vw, 48px)', borderTop: `1px solid ${tokens.rule}`, paddingTop: 'clamp(24px, 4vw, 40px)' }}>
            <Stat number={100} suffix="+" label="Clientes atendidos" />
            <Stat number={25} suffix="+" label="Sistemas integrados" />
            <Stat number={2019} label="Atuamos desde" />
          </div>
        </Reveal>
      </div>
    </section>);

}

function Stat({ number, label, suffix = '' }) {
  return (
    <div>
      <div style={{ fontSize: 'clamp(34px, 6.5vw, 64px)', lineHeight: 1, letterSpacing: '-0.03em', fontWeight: 500, color: tokens.ink, fontFamily: tokens.sans }}>
        {typeof number === 'number' ? <CountUp to={number} suffix={suffix} /> : number}
      </div>
      <div style={{ marginTop: 'clamp(6px, 1.2vw, 10px)', fontSize: 'clamp(11px, 2vw, 14px)', color: tokens.inkSoft }}>{label}</div>
    </div>);

}

function Diferenciais() {
  const items = [
  {
    n: '01', title: 'Bagagem de negócio,\nnão só de código.',
    body: 'Nossos sócios vieram da contabilidade e da implantação de sistemas antes de entrar em BI. Falamos DRE, plano de contas, regime tributário, fechamento. Você não precisa traduzir o problema pra gente.',
    tag: 'POSTURA'
  },
  {
    n: '02', title: 'Conhecimento real\nde regra industrial.',
    body: 'Atendemos indústrias de vários ramos e sabemos como o chão de fábrica, o financeiro e o fiscal se conectam. A gente entende o que o número significa antes de modelar.',
    tag: 'POSTURA'
  },
  {
    n: '03', title: 'Pequenas entregas,\nconstantes.',
    body: 'A gente entrega em ciclos curtos. O resultado aparece em semanas, não em meses. Você valida no caminho — sem chegar no fim do projeto e descobrir que precisa mudar tudo.',
    tag: 'RITMO'
  },
  {
    n: '04', title: 'Atendimento direto\ncom quem executa.',
    body: 'Sem camadas de gerente de conta. Solução desenhada para a sua operação, não pacote pronto empurrado. Se precisar, vamos até você.',
    tag: 'PROXIMIDADE'
  }];

  return (
    <section id="diferenciais" style={{
      padding: 'clamp(80px, 12vw, 120px) clamp(20px, 5vw, 56px)',
      background: tokens.card,
      borderTop: `1px solid ${tokens.rule}`,
      borderBottom: `1px solid ${tokens.rule}`,
      fontFamily: tokens.sans
    }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(40px, 6vw, 64px)', gap: 'clamp(24px, 4vw, 40px)', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 12, color: tokens.inkMuted, fontFamily: tokens.mono, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                O que nos torna únicos
              </div>
              <h2 style={{ margin: '20px 0 0', fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1, letterSpacing: '-0.03em', fontWeight: 500, color: tokens.ink }}>
                Diferenciais que<br />são <span style={{ fontFamily: tokens.serif, fontStyle: 'italic', fontWeight: 500, color: "rgb(51, 116, 187)" }}>postura</span>, não tópicos.
              </h2>
            </div>
            <p style={{ fontSize: 16, color: tokens.inkSoft, maxWidth: 360, margin: 0, lineHeight: 1.5 }}>
              Cada projeto reflete a realidade de cada cliente. Por isso o nosso jeito de trabalhar começa antes do primeiro dashboard.
            </p>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderTop: `1px solid ${tokens.rule}`, borderLeft: `1px solid ${tokens.rule}` }}>
          {items.map((it, i) => <DiffCard key={it.n} {...it} delay={i * 80} />)}
        </div>
      </div>
    </section>);

}

function DiffCard({ n, title, body, tag, delay }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Reveal delay={delay} style={{ height: '100%' }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          padding: 'clamp(32px, 5vw, 48px) clamp(24px, 4vw, 40px) clamp(28px, 5vw, 44px)',
          borderRight: `1px solid ${tokens.rule}`,
          borderBottom: `1px solid ${tokens.rule}`,
          background: hover ? tokens.paper : tokens.card,
          transition: 'background .2s',
          position: 'relative',
          minHeight: 380,
          height: '100%',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
        }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{
            fontFamily: tokens.serifNumber, fontStyle: 'italic', fontWeight: 500,
            fontSize: 64, lineHeight: 1, color: hover ? tokens.primary : tokens.inkMuted,
            transition: 'color .25s'
          }}>{n}</div>
        </div>
        <div>
          <h3 style={{
            margin: '40px 0 16px', fontSize: 28, lineHeight: 1.1,
            letterSpacing: '-0.02em', fontWeight: 500, color: tokens.ink, whiteSpace: 'pre-line'
          }}>{title}</h3>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: tokens.inkSoft }}>{body}</p>
        </div>
      </div>
    </Reveal>);

}

// V1 — metodologia (com fluxo visual) + benefícios + segmentos (com ícones)

// ─── METODOLOGIA ───────────────────────────────────────────────
function Metodologia() {
  const steps = [
    { n: '01', title: 'Levantamento', body: 'Compreendemos os objetivos e desafios da sua empresa. Antes de uma linha de código, entendemos o negócio.', icon: 'discover' },
    { n: '02', title: 'Modelagem', body: 'Estruturamos e organizamos as informações. Limpeza, transformação e modelagem dos dados onde quer que estejam.', icon: 'model' },
    { n: '03', title: 'Desenvolvimento', body: 'Dashboards e relatórios visuais, intuitivos, desenhados para o seu fluxo de decisão.', icon: 'build' },
    { n: '04', title: 'Validação', body: 'Ajustes em conjunto com a equipe do cliente. Iteração rápida até fazer sentido pra quem vai usar.', icon: 'validate' },
    { n: '05', title: 'Suporte contínuo', body: 'Acompanhamento, evolução e aderência da solução ao longo do tempo. A gente fica.', icon: 'support' },
  ];
  return (
    <section id="metodologia" style={{ padding: 'clamp(96px, 14vw, 160px) clamp(20px, 5vw, 56px) clamp(80px, 12vw, 140px)', fontFamily: tokens.sans }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 12, color: tokens.inkMuted, fontFamily: tokens.mono, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Metodologia</div>
          <h2 style={{ margin: '20px 0 0', fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1, letterSpacing: '-0.03em', fontWeight: 500, color: tokens.ink, maxWidth: 900 }}>
            Cinco passos.<br />Repetidos com <span style={{ fontFamily: tokens.serif, fontStyle: 'italic', fontWeight: 500, color: tokens.primary }}>cuidado</span>{' '}em cada projeto.
          </h2>
        </Reveal>

        {/* Lista detalhada */}
        <div style={{ marginTop: 'clamp(48px, 8vw, 80px)', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 0 }}>
          {steps.map((s, i) => <Step key={s.n} {...s} first={i === 0} last={i === steps.length - 1} delay={i * 60} />)}
        </div>
      </div>
    </section>
  );
}

// Diagrama de fluxo SVG inline — 5 nós conectados, com ícones diagramáticos
function FlowDiagram({ steps }) {
  const [active, setActive] = React.useState(null);
  return (
    <div style={{
      marginTop: 64,
      padding: '56px 40px 40px',
      background: tokens.card,
      border: `1px solid ${tokens.rule}`,
      borderRadius: 16,
      position: 'relative',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, position: 'relative' }}>
        {/* Linha conectora pontilhada por trás */}
        <svg style={{ position: 'absolute', top: 36, left: '10%', right: '10%', width: '80%', height: 4, pointerEvents: 'none' }} viewBox="0 0 1000 4" preserveAspectRatio="none">
          <line x1="0" y1="2" x2="1000" y2="2" stroke={tokens.rule} strokeWidth="2" strokeDasharray="4 6" />
        </svg>
        {steps.map((s, i) => (
          <div
            key={s.n}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              cursor: 'default', position: 'relative',
            }}>
            <div style={{
              width: 72, height: 72, borderRadius: 999,
              background: active === i ? tokens.primary : tokens.paper,
              border: `1px solid ${active === i ? tokens.primary : tokens.rule}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all .25s',
              transform: active === i ? 'scale(1.08)' : 'scale(1)',
              boxShadow: active === i ? `0 8px 24px ${tokens.primary}30` : 'none',
              position: 'relative', zIndex: 2,
            }}>
              <FlowIcon name={s.icon} color={active === i ? '#fff' : tokens.primary} size={32} />
            </div>
            <div style={{
              fontFamily: tokens.mono, fontSize: 11, color: tokens.inkMuted, marginTop: 16, letterSpacing: '0.06em',
            }}>STEP / {s.n}</div>
            <div style={{
              fontSize: 16, fontWeight: 500, color: tokens.ink, marginTop: 4, letterSpacing: '-0.01em',
              transition: 'color .2s', textAlign: 'center',
            }}>{s.title}</div>
          </div>
        ))}
      </div>
      {/* Setinhas verdes entre os passos */}
      <div style={{
        position: 'absolute', top: 72, left: 0, right: 0,
        display: 'flex', justifyContent: 'space-around', pointerEvents: 'none',
      }}>
        {[0, 1, 2, 3].map(i => (
          <span key={i} style={{
            width: 0, height: 0,
            borderTop: '5px solid transparent',
            borderBottom: '5px solid transparent',
            borderLeft: `7px solid ${tokens.accent}`,
            marginLeft: `${20 * (i + 1)}%`,
            opacity: 0.6,
          }} />
        ))}
      </div>
    </div>
  );
}

function FlowIcon({ name, color, size = 28 }) {
  const s = { width: size, height: size, fill: 'none', stroke: color, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'discover': // 01 · A · conversa / balão
      return <svg {...s} viewBox="0 0 32 32"><path d="M4 8h17a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-9l-8 6V8z" /><path d="M9 12h10M9 16h7" /></svg>;
    case 'model': // 02 · D · camadas
      return <svg {...s} viewBox="0 0 32 32"><path d="M16 4l12 6-12 6L4 10z" /><path d="M4 16l12 6 12-6M4 22l12 6 12-6" /></svg>;
    case 'build': // 03 · A · tags / código
      return <svg {...s} viewBox="0 0 32 32"><path d="M11 8l-7 8 7 8M21 8l7 8-7 8M18 6l-4 20" /></svg>;
    case 'validate': // 04 · A · check simples em círculo
      return <svg {...s} viewBox="0 0 32 32"><circle cx="16" cy="16" r="11" /><path d="M11 16l4 4 6-8" /></svg>;
    case 'support': // 05 · A · headset suporte
      return <svg {...s} viewBox="0 0 32 32"><path d="M5 18v-2a11 11 0 0 1 22 0v2" /><rect x="3" y="18" width="6" height="8" rx="1.5" /><rect x="23" y="18" width="6" height="8" rx="1.5" /></svg>;
    default:
      return null;
  }
}

function Step({ n, title, body, icon, first, last, delay }) {
  return (
    <React.Fragment>
      <Reveal delay={delay} style={{ position: 'relative' }}>
        {!first && (
          <div className="step-chev" style={{
            display: 'flex', flexDirection: 'column', gap: 2,
            alignItems: 'flex-start',
            paddingLeft: 4,
            paddingTop: 20,
            color: tokens.primary,
          }}>
            <style>{`
              @keyframes chevCascade {
                0%, 100% { opacity: 0.25; }
                20% { opacity: 1; }
                60% { opacity: 0.25; }
              }
              .step-chev svg {
                animation: chevCascade 1.8s ease-in-out infinite;
                animation-delay: 0.25s;
              }
              .step-chev svg:nth-child(2) {
                animation-delay: 0s;
              }
            `}</style>
            <svg width="26" height="11" viewBox="0 0 24 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2l9 6 9-6" /></svg>
            <svg width="26" height="11" viewBox="0 0 24 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2l9 6 9-6" /></svg>
          </div>
        )}
        <div style={{
          paddingTop: first ? 38 : 14,
          display: 'flex', alignItems: 'center', gap: 16,
        }}>
          <div style={{
            fontFamily: tokens.serifNumber, fontStyle: 'italic', fontWeight: 500,
            fontSize: 64, lineHeight: 1, color: tokens.primary, letterSpacing: '-0.02em',
            width: 80, textAlign: 'left', flexShrink: 0,
          }}>{n}</div>
          <div style={{
            width: 44, height: 44, borderRadius: 10,
            background: `${tokens.primary}10`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <FlowIcon name={icon} color={tokens.primary} size={22} />
          </div>
        </div>
      </Reveal>
      <Reveal delay={delay + 40}>
        <div style={{
          padding: '32px 0 44px',
          borderTop: `1px solid ${tokens.rule}`,
          borderBottom: last ? `1px solid ${tokens.rule}` : 'none',
          display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 'clamp(24px, 4vw, 64px)', alignItems: 'baseline',
        }}>
          <h3 style={{ margin: 0, fontSize: 36, lineHeight: 1.05, letterSpacing: '-0.02em', fontWeight: 500, color: tokens.ink }}>{title}</h3>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, color: tokens.inkSoft, maxWidth: 560 }}>{body}</p>
        </div>
      </Reveal>
    </React.Fragment>
  );
}

// ─── BENEFÍCIOS ────────────────────────────────────────────────
function BenIcon({ name, color = '#97C93B' }) {
  const s = { width: 22, height: 22, fill: 'none', stroke: color, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'sun': // decisão clara — sol/raio
      return (
        <svg {...s} viewBox="0 0 24 24">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>);
    case 'clock': // tempo de volta — relógio
      return (
        <svg {...s} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>);
    case 'pulse': // visão do todo — gráfico/pulso
      return (
        <svg {...s} viewBox="0 0 24 24">
          <path d="M3 12h4l3-8 4 16 3-8h4" />
        </svg>);
    default: return null;
  }
}

function Beneficios() {
  const items = [
    {
      icon: 'sun',
      title: 'Decisão sem achismo.',
      body: <>Quando o número certo está na tela, a reunião muda. Pare de discutir <em>qual</em> dado é o real e comece a discutir <em>o que</em> fazer com ele.</>,
    },
    {
      icon: 'clock',
      title: 'Tempo de volta.',
      body: 'O time deixa de fechar planilha à mão toda semana. O relatório se atualiza sozinho, e as horas livres viram análise — não trabalho mecânico.',
    },
    {
      icon: 'pulse',
      title: 'Visão do todo.',
      body: 'Vendas, estoque, financeiro, produção — tudo conversando entre si. Em vez de comparar planilhas que não fecham, você enxerga o negócio inteiro.',
    },
  ];
  return (
    <section style={{ padding: 'clamp(80px, 12vw, 120px) clamp(20px, 5vw, 56px)', background: tokens.ink, color: tokens.paper, fontFamily: tokens.sans }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 12, color: 'rgba(250,250,247,.5)', fontFamily: tokens.mono, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Benefícios para o seu negócio
          </div>
          <h2 style={{ margin: '20px 0 0', fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.02, letterSpacing: '-0.03em', fontWeight: 500, maxWidth: 1000 }}>
            Mais do que relatório.<br />
            <span style={{ color: 'rgba(250,250,247,.55)' }}>Inteligência estratégica</span>{' '}para decidir.
          </h2>
        </Reveal>
        <div style={{ marginTop: 'clamp(48px, 8vw, 80px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(16px, 3vw, 32px)' }}>
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <div style={{
                padding: 'clamp(32px, 5vw, 40px) clamp(24px, 4vw, 32px) clamp(28px, 5vw, 36px)',
                border: '1px solid rgba(250,250,247,.12)',
                borderRadius: 8,
                background: 'rgba(250,250,247,.03)',
                height: '100%',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 8,
                  background: 'rgba(151, 201, 59, 0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 28,
                }}>
                  <BenIcon name={it.icon} color={tokens.accent} />
                </div>
                <h3 style={{ margin: '0 0 14px', fontSize: 26, letterSpacing: '-0.02em', fontWeight: 500 }}>{it.title}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'rgba(250,250,247,.7)' }}>{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SEGMENTOS (grade com ícones) ──────────────────────────────
function Segmentos() {
  const segs = [
    { name: 'Alimentação', icon: 'food' },
    { name: 'Bebidas', icon: 'beverage' },
    { name: 'Metalúrgica', icon: 'metal' },
    { name: 'Moveleira', icon: 'furniture' },
    { name: 'Química', icon: 'chemistry' },
    { name: 'Serviços', icon: 'services' },
    { name: 'Transportes', icon: 'transport' },
    { name: 'Varejo', icon: 'retail' },
  ];
  return (
    <section id="segmentos" style={{ padding: 'clamp(96px, 14vw, 140px) clamp(20px, 5vw, 56px) clamp(80px, 12vw, 120px)', fontFamily: tokens.sans }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div style={{ fontSize: 12, color: tokens.inkMuted, fontFamily: tokens.mono, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Segmentos atendidos</div>
              <h2 style={{ margin: '20px 0 0', fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1, letterSpacing: '-0.03em', fontWeight: 500, color: tokens.ink, maxWidth: 900 }}>
                Onde a gente <span style={{ fontFamily: tokens.serif, fontStyle: 'italic', fontWeight: 500, color: tokens.primary }}>já entrega</span> resultado.
              </h2>
            </div>
            <p style={{ fontSize: 16, color: tokens.inkSoft, maxWidth: 380, margin: 0, lineHeight: 1.5 }}>
              Indústrias e operações onde já estruturamos BI.
            </p>
          </div>
        </Reveal>
        <div style={{
          marginTop: 'clamp(40px, 6vw, 64px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'clamp(8px, 1.5vw, 16px)',
        }}>
          {segs.map((s, i) => <SegCard key={s.name} {...s} delay={i * 50} />)}
        </div>
      </div>
    </section>
  );
}

function SegCard({ name, icon, delay }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Reveal delay={delay}>
      <a
        href="#contato"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          padding: 'clamp(20px, 4vw, 36px) clamp(14px, 3vw, 28px) clamp(20px, 4vw, 32px)',
          border: `1px solid ${tokens.rule}`,
          borderRadius: 12,
          background: hover ? tokens.card : tokens.paper,
          transition: 'all .25s',
          cursor: 'pointer',
          display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 3vw, 28px)',
          minHeight: 'clamp(140px, 30vw, 200px)',
          transform: hover ? 'translateY(-3px)' : 'translateY(0)',
          boxShadow: hover ? '0 10px 28px -12px rgba(14,17,22,.18)' : 'none',
          position: 'relative', overflow: 'hidden',
        }}>
        <div style={{
          width: 'clamp(40px, 8vw, 56px)', height: 'clamp(40px, 8vw, 56px)', borderRadius: 10,
          background: hover ? tokens.primary : `${tokens.primary}10`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background .25s',
        }}>
          <SegIcon name={icon} color={hover ? '#fff' : tokens.primary} size={28} />
        </div>
        <div>
          <div style={{
            fontSize: 'clamp(16px, 3.5vw, 22px)', lineHeight: 1.15, letterSpacing: '-0.015em', fontWeight: 500,
            color: tokens.ink,
          }}>{name}</div>
          <div style={{
            fontSize: 13, color: tokens.inkMuted, marginTop: 6, fontFamily: tokens.mono,
            opacity: hover ? 1 : 0, transform: hover ? 'translateY(0)' : 'translateY(4px)',
            transition: 'all .25s',
          }}>conversar →</div>
        </div>
      </a>
    </Reveal>
  );
}

function SegIcon({ name, color, size = 28 }) {
  const s = { width: size, height: size, fill: 'none', stroke: color, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'food': // garfo tipo tridente (3 pontas, base em meia-lua) + faca monoline
      return (
        <svg {...s} viewBox="0 0 32 32">
          {/* Garfo — 3 pontas conectadas por meia-lua na base, cabo descendo */}
          <path d="M8 4v6" />
          <path d="M11.5 4v6" />
          <path d="M15 4v6" />
          <path d="M8 10a3.5 3.5 0 0 0 7 0" />
          <path d="M11.5 10v18" />
          {/* Faca — monoline curva (lâmina + cabo numa linha só) */}
          <path d="M23 4c-2 3-3 6-3 9 0 1.5.7 2.5 2 2.5h.5v12.5" />
        </svg>);

    case 'beverage': // copo (mantido, mesmo não usado)
      return <svg {...s} viewBox="0 0 32 32"><path d="M9 6h14l-2 20H11L9 6z" /><path d="M10 12h12" /></svg>;
    case 'metal': // engrenagem clássica — 8 dentes + furo central alinhado
      return (
        <svg {...s} viewBox="0 0 32 32">
          <path d="M14 2h4v3l3 1.2 2.1-2.1 2.8 2.8L23.8 9l1.2 3h3v4h-3l-1.2 3 2.1 2.1-2.8 2.8-2.1-2.1L18 23v3h-4v-3l-3-1.2-2.1 2.1-2.8-2.8L8.2 19 7 16H4v-4h3l1.2-3-2.1-2.1 2.8-2.8L11 7.2l3-1.2z" />
          <circle cx="16" cy="14" r="3.5" />
        </svg>);

    case 'furniture': // C · cama/sofá
      return (
        <svg {...s} viewBox="0 0 32 32">
          <path d="M4 18v-4c0-2 2-4 4-4h16c2 0 4 2 4 4v4" />
          <path d="M2 18h28v6H2zM6 24v3M26 24v3" />
        </svg>);

    case 'chemistry': // A · Erlenmeyer
      return (
        <svg {...s} viewBox="0 0 32 32">
          <path d="M12 4h8v8l6 14c1 2 0 4-2 4H8c-2 0-3-2-2-4l6-14V4z" />
          <path d="M9 20h14" />
        </svg>);

    case 'services': // aperto de mãos limpo — dois antebraços horizontais que se encontram
      return (
        <svg {...s} viewBox="0 0 32 32">
          {/* mão esquerda */}
          <path d="M3 13l5-3 6 2 3 3" />
          <path d="M3 13v4l5 3" />
          {/* mão direita */}
          <path d="M29 13l-5-3-6 2-3 3" />
          <path d="M29 13v4l-5 3" />
          {/* aperto central */}
          <path d="M11 15l4 3 6-3" />
        </svg>);

    case 'transport':
      return <svg {...s} viewBox="0 0 32 32"><rect x="3" y="10" width="14" height="11" rx="1" /><path d="M17 13h6l4 4v4h-10v-8z" /><circle cx="9" cy="23" r="2.5" /><circle cx="22" cy="23" r="2.5" /></svg>;
    case 'retail':
      return <svg {...s} viewBox="0 0 32 32"><path d="M7 11h18l-2 16H9L7 11z" /><path d="M12 11V7a4 4 0 0 1 8 0v4" /></svg>;
    default:
      return null;
  }
}

function Contato() {
  return (
    <section id="contato" style={{ padding: 'clamp(96px, 14vw, 140px) clamp(20px, 5vw, 56px) clamp(72px, 10vw, 100px)', fontFamily: tokens.sans }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 12, color: tokens.inkMuted, fontFamily: tokens.mono, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Contato</div>
          <h2 style={{ margin: '20px 0 0', fontSize: 'clamp(40px, 9vw, 120px)', lineHeight: 0.95, letterSpacing: '-0.04em', fontWeight: 500, color: tokens.ink, maxWidth: 1200 }}>
            Conta o problema.<br />
            <span style={{ fontFamily: tokens.serif, fontStyle: 'italic', fontWeight: 500, color: tokens.primary }}>A gente responde</span>{' '}rápido.
          </h2>
        </Reveal>
        <div style={{ marginTop: 'clamp(48px, 8vw, 80px)', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'clamp(32px, 6vw, 80px)', alignItems: 'stretch' }}>
          <Reveal delay={120} style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
              <ContactCard label="E-mail" value="contato@assessortech.com.br" href="mailto:contato@assessortech.com.br" icon="mail" />
              <ContactCard label="Telefone" value="54 3196 8474" href="tel:+555431968474" icon="phone" />
              <ContactCard label="WhatsApp" value="Conversar agora" href="https://api.whatsapp.com/send?1=pt_BR&phone=555431968474" icon="whatsapp" />
              <ContactCard label="Endereço" value={<>Rua Rio Branco, 1620, Sala 22 · Bairro Aparecida · Flores da Cunha · RS</>} href="https://www.google.com/maps/search/?api=1&query=-29.0305745,-51.1887997&query_place_id=ChIJVa8D6Q2aHpURYL0sZNKPqUw" icon="map" />
            </div>
          </Reveal>
          <Reveal delay={200} style={{ display: 'flex' }}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>);

}

function ContactIcon({ name, color, size = 20 }) {
  const s = { width: size, height: size, fill: 'none', stroke: color, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'mail':
      return <svg {...s} viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>;
    case 'phone':
      return <svg {...s} viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>;
    case 'whatsapp':
      // ícone WhatsApp filled (mantemos como path com fill)
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-label="WhatsApp">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26L3.474 19.5l3.18-1.307zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.521.074-.794.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
        </svg>
      );
    case 'map':
      return <svg {...s} viewBox="0 0 24 24"><path d="M12 22s7-7.5 7-13a7 7 0 0 0-14 0c0 5.5 7 13 7 13z" /><circle cx="12" cy="9" r="2.5" /></svg>;
    default:
      return null;
  }
}

function ContactCard({ label, value, href, icon }) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return (
    <Tag
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      target={href && href.startsWith('http') ? '_blank' : undefined}
      rel={href && href.startsWith('http') ? 'noopener noreferrer' : undefined}
      style={{
        flex: 1,
        padding: '20px 24px',
        border: `1px solid ${hover ? tokens.accent : tokens.rule}`,
        borderRadius: 8,
        background: hover ? tokens.card : tokens.paper,
        color: tokens.ink,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        transition: 'all .2s',
        cursor: href ? 'pointer' : 'default',
        transform: hover && href ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hover ? `0 8px 22px -10px ${tokens.accent}55` : 'none',
        position: 'relative',
      }}>
      {icon && (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 36, height: 36, borderRadius: 999,
          background: 'transparent', flexShrink: 0,
          transition: 'color .2s',
        }}>
          <ContactIcon name={icon} color={hover ? tokens.accent : tokens.inkMuted} size={20} />
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0, flex: 1 }}>
        <div style={{
          fontSize: 11, fontFamily: tokens.mono, letterSpacing: '0.08em', textTransform: 'uppercase',
          color: tokens.inkMuted,
        }}>{label}</div>
        <div style={{
          fontSize: 16, lineHeight: 1.35, letterSpacing: '-0.01em',
          color: 'inherit', fontWeight: 500,
        }}>
          {value}
        </div>
      </div>
    </Tag>);

}

// Web3Forms access key — endpoint público, OK ficar exposto.
const WEB3FORMS_KEY = '2adf276b-1996-44b2-9bb3-645d14bb9f6f';

function ContactForm() {
  const [status, setStatus] = React.useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(json.message || 'Não foi possível enviar. Tente novamente.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Falha de conexão. Tente novamente em instantes.');
    }
  };

  if (status === 'success') {
    return (
      <div style={{
        flex: 1,
        padding: 32, background: tokens.card, border: `1px solid ${tokens.rule}`, borderRadius: 8,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start',
        gap: 16
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: 999,
          background: `${tokens.accent}25`,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5e8a1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 style={{
          margin: 0, fontSize: 26, fontWeight: 500, color: tokens.ink, letterSpacing: '-0.02em'
        }}>Mensagem enviada.</h3>
        <p style={{ margin: 0, color: tokens.inkSoft, fontSize: 16, lineHeight: 1.5 }}>
          Recebemos seu contato e respondemos em breve. Obrigado.
        </p>
      </div>
    );
  }

  const sending = status === 'sending';

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        flex: 1,
        padding: 32, background: tokens.card, border: `1px solid ${tokens.rule}`, borderRadius: 8,
        display: 'flex', flexDirection: 'column', gap: 20
      }}>
      {/* Web3Forms */}
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value="Novo contato pelo site · AssessorTech" />
      <input type="hidden" name="from_name" value="Site AssessorTech" />
      {/* Honeypot anti-bot */}
      <input type="checkbox" name="botcheck" tabIndex={-1} style={{ display: 'none' }} />

      <FormField label="Nome" name="nome" placeholder="Como podemos te chamar?" required />
      <FormField label="Empresa" name="empresa" placeholder="Nome da sua empresa" />
      <FormField label="E-mail" name="email" placeholder="seuemail@empresa.com.br" type="email" required />
      <FormField label="Conta pra gente" name="mensagem" placeholder="Como podemos ajudar sua empresa?" textarea required />

      {status === 'error' && (
        <div style={{
          padding: '12px 16px',
          background: 'rgba(179,67,58,.08)',
          border: '1px solid rgba(179,67,58,.25)',
          borderRadius: 6,
          fontSize: 14,
          color: '#b3433a',
          lineHeight: 1.4
        }}>
          {errorMsg}
        </div>
      )}

      <button type="submit"
        disabled={sending}
        style={{
          marginTop: 8, padding: '14px 22px',
          background: sending ? tokens.inkMuted : tokens.ink,
          color: tokens.paper,
          border: 'none', borderRadius: 999, fontSize: 15, fontWeight: 500, fontFamily: tokens.sans,
          cursor: sending ? 'wait' : 'pointer', transition: 'background .15s'
        }}
        onMouseEnter={(e) => { if (!sending) e.currentTarget.style.background = tokens.primary; }}
        onMouseLeave={(e) => { if (!sending) e.currentTarget.style.background = tokens.ink; }}>
        {sending ? 'Enviando…' : 'Enviar mensagem'}
      </button>
    </form>);

}

function FormField({ label, name, placeholder, type = 'text', textarea, required }) {
  const [focus, setFocus] = React.useState(false);
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{
        fontSize: 12, fontFamily: tokens.mono, letterSpacing: '0.06em', textTransform: 'uppercase',
        color: focus ? tokens.primary : tokens.inkMuted, transition: 'color .15s'
      }}>
        {label}{required && <span style={{ color: tokens.primary, marginLeft: 4 }}>*</span>}
      </span>
      <Tag
        name={name}
        type={textarea ? undefined : type}
        placeholder={placeholder}
        required={required}
        rows={textarea ? 4 : undefined}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          padding: '12px 0',
          border: 'none', borderBottom: `1px solid ${focus ? tokens.primary : tokens.rule}`,
          background: 'transparent', outline: 'none',
          fontSize: 16, color: tokens.ink, fontFamily: tokens.sans,
          resize: textarea ? 'vertical' : 'none',
          transition: 'border-color .15s'
        }} />
    </label>);

}

// ─── Página inteira V1 ──────────────────────────────────────────
function Home() {
  return (
    <div data-screen-label="AssessorTech" style={{
      background: tokens.paper, color: tokens.ink, fontFamily: tokens.sans,
      minHeight: '100vh', overflowX: 'hidden', position: 'relative'
    }}>
      <Nav />
      <Hero />
      <Clientes />
      <Manifesto />
      <Diferenciais />
      <Metodologia />
      <Beneficios />
      <Segmentos />
      <Contato />
      <Footer />
    </div>);

}

Object.assign(window, {
  Home,
  Hero, HeroMockup,
  Clientes,
  Manifesto, Stat,
  Diferenciais, DiffCard,
  Metodologia, FlowDiagram, FlowIcon, Step,
  Beneficios, BenIcon,
  Segmentos, SegCard, SegIcon,
  Contato, ContactIcon, ContactCard, ContactForm, FormField,
});
