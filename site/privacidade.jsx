// Página Política de Privacidade — texto genérico, LGPD-aware.
// Layout editorial, mesma identidade visual da v1.

function V1PrivacidadeHero() {
  return (
    <section style={{
      padding: '120px 56px 60px',
      fontFamily: v1.sans,
      borderBottom: `1px solid ${v1.rule}`
    }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <h1 style={{
          margin: 0,
          fontSize: 'clamp(44px, 6vw, 84px)',
          lineHeight: 1,
          letterSpacing: '-0.03em',
          fontWeight: 500
        }}>
          Política de privacidade
        </h1>
        <p style={{
          margin: '32px 0 0',
          fontSize: 18, lineHeight: 1.55,
          color: v1.inkMuted,
          maxWidth: 620
        }}>
          Como a AssessorTech trata os dados pessoais que recebe de quem nos procura,
          de acordo com a Lei Geral de Proteção de Dados (LGPD&nbsp;— Lei&nbsp;13.709/2018).
        </p>
        <div style={{
          marginTop: 40, fontSize: 12, letterSpacing: '0.06em',
          color: v1.inkMuted, fontFamily: v1.mono
        }}>
          Última atualização: 11 de maio de 2026
        </div>
      </div>
    </section>
  );
}

function PrivSection({ n, title, children }) {
  return (
    <section style={{ marginTop: 64 }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 16,
        marginBottom: 20
      }}>
        <span style={{
          fontSize: 12, fontFamily: v1.mono, color: v1.accent,
          letterSpacing: '0.08em'
        }}>
          {String(n).padStart(2, '0')}
        </span>
        <h2 style={{
          margin: 0,
          fontSize: 26, fontWeight: 500,
          letterSpacing: '-0.01em',
          color: v1.ink
        }}>
          {title}
        </h2>
      </div>
      <div style={{
        fontSize: 16, lineHeight: 1.7, color: v1.ink,
        maxWidth: 680
      }}>
        {children}
      </div>
    </section>
  );
}

function V1PrivacidadeBody() {
  const pStyle = { margin: '0 0 16px' };
  const ulStyle = { margin: '0 0 16px', paddingLeft: 20 };
  const liStyle = { marginBottom: 8 };
  const linkStyle = { color: v1.primary, textDecoration: 'none', borderBottom: `1px solid ${v1.primary}40` };

  return (
    <section style={{ padding: '40px 56px 120px', fontFamily: v1.sans }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>

        <PrivSection n={1} title="Quem somos">
          <p style={pStyle}>
            AssessorTech é uma consultoria de Business Intelligence sediada em
            Flores da Cunha&nbsp;/&nbsp;RS, Brasil. Para falar sobre esta política
            ou exercer seus direitos como titular de dados, entre em contato pelo
            e-mail{' '}
            <a href="mailto:contato@assessortech.com.br" style={linkStyle}>
              contato@assessortech.com.br
            </a>.
          </p>
        </PrivSection>

        <PrivSection n={2} title="Quais dados coletamos">
          <p style={pStyle}>
            Coletamos apenas o que você nos envia voluntariamente quando entra em
            contato — pelo formulário do site, por e-mail, telefone ou WhatsApp.
            Normalmente isso inclui:
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>Nome e empresa</li>
            <li style={liStyle}>E-mail e/ou telefone</li>
            <li style={liStyle}>Conteúdo da mensagem que você nos envia</li>
          </ul>
          <p style={pStyle}>
            Não coletamos dados sensíveis e não compramos listas de contatos.
          </p>
        </PrivSection>

        <PrivSection n={3} title="Para que usamos">
          <p style={pStyle}>
            Usamos seus dados para responder ao seu contato, entender o que você
            precisa, eventualmente apresentar uma proposta e dar continuidade à
            relação comercial, caso ela aconteça. Não enviamos newsletter nem
            comunicação automática de marketing.
          </p>
        </PrivSection>

        <PrivSection n={4} title="Com quem compartilhamos">
          <p style={pStyle}>
            Não vendemos, alugamos nem compartilhamos seus dados com terceiros
            para fins comerciais. Eventualmente utilizamos ferramentas operacionais
            (e-mail, planilhas, sistemas de mensageria) que processam dados em nosso
            nome — todas escolhidas com cuidado para manter o sigilo das informações.
          </p>
          <p style={pStyle}>
            Em projetos contratados, qualquer dado da sua empresa que tivermos
            acesso é tratado sob acordo de confidencialidade e usado exclusivamente
            para a entrega do projeto.
          </p>
        </PrivSection>

        <PrivSection n={5} title="Por quanto tempo guardamos">
          <p style={pStyle}>
            Mensagens de contato que não evoluem para projeto são mantidas por até
            12&nbsp;meses, para o caso de retomarmos a conversa. Em projetos
            ativos, os dados ficam armazenados enquanto durar a relação contratual
            e pelo prazo legal aplicável após o encerramento.
          </p>
        </PrivSection>

        <PrivSection n={6} title="Seus direitos">
          <p style={pStyle}>
            Como titular dos dados, a LGPD garante a você:
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>Confirmar se tratamos seus dados e acessá-los</li>
            <li style={liStyle}>Corrigir dados incompletos, inexatos ou desatualizados</li>
            <li style={liStyle}>Solicitar a exclusão dos seus dados</li>
            <li style={liStyle}>Revogar consentimento a qualquer momento</li>
            <li style={liStyle}>Pedir informação sobre com quem compartilhamos</li>
          </ul>
          <p style={pStyle}>
            Para exercer qualquer um desses direitos, é só escrever para{' '}
            <a href="mailto:contato@assessortech.com.br" style={linkStyle}>
              contato@assessortech.com.br
            </a>{' '}
            — respondemos em até 15 dias úteis.
          </p>
        </PrivSection>

        <PrivSection n={7} title="Cookies e site">
          <p style={pStyle}>
            Este site não utiliza cookies de rastreamento, pixels de publicidade
            nem ferramentas de analytics que identifiquem você individualmente.
            Se isso mudar no futuro, atualizaremos esta política e avisaremos de
            forma visível.
          </p>
        </PrivSection>

        <PrivSection n={8} title="Alterações nesta política">
          <p style={pStyle}>
            Podemos atualizar este documento para refletir mudanças na lei ou na
            forma como trabalhamos. A data da última atualização fica sempre no
            topo da página.
          </p>
        </PrivSection>

      </div>
    </section>
  );
}

function PrivacidadePage() {
  return (
    <div data-screen-label="Privacidade" style={{
      background: v1.paper, color: v1.ink, fontFamily: v1.sans,
      minHeight: '100vh'
    }}>
      <V1Nav page="privacidade" />
      <V1PrivacidadeHero />
      <V1PrivacidadeBody />
      <V1Footer />
    </div>
  );
}

window.PrivacidadePage = PrivacidadePage;
