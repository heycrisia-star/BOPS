
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative px-6 pt-40 pb-24 flex flex-col items-start text-left bg-white min-h-[70vh] justify-center overflow-hidden">
      {/* Elemento decorativo de fondo sutil */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="relative z-10 w-full max-w-5xl">
        {/* Label de Estilo Solicitado */}
        <div className="mb-8 animate-in fade-in slide-in-from-left-4 duration-700">
          <img src="/logo.png" alt="BuildersOps Logo" className="h-16 md:h-20 w-auto object-contain" />
        </div>

        {/* Headline de Estilo Solicitado */}
        <h2 className="text-[52px] md:text-[88px] font-[950] leading-[0.9] tracking-[-0.05em] text-slate-900 mb-10 max-w-4xl animate-in fade-in slide-in-from-left-6 duration-1000">
          Optimiza tu <span className="text-blue-600">Tiempo.</span><br/>
          Escala tu negocio hoy.
        </h2>

        {/* Subheadline */}
        <p className="text-slate-500 text-[18px] md:text-[24px] leading-relaxed max-w-[650px] font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          Soluciones de alta ingeniería diseñadas por expertos con más de 15 años de experiencia en dirección operativa y automatización avanzada.
        </p>
      </div>
    </section>
  );
};

export default Hero;
