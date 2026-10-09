/**
 * Navbar Component
 * JPires – Sociedade de Advogados, RL
 */

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { contactos } from '../content';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Áreas de Prática', href: '#areas' },
    { label: 'Sectores', href: '#sectores' },
    { label: 'Equipa', href: '#equipa' },
    { label: 'Honorários', href: '#honorarios' },
    { label: 'Contactos', href: '#contactos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1F120B]/90 backdrop-blur-md border-b border-white/10 shadow-xl py-3'
          : 'bg-transparent py-5 sm:py-6'
      }`}
      role="banner"
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Esquerda: Marca "JPires" em Syne bold branco com subtítulo */}
        <a
          href="#"
          className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3BB4F2] rounded-lg p-1"
          aria-label="JPires – Sociedade de Advogados, RL - Início"
        >
          <span className="font-syne font-extrabold text-2xl sm:text-3xl text-white tracking-tight group-hover:text-[#3BB4F2] transition-colors leading-none">
            JPires
          </span>
          <span className="font-inter text-[11px] sm:text-xs text-[#D9C3B0] tracking-wider mt-0.5 font-normal">
            Sociedade de Advogados, RL
          </span>
        </a>

        {/* Centro: Barra em pílula translúcida com os links de âncora */}
        <nav
          className="hidden xl:flex items-center gap-1 px-6 py-2 rounded-full bg-[#2E1B12]/80 border border-white/15 backdrop-blur-xl shadow-lg"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-medium text-[#D9C3B0] hover:text-white hover:bg-white/5 rounded-full transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3BB4F2]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Direita: Botão pílula em azul-céu */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${contactos.email}?subject=${encodeURIComponent(contactos.assuntoEmail)}`}
            className="group hidden sm:inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full bg-[#3BB4F2] hover:bg-[#8DD6FA] active:scale-95 text-[#1F120B] font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-[#3BB4F2]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Marcar Sessão de Diagnóstico por e-mail"
          >
            <span>Marcar Sessão de Diagnóstico</span>
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0">
              <ArrowUpRight className="w-4 h-4 text-[#1F120B]" strokeWidth={2.5} />
            </span>
          </a>

          {/* Botão Hamburger Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-full bg-[#2E1B12]/80 text-white border border-white/15 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3BB4F2]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden px-4 pt-3 pb-6 bg-[#1F120B]/95 backdrop-blur-xl border-b border-white/15 shadow-2xl animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-2 max-w-md mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-[#D9C3B0] hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10">
              <a
                href={`mailto:${contactos.email}?subject=${encodeURIComponent(contactos.assuntoEmail)}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between pl-5 pr-2 py-3 rounded-full bg-[#3BB4F2] text-[#1F120B] font-semibold text-sm shadow-md"
              >
                <span>Marcar Sessão de Diagnóstico</span>
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-[#1F120B]" strokeWidth={2.5} />
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
