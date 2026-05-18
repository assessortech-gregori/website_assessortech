// AssessorTech site — bundle de produção
// Gerado a partir dos .jsx em site/. Não editar à mão.


// ─── site/shared.jsx ─────────────────────────────────────
const tokens = {
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
const useReveal = (threshold = 0.15) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        obs.disconnect();
      }
    }, {
      threshold
    });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, shown];
};
function Reveal({
  children,
  delay = 0,
  y = 24,
  as = 'div',
  style,
  className
}) {
  const [ref, shown] = useReveal();
  const Tag = as;
  return React.createElement(Tag, {
    ref: ref,
    className: className,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
      transition: `opacity .9s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .9s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      ...style
    }
  }, children);
}
function CountUp({
  to,
  duration = 1400,
  suffix = '',
  prefix = ''
}) {
  const [ref, shown] = useReveal(0.4);
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!shown) return;
    const start = performance.now();
    let raf;
    const tick = now => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setV(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, to, duration]);
  const display = Number.isInteger(to) ? Math.round(v) : v.toFixed(1);
  return React.createElement("span", {
    ref: ref
  }, prefix, display, suffix);
}
function AssessorLogo({
  size = 28
}) {
  return React.createElement("img", {
    src: "site/img/logo.png",
    alt: "AssessorTech",
    width: size,
    height: size,
    style: {
      display: 'block'
    }
  });
}
function AssessorLogoLegacy({
  size = 28,
  primary = '#3374BB',
  accent = '#97C93B'
}) {
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    fill: "none",
    "aria-label": "AssessorTech"
  }, React.createElement("path", {
    d: "M50 8 C73 8 92 27 92 50 L92 92 L78 92 L78 78 C72 86 62 92 50 92 C27 92 8 73 8 50 C8 27 27 8 50 8 Z",
    fill: primary
  }), React.createElement("path", {
    d: "M50 24 C64 24 76 36 76 50 C76 64 64 76 50 76 C46 76 42 75 39 73 L28 78 L31 68 C27 63 24 57 24 50 C24 36 36 24 50 24 Z",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: "38",
    cy: "50",
    r: "4.5",
    fill: accent
  }), React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "4.5",
    fill: accent
  }), React.createElement("circle", {
    cx: "62",
    cy: "50",
    r: "4.5",
    fill: accent
  }));
}
function ImagePlaceholder({
  label,
  ratio = '16/9',
  tone = 'light'
}) {
  const isDark = tone === 'dark';
  return React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: isDark ? 'repeating-linear-gradient(135deg, rgba(255,255,255,.04) 0 8px, rgba(255,255,255,.08) 8px 16px)' : 'repeating-linear-gradient(135deg, rgba(14,17,22,.03) 0 8px, rgba(14,17,22,.06) 8px 16px)',
      border: `1px dashed ${isDark ? 'rgba(255,255,255,.2)' : 'rgba(14,17,22,.18)'}`,
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Geist Mono", ui-monospace, monospace',
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: isDark ? 'rgba(255,255,255,.55)' : 'rgba(14,17,22,.45)'
    }
  }, label);
}
Object.assign(window, {
  tokens,
  useReveal,
  Reveal,
  CountUp,
  AssessorLogo,
  ImagePlaceholder
});

// ─── site/nav.jsx ─────────────────────────────────────
function Nav({
  page = 'home'
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['Diferenciais', 'Metodologia', 'Segmentos', 'Contato'];
  const onHome = page === 'home';
  const onProjetos = page === 'projetos';
  const homeBase = onHome ? '' : 'index.html';
  const logoHref = onHome ? '#top' : 'index.html#top';
  return React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: '18px 56px',
      background: scrolled ? 'rgba(250,250,247,.85)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(160%) blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(160%) blur(14px)' : 'none',
      borderBottom: scrolled ? `1px solid ${tokens.rule}` : '1px solid transparent',
      transition: 'all .25s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: tokens.sans
    }
  }, React.createElement("a", {
    href: logoHref,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none',
      color: tokens.accent
    }
  }, React.createElement(AssessorLogo, {
    size: 26,
    primary: tokens.primary,
    accent: tokens.accent
  }), React.createElement("span", {
    style: {
      fontSize: 16,
      letterSpacing: '-0.01em',
      fontWeight: 500
    }
  }, "AssessorTech")), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'center'
    }
  }, links.map(l => React.createElement("a", {
    key: l,
    href: `${homeBase}#${l.toLowerCase()}`,
    style: {
      fontSize: 14,
      color: tokens.inkSoft,
      textDecoration: 'none',
      transition: 'color .15s'
    },
    onMouseEnter: e => e.currentTarget.style.color = tokens.ink,
    onMouseLeave: e => e.currentTarget.style.color = tokens.inkSoft
  }, l)), React.createElement("a", {
    href: "projetos.html",
    style: {
      position: 'relative',
      fontSize: 14,
      fontWeight: 500,
      padding: '9px 16px',
      borderRadius: 999,
      background: onProjetos ? tokens.primary : tokens.ink,
      color: tokens.paper,
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      transition: 'transform .15s, background .15s'
    },
    onMouseEnter: e => {
      if (!onProjetos) {
        e.currentTarget.style.background = tokens.primary;
      }
      e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      if (!onProjetos) {
        e.currentTarget.style.background = tokens.ink;
      }
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, onProjetos && React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: tokens.accent,
      display: 'inline-block'
    }
  }), "Projetos ", !onProjetos && '→')));
}
Object.assign(window, {
  Nav
});

// ─── site/footer.jsx ─────────────────────────────────────
function Footer() {
  return React.createElement("footer", {
    style: {
      padding: '48px 56px 40px',
      borderTop: `1px solid ${tokens.rule}`,
      fontFamily: tokens.sans,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 24
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement(AssessorLogo, {
    size: 20,
    primary: tokens.primary,
    accent: tokens.accent
  }), React.createElement("span", {
    style: {
      fontSize: 13,
      color: tokens.inkMuted
    }
  }, "\xA9 AssessorTech \xB7 Business Intelligence \xB7 Desde 2019")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, React.createElement("a", {
    href: "privacidade.html",
    style: {
      fontSize: 12,
      color: tokens.inkMuted,
      fontFamily: tokens.sans,
      textDecoration: 'none',
      letterSpacing: '0.01em',
      transition: 'color .15s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = tokens.ink;
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = tokens.inkMuted;
    }
  }, "Pol\xEDtica de privacidade"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, React.createElement("a", {
    href: "https://www.instagram.com/assessortech_bi/",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Instagram",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: tokens.inkMuted,
      transition: 'color .15s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = tokens.ink;
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = tokens.inkMuted;
    }
  }, React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1",
    fill: "currentColor"
  }))), React.createElement("a", {
    href: "https://www.linkedin.com/company/assessortech/",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "LinkedIn",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: tokens.inkMuted,
      transition: 'color .15s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = tokens.ink;
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = tokens.inkMuted;
    }
  }, React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
  }))))));
}
Object.assign(window, {
  Footer
});

// ─── site/home.jsx ─────────────────────────────────────
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Hero() {
  return React.createElement("section", {
    id: "top",
    style: {
      padding: '64px 56px 120px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: tokens.sans
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: `linear-gradient(to right, rgba(14,17,22,.04) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(14,17,22,.04) 1px, transparent 1px)`,
      backgroundSize: '80px 80px',
      backgroundPosition: 'center top',
      WebkitMaskImage: 'linear-gradient(180deg, black, black 60%, transparent 100%)',
      maskImage: 'linear-gradient(180deg, black, black 60%, transparent 100%)'
    }
  }), React.createElement("style", null, `
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
      `), React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      position: 'relative'
    }
  }, React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(56px, 8vw, 132px)',
      lineHeight: 0.92,
      letterSpacing: '-0.04em',
      fontWeight: 500,
      color: tokens.ink
    }
  }, React.createElement("span", {
    className: "hero-line-mask"
  }, React.createElement("span", null, "Intelig\xEAncia de dados")), React.createElement("span", {
    className: "hero-line-mask"
  }, React.createElement("span", null, "com", ' ', React.createElement("span", {
    style: {
      fontFamily: tokens.serif,
      fontStyle: 'italic',
      color: tokens.primary,
      fontWeight: 500
    }
  }, "experi\xEAncia"))), React.createElement("span", {
    className: "hero-line-mask"
  }, React.createElement("span", null, "de neg\xF3cio."))), React.createElement("div", {
    className: "hero-fade",
    style: {
      marginTop: 56,
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 80,
      alignItems: 'end'
    }
  }, React.createElement("p", {
    style: {
      fontSize: 22,
      lineHeight: 1.4,
      color: tokens.inkSoft,
      maxWidth: 620,
      margin: 0,
      letterSpacing: '-0.005em'
    }
  }, "Traduzimos a regra do seu neg\xF3cio em dashboards e indicadores que apoiam decis\xE3o. Independente do sistema, buscamos os dados e devolvemos clareza \u2014 sem projetos longos, em pequenas entregas constantes."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, React.createElement("a", {
    href: "#contato",
    style: {
      fontSize: 15,
      fontWeight: 500,
      padding: '14px 22px',
      borderRadius: 999,
      background: tokens.primary,
      color: '#fff',
      textDecoration: 'none',
      transition: 'transform .2s, box-shadow .2s',
      boxShadow: '0 1px 0 rgba(0,0,0,.04)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = `0 8px 24px ${tokens.primary}40`;
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,.04)';
    }
  }, "Come\xE7ar um projeto"), React.createElement("a", {
    href: "#metodologia",
    style: {
      fontSize: 15,
      fontWeight: 500,
      padding: '14px 22px',
      borderRadius: 999,
      background: 'transparent',
      color: tokens.ink,
      textDecoration: 'none',
      border: `1px solid ${tokens.rule}`,
      transition: 'background .15s, border-color .15s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = tokens.card;
      e.currentTarget.style.borderColor = 'rgba(14,17,22,.2)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.borderColor = tokens.rule;
    }
  }, "Como trabalhamos"))), React.createElement(Reveal, {
    delay: 400
  }, React.createElement("div", {
    style: {
      marginTop: 96,
      position: 'relative'
    }
  }, React.createElement(HeroMockup, null)))));
}
function HeroMockup() {
  const bars = [42, 68, 51, 78, 64, 88, 72, 95, 84, 102, 91, 118];
  return React.createElement("div", {
    style: {
      background: tokens.card,
      borderRadius: 14,
      border: `1px solid ${tokens.rule}`,
      boxShadow: '0 1px 0 rgba(0,0,0,.02), 0 24px 56px -20px rgba(14,17,22,.18)',
      padding: 28,
      maxWidth: 1240,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 24,
      fontFamily: tokens.sans
    }
  }, React.createElement("div", {
    style: {
      borderRight: `1px solid ${tokens.rule}`,
      paddingRight: 24
    }
  }, React.createElement("div", {
    style: {
      fontSize: 12,
      color: tokens.inkMuted,
      fontFamily: tokens.mono,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, "Receita \xB7 YTD"), React.createElement("div", {
    style: {
      fontSize: 44,
      letterSpacing: '-0.03em',
      fontWeight: 500,
      marginTop: 6,
      color: tokens.ink
    }
  }, "R$ ", React.createElement(CountUp, {
    to: 48.2,
    suffix: "M",
    duration: 3000
  })), React.createElement("div", {
    style: {
      fontSize: 13,
      color: tokens.accent === '#97C93B' ? '#5e8a1f' : tokens.accent,
      marginTop: 4,
      fontWeight: 500
    }
  }, "\u2191 12,4% vs. ano anterior"), React.createElement("svg", {
    viewBox: "0 0 240 60",
    style: {
      width: '100%',
      marginTop: 18
    }
  }, React.createElement("path", {
    d: "M0,45 C30,42 50,38 80,32 S140,18 180,12 S230,8 240,6",
    fill: "none",
    stroke: tokens.primary,
    strokeWidth: "2"
  }), React.createElement("path", {
    d: "M0,45 C30,42 50,38 80,32 S140,18 180,12 S230,8 240,6 L240,60 L0,60 Z",
    fill: tokens.primary,
    fillOpacity: "0.08"
  }))), React.createElement("div", {
    style: {
      borderRight: `1px solid ${tokens.rule}`,
      paddingRight: 24
    }
  }, React.createElement("div", {
    style: {
      fontSize: 12,
      color: tokens.inkMuted,
      fontFamily: tokens.mono,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, "Margem por Linha"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 6,
      height: 130,
      marginTop: 18
    }
  }, bars.map((h, i) => React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: `${h}%`,
      background: i === 9 ? tokens.primary : i === 11 ? tokens.accent : 'rgba(51,116,187,.18)',
      borderRadius: '3px 3px 0 0',
      transition: 'opacity .2s'
    }
  }))), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 10,
      fontSize: 10,
      color: tokens.inkMuted,
      fontFamily: tokens.mono
    }
  }, React.createElement("span", null, "JAN"), React.createElement("span", null, "ABR"), React.createElement("span", null, "JUL"), React.createElement("span", null, "OUT"), React.createElement("span", null, "DEZ"))), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 12,
      color: tokens.inkMuted,
      fontFamily: tokens.mono,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, "INDICADORES"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 12
    }
  }, [['Receita — mês atual', 'R$ 4,1M', 'up'], ['Margem bruta', '38,2%', 'up'], ['Inadimplência', '2,1%', 'down'], ['Ticket médio', 'R$ 1.840', 'up'], ['Custo por hora', 'R$ 142', 'flat']].map(([label, val, dir]) => React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: `1px solid ${tokens.rule}`,
      fontSize: 14
    }
  }, React.createElement("span", {
    style: {
      color: tokens.inkSoft
    }
  }, label), React.createElement("span", {
    style: {
      fontFamily: tokens.mono,
      color: dir === 'up' ? '#5e8a1f' : dir === 'down' ? '#b3433a' : tokens.ink,
      fontSize: 13,
      fontWeight: 500
    }
  }, val))))));
}
function Clientes() {
  const logos = [{
    slug: 'giordani',
    nome: 'Giordani Turismo'
  }, {
    slug: 'chandon',
    nome: 'Chandon'
  }, {
    slug: 'tecnovin',
    nome: 'Tecnovin'
  }, {
    slug: 'caderode',
    nome: 'Caderode'
  }, {
    slug: 'robopac',
    nome: 'Robopac'
  }, {
    slug: 'bepo',
    nome: 'Bepo'
  }, {
    slug: 'ultragaz',
    nome: 'Ultragaz'
  }, {
    slug: 'neogas',
    nome: 'NEOgas'
  }, {
    slug: 'gebb-work',
    nome: 'Gebb Work'
  }, {
    slug: 'toli',
    nome: 'Toli Distribuidora'
  }, {
    slug: 'ramarim',
    nome: 'Calçados Ramarim'
  }, {
    slug: 'rexfort',
    nome: 'Rexfort'
  }, {
    slug: 'jopemar',
    nome: 'Jopemar'
  }, {
    slug: 'express',
    nome: 'Express Restaurantes'
  }, {
    slug: 'fva',
    nome: 'FVA'
  }, {
    slug: 'sular',
    nome: 'Sular Móveis'
  }, {
    slug: 'irapuru',
    nome: 'Irapuru Transportes'
  }, {
    slug: 'control-tech',
    nome: 'Control Tech'
  }];
  const logosLoop = [...logos, ...logos];
  return React.createElement("section", {
    style: {
      padding: '64px 56px',
      borderTop: `1px solid ${tokens.rule}`,
      borderBottom: `1px solid ${tokens.rule}`,
      background: tokens.card,
      fontFamily: tokens.sans,
      overflow: 'hidden'
    }
  }, React.createElement("style", null, `
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
      `), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: 80,
      maxWidth: 1240,
      margin: '0 auto',
      alignItems: 'start'
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 12,
      color: tokens.inkMuted,
      fontFamily: tokens.mono,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, "Conex\xF5es"), React.createElement("p", {
    style: {
      fontSize: 22,
      lineHeight: 1.35,
      margin: '14px 0 0',
      color: tokens.ink,
      letterSpacing: '-0.01em'
    }
  }, "Qualquer sistema. Qualquer fonte.", ' ', React.createElement("span", {
    style: {
      color: tokens.inkSoft
    }
  }, "Garimpamos o dado onde ele estiver."))), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 12,
      color: tokens.inkMuted,
      fontFamily: tokens.mono,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      marginBottom: 28
    }
  }, "Clientes"), React.createElement("div", {
    className: "logos-mask",
    style: {
      position: 'relative',
      overflow: 'hidden',
      WebkitMaskImage: `linear-gradient(90deg, transparent 0, black 60px, black calc(100% - 60px), transparent 100%)`,
      maskImage: `linear-gradient(90deg, transparent 0, black 60px, black calc(100% - 60px), transparent 100%)`
    }
  }, React.createElement("div", {
    className: "logos-track"
  }, logosLoop.map((logo, i) => React.createElement("div", {
    key: `${logo.slug}-${i}`,
    className: "logo-item",
    title: logo.nome
  }, React.createElement("img", {
    src: `site/img/clientes/logo-${logo.slug}.png`,
    alt: logo.nome
  }))))))));
}
function Manifesto() {
  return React.createElement("section", {
    id: "sobre",
    style: {
      padding: '160px 56px 140px',
      fontFamily: tokens.sans
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, React.createElement(Reveal, null, React.createElement("div", {
    style: {
      fontSize: 12,
      color: tokens.inkMuted,
      fontFamily: tokens.mono,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, "Sobre n\xF3s")), React.createElement(Reveal, {
    delay: 120
  }, React.createElement("h2", {
    style: {
      margin: '24px 0 0',
      fontSize: 'clamp(40px, 5.6vw, 84px)',
      lineHeight: 1.02,
      letterSpacing: '-0.03em',
      fontWeight: 500,
      color: tokens.ink,
      maxWidth: 1100
    }
  }, "Sua empresa tem dados.", React.createElement("br", null), "A gente ", React.createElement("span", {
    style: {
      fontFamily: tokens.serif,
      fontStyle: 'italic',
      fontWeight: 500,
      color: tokens.primary
    }
  }, "traduz"), ' ', "em decis\xF5es que geram ", React.createElement("span", {
    style: {
      textDecoration: 'underline',
      textDecorationColor: tokens.accent,
      textDecorationThickness: 6,
      textUnderlineOffset: 8
    }
  }, "resultados"), ".")), React.createElement(Reveal, {
    delay: 260
  }, React.createElement("div", {
    style: {
      marginTop: 64,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 48,
      borderTop: `1px solid ${tokens.rule}`,
      paddingTop: 40
    }
  }, React.createElement(Stat, {
    number: 100,
    suffix: "+",
    label: "Clientes atendidos"
  }), React.createElement(Stat, {
    number: 25,
    suffix: "+",
    label: "Sistemas integrados"
  }), React.createElement(Stat, {
    number: 2019,
    label: "Atuamos desde"
  })))));
}
function Stat({
  number,
  label,
  suffix = ''
}) {
  return React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 64,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      fontWeight: 500,
      color: tokens.ink,
      fontFamily: tokens.sans
    }
  }, typeof number === 'number' ? React.createElement(CountUp, {
    to: number,
    suffix: suffix
  }) : number), React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 14,
      color: tokens.inkSoft
    }
  }, label));
}
function Diferenciais() {
  const items = [{
    n: '01',
    title: 'Bagagem de negócio,\nnão só de código.',
    body: 'Nossos sócios vieram da contabilidade e da implantação de sistemas antes de entrar em BI. Falamos DRE, plano de contas, regime tributário, fechamento. Você não precisa traduzir o problema pra gente.',
    tag: 'POSTURA'
  }, {
    n: '02',
    title: 'Conhecimento real\nde regra industrial.',
    body: 'Atendemos indústrias de vários ramos e sabemos como o chão de fábrica, o financeiro e o fiscal se conectam. A gente entende o que o número significa antes de modelar.',
    tag: 'POSTURA'
  }, {
    n: '03',
    title: 'Pequenas entregas,\nconstantes.',
    body: 'A gente entrega em ciclos curtos. O resultado aparece em semanas, não em meses. Você valida no caminho — sem chegar no fim do projeto e descobrir que precisa mudar tudo.',
    tag: 'RITMO'
  }, {
    n: '04',
    title: 'Atendimento direto\ncom quem executa.',
    body: 'Sem camadas de gerente de conta. Solução desenhada para a sua operação, não pacote pronto empurrado. Se precisar, vamos até você.',
    tag: 'PROXIMIDADE'
  }];
  return React.createElement("section", {
    id: "diferenciais",
    style: {
      padding: '120px 56px',
      background: tokens.card,
      borderTop: `1px solid ${tokens.rule}`,
      borderBottom: `1px solid ${tokens.rule}`,
      fontFamily: tokens.sans
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, React.createElement(Reveal, null, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 64,
      gap: 40
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 12,
      color: tokens.inkMuted,
      fontFamily: tokens.mono,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, "O que nos torna \xFAnicos"), React.createElement("h2", {
    style: {
      margin: '20px 0 0',
      fontSize: 'clamp(40px, 5vw, 72px)',
      lineHeight: 1,
      letterSpacing: '-0.03em',
      fontWeight: 500,
      color: tokens.ink
    }
  }, "Diferenciais que", React.createElement("br", null), "s\xE3o ", React.createElement("span", {
    style: {
      fontFamily: tokens.serif,
      fontStyle: 'italic',
      fontWeight: 500,
      color: "rgb(51, 116, 187)"
    }
  }, "postura"), ", n\xE3o t\xF3picos.")), React.createElement("p", {
    style: {
      fontSize: 16,
      color: tokens.inkSoft,
      maxWidth: 360,
      margin: 0,
      lineHeight: 1.5
    }
  }, "Cada projeto reflete a realidade de cada cliente. Por isso o nosso jeito de trabalhar come\xE7a antes do primeiro dashboard."))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 0,
      borderTop: `1px solid ${tokens.rule}`,
      borderLeft: `1px solid ${tokens.rule}`
    }
  }, items.map((it, i) => React.createElement(DiffCard, _extends({
    key: it.n
  }, it, {
    delay: i * 80
  }))))));
}
function DiffCard({
  n,
  title,
  body,
  tag,
  delay
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement(Reveal, {
    delay: delay,
    style: {
      height: '100%'
    }
  }, React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: '48px 40px 44px',
      borderRight: `1px solid ${tokens.rule}`,
      borderBottom: `1px solid ${tokens.rule}`,
      background: hover ? tokens.paper : tokens.card,
      transition: 'background .2s',
      position: 'relative',
      minHeight: 380,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: tokens.serifNumber,
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 64,
      lineHeight: 1,
      color: hover ? tokens.primary : tokens.inkMuted,
      transition: 'color .25s'
    }
  }, n)), React.createElement("div", null, React.createElement("h3", {
    style: {
      margin: '40px 0 16px',
      fontSize: 28,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      fontWeight: 500,
      color: tokens.ink,
      whiteSpace: 'pre-line'
    }
  }, title), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.55,
      color: tokens.inkSoft
    }
  }, body))));
}
function Metodologia() {
  const steps = [{
    n: '01',
    title: 'Levantamento',
    body: 'Compreendemos os objetivos e desafios da sua empresa. Antes de uma linha de código, entendemos o negócio.',
    icon: 'discover'
  }, {
    n: '02',
    title: 'Modelagem',
    body: 'Estruturamos e organizamos as informações. Limpeza, transformação e modelagem dos dados onde quer que estejam.',
    icon: 'model'
  }, {
    n: '03',
    title: 'Desenvolvimento',
    body: 'Dashboards e relatórios visuais, intuitivos, desenhados para o seu fluxo de decisão.',
    icon: 'build'
  }, {
    n: '04',
    title: 'Validação',
    body: 'Ajustes em conjunto com a equipe do cliente. Iteração rápida até fazer sentido pra quem vai usar.',
    icon: 'validate'
  }, {
    n: '05',
    title: 'Suporte contínuo',
    body: 'Acompanhamento, evolução e aderência da solução ao longo do tempo. A gente fica.',
    icon: 'support'
  }];
  return React.createElement("section", {
    id: "metodologia",
    style: {
      padding: '160px 56px 140px',
      fontFamily: tokens.sans
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, React.createElement(Reveal, null, React.createElement("div", {
    style: {
      fontSize: 12,
      color: tokens.inkMuted,
      fontFamily: tokens.mono,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, "Metodologia"), React.createElement("h2", {
    style: {
      margin: '20px 0 0',
      fontSize: 'clamp(40px, 5vw, 72px)',
      lineHeight: 1,
      letterSpacing: '-0.03em',
      fontWeight: 500,
      color: tokens.ink,
      maxWidth: 900
    }
  }, "Cinco passos.", React.createElement("br", null), "Repetidos com ", React.createElement("span", {
    style: {
      fontFamily: tokens.serif,
      fontStyle: 'italic',
      fontWeight: 500,
      color: tokens.primary
    }
  }, "cuidado"), ' ', "em cada projeto.")), React.createElement("div", {
    style: {
      marginTop: 80,
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: 0
    }
  }, steps.map((s, i) => React.createElement(Step, _extends({
    key: s.n
  }, s, {
    first: i === 0,
    last: i === steps.length - 1,
    delay: i * 60
  }))))));
}
function FlowDiagram({
  steps
}) {
  const [active, setActive] = React.useState(null);
  return React.createElement("div", {
    style: {
      marginTop: 64,
      padding: '56px 40px 40px',
      background: tokens.card,
      border: `1px solid ${tokens.rule}`,
      borderRadius: 16,
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 0,
      position: 'relative'
    }
  }, React.createElement("svg", {
    style: {
      position: 'absolute',
      top: 36,
      left: '10%',
      right: '10%',
      width: '80%',
      height: 4,
      pointerEvents: 'none'
    },
    viewBox: "0 0 1000 4",
    preserveAspectRatio: "none"
  }, React.createElement("line", {
    x1: "0",
    y1: "2",
    x2: "1000",
    y2: "2",
    stroke: tokens.rule,
    strokeWidth: "2",
    strokeDasharray: "4 6"
  })), steps.map((s, i) => React.createElement("div", {
    key: s.n,
    onMouseEnter: () => setActive(i),
    onMouseLeave: () => setActive(null),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'default',
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 999,
      background: active === i ? tokens.primary : tokens.paper,
      border: `1px solid ${active === i ? tokens.primary : tokens.rule}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all .25s',
      transform: active === i ? 'scale(1.08)' : 'scale(1)',
      boxShadow: active === i ? `0 8px 24px ${tokens.primary}30` : 'none',
      position: 'relative',
      zIndex: 2
    }
  }, React.createElement(FlowIcon, {
    name: s.icon,
    color: active === i ? '#fff' : tokens.primary,
    size: 32
  })), React.createElement("div", {
    style: {
      fontFamily: tokens.mono,
      fontSize: 11,
      color: tokens.inkMuted,
      marginTop: 16,
      letterSpacing: '0.06em'
    }
  }, "STEP / ", s.n), React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: tokens.ink,
      marginTop: 4,
      letterSpacing: '-0.01em',
      transition: 'color .2s',
      textAlign: 'center'
    }
  }, s.title)))), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 72,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-around',
      pointerEvents: 'none'
    }
  }, [0, 1, 2, 3].map(i => React.createElement("span", {
    key: i,
    style: {
      width: 0,
      height: 0,
      borderTop: '5px solid transparent',
      borderBottom: '5px solid transparent',
      borderLeft: `7px solid ${tokens.accent}`,
      marginLeft: `${20 * (i + 1)}%`,
      opacity: 0.6
    }
  }))));
}
function FlowIcon({
  name,
  color,
  size = 28
}) {
  const s = {
    width: size,
    height: size,
    fill: 'none',
    stroke: color,
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  switch (name) {
    case 'discover':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 32 32"
      }), React.createElement("path", {
        d: "M4 8h17a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-9l-8 6V8z"
      }), React.createElement("path", {
        d: "M9 12h10M9 16h7"
      }));
    case 'model':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 32 32"
      }), React.createElement("path", {
        d: "M16 4l12 6-12 6L4 10z"
      }), React.createElement("path", {
        d: "M4 16l12 6 12-6M4 22l12 6 12-6"
      }));
    case 'build':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 32 32"
      }), React.createElement("path", {
        d: "M11 8l-7 8 7 8M21 8l7 8-7 8M18 6l-4 20"
      }));
    case 'validate':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 32 32"
      }), React.createElement("circle", {
        cx: "16",
        cy: "16",
        r: "11"
      }), React.createElement("path", {
        d: "M11 16l4 4 6-8"
      }));
    case 'support':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 32 32"
      }), React.createElement("path", {
        d: "M5 18v-2a11 11 0 0 1 22 0v2"
      }), React.createElement("rect", {
        x: "3",
        y: "18",
        width: "6",
        height: "8",
        rx: "1.5"
      }), React.createElement("rect", {
        x: "23",
        y: "18",
        width: "6",
        height: "8",
        rx: "1.5"
      }));
    default:
      return null;
  }
}
function Step({
  n,
  title,
  body,
  icon,
  first,
  last,
  delay
}) {
  return React.createElement(React.Fragment, null, React.createElement(Reveal, {
    delay: delay,
    style: {
      position: 'relative'
    }
  }, !first && React.createElement("div", {
    className: "step-chev",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      alignItems: 'flex-start',
      paddingLeft: 4,
      paddingTop: 20,
      color: tokens.primary
    }
  }, React.createElement("style", null, `
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
            `), React.createElement("svg", {
    width: "26",
    height: "11",
    viewBox: "0 0 24 10",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M3 2l9 6 9-6"
  })), React.createElement("svg", {
    width: "26",
    height: "11",
    viewBox: "0 0 24 10",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M3 2l9 6 9-6"
  }))), React.createElement("div", {
    style: {
      paddingTop: first ? 38 : 14,
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, React.createElement("div", {
    style: {
      fontFamily: tokens.serifNumber,
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 64,
      lineHeight: 1,
      color: tokens.primary,
      letterSpacing: '-0.02em',
      width: 80,
      textAlign: 'left',
      flexShrink: 0
    }
  }, n), React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 10,
      background: `${tokens.primary}10`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(FlowIcon, {
    name: icon,
    color: tokens.primary,
    size: 22
  })))), React.createElement(Reveal, {
    delay: delay + 40
  }, React.createElement("div", {
    style: {
      padding: '32px 0 44px',
      borderTop: `1px solid ${tokens.rule}`,
      borderBottom: last ? `1px solid ${tokens.rule}` : 'none',
      display: 'grid',
      gridTemplateColumns: '1fr 1.6fr',
      gap: 64,
      alignItems: 'baseline'
    }
  }, React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 36,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      fontWeight: 500,
      color: tokens.ink
    }
  }, title), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.5,
      color: tokens.inkSoft,
      maxWidth: 560
    }
  }, body))));
}
function BenIcon({
  name,
  color = '#97C93B'
}) {
  const s = {
    width: 22,
    height: 22,
    fill: 'none',
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  switch (name) {
    case 'sun':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 24 24"
      }), React.createElement("path", {
        d: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
      }));
    case 'clock':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 24 24"
      }), React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), React.createElement("path", {
        d: "M12 7v5l3 2"
      }));
    case 'pulse':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 24 24"
      }), React.createElement("path", {
        d: "M3 12h4l3-8 4 16 3-8h4"
      }));
    default:
      return null;
  }
}
function Beneficios() {
  const items = [{
    icon: 'sun',
    title: 'Decisão sem achismo.',
    body: React.createElement(React.Fragment, null, "Quando o n\xFAmero certo est\xE1 na tela, a reuni\xE3o muda. Pare de discutir ", React.createElement("em", null, "qual"), " dado \xE9 o real e comece a discutir ", React.createElement("em", null, "o que"), " fazer com ele.")
  }, {
    icon: 'clock',
    title: 'Tempo de volta.',
    body: 'O time deixa de fechar planilha à mão toda semana. O relatório se atualiza sozinho, e as horas livres viram análise — não trabalho mecânico.'
  }, {
    icon: 'pulse',
    title: 'Visão do todo.',
    body: 'Vendas, estoque, financeiro, produção — tudo conversando entre si. Em vez de comparar planilhas que não fecham, você enxerga o negócio inteiro.'
  }];
  return React.createElement("section", {
    style: {
      padding: '120px 56px',
      background: tokens.ink,
      color: tokens.paper,
      fontFamily: tokens.sans
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, React.createElement(Reveal, null, React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgba(250,250,247,.5)',
      fontFamily: tokens.mono,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, "Benef\xEDcios para o seu neg\xF3cio"), React.createElement("h2", {
    style: {
      margin: '20px 0 0',
      fontSize: 'clamp(40px, 5vw, 72px)',
      lineHeight: 1.02,
      letterSpacing: '-0.03em',
      fontWeight: 500,
      maxWidth: 1000
    }
  }, "Mais do que relat\xF3rio.", React.createElement("br", null), React.createElement("span", {
    style: {
      color: 'rgba(250,250,247,.55)'
    }
  }, "Intelig\xEAncia estrat\xE9gica"), ' ', "para decidir.")), React.createElement("div", {
    style: {
      marginTop: 80,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 32
    }
  }, items.map((it, i) => React.createElement(Reveal, {
    key: it.title,
    delay: i * 100
  }, React.createElement("div", {
    style: {
      padding: '40px 32px 36px',
      border: '1px solid rgba(250,250,247,.12)',
      borderRadius: 8,
      background: 'rgba(250,250,247,.03)',
      height: '100%'
    }
  }, React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 8,
      background: 'rgba(151, 201, 59, 0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 28
    }
  }, React.createElement(BenIcon, {
    name: it.icon,
    color: tokens.accent
  })), React.createElement("h3", {
    style: {
      margin: '0 0 14px',
      fontSize: 26,
      letterSpacing: '-0.02em',
      fontWeight: 500
    }
  }, it.title), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.55,
      color: 'rgba(250,250,247,.7)'
    }
  }, it.body)))))));
}
function Segmentos() {
  const segs = [{
    name: 'Alimentação',
    icon: 'food'
  }, {
    name: 'Bebidas',
    icon: 'beverage'
  }, {
    name: 'Metalúrgica',
    icon: 'metal'
  }, {
    name: 'Moveleira',
    icon: 'furniture'
  }, {
    name: 'Química',
    icon: 'chemistry'
  }, {
    name: 'Serviços',
    icon: 'services'
  }, {
    name: 'Transportes',
    icon: 'transport'
  }, {
    name: 'Varejo',
    icon: 'retail'
  }];
  return React.createElement("section", {
    id: "segmentos",
    style: {
      padding: '140px 56px 120px',
      fontFamily: tokens.sans
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, React.createElement(Reveal, null, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 24
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 12,
      color: tokens.inkMuted,
      fontFamily: tokens.mono,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, "Segmentos atendidos"), React.createElement("h2", {
    style: {
      margin: '20px 0 0',
      fontSize: 'clamp(40px, 5vw, 72px)',
      lineHeight: 1,
      letterSpacing: '-0.03em',
      fontWeight: 500,
      color: tokens.ink,
      maxWidth: 900
    }
  }, "Onde a gente ", React.createElement("span", {
    style: {
      fontFamily: tokens.serif,
      fontStyle: 'italic',
      fontWeight: 500,
      color: tokens.primary
    }
  }, "j\xE1 entrega"), " resultado.")), React.createElement("p", {
    style: {
      fontSize: 16,
      color: tokens.inkSoft,
      maxWidth: 380,
      margin: 0,
      lineHeight: 1.5
    }
  }, "Ind\xFAstrias e opera\xE7\xF5es onde j\xE1 estruturamos BI."))), React.createElement("div", {
    style: {
      marginTop: 64,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, segs.map((s, i) => React.createElement(SegCard, _extends({
    key: s.name
  }, s, {
    delay: i * 50
  }))))));
}
function SegCard({
  name,
  icon,
  delay
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement(Reveal, {
    delay: delay
  }, React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: '36px 28px 32px',
      border: `1px solid ${tokens.rule}`,
      borderRadius: 12,
      background: hover ? tokens.card : tokens.paper,
      transition: 'all .25s',
      cursor: 'default',
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      minHeight: 200,
      transform: hover ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: hover ? '0 10px 28px -12px rgba(14,17,22,.18)' : 'none',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 10,
      background: hover ? tokens.primary : `${tokens.primary}10`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .25s'
    }
  }, React.createElement(SegIcon, {
    name: icon,
    color: hover ? '#fff' : tokens.primary,
    size: 28
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 22,
      lineHeight: 1.15,
      letterSpacing: '-0.015em',
      fontWeight: 500,
      color: tokens.ink
    }
  }, name), React.createElement("div", {
    style: {
      fontSize: 13,
      color: tokens.inkMuted,
      marginTop: 6,
      fontFamily: tokens.mono,
      opacity: hover ? 1 : 0,
      transform: hover ? 'translateY(0)' : 'translateY(4px)',
      transition: 'all .25s'
    }
  }, "conversar \u2192"))));
}
function SegIcon({
  name,
  color,
  size = 28
}) {
  const s = {
    width: size,
    height: size,
    fill: 'none',
    stroke: color,
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  switch (name) {
    case 'food':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 32 32"
      }), React.createElement("path", {
        d: "M8 4v6"
      }), React.createElement("path", {
        d: "M11.5 4v6"
      }), React.createElement("path", {
        d: "M15 4v6"
      }), React.createElement("path", {
        d: "M8 10a3.5 3.5 0 0 0 7 0"
      }), React.createElement("path", {
        d: "M11.5 10v18"
      }), React.createElement("path", {
        d: "M23 4c-2 3-3 6-3 9 0 1.5.7 2.5 2 2.5h.5v12.5"
      }));
    case 'beverage':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 32 32"
      }), React.createElement("path", {
        d: "M9 6h14l-2 20H11L9 6z"
      }), React.createElement("path", {
        d: "M10 12h12"
      }));
    case 'metal':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 32 32"
      }), React.createElement("path", {
        d: "M14 2h4v3l3 1.2 2.1-2.1 2.8 2.8L23.8 9l1.2 3h3v4h-3l-1.2 3 2.1 2.1-2.8 2.8-2.1-2.1L18 23v3h-4v-3l-3-1.2-2.1 2.1-2.8-2.8L8.2 19 7 16H4v-4h3l1.2-3-2.1-2.1 2.8-2.8L11 7.2l3-1.2z"
      }), React.createElement("circle", {
        cx: "16",
        cy: "14",
        r: "3.5"
      }));
    case 'furniture':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 32 32"
      }), React.createElement("path", {
        d: "M4 18v-4c0-2 2-4 4-4h16c2 0 4 2 4 4v4"
      }), React.createElement("path", {
        d: "M2 18h28v6H2zM6 24v3M26 24v3"
      }));
    case 'chemistry':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 32 32"
      }), React.createElement("path", {
        d: "M12 4h8v8l6 14c1 2 0 4-2 4H8c-2 0-3-2-2-4l6-14V4z"
      }), React.createElement("path", {
        d: "M9 20h14"
      }));
    case 'services':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 32 32"
      }), React.createElement("path", {
        d: "M3 13l5-3 6 2 3 3"
      }), React.createElement("path", {
        d: "M3 13v4l5 3"
      }), React.createElement("path", {
        d: "M29 13l-5-3-6 2-3 3"
      }), React.createElement("path", {
        d: "M29 13v4l-5 3"
      }), React.createElement("path", {
        d: "M11 15l4 3 6-3"
      }));
    case 'transport':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 32 32"
      }), React.createElement("rect", {
        x: "3",
        y: "10",
        width: "14",
        height: "11",
        rx: "1"
      }), React.createElement("path", {
        d: "M17 13h6l4 4v4h-10v-8z"
      }), React.createElement("circle", {
        cx: "9",
        cy: "23",
        r: "2.5"
      }), React.createElement("circle", {
        cx: "22",
        cy: "23",
        r: "2.5"
      }));
    case 'retail':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 32 32"
      }), React.createElement("path", {
        d: "M7 11h18l-2 16H9L7 11z"
      }), React.createElement("path", {
        d: "M12 11V7a4 4 0 0 1 8 0v4"
      }));
    default:
      return null;
  }
}
function Contato() {
  return React.createElement("section", {
    id: "contato",
    style: {
      padding: '140px 56px 100px',
      fontFamily: tokens.sans
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, React.createElement(Reveal, null, React.createElement("div", {
    style: {
      fontSize: 12,
      color: tokens.inkMuted,
      fontFamily: tokens.mono,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, "Contato"), React.createElement("h2", {
    style: {
      margin: '20px 0 0',
      fontSize: 'clamp(56px, 8vw, 120px)',
      lineHeight: 0.95,
      letterSpacing: '-0.04em',
      fontWeight: 500,
      color: tokens.ink,
      maxWidth: 1200
    }
  }, "Conta o problema.", React.createElement("br", null), React.createElement("span", {
    style: {
      fontFamily: tokens.serif,
      fontStyle: 'italic',
      fontWeight: 500,
      color: tokens.primary
    }
  }, "A gente responde"), ' ', "r\xE1pido.")), React.createElement("div", {
    style: {
      marginTop: 80,
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 80,
      alignItems: 'stretch'
    }
  }, React.createElement(Reveal, {
    delay: 120,
    style: {
      display: 'flex'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: '100%'
    }
  }, React.createElement(ContactCard, {
    label: "E-mail",
    value: "contato@assessortech.com.br",
    href: "mailto:contato@assessortech.com.br",
    icon: "mail"
  }), React.createElement(ContactCard, {
    label: "Telefone",
    value: "54 3196 8474",
    href: "tel:+555431968474",
    icon: "phone"
  }), React.createElement(ContactCard, {
    label: "WhatsApp",
    value: "Conversar agora",
    href: "https://api.whatsapp.com/send?1=pt_BR&phone=555431968474",
    icon: "whatsapp"
  }), React.createElement(ContactCard, {
    label: "Endere\xE7o",
    value: React.createElement(React.Fragment, null, "Rua Rio Branco, 1620, Sala 22 \xB7 Bairro Aparecida \xB7 Flores da Cunha\xA0\xB7\xA0RS"),
    href: "https://www.google.com/maps/search/?api=1&query=-29.0305745,-51.1887997&query_place_id=ChIJVa8D6Q2aHpURYL0sZNKPqUw",
    icon: "map"
  }))), React.createElement(Reveal, {
    delay: 200,
    style: {
      display: 'flex'
    }
  }, React.createElement(ContactForm, null)))));
}
function ContactIcon({
  name,
  color,
  size = 20
}) {
  const s = {
    width: size,
    height: size,
    fill: 'none',
    stroke: color,
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  switch (name) {
    case 'mail':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 24 24"
      }), React.createElement("rect", {
        x: "3",
        y: "5",
        width: "18",
        height: "14",
        rx: "2"
      }), React.createElement("path", {
        d: "M3 7l9 6 9-6"
      }));
    case 'phone':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 24 24"
      }), React.createElement("path", {
        d: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
      }));
    case 'whatsapp':
      return React.createElement("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
        "aria-label": "WhatsApp"
      }, React.createElement("path", {
        d: "M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26L3.474 19.5l3.18-1.307zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.521.074-.794.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"
      }));
    case 'map':
      return React.createElement("svg", _extends({}, s, {
        viewBox: "0 0 24 24"
      }), React.createElement("path", {
        d: "M12 22s7-7.5 7-13a7 7 0 0 0-14 0c0 5.5 7 13 7 13z"
      }), React.createElement("circle", {
        cx: "12",
        cy: "9",
        r: "2.5"
      }));
    default:
      return null;
  }
}
function ContactCard({
  label,
  value,
  href,
  icon
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return React.createElement(Tag, {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    target: href && href.startsWith('http') ? '_blank' : undefined,
    rel: href && href.startsWith('http') ? 'noopener noreferrer' : undefined,
    style: {
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
      position: 'relative'
    }
  }, icon && React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      borderRadius: 999,
      background: 'transparent',
      flexShrink: 0,
      transition: 'color .2s'
    }
  }, React.createElement(ContactIcon, {
    name: icon,
    color: hover ? tokens.accent : tokens.inkMuted,
    size: 20
  })), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0,
      flex: 1
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      fontFamily: tokens.mono,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: tokens.inkMuted
    }
  }, label), React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1.35,
      letterSpacing: '-0.01em',
      color: 'inherit',
      fontWeight: 500
    }
  }, value)));
}
const WEB3FORMS_KEY = '2adf276b-1996-44b2-9bb3-645d14bb9f6f';
function ContactForm() {
  const [status, setStatus] = React.useState('idle');
  const [errorMsg, setErrorMsg] = React.useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
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
    return React.createElement("div", {
      style: {
        flex: 1,
        padding: 32,
        background: tokens.card,
        border: `1px solid ${tokens.rule}`,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 16
      }
    }, React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: 999,
        background: `${tokens.accent}25`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement("svg", {
      width: "28",
      height: "28",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#5e8a1f",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, React.createElement("path", {
      d: "M5 13l4 4L19 7"
    }))), React.createElement("h3", {
      style: {
        margin: 0,
        fontSize: 26,
        fontWeight: 500,
        color: tokens.ink,
        letterSpacing: '-0.02em'
      }
    }, "Mensagem enviada."), React.createElement("p", {
      style: {
        margin: 0,
        color: tokens.inkSoft,
        fontSize: 16,
        lineHeight: 1.5
      }
    }, "Recebemos seu contato e respondemos em breve. Obrigado."));
  }
  const sending = status === 'sending';
  return React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      flex: 1,
      padding: 32,
      background: tokens.card,
      border: `1px solid ${tokens.rule}`,
      borderRadius: 8,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, React.createElement("input", {
    type: "hidden",
    name: "access_key",
    value: WEB3FORMS_KEY
  }), React.createElement("input", {
    type: "hidden",
    name: "subject",
    value: "Novo contato pelo site · AssessorTech"
  }), React.createElement("input", {
    type: "hidden",
    name: "from_name",
    value: "Site AssessorTech"
  }), React.createElement("input", {
    type: "checkbox",
    name: "botcheck",
    tabIndex: -1,
    style: {
      display: 'none'
    }
  }), React.createElement(FormField, {
    label: "Nome",
    name: "nome",
    placeholder: "Como podemos te chamar?",
    required: true
  }), React.createElement(FormField, {
    label: "Empresa",
    name: "empresa",
    placeholder: "Nome da sua empresa"
  }), React.createElement(FormField, {
    label: "E-mail",
    name: "email",
    placeholder: "seuemail@empresa.com.br",
    type: "email",
    required: true
  }), React.createElement(FormField, {
    label: "Conta pra gente",
    name: "mensagem",
    placeholder: "Como podemos ajudar sua empresa?",
    textarea: true,
    required: true
  }), status === 'error' && React.createElement("div", {
    style: {
      padding: '12px 16px',
      background: 'rgba(179,67,58,.08)',
      border: '1px solid rgba(179,67,58,.25)',
      borderRadius: 6,
      fontSize: 14,
      color: '#b3433a',
      lineHeight: 1.4
    }
  }, errorMsg), React.createElement("button", {
    type: "submit",
    disabled: sending,
    style: {
      marginTop: 8,
      padding: '14px 22px',
      background: sending ? tokens.inkMuted : tokens.ink,
      color: tokens.paper,
      border: 'none',
      borderRadius: 999,
      fontSize: 15,
      fontWeight: 500,
      fontFamily: tokens.sans,
      cursor: sending ? 'wait' : 'pointer',
      transition: 'background .15s'
    },
    onMouseEnter: e => {
      if (!sending) e.currentTarget.style.background = tokens.primary;
    },
    onMouseLeave: e => {
      if (!sending) e.currentTarget.style.background = tokens.ink;
    }
  }, sending ? 'Enviando…' : 'Enviar mensagem'));
}
function FormField({
  label,
  name,
  placeholder,
  type = 'text',
  textarea,
  required
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = textarea ? 'textarea' : 'input';
  return React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement("span", {
    style: {
      fontSize: 12,
      fontFamily: tokens.mono,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: focus ? tokens.primary : tokens.inkMuted,
      transition: 'color .15s'
    }
  }, label, required && React.createElement("span", {
    style: {
      color: tokens.primary,
      marginLeft: 4
    }
  }, "*")), React.createElement(Tag, {
    name: name,
    type: textarea ? undefined : type,
    placeholder: placeholder,
    required: required,
    rows: textarea ? 4 : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      padding: '12px 0',
      border: 'none',
      borderBottom: `1px solid ${focus ? tokens.primary : tokens.rule}`,
      background: 'transparent',
      outline: 'none',
      fontSize: 16,
      color: tokens.ink,
      fontFamily: tokens.sans,
      resize: textarea ? 'vertical' : 'none',
      transition: 'border-color .15s'
    }
  }));
}
function Home() {
  return React.createElement("div", {
    "data-screen-label": "AssessorTech",
    style: {
      background: tokens.paper,
      color: tokens.ink,
      fontFamily: tokens.sans,
      minHeight: '100vh',
      overflowX: 'hidden',
      position: 'relative'
    }
  }, React.createElement(Nav, null), React.createElement(Hero, null), React.createElement(Clientes, null), React.createElement(Manifesto, null), React.createElement(Diferenciais, null), React.createElement(Metodologia, null), React.createElement(Beneficios, null), React.createElement(Segmentos, null), React.createElement(Contato, null), React.createElement(Footer, null));
}
Object.assign(window, {
  Home,
  Hero,
  HeroMockup,
  Clientes,
  Manifesto,
  Stat,
  Diferenciais,
  DiffCard,
  Metodologia,
  FlowDiagram,
  FlowIcon,
  Step,
  Beneficios,
  BenIcon,
  Segmentos,
  SegCard,
  SegIcon,
  Contato,
  ContactIcon,
  ContactCard,
  ContactForm,
  FormField
});

// ─── site/projetos-data.jsx ─────────────────────────────────────
const PROJETOS = [{
  num: '01',
  categoria: 'Indicadores',
  titulo: 'Contábil & Orçamento',
  descricao: 'Acompanhamento orçado vs. realizado por centro de custo, análise vertical e horizontal do DRE, e indicadores contábeis com benchmarks setoriais.',
  metricas: ['DRE comparativa', 'Variações orçadas', 'Margens por linha', 'Liquidez & solvência'],
  embedKey: 'eyJrIjoiM2QxYTk3OWUtMjAwZS00MzQ1LWJlOGYtYzc2ZmNjN2VlMGQ3IiwidCI6IjM3YWM2ZDUwLWJlM2YtNGQ3Yy1iMTYyLTUxMDAwMGUwMzljNiJ9',
  visual: 'stackedBars'
}, {
  num: '02',
  categoria: 'Indicadores',
  titulo: 'Recursos Humanos',
  descricao: 'Headcount, turnover, absenteísmo, horas extras e folha por área. Recortes por liderança, faixa salarial e tempo de casa.',
  metricas: ['Turnover & retenção', 'Folha por área', 'Absenteísmo', 'Curva salarial'],
  embedKey: 'eyJrIjoiODk3MGM0NGUtZTM2My00MjJmLWIxZTktMGIwY2I3NjA2NzkyIiwidCI6IjM3YWM2ZDUwLWJlM2YtNGQ3Yy1iMTYyLTUxMDAwMGUwMzljNiJ9',
  visual: 'donutBars'
}, {
  num: '03',
  categoria: 'Indicadores',
  titulo: 'Gestão Comercial',
  descricao: 'Funil de vendas, ranking de vendedores, mix de produtos e elasticidade de preço. Visão por região, canal e ciclo de compra.',
  metricas: ['Funil & conversão', 'Ranking vendedores', 'Mix de produtos', 'Sazonalidade'],
  embedKey: 'eyJrIjoiODc1ZDdhOWEtNDRkZC00NzhjLWJmZDctYjE2ZGY5Y2VlNDk1IiwidCI6IjM3YWM2ZDUwLWJlM2YtNGQ3Yy1iMTYyLTUxMDAwMGUwMzljNiJ9',
  visual: 'ascendingBars'
}, {
  num: '04',
  categoria: 'Indicadores',
  titulo: 'Suprimentos & Estoques',
  descricao: 'Giro, cobertura, ruptura e curva ABC. Sugestão de compra cruzando consumo histórico com lead-time real do fornecedor.',
  metricas: ['Curva ABC', 'Giro & cobertura', 'Ruptura', 'Lead-time'],
  embedKey: 'eyJrIjoiNDhmZWMxMzYtOGU3Ni00YjkyLWExNTAtY2I5YWNiZmVmOTU2IiwidCI6IjM3YWM2ZDUwLWJlM2YtNGQ3Yy1iMTYyLTUxMDAwMGUwMzljNiJ9',
  visual: 'gridDots'
}, {
  num: '05',
  categoria: 'Simuladores',
  titulo: 'Ponto de Equilíbrio',
  descricao: 'Simulador interativo de break-even por linha de produto. Ajuste custos fixos, variáveis e preço médio e veja o ponto em que a operação se paga.',
  metricas: ['Custos fixos vs. variáveis', 'Margem de contribuição', 'Break-even por linha'],
  embedKey: 'eyJrIjoiYmFkNDlhNWUtNjJjYy00NDZkLWIzYzgtOGRiMDkyOTkwOTlkIiwidCI6IjM3YWM2ZDUwLWJlM2YtNGQ3Yy1iMTYyLTUxMDAwMGUwMzljNiJ9',
  visual: 'crossLines'
}, {
  num: '06',
  categoria: 'Simuladores',
  titulo: 'Preço de Venda',
  descricao: 'Forma o preço de venda partindo do custo, com impostos, comissões, frete e margem desejada. Compara cenários lado a lado.',
  metricas: ['Markup', 'Composição tributária', 'Cenários A/B'],
  embedKey: 'eyJrIjoiMWQ1MTYyOGUtM2Y5OS00YjQ3LTg0MjgtN2Y0ZjBhOWUzM2Y5IiwidCI6IjM3YWM2ZDUwLWJlM2YtNGQ3Yy1iMTYyLTUxMDAwMGUwMzljNiJ9',
  visual: 'calc'
}, {
  num: '07',
  categoria: 'Pesquisas',
  titulo: 'IBGE & Dados Públicos',
  descricao: 'Painel exploratório com séries econômicas, demográficas e setoriais do IBGE e demais fontes públicas. Útil para contextualizar plano de negócio.',
  metricas: ['Séries IBGE', 'PIB por setor', 'Demografia', 'Mercado de trabalho'],
  embedKey: 'eyJrIjoiYzZhMzVkZjYtYjliMy00ZTE1LTlkYTUtMjFiYWM0NWQ4Njk0IiwidCI6IjM3YWM2ZDUwLWJlM2YtNGQ3Yy1iMTYyLTUxMDAwMGUwMzljNiJ9',
  visual: 'scatter'
}];
function ProjetoVisual({
  kind,
  color,
  accent
}) {
  const p = color || '#3374BB';
  const a = accent || '#97C93B';
  if (kind === 'stackedBars') {
    return React.createElement("svg", {
      viewBox: "0 0 200 90",
      style: {
        width: '100%',
        height: '100%'
      },
      preserveAspectRatio: "xMidYMid meet"
    }, [10, 35, 60, 85, 110, 135, 160, 185].map((x, i) => React.createElement("g", {
      key: i
    }, React.createElement("rect", {
      x: x,
      y: 50 - i * 2,
      width: "14",
      height: 20 + i * 2,
      fill: p,
      opacity: "0.85"
    }), React.createElement("rect", {
      x: x,
      y: 70 - i * 1.5,
      width: "14",
      height: 15 + i * 1.5,
      fill: a,
      opacity: "0.7"
    }))));
  }
  if (kind === 'donutBars') {
    return React.createElement("svg", {
      viewBox: "0 0 200 90",
      style: {
        width: '100%',
        height: '100%'
      },
      preserveAspectRatio: "xMidYMid meet"
    }, React.createElement("circle", {
      cx: "45",
      cy: "45",
      r: "32",
      fill: "none",
      stroke: p,
      strokeOpacity: "0.18",
      strokeWidth: "10"
    }), React.createElement("circle", {
      cx: "45",
      cy: "45",
      r: "32",
      fill: "none",
      stroke: p,
      strokeWidth: "10",
      strokeDasharray: "120 80",
      strokeDashoffset: "-20",
      transform: "rotate(-90 45 45)"
    }), React.createElement("circle", {
      cx: "45",
      cy: "45",
      r: "32",
      fill: "none",
      stroke: a,
      strokeWidth: "10",
      strokeDasharray: "42 158",
      strokeDashoffset: "-140",
      transform: "rotate(-90 45 45)"
    }), [100, 120, 140, 160, 180].map((x, i) => React.createElement("rect", {
      key: i,
      x: x,
      y: 75 - (i + 1) * 10,
      width: "12",
      height: (i + 1) * 10,
      fill: p,
      opacity: 0.3 + i * 0.15
    })));
  }
  if (kind === 'ascendingBars') {
    return React.createElement("svg", {
      viewBox: "0 0 200 90",
      style: {
        width: '100%',
        height: '100%'
      },
      preserveAspectRatio: "xMidYMid meet"
    }, React.createElement("path", {
      d: "M5,75 Q40,68 80,52 T160,18 L195,10",
      fill: "none",
      stroke: p,
      strokeWidth: "2"
    }), [20, 50, 80, 110, 140, 170].map((x, i) => React.createElement("rect", {
      key: i,
      x: x,
      y: 80 - (i + 1) * 9,
      width: "18",
      height: (i + 1) * 9,
      fill: i === 5 ? a : p,
      opacity: i === 5 ? 0.9 : 0.18 + i * 0.08,
      rx: "1"
    })));
  }
  if (kind === 'gridDots') {
    const cells = [];
    for (let r = 0; r < 5; r++) for (let c = 0; c < 12; c++) {
      const filled = (r * 12 + c * 3) % 7 < 3;
      const hot = r === 2 && c === 7;
      cells.push(React.createElement("rect", {
        key: `${r}-${c}`,
        x: 5 + c * 16,
        y: 5 + r * 16,
        width: "11",
        height: "11",
        fill: hot ? a : filled ? p : 'currentColor',
        fillOpacity: hot ? 1 : filled ? 0.7 : 0.06,
        rx: "1"
      }));
    }
    return React.createElement("svg", {
      viewBox: "0 0 200 90",
      style: {
        width: '100%',
        height: '100%'
      },
      preserveAspectRatio: "xMidYMid meet"
    }, cells);
  }
  if (kind === 'crossLines') {
    return React.createElement("svg", {
      viewBox: "0 0 200 90",
      style: {
        width: '100%',
        height: '100%'
      },
      preserveAspectRatio: "xMidYMid meet"
    }, React.createElement("line", {
      x1: "10",
      y1: "20",
      x2: "190",
      y2: "75",
      stroke: p,
      strokeWidth: "2"
    }), React.createElement("line", {
      x1: "10",
      y1: "80",
      x2: "190",
      y2: "15",
      stroke: a,
      strokeWidth: "2"
    }), React.createElement("circle", {
      cx: "100",
      cy: "47",
      r: "6",
      fill: p
    }), React.createElement("circle", {
      cx: "100",
      cy: "47",
      r: "14",
      fill: "none",
      stroke: p,
      strokeOpacity: "0.3",
      strokeWidth: "1.5"
    }), React.createElement("text", {
      x: "115",
      y: "50",
      fontFamily: "Geist Mono, monospace",
      fontSize: "9",
      fill: p,
      opacity: "0.8"
    }, "break-even"));
  }
  if (kind === 'calc') {
    return React.createElement("svg", {
      viewBox: "0 0 200 90",
      style: {
        width: '100%',
        height: '100%'
      },
      preserveAspectRatio: "xMidYMid meet"
    }, React.createElement("rect", {
      x: "10",
      y: "65",
      width: "180",
      height: "14",
      fill: p,
      opacity: "0.85",
      rx: "1"
    }), React.createElement("rect", {
      x: "10",
      y: "48",
      width: "120",
      height: "14",
      fill: p,
      opacity: "0.55",
      rx: "1"
    }), React.createElement("rect", {
      x: "10",
      y: "31",
      width: "80",
      height: "14",
      fill: p,
      opacity: "0.3",
      rx: "1"
    }), React.createElement("rect", {
      x: "10",
      y: "14",
      width: "180",
      height: "14",
      fill: a,
      opacity: "0.85",
      rx: "1"
    }), React.createElement("text", {
      x: "195",
      y: "76",
      textAnchor: "end",
      fontFamily: "Geist Mono, monospace",
      fontSize: "8",
      fill: "#fff"
    }, "custo"), React.createElement("text", {
      x: "195",
      y: "59",
      textAnchor: "end",
      fontFamily: "Geist Mono, monospace",
      fontSize: "8",
      fill: "#fff"
    }, "impostos"), React.createElement("text", {
      x: "195",
      y: "42",
      textAnchor: "end",
      fontFamily: "Geist Mono, monospace",
      fontSize: "8",
      fill: p
    }, "comiss\xE3o"), React.createElement("text", {
      x: "195",
      y: "25",
      textAnchor: "end",
      fontFamily: "Geist Mono, monospace",
      fontSize: "8",
      fill: "#1F4F87"
    }, "pre\xE7o final"));
  }
  if (kind === 'scatter') {
    const pts = [];
    for (let i = 0; i < 60; i++) {
      const x = 10 + i * 37 % 180;
      const y = 10 + (i * 13 + 7) % 70;
      const r = 1.5 + i % 4 * 0.8;
      pts.push(React.createElement("circle", {
        key: i,
        cx: x,
        cy: y,
        r: r,
        fill: i % 9 === 0 ? a : p,
        fillOpacity: i % 9 === 0 ? 0.9 : 0.25 + i % 5 * 0.1
      }));
    }
    return React.createElement("svg", {
      viewBox: "0 0 200 90",
      style: {
        width: '100%',
        height: '100%'
      },
      preserveAspectRatio: "xMidYMid meet"
    }, pts);
  }
  return null;
}
window.PROJETOS = PROJETOS;
window.ProjetoVisual = ProjetoVisual;

// ─── site/projetos.jsx ─────────────────────────────────────
const projStyles = {
  embedBase: 'https://app.powerbi.com/view?r='
};
function ProjetoCover({
  projeto,
  height = 460
}) {
  return React.createElement("div", {
    style: {
      position: 'relative',
      height,
      background: '#0E1116',
      borderRadius: 4,
      overflow: 'hidden',
      border: `1px solid ${tokens.rule}`
    }
  }, React.createElement("iframe", {
    src: projStyles.embedBase + projeto.embedKey,
    title: projeto.titulo,
    frameBorder: "0",
    allowFullScreen: true,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      display: 'block',
      border: 0
    }
  }));
}
function ProjetosHero() {
  return React.createElement("section", {
    id: "top",
    style: {
      padding: '48px 56px 40px',
      position: 'relative',
      fontFamily: tokens.sans
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(44px, 5.6vw, 88px)',
      lineHeight: 1,
      letterSpacing: '-0.04em',
      fontWeight: 500,
      color: tokens.ink,
      whiteSpace: 'nowrap'
    }
  }, "Demos", ' ', React.createElement("span", {
    style: {
      fontFamily: tokens.serif,
      fontStyle: 'italic',
      color: tokens.primary,
      fontWeight: 500
    }
  }, "interativas"), ". Pode clicar.")));
}
function ProjetoCard({
  projeto,
  density,
  idx
}) {
  return React.createElement("article", {
    id: `p-${projeto.num}`,
    style: {
      padding: density === 'compact' ? '40px 0 24px' : '64px 0 32px',
      borderTop: idx === 0 ? 'none' : `1px solid ${tokens.rule}`,
      fontFamily: tokens.sans
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 24,
      marginBottom: 20,
      flexWrap: 'wrap'
    }
  }, React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'clamp(32px, 3.2vw, 48px)',
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
      fontWeight: 500,
      color: tokens.ink
    }
  }, projeto.titulo), React.createElement("a", {
    href: projStyles.embedBase + projeto.embedKey,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontSize: 13,
      color: tokens.inkSoft,
      textDecoration: 'none',
      transition: 'color .15s',
      whiteSpace: 'nowrap'
    },
    onMouseEnter: e => e.currentTarget.style.color = tokens.ink,
    onMouseLeave: e => e.currentTarget.style.color = tokens.inkSoft
  }, "Tela cheia \u2197")), React.createElement(ProjetoCover, {
    projeto: projeto,
    height: density === 'compact' ? 460 : 580
  }));
}
function ProjetosGallery({
  density
}) {
  return React.createElement("section", {
    style: {
      padding: '24px 56px 80px',
      fontFamily: tokens.sans
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, PROJETOS.map((p, i) => React.createElement(ProjetoCard, {
    key: p.num,
    projeto: p,
    idx: i,
    density: density
  }))));
}
function ProjetosStack({
  density
}) {
  const [active, setActive] = React.useState(PROJETOS[0].num);
  React.useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const num = e.target.getAttribute('data-num');
          if (num) setActive(num);
        }
      });
    }, {
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0
    });
    PROJETOS.forEach(p => {
      const el = document.getElementById(`s-${p.num}`);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return React.createElement("section", {
    style: {
      padding: '24px 56px 80px',
      fontFamily: tokens.sans
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 96,
      paddingTop: 48,
      alignSelf: 'start'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: tokens.mono,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: tokens.inkMuted,
      marginBottom: 18
    }
  }, "\xCDndice"), React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, PROJETOS.map(p => {
    const isActive = p.num === active;
    return React.createElement("a", {
      key: p.num,
      href: `#s-${p.num}`,
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 12,
        padding: '10px 0',
        color: isActive ? tokens.ink : tokens.inkMuted,
        textDecoration: 'none',
        fontSize: 14,
        borderBottom: `1px solid ${tokens.rule}`,
        transition: 'color .2s'
      }
    }, React.createElement("span", {
      style: {
        fontFamily: tokens.mono,
        fontSize: 11,
        color: isActive ? tokens.primary : tokens.inkMuted,
        width: 22
      }
    }, p.num), React.createElement("span", {
      style: {
        flex: 1,
        fontWeight: isActive ? 500 : 400
      }
    }, p.titulo), isActive && React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 999,
        background: tokens.accent
      }
    }));
  }))), React.createElement("div", null, PROJETOS.map((p, i) => React.createElement("article", {
    key: p.num,
    id: `s-${p.num}`,
    "data-num": p.num,
    style: {
      padding: density === 'compact' ? '40px 0' : '64px 0',
      borderBottom: i === PROJETOS.length - 1 ? 'none' : `1px solid ${tokens.rule}`
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 24,
      marginBottom: 20,
      flexWrap: 'wrap'
    }
  }, React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'clamp(32px, 3.2vw, 48px)',
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
      fontWeight: 500,
      color: tokens.ink
    }
  }, p.titulo), React.createElement("a", {
    href: projStyles.embedBase + p.embedKey,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontSize: 13,
      color: tokens.inkSoft,
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, "Tela cheia \u2197")), React.createElement(ProjetoCover, {
    projeto: p,
    height: density === 'compact' ? 460 : 580
  }))))));
}
function ProjetosCTA() {
  return React.createElement("section", {
    style: {
      padding: '80px 56px 120px',
      fontFamily: tokens.sans
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      background: tokens.ink,
      color: tokens.paper,
      borderRadius: 14,
      padding: '72px 64px',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 56,
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: `linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px)`,
      backgroundSize: '80px 80px',
      WebkitMaskImage: 'linear-gradient(135deg, black, transparent 70%)',
      maskImage: 'linear-gradient(135deg, black, transparent 70%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'clamp(36px, 4.4vw, 64px)',
      lineHeight: 1,
      letterSpacing: '-0.03em',
      fontWeight: 500
    }
  }, "Quer um painel desses", ' ', React.createElement("span", {
    style: {
      fontFamily: tokens.serif,
      fontStyle: 'italic',
      color: tokens.accent,
      fontWeight: 500
    }
  }, "para a sua empresa?")), React.createElement("p", {
    style: {
      margin: '24px 0 0',
      fontSize: 18,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,.7)',
      maxWidth: 560
    }
  }, "Conta pra gente o que voc\xEA precisa enxergar. A gente cuida do resto.")), React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement("a", {
    href: "index.html#contato",
    style: {
      fontSize: 17,
      fontWeight: 500,
      padding: '20px 28px',
      borderRadius: 999,
      background: tokens.primary,
      color: '#fff',
      textDecoration: 'none',
      textAlign: 'center',
      transition: 'transform .15s, box-shadow .2s',
      boxShadow: '0 1px 0 rgba(0,0,0,.04)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = `0 12px 32px ${tokens.primary}80`;
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 1px 0 rgba(0,0,0,.04)';
    }
  }, "Conversar com a gente \u2192"))));
}
function ProjetosPage() {
  return React.createElement("div", {
    "data-screen-label": "Projetos",
    style: {
      background: tokens.paper,
      color: tokens.ink,
      fontFamily: tokens.sans,
      minHeight: '100vh',
      position: 'relative'
    }
  }, React.createElement(Nav, {
    page: "projetos"
  }), React.createElement(ProjetosHero, null), React.createElement(ProjetosStack, {
    density: "normal"
  }), React.createElement(ProjetosCTA, null), React.createElement(Footer, null));
}
window.ProjetosPage = ProjetosPage;

// ─── site/privacidade.jsx ─────────────────────────────────────
function PrivacidadeHero() {
  return React.createElement("section", {
    style: {
      padding: '120px 56px 60px',
      fontFamily: tokens.sans,
      borderBottom: `1px solid ${tokens.rule}`
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '0 auto'
    }
  }, React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(44px, 6vw, 84px)',
      lineHeight: 1,
      letterSpacing: '-0.03em',
      fontWeight: 500
    }
  }, "Pol\xEDtica de privacidade"), React.createElement("p", {
    style: {
      margin: '32px 0 0',
      fontSize: 18,
      lineHeight: 1.55,
      color: tokens.inkMuted,
      maxWidth: 620
    }
  }, "Como a AssessorTech trata os dados pessoais que recebe de quem nos procura, de acordo com a Lei Geral de Prote\xE7\xE3o de Dados (LGPD\xA0\u2014 Lei\xA013.709/2018)."), React.createElement("div", {
    style: {
      marginTop: 40,
      fontSize: 12,
      letterSpacing: '0.06em',
      color: tokens.inkMuted,
      fontFamily: tokens.mono
    }
  }, "\xDAltima atualiza\xE7\xE3o: 11 de maio de 2026")));
}
function PrivSection({
  n,
  title,
  children
}) {
  return React.createElement("section", {
    style: {
      marginTop: 64
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      marginBottom: 20
    }
  }, React.createElement("span", {
    style: {
      fontSize: 12,
      fontFamily: tokens.mono,
      color: tokens.accent,
      letterSpacing: '0.08em'
    }
  }, String(n).padStart(2, '0')), React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: '-0.01em',
      color: tokens.ink
    }
  }, title)), React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: tokens.ink,
      maxWidth: 680
    }
  }, children));
}
function PrivacidadeBody() {
  const pStyle = {
    margin: '0 0 16px'
  };
  const ulStyle = {
    margin: '0 0 16px',
    paddingLeft: 20
  };
  const liStyle = {
    marginBottom: 8
  };
  const linkStyle = {
    color: tokens.primary,
    textDecoration: 'none',
    borderBottom: `1px solid ${tokens.primary}40`
  };
  return React.createElement("section", {
    style: {
      padding: '40px 56px 120px',
      fontFamily: tokens.sans
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '0 auto'
    }
  }, React.createElement(PrivSection, {
    n: 1,
    title: "Quem somos"
  }, React.createElement("p", {
    style: pStyle
  }, "AssessorTech \xE9 uma consultoria de Business Intelligence sediada em Flores da Cunha\xA0/\xA0RS, Brasil. Para falar sobre esta pol\xEDtica ou exercer seus direitos como titular de dados, entre em contato pelo e-mail", ' ', React.createElement("a", {
    href: "mailto:contato@assessortech.com.br",
    style: linkStyle
  }, "contato@assessortech.com.br"), ".")), React.createElement(PrivSection, {
    n: 2,
    title: "Quais dados coletamos"
  }, React.createElement("p", {
    style: pStyle
  }, "Coletamos apenas o que voc\xEA nos envia voluntariamente quando entra em contato \u2014 pelo formul\xE1rio do site, por e-mail, telefone ou WhatsApp. Normalmente isso inclui:"), React.createElement("ul", {
    style: ulStyle
  }, React.createElement("li", {
    style: liStyle
  }, "Nome e empresa"), React.createElement("li", {
    style: liStyle
  }, "E-mail e/ou telefone"), React.createElement("li", {
    style: liStyle
  }, "Conte\xFAdo da mensagem que voc\xEA nos envia")), React.createElement("p", {
    style: pStyle
  }, "N\xE3o coletamos dados sens\xEDveis e n\xE3o compramos listas de contatos.")), React.createElement(PrivSection, {
    n: 3,
    title: "Para que usamos"
  }, React.createElement("p", {
    style: pStyle
  }, "Usamos seus dados para responder ao seu contato, entender o que voc\xEA precisa, eventualmente apresentar uma proposta e dar continuidade \xE0 rela\xE7\xE3o comercial, caso ela aconte\xE7a. N\xE3o enviamos newsletter nem comunica\xE7\xE3o autom\xE1tica de marketing.")), React.createElement(PrivSection, {
    n: 4,
    title: "Com quem compartilhamos"
  }, React.createElement("p", {
    style: pStyle
  }, "N\xE3o vendemos, alugamos nem compartilhamos seus dados com terceiros para fins comerciais. Eventualmente utilizamos ferramentas operacionais (e-mail, planilhas, sistemas de mensageria) que processam dados em nosso nome \u2014 todas escolhidas com cuidado para manter o sigilo das informa\xE7\xF5es."), React.createElement("p", {
    style: pStyle
  }, "Em projetos contratados, qualquer dado da sua empresa que tivermos acesso \xE9 tratado sob acordo de confidencialidade e usado exclusivamente para a entrega do projeto.")), React.createElement(PrivSection, {
    n: 5,
    title: "Por quanto tempo guardamos"
  }, React.createElement("p", {
    style: pStyle
  }, "Mensagens de contato que n\xE3o evoluem para projeto s\xE3o mantidas por at\xE9 12\xA0meses, para o caso de retomarmos a conversa. Em projetos ativos, os dados ficam armazenados enquanto durar a rela\xE7\xE3o contratual e pelo prazo legal aplic\xE1vel ap\xF3s o encerramento.")), React.createElement(PrivSection, {
    n: 6,
    title: "Seus direitos"
  }, React.createElement("p", {
    style: pStyle
  }, "Como titular dos dados, a LGPD garante a voc\xEA:"), React.createElement("ul", {
    style: ulStyle
  }, React.createElement("li", {
    style: liStyle
  }, "Confirmar se tratamos seus dados e acess\xE1-los"), React.createElement("li", {
    style: liStyle
  }, "Corrigir dados incompletos, inexatos ou desatualizados"), React.createElement("li", {
    style: liStyle
  }, "Solicitar a exclus\xE3o dos seus dados"), React.createElement("li", {
    style: liStyle
  }, "Revogar consentimento a qualquer momento"), React.createElement("li", {
    style: liStyle
  }, "Pedir informa\xE7\xE3o sobre com quem compartilhamos")), React.createElement("p", {
    style: pStyle
  }, "Para exercer qualquer um desses direitos, \xE9 s\xF3 escrever para", ' ', React.createElement("a", {
    href: "mailto:contato@assessortech.com.br",
    style: linkStyle
  }, "contato@assessortech.com.br"), ' ', "\u2014 respondemos em at\xE9 15 dias \xFAteis.")), React.createElement(PrivSection, {
    n: 7,
    title: "Cookies e site"
  }, React.createElement("p", {
    style: pStyle
  }, "Este site n\xE3o utiliza cookies de rastreamento, pixels de publicidade nem ferramentas de analytics que identifiquem voc\xEA individualmente. Se isso mudar no futuro, atualizaremos esta pol\xEDtica e avisaremos de forma vis\xEDvel.")), React.createElement(PrivSection, {
    n: 8,
    title: "Altera\xE7\xF5es nesta pol\xEDtica"
  }, React.createElement("p", {
    style: pStyle
  }, "Podemos atualizar este documento para refletir mudan\xE7as na lei ou na forma como trabalhamos. A data da \xFAltima atualiza\xE7\xE3o fica sempre no topo da p\xE1gina."))));
}
function PrivacidadePage() {
  return React.createElement("div", {
    "data-screen-label": "Privacidade",
    style: {
      background: tokens.paper,
      color: tokens.ink,
      fontFamily: tokens.sans,
      minHeight: '100vh'
    }
  }, React.createElement(Nav, {
    page: "privacidade"
  }), React.createElement(PrivacidadeHero, null), React.createElement(PrivacidadeBody, null), React.createElement(Footer, null));
}
window.PrivacidadePage = PrivacidadePage;


// ─── site/erro404.jsx ─────────────────────────────────────
function Erro404Hero() {
  return React.createElement("section", {
    style: {
      minHeight: 'calc(100vh - 86px)',
      padding: '80px 56px 120px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: tokens.sans,
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: { maxWidth: 720, width: '100%' }
  },
    React.createElement(Reveal, null,
      React.createElement("div", {
        style: {
          fontFamily: tokens.serif,
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 'clamp(120px, 18vw, 220px)',
          lineHeight: 0.9,
          letterSpacing: '-0.04em',
          color: tokens.primary
        }
      }, "Ops!")
    ),
    React.createElement(Reveal, { delay: 180 },
      React.createElement("div", {
        style: {
          height: 1, width: 64,
          background: tokens.rule,
          margin: '40px auto 40px'
        }
      })
    ),
    React.createElement(Reveal, { delay: 280 },
      React.createElement("h1", {
        style: {
          margin: 0,
          fontSize: 'clamp(24px, 3vw, 36px)',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          fontWeight: 500,
          color: tokens.ink
        }
      }, "N\u00E3o encontramos o que voc\u00EA procura.")
    ),
    React.createElement(Reveal, { delay: 420 },
      React.createElement("div", {
        style: {
          marginTop: 48,
          display: 'flex',
          justifyContent: 'center'
        }
      },
        React.createElement("a", {
          href: "index.html",
          style: {
            fontSize: 15, fontWeight: 500,
            padding: '14px 24px', borderRadius: 999,
            background: tokens.ink, color: tokens.paper,
            textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            whiteSpace: 'nowrap',
            transition: 'transform .15s ease, background .15s ease'
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.background = tokens.primary;
            e.currentTarget.style.transform = 'translateY(-1px)';
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.background = tokens.ink;
            e.currentTarget.style.transform = 'translateY(0)';
          }
        }, "\u2190 Voltar ao in\u00EDcio")
      )
    )
  ));
}

function Erro404Page() {
  return React.createElement("div", {
    "data-screen-label": "404",
    style: {
      background: tokens.paper, color: tokens.ink, fontFamily: tokens.sans,
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column'
    }
  },
    React.createElement(Nav, { page: "404" }),
    React.createElement("div", { style: { flex: 1, display: 'flex', flexDirection: 'column' } },
      React.createElement(Erro404Hero, null)
    ),
    React.createElement(Footer, null)
  );
}

window.Erro404Page = Erro404Page;
