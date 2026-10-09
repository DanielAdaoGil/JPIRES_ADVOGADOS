/**
 * Honorarios Component - Secção 4 (Parte A: Honorários)
 * JPires – Sociedade de Advogados, RL
 */

import React from 'react';
import { Check } from 'lucide-react';
import { planos, estrategicoItems } from '../content';

export const Honorarios: React.FC = () => {
  return (
    <section id="honorarios" className="w-full bg-[#EAF6FD] text-[#2E1B12] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-[1536px] mx-auto space-y-16 sm:space-y-20">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-inter text-xs font-bold tracking-widest text-[#1B8FD0] uppercase block">
            MODELOS DE COLABORAÇÃO
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2E1B12] tracking-tight">
            Honorários <span className="text-[#1B8FD0]">Transparentes</span>
          </h2>
          <p className="font-inter text-sm sm:text-base text-[#2E1B12]/85 leading-relaxed pt-2 font-normal">
            Os nossos honorários são definidos em função do perfil do cliente, da complexidade do mandato e das condições do mercado. Prezamos pela transparência, equilíbrio e valor real entregue — sempre com abertura para negociação.
          </p>
        </div>

        {/* 3 Cartões de Planos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch max-w-6xl mx-auto">
          {planos.map((plano) => {
            const isEstrategico = plano.id === 'estrategico';

            return (
              <div
                key={plano.id}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  isEstrategico
                    ? 'bg-[#2E1B12] text-white border-2 border-[#3BB4F2] shadow-[0_20px_50px_rgba(59,180,242,0.25)] lg:-translate-y-4 z-10'
                    : 'bg-white text-[#2E1B12] border border-[#2E1B12]/10 shadow-lg'
                }`}
              >
                <div>
                  {/* Etiqueta */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-inter text-[11px] font-bold tracking-wider px-3.5 py-1 rounded-full uppercase ${
                        isEstrategico
                          ? 'bg-[#3BB4F2] text-[#1F120B]'
                          : 'bg-[#EAF6FD] text-[#1B8FD0]'
                      }`}
                    >
                      {plano.etiqueta}
                    </span>
                  </div>

                  {/* Nome do Plano */}
                  <h3
                    className={`font-syne font-extrabold text-2xl tracking-tight mb-4 ${
                      isEstrategico ? 'text-white' : 'text-[#2E1B12]'
                    }`}
                  >
                    {plano.nome}
                  </h3>

                  {/* Preço em Destaque */}
                  <div className="py-4 border-y border-current/10 mb-6">
                    <div
                      className={`font-syne font-extrabold text-2xl sm:text-3xl ${
                        isEstrategico ? 'text-[#3BB4F2]' : 'text-[#1B8FD0]'
                      }`}
                    >
                      Sob Consulta
                    </div>
                    <div
                      className={`font-inter text-xs mt-1 ${
                        isEstrategico ? 'text-[#D9C3B0]' : 'text-[#2E1B12]/70'
                      }`}
                    >
                      Adaptado ao cliente e ao mercado
                    </div>
                  </div>

                  {/* Lista de Itens */}
                  <ul className="space-y-3.5 mb-8">
                    {isEstrategico ? (
                      estrategicoItems.length > 0 ? (
                        estrategicoItems.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-[#D9C3B0]">
                            <Check className="w-4 h-4 text-[#3BB4F2] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span>{item}</span>
                          </li>
                        ))
                      ) : (
                        <li className="flex items-start gap-3 text-sm text-[#D9C3B0] italic">
                          <Check className="w-4 h-4 text-[#3BB4F2] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span>Plano à medida — detalhes sob consulta.</span>
                        </li>
                      )
                    ) : (
                      plano.itens.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[#2E1B12]/90">
                          <Check className="w-4 h-4 text-[#1B8FD0] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span>{item}</span>
                        </li>
                      ))
                    )}
                  </ul>
                </div>

                {/* Botão de Contacto do Plano */}
                <div className="pt-4 border-t border-current/10">
                  <a
                    href="#contactos"
                    className={`w-full py-3 rounded-full font-inter font-semibold text-xs tracking-wider uppercase text-center block transition-all ${
                      isEstrategico
                        ? 'bg-[#3BB4F2] hover:bg-[#8DD6FA] text-[#1F120B]'
                        : 'bg-[#2E1B12] hover:bg-[#4A2C1B] text-white'
                    }`}
                  >
                    Consultar Condições
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Nota por baixo, centrada e pequena */}
        <div className="text-center">
          <p className="font-inter text-xs sm:text-sm text-[#2E1B12]/75 max-w-2xl mx-auto font-medium">
            Sessão de diagnóstico inicial gratuita incluída · Confidencialidade garantida · Honorários negociados em função do cliente e do mercado
          </p>
        </div>

      </div>
    </section>
  );
};
