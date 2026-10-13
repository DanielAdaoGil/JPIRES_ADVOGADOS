// ==========================================================================
// JPIRES – TRADUÇÃO DO SITE (PT por defeito · EN · FR · DE · AR)
// A chave é o texto original em português; cada linha é [EN, FR, DE, AR]
// ==========================================================================
(function () {
  const IDX = { en: 0, fr: 1, de: 2, ar: 3 };
  const FLAGS = { pt: 'ao', en: 'gb', fr: 'fr', de: 'de', ar: 'ae' };
  const RTL = ['ar'];
  const STORAGE_KEY = 'jpires-lang';
  const TITLE_PT = 'JPires – Sociedade de Advogados, RL | Corporate Law em Angola';

  const D = {
    // ---------- Título da página ----------
    'JPires – Sociedade de Advogados, RL | Corporate Law em Angola': [
      'JPires – Law Firm, RL | Corporate Law in Angola',
      'JPires – Société d’avocats, RL | Droit des affaires en Angola',
      'JPires – Rechtsanwaltsgesellschaft, RL | Wirtschaftsrecht in Angola',
      'JPires – شركة محاماة، RL | قانون الشركات في أنغولا'
    ],

    // ---------- Navbar ----------
    'Sobre': ['About', 'À propos', 'Über uns', 'من نحن'],
    'Áreas de Prática': ['Practice Areas', 'Domaines d’expertise', 'Tätigkeitsbereiche', 'مجالات الممارسة'],
    'Sectores': ['Sectors', 'Secteurs', 'Branchen', 'القطاعات'],
    'Equipa': ['Team', 'Équipe', 'Team', 'الفريق'],
    'Honorários': ['Fees', 'Honoraires', 'Honorare', 'الأتعاب'],
    'Alianças': ['Alliances', 'Alliances', 'Allianzen', 'التحالفات'],
    'Contactos': ['Contact', 'Contact', 'Kontakt', 'اتصل بنا'],
    'Marcar Sessão de Diagnóstico': ['Book a Diagnostic Session', 'Réserver une séance de diagnostic', 'Diagnosegespräch vereinbaren', 'احجز جلسة تشخيصية'],
    'Sociedade de Advogados, RL': ['Law Firm, RL', 'Société d’avocats, RL', 'Rechtsanwaltsgesellschaft, RL', 'شركة محاماة، RL'],
    'Fechar': ['Close', 'Fermer', 'Schließen', 'إغلاق'],
    'Abrir menu': ['Open menu', 'Ouvrir le menu', 'Menü öffnen', 'فتح القائمة'],
    'Idioma': ['Language', 'Langue', 'Sprache', 'اللغة'],

    // ---------- Hero ----------
    'ESCRITÓRIO DE ADVOCACIA · ANGOLA': ['LAW FIRM · ANGOLA', 'CABINET D’AVOCATS · ANGOLA', 'ANWALTSKANZLEI · ANGOLA', 'مكتب محاماة · أنغولا'],
    'Corporate Law para': ['Corporate Law for', 'Droit des affaires pour', 'Wirtschaftsrecht für', 'قانون الشركات من أجل'],
    'Angola': ['Angola', 'Angola', 'Angola', 'أنغولا'],
    'que cresce': ['that grows', 'en pleine croissance', 'im Wachstum', 'في نمو مستمر'],
    'Sociedade de Advogados, RL · Luanda, Angola': [
      'Law Firm, RL · Luanda, Angola',
      'Société d’avocats, RL · Luanda, Angola',
      'Rechtsanwaltsgesellschaft, RL · Luanda, Angola',
      'شركة محاماة، RL · لواندا، أنغولا'
    ],
    'Assessoria jurídica especializada em direito empresarial e corporativo — para grupos angolanos e investidores internacionais que crescem com segurança e confiança jurídica em Angola.': [
      'Specialised legal advisory in business and corporate law — for Angolan groups and international investors who grow with security and legal confidence in Angola.',
      'Conseil juridique spécialisé en droit des affaires et des sociétés — pour les groupes angolais et les investisseurs internationaux qui se développent en toute sécurité et confiance juridique en Angola.',
      'Spezialisierte Rechtsberatung im Unternehmens- und Gesellschaftsrecht — für angolanische Gruppen und internationale Investoren, die in Angola mit rechtlicher Sicherheit und Vertrauen wachsen.',
      'استشارات قانونية متخصصة في قانون الأعمال والشركات — للمجموعات الأنغولية والمستثمرين الدوليين الذين ينمون بأمان وثقة قانونية في أنغولا.'
    ],
    'Corporate': ['Corporate', 'Corporate', 'Corporate', 'الشركات'],
    'Especialização': ['Specialisation', 'Spécialisation', 'Spezialisierung', 'التخصص'],
    'Sectores servidos': ['Sectors served', 'Secteurs servis', 'Betreute Branchen', 'القطاعات المخدومة'],
    'Mercado principal': ['Main market', 'Marché principal', 'Hauptmarkt', 'السوق الرئيسي'],
    'Escritório registado': ['Registered firm', 'Cabinet enregistré', 'Eingetragene Kanzlei', 'مكتب مسجّل'],

    // ---------- Sobre ----------
    'REGISTADA': ['REGISTERED', 'ENREGISTRÉE', 'EINGETRAGEN', 'مسجّلة'],
    '“Onde o direito serve o negócio.”': [
      '“Where the law serves business.”',
      '« Là où le droit sert l’entreprise. »',
      '„Wo das Recht dem Geschäft dient.“',
      '«حيث يخدم القانون الأعمال.»'
    ],
    'SOBRE O ESCRITÓRIO': ['ABOUT THE FIRM', 'À PROPOS DU CABINET', 'ÜBER DIE KANZLEI', 'عن المكتب'],
    'Rigor Jurídico com': ['Legal Rigour with', 'Rigueur juridique et', 'Juristische Präzision mit', 'الدقة القانونية مع'],
    'visão de negócio': ['business vision', 'vision stratégique', 'unternehmerischem Weitblick', 'رؤية تجارية'],
    'JPires – Sociedade de Advogados, RL é um escritório especializado em direito empresarial e corporativo, com actuação focada no mercado angolano e nas suas interfaces com o investimento e o negócio internacional.': [
      'JPires – Sociedade de Advogados, RL is a law firm specialised in business and corporate law, focused on the Angolan market and its interfaces with international investment and business.',
      'JPires – Sociedade de Advogados, RL est un cabinet spécialisé en droit des affaires et des sociétés, axé sur le marché angolais et ses interfaces avec l’investissement et les affaires à l’international.',
      'JPires – Sociedade de Advogados, RL ist eine auf Wirtschafts- und Gesellschaftsrecht spezialisierte Kanzlei mit Fokus auf den angolanischen Markt und dessen Schnittstellen zu Investitionen und internationalem Geschäft.',
      'JPires – Sociedade de Advogados, RL مكتب متخصص في قانون الأعمال والشركات، يركّز على السوق الأنغولي وعلى تقاطعاته مع الاستثمار والأعمال الدولية.'
    ],
    'A nossa abordagem combina rigor jurídico com compreensão profunda da realidade económica angolana — traduzindo complexidade legal em soluções práticas que protegem e potenciam os nossos clientes.': [
      'Our approach combines legal rigour with a deep understanding of the Angolan economic reality — turning legal complexity into practical solutions that protect and empower our clients.',
      'Notre approche allie rigueur juridique et compréhension approfondie de la réalité économique angolaise — en traduisant la complexité juridique en solutions pratiques qui protègent et valorisent nos clients.',
      'Unser Ansatz verbindet juristische Präzision mit einem tiefen Verständnis der angolanischen Wirtschaftsrealität — und übersetzt rechtliche Komplexität in praxisnahe Lösungen, die unsere Mandanten schützen und stärken.',
      'يجمع نهجنا بين الدقة القانونية والفهم العميق للواقع الاقتصادي الأنغولي — محوّلين التعقيد القانوني إلى حلول عملية تحمي عملاءنا وتعزز مكانتهم.'
    ],
    'Servimos grupos empresariais angolanos, investidores estrangeiros e empresas em crescimento — nos sectores de Oil & Gás, Mineração, Banca, Seguros e muito mais.': [
      'We serve Angolan business groups, foreign investors and growing companies — in the Oil & Gas, Mining, Banking, Insurance sectors and more.',
      'Nous servons des groupes d’entreprises angolais, des investisseurs étrangers et des entreprises en croissance — dans les secteurs du pétrole et du gaz, des mines, de la banque, des assurances et bien plus encore.',
      'Wir betreuen angolanische Unternehmensgruppen, ausländische Investoren und wachsende Unternehmen — in den Branchen Öl & Gas, Bergbau, Banken, Versicherungen und mehr.',
      'نخدم المجموعات التجارية الأنغولية والمستثمرين الأجانب والشركات النامية — في قطاعات النفط والغاز والتعدين والبنوك والتأمين وغيرها.'
    ],
    'RIGOR': ['RIGOUR', 'RIGUEUR', 'PRÄZISION', 'الدقة'],
    'Excelência técnica em cada mandato.': ['Technical excellence in every mandate.', 'Excellence technique dans chaque mandat.', 'Fachliche Exzellenz in jedem Mandat.', 'التميز التقني في كل تكليف.'],
    'CONFIANÇA': ['TRUST', 'CONFIANCE', 'VERTRAUEN', 'الثقة'],
    'Confidencialidade e integridade.': ['Confidentiality and integrity.', 'Confidentialité et intégrité.', 'Vertraulichkeit und Integrität.', 'السرية والنزاهة.'],
    'PRAGMATISMO': ['PRAGMATISM', 'PRAGMATISME', 'PRAGMATISMUS', 'الواقعية'],
    'Soluções práticas e accionáveis.': ['Practical, actionable solutions.', 'Des solutions pratiques et applicables.', 'Praxisnahe, umsetzbare Lösungen.', 'حلول عملية وقابلة للتنفيذ.'],
    'PARCERIA': ['PARTNERSHIP', 'PARTENARIAT', 'PARTNERSCHAFT', 'الشراكة'],
    'Relações de longo prazo.': ['Long-term relationships.', 'Des relations durables.', 'Langfristige Beziehungen.', 'علاقات طويلة الأمد.'],

    // ---------- Áreas de Prática (cards e títulos dos modais) ----------
    'ÁREAS DE PRÁTICA': ['PRACTICE AREAS', 'DOMAINES D’EXPERTISE', 'TÄTIGKEITSBEREICHE', 'مجالات الممارسة'],
    'O que': ['What we', 'Ce que', 'Was wir', 'ما'],
    'fazemos': ['do', 'nous faisons', 'tun', 'نقوم به'],
    'Direito Societário & Governance': ['Corporate Law & Governance', 'Droit des sociétés & gouvernance', 'Gesellschaftsrecht & Governance', 'قانون الشركات والحوكمة'],
    'Direito Societário & Governança': ['Corporate Law & Governance', 'Droit des sociétés & gouvernance', 'Gesellschaftsrecht & Governance', 'قانون الشركات والحوكمة'],
    'Fusões, Aquisições & Privatizações': ['Mergers, Acquisitions & Privatisations', 'Fusions, acquisitions & privatisations', 'Fusionen, Übernahmen & Privatisierungen', 'الاندماج والاستحواذ والخصخصة'],
    'Investimento Estrangeiro & JV': ['Foreign Investment & JV', 'Investissement étranger & JV', 'Auslandsinvestitionen & JV', 'الاستثمار الأجنبي والمشاريع المشتركة'],
    'Investimento Estrangeiro & Joint Ventures': ['Foreign Investment & Joint Ventures', 'Investissement étranger & joint ventures', 'Auslandsinvestitionen & Joint Ventures', 'الاستثمار الأجنبي والمشاريع المشتركة'],
    'Contratos Comerciais & Regulação': ['Commercial Contracts & Regulation', 'Contrats commerciaux & réglementation', 'Handelsverträge & Regulierung', 'العقود التجارية والتنظيم'],
    'Financiamento & Reestruturação': ['Financing & Restructuring', 'Financement & restructuration', 'Finanzierung & Restrukturierung', 'التمويل وإعادة الهيكلة'],
    'Resolução de Conflitos': ['Dispute Resolution', 'Résolution des litiges', 'Streitbeilegung', 'تسوية النزاعات'],

    // ---------- Sectores ----------
    'SECTORES': ['SECTORS', 'SECTEURS', 'BRANCHEN', 'القطاعات'],
    'Onde': ['Where we', 'Où', 'Wo wir', 'حيث'],
    'actuamos': ['operate', 'nous intervenons', 'tätig sind', 'نعمل'],
    'Conhecimento sectorial profundo — porque em Angola o contexto é determinante para a qualidade da assessoria jurídica.': [
      'Deep sector knowledge — because in Angola context is decisive for the quality of legal advice.',
      'Une connaissance sectorielle approfondie — car en Angola, le contexte est déterminant pour la qualité du conseil juridique.',
      'Tiefes Branchenwissen — denn in Angola ist der Kontext entscheidend für die Qualität der Rechtsberatung.',
      'معرفة قطاعية عميقة — لأن السياق في أنغولا عامل حاسم في جودة الاستشارة القانونية.'
    ],
    'Oil & Gás e Energia': ['Oil & Gas and Energy', 'Pétrole, gaz et énergie', 'Öl, Gas und Energie', 'النفط والغاز والطاقة'],
    'Mineração e Recursos Naturais': ['Mining and Natural Resources', 'Mines et ressources naturelles', 'Bergbau und natürliche Ressourcen', 'التعدين والموارد الطبيعية'],
    'Banca e Serviços Financeiros': ['Banking and Financial Services', 'Banque et services financiers', 'Banken und Finanzdienstleistungen', 'البنوك والخدمات المالية'],
    'Seguros e Resseguros': ['Insurance and Reinsurance', 'Assurance et réassurance', 'Versicherung und Rückversicherung', 'التأمين وإعادة التأمين'],
    'Instituições Públicas e Estado': ['Public Institutions and the State', 'Institutions publiques et État', 'Öffentliche Einrichtungen und Staat', 'المؤسسات العامة والدولة'],
    'Recursos Humanos e Laboral': ['Human Resources and Labour', 'Ressources humaines et droit du travail', 'Personal und Arbeitsrecht', 'الموارد البشرية وقانون العمل'],
    'Segurança Privada': ['Private Security', 'Sécurité privée', 'Private Sicherheit', 'الأمن الخاص'],
    'Imobiliário e Construção': ['Real Estate and Construction', 'Immobilier et construction', 'Immobilien und Bau', 'العقارات والبناء'],

    // ---------- Equipa ----------
    'LIDERANÇA E EQUIPA': ['LEADERSHIP AND TEAM', 'DIRECTION ET ÉQUIPE', 'FÜHRUNG UND TEAM', 'القيادة والفريق'],
    'A Equipa': ['The Team', 'L’équipe', 'Das Team', 'الفريق'],
    'CEO · Managing Partner': ['CEO · Managing Partner', 'PDG · Associé gérant', 'CEO · Managing Partner', 'الرئيس التنفيذي · الشريك المدير'],
    'Associate Partner': ['Associate Partner', 'Associé', 'Associate Partner', 'شريك مساعد'],

    // ---------- Honorários ----------
    'MODELOS DE COLABORAÇÃO': ['COLLABORATION MODELS', 'MODÈLES DE COLLABORATION', 'ZUSAMMENARBEITSMODELLE', 'نماذج التعاون'],
    'Transparentes': ['& Transparency', '& transparence', '& Transparenz', 'والشفافية'],
    'Os nossos honorários são definidos em função do perfil do cliente, da complexidade do mandato e das condições do mercado. Prezamos pela transparência, equilíbrio e valor real entregue — sempre com abertura para negociação.': [
      'Our fees are defined according to the client profile, the complexity of the mandate and market conditions. We value transparency, balance and real value delivered — always open to negotiation.',
      'Nos honoraires sont définis en fonction du profil du client, de la complexité du mandat et des conditions du marché. Nous privilégions la transparence, l’équilibre et la valeur réelle apportée — toujours avec une ouverture à la négociation.',
      'Unsere Honorare richten sich nach dem Profil des Mandanten, der Komplexität des Mandats und den Marktbedingungen. Wir legen Wert auf Transparenz, Ausgewogenheit und echten Mehrwert — stets verhandlungsbereit.',
      'تُحدَّد أتعابنا بحسب ملف العميل وتعقيد التكليف وظروف السوق. نحرص على الشفافية والتوازن والقيمة الحقيقية المقدّمة — مع انفتاح دائم على التفاوض.'
    ],
    'AVENÇA MENSAL': ['MONTHLY RETAINER', 'FORFAIT MENSUEL', 'MONATLICHES MANDAT', 'اتفاقية شهرية'],
    '★ RECOMENDADO': ['★ RECOMMENDED', '★ RECOMMANDÉ', '★ EMPFOHLEN', '★ موصى به'],
    'DEDICAÇÃO PARCIAL': ['PART-TIME DEDICATION', 'DÉDICATION PARTIELLE', 'TEILZEIT-BETREUUNG', 'تفرغ جزئي'],
    'ESSENCIAL': ['ESSENTIAL', 'ESSENTIEL', 'ESSENTIAL', 'الأساسية'],
    'ESTRATÉGICO': ['STRATEGIC', 'STRATÉGIQUE', 'STRATEGISCH', 'الاستراتيجية'],
    'PREMIUM': ['PREMIUM', 'PREMIUM', 'PREMIUM', 'بريميوم'],
    'Sob Consulta': ['On Request', 'Sur demande', 'Auf Anfrage', 'عند الطلب'],
    'Adaptado ao cliente e ao mercado': ['Tailored to the client and the market', 'Adapté au client et au marché', 'Angepasst an Mandant und Markt', 'مصمّم حسب العميل والسوق'],
    'Até 8h de assessoria mensal': ['Up to 8h of advisory per month', 'Jusqu’à 8 h de conseil par mois', 'Bis zu 8 Std. Beratung pro Monat', 'حتى 8 ساعات استشارة شهرياً'],
    'Revisão de contratos': ['Contract review', 'Révision de contrats', 'Vertragsprüfung', 'مراجعة العقود'],
    'Consultas urgentes incluídas': ['Urgent consultations included', 'Consultations urgentes incluses', 'Dringende Anfragen inklusive', 'الاستشارات العاجلة مشمولة'],
    'Relatório mensal de risco jurídico': ['Monthly legal risk report', 'Rapport mensuel des risques juridiques', 'Monatlicher Rechtsrisikobericht', 'تقرير شهري للمخاطر القانونية'],
    'Plano à medida — detalhes sob consulta com consultoria dedicada.': [
      'Tailor-made plan — details on request with dedicated consultancy.',
      'Plan sur mesure — détails sur demande avec un conseil dédié.',
      'Maßgeschneiderter Plan — Details auf Anfrage mit eigener Betreuung.',
      'خطة مصمّمة حسب الطلب — التفاصيل عند الاستشارة مع فريق مخصص.'
    ],
    'Presença regular na empresa': ['Regular presence at the company', 'Présence régulière dans l’entreprise', 'Regelmäßige Präsenz im Unternehmen', 'حضور منتظم في الشركة'],
    'Representação em negociações': ['Representation in negotiations', 'Représentation lors des négociations', 'Vertretung in Verhandlungen', 'التمثيل في المفاوضات'],
    'Gestão jurídica completa': ['Full legal management', 'Gestion juridique complète', 'Umfassendes Rechtsmanagement', 'إدارة قانونية متكاملة'],
    'Acesso directo e prioritário': ['Direct, priority access', 'Accès direct et prioritaire', 'Direkter, bevorzugter Zugang', 'وصول مباشر وذو أولوية'],
    'Relatórios executivos mensais': ['Monthly executive reports', 'Rapports exécutifs mensuels', 'Monatliche Management-Berichte', 'تقارير تنفيذية شهرية'],
    'Solicitar Proposta': ['Request a Proposal', 'Demander une proposition', 'Angebot anfordern', 'اطلب عرضاً'],

    // ---------- Alianças ----------
    'ALIANÇAS INTERNACIONAIS': ['INTERNATIONAL ALLIANCES', 'ALLIANCES INTERNATIONALES', 'INTERNATIONALE ALLIANZEN', 'التحالفات الدولية'],
    'Alianças em': ['Alliances across', 'Des alliances sur', 'Allianzen auf', 'تحالفات في'],
    'quatro continentes': ['four continents', 'quatre continents', 'vier Kontinenten', 'أربع قارات'],
    'A JPires mantém alianças estratégicas com parceiros na Europa, em África, na América e na Ásia.': [
      'JPires maintains strategic alliances with partners in Europe, Africa, the Americas and Asia.',
      'JPires entretient des alliances stratégiques avec des partenaires en Europe, en Afrique, en Amérique et en Asie.',
      'JPires unterhält strategische Allianzen mit Partnern in Europa, Afrika, Amerika und Asien.',
      'تحتفظ JPires بتحالفات استراتيجية مع شركاء في أوروبا وأفريقيا والأمريكتين وآسيا.'
    ],
    // Nomes usados no mapa
    'África': ['Africa', 'Afrique', 'Afrika', 'أفريقيا'],
    'Europa': ['Europe', 'Europe', 'Europa', 'أوروبا'],
    'América do Norte': ['North America', 'Amérique du Nord', 'Nordamerika', 'أمريكا الشمالية'],
    'América do Sul': ['South America', 'Amérique du Sud', 'Südamerika', 'أمريكا الجنوبية'],
    'Portugal': ['Portugal', 'Portugal', 'Portugal', 'البرتغال'],
    'Brasil': ['Brazil', 'Brésil', 'Brasilien', 'البرازيل'],
    'Estados Unidos': ['United States', 'États-Unis', 'Vereinigte Staaten', 'الولايات المتحدة'],
    'Reino Unido': ['United Kingdom', 'Royaume-Uni', 'Vereinigtes Königreich', 'المملكة المتحدة'],
    'Emirados Árabes Unidos': ['United Arab Emirates', 'Émirats arabes unis', 'Vereinigte Arabische Emirate', 'الإمارات العربية المتحدة'],
    'Alemanha': ['Germany', 'Allemagne', 'Deutschland', 'ألمانيا'],
    'Luanda (Sede)': ['Luanda (Headquarters)', 'Luanda (Siège)', 'Luanda (Hauptsitz)', 'لواندا (المقر)'],

    // ---------- Contactos ----------
    'FALE CONNOSCO': ['CONTACT US', 'CONTACTEZ-NOUS', 'KONTAKT', 'تواصل معنا'],
    'Comece com uma': ['Start with a', 'Commencez par une', 'Beginnen Sie mit einem', 'ابدأ بـ'],
    'conversa': ['conversation', 'conversation', 'Gespräch', 'محادثة'],
    'Sessão de diagnóstico inicial gratuita — 60 minutos, sem compromisso. Avaliamos como podemos ser úteis ao seu negócio.': [
      'Free initial diagnostic session — 60 minutes, no commitment. We assess how we can be useful to your business.',
      'Séance de diagnostic initiale gratuite — 60 minutes, sans engagement. Nous évaluons comment nous pouvons être utiles à votre entreprise.',
      'Kostenloses Erstgespräch zur Diagnose — 60 Minuten, unverbindlich. Wir prüfen, wie wir Ihrem Unternehmen nützlich sein können.',
      'جلسة تشخيص أولية مجانية — 60 دقيقة، دون أي التزام. نقيّم كيف يمكننا خدمة أعمالك.'
    ],
    'ENDEREÇO': ['ADDRESS', 'ADRESSE', 'ADRESSE', 'العنوان'],
    'Loanda Towers, 11º Andar, Sala 04, Luanda, Angola': [
      'Loanda Towers, 11th Floor, Room 04, Luanda, Angola',
      'Loanda Towers, 11e étage, salle 04, Luanda, Angola',
      'Loanda Towers, 11. Stock, Raum 04, Luanda, Angola',
      'لواندا تاورز، الطابق 11، الغرفة 04، لواندا، أنغولا'
    ],
    'Luanda, Angola': ['Luanda, Angola', 'Luanda, Angola', 'Luanda, Angola', 'لواندا، أنغولا'],
    'TELEFONE': ['PHONE', 'TÉLÉPHONE', 'TELEFON', 'الهاتف'],
    'Atendimento Corporativo': ['Corporate Service', 'Service entreprises', 'Unternehmensservice', 'خدمة الشركات'],
    'EMAIL': ['EMAIL', 'E-MAIL', 'E-MAIL', 'البريد الإلكتروني'],
    'Directório de Sócios': ['Partners Directory', 'Annuaire des associés', 'Partnerverzeichnis', 'دليل الشركاء'],

    // ---------- Rodapé ----------
    'JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Confidencial': [
      'JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Confidential',
      'JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Confidentiel',
      'JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Vertraulich',
      'JPires – Sociedade de Advogados, RL · Corporate Law · لواندا، أنغولا · سري'
    ],

    // ---------- Textos fixos dos modais ----------
    'JPires · Áreas de Prática': ['JPires · Practice Areas', 'JPires · Domaines d’expertise', 'JPires · Tätigkeitsbereiche', 'JPires · مجالات الممارسة'],
    'Serviços jurídicos': ['Legal services', 'Services juridiques', 'Rechtliche Leistungen', 'الخدمات القانونية'],
    'Objetivo:': ['Objective:', 'Objectif :', 'Ziel:', 'الهدف:'],
    'Solicitar assessoria jurídica': ['Request legal advice', 'Demander un conseil juridique', 'Rechtsberatung anfragen', 'اطلب استشارة قانونية'],
    'Inclui': ['Includes', 'Comprend', 'Umfasst', 'يشمل'],
    'Solicitar uma consulta': ['Request a consultation', 'Demander une consultation', 'Beratung anfragen', 'اطلب استشارة']
    // + aqui entram depois as frases longas dos modais (i18n-modais.js)
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