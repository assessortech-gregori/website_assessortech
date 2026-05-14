// V1 — sobre/time, contato, footer

function SocioCard({ src, name, role, offset }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        marginTop: offset ? 56 : 0,
        transition: 'transform .35s cubic-bezier(.2,.7,.2,1)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)'
      }}>
      <div style={{
        position: 'relative',
        aspectRatio: '3/4',
        borderRadius: 8,
        overflow: 'hidden',
        background: '#e8e6df',
        border: `1px solid ${v1.rule}`
      }}>
        <img
          src={src}
          alt={name}
          loading="lazy"
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            filter: hover ? 'grayscale(0%)' : 'grayscale(60%)',
            transition: 'filter .5s ease, transform .8s cubic-bezier(.2,.7,.2,1)',
            transform: hover ? 'scale(1.03)' : 'scale(1)'
          }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(14,17,22,.35) 0%, rgba(14,17,22,0) 50%)',
          pointerEvents: 'none'
        }} />
      </div>
      <div style={{ marginTop: 18 }}>
        <div style={{
          fontSize: 11, fontFamily: v1.mono, color: v1.inkMuted,
          letterSpacing: '0.08em', textTransform: 'uppercase'
        }}>Sócio</div>
        <div style={{
          marginTop: 6, fontSize: 19, lineHeight: 1.2, letterSpacing: '-0.015em',
          fontWeight: 500, color: v1.ink
        }}>{name}</div>
        <div style={{
          marginTop: 4, fontSize: 14, color: v1.inkSoft,
          fontFamily: v1.serif, fontStyle: 'italic'
        }}>{role}</div>
      </div>
    </div>
  );
}

function V1Sobre() {
  return (
    <section style={{ padding: '140px 56px 120px', background: v1.card, borderTop: `1px solid ${v1.rule}`, borderBottom: `1px solid ${v1.rule}`, fontFamily: v1.sans }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <Reveal>
          <div>
            <div style={{ fontSize: 12, color: v1.inkMuted, fontFamily: v1.mono, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Quem somos</div>
            <h2 style={{ margin: '20px 0 32px', fontSize: 'clamp(36px, 4.4vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em', fontWeight: 500, color: v1.ink }}>
              Time pequeno.<br />
              <span style={{ fontFamily: v1.serif, fontStyle: 'italic', fontWeight: 500, color: v1.primary }}>Atenção</span>{' '}grande.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: v1.inkSoft, margin: '0 0 16px', maxWidth: 480 }}>
              A AssessorTech nasceu em 2019 da fusão entre experiência contábil, conhecimento de regra de negócio industrial e domínio técnico em BI.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: v1.inkSoft, margin: '0 0 32px', maxWidth: 480 }}>Trabalhamos lado a lado com quem decide. Sem camadas. Sem proposta de 80 páginas. Sem espera de uma semana por resposta.</p>
            <a href="#contato" style={{
              fontSize: 15, fontWeight: 500, color: v1.ink,
              borderBottom: `1px solid ${v1.ink}`, paddingBottom: 4, textDecoration: 'none'
            }}>Conheça o time →</a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <SocioCard
              src="site/img/eleandro.jpg"
              name="Eleandro Marcos Turra"
              role="Diretor de Desenvolvimento" />
            <SocioCard
              src="site/img/luiz.jpg"
              name="Luiz Filipe Simionato"
              role="Diretor de Suporte"
              offset />
          </div>
        </Reveal>
      </div>
    </section>);

}

function V1Contato() {
  return (
    <section id="contato" style={{ padding: '140px 56px 100px', fontFamily: v1.sans }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ fontSize: 12, color: v1.inkMuted, fontFamily: v1.mono, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Contato</div>
          <h2 style={{ margin: '20px 0 0', fontSize: 'clamp(56px, 8vw, 120px)', lineHeight: 0.95, letterSpacing: '-0.04em', fontWeight: 500, color: v1.ink, maxWidth: 1200 }}>
            Conta o problema.<br />
            <span style={{ fontFamily: v1.serif, fontStyle: 'italic', fontWeight: 500, color: v1.primary }}>A gente responde</span>{' '}rápido.
          </h2>
        </Reveal>
        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'stretch' }}>
          <Reveal delay={120} style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
              <ContactCard label="E-mail" value="contato@assessortech.com.br" href="mailto:contato@assessortech.com.br" icon="mail" />
              <ContactCard label="Telefone" value="54 3196 8474" href="tel:+555431968474" icon="phone" />
              <ContactCard label="WhatsApp" value="Conversar agora" href="https://api.whatsapp.com/send?1=pt_BR&phone=555431968474" icon="whatsapp" />
              <ContactCard label="Endereço" value={<>Rua Rio Branco, 1620, Sala 22 · Bairro Aparecida · Flores da Cunha · RS</>} href="https://www.google.com/maps/search/?api=1&query=-29.0305745,-51.1887997&query_place_id=ChIJVa8D6Q2aHpURYL0sZNKPqUw" icon="map" />
            </div>
          </Reveal>
          <Reveal delay={200} style={{ display: 'flex' }}>
            <V1ContactForm />
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
        border: `1px solid ${hover ? v1.accent : v1.rule}`,
        borderRadius: 8,
        background: hover ? v1.card : v1.paper,
        color: v1.ink,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        transition: 'all .2s',
        cursor: href ? 'pointer' : 'default',
        transform: hover && href ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hover ? `0 8px 22px -10px ${v1.accent}55` : 'none',
        position: 'relative',
      }}>
      {icon && (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 36, height: 36, borderRadius: 999,
          background: 'transparent', flexShrink: 0,
          transition: 'color .2s',
        }}>
          <ContactIcon name={icon} color={hover ? v1.accent : v1.inkMuted} size={20} />
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0, flex: 1 }}>
        <div style={{
          fontSize: 11, fontFamily: v1.mono, letterSpacing: '0.08em', textTransform: 'uppercase',
          color: v1.inkMuted,
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

function V1ContactForm() {
  return (
    <form
      onSubmit={(e) => {e.preventDefault();alert('Formulário de demo — conecte ao backend.');}}
      style={{
        flex: 1,
        padding: 32, background: v1.card, border: `1px solid ${v1.rule}`, borderRadius: 8,
        display: 'flex', flexDirection: 'column', gap: 20
      }}>
      <FormField label="Nome" placeholder="Como podemos te chamar?" />
      <FormField label="Empresa" placeholder="Nome da sua empresa" />
      <FormField label="E-mail" placeholder="seuemail@empresa.com.br" type="email" />
      <FormField label="Conta pra gente" placeholder="Como podemos ajudar sua empresa?" textarea />
      <button type="submit" style={{
        marginTop: 8, padding: '14px 22px', background: v1.ink, color: v1.paper,
        border: 'none', borderRadius: 999, fontSize: 15, fontWeight: 500, fontFamily: v1.sans,
        cursor: 'pointer', transition: 'background .15s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = v1.primary}
      onMouseLeave={(e) => e.currentTarget.style.background = v1.ink}>
        Enviar mensagem</button>
    </form>);

}

function FormField({ label, placeholder, type = 'text', textarea }) {
  const [focus, setFocus] = React.useState(false);
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{
        fontSize: 12, fontFamily: v1.mono, letterSpacing: '0.06em', textTransform: 'uppercase',
        color: focus ? v1.primary : v1.inkMuted, transition: 'color .15s'
      }}>{label}</span>
      <Tag
        type={textarea ? undefined : type}
        placeholder={placeholder}
        rows={textarea ? 4 : undefined}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          padding: '12px 0',
          border: 'none', borderBottom: `1px solid ${focus ? v1.primary : v1.rule}`,
          background: 'transparent', outline: 'none',
          fontSize: 16, color: v1.ink, fontFamily: v1.sans,
          resize: textarea ? 'vertical' : 'none',
          transition: 'border-color .15s'
        }} />
    </label>);

}

function V1Footer() {
  return (
    <footer style={{
      padding: '48px 56px 40px',
      borderTop: `1px solid ${v1.rule}`,
      fontFamily: v1.sans,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 24
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <AssessorLogo size={20} primary={v1.primary} accent={v1.accent} />
        <span style={{ fontSize: 13, color: v1.inkMuted }}>© AssessorTech · Business Intelligence · Desde 2019</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <a href="privacidade.html" style={{
          fontSize: 12, color: v1.inkMuted, fontFamily: v1.sans,
          textDecoration: 'none', letterSpacing: '0.01em',
          transition: 'color .15s'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = v1.ink; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = v1.inkMuted; }}>
          Política de privacidade
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="https://www.instagram.com/assessortech_bi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: v1.inkMuted,
            transition: 'color .15s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = v1.ink; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = v1.inkMuted; }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/assessortech/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: v1.inkMuted,
            transition: 'color .15s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = v1.ink; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = v1.inkMuted; }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>);

}

// ─── Página inteira V1 ──────────────────────────────────────────
function SiteV1() {
  return (
    <div data-screen-label="AssessorTech" style={{
      background: v1.paper, color: v1.ink, fontFamily: v1.sans,
      minHeight: '100vh', overflowX: 'hidden', position: 'relative'
    }}>
      <V1Nav />
      <V1Hero />
      <V1AnySource />
      <V1Manifesto />
      <V1Diferenciais />
      <V1Metodologia />
      <V1Beneficios />
      <V1Segmentos />
      <V1Contato />
      <V1Footer />
    </div>);

}

window.SiteV1 = SiteV1;