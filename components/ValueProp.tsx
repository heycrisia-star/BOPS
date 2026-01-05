
import React from 'react';

const ValueProp: React.FC = () => {
  const pillars = [
    { 
      id: "OP-01",
      title: 'Liberación de Tiempo', 
      desc: 'Liquidamos la fricción operativa. Tu equipo deja de ejecutar procesos manuales para empezar a liderar la estrategia.',
      metric: "80% RECUPERADO",
      icon: "precision_manufacturing"
    },
    { 
      id: "OP-02",
      title: 'Margen de Beneficio', 
      desc: 'Eliminamos el error humano y los costes ocultos de una infraestructura ineficiente. Más rentabilidad, menos ruido.',
      metric: "ROI ACELERADO",
      icon: "account_balance_wallet"
    },
    { 
      id: "OP-03",
      title: 'Escalabilidad Pasiva', 
      desc: 'Diseñamos sistemas que crecen sin necesidad de aumentar el headcount. Tu arquitectura es tu ventaja competitiva.',
      metric: "CAPACIDAD ∞",
      icon: "dynamic_feed"
    }
  ];

  return (
    <section className="px-6 py-32 bg-slate-950 relative overflow-hidden">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-blue-600"></div>
            <span className="text-[12px] font-black text-blue-500 uppercase tracking-[0.4em]">Strategic Advantage</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {pillars.map((item, i) => (
            <div key={i} className="group relative p-10 bg-slate-900/50 border border-slate-800 hover:bg-slate-900 hover:border-blue-600/50 transition-all duration-500 overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <span className="text-[10px] font-mono text-blue-500">{item.id}</span>
              </div>

              <div className="mb-12">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500">
                  <span className="material-symbols-outlined text-white text-[32px]">{item.icon}</span>
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{item.metric}</span>
                </div>
                <h4 className="text-[26px] font-black text-white mb-4 tracking-tight leading-none">{item.title}</h4>
                <p className="text-[14px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>

              {/* Progress Detail Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
