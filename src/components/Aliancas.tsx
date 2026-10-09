/**
 * Aliancas Component - Secção 4 (Parte B: Alianças Internacionais)
 * JPires – Sociedade de Advogados, RL
 */

import React from 'react';

export const Aliancas: React.FC = () => {
  return (
    <section className="w-full bg-[#1F120B] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-[1536px] mx-auto space-y-12 sm:space-y-16">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-inter text-xs font-bold tracking-widest text-[#3BB4F2] uppercase block">
            ALIANÇAS INTERNACIONAIS
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Alianças em <span className="text-[#3BB4F2]">três continentes</span>
          </h2>
          <p className="font-inter text-base sm:text-lg text-[#D9C3B0] leading-relaxed font-normal">
            A JPires mantém alianças com parceiros na Europa, em África e na América.
          </p>
        </div>

        {/* Mapa-Múndi Estilizado em SVG Inline */}
        <div className="w-full max-w-5xl mx-auto bg-[#2E1B12]/80 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden relative">
          
          {/* Brilho sutil de fundo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3BB4F2]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="w-full aspect-[2/1] relative">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full drop-shadow-md select-none"
              aria-label="Mapa de alianças internacionais na Europa, África e América"
              role="img"
            >
              <defs>
                <filter id="blue-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Grelha de latitude/longitude discreta */}
              <g stroke="white" strokeOpacity="0.04" strokeWidth="1" strokeDasharray="4 6">
                <line x1="50" y1="125" x2="950" y2="125" />
                <line x1="50" y1="250" x2="950" y2="250" />
                <line x1="50" y1="375" x2="950" y2="375" />
                <line x1="250" y1="50" x2="250" y2="450" />
                <line x1="500" y1="50" x2="500" y2="450" />
                <line x1="750" y1="50" x2="750" y2="450" />
              </g>

              {/* =================================================== */}
              {/* CONTINENTES NÃO DESTACADOS: Ásia e Oceânia          */}
              {/* (Castanho Médio #4A2C1B discreto)                   */}
              {/* =================================================== */}
              
              {/* Ásia */}
              <path
                d="M 610 80 Q 720 60 850 80 Q 920 120 900 180 Q 860 240 780 250 Q 740 280 670 260 Q 620 200 610 140 Z"
                fill="#4A2C1B"
                opacity="0.45"
              />

              {/* Oceânia / Austrália */}
              <path
                d="M 780 340 Q 860 320 890 360 Q 890 410 820 420 Q 770 400 780 340 Z"
                fill="#4A2C1B"
                opacity="0.45"
              />

              {/* =================================================== */}
              {/* CONTINENTES DESTACADOS EM AZUL-CÉU (#3BB4F2)        */}
              {/* América (Norte e Sul), Europa e África              */}
              {/* =================================================== */}

              {/* América do Norte */}
              <path
                d="M 120 100 Q 220 50 340 80 Q 330 150 290 190 Q 240 230 190 220 Q 140 180 120 100 Z"
                fill="#3BB4F2"
                fillOpacity="0.85"
                filter="url(#blue-glow)"
                className="transition-all duration-300 hover:fill-opacity-100"
              />

              {/* América do Sul */}
              <path
                d="M 270 240 Q 350 250 360 310 Q 340 390 300 440 Q 260 410 250 330 Q 250 280 270 240 Z"
                fill="#3BB4F2"
                fillOpacity="0.85"
                filter="url(#blue-glow)"
                className="transition-all duration-300 hover:fill-opacity-100"
              />

              {/* Europa */}
              <path
                d="M 480 100 Q 560 80 600 110 Q 590 160 540 180 Q 490 170 470 140 Z"
                fill="#3BB4F2"
                fillOpacity="0.9"
                filter="url(#blue-glow)"
                className="transition-all duration-300 hover:fill-opacity-100"
              />

              {/* África */}
              <path
                d="M 470 190 Q 590 170 610 240 Q 610 320 550 410 Q 480 360 470 290 Q 450 230 470 190 Z"
                fill="#3BB4F2"
                fillOpacity="0.95"
                filter="url(#blue-glow)"
                className="transition-all duration-300 hover:fill-opacity-100"
              />

              {/* Linhas de Conexão Translúcidas das Alianças */}
              <path
                d="M 525 315 Q 520 220 535 150"
                stroke="#8DD6FA"
                strokeWidth="1.8"
                strokeDasharray="4 4"
                fill="none"
                opacity="0.7"
              />
              <path
                d="M 525 315 Q 400 320 310 330"
                stroke="#8DD6FA"
                strokeWidth="1.8"
                strokeDasharray="4 4"
                fill="none"
                opacity="0.7"
              />
              <path
                d="M 525 315 Q 380 200 240 160"
                stroke="#8DD6FA"
                strokeWidth="1.8"
                strokeDasharray="4 4"
                fill="none"
                opacity="0.7"
              />

              {/* =================================================== */}
              {/* MARCADOR PULSANTE SOBRE LUANDA (ANGOLA)             */}
              {/* =================================================== */}
              <g transform="translate(525, 315)">
                {/* Onda pulsante externa */}
                <circle r="16" fill="none" stroke="#3BB4F2" strokeWidth="2" opacity="0.6" className="animate-ping" />
                <circle r="10" fill="#3BB4F2" fillOpacity="0.3" />
                <circle r="5" fill="#FFFFFF" />

                {/* Etiqueta Luanda */}
                <rect x="12" y="-14" width="70" height="24" rx="12" fill="#1F120B" stroke="#3BB4F2" strokeWidth="1.5" />
                <text x="47" y="2" fill="#FFFFFF" fontSize="11" fontFamily="Syne" fontWeight="bold" textAnchor="middle">
                  Luanda
                </text>
              </g>

            </svg>
          </div>

          {/* Legenda abaixo com três pontos azuis */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 mt-4 border-t border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#3BB4F2] shadow-[0_0_8px_#3BB4F2]" />
              <span className="font-syne font-bold text-sm text-white">Europa</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#3BB4F2] shadow-[0_0_8px_#3BB4F2]" />
              <span className="font-syne font-bold text-sm text-white">África</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#3BB4F2] shadow-[0_0_8px_#3BB4F2]" />
              <span className="font-syne font-bold text-sm text-white">América</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
