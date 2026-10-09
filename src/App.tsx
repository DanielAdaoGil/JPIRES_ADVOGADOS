/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Sobre } from './components/Sobre';
import { SectoresEquipa } from './components/SectoresEquipa';
import { Honorarios } from './components/Honorarios';
import { Aliancas } from './components/Aliancas';
import { Contactos } from './components/Contactos';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1F120B] text-white font-inter selection:bg-[#3BB4F2]/30 selection:text-white flex flex-col justify-between">
      {/* Barra de Navegação Fixa com Translucidez */}
      <Navbar />

      {/* Secção 1: Início (Hero) */}
      <main id="conteudo-principal" className="flex-1">
        <Hero />

        {/* Secção 2: Sobre o Escritório & Áreas de Prática */}
        <Sobre />

        {/* Secção 3: Sectores & Equipa */}
        <SectoresEquipa />

        {/* Secção 4: Honorários Transparentes */}
        <Honorarios />

        {/* Secção 4B: Alianças Internacionais */}
        <Aliancas />

        {/* Secção 4C: Contactos e Localização */}
        <Contactos />
      </main>

      {/* Rodapé Institucional */}
      <Footer />
    </div>
  );
}
