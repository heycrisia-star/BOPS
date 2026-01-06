import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative px-6 pt-32 pb-32 flex flex-col items-center text-center bg-slate-950 min-h-[85vh] justify-center overflow-hidden">

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[100px] -z-10"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center pt-24 md:pt-32">

        {/* Headline Premium - Uniform Blue */}
        <h1 className="text-5xl md:text-8xl font-[900] tracking-tight text-white mb-8 animate-in fade-in zoom-in-95 duration-1000 leading-tight">
          Optimiza tu <span className="text-blue-500 text-glow">Tiempo.</span>
          <br className="hidden md:block" />
          <span className="relative inline-block mt-2">
            Escala tu Negocio.
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-600 opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 101 -0.5 198 6.99997" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
          </span>
        </h1>

        {/* Subheadline Tech */}
        <p className="text-slate-400 text-lg md:text-2xl leading-relaxed max-w-3xl font-light mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Arquitectura de sistemas de alto rendimiento diseñada por expertos con más de <span className="text-white font-medium">15 años de experiencia</span> en automatización avanzada.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 relative z-20">
          <a
            href="https://wa.me/34691708138?text=Hola,%20quiero%20agendar%20una%20auditoría%20técnica%20de%20mis%20sistemas."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-500 transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Agenda Auditoría Técnica
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </span>
            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
          </a>
        </div>

      </div>

      {/* Decorative Tech Overlay */}
      <div className="absolute bottom-10 left-10 hidden md:block opacity-30">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
          SYSTEM: ONLINE
        </div>
      </div>
    </section>
  );
};

export default Hero;
