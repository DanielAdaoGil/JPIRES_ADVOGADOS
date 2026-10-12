// ==========================================================================
// JPIRES – MODAL DAS ÁREAS DE PRÁTICA
// A ordem dos itens corresponde à ordem dos 8 cards em #sectores-lista
// ==========================================================================
(function () {
  const AREAS = [
    {
      titulo: 'Oil & Gás e Energia',
      subtitulo: 'Direito da energia e indústria petrolífera',
      servicos: [
        'Assessoria jurídica em operações petrolíferas e contratos de prestação de serviços.',
        'Negociação e revisão de contratos de fornecimento, manutenção e logística.',
        'Constituição de sociedades e parcerias empresariais no setor energético.',
        'Compliance, licenciamento e obrigações regulatórias.',
        'Investimento privado, joint ventures e gestão de riscos contratuais.',
        'Resolução de litígios comerciais e contratuais.'
      ],
      objetivo: 'Acompanhar operações complexas e investimentos de elevado valor, assessorando empresas do setor petrolífero, fornecedores, investidores e prestadores de serviços.'
    },
    {
      titulo: 'Mineração e Recursos Naturais',
      subtitulo: 'Direito mineiro, concessões e investimento',
      servicos: [
        'Assessoria jurídica em projetos mineiros.',
        'Análise de contratos de exploração, prospeção e prestação de serviços.',
        'Apoio jurídico em processos de concessão e licenciamento.',
        'Contratos de transporte, comercialização e fornecimento de equipamentos.',
        'Parcerias entre investidores, operadores e empresas locais.',
        'Obrigações ambientais, responsabilidade empresarial e gestão de riscos.',
        'Prevenção e resolução de conflitos relacionados com operações mineiras.'
      ],
      objetivo: 'Posicionar a sociedade como parceira jurídica de investidores e operadores do setor dos recursos naturais.'
    },
    {
      titulo: 'Banca e Serviços Financeiros',
      subtitulo: 'Direito bancário, crédito e operações financeiras',
      servicos: [
        'Análise e negociação de contratos de financiamento.',
        'Estruturação jurídica de operações de crédito.',
        'Garantias bancárias, hipotecas, penhores e outras garantias admissíveis.',
        'Recuperação de créditos e cobrança de dívidas.',
        'Assessoria em relações entre instituições financeiras e empresas.',
        'Contratos de investimento e financiamento privado.',
        'Prevenção de riscos contratuais e apoio em litígios financeiros.'
      ],
      objetivo: 'Apoiar empresas, credores, investidores e instituições financeiras.'
    },
    {
      titulo: 'Seguros e Resseguros',
      subtitulo: 'Gestão jurídica de riscos e sinistros',
      servicos: [
        'Análise e revisão de contratos de seguro.',
        'Assessoria jurídica em sinistros e pedidos de indemnização.',
        'Interpretação de coberturas, exclusões e obrigações contratuais.',
        'Apoio na resolução de conflitos entre seguradoras, segurados e beneficiários.',
        'Responsabilidade civil e seguros empresariais.',
        'Assessoria em contratos relacionados com seguros de obras, transportes e atividades industriais.',
        'Contencioso e negociação de acordos.'
      ],
      objetivo: 'Uma abordagem preventiva e contenciosa na gestão dos riscos seguráveis.'
    },
    {
      titulo: 'Instituições Públicas e Estado',
      subtitulo: 'Direito administrativo e contratação pública',
      servicos: [
        'Assessoria em procedimentos de contratação pública.',
        'Análise de contratos administrativos.',
        'Apoio jurídico em concursos públicos e procedimentos de adjudicação.',
        'Pareceres sobre atos administrativos e regulamentos.',
        'Reclamações, recursos e impugnações administrativas.',
        'Responsabilidade civil do Estado, nos termos legais aplicáveis.',
        'Acompanhamento de processos administrativos e contencioso administrativo.',
        'Assessoria a empresas privadas que contratam com entidades públicas.'
      ],
      objetivo: 'Apoiar tanto entidades públicas, quando legalmente admissível, como empresas que se relacionam contratualmente com o Estado.'
    },
    {
      titulo: 'Recursos Humanos e Laboral',
      subtitulo: 'Direito do trabalho e relações laborais',
      servicos: [
        'Elaboração e revisão de contratos de trabalho.',
        'Regulamentos internos e códigos de ética e conduta.',
        'Processos disciplinares e garantias de audiência do trabalhador.',
        'Cessação de contratos, despedimentos e acordos de revogação.',
        'Consultoria em remunerações, benefícios e obrigações laborais.',
        'Negociação de conflitos entre empregadores e trabalhadores.',
        'Representação e acompanhamento em conflitos laborais, nos termos aplicáveis.'
      ],
      objetivo: 'Ajudar as empresas a gerir relações laborais com segurança jurídica e respeito pelos direitos dos trabalhadores.'
    },
    {
      titulo: 'Segurança Privada',
      subtitulo: 'Regulação, contratos e responsabilidade',
      servicos: [
        'Assessoria na constituição e organização de empresas do setor.',
        'Apoio jurídico em licenciamento e requisitos regulatórios.',
        'Elaboração de contratos de prestação de serviços de segurança.',
        'Assessoria em contratos de vigilância, proteção de instalações e controlo de acessos.',
        'Relações laborais e responsabilidade civil.',
        'Compliance e procedimentos internos.',
        'Gestão de litígios contratuais e conflitos com clientes.'
      ],
      objetivo: 'Apoiar empresas de segurança privada no cumprimento das obrigações legais e contratuais.'
    },
    {
      titulo: 'Imobiliário e Construção',
      subtitulo: 'Direito imobiliário, obras e empreitadas',
      servicos: [
        'Compra, venda e arrendamento de imóveis.',
        'Análise de títulos, documentação e situação jurídica dos imóveis.',
        'Contratos de empreitada e subempreitada.',
        'Fiscalização jurídica do cumprimento de contratos de construção.',
        'Investimento imobiliário e desenvolvimento de empreendimentos.',
        'Incumprimento contratual, atrasos, defeitos de obra e indemnizações.',
        'Condomínios, propriedade e resolução de conflitos imobiliários.'
      ],
      objetivo: 'Oferecer segurança jurídica a investidores, promotores imobiliários, empreiteiros e proprietários.'
    }
  ];

  const CHECK_ICON =
    '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>';
  const CLOSE_ICON =
    '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>';

  document.addEventListener('DOMContentLoaded', () => {
    const lista = document.getElementById('sectores-lista');
    if (!lista) return;

    // ---- Estrutura do modal (criada uma única vez) ----
    const modal = document.createElement('div');
    modal.className = 'area-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="area-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="area-modal-title">
        <button type="button" class="area-modal__close" aria-label="Fechar">${CLOSE_ICON}</button>
        <div class="area-modal__eyebrow">JPires · Áreas de Prática</div>
        <h3 class="area-modal__title" id="area-modal-title"></h3>
        <p class="area-modal__subtitle"></p>
        <div class="area-modal__divider"></div>
        <div class="area-modal__label">Serviços jurídicos</div>
        <ul class="area-modal__list"></ul>
        <div class="area-modal__objective"><strong>Objetivo:</strong> <span></span></div>
        <a class="area-modal__cta" href="#">
          Solicitar assessoria jurídica
          <span aria-hidden="true">→</span>
        </a>
      </div>`;
    document.body.appendChild(modal);

    const dialog = modal.querySelector('.area-modal__dialog');
    const closeBtn = modal.querySelector('.area-modal__close');
    const elTitle = modal.querySelector('.area-modal__title');
    const elSub = modal.querySelector('.area-modal__subtitle');
    const elList = modal.querySelector('.area-modal__list');
    const elObj = modal.querySelector('.area-modal__objective span');
    const elCta = modal.querySelector('.area-modal__cta');

    let lastFocused = null;

    function openModal(index) {
      const a = AREAS[index];
      if (!a) return;

      elTitle.textContent = a.titulo;
      elSub.textContent = a.subtitulo;
      elObj.textContent = a.objetivo;
      elList.innerHTML = a.servicos
        .map((s) => `<li>${CHECK_ICON}<span>${s}</span></li>`)
        .join('');
      elCta.href =
        'mailto:jpires@jpires-advogados.ao?subject=' +
        encodeURIComponent('Pedido de assessoria jurídica – ' + a.titulo);

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

    // ---- Tornar os 8 cards clicáveis e acessíveis ----
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