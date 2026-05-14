// Página Projetos — composição (hero, galeria, stack, CTA)
// Usa tokens tokens, Nav, Footer e PROJETOS / ProjetoVisual de projetos-data.jsx

const projStyles = {
  embedBase: 'https://app.powerbi.com/view?r='
};

// ─── Cover de cada projeto: iframe carrega automaticamente ───────
function ProjetoCover({ projeto, height = 460 }) {
  return (
    <div style={{
      position: 'relative',
      height,
      background: '#0E1116',
      borderRadius: 4,
      overflow: 'hidden',
      border: `1px solid ${tokens.rule}`
    }}>
      <iframe
        src={projStyles.embedBase + projeto.embedKey}
        title={projeto.titulo}
        frameBorder="0"
        allowFullScreen
        loading="lazy"
        style={{ width: '100%', height: '100%', display: 'block', border: 0 }}
      />
    </div>
  );
}

// ─── Hero compacto ───────────────────────────────────────────────
function ProjetosHero() {
  return (
    <section id="top" style={{
      padding: '48px 56px 40px',
      position: 'relative',
      fontFamily: tokens.sans
    }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <h1 style={{
          margin: 0,
          fontSize: 'clamp(44px, 5.6vw, 88px)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          fontWeight: 500,
          color: tokens.ink,
          whiteSpace: 'nowrap'
        }}>
          Demos{' '}
          <span style={{ fontFamily: tokens.serif, fontStyle: 'italic', color: tokens.primary, fontWeight: 500 }}>
            interativas
          </span>
          . Pode clicar.
        </h1>
      </div>
    </section>
  );
}

// ─── Card individual (para galeria) ──────────────────────────────
function ProjetoCard({ projeto, density, idx }) {
  return (
    <article id={`p-${projeto.num}`} style={{
      padding: density === 'compact' ? '40px 0 24px' : '64px 0 32px',
      borderTop: idx === 0 ? 'none' : `1px solid ${tokens.rule}`,
      fontFamily: tokens.sans
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 24,
        marginBottom: 20,
        flexWrap: 'wrap'
      }}>
        <h2 style={{
          margin: 0,
          fontSize: 'clamp(32px, 3.2vw, 48px)',
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          fontWeight: 500,
          color: tokens.ink
        }}>
          {projeto.titulo}
        </h2>
        <a
          href={projStyles.embedBase + projeto.embedKey}
          target="_blank" rel="noopener noreferrer"
          style={{
            fontSize: 13,
            color: tokens.inkSoft, textDecoration: 'none',
            transition: 'color .15s',
            whiteSpace: 'nowrap'
          }}
          onMouseEnter={e => e.currentTarget.style.color = tokens.ink}
          onMouseLeave={e => e.currentTarget.style.color = tokens.inkSoft}>
          Tela cheia ↗
        </a>
      </div>

      <ProjetoCover projeto={projeto} height={density === 'compact' ? 460 : 580} />
    </article>
  );
}

// ─── Galeria simples (sem categorias) ────────────────────────────
function ProjetosGallery({ density }) {
  return (
    <section style={{ padding: '24px 56px 80px', fontFamily: tokens.sans }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        {PROJETOS.map((p, i) => (
          <ProjetoCard
            key={p.num}
            projeto={p}
            idx={i}
            density={density}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Stack vertical com índice sticky ────────────────────────────
function ProjetosStack({ density }) {
  const [active, setActive] = React.useState(PROJETOS[0].num);
  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const num = e.target.getAttribute('data-num');
          if (num) setActive(num);
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    PROJETOS.forEach(p => {
      const el = document.getElementById(`s-${p.num}`);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ padding: '24px 56px 80px', fontFamily: tokens.sans }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '220px 1fr', gap: 56,
        alignItems: 'start'
      }}>
        <aside style={{
          position: 'sticky', top: 96,
          paddingTop: 48,
          alignSelf: 'start'
        }}>
          <div style={{ fontFamily: tokens.mono, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: tokens.inkMuted, marginBottom: 18 }}>
            Índice
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {PROJETOS.map(p => {
              const isActive = p.num === active;
              return (
                <a key={p.num} href={`#s-${p.num}`}
                  style={{
                    display: 'flex', alignItems: 'baseline', gap: 12,
                    padding: '10px 0',
                    color: isActive ? tokens.ink : tokens.inkMuted,
                    textDecoration: 'none',
                    fontSize: 14,
                    borderBottom: `1px solid ${tokens.rule}`,
                    transition: 'color .2s'
                  }}>
                  <span style={{ fontFamily: tokens.mono, fontSize: 11, color: isActive ? tokens.primary : tokens.inkMuted, width: 22 }}>
                    {p.num}
                  </span>
                  <span style={{ flex: 1, fontWeight: isActive ? 500 : 400 }}>{p.titulo}</span>
                  {isActive && <span style={{ width: 6, height: 6, borderRadius: 999, background: tokens.accent }} />}
                </a>
              );
            })}
          </nav>
        </aside>

        <div>
          {PROJETOS.map((p, i) => (
            <article key={p.num} id={`s-${p.num}`} data-num={p.num} style={{
              padding: density === 'compact' ? '40px 0' : '64px 0',
              borderBottom: i === PROJETOS.length - 1 ? 'none' : `1px solid ${tokens.rule}`
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: 24,
                marginBottom: 20,
                flexWrap: 'wrap'
              }}>
                <h2 style={{
                  margin: 0,
                  fontSize: 'clamp(32px, 3.2vw, 48px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  fontWeight: 500,
                  color: tokens.ink
                }}>
                  {p.titulo}
                </h2>
                <a
                  href={projStyles.embedBase + p.embedKey}
                  target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 13, color: tokens.inkSoft, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  Tela cheia ↗
                </a>
              </div>
              <ProjetoCover projeto={p} height={density === 'compact' ? 460 : 580} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA final ───────────────────────────────────────────────────
function ProjetosCTA() {
  return (
    <section style={{ padding: '80px 56px 120px', fontFamily: tokens.sans }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto',
        background: tokens.ink, color: tokens.paper,
        borderRadius: 14,
        padding: '72px 64px',
        display: 'grid',
        gridTemplateColumns: '1.6fr 1fr',
        gap: 56,
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          WebkitMaskImage: 'linear-gradient(135deg, black, transparent 70%)',
          maskImage: 'linear-gradient(135deg, black, transparent 70%)'
        }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{
            margin: 0,
            fontSize: 'clamp(36px, 4.4vw, 64px)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            fontWeight: 500
          }}>
            Quer um painel desses{' '}
            <span style={{ fontFamily: tokens.serif, fontStyle: 'italic', color: tokens.accent, fontWeight: 500 }}>
              para a sua empresa?
            </span>
          </h2>
          <p style={{
            margin: '24px 0 0',
            fontSize: 18, lineHeight: 1.5,
            color: 'rgba(255,255,255,.7)',
            maxWidth: 560
          }}>
            Conta pra gente o que você precisa enxergar. A gente cuida do resto.
          </p>
        </div>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a href="index.html#contato" style={{
            fontSize: 17, fontWeight: 500,
            padding: '20px 28px', borderRadius: 999,
            background: tokens.primary, color: '#fff',
            textDecoration: 'none',
            textAlign: 'center',
            transition: 'transform .15s, box-shadow .2s',
            boxShadow: '0 1px 0 rgba(0,0,0,.04)'
          }}
          onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-2px)';e.currentTarget.style.boxShadow = `0 12px 32px ${tokens.primary}80`;}}
          onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)';e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,.04)';}}>
            Conversar com a gente →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Página inteira Projetos ─────────────────────────────────────
function ProjetosPage() {
  return (
    <div data-screen-label="Projetos" style={{
      background: tokens.paper, color: tokens.ink, fontFamily: tokens.sans,
      minHeight: '100vh', position: 'relative'
    }}>
      <Nav page="projetos" />
      <ProjetosHero />
      <ProjetosStack density="normal" />
      <ProjetosCTA />
      <Footer />
    </div>
  );
}

window.ProjetosPage = ProjetosPage;
