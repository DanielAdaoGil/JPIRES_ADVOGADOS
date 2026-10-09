/**
 * Hero Component - Secção 1 (Início)
 * JPires – Sociedade de Advogados, RL
 */

import React from 'react';
import {
  BadgeCheck,
  ArrowUpRight,
  Scale,
  Layers,
  MapPin
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[700px] h-screen max-h-[1100px] w-full flex flex-col justify-between overflow-hidden p-3 sm:p-5 lg:p-7 pt-24 sm:pt-28 lg:pt-32"
      aria-label="Início - Corporate Law para Angola"
    >
      {/* Contentor com cantos arredondados, gradiente e brilhos discretos apenas nos cantos */}
      <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#1F120B] via-[#24150D] to-[#2E1B12] border border-white/10 shadow-2xl flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden">
        
        {/* Brilhos muito discretos em azul-céu APENAS nos cantos/bordas (sem nada ao centro) */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#3BB4F2]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#3BB4F2]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-48 -translate-y-1/2 w-80 h-80 bg-[#3BB4F2]/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Zona central fica LIMPA (sem homem, sem balança, sem grelhas no meio) */}

        {/* ========================================================= */}
        {/* CORPO CENTRAL DO HERO (Distribuído como na referência)   */}
        {/* ========================================================= */}
        <div className="relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* 1) LADO ESQUERDO: a meio da altura */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 lg:space-y-6">
            
            {/* Distintivo em pílula com contorno fino */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A2C1B]/40 border border-[#3BB4F2]/30 backdrop-blur-md shadow-sm">
              <BadgeCheck className="w-4 h-4 text-[#3BB4F2]" strokeWidth={2.2} />
              <span className="font-inter text-[11px] sm:text-xs font-semibold tracking-wider text-[#D9C3B0] uppercase">
                ESCRITÓRIO DE ADVOCACIA · ANGOLA
              </span>
            </div>

            {/* Título grande em Syne bold em 3 linhas */}
            <h1 className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] leading-[1.03] tracking-tight">
              <span className="block text-white">Corporate Law para</span>
              <span className="block text-white">Angola</span>
              <span className="block text-[#3BB4F2]">que cresce</span>
            </h1>

            {/* Linha de apoio abaixo, pequena e em tom castanho quente suave */}
            <p className="font-inter text-xs sm:text-sm md:text-base text-[#D9C3B0] tracking-wide font-normal">
              Sociedade de Advogados, RL · Luanda, Angola
            </p>
          </div>

          {/* 2) LADO DIREITO: a meio da altura */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center space-y-6">
            
            {/* Cartão de vidro fosco */}
            <div className="w-full max-w-[420px] p-6 sm:p-7 rounded-2xl bg-[#4A2C1B]/40 border border-white/15 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] text-left">
              <p className="font-inter text-sm sm:text-base text-white/95 leading-relaxed font-normal">
                Assessoria jurídica especializada em direito empresarial e corporativo — para grupos angolanos e investidores internacionais que crescem com segurança e confiança jurídica em Angola.
              </p>
            </div>

            {/* Botão pílula azul-céu por baixo do cartão */}
            <div className="w-full max-w-[420px] flex justify-start lg:justify-end">
              <a
                href="#contactos"
                className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-3 rounded-full bg-[#3BB4F2] hover:bg-[#8DD6FA] active:scale-95 text-[#1F120B] font-bold text-sm sm:text-base transition-all duration-200 shadow-xl hover:shadow-[#3BB4F2]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Marcar Sessão de Diagnóstico (ir para contactos)"
              >
                <span>Marcar Sessão de Diagnóstico</span>
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#1F120B]" strokeWidth={2.5} />
                </span>
              </a>
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* 3) FAIXA INFERIOR COM 4 INDICADORES EM LINHA              */}
        {/* ========================================================= */}
        <div className="relative z-10 w-full pt-6 sm:pt-8 border-t border-white/15 mt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Indicador 1: Scale */}
            <div className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#4A2C1B]/50 border border-[#3BB4F2]/25 flex items-center justify-center flex-shrink-0 group-hover:border-[#3BB4F2] transition-colors">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-[#3BB4F2]" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-bold text-xl sm:text-2xl text-white leading-tight">
                  Corporate
                </span>
                <span className="font-inter text-xs text-[#D9C3B0] mt-0.5 font-medium">
                  Especialização
                </span>
              </div>
            </div>

            {/* Indicador 2: Layers */}
            <div className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#4A2C1B]/50 border border-[#3BB4F2]/25 flex items-center justify-center flex-shrink-0 group-hover:border-[#3BB4F2] transition-colors">
                <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[#3BB4F2]" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-bold text-xl sm:text-2xl text-white leading-tight">
                  7+
                </span>
                <span className="font-inter text-xs text-[#D9C3B0] mt-0.5 font-medium">
                  Sectores servidos
                </span>
              </div>
            </div>

            {/* Indicador 3: MapPin */}
            <div className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#4A2C1B]/50 border border-[#3BB4F2]/25 flex items-center justify-center flex-shrink-0 group-hover:border-[#3BB4F2] transition-colors">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#3BB4F2]" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-bold text-xl sm:text-2xl text-white leading-tight">
                  Angola
                </span>
                <span className="font-inter text-xs text-[#D9C3B0] mt-0.5 font-medium">
                  Mercado principal
                </span>
              </div>
            </div>

            {/* Indicador 4: BadgeCheck */}
            <div className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#4A2C1B]/50 border border-[#3BB4F2]/25 flex items-center justify-center flex-shrink-0 group-hover:border-[#3BB4F2] transition-colors">
                <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#3BB4F2]" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-bold text-xl sm:text-2xl text-white leading-tight">
                  RL
                </span>
                <span className="font-inter text-xs text-[#D9C3B0] mt-0.5 font-medium">
                  Escritório registado
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
