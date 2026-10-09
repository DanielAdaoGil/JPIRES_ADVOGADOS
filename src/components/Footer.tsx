/**
 * Footer Component
 * JPires – Sociedade de Advogados, RL
 */

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1F120B] py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 text-center">
      <div className="max-w-[1536px] mx-auto">
        <p className="font-inter text-[11px] sm:text-xs text-[#D9C3B0]/80 tracking-[0.2em] uppercase font-medium">
          JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Confidencial
        </p>
      </div>
    </footer>
  );
};
