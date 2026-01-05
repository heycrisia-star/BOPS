
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-24 text-center bg-[#020617] border-t border-slate-800 relative overflow-hidden">
      {/* Glow decorativo de fondo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h3 className="text-[32px] md:text-[48px] font-[950] text-white mb-4 tracking-tighter leading-none">
          ¿Hablamos de tu <span className="text-blue-600">arquitectura?</span>
        </h3>
        <p className="text-[16px] md:text-[18px] text-slate-400 mb-12 max-w-[450px] mx-auto font-medium leading-relaxed">
          Escala tu operativa con sistemas que no fallan. Cuéntanos tu reto y nosotros diseñamos la infraestructura.
        </p>

        <div className="flex flex-col items-center gap-8">
          <button className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black text-[14px] uppercase tracking-widest hover:bg-blue-500 transition-all shadow-2xl hover:-translate-y-1 active:scale-95 shadow-blue-500/20">
            AGENDAR AUDITORÍA TÉCNICA
          </button>

          {/* Datos de Contacto Directos */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mt-4">
            <a
              href="tel:+34691708138"
              className="group flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                <span className="material-symbols-outlined text-blue-500 text-[20px]">call</span>
              </div>
              <span className="text-[18px] font-black text-slate-300 group-hover:text-blue-500 transition-colors tracking-tight">
                +34 691 708 138
              </span>
            </a>

            <a
              href="mailto:info@buildersops.xyz"
              className="group flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                <span className="material-symbols-outlined text-blue-500 text-[20px]">mail</span>
              </div>
              <span className="text-[18px] font-black text-slate-300 group-hover:text-blue-500 transition-colors tracking-tight">
                info@buildersops.xyz
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center pt-24 border-t border-slate-800 mt-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Sistemas 100% Optimizados</span>
          </div>
          <p className="text-[9px] text-slate-600 font-black uppercase tracking-[0.5em]">
            BUILDERSOPS © 2026 • TODOS LOS DERECHOS RESERVADOS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
