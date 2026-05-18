// Rodapé — compartilhado por todas as páginas.

function Footer() {
  return (
    <footer style={{
      padding: 'clamp(32px, 6vw, 48px) clamp(20px, 5vw, 56px) clamp(28px, 5vw, 40px)',
      borderTop: `1px solid ${tokens.rule}`,
      fontFamily: tokens.sans,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 24
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <AssessorLogo size={20} primary={tokens.primary} accent={tokens.accent} />
        <span style={{ fontSize: 13, color: tokens.inkMuted }}>© AssessorTech · Business Intelligence · Desde 2019</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <a href="privacidade.html" style={{
          fontSize: 12, color: tokens.inkMuted, fontFamily: tokens.sans,
          textDecoration: 'none', letterSpacing: '0.01em',
          transition: 'color .15s'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = tokens.ink; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = tokens.inkMuted; }}>
          Política de privacidade
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="https://www.instagram.com/assessortech_bi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: tokens.inkMuted,
            transition: 'color .15s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = tokens.ink; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = tokens.inkMuted; }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/assessortech/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: tokens.inkMuted,
            transition: 'color .15s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = tokens.ink; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = tokens.inkMuted; }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { Footer });
