
import React, { useRef } from 'react';
import './MagicBento.css';

interface MagicBentoProps {
  enableMagnetism?: boolean;
  enableTilt?: boolean;
  glowColor?: string;
}

const cardData = [
  {
    title: 'Potenciar Equipo',
    description: 'Automatizamos las tareas repetitivas para que tu equipo recupere su capacidad estratégica y creativa de alto valor.',
    label: 'Talento Humano',
    icon: 'groups'
  },
  {
    title: 'Optimización de Tiempo',
    description: 'Inyectamos eficiencia real en cada flujo. Recuperamos horas críticas para el crecimiento de tu negocio.',
    label: 'Eficiencia',
    icon: 'timer'
  },
  {
    title: 'Rentabilidad Máxima',
    description: 'Escala tu operación optimizando tus recursos actuales. Más beneficios con una estructura más ágil.',
    label: 'Crecimiento ROI',
    icon: 'trending_up'
  },
  {
    title: 'Libertad 24/7',
    description: 'Tu arquitectura trabaja por ti en todo momento. Un sistema robusto que garantiza la continuidad del negocio.',
    label: 'Autocontrol',
    icon: 'all_inclusive'
  }
];

const MagicBento: React.FC<MagicBentoProps> = ({ glowColor = "43, 140, 238" }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="bg-white py-24 flex flex-col items-center border-t border-slate-50">
      <div className="w-full max-w-5xl px-6 mb-20 text-left">
        <span className="text-[14px] md:text-[16px] font-[900] text-blue-600 uppercase tracking-[0.15em] block mb-6">
          Propuesta de Valor
        </span>
        <h3 className="text-slate-900 text-[52px] md:text-[88px] font-[950] tracking-[-0.05em] mb-4 leading-[0.9] max-w-4xl">
          Por qué <span className="text-blue-600">BuildersOps</span>
        </h3>
        <p className="text-slate-500 text-[18px] md:text-[20px] max-w-2xl font-medium leading-relaxed">
          Diseñamos sistemas de alta ingeniería que actúan como el motor invisible que impulsa la rentabilidad de tu empresa.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className="magic-bento-card group"
            onMouseMove={handleMouseMove}
            style={{ '--glow-color': glowColor } as React.CSSProperties}
          >
            {/* Elemento de brillo interactivo */}
            <div className="magic-bento-card__glow" aria-hidden="true"></div>
            
            {/* Top Section: Label and Icon */}
            <div className="flex justify-between items-start mb-12 relative z-10 w-full">
              <div className="magic-bento-card__label self-start">{card.label}</div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50/50 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500 shadow-sm border border-blue-100/50">
                <span className="material-symbols-outlined text-blue-600 group-hover:text-white transition-colors text-[28px]">{card.icon}</span>
              </div>
            </div>

            {/* Bottom Section: Text Content */}
            <div className="mt-auto relative z-10 flex flex-col gap-3">
              <h2 className="text-[26px] md:text-[32px] font-black text-slate-900 tracking-tight leading-tight">
                {card.title}
              </h2>
              <p className="text-[15px] md:text-[16px] text-slate-500 leading-relaxed font-medium max-w-[90%]">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MagicBento;
