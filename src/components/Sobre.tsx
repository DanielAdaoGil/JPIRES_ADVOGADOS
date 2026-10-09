/**
 * Sobre Component - Secção 2 (Sobre o Escritório e Áreas de Prática)
 * JPires – Sociedade de Advogados, RL
 */

import React from 'react';
import { valores, areas } from '../content';

export const Sobre: React.FC = () => {
  return (
    <section id="sobre" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1F120B]">
      <div className="max-w-[1536px] mx-auto space-y-16 sm:space-y-24">
        
        {/* ========================================================= */}
        {/* DOIS PAINÉIS LADO A LADO (EM MOBILE, EMPILHADOS)          */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          
          {/* PAINEL ESQUERDO: Castanho médio #4A2C1B */}
          <div className="lg:col-span-5 bg-[#4A2C1B] p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
            {/* Brilho de fundo sutil */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3BB4F2]/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="space-y-8 relative z-10">
              {/* Selo quadrado em azul-céu com "RL" em Syne bold escuro */}
              <div className="w-24 h-24 rounded-2xl bg-[#3BB4F2] flex flex-col items-center justify-center shadow-lg p-2">
                <span className="font-syne font-extrabold text-3xl text-[#1F120B] leading-none">
                  RL
                </span>
                <span className="font-inter text-[9px] font-bold text-[#1F120B] tracking-[0.2em] uppercase mt-1">
                  REGISTADA
                </span>
              </div>

              {/* Marca */}
              <div>
                <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  JPires – Sociedade de Advogados, RL
                </h3>
              </div>
            </div>

            {/* Fundo do painel: citação em itálico com linha azul-céu curta por cima */}
            <div className="pt-16 sm:pt-24 relative z-10">
              <div className="w-12 h-1 bg-[#3BB4F2] mb-4 rounded-full" />
              <blockquote className="font-inter italic text-lg sm:text-xl text-white/95 font-medium leading-relaxed">
                “Onde o direito serve o negócio.”
              </blockquote>
            </div>

          </div>

          {/* PAINEL DIREITO: Azul muito claro #EAF6FD com texto castanho escuro #2E1B12 */}
          <div className="lg:col-span-7 bg-[#EAF6FD] p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-[#2E1B12]">
            
            <div className="space-y-6">
              {/* Rótulo com linha fina azul-céu */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#1B8FD0]" />
                <span className="font-inter text-xs font-bold tracking-widest text-[#1B8FD0] uppercase">
                  SOBRE O ESCRITÓRIO
                </span>
              </div>

              {/* Título em Syne */}
              <h2 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2E1B12] tracking-tight leading-tight">
                Rigor Jurídico com{' '}
                <span className="text-[#1B8FD0]">visão de negócio</span>
              </h2>

              {/* Parágrafos institucionais */}
              <div className="space-y-4 font-inter text-sm sm:text-base text-[#2E1B12]/90 leading-relaxed font-normal">
                <p>
                  JPires – Sociedade de Advogados, RL é um escritório especializado em direito empresarial e corporativo, com actuação focada no mercado angolano e nas suas interfaces com o investimento e o negócio internacional.
                </p>
                <p>
                  A nossa abordagem combina rigor jurídico com compreensão profunda da realidade económica angolana — traduzindo complexidade legal em soluções práticas que protegem e potenciam os nossos clientes.
                </p>
                <p>
                  Servimos grupos empresariais angolanos, investidores estrangeiros e empresas em crescimento — nos sectores de Oil & Gás, Mineração, Banca, Seguros e muito mais.
                </p>
              </div>
            </div>

            {/* 4 cartões de valores (grelha 2x2, fundo castanho escuro #2E1B12) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10">
              {valores.map((valor) => (
                <div
                  key={valor.titulo}
                  className="p-5 rounded-2xl bg-[#2E1B12] border border-white/10 shadow-md hover:border-[#3BB4F2]/40 transition-all duration-200"
                >
                  <h4 className="font-syne font-bold text-sm text-[#3BB4F2] tracking-wider uppercase">
                    {valor.titulo}
                  </h4>
                  <p className="font-inter text-xs sm:text-sm text-[#D9C3B0] mt-1.5 leading-snug">
                    {valor.descricao}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* BLOCO ÁREAS DE PRÁTICA (id="areas")                       */}
        {/* ========================================================= */}
        <div id="areas" className="pt-8 sm:pt-12 scroll-mt-24">
          
          {/* Cabeçalho das Áreas */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-inter text-xs font-bold tracking-widest text-[#3BB4F2] uppercase block mb-3">
              ÁREAS DE PRÁTICA
            </span>
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              O que <span className="text-[#3BB4F2]">fazemos</span>
            </h2>
          </div>

          {/* 6 cartões em grelha 3x2 com hover e brilho azul */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {areas.map((area, index) => {
              const IconComp = area.icone;
              return (
                <div
                  key={area.id}
                  className="group relative p-8 rounded-3xl bg-[#2E1B12]/80 border border-white/10 hover:border-[#3BB4F2]/60 hover:shadow-[0_10px_35px_rgba(59,180,242,0.15)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Número e Ícone */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#4A2C1B] border border-white/10 flex items-center justify-center text-[#3BB4F2] group-hover:bg-[#3BB4F2] group-hover:text-[#1F120B] transition-colors duration-200">
                        <IconComp className="w-6 h-6" strokeWidth={2} />
                      </div>
                      <span className="font-syne font-bold text-sm text-[#D9C3B0]/60">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Título da Área */}
                    <h3 className="font-syne font-bold text-xl text-white group-hover:text-[#8DD6FA] transition-colors leading-snug">
                      {area.titulo}
                    </h3>
                  </div>

                  {/* Linha decorativa fina com brilho no hover */}
                  <div className="w-full h-1 bg-white/5 rounded-full mt-8 overflow-hidden">
                    <div className="w-8 group-hover:w-full h-full bg-[#3BB4F2] transition-all duration-500 ease-out" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
