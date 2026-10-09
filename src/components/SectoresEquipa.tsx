/**
 * SectoresEquipa Component - Secção 3 (Sectores e Equipa)
 * JPires – Sociedade de Advogados, RL
 */

import React from 'react';
import { sectores, equipa } from '../content';

export const SectoresEquipa: React.FC = () => {
  return (
    <section id="sectores" className="w-full bg-[#1F120B] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1536px] mx-auto space-y-20 sm:space-y-28">
        
        {/* ========================================================= */}
        {/* PARTE A — SECTORES (LAYOUT DIVIDIDO)                      */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          
          {/* Painel Esquerdo: Castanho muito escuro #1F120B */}
          <div className="lg:col-span-5 bg-[#1F120B] p-8 sm:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="space-y-6">
              <span className="font-inter text-xs font-bold tracking-widest text-[#3BB4F2] uppercase block">
                SECTORES
              </span>

              <h2 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Onde <span className="text-[#3BB4F2]">actuamos</span>
              </h2>

              <p className="font-inter text-base sm:text-lg text-[#D9C3B0] leading-relaxed max-w-md font-normal">
                Conhecimento sectorial profundo — porque em Angola o contexto é determinante para a qualidade da assessoria jurídica.
              </p>
            </div>
          </div>

          {/* Painel Direito: Azul muito claro #EAF6FD com lista de 8 cartões */}
          <div className="lg:col-span-7 bg-[#EAF6FD] p-6 sm:p-10 lg:p-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {sectores.map((sector) => (
                <div
                  key={sector.numero}
                  className="group relative p-4 sm:p-5 rounded-2xl bg-white border border-[#2E1B12]/10 hover:border-[#1B8FD0] shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5 pr-2">
                    <span className="font-syne font-bold text-sm text-[#1B8FD0]">
                      {sector.numero}
                    </span>
                    <span className="font-inter font-semibold text-sm sm:text-base text-[#2E1B12] leading-tight">
                      {sector.nome}
                    </span>
                  </div>

                  {/* Linha azul-céu curta à direita que se alonga no hover */}
                  <div className="w-4 group-hover:w-8 h-1 bg-[#1B8FD0] rounded-full transition-all duration-300 ease-out flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* PARTE B — EQUIPA (id="equipa", Fundo Castanho Escuro)     */}
        {/* ========================================================= */}
        <div id="equipa" className="pt-4 scroll-mt-24">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-inter text-xs font-bold tracking-widest text-[#3BB4F2] uppercase block mb-3">
              LIDERANÇA E EQUIPA
            </span>
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              A Equipa
            </h2>
          </div>

          {/* Dois cartões grandes lado a lado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {equipa.map((membro) => (
              <div
                key={membro.nome}
                className="group p-8 sm:p-10 rounded-3xl bg-[#2E1B12] border border-white/10 hover:border-[#3BB4F2]/50 shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Espaço para fotografia com moldura arredondada / Placeholder elegante com iniciais */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-[#4A2C1B] border-2 border-[#3BB4F2]/30 group-hover:border-[#3BB4F2] shadow-inner flex items-center justify-center overflow-hidden mb-6 transition-colors duration-300">
                  {membro.foto ? (
                    <img
                      src={membro.foto}
                      alt={membro.nome}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-syne font-extrabold text-4xl sm:text-5xl text-[#3BB4F2] tracking-wider select-none">
                      {membro.iniciais}
                    </span>
                  )}
                </div>

                {/* Nome e Cargo */}
                <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#8DD6FA] transition-colors">
                  {membro.nome}
                </h3>
                <p className="font-inter text-sm sm:text-base text-[#D9C3B0] mt-2 font-medium">
                  {membro.cargo}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
