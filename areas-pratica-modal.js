// ==========================================================================
// JPIRES – MODAL DAS ÁREAS DE PRÁTICA ("O QUE FAZEMOS")
// A ordem dos itens corresponde à ordem dos 6 cards em #areas
// ==========================================================================
(function () {
  const AREAS = [
    {
      etiqueta: '01 — Corporate',
      titulo: 'Direito Societário & Governança',
      descricao: 'Assessoramos empresas, acionistas, administradores e investidores na estruturação, organização e gestão das suas relações societárias, promovendo segurança jurídica, transparência e decisões estratégicas sustentáveis.',
      inclui: [
        'Constituição de sociedades',
        'Acordos de acionistas',
        'Reorganizações societárias',
        'Governança corporativa',
        'Responsabilidade dos administradores'
      ]
    },
    {
      etiqueta: '02 — M&A',
      titulo: 'Fusões, Aquisições & Privatizações',
      descricao: 'Acompanhamos operações empresariais de elevada complexidade, desde a análise inicial até à conclusão da transação. Combinamos rigor jurídico, avaliação de riscos e negociação estratégica para proteger os interesses dos nossos clientes em cada etapa.',
      inclui: [
        'Due diligence',
        'Compra e venda de participações',
        'Aquisição de ativos',
        'Fusões',
        'Joint ventures',
        'Privatizações',
        'Negociação de contratos de transação'
      ]
    },
    {
      etiqueta: '03 — Investimento Internacional',
      titulo: 'Investimento Estrangeiro & Joint Ventures',
      descricao: 'Facilitamos a entrada e expansão de investidores em novos mercados, estruturando operações que conciliam objetivos comerciais, requisitos regulatórios e proteção dos investimentos. Atuamos na articulação jurídica entre parceiros locais e internacionais.',
      inclui: [
        'Estruturação de investimentos',
        'Parcerias estratégicas',
        'Joint ventures',
        'Acordos de investimento',
        'Licenciamento',
        'Conformidade regulatória',
        'Apoio à internacionalização'
      ]
    },
    {
      etiqueta: '04 — Contratos & Regulação',
      titulo: 'Contratos Comerciais & Regulação',
      descricao: 'Desenvolvemos soluções contratuais alinhadas aos objetivos do negócio e ao enquadramento legal aplicável. A nossa abordagem privilegia a prevenção de riscos, a clareza das obrigações e a criação de relações comerciais seguras e duradouras.',
      inclui: [
        'Elaboração e revisão de contratos',
        'Negociação comercial',
        'Contratos de fornecimento e prestação de serviços',
        'Licenças',
        'Conformidade regulatória',
        'Gestão de riscos contratuais'
      ]
    },
    {
      etiqueta: '05 — Financiamento',
      titulo: 'Financiamento & Reestruturação',
      descricao: 'Prestamos assessoria jurídica em operações de financiamento e reorganização financeira, apoiando empresas, credores e investidores na identificação de soluções viáveis, na negociação de condições e na proteção dos seus interesses.',
      inclui: [
        'Financiamento empresarial',
        'Garantias',
        'Negociação com credores',
        'Reestruturação de dívida',
        'Recuperação de empresas',
        'Operações de financiamento estruturado'
      ]
    },
    {
      etiqueta: '06 — Litígios & Arbitragem',
      titulo: 'Resolução de Conflitos',
      descricao: 'Representamos os interesses dos nossos clientes em disputas empresariais com uma abordagem estratégica, rigor técnico e foco na solução mais adequada para cada caso. Privilegiamos a prevenção e a negociação sempre que vantajosas, mantendo uma atuação firme na defesa dos direitos e interesses envolvidos.',
      inclui: [
        'Contencioso comercial',
        'Arbitragem',
        'Mediação',
        'Litígios societários',
        'Incumprimento contratual',
        'Execução de decisões'
      ]
    }
  ];

  const CHECK_ICON =
    '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>';
  const CLOSE_ICON =
    '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>';

  const esc = (s) =>
    String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  document.addEventListener('DOMContentLoaded', () => {
    const lista = document.querySelector('#areas > .grid');
    if (!lista) return;

    // ---- Estrutura do modal (criada uma única vez) ----
    const modal = document.createElement('div');
    modal.className = 'area-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="area-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="pratica-modal-title">
        <button type="button" class="area-modal__close" aria-label="Fechar">${CLOSE_ICON}</button>
        <div class="area-modal__eyebrow"></div>
        <h3 class="area-modal__title" id="pratica-modal-title"></h3>
        <p class="area-modal__intro"></p>
        <div class="area-modal__divider"></div>
        <div class="area-modal__label">Inclui</div>
        <ul class="area-modal__list"></ul>
        <a class="area-modal__cta" href="#">
          Solicitar uma consulta
          <span aria-hidden="true">→</span>
        </a>
      </div>`;
    document.body.appendChild(modal);

    const dialog = modal.querySelector('.area-modal__dialog');
    const closeBtn = modal.querySelector('.area-modal__close');
    const elEyebrow = modal.querySelector('.area-modal__eyebrow');
    const elTitle = modal.querySelector('.area-modal__title');
    const elIntro = modal.querySelector('.area-modal__intro');
    const elList = modal.querySelector('.area-modal__list');
    const elCta = modal.querySelector('.area-modal__cta');

    let lastFocused = null;

    function openModal(index) {
      const a = AREAS[index];
      if (!a) return;

      elEyebrow.textContent = a.etiqueta;
      elTitle.textContent = a.titulo;
      elIntro.textContent = a.descricao;
      elList.innerHTML = a.inclui
        .map((s) => `<li>${CHECK_ICON}<span>${esc(s)}</span></li>`)
        .join('');
      elCta.href =
        'mailto:jpires@jpires-advogados.ao?subject=' +
        encodeURIComponent('Pedido de consulta – ' + a.titulo);

      dialog.scrollTop = 0;
      lastFocused = document.activeElement;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      closeBtn.focus({ preventScroll: true });
    }

    function closeModal() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      if (lastFocused) lastFocused.focus({ preventScroll: true });
    }

    // ---- Tornar os 6 cards clicáveis e acessíveis ----
    Array.from(lista.children).forEach((card, i) => {
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-haspopup', 'dialog');
      card.addEventListener('click', () => openModal(i));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(i);
        }
      });
    });

    // ---- Fechar: botão X, clique fora, tecla Esc ----
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  });
})();