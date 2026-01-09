import React from 'react';
import Cubes from './Cubes';

const Hero: React.FC = () => {

  const handleScrollToCalc = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('ai-assistant');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative px-6 pt-32 pb-32 flex flex-col items-center text-center bg-[#020617] min-h-[90vh] justify-center overflow-hidden">

      {/* 3D CUBES BACKGROUND - WOW EFFECT */}
      {/* HERO BACKGROUND - Simple Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-950/20 to-[#020617]"></div>

      {/* GRADIENT OVERLAY FOR TEXT READABILITY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center pt-12 md:pt-20">

        {/* PILL BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-blue-200 text-xs font-bold tracking-widest uppercase">Next-Gen Automation</span>
        </div>

        {/* HEADLINE */}
        <h1 className="text-5xl md:text-8xl font-[900] tracking-tight text-white mb-8 animate-in fade-in zoom-in-95 duration-1000 leading-none">
          No busques tiempo. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 text-glow">
            Créalo.
          </span>
        </h1>

        {/* SUBHEADLINE */}
        <p className="text-slate-300 text-lg md:text-2xl leading-relaxed max-w-3xl font-light mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Transformamos negocios manuales en <span className="text-white font-medium">máquinas autónomas</span> usando IA, n8n y Vibe Coding. El futuro no espera, se programa.
        </p>

        {/* CTA BUTTONS - SOFTER APPROACH */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 relative z-20 w-full sm:w-auto">

          {/* PRIMARY CTA - AUDIT/ACTION without CALL */}
          <button
            onClick={handleScrollToCalc}
            className="w-full sm:w-auto group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Calcula tu Ahorro
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">savings</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
          </button>

          {/* SECONDARY CTA - SOCIAL PROOF */}
          <a
            href="https://wa.me/34691708138?text=Hola,%20quisiera%20más%20información%20sin%20compromiso."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-700 text-slate-300 font-bold rounded-full hover:bg-slate-800 hover:text-white hover:border-blue-500/50 transition-all flex items-center justify-center gap-2"
          >
            <span>Pedir Info por WhatsApp</span>
            <span className="material-symbols-outlined text-[18px]">chat</span>
          </a>
        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <span className="material-symbols-outlined text-white text-3xl">keyboard_arrow_down</span>
      </div>

    </section>
  );
};

export default Hero;
