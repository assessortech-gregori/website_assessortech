// Página 404 — minimalista, centrada, "Ops!" em azul.

function Erro404Hero() {
  return (
    <section style={{
      minHeight: 'calc(100vh - 86px)',
      padding: '80px 56px 120px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: tokens.sans,
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: 720, width: '100%' }}>

        <Reveal>
          <div style={{
            fontFamily: tokens.serif,
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(120px, 18vw, 220px)',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            color: tokens.primary
          }}>
            Ops!
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div style={{
            height: 1, width: 64,
            background: tokens.rule,
            margin: '40px auto 40px'
          }} />
        </Reveal>

        <Reveal delay={280}>
          <h1 style={{
            margin: 0,
            fontSize: 'clamp(24px, 3vw, 36px)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            fontWeight: 500,
            color: tokens.ink
          }}>
            Não encontramos o que você procura.
          </h1>
        </Reveal>

        <Reveal delay={420}>
          <div style={{
            marginTop: 48,
            display: 'flex',
            justifyContent: 'center'
          }}>
            <a
              href="index.html"
              style={{
                fontSize: 15, fontWeight: 500,
                padding: '14px 24px', borderRadius: 999,
                background: tokens.ink, color: tokens.paper,
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 10,
                whiteSpace: 'nowrap',
                transition: 'transform .15s ease, background .15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = tokens.primary;
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = tokens.ink;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              ← Voltar ao início
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function Erro404Page() {
  return (
    <div data-screen-label="404" style={{
      background: tokens.paper, color: tokens.ink, fontFamily: tokens.sans,
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column'
    }}>
      <Nav page="404" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Erro404Hero />
      </div>
      <Footer />
    </div>
  );
}

window.Erro404Page = Erro404Page;
