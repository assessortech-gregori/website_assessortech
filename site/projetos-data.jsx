// Página Projetos — dados e covers
// Cada cover tem uma micro-visualização única e clica para carregar o iframe real.

const PROJETOS = [
  {
    num: '01',
    categoria: 'Indicadores',
    titulo: 'Contábil & Orçamento',
    descricao: 'Acompanhamento orçado vs. realizado por centro de custo, análise vertical e horizontal do DRE, e indicadores contábeis com benchmarks setoriais.',
    metricas: ['DRE comparativa', 'Variações orçadas', 'Margens por linha', 'Liquidez & solvência'],
    embedKey: 'eyJrIjoiM2QxYTk3OWUtMjAwZS00MzQ1LWJlOGYtYzc2ZmNjN2VlMGQ3IiwidCI6IjM3YWM2ZDUwLWJlM2YtNGQ3Yy1iMTYyLTUxMDAwMGUwMzljNiJ9',
    visual: 'stackedBars'
  },
  {
    num: '02',
    categoria: 'Indicadores',
    titulo: 'Recursos Humanos',
    descricao: 'Headcount, turnover, absenteísmo, horas extras e folha por área. Recortes por liderança, faixa salarial e tempo de casa.',
    metricas: ['Turnover & retenção', 'Folha por área', 'Absenteísmo', 'Curva salarial'],
    embedKey: 'eyJrIjoiODk3MGM0NGUtZTM2My00MjJmLWIxZTktMGIwY2I3NjA2NzkyIiwidCI6IjM3YWM2ZDUwLWJlM2YtNGQ3Yy1iMTYyLTUxMDAwMGUwMzljNiJ9',
    visual: 'donutBars'
  },
  {
    num: '03',
    categoria: 'Indicadores',
    titulo: 'Gestão Comercial',
    descricao: 'Funil de vendas, ranking de vendedores, mix de produtos e elasticidade de preço. Visão por região, canal e ciclo de compra.',
    metricas: ['Funil & conversão', 'Ranking vendedores', 'Mix de produtos', 'Sazonalidade'],
    embedKey: 'eyJrIjoiODc1ZDdhOWEtNDRkZC00NzhjLWJmZDctYjE2ZGY5Y2VlNDk1IiwidCI6IjM3YWM2ZDUwLWJlM2YtNGQ3Yy1iMTYyLTUxMDAwMGUwMzljNiJ9',
    visual: 'ascendingBars'
  },
  {
    num: '04',
    categoria: 'Indicadores',
    titulo: 'Suprimentos & Estoques',
    descricao: 'Giro, cobertura, ruptura e curva ABC. Sugestão de compra cruzando consumo histórico com lead-time real do fornecedor.',
    metricas: ['Curva ABC', 'Giro & cobertura', 'Ruptura', 'Lead-time'],
    embedKey: 'eyJrIjoiNDhmZWMxMzYtOGU3Ni00YjkyLWExNTAtY2I5YWNiZmVmOTU2IiwidCI6IjM3YWM2ZDUwLWJlM2YtNGQ3Yy1iMTYyLTUxMDAwMGUwMzljNiJ9',
    visual: 'gridDots'
  },
  {
    num: '05',
    categoria: 'Simuladores',
    titulo: 'Ponto de Equilíbrio',
    descricao: 'Simulador interativo de break-even por linha de produto. Ajuste custos fixos, variáveis e preço médio e veja o ponto em que a operação se paga.',
    metricas: ['Custos fixos vs. variáveis', 'Margem de contribuição', 'Break-even por linha'],
    embedKey: 'eyJrIjoiYmFkNDlhNWUtNjJjYy00NDZkLWIzYzgtOGRiMDkyOTkwOTlkIiwidCI6IjM3YWM2ZDUwLWJlM2YtNGQ3Yy1iMTYyLTUxMDAwMGUwMzljNiJ9',
    visual: 'crossLines'
  },
  {
    num: '06',
    categoria: 'Simuladores',
    titulo: 'Preço de Venda',
    descricao: 'Forma o preço de venda partindo do custo, com impostos, comissões, frete e margem desejada. Compara cenários lado a lado.',
    metricas: ['Markup', 'Composição tributária', 'Cenários A/B'],
    embedKey: 'eyJrIjoiMWQ1MTYyOGUtM2Y5OS00YjQ3LTg0MjgtN2Y0ZjBhOWUzM2Y5IiwidCI6IjM3YWM2ZDUwLWJlM2YtNGQ3Yy1iMTYyLTUxMDAwMGUwMzljNiJ9',
    visual: 'calc'
  },
  {
    num: '07',
    categoria: 'Pesquisas',
    titulo: 'IBGE & Dados Públicos',
    descricao: 'Painel exploratório com séries econômicas, demográficas e setoriais do IBGE e demais fontes públicas. Útil para contextualizar plano de negócio.',
    metricas: ['Séries IBGE', 'PIB por setor', 'Demografia', 'Mercado de trabalho'],
    embedKey: 'eyJrIjoiYzZhMzVkZjYtYjliMy00ZTE1LTlkYTUtMjFiYWM0NWQ4Njk0IiwidCI6IjM3YWM2ZDUwLWJlM2YtNGQ3Yy1iMTYyLTUxMDAwMGUwMzljNiJ9',
    visual: 'scatter'
  }
];

// ─── Micro-visuais por projeto (decorativos, não dados reais) ────
function ProjetoVisual({ kind, color, accent }) {
  const p = color || '#3374BB';
  const a = accent || '#97C93B';
  if (kind === 'stackedBars') {
    return (
      <svg viewBox="0 0 200 90" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
        {[10, 35, 60, 85, 110, 135, 160, 185].map((x, i) => (
          <g key={i}>
            <rect x={x} y={50 - i * 2} width="14" height={20 + i * 2} fill={p} opacity="0.85" />
            <rect x={x} y={70 - i * 1.5} width="14" height={15 + i * 1.5} fill={a} opacity="0.7" />
          </g>
        ))}
      </svg>
    );
  }
  if (kind === 'donutBars') {
    return (
      <svg viewBox="0 0 200 90" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
        <circle cx="45" cy="45" r="32" fill="none" stroke={p} strokeOpacity="0.18" strokeWidth="10" />
        <circle cx="45" cy="45" r="32" fill="none" stroke={p} strokeWidth="10"
          strokeDasharray="120 80" strokeDashoffset="-20" transform="rotate(-90 45 45)" />
        <circle cx="45" cy="45" r="32" fill="none" stroke={a} strokeWidth="10"
          strokeDasharray="42 158" strokeDashoffset="-140" transform="rotate(-90 45 45)" />
        {[100, 120, 140, 160, 180].map((x, i) => (
          <rect key={i} x={x} y={75 - (i + 1) * 10} width="12" height={(i + 1) * 10} fill={p} opacity={0.3 + i * 0.15} />
        ))}
      </svg>
    );
  }
  if (kind === 'ascendingBars') {
    return (
      <svg viewBox="0 0 200 90" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
        <path d="M5,75 Q40,68 80,52 T160,18 L195,10" fill="none" stroke={p} strokeWidth="2" />
        {[20, 50, 80, 110, 140, 170].map((x, i) => (
          <rect key={i} x={x} y={80 - (i + 1) * 9} width="18" height={(i + 1) * 9} fill={i === 5 ? a : p} opacity={i === 5 ? 0.9 : 0.18 + i * 0.08} rx="1" />
        ))}
      </svg>
    );
  }
  if (kind === 'gridDots') {
    const cells = [];
    for (let r = 0; r < 5; r++) for (let c = 0; c < 12; c++) {
      const filled = (r * 12 + c * 3) % 7 < 3;
      const hot = r === 2 && c === 7;
      cells.push(<rect key={`${r}-${c}`} x={5 + c * 16} y={5 + r * 16} width="11" height="11"
        fill={hot ? a : filled ? p : 'currentColor'} fillOpacity={hot ? 1 : filled ? 0.7 : 0.06} rx="1" />);
    }
    return <svg viewBox="0 0 200 90" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">{cells}</svg>;
  }
  if (kind === 'crossLines') {
    return (
      <svg viewBox="0 0 200 90" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
        <line x1="10" y1="20" x2="190" y2="75" stroke={p} strokeWidth="2" />
        <line x1="10" y1="80" x2="190" y2="15" stroke={a} strokeWidth="2" />
        <circle cx="100" cy="47" r="6" fill={p} />
        <circle cx="100" cy="47" r="14" fill="none" stroke={p} strokeOpacity="0.3" strokeWidth="1.5" />
        <text x="115" y="50" fontFamily="Geist Mono, monospace" fontSize="9" fill={p} opacity="0.8">break-even</text>
      </svg>
    );
  }
  if (kind === 'calc') {
    return (
      <svg viewBox="0 0 200 90" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
        {/* Stack visual de composição de preço */}
        <rect x="10" y="65" width="180" height="14" fill={p} opacity="0.85" rx="1" />
        <rect x="10" y="48" width="120" height="14" fill={p} opacity="0.55" rx="1" />
        <rect x="10" y="31" width="80" height="14" fill={p} opacity="0.3" rx="1" />
        <rect x="10" y="14" width="180" height="14" fill={a} opacity="0.85" rx="1" />
        <text x="195" y="76" textAnchor="end" fontFamily="Geist Mono, monospace" fontSize="8" fill="#fff">custo</text>
        <text x="195" y="59" textAnchor="end" fontFamily="Geist Mono, monospace" fontSize="8" fill="#fff">impostos</text>
        <text x="195" y="42" textAnchor="end" fontFamily="Geist Mono, monospace" fontSize="8" fill={p}>comissão</text>
        <text x="195" y="25" textAnchor="end" fontFamily="Geist Mono, monospace" fontSize="8" fill="#1F4F87">preço final</text>
      </svg>
    );
  }
  if (kind === 'scatter') {
    const pts = [];
    for (let i = 0; i < 60; i++) {
      const x = 10 + (i * 37 % 180);
      const y = 10 + ((i * 13 + 7) % 70);
      const r = 1.5 + (i % 4) * 0.8;
      pts.push(<circle key={i} cx={x} cy={y} r={r} fill={i % 9 === 0 ? a : p} fillOpacity={i % 9 === 0 ? 0.9 : 0.25 + (i % 5) * 0.1} />);
    }
    return <svg viewBox="0 0 200 90" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">{pts}</svg>;
  }
  return null;
}

window.PROJETOS = PROJETOS;
window.ProjetoVisual = ProjetoVisual;
