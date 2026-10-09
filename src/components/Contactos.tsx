/**
 * Contactos Component - Secção 4 (Parte C: Contactos e Localização)
 * JPires – Sociedade de Advogados, RL
 */

import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight
} from 'lucide-react';
import { contactos } from '../content';

export const Contactos: React.FC = () => {
  return (
    <section
      id="contactos"
      className="w-full bg-[#2E1B12] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-16"
    >
      {/* Brilhos radiais em azul-céu subtis nos cantos */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3BB4F2]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3BB4F2]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto relative z-10 space-y-16">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-inter text-xs font-bold tracking-widest text-[#3BB4F2] uppercase block">
            FALE CONNOSCO
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Comece com uma <span className="text-[#3BB4F2]">conversa</span>
          </h2>
          <p className="font-inter text-base sm:text-lg text-[#D9C3B0] leading-relaxed font-normal">
            Sessão de diagnóstico inicial gratuita — 60 minutos, sem compromisso. Avaliamos como podemos ser úteis ao seu negócio.
          </p>
        </div>

        {/* 3 Cartões de Vidro Fosco */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          
          {/* 1. ENDEREÇO */}
          <div className="p-8 rounded-3xl bg-[#4A2C1B]/50 border border-white/15 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:border-[#3BB4F2]/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#3BB4F2]/15 border border-[#3BB4F2]/30 flex items-center justify-center text-[#3BB4F2] mb-6">
                <MapPin className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="font-syne font-bold text-sm text-[#D9C3B0] uppercase tracking-wider mb-2">
                ENDEREÇO
              </h3>
              <a
                href={contactos.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm sm:text-base text-white hover:text-[#3BB4F2] transition-colors leading-relaxed block"
              >
                {contactos.endereco}
              </a>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10">
              <span className="font-inter text-xs text-[#D9C3B0]/75">Luanda, Angola</span>
            </div>
          </div>

          {/* 2. TELEFONE */}
          <div className="p-8 rounded-3xl bg-[#4A2C1B]/50 border border-white/15 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:border-[#3BB4F2]/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#3BB4F2]/15 border border-[#3BB4F2]/30 flex items-center justify-center text-[#3BB4F2] mb-6">
                <Phone className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="font-syne font-bold text-sm text-[#D9C3B0] uppercase tracking-wider mb-2">
                TELEFONE
              </h3>
              <div className="space-y-1.5">
                {contactos.telefones.map((tel) => (
                  <a
                    key={tel}
                    href={`tel:${tel.replace(/\s+/g, '')}`}
                    className="font-inter text-sm sm:text-base text-white hover:text-[#3BB4F2] transition-colors block"
                  >
                    {tel}
                  </a>
                ))}
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10">
              <span className="font-inter text-xs text-[#D9C3B0]/75">Atendimento Corporativo</span>
            </div>
          </div>

          {/* 3. EMAIL */}
          <div className="p-8 rounded-3xl bg-[#4A2C1B]/50 border border-white/15 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:border-[#3BB4F2]/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#3BB4F2]/15 border border-[#3BB4F2]/30 flex items-center justify-center text-[#3BB4F2] mb-6">
                <Mail className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="font-syne font-bold text-sm text-[#D9C3B0] uppercase tracking-wider mb-2">
                EMAIL
              </h3>
              <a
                href={`mailto:${contactos.email}?subject=${encodeURIComponent(contactos.assuntoEmail)}`}
                className="font-inter text-sm sm:text-base text-white hover:text-[#3BB4F2] transition-colors break-all block"
              >
                {contactos.email}
              </a>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10">
              <span className="font-inter text-xs text-[#D9C3B0]/75">Resposta em 24h</span>
            </div>
          </div>

        </div>

        {/* Dois Botões de Ação */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          
          {/* Botão 1: Marcar Sessão de Diagnóstico */}
          <a
            href={`mailto:${contactos.email}?subject=${encodeURIComponent(contactos.assuntoEmail)}`}
            className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-3.5 rounded-full bg-[#3BB4F2] hover:bg-[#8DD6FA] active:scale-95 text-[#1F120B] font-bold text-sm sm:text-base transition-all duration-200 shadow-xl hover:shadow-[#3BB4F2]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Marcar Sessão de Diagnóstico</span>
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#1F120B]" strokeWidth={2.5} />
            </span>
          </a>

          {/* Botão 2: Ver no Google Maps */}
          <a
            href={contactos.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-transparent border-2 border-[#3BB4F2] hover:bg-[#3BB4F2]/10 active:scale-95 text-[#3BB4F2] hover:text-[#8DD6FA] font-bold text-sm sm:text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3BB4F2]"
          >
            <MapPin className="w-4 h-4 text-[#3BB4F2]" strokeWidth={2.5} />
            <span>Ver no Google Maps</span>
          </a>

        </div>

      </div>
    </section>
  );
};
