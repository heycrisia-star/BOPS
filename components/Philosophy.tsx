
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="px-6 py-14 bg-white">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-1 w-8 bg-[#2b8cee] rounded-full"></div>
          <span className="text-[12px] font-black text-[#2b8cee] uppercase tracking-widest">Nuestra Visión</span>
        </div>
        <h3 className="text-[32px] font-black text-slate-900 leading-tight mb-6">
          Deja la IA en Manos de Expertos
        </h3>
        <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
          No necesitas ser un maestro en inteligencia artificial para sacarle provecho. Nos dedicamos a potenciar negocios como el tuyo, ayudándote a <b>ahorrar tiempo y dinero</b>.
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="p-6 rounded-[28px] border border-slate-100 bg-slate-50/50 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[#2b8cee] text-[28px]">analytics</span>
            </div>
            <h4 className="font-black text-[18px] text-slate-900 leading-tight">Auditoría Operativa</h4>
          </div>
          <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
            Analizamos cada rincón de tu flujo de trabajo para identificar cuellos de botella y brindar soluciones medibles.
          </p>
        </div>

        <div className="p-6 rounded-[28px] border border-slate-100 bg-slate-50/50 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-emerald-600 text-[28px]">trending_up</span>
            </div>
            <h4 className="font-black text-[18px] text-slate-900 leading-tight">Impacto en Resultados</h4>
          </div>
          <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
            Implementamos soluciones que no solo automatizan, sino que reducen costes operativos y permiten una escala sin precedentes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
