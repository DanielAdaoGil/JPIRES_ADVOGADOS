/**
 * JPires – Sociedade de Advogados, RL
 * Dados e constantes institucionais em português de Angola
 */

import {
  Building2,
  GitMerge,
  Globe,
  FileText,
  Landmark,
  Scale
} from 'lucide-react';

/**
 * Itens do Plano Estratégico definidos pelo cliente.
 * Se o array estiver vazio, a interface exibirá: "Plano à medida — detalhes sob consulta."
 */
export const estrategicoItems: string[] = [
  // 5 posições reservadas para preenchimento:
  // "Item 1",
  // "Item 2",
  // "Item 3",
  // "Item 4",
  // "Item 5"
];

export interface SectorItem {
  numero: string;
  nome: string;
}

export const sectores: SectorItem[] = [
  { numero: '01', nome: 'Oil & Gás e Energia' },
  { numero: '02', nome: 'Mineração e Recursos Naturais' },
  { numero: '03', nome: 'Banca e Serviços Financeiros' },
  { numero: '04', nome: 'Seguros e Resseguros' },
  { numero: '05', nome: 'Instituições Públicas e Estado' },
  { numero: '06', nome: 'Recursos Humanos e Laboral' },
  { numero: '07', nome: 'Segurança Privada' },
  { numero: '08', nome: 'Imobiliário e Construção' }
];

export interface AreaItem {
  id: string;
  titulo: string;
  icone: typeof Building2;
}

export const areas: AreaItem[] = [
  {
    id: 'societario',
    titulo: 'Direito Societário & Governance',
    icone: Building2
  },
  {
    id: 'fusoes',
    titulo: 'Fusões, Aquisições & Privatizações',
    icone: GitMerge
  },
  {
    id: 'investimento',
    titulo: 'Investimento Estrangeiro & JV',
    icone: Globe
  },
  {
    id: 'contratos',
    titulo: 'Contratos Comerciais & Regulação',
    icone: FileText
  },
  {
    id: 'financiamento',
    titulo: 'Financiamento & Reestruturação',
    icone: Landmark
  },
  {
    id: 'conflitos',
    titulo: 'Resolução de Conflitos',
    icone: Scale
  }
];

export interface ValorItem {
  titulo: string;
  descricao: string;
}

export const valores: ValorItem[] = [
  {
    titulo: 'RIGOR',
    descricao: 'Excelência técnica em cada mandato.'
  },
  {
    titulo: 'CONFIANÇA',
    descricao: 'Confidencialidade e integridade.'
  },
  {
    titulo: 'PRAGMATISMO',
    descricao: 'Soluções práticas e accionáveis.'
  },
  {
    titulo: 'PARCERIA',
    descricao: 'Relações de longo prazo.'
  }
];

export interface MembroEquipa {
  nome: string;
  cargo: string;
  iniciais: string;
  foto?: string;
}

export const equipa: MembroEquipa[] = [
  {
    nome: 'Dr. José Pires',
    cargo: 'CEO · Managing Partner',
    iniciais: 'JP'
  },
  {
    nome: 'Dr. Isaac Gil',
    cargo: 'Associate Partner',
    iniciais: 'IG'
  }
];

export interface PlanoItem {
  id: string;
  nome: string;
  etiqueta: string;
  destaque?: boolean;
  itens: string[];
}

export const planos: PlanoItem[] = [
  {
    id: 'essencial',
    nome: 'ESSENCIAL',
    etiqueta: 'AVENÇA MENSAL',
    destaque: false,
    itens: [
      'Até 8h de assessoria mensal',
      'Revisão de contratos',
      'Consultas urgentes incluídas',
      'Relatório mensal de risco jurídico'
    ]
  },
  {
    id: 'estrategico',
    nome: 'ESTRATÉGICO',
    etiqueta: '★ RECOMENDADO',
    destaque: true,
    itens: estrategicoItems
  },
  {
    id: 'premium',
    nome: 'PREMIUM',
    etiqueta: 'DEDICAÇÃO PARCIAL',
    destaque: false,
    itens: [
      'Presença regular na empresa',
      'Representação em negociações',
      'Gestão jurídica completa',
      'Acesso directo e prioritário',
      'Relatórios executivos mensais'
    ]
  }
];

export const contactos = {
  endereco: 'Loanda Towers, 11º Andar, Sala 04, Luanda, Angola',
  mapsUrl: 'https://maps.app.goo.gl/5nbpGcAmgWva6rXJA',
  telefones: ['+244 933 364 301', '+244 923 514 369'],
  email: 'jpires@jpires-advogados.ao',
  assuntoEmail: 'Pedido de sessão de diagnóstico'
};
