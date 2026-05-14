// V1 — Editorial Confidence
// Stripe-like: papel dominante, serif editorial pontual, animações sutis,
// muito respiro, hierarquia tipográfica forte.

const v1 = {
  paper: '#FAFAF7',
  ink: '#0E1116',
  inkSoft: 'rgba(14,17,22,.66)',
  inkMuted: 'rgba(14,17,22,.45)',
  rule: 'rgba(14,17,22,.10)',
  primary: '#3374BB',
  primaryDeep: '#1F4F87',
  accent: '#97C93B',
  card: '#FFFFFF',
  sans: '"Inter Tight", "Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  serif: '"Lora", "Times New Roman", serif',
  serifNumber: '"Crimson Pro", "Times New Roman", serif',
  mono: '"Geist Mono", "JetBrains Mono", ui-monospace, monospace'
};

// ─── NAV ─────────────────────────────────────────────────────────
function V1Nav({ page = 'home' }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['Diferenciais', 'Metodologia', 'Segmentos', 'Contato'];
  const onHome = page === 'home';
  const onProjetos = page === 'projetos';
  // Em outras páginas, links de seção apontam pra home
  const homeBase = onHome ? '' : 'index.html';
  const logoHref = onHome ? '#top' : 'index.html#top';
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      padding: '18px 56px',
      background: scrolled ? 'rgba(250,250,247,.85)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(160%) blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(160%) blur(14px)' : 'none',
      borderBottom: scrolled ? `1px solid ${v1.rule}` : '1px solid transparent',
      transition: 'all .25s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontFamily: v1.sans
    }}>
      <a href={logoHref} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: v1.accent }}>
        <AssessorLogo size={26} primary={v1.primary} accent={v1.accent} />
        <span style={{ fontSize: 16, letterSpacing: '-0.01em', fontWeight: 500 }}>AssessorTech</span>
      </a>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {links.map((l) =>
        <a key={l} href={`${homeBase}#${l.toLowerCase()}`} style={{
          fontSize: 14, color: v1.inkSoft, textDecoration: 'none',
          transition: 'color .15s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = v1.ink}
        onMouseLeave={(e) => e.currentTarget.style.color = v1.inkSoft}>
          {l}</a>
        )}
        <a href="projetos.html" style={{
          position: 'relative',
          fontSize: 14, fontWeight: 500,
          padding: '9px 16px', borderRadius: 999,
          background: onProjetos ? v1.primary : v1.ink,
          color: v1.paper,
          textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 8,
          transition: 'transform .15s, background .15s'
        }}
        onMouseEnter={(e) => {if (!onProjetos) {e.currentTarget.style.background = v1.primary;}e.currentTarget.style.transform = 'translateY(-1px)';}}
        onMouseLeave={(e) => {if (!onProjetos) {e.currentTarget.style.background = v1.ink;}e.currentTarget.style.transform = 'translateY(0)';}}>
          {onProjetos && <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: '50%', background: v1.accent, display: 'inline-block' }} />}
          Projetos {!onProjetos && '→'}</a>
      </div>
    </nav>);

}

// ─── HERO ────────────────────────────────────────────────────────
function V1Hero() {
  return (
    <section id="top" style={{
      padding: '64px 56px 120px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: v1.sans
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
        @keyframes v1HeroLineUp { to { transform: translateY(0); } }
        @keyframes v1HeroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .v1-line-mask { display: block; overflow: hidden; padding-bottom: 0.12em; margin-bottom: -0.12em; }
        .v1-line-mask > span {
          display: inline-block;
          transform: translateY(110%);
          animation: v1HeroLineUp 1.1s cubic-bezier(.2,.8,.2,1) forwards;
        }
        .v1-line-mask:nth-child(1) > span { animation-delay: .15s; }
        .v1-line-mask:nth-child(2) > span { animation-delay: .3s; }
        .v1-line-mask:nth-child(3) > span { animation-delay: .45s; }
        .v1-hero-fade { opacity: 0; animation: v1HeroFadeUp 1s .9s forwards; }
      `}</style>

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
        <h1 style={{
          margin: 0,
          fontSize: 'clamp(56px, 8vw, 132px)',
          lineHeight: 0.92,
          letterSpacing: '-0.04em',
          fontWeight: 500,
          color: v1.ink
        }}>
          <span className="v1-line-mask"><span>Inteligência de dados</span></span>
          <span className="v1-line-mask"><span>com{' '}
            <span style={{ fontFamily: v1.serif, fontStyle: 'italic', color: v1.primary, fontWeight: 500 }}>
              experiência
            </span>
          </span></span>
          <span className="v1-line-mask"><span>de negócio.</span></span>
        </h1>

        <div className="v1-hero-fade" style={{
          marginTop: 56,
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 80,
          alignItems: 'end'
        }}>
          <p style={{
            fontSize: 22, lineHeight: 1.4, color: v1.inkSoft,
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
              background: v1.primary, color: '#fff',
              textDecoration: 'none',
              transition: 'transform .2s, box-shadow .2s',
              boxShadow: '0 1px 0 rgba(0,0,0,.04)'
            }}
            onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-2px)';e.currentTarget.style.boxShadow = `0 8px 24px ${v1.primary}40`;}}
            onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)';e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,.04)';}}>
              Começar um projeto</a>
            <a href="#metodologia" style={{
              fontSize: 15, fontWeight: 500,
              padding: '14px 22px', borderRadius: 999,
              background: 'transparent', color: v1.ink,
              textDecoration: 'none',
              border: `1px solid ${v1.rule}`,
              transition: 'background .15s, border-color .15s'
            }}
            onMouseEnter={(e) => {e.currentTarget.style.background = v1.card;e.currentTarget.style.borderColor = 'rgba(14,17,22,.2)';}}
            onMouseLeave={(e) => {e.currentTarget.style.background = 'transparent';e.currentTarget.style.borderColor = v1.rule;}}>
              Como trabalhamos</a>
          </div>
        </div>

        {/* dashboard mockup flutuante */}
        <Reveal delay={400}>
          <div style={{ marginTop: 96, position: 'relative' }}>
            <V1HeroMockup />
          </div>
        </Reveal>
      </div>
    </section>);

}

function V1HeroMockup() {
  // Mockup honesto de dashboard: barras + linha + KPIs
  const bars = [42, 68, 51, 78, 64, 88, 72, 95, 84, 102, 91, 118];
  return (
    <div style={{
      background: v1.card,
      borderRadius: 14,
      border: `1px solid ${v1.rule}`,
      boxShadow: '0 1px 0 rgba(0,0,0,.02), 0 24px 56px -20px rgba(14,17,22,.18)',
      padding: 28,
      maxWidth: 1240,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 24,
      fontFamily: v1.sans
    }}>
      {/* KPI 1 */}
      <div style={{ borderRight: `1px solid ${v1.rule}`, paddingRight: 24 }}>
        <div style={{ fontSize: 12, color: v1.inkMuted, fontFamily: v1.mono, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Receita · YTD</div>
        <div style={{ fontSize: 44, letterSpacing: '-0.03em', fontWeight: 500, marginTop: 6, color: v1.ink }}>
          R$ <CountUp to={48.2} suffix="M" duration={3000} />
        </div>
        <div style={{ fontSize: 13, color: v1.accent === '#97C93B' ? '#5e8a1f' : v1.accent, marginTop: 4, fontWeight: 500 }}>
          ↑ 12,4% vs. ano anterior
        </div>
        <svg viewBox="0 0 240 60" style={{ width: '100%', marginTop: 18 }}>
          <path d="M0,45 C30,42 50,38 80,32 S140,18 180,12 S230,8 240,6"
          fill="none" stroke={v1.primary} strokeWidth="2" />
          <path d="M0,45 C30,42 50,38 80,32 S140,18 180,12 S230,8 240,6 L240,60 L0,60 Z"
          fill={v1.primary} fillOpacity="0.08" />
        </svg>
      </div>
      {/* Bar chart */}
      <div style={{ borderRight: `1px solid ${v1.rule}`, paddingRight: 24 }}>
        <div style={{ fontSize: 12, color: v1.inkMuted, fontFamily: v1.mono, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Margem por Linha</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 130, marginTop: 18 }}>
          {bars.map((h, i) =>
          <div key={i} style={{
            flex: 1,
            height: `${h}%`,
            background: i === 9 ? v1.primary : i === 11 ? v1.accent : 'rgba(51,116,187,.18)',
            borderRadius: '3px 3px 0 0',
            transition: 'opacity .2s'
          }} />
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 10, color: v1.inkMuted, fontFamily: v1.mono }}>
          <span>JAN</span><span>ABR</span><span>JUL</span><span>OUT</span><span>DEZ</span>
        </div>
      </div>
      {/* Lista */}
      <div>
        <div style={{ fontSize: 12, color: v1.inkMuted, fontFamily: v1.mono, letterSpacing: '0.06em', textTransform: 'uppercase' }}>INDICADORES</div>
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
            padding: '10px 0', borderBottom: `1px solid ${v1.rule}`,
            fontSize: 14
          }}>
              <span style={{ color: v1.inkSoft }}>{label}</span>
              <span style={{
              fontFamily: v1.mono, color: dir === 'up' ? '#5e8a1f' : dir === 'down' ? '#b3433a' : v1.ink,
              fontSize: 13, fontWeight: 500
            }}>{val}</span>
            </div>
          )}
        </div>
      </div>
    </div>);

}

window.V1 = { v1, V1Nav, V1Hero };