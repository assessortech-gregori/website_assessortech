// Componentes compartilhados das duas variações.
// Reveals on scroll, count-up de números, etc.

const useReveal = (threshold = 0.15) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, shown];
};

function Reveal({ children, delay = 0, y = 24, as = 'div', style, className }) {
  const [ref, shown] = useReveal();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity .9s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .9s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

function CountUp({ to, duration = 1400, suffix = '', prefix = '' }) {
  const [ref, shown] = useReveal(0.4);
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!shown) return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setV(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, to, duration]);
  const display = Number.isInteger(to) ? Math.round(v) : v.toFixed(1);
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

// Logo PNG oficial
function AssessorLogo({ size = 28 }) {
  return <img src="site/img/logo.png" alt="AssessorTech" width={size} height={size} style={{ display: 'block' }} />;
}

function AssessorLogoLegacy({ size = 28, primary = '#3374BB', accent = '#97C93B' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-label="AssessorTech">
      {/* corpo do "a" */}
      <path
        d="M50 8 C73 8 92 27 92 50 L92 92 L78 92 L78 78 C72 86 62 92 50 92 C27 92 8 73 8 50 C8 27 27 8 50 8 Z"
        fill={primary}
      />
      {/* balão branco interno (formato de gota/balão) */}
      <path
        d="M50 24 C64 24 76 36 76 50 C76 64 64 76 50 76 C46 76 42 75 39 73 L28 78 L31 68 C27 63 24 57 24 50 C24 36 36 24 50 24 Z"
        fill="#fff"
      />
      {/* 3 pontos */}
      <circle cx="38" cy="50" r="4.5" fill={accent} />
      <circle cx="50" cy="50" r="4.5" fill={accent} />
      <circle cx="62" cy="50" r="4.5" fill={accent} />
    </svg>
  );
}

// Placeholder honesto pra imagens que ainda não existem.
function ImagePlaceholder({ label, ratio = '16/9', tone = 'light' }) {
  const isDark = tone === 'dark';
  return (
    <div style={{
      aspectRatio: ratio,
      background: isDark
        ? 'repeating-linear-gradient(135deg, rgba(255,255,255,.04) 0 8px, rgba(255,255,255,.08) 8px 16px)'
        : 'repeating-linear-gradient(135deg, rgba(14,17,22,.03) 0 8px, rgba(14,17,22,.06) 8px 16px)',
      border: `1px dashed ${isDark ? 'rgba(255,255,255,.2)' : 'rgba(14,17,22,.18)'}`,
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Geist Mono", ui-monospace, monospace',
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: isDark ? 'rgba(255,255,255,.55)' : 'rgba(14,17,22,.45)',
    }}>
      {label}
    </div>
  );
}

Object.assign(window, { useReveal, Reveal, CountUp, AssessorLogo, ImagePlaceholder });
