// Header / navegação — compartilhada por todas as páginas.
// Recebe `page` para destacar a aba ativa: 'home' | 'projetos' | 'privacidade'.

// ─── NAV ─────────────────────────────────────────────────────────
function Nav({ page = 'home' }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Trava scroll do body quando menu aberto
  React.useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [menuOpen]);

  const links = ['Diferenciais', 'Metodologia', 'Segmentos', 'Contato'];
  const onHome = page === 'home';
  const onProjetos = page === 'projetos';
  // Em outras páginas, links de seção apontam pra home
  const homeBase = onHome ? '' : 'index.html';
  const logoHref = onHome ? '#top' : 'index.html#top';
  const closeMenu = () => setMenuOpen(false);

  return (
    <React.Fragment>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        padding: '14px clamp(18px, 5vw, 56px)',
        background: scrolled ? 'rgba(250,250,247,.85)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(160%) blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(160%) blur(14px)' : 'none',
        borderBottom: scrolled ? `1px solid ${tokens.rule}` : '1px solid transparent',
        transition: 'all .25s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontFamily: tokens.sans
      }}>
        <a href={logoHref} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: tokens.accent }}>
          <AssessorLogo size={26} primary={tokens.primary} accent={tokens.accent} />
          <span style={{ fontSize: 16, letterSpacing: '-0.01em', fontWeight: 500 }}>AssessorTech</span>
        </a>

        {/* Links desktop — escondidos em mobile via CSS .nav-links */}
        <div className="nav-links" style={{ display: 'flex', gap: 'clamp(12px, 2.5vw, 32px)', alignItems: 'center' }}>
          {links.map((l) =>
            <a key={l} href={`${homeBase}#${l.toLowerCase()}`} style={{
              fontSize: 14, color: tokens.inkSoft, textDecoration: 'none',
              transition: 'color .15s'
            }}
              onMouseEnter={(e) => e.currentTarget.style.color = tokens.ink}
              onMouseLeave={(e) => e.currentTarget.style.color = tokens.inkSoft}>
              {l}</a>
          )}
          <a href="projetos.html" style={{
            position: 'relative',
            fontSize: 14, fontWeight: 500,
            padding: '9px 16px', borderRadius: 999,
            background: onProjetos ? tokens.primary : tokens.ink,
            color: tokens.paper,
            textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 8,
            transition: 'transform .15s, background .15s'
          }}
            onMouseEnter={(e) => { if (!onProjetos) { e.currentTarget.style.background = tokens.primary; } e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { if (!onProjetos) { e.currentTarget.style.background = tokens.ink; } e.currentTarget.style.transform = 'translateY(0)'; }}>
            {onProjetos && <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: '50%', background: tokens.accent, display: 'inline-block' }} />}
            Projetos {!onProjetos && '→'}</a>
        </div>

        {/* Hambúrguer mobile — escondido em desktop via CSS .nav-burger */}
        <button
          className="nav-burger"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            padding: 8,
            margin: -8,
            cursor: 'pointer',
            color: tokens.ink,
            alignItems: 'center', justifyContent: 'center',
          }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
      </nav>

      {/* Overlay drawer mobile */}
      {menuOpen && (
        <div role="dialog" aria-modal="true" style={{
          position: 'fixed', inset: 0, zIndex: 100,
          background: tokens.paper,
          display: 'flex', flexDirection: 'column',
          fontFamily: tokens.sans,
          animation: 'navMenuIn .22s cubic-bezier(.2,.7,.2,1)',
        }}>
          <style>{`
            @keyframes navMenuIn {
              from { opacity: 0; transform: translateY(-6px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          {/* Topo: logo + X (alinhado igual ao Nav) */}
          <div style={{
            padding: '14px clamp(18px, 5vw, 56px)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            borderBottom: `1px solid ${tokens.rule}`,
          }}>
            <a href={logoHref} onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: tokens.ink }}>
              <AssessorLogo size={26} primary={tokens.primary} accent={tokens.accent} />
              <span style={{ fontSize: 16, letterSpacing: '-0.01em', fontWeight: 500 }}>AssessorTech</span>
            </a>
            <button
              aria-label="Fechar menu"
              onClick={closeMenu}
              style={{
                background: 'transparent', border: 'none', padding: 8, margin: -8,
                cursor: 'pointer', color: tokens.ink,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
          </div>

          {/* Lista de links + CTA */}
          <div style={{
            flex: 1, overflowY: 'auto',
            padding: 'clamp(28px, 6vw, 56px) clamp(20px, 5vw, 56px)',
            display: 'flex', flexDirection: 'column',
          }}>
            {links.map((l, i) => (
              <a
                key={l}
                href={`${homeBase}#${l.toLowerCase()}`}
                onClick={closeMenu}
                style={{
                  fontSize: 'clamp(28px, 7.5vw, 40px)',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  color: tokens.ink,
                  textDecoration: 'none',
                  padding: '18px 0',
                  borderTop: i === 0 ? 'none' : `1px solid ${tokens.rule}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                <span>{l}</span>
                <span style={{ color: tokens.inkMuted, fontSize: 22, fontFamily: tokens.serif, fontStyle: 'italic' }}>↗</span>
              </a>
            ))}

            <a
              href="projetos.html"
              onClick={closeMenu}
              style={{
                fontSize: 'clamp(28px, 7.5vw, 40px)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                color: tokens.primary,
                textDecoration: 'none',
                padding: '18px 0',
                borderTop: `1px solid ${tokens.rule}`,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                {onProjetos && <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: '50%', background: tokens.accent, display: 'inline-block' }} />}
                Projetos
              </span>
              <span style={{ color: tokens.primary, fontSize: 22, fontFamily: tokens.serif, fontStyle: 'italic' }}>↗</span>
            </a>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

Object.assign(window, { Nav });
