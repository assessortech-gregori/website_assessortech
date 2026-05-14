// Header / navegação — compartilhada por todas as páginas.
// Recebe `page` para destacar a aba ativa: 'home' | 'projetos' | 'privacidade'.

// ─── NAV ─────────────────────────────────────────────────────────
function Nav({ page = 'home' }) {
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
      borderBottom: scrolled ? `1px solid ${tokens.rule}` : '1px solid transparent',
      transition: 'all .25s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontFamily: tokens.sans
    }}>
      <a href={logoHref} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: tokens.accent }}>
        <AssessorLogo size={26} primary={tokens.primary} accent={tokens.accent} />
        <span style={{ fontSize: 16, letterSpacing: '-0.01em', fontWeight: 500 }}>AssessorTech</span>
      </a>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
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
        onMouseEnter={(e) => {if (!onProjetos) {e.currentTarget.style.background = tokens.primary;}e.currentTarget.style.transform = 'translateY(-1px)';}}
        onMouseLeave={(e) => {if (!onProjetos) {e.currentTarget.style.background = tokens.ink;}e.currentTarget.style.transform = 'translateY(0)';}}>
          {onProjetos && <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: '50%', background: tokens.accent, display: 'inline-block' }} />}
          Projetos {!onProjetos && '→'}</a>
      </div>
    </nav>);

}

Object.assign(window, { Nav });
