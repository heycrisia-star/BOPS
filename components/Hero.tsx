import React, { useRef } from 'react';
import Cubes from './Cubes';
import VariableProximity from './VariableProximity';
const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollToCalc = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('ai-assistant');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <section className="relative px-6 pt-32 pb-32 flex flex-col items-center text-center bg-transparent min-h-[90vh] justify-center overflow-hidden">

      {/* Hero-specific subtle scrim to make text pop against the global grid */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/50 z-0"></div> */}

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center pt-12 md:pt-20">

        {/* PILL BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 animate-in fade-in slide-in-from-top-4 duration-1000 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-cyan-200 text-xs font-bold tracking-widest uppercase">Next-Gen Automation</span>
        </div>

        {/* HEADLINE */}
        <div
          ref={containerRef}
          className="relative min-h-[200px] flex flex-col justify-center items-center mb-8"
        >
          <div className="text-[42px] leading-[1.1] md:text-9xl font-[900] tracking-tighter text-white animate-in fade-in zoom-in-95 duration-1000 md:leading-[1] max-w-6xl drop-shadow-2xl text-center">
            Sistematiza tu <br />
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 inline-block min-h-[1.2em] font-[900]">
                Éxito Operativo
              </span>
            </span>
          </div>
        </div>

        {/* SUBHEADLINE */}
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl font-light mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Creamos automatizaciones con inteligencia artificial que impulsan tu negocio. <br />
          <span className="text-white font-medium">Tecnología compleja, hecha simple para&nbsp;ti.</span>
        </p>

        {/* CTA BUTTONS - MATCHING SCREENSHOT */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 relative z-20 w-full sm:w-auto">

          {/* PRIMARY CTA - CONSULTORIA */}
          <a
            href="https://wa.me/34691708138"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)] hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.7)] hover:scale-105 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">handshake</span>
            Consultoría Estratégica
          </a>

          {/* SECONDARY CTA - FORMACION */}
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)] hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.7)] hover:scale-105 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px] text-cyan-400">school</span>
            Formación IA
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
