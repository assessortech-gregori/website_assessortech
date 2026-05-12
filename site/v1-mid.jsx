// V1 — meio: faixa de prova, manifesto, diferenciais

function V1AnySource() {
  // 18 logos em site/img/logos/. Os arquivos têm prefixo "logo-" (ex: logo-chandon.png).
  // Pra adicionar/remover/reordenar: edite só este array.
  const logos = [
    { slug: 'chandon',       nome: 'Chandon' },
    { slug: 'moet-hennessy', nome: 'Moët Hennessy' },
    { slug: 'tecnovin',      nome: 'Tecnovin' },
    { slug: 'caderode',      nome: 'Caderode' },
    { slug: 'giordani',      nome: 'Giordani Turismo' },
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
      padding: '64px 56px',
      borderTop: `1px solid ${v1.rule}`,
      borderBottom: `1px solid ${v1.rule}`,
      background: v1.card,
      fontFamily: v1.sans,
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes v1LogosScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .v1-logos-track {
          display: flex;
          gap: 64px;
          align-items: center;
          width: max-content;
          animation: v1LogosScroll 70s linear infinite;
        }
        .v1-logos-mask:hover .v1-logos-track {
          animation-play-state: paused;
        }
        .v1-logo-item {
          flex-shrink: 0;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.55;
          filter: grayscale(100%);
          transition: opacity .25s ease, filter .25s ease;
        }
        .v1-logo-item:hover {
          opacity: 1;
          filter: grayscale(0%);
        }
        .v1-logo-item img {
          max-height: 100%;
          max-width: 160px;
          width: auto;
          height: auto;
          display: block;
          object-fit: contain;
        }
        @media (prefers-reduced-motion: reduce) {
          .v1-logos-track { animation: none; }
        }
      `}</style>

      <div style={{
        display: 'grid', gridTemplateColumns: '280px 1fr', gap: 80, maxWidth: 1240, margin: '0 auto', alignItems: 'start'
      }}>
        <div>
          <div style={{ fontSize: 12, color: v1.inkMuted, fontFamily: v1.mono, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Conexões
          </div>
          
          <p style={{ fontSize: 22, lineHeight: 1.35, margin: '14px 0 0', color: v1.ink, letterSpacing: '-0.01em' }}>
            Qualquer sistema. Qualquer fonte.{' '}
            <span style={{ color: v1.inkSoft }}>Garimpamos o dado onde ele estiver.</span>
          </p>
        </div>

        <div>
          <div style={{ fontSize: 12, color: v1.inkMuted, fontFamily: v1.mono, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 28 }}>
            Clientes
          </div>

          <div className="v1-logos-mask" style={{
            position: 'relative',
            overflow: 'hidden',
            WebkitMaskImage: `linear-gradient(90deg, transparent 0, black 60px, black calc(100% - 60px), transparent 100%)`,
            maskImage: `linear-gradient(90deg, transparent 0, black 60px, black calc(100% - 60px), transparent 100%)`
          }}>
            <div className="v1-logos-track">
              {logosLoop.map((logo, i) => (
                <div key={`${logo.slug}-${i}`} className="v1-logo-item" title={logo.nome}>
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

function V1Manifesto() {
  return (
    <section id="sobre" style={{
      padding: '160px 56px 140px', fontFamily: v1.sans
    }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 12, color: v1.inkMuted, fontFamily: v1.mono, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Sobre nós
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h2 style={{
            margin: '24px 0 0',
            fontSize: 'clamp(40px, 5.6vw, 84px)',
            lineHeight: 1.02, letterSpacing: '-0.03em', fontWeight: 500, color: v1.ink, maxWidth: 1100
          }}>
            Sua empresa tem dados.<br />
            A gente <span style={{ fontFamily: v1.serif, fontStyle: 'italic', fontWeight: 500, color: v1.primary }}>traduz</span>{' '}
            em decisões que geram <span style={{ textDecoration: 'underline', textDecorationColor: v1.accent, textDecorationThickness: 6, textUnderlineOffset: 8 }}>resultados</span>.
          </h2>
        </Reveal>
        <Reveal delay={260}>
          <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48, borderTop: `1px solid ${v1.rule}`, paddingTop: 40 }}>
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
      <div style={{ fontSize: 64, lineHeight: 1, letterSpacing: '-0.03em', fontWeight: 500, color: v1.ink, fontFamily: v1.sans }}>
        {typeof number === 'number' ? <CountUp to={number} suffix={suffix} /> : number}
      </div>
      <div style={{ marginTop: 10, fontSize: 14, color: v1.inkSoft }}>{label}</div>
    </div>);

}

function V1Diferenciais() {
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
      padding: '120px 56px',
      background: v1.card,
      borderTop: `1px solid ${v1.rule}`,
      borderBottom: `1px solid ${v1.rule}`,
      fontFamily: v1.sans
    }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40 }}>
            <div>
              <div style={{ fontSize: 12, color: v1.inkMuted, fontFamily: v1.mono, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                O que nos torna únicos
              </div>
              <h2 style={{ margin: '20px 0 0', fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1, letterSpacing: '-0.03em', fontWeight: 500, color: v1.ink }}>
                Diferenciais que<br />são <span style={{ fontFamily: v1.serif, fontStyle: 'italic', fontWeight: 500, color: "rgb(51, 116, 187)" }}>postura</span>, não tópicos.
              </h2>
            </div>
            <p style={{ fontSize: 16, color: v1.inkSoft, maxWidth: 360, margin: 0, lineHeight: 1.5 }}>
              Cada projeto reflete a realidade de cada cliente. Por isso o nosso jeito de trabalhar começa antes do primeiro dashboard.
            </p>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderTop: `1px solid ${v1.rule}`, borderLeft: `1px solid ${v1.rule}` }}>
          {items.map((it, i) => <V1DiffCard key={it.n} {...it} delay={i * 80} />)}
        </div>
      </div>
    </section>);

}

function V1DiffCard({ n, title, body, tag, delay }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Reveal delay={delay} style={{ height: '100%' }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          padding: '48px 40px 44px',
          borderRight: `1px solid ${v1.rule}`,
          borderBottom: `1px solid ${v1.rule}`,
          background: hover ? v1.paper : v1.card,
          transition: 'background .2s',
          position: 'relative',
          minHeight: 380,
          height: '100%',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
        }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{
            fontFamily: v1.serifNumber, fontStyle: 'italic', fontWeight: 500,
            fontSize: 64, lineHeight: 1, color: hover ? v1.primary : v1.inkMuted,
            transition: 'color .25s'
          }}>{n}</div>
        </div>
        <div>
          <h3 style={{
            margin: '40px 0 16px', fontSize: 28, lineHeight: 1.1,
            letterSpacing: '-0.02em', fontWeight: 500, color: v1.ink, whiteSpace: 'pre-line'
          }}>{title}</h3>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: v1.inkSoft }}>{body}</p>
        </div>
      </div>
    </Reveal>);

}

window.V1Mid = { V1AnySource, V1Manifesto, V1Diferenciais };