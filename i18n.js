// ==========================================================================
// JPIRES – TRADUÇÃO DO SITE (PT por defeito · EN · FR · DE · AR · RU · IT · ZH)
// A chave é o texto original em português.
// Cada linha: [EN, FR, DE, AR, RU, IT, ZH]
// ==========================================================================
(function () {
  const IDX = { en: 0, fr: 1, de: 2, ar: 3, ru: 4, it: 5, zh: 6 };
  const FLAGS = { pt: 'ao', en: 'gb', fr: 'fr', de: 'de', ar: 'ae', ru: 'ru', it: 'it', zh: 'cn' };
  const RTL = ['ar'];
  const STORAGE_KEY = 'jpires-lang';
  const TITLE_PT = 'JPires – Sociedade de Advogados, RL | Corporate Law em Angola';

  const D = {
    // ---------- Título da página ----------
    'JPires – Sociedade de Advogados, RL | Corporate Law em Angola': [
      'JPires – Law Firm, RL | Corporate Law in Angola',
      'JPires – Société d’avocats, RL | Droit des affaires en Angola',
      'JPires – Rechtsanwaltsgesellschaft, RL | Wirtschaftsrecht in Angola',
      'JPires – شركة محاماة، RL | قانون الشركات في أنغولا',
      'JPires – Юридическая фирма, RL | Корпоративное право в Анголе',
      'JPires – Studio legale, RL | Diritto societario in Angola',
      'JPires – 律师事务所, RL | 安哥拉公司法'
    ],

    // ---------- Navbar ----------
    'Sobre': ['About', 'À propos', 'Über uns', 'من نحن', 'О нас', 'Chi siamo', '关于我们'],
    'Áreas de Prática': ['Practice Areas', 'Domaines d’expertise', 'Tätigkeitsbereiche', 'مجالات الممارسة', 'Направления', 'Aree di attività', '业务领域'],
    'Sectores': ['Sectors', 'Secteurs', 'Branchen', 'القطاعات', 'Отрасли', 'Settori', '行业'],
    'Equipa': ['Team', 'Équipe', 'Team', 'الفريق', 'Команда', 'Team', '团队'],
    'Honorários': ['Fees', 'Honoraires', 'Honorare', 'الأتعاب', 'Гонорары', 'Onorari', '费用'],
    'Alianças': ['Alliances', 'Alliances', 'Allianzen', 'التحالفات', 'Альянсы', 'Alleanze', '合作联盟'],
    'Contactos': ['Contact', 'Contact', 'Kontakt', 'اتصل بنا', 'Контакты', 'Contatti', '联系方式'],
    'Marcar Sessão de Diagnóstico': [
      'Book a Diagnostic Session', 'Réserver une séance de diagnostic', 'Diagnosegespräch vereinbaren',
      'احجز جلسة تشخيصية', 'Записаться на диагностическую сессию', 'Prenota una sessione diagnostica', '预约诊断会谈'
    ],
    'Sociedade de Advogados, RL': [
      'Law Firm, RL', 'Société d’avocats, RL', 'Rechtsanwaltsgesellschaft, RL',
      'شركة محاماة، RL', 'Юридическая фирма, RL', 'Studio legale, RL', '律师事务所, RL'
    ],
    'Fechar': ['Close', 'Fermer', 'Schließen', 'إغلاق', 'Закрыть', 'Chiudi', '关闭'],
    'Abrir menu': ['Open menu', 'Ouvrir le menu', 'Menü öffnen', 'فتح القائمة', 'Открыть меню', 'Apri il menu', '打开菜单'],
    'Idioma': ['Language', 'Langue', 'Sprache', 'اللغة', 'Язык', 'Lingua', '语言'],

    // ---------- Hero ----------
    'ESCRITÓRIO DE ADVOCACIA · ANGOLA': [
      'LAW FIRM · ANGOLA', 'CABINET D’AVOCATS · ANGOLA', 'ANWALTSKANZLEI · ANGOLA',
      'مكتب محاماة · أنغولا', 'ЮРИДИЧЕСКАЯ ФИРМА · АНГОЛА', 'STUDIO LEGALE · ANGOLA', '律师事务所 · 安哥拉'
    ],
    'Corporate Law para': [
      'Corporate Law for', 'Droit des affaires pour', 'Wirtschaftsrecht für',
      'قانون الشركات من أجل', 'Корпоративное право', 'Diritto societario per', '公司法服务于'
    ],
    'Angola': ['Angola', 'Angola', 'Angola', 'أنغولا', 'Ангола', 'Angola', '安哥拉'],
    'que cresce': ['that grows', 'en pleine croissance', 'im Wachstum', 'في نمو مستمر', 'которая растёт', 'in crescita', '持续增长的企业'],
    'Sociedade de Advogados, RL · Luanda, Angola': [
      'Law Firm, RL · Luanda, Angola',
      'Société d’avocats, RL · Luanda, Angola',
      'Rechtsanwaltsgesellschaft, RL · Luanda, Angola',
      'شركة محاماة، RL · لواندا، أنغولا',
      'Юридическая фирма, RL · Луанда, Ангола',
      'Studio legale, RL · Luanda, Angola',
      '律师事务所, RL · 安哥拉卢安达'
    ],
    'Assessoria jurídica especializada em direito empresarial e corporativo — para grupos angolanos e investidores internacionais que crescem com segurança e confiança jurídica em Angola.': [
      'Specialised legal advisory in business and corporate law — for Angolan groups and international investors who grow with security and legal confidence in Angola.',
      'Conseil juridique spécialisé en droit des affaires et des sociétés — pour les groupes angolais et les investisseurs internationaux qui se développent en toute sécurité et confiance juridique en Angola.',
      'Spezialisierte Rechtsberatung im Unternehmens- und Gesellschaftsrecht — für angolanische Gruppen und internationale Investoren, die in Angola mit rechtlicher Sicherheit und Vertrauen wachsen.',
      'استشارات قانونية متخصصة في قانون الأعمال والشركات — للمجموعات الأنغولية والمستثمرين الدوليين الذين ينمون بأمان وثقة قانونية في أنغولا.',
      'Специализированные юридические консультации в области корпоративного и предпринимательского права — для ангольских групп и международных инвесторов, которые растут с уверенностью и правовой защитой в Анголе.',
      'Consulenza legale specializzata in diritto commerciale e societario — per gruppi angolani e investitori internazionali che crescono con sicurezza e fiducia giuridica in Angola.',
      '专注于商法与公司法的专业法律咨询——为安哥拉企业集团和国际投资者在安哥拉安全、稳健地发展提供法律保障与信心。'
    ],
    'Corporate': ['Corporate', 'Corporate', 'Corporate', 'الشركات', 'Корпоративное', 'Societario', '公司法'],
    'Especialização': ['Specialisation', 'Spécialisation', 'Spezialisierung', 'التخصص', 'Специализация', 'Specializzazione', '专业领域'],
    'Sectores servidos': ['Sectors served', 'Secteurs servis', 'Betreute Branchen', 'القطاعات المخدومة', 'Обслуживаемые отрасли', 'Settori serviti', '服务行业'],
    'Mercado principal': ['Main market', 'Marché principal', 'Hauptmarkt', 'السوق الرئيسي', 'Основной рынок', 'Mercato principale', '主要市场'],
    'Escritório registado': ['Registered firm', 'Cabinet enregistré', 'Eingetragene Kanzlei', 'مكتب مسجّل', 'Зарегистрированная фирма', 'Studio registrato', '注册律所'],

    // ---------- Sobre ----------
    'REGISTADA': ['REGISTERED', 'ENREGISTRÉE', 'EINGETRAGEN', 'مسجّلة', 'ЗАРЕГИСТРИРОВАНА', 'REGISTRATO', '已注册'],
    '“Onde o direito serve o negócio.”': [
      '“Where the law serves business.”',
      '« Là où le droit sert l’entreprise. »',
      '„Wo das Recht dem Geschäft dient.“',
      '«حيث يخدم القانون الأعمال.»',
      '«Там, где право служит бизнесу.»',
      '«Dove il diritto serve il business.»',
      '“法律服务于商业。”'
    ],
    'SOBRE O ESCRITÓRIO': ['ABOUT THE FIRM', 'À PROPOS DU CABINET', 'ÜBER DIE KANZLEI', 'عن المكتب', 'О ФИРМЕ', 'LO STUDIO', '关于律所'],
    'Rigor Jurídico com': [
      'Legal Rigour with', 'Rigueur juridique et', 'Juristische Präzision mit',
      'الدقة القانونية مع', 'Юридическая точность и', 'Rigore giuridico con', '法律严谨与'
    ],
    'visão de negócio': [
      'business vision', 'vision stratégique', 'unternehmerischem Weitblick',
      'رؤية تجارية', 'деловое видение', 'visione di business', '商业视野'
    ],
    'JPires – Sociedade de Advogados, RL é um escritório especializado em direito empresarial e corporativo, com actuação focada no mercado angolano e nas suas interfaces com o investimento e o negócio internacional.': [
      'JPires – Sociedade de Advogados, RL is a law firm specialised in business and corporate law, focused on the Angolan market and its interfaces with international investment and business.',
      'JPires – Sociedade de Advogados, RL est un cabinet spécialisé en droit des affaires et des sociétés, axé sur le marché angolais et ses interfaces avec l’investissement et les affaires à l’international.',
      'JPires – Sociedade de Advogados, RL ist eine auf Wirtschafts- und Gesellschaftsrecht spezialisierte Kanzlei mit Fokus auf den angolanischen Markt und dessen Schnittstellen zu Investitionen und internationalem Geschäft.',
      'JPires – Sociedade de Advogados, RL مكتب متخصص في قانون الأعمال والشركات، يركّز على السوق الأنغولي وعلى تقاطعاته مع الاستثمار والأعمال الدولية.',
      'JPires – Sociedade de Advogados, RL — юридическая фирма, специализирующаяся на корпоративном и предпринимательском праве, ориентированная на ангольский рынок и его взаимодействие с инвестициями и международным бизнесом.',
      'JPires – Sociedade de Advogados, RL è uno studio specializzato in diritto commerciale e societario, focalizzato sul mercato angolano e sulle sue interfacce con gli investimenti e il business internazionale.',
      'JPires – Sociedade de Advogados, RL 是一家专注于商法和公司法的律师事务所，业务聚焦安哥拉市场及其与国际投资和国际商务的衔接。'
    ],
    'A nossa abordagem combina rigor jurídico com compreensão profunda da realidade económica angolana — traduzindo complexidade legal em soluções práticas que protegem e potenciam os nossos clientes.': [
      'Our approach combines legal rigour with a deep understanding of the Angolan economic reality — turning legal complexity into practical solutions that protect and empower our clients.',
      'Notre approche allie rigueur juridique et compréhension approfondie de la réalité économique angolaise — en traduisant la complexité juridique en solutions pratiques qui protègent et valorisent nos clients.',
      'Unser Ansatz verbindet juristische Präzision mit einem tiefen Verständnis der angolanischen Wirtschaftsrealität — und übersetzt rechtliche Komplexität in praxisnahe Lösungen, die unsere Mandanten schützen und stärken.',
      'يجمع نهجنا بين الدقة القانونية والفهم العميق للواقع الاقتصادي الأنغولي — محوّلين التعقيد القانوني إلى حلول عملية تحمي عملاءنا وتعزز مكانتهم.',
      'Наш подход сочетает юридическую точность с глубоким пониманием экономических реалий Анголы — превращая правовую сложность в практические решения, которые защищают и усиливают наших клиентов.',
      'Il nostro approccio unisce rigore giuridico e profonda comprensione della realtà economica angolana, trasformando la complessità legale in soluzioni pratiche che proteggono e valorizzano i nostri clienti.',
      '我们的方法将法律严谨性与对安哥拉经济现实的深刻理解相结合，把复杂的法律问题转化为切实可行的解决方案，保护并助力我们的客户。'
    ],
    'Servimos grupos empresariais angolanos, investidores estrangeiros e empresas em crescimento — nos sectores de Oil & Gás, Mineração, Banca, Seguros e muito mais.': [
      'We serve Angolan business groups, foreign investors and growing companies — in the Oil & Gas, Mining, Banking, Insurance sectors and more.',
      'Nous servons des groupes d’entreprises angolais, des investisseurs étrangers et des entreprises en croissance — dans les secteurs du pétrole et du gaz, des mines, de la banque, des assurances et bien plus encore.',
      'Wir betreuen angolanische Unternehmensgruppen, ausländische Investoren und wachsende Unternehmen — in den Branchen Öl & Gas, Bergbau, Banken, Versicherungen und mehr.',
      'نخدم المجموعات التجارية الأنغولية والمستثمرين الأجانب والشركات النامية — في قطاعات النفط والغاز والتعدين والبنوك والتأمين وغيرها.',
      'Мы обслуживаем ангольские деловые группы, иностранных инвесторов и растущие компании — в сферах нефти и газа, горнодобычи, банковского дела, страхования и не только.',
      'Serviamo gruppi imprenditoriali angolani, investitori stranieri e aziende in crescita, nei settori Oil & Gas, miniere, banche, assicurazioni e molto altro.',
      '我们服务于安哥拉企业集团、外国投资者和成长型企业，涵盖石油天然气、矿业、银行、保险等多个行业。'
    ],
    'RIGOR': ['RIGOUR', 'RIGUEUR', 'PRÄZISION', 'الدقة', 'ТОЧНОСТЬ', 'RIGORE', '严谨'],
    'Excelência técnica em cada mandato.': [
      'Technical excellence in every mandate.', 'Excellence technique dans chaque mandat.', 'Fachliche Exzellenz in jedem Mandat.',
      'التميز التقني في كل تكليف.', 'Техническое совершенство в каждом поручении.', 'Eccellenza tecnica in ogni mandato.', '每一项委托都追求技术卓越。'
    ],
    'CONFIANÇA': ['TRUST', 'CONFIANCE', 'VERTRAUEN', 'الثقة', 'ДОВЕРИЕ', 'FIDUCIA', '信任'],
    'Confidencialidade e integridade.': [
      'Confidentiality and integrity.', 'Confidentialité et intégrité.', 'Vertraulichkeit und Integrität.',
      'السرية والنزاهة.', 'Конфиденциальность и добросовестность.', 'Riservatezza e integrità.', '保密与诚信。'
    ],
    'PRAGMATISMO': ['PRAGMATISM', 'PRAGMATISME', 'PRAGMATISMUS', 'الواقعية', 'ПРАГМАТИЗМ', 'PRAGMATISMO', '务实'],
    'Soluções práticas e accionáveis.': [
      'Practical, actionable solutions.', 'Des solutions pratiques et applicables.', 'Praxisnahe, umsetzbare Lösungen.',
      'حلول عملية وقابلة للتنفيذ.', 'Практичные и осуществимые решения.', 'Soluzioni pratiche e attuabili.', '切实可行的解决方案。'
    ],
    'PARCERIA': ['PARTNERSHIP', 'PARTENARIAT', 'PARTNERSCHAFT', 'الشراكة', 'ПАРТНЁРСТВО', 'PARTNERSHIP', '伙伴关系'],
    'Relações de longo prazo.': [
      'Long-term relationships.', 'Des relations durables.', 'Langfristige Beziehungen.',
      'علاقات طويلة الأمد.', 'Долгосрочные отношения.', 'Relazioni a lungo termine.', '长期合作关系。'
    ],

    // ---------- Áreas de Prática (cards e títulos dos modais) ----------
    'ÁREAS DE PRÁTICA': [
      'PRACTICE AREAS', 'DOMAINES D’EXPERTISE', 'TÄTIGKEITSBEREICHE',
      'مجالات الممارسة', 'НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ', 'AREE DI ATTIVITÀ', '业务领域'
    ],
    'O que': ['What we', 'Ce que', 'Was wir', 'ما', 'Чем мы', 'Cosa', '我们的'],
    'fazemos': ['do', 'nous faisons', 'tun', 'نقوم به', 'занимаемся', 'facciamo', '业务'],
    'Direito Societário & Governance': [
      'Corporate Law & Governance', 'Droit des sociétés & gouvernance', 'Gesellschaftsrecht & Governance',
      'قانون الشركات والحوكمة', 'Корпоративное право и управление', 'Diritto societario e governance', '公司法与公司治理'
    ],
    'Direito Societário & Governança': [
      'Corporate Law & Governance', 'Droit des sociétés & gouvernance', 'Gesellschaftsrecht & Governance',
      'قانون الشركات والحوكمة', 'Корпоративное право и управление', 'Diritto societario e governance', '公司法与公司治理'
    ],
    'Fusões, Aquisições & Privatizações': [
      'Mergers, Acquisitions & Privatisations', 'Fusions, acquisitions & privatisations', 'Fusionen, Übernahmen & Privatisierungen',
      'الاندماج والاستحواذ والخصخصة', 'Слияния, поглощения и приватизация', 'Fusioni, acquisizioni e privatizzazioni', '并购与私有化'
    ],
    'Investimento Estrangeiro & JV': [
      'Foreign Investment & JV', 'Investissement étranger & JV', 'Auslandsinvestitionen & JV',
      'الاستثمار الأجنبي والمشاريع المشتركة', 'Иностранные инвестиции и СП', 'Investimenti esteri e JV', '外国投资与合资企业'
    ],
    'Investimento Estrangeiro & Joint Ventures': [
      'Foreign Investment & Joint Ventures', 'Investissement étranger & joint ventures', 'Auslandsinvestitionen & Joint Ventures',
      'الاستثمار الأجنبي والمشاريع المشتركة', 'Иностранные инвестиции и совместные предприятия', 'Investimenti esteri e joint venture', '外国投资与合资企业'
    ],
    'Contratos Comerciais & Regulação': [
      'Commercial Contracts & Regulation', 'Contrats commerciaux & réglementation', 'Handelsverträge & Regulierung',
      'العقود التجارية والتنظيم', 'Коммерческие контракты и регулирование', 'Contratti commerciali e regolamentazione', '商业合同与监管'
    ],
    'Financiamento & Reestruturação': [
      'Financing & Restructuring', 'Financement & restructuration', 'Finanzierung & Restrukturierung',
      'التمويل وإعادة الهيكلة', 'Финансирование и реструктуризация', 'Finanziamento e ristrutturazione', '融资与重组'
    ],
    'Resolução de Conflitos': [
      'Dispute Resolution', 'Résolution des litiges', 'Streitbeilegung',
      'تسوية النزاعات', 'Разрешение споров', 'Risoluzione delle controversie', '争议解决'
    ],

    // ---------- Sectores ----------
    'SECTORES': ['SECTORS', 'SECTEURS', 'BRANCHEN', 'القطاعات', 'ОТРАСЛИ', 'SETTORI', '行业'],
    'Onde': ['Where we', 'Où', 'Wo wir', 'حيث', 'Где мы', 'Dove', '我们'],
    'actuamos': ['operate', 'nous intervenons', 'tätig sind', 'نعمل', 'работаем', 'operiamo', '服务的行业'],
    'Conhecimento sectorial profundo — porque em Angola o contexto é determinante para a qualidade da assessoria jurídica.': [
      'Deep sector knowledge — because in Angola context is decisive for the quality of legal advice.',
      'Une connaissance sectorielle approfondie — car en Angola, le contexte est déterminant pour la qualité du conseil juridique.',
      'Tiefes Branchenwissen — denn in Angola ist der Kontext entscheidend für die Qualität der Rechtsberatung.',
      'معرفة قطاعية عميقة — لأن السياق في أنغولا عامل حاسم في جودة الاستشارة القانونية.',
      'Глубокое знание отраслей — потому что в Анголе контекст определяет качество юридических консультаций.',
      'Profonda conoscenza settoriale — perché in Angola il contesto è determinante per la qualità della consulenza legale.',
      '深厚的行业知识——因为在安哥拉，行业背景对法律咨询的质量至关重要。'
    ],
    'Oil & Gás e Energia': [
      'Oil & Gas and Energy', 'Pétrole, gaz et énergie', 'Öl, Gas und Energie',
      'النفط والغاز والطاقة', 'Нефть, газ и энергетика', 'Petrolio, gas ed energia', '石油、天然气与能源'
    ],
    'Mineração e Recursos Naturais': [
      'Mining and Natural Resources', 'Mines et ressources naturelles', 'Bergbau und natürliche Ressourcen',
      'التعدين والموارد الطبيعية', 'Горнодобыча и природные ресурсы', 'Settore minerario e risorse naturali', '矿业与自然资源'
    ],
    'Banca e Serviços Financeiros': [
      'Banking and Financial Services', 'Banque et services financiers', 'Banken und Finanzdienstleistungen',
      'البنوك والخدمات المالية', 'Банки и финансовые услуги', 'Banche e servizi finanziari', '银行与金融服务'
    ],
    'Seguros e Resseguros': [
      'Insurance and Reinsurance', 'Assurance et réassurance', 'Versicherung und Rückversicherung',
      'التأمين وإعادة التأمين', 'Страхование и перестрахование', 'Assicurazioni e riassicurazioni', '保险与再保险'
    ],
    'Instituições Públicas e Estado': [
      'Public Institutions and the State', 'Institutions publiques et État', 'Öffentliche Einrichtungen und Staat',
      'المؤسسات العامة والدولة', 'Государственные учреждения и государство', 'Istituzioni pubbliche e Stato', '公共机构与国家'
    ],
    'Recursos Humanos e Laboral': [
      'Human Resources and Labour', 'Ressources humaines et droit du travail', 'Personal und Arbeitsrecht',
      'الموارد البشرية وقانون العمل', 'Кадры и трудовое право', 'Risorse umane e diritto del lavoro', '人力资源与劳动法'
    ],
    'Segurança Privada': [
      'Private Security', 'Sécurité privée', 'Private Sicherheit',
      'الأمن الخاص', 'Частная охрана', 'Sicurezza privata', '私人安保'
    ],
    'Imobiliário e Construção': [
      'Real Estate and Construction', 'Immobilier et construction', 'Immobilien und Bau',
      'العقارات والبناء', 'Недвижимость и строительство', 'Immobiliare e costruzioni', '房地产与建筑'
    ],

    // ---------- Equipa ----------
    'LIDERANÇA E EQUIPA': [
      'LEADERSHIP AND TEAM', 'DIRECTION ET ÉQUIPE', 'FÜHRUNG UND TEAM',
      'القيادة والفريق', 'РУКОВОДСТВО И КОМАНДА', 'LEADERSHIP E TEAM', '领导层与团队'
    ],
    'A Equipa': ['The Team', 'L’équipe', 'Das Team', 'الفريق', 'Команда', 'Il Team', '团队'],
    'CEO · Managing Partner': [
      'CEO · Managing Partner', 'PDG · Associé gérant', 'CEO · Managing Partner',
      'الرئيس التنفيذي · الشريك المدير', 'Генеральный директор · Управляющий партнёр', 'CEO · Managing Partner', '首席执行官 · 管理合伙人'
    ],
    'Associate Partner': ['Associate Partner', 'Associé', 'Associate Partner', 'شريك مساعد', 'Ассоциированный партнёр', 'Associate Partner', '副合伙人'],

    // ---------- Honorários ----------
    'MODELOS DE COLABORAÇÃO': [
      'COLLABORATION MODELS', 'MODÈLES DE COLLABORATION', 'ZUSAMMENARBEITSMODELLE',
      'نماذج التعاون', 'МОДЕЛИ СОТРУДНИЧЕСТВА', 'MODELLI DI COLLABORAZIONE', '合作模式'
    ],
    'Transparentes': ['& Transparency', '& transparence', '& Transparenz', 'والشفافية', 'и прозрачность', 'e trasparenza', '与透明度'],
    'Os nossos honorários são definidos em função do perfil do cliente, da complexidade do mandato e das condições do mercado. Prezamos pela transparência, equilíbrio e valor real entregue — sempre com abertura para negociação.': [
      'Our fees are defined according to the client profile, the complexity of the mandate and market conditions. We value transparency, balance and real value delivered — always open to negotiation.',
      'Nos honoraires sont définis en fonction du profil du client, de la complexité du mandat et des conditions du marché. Nous privilégions la transparence, l’équilibre et la valeur réelle apportée — toujours avec une ouverture à la négociation.',
      'Unsere Honorare richten sich nach dem Profil des Mandanten, der Komplexität des Mandats und den Marktbedingungen. Wir legen Wert auf Transparenz, Ausgewogenheit und echten Mehrwert — stets verhandlungsbereit.',
      'تُحدَّد أتعابنا بحسب ملف العميل وتعقيد التكليف وظروف السوق. نحرص على الشفافية والتوازن والقيمة الحقيقية المقدّمة — مع انفتاح دائم على التفاوض.',
      'Наши гонорары определяются с учётом профиля клиента, сложности поручения и рыночных условий. Мы ценим прозрачность, баланс и реальную ценность — всегда открыты к переговорам.',
      'I nostri onorari sono definiti in base al profilo del cliente, alla complessità del mandato e alle condizioni di mercato. Puntiamo su trasparenza, equilibrio e valore reale offerto — sempre aperti alla negoziazione.',
      '我们的费用根据客户情况、委托的复杂程度和市场条件确定。我们注重透明、公平和所创造的实际价值——始终愿意协商。'
    ],
    'AVENÇA MENSAL': ['MONTHLY RETAINER', 'FORFAIT MENSUEL', 'MONATLICHES MANDAT', 'اتفاقية شهرية', 'ЕЖЕМЕСЯЧНЫЙ АБОНЕМЕНТ', 'CANONE MENSILE', '月度委托'],
    '★ RECOMENDADO': ['★ RECOMMENDED', '★ RECOMMANDÉ', '★ EMPFOHLEN', '★ موصى به', '★ РЕКОМЕНДУЕМ', '★ CONSIGLIATO', '★ 推荐'],
    'DEDICAÇÃO PARCIAL': ['PART-TIME DEDICATION', 'DÉDICATION PARTIELLE', 'TEILZEIT-BETREUUNG', 'تفرغ جزئي', 'ЧАСТИЧНАЯ ЗАНЯТОСТЬ', 'DEDICAZIONE PARZIALE', '部分驻场服务'],
    'ESSENCIAL': ['ESSENTIAL', 'ESSENTIEL', 'ESSENTIAL', 'الأساسية', 'БАЗОВЫЙ', 'ESSENZIALE', '基础版'],
    'ESTRATÉGICO': ['STRATEGIC', 'STRATÉGIQUE', 'STRATEGISCH', 'الاستراتيجية', 'СТРАТЕГИЧЕСКИЙ', 'STRATEGICO', '战略版'],
    'PREMIUM': ['PREMIUM', 'PREMIUM', 'PREMIUM', 'بريميوم', 'ПРЕМИУМ', 'PREMIUM', '高级版'],
    'Sob Consulta': ['On Request', 'Sur demande', 'Auf Anfrage', 'عند الطلب', 'По запросу', 'Su richiesta', '面议'],
    'Adaptado ao cliente e ao mercado': [
      'Tailored to the client and the market', 'Adapté au client et au marché', 'Angepasst an Mandant und Markt',
      'مصمّم حسب العميل والسوق', 'Адаптировано под клиента и рынок', 'Su misura per cliente e mercato', '按客户与市场量身定制'
    ],
    'Até 8h de assessoria mensal': [
      'Up to 8h of advisory per month', 'Jusqu’à 8 h de conseil par mois', 'Bis zu 8 Std. Beratung pro Monat',
      'حتى 8 ساعات استشارة شهرياً', 'До 8 часов консультаций в месяц', 'Fino a 8 ore di consulenza al mese', '每月最多8小时咨询'
    ],
    'Revisão de contratos': ['Contract review', 'Révision de contrats', 'Vertragsprüfung', 'مراجعة العقود', 'Проверка договоров', 'Revisione dei contratti', '合同审查'],
    'Consultas urgentes incluídas': [
      'Urgent consultations included', 'Consultations urgentes incluses', 'Dringende Anfragen inklusive',
      'الاستشارات العاجلة مشمولة', 'Срочные консультации включены', 'Consulenze urgenti incluse', '包含紧急咨询'
    ],
    'Relatório mensal de risco jurídico': [
      'Monthly legal risk report', 'Rapport mensuel des risques juridiques', 'Monatlicher Rechtsrisikobericht',
      'تقرير شهري للمخاطر القانونية', 'Ежемесячный отчёт о юридических рисках', 'Report mensile sul rischio legale', '月度法律风险报告'
    ],
    'Plano à medida — detalhes sob consulta com consultoria dedicada.': [
      'Tailor-made plan — details on request with dedicated consultancy.',
      'Plan sur mesure — détails sur demande avec un conseil dédié.',
      'Maßgeschneiderter Plan — Details auf Anfrage mit eigener Betreuung.',
      'خطة مصمّمة حسب الطلب — التفاصيل عند الاستشارة مع فريق مخصص.',
      'Индивидуальный план — подробности по запросу у выделенного консультанта.',
      'Piano su misura — dettagli su richiesta con consulenza dedicata.',
      '定制方案——详情请咨询专属顾问。'
    ],
    'Presença regular na empresa': [
      'Regular presence at the company', 'Présence régulière dans l’entreprise', 'Regelmäßige Präsenz im Unternehmen',
      'حضور منتظم في الشركة', 'Регулярное присутствие в компании', 'Presenza regolare in azienda', '定期驻企业服务'
    ],
    'Representação em negociações': [
      'Representation in negotiations', 'Représentation lors des négociations', 'Vertretung in Verhandlungen',
      'التمثيل في المفاوضات', 'Представительство на переговорах', 'Rappresentanza nelle negoziazioni', '代表参与谈判'
    ],
    'Gestão jurídica completa': [
      'Full legal management', 'Gestion juridique complète', 'Umfassendes Rechtsmanagement',
      'إدارة قانونية متكاملة', 'Полное юридическое сопровождение', 'Gestione legale completa', '全面法律管理'
    ],
    'Acesso directo e prioritário': [
      'Direct, priority access', 'Accès direct et prioritaire', 'Direkter, bevorzugter Zugang',
      'وصول مباشر وذو أولوية', 'Прямой приоритетный доступ', 'Accesso diretto e prioritario', '直接优先联系渠道'
    ],
    'Relatórios executivos mensais': [
      'Monthly executive reports', 'Rapports exécutifs mensuels', 'Monatliche Management-Berichte',
      'تقارير تنفيذية شهرية', 'Ежемесячные управленческие отчёты', 'Report esecutivi mensili', '月度高管报告'
    ],
    'Solicitar Proposta': [
      'Request a Proposal', 'Demander une proposition', 'Angebot anfordern',
      'اطلب عرضاً', 'Запросить предложение', 'Richiedi una proposta', '申请报价方案'
    ],

    // ---------- Alianças ----------
    'ALIANÇAS INTERNACIONAIS': [
      'INTERNATIONAL ALLIANCES', 'ALLIANCES INTERNATIONALES', 'INTERNATIONALE ALLIANZEN',
      'التحالفات الدولية', 'МЕЖДУНАРОДНЫЕ АЛЬЯНСЫ', 'ALLEANZE INTERNAZIONALI', '国际合作联盟'
    ],
    'Alianças em': ['Alliances across', 'Des alliances sur', 'Allianzen auf', 'تحالفات في', 'Альянсы на', 'Alleanze in', '联盟遍布'],
    'quatro continentes': ['four continents', 'quatre continents', 'vier Kontinenten', 'أربع قارات', 'четырёх континентах', 'quattro continenti', '四大洲'],
    'A JPires mantém alianças estratégicas com parceiros na Europa, em África, na América e na Ásia.': [
      'JPires maintains strategic alliances with partners in Europe, Africa, the Americas and Asia.',
      'JPires entretient des alliances stratégiques avec des partenaires en Europe, en Afrique, en Amérique et en Asie.',
      'JPires unterhält strategische Allianzen mit Partnern in Europa, Afrika, Amerika und Asien.',
      'تحتفظ JPires بتحالفات استراتيجية مع شركاء في أوروبا وأفريقيا والأمريكتين وآسيا.',
      'JPires поддерживает стратегические альянсы с партнёрами в Европе, Африке, Америке и Азии.',
      'JPires mantiene alleanze strategiche con partner in Europa, Africa, America e Asia.',
      'JPires 与欧洲、非洲、美洲和亚洲的合作伙伴保持战略联盟关系。'
    ],
    // Nomes usados no mapa
    'África': ['Africa', 'Afrique', 'Afrika', 'أفريقيا', 'Африка', 'Africa', '非洲'],
    'Europa': ['Europe', 'Europe', 'Europa', 'أوروبا', 'Европа', 'Europa', '欧洲'],
    'América do Norte': ['North America', 'Amérique du Nord', 'Nordamerika', 'أمريكا الشمالية', 'Северная Америка', 'Nord America', '北美洲'],
    'América do Sul': ['South America', 'Amérique du Sud', 'Südamerika', 'أمريكا الجنوبية', 'Южная Америка', 'Sud America', '南美洲'],
    'Portugal': ['Portugal', 'Portugal', 'Portugal', 'البرتغال', 'Португалия', 'Portogallo', '葡萄牙'],
    'Brasil': ['Brazil', 'Brésil', 'Brasilien', 'البرازيل', 'Бразилия', 'Brasile', '巴西'],
    'Estados Unidos': ['United States', 'États-Unis', 'Vereinigte Staaten', 'الولايات المتحدة', 'США', 'Stati Uniti', '美国'],
    'Reino Unido': ['United Kingdom', 'Royaume-Uni', 'Vereinigtes Königreich', 'المملكة المتحدة', 'Великобритания', 'Regno Unito', '英国'],
    'Emirados Árabes Unidos': [
      'United Arab Emirates', 'Émirats arabes unis', 'Vereinigte Arabische Emirate',
      'الإمارات العربية المتحدة', 'ОАЭ', 'Emirati Arabi Uniti', '阿拉伯联合酋长国'
    ],
    'Alemanha': ['Germany', 'Allemagne', 'Deutschland', 'ألمانيا', 'Германия', 'Germania', '德国'],
    'Luanda (Sede)': [
      'Luanda (Headquarters)', 'Luanda (Siège)', 'Luanda (Hauptsitz)',
      'لواندا (المقر)', 'Луанда (штаб-квартира)', 'Luanda (sede)', '卢安达（总部）'
    ],

    // ---------- Contactos ----------
    'FALE CONNOSCO': ['CONTACT US', 'CONTACTEZ-NOUS', 'KONTAKT', 'تواصل معنا', 'СВЯЖИТЕСЬ С НАМИ', 'CONTATTACI', '联系我们'],
    'Comece com uma': ['Start with a', 'Commencez par une', 'Beginnen Sie mit einem', 'ابدأ بـ', 'Начните с', 'Inizia con una', '从一次'],
    'conversa': ['conversation', 'conversation', 'Gespräch', 'محادثة', 'разговора', 'conversazione', '交谈开始'],
    'Sessão de diagnóstico inicial gratuita — 60 minutos, sem compromisso. Avaliamos como podemos ser úteis ao seu negócio.': [
      'Free initial diagnostic session — 60 minutes, no commitment. We assess how we can be useful to your business.',
      'Séance de diagnostic initiale gratuite — 60 minutes, sans engagement. Nous évaluons comment nous pouvons être utiles à votre entreprise.',
      'Kostenloses Erstgespräch zur Diagnose — 60 Minuten, unverbindlich. Wir prüfen, wie wir Ihrem Unternehmen nützlich sein können.',
      'جلسة تشخيص أولية مجانية — 60 دقيقة، دون أي التزام. نقيّم كيف يمكننا خدمة أعمالك.',
      'Бесплатная первичная диагностическая сессия — 60 минут, без обязательств. Мы оценим, чем можем быть полезны вашему бизнесу.',
      'Sessione diagnostica iniziale gratuita — 60 minuti, senza impegno. Valutiamo come possiamo essere utili alla tua attività.',
      '免费初步诊断会谈——60分钟，无任何义务。我们将评估如何为您的业务提供帮助。'
    ],
    'ENDEREÇO': ['ADDRESS', 'ADRESSE', 'ADRESSE', 'العنوان', 'АДРЕС', 'INDIRIZZO', '地址'],
    'Loanda Towers, 11º Andar, Sala 04, Luanda, Angola': [
      'Loanda Towers, 11th Floor, Room 04, Luanda, Angola',
      'Loanda Towers, 11e étage, salle 04, Luanda, Angola',
      'Loanda Towers, 11. Stock, Raum 04, Luanda, Angola',
      'لواندا تاورز، الطابق 11، الغرفة 04، لواندا، أنغولا',
      'Loanda Towers, 11 этаж, офис 04, Луанда, Ангола',
      'Loanda Towers, 11º piano, sala 04, Luanda, Angola',
      '安哥拉卢安达 Loanda Towers 11层04室'
    ],
    'Luanda, Angola': [
      'Luanda, Angola', 'Luanda, Angola', 'Luanda, Angola',
      'لواندا، أنغولا', 'Луанда, Ангола', 'Luanda, Angola', '安哥拉卢安达'
    ],
    'TELEFONE': ['PHONE', 'TÉLÉPHONE', 'TELEFON', 'الهاتف', 'ТЕЛЕФОН', 'TELEFONO', '电话'],
    'Atendimento Corporativo': [
      'Corporate Service', 'Service entreprises', 'Unternehmensservice',
      'خدمة الشركات', 'Обслуживание корпоративных клиентов', 'Servizio aziende', '企业客户服务'
    ],
    'EMAIL': ['EMAIL', 'E-MAIL', 'E-MAIL', 'البريد الإلكتروني', 'ЭЛ. ПОЧТА', 'EMAIL', '电子邮件'],
    'Directório de Sócios': [
      'Partners Directory', 'Annuaire des associés', 'Partnerverzeichnis',
      'دليل الشركاء', 'Справочник партнёров', 'Elenco dei soci', '合伙人名录'
    ],

    // ---------- Rodapé ----------
    'JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Confidencial': [
      'JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Confidential',
      'JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Confidentiel',
      'JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Vertraulich',
      'JPires – Sociedade de Advogados, RL · Corporate Law · لواندا، أنغولا · سري',
      'JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Конфиденциально',
      'JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Riservato',
      'JPires – Sociedade de Advogados, RL · Corporate Law · 安哥拉卢安达 · 保密'
    ],

    // ---------- Textos fixos dos modais ----------
    'JPires · Áreas de Prática': [
      'JPires · Practice Areas', 'JPires · Domaines d’expertise', 'JPires · Tätigkeitsbereiche',
      'JPires · مجالات الممارسة', 'JPires · Направления деятельности', 'JPires · Aree di attività', 'JPires · 业务领域'
    ],
    'Serviços jurídicos': ['Legal services', 'Services juridiques', 'Rechtliche Leistungen', 'الخدمات القانونية', 'Юридические услуги', 'Servizi legali', '法律服务'],
    'Objetivo:': ['Objective:', 'Objectif :', 'Ziel:', 'الهدف:', 'Цель:', 'Obiettivo:', '目标：'],
    'Solicitar assessoria jurídica': [
      'Request legal advice', 'Demander un conseil juridique', 'Rechtsberatung anfragen',
      'اطلب استشارة قانونية', 'Запросить юридическую консультацию', 'Richiedi consulenza legale', '申请法律咨询'
    ],
    'Inclui': ['Includes', 'Comprend', 'Umfasst', 'يشمل', 'Включает', 'Include', '包括'],
    'Solicitar uma consulta': [
      'Request a consultation', 'Demander une consultation', 'Beratung anfragen',
      'اطلب استشارة', 'Запросить консультацию', 'Richiedi una consulenza', '预约咨询'
    ]
    // + aqui entram depois as frases longas dos modais
  };

  let current = 'pt';
  const origText = new WeakMap();
  const origAttr = new WeakMap();
  const norm = (s) => s.replace(/\s+/g, ' ').trim();
  const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA']);

  function t(pt, lang) {
    lang = lang || current;
    if (lang === 'pt') return pt;
    const row = D[norm(pt)];
    return row && row[IDX[lang]] ? row[IDX[lang]] : pt;
  }

  function apply(root, lang) {
    root = root || document.body;
    lang = lang || current;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const p = n.parentElement;
        if (!p || SKIP.has(p.tagName) || p.closest('#world-map')) return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((n) => {
      let orig = origText.get(n);
      if (orig === undefined) { orig = n.nodeValue; origText.set(n, orig); }
      const m = orig.match(/^(\s*)([\s\S]*?)(\s*)$/);
      n.nodeValue = m[1] + t(m[2], lang) + m[3];
    });

    root.querySelectorAll('[aria-label]').forEach((el) => {
      let o = origAttr.get(el);
      if (o === undefined) { o = el.getAttribute('aria-label'); origAttr.set(el, o); }
      el.setAttribute('aria-label', t(o, lang));
    });
  }

  function updateSwitcherUI(lang) {
    const flag = document.getElementById('lang-current-flag');
    if (flag) {
      flag.src = `https://flagcdn.com/w40/${FLAGS[lang]}.png`;
      flag.srcset = `https://flagcdn.com/w80/${FLAGS[lang]}.png 2x`;
    }
    document.querySelectorAll('#lang-menu [data-lang]').forEach((b) => {
      b.setAttribute('aria-selected', String(b.dataset.lang === lang));
    });
  }

  function setLang(lang) {
    if (lang !== 'pt' && !(lang in IDX)) lang = 'pt';
    current = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL.includes(lang) ? 'rtl' : 'ltr';
    document.title = t(TITLE_PT, lang);
    apply(document.body, lang);
    updateSwitcherUI(lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    document.dispatchEvent(new CustomEvent('jp:lang', { detail: { lang } }));
  }

  // Lista textos que ainda não têm tradução (útil para completar o dicionário)
  function missing() {
    const out = new Set();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const n = walker.currentNode;
      const p = n.parentElement;
      if (!p || SKIP.has(p.tagName) || p.closest('#world-map')) continue;
      const orig = origText.get(n) !== undefined ? origText.get(n) : n.nodeValue;
      const k = norm(orig);
      if (k.length > 2 && /[A-Za-zÀ-ÿ]/.test(k) && !D[k]) out.add(k);
    }
    return Array.from(out);
  }

  window.JPI18N = { t, apply, setLang, missing, get lang() { return current; } };

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('lang-btn');
    const menu = document.getElementById('lang-menu');

    function toggle(open) {
      if (!menu || !btn) return;
      menu.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
    }

    if (btn && menu) {
      btn.addEventListener('click', (e) => { e.stopPropagation(); toggle(menu.hidden); });
      menu.addEventListener('click', (e) => {
        const b = e.target.closest('[data-lang]');
        if (!b) return;
        setLang(b.dataset.lang);
        toggle(false);
      });
      document.addEventListener('click', (e) => { if (!menu.contains(e.target)) toggle(false); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggle(false); });
    }

    let saved = 'pt';
    try { saved = localStorage.getItem(STORAGE_KEY) || 'pt'; } catch (e) {}
    setLang(saved);
  });
})();