// V1 — metodologia (com fluxo visual) + benefícios + segmentos (com ícones)

// ─── METODOLOGIA ───────────────────────────────────────────────
function V1Metodologia() {
  const steps = [
    { n: '01', title: 'Levantamento', body: 'Compreendemos os objetivos e desafios da sua empresa. Antes de uma linha de código, entendemos o negócio.', icon: 'discover' },
    { n: '02', title: 'Modelagem', body: 'Estruturamos e organizamos as informações. Limpeza, transformação e modelagem dos dados onde quer que estejam.', icon: 'model' },
    { n: '03', title: 'Desenvolvimento', body: 'Dashboards e relatórios visuais, intuitivos, desenhados para o seu fluxo de decisão.', icon: 'build' },
    { n: '04', title: 'Validação', body: 'Ajustes em conjunto com a equipe do cliente. Iteração rápida até fazer sentido pra quem vai usar.', icon: 'validate' },
    { n: '05', title: 'Suporte contínuo', body: 'Acompanhamento, evolução e aderência da solução ao longo do tempo. A gente fica.', icon: 'support' },
  ];
  return (
    <section id="metodologia" style={{ padding: '160px 56px 140px', fontFamily: v1.sans }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 12, color: v1.inkMuted, fontFamily: v1.mono, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Metodologia</div>
          <h2 style={{ margin: '20px 0 0', fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1, letterSpacing: '-0.03em', fontWeight: 500, color: v1.ink, maxWidth: 900 }}>
            Cinco passos.<br />Repetidos com <span style={{ fontFamily: v1.serif, fontStyle: 'italic', fontWeight: 500, color: v1.primary }}>cuidado</span>{' '}em cada projeto.
          </h2>
        </Reveal>

        {/* Lista detalhada */}
        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: '220px 1fr', gap: 0 }}>
          {steps.map((s, i) => <V1Step key={s.n} {...s} first={i === 0} last={i === steps.length - 1} delay={i * 60} />)}
        </div>
      </div>
    </section>
  );
}

// Diagrama de fluxo SVG inline — 5 nós conectados, com ícones diagramáticos
function V1FlowDiagram({ steps }) {
  const [active, setActive] = React.useState(null);
  return (
    <div style={{
      marginTop: 64,
      padding: '56px 40px 40px',
      background: v1.card,
      border: `1px solid ${v1.rule}`,
      borderRadius: 16,
      position: 'relative',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, position: 'relative' }}>
        {/* Linha conectora pontilhada por trás */}
        <svg style={{ position: 'absolute', top: 36, left: '10%', right: '10%', width: '80%', height: 4, pointerEvents: 'none' }} viewBox="0 0 1000 4" preserveAspectRatio="none">
          <line x1="0" y1="2" x2="1000" y2="2" stroke={v1.rule} strokeWidth="2" strokeDasharray="4 6" />
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
              background: active === i ? v1.primary : v1.paper,
              border: `1px solid ${active === i ? v1.primary : v1.rule}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all .25s',
              transform: active === i ? 'scale(1.08)' : 'scale(1)',
              boxShadow: active === i ? `0 8px 24px ${v1.primary}30` : 'none',
              position: 'relative', zIndex: 2,
            }}>
              <FlowIcon name={s.icon} color={active === i ? '#fff' : v1.primary} size={32} />
            </div>
            <div style={{
              fontFamily: v1.mono, fontSize: 11, color: v1.inkMuted, marginTop: 16, letterSpacing: '0.06em',
            }}>STEP / {s.n}</div>
            <div style={{
              fontSize: 16, fontWeight: 500, color: v1.ink, marginTop: 4, letterSpacing: '-0.01em',
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
            borderLeft: `7px solid ${v1.accent}`,
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

function V1Step({ n, title, body, icon, first, last, delay }) {
  return (
    <React.Fragment>
      <Reveal delay={delay} style={{ position: 'relative' }}>
        {!first && (
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 2,
            alignItems: 'flex-start',
            paddingLeft: 4,
            paddingTop: 20,
            color: v1.primary,
          }}>
            <svg width="26" height="11" viewBox="0 0 24 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35 }}><path d="M3 2l9 6 9-6" /></svg>
            <svg width="26" height="11" viewBox="0 0 24 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.85 }}><path d="M3 2l9 6 9-6" /></svg>
          </div>
        )}
        <div style={{
          paddingTop: first ? 38 : 14,
          display: 'flex', alignItems: 'center', gap: 16,
        }}>
          <div style={{
            fontFamily: v1.serifNumber, fontStyle: 'italic', fontWeight: 500,
            fontSize: 64, lineHeight: 1, color: v1.primary, letterSpacing: '-0.02em',
            width: 80, textAlign: 'left', flexShrink: 0,
          }}>{n}</div>
          <div style={{
            width: 44, height: 44, borderRadius: 10,
            background: `${v1.primary}10`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <FlowIcon name={icon} color={v1.primary} size={22} />
          </div>
        </div>
      </Reveal>
      <Reveal delay={delay + 40}>
        <div style={{
          padding: '32px 0 44px',
          borderTop: `1px solid ${v1.rule}`,
          borderBottom: last ? `1px solid ${v1.rule}` : 'none',
          display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'baseline',
        }}>
          <h3 style={{ margin: 0, fontSize: 36, lineHeight: 1.05, letterSpacing: '-0.02em', fontWeight: 500, color: v1.ink }}>{title}</h3>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, color: v1.inkSoft, maxWidth: 560 }}>{body}</p>
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

function V1Beneficios() {
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
    <section style={{ padding: '120px 56px', background: v1.ink, color: v1.paper, fontFamily: v1.sans }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 12, color: 'rgba(250,250,247,.5)', fontFamily: v1.mono, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Benefícios para o seu negócio
          </div>
          <h2 style={{ margin: '20px 0 0', fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.02, letterSpacing: '-0.03em', fontWeight: 500, maxWidth: 1000 }}>
            Mais do que relatório.<br />
            <span style={{ color: 'rgba(250,250,247,.55)' }}>Inteligência estratégica</span>{' '}para decidir.
          </h2>
        </Reveal>
        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <div style={{
                padding: '40px 32px 36px',
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
                  <BenIcon name={it.icon} color={v1.accent} />
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
function V1Segmentos() {
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
    <section id="segmentos" style={{ padding: '140px 56px 120px', fontFamily: v1.sans }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div style={{ fontSize: 12, color: v1.inkMuted, fontFamily: v1.mono, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Segmentos atendidos</div>
              <h2 style={{ margin: '20px 0 0', fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1, letterSpacing: '-0.03em', fontWeight: 500, color: v1.ink, maxWidth: 900 }}>
                Onde a gente <span style={{ fontFamily: v1.serif, fontStyle: 'italic', fontWeight: 500, color: v1.primary }}>já entrega</span> resultado.
              </h2>
            </div>
            <p style={{ fontSize: 16, color: v1.inkSoft, maxWidth: 380, margin: 0, lineHeight: 1.5 }}>
              Indústrias e operações onde já estruturamos BI.
            </p>
          </div>
        </Reveal>
        <div style={{
          marginTop: 64,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
        }}>
          {segs.map((s, i) => <V1SegCard key={s.name} {...s} delay={i * 50} />)}
        </div>
      </div>
    </section>
  );
}

function V1SegCard({ name, icon, delay }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          padding: '36px 28px 32px',
          border: `1px solid ${v1.rule}`,
          borderRadius: 12,
          background: hover ? v1.card : v1.paper,
          transition: 'all .25s',
          cursor: 'default',
          display: 'flex', flexDirection: 'column', gap: 28,
          minHeight: 200,
          transform: hover ? 'translateY(-3px)' : 'translateY(0)',
          boxShadow: hover ? '0 10px 28px -12px rgba(14,17,22,.18)' : 'none',
          position: 'relative', overflow: 'hidden',
        }}>
        <div style={{
          width: 56, height: 56, borderRadius: 10,
          background: hover ? v1.primary : `${v1.primary}10`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background .25s',
        }}>
          <SegIcon name={icon} color={hover ? '#fff' : v1.primary} size={28} />
        </div>
        <div>
          <div style={{
            fontSize: 22, lineHeight: 1.15, letterSpacing: '-0.015em', fontWeight: 500,
            color: v1.ink,
          }}>{name}</div>
          <div style={{
            fontSize: 13, color: v1.inkMuted, marginTop: 6, fontFamily: v1.mono,
            opacity: hover ? 1 : 0, transform: hover ? 'translateY(0)' : 'translateY(4px)',
            transition: 'all .25s',
          }}>conversar →</div>
        </div>
      </div>
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

window.V1End1 = { V1Metodologia, V1Beneficios, V1Segmentos };
