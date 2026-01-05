
import React from 'react';

const Stack: React.FC = () => {
  const items = [
    { 
      title: "Lógica", 
      icon: "rebase_edit", 
      desc: "Arquitectura de flujos condicionales",
      status: "OPTIMIZED"
    },
    { 
      title: "Escala", 
      icon: "bolt", 
      desc: "Infraestructura de alto rendimiento",
      status: "STABLE"
    },
    { 
      title: "IA Agents", 
      icon: "smart_toy", 
      desc: "Despliegue de inteligencia autónoma",
      status: "ACTIVE"
    },
    { 
      title: "Ops Stack", 
      icon: "hub", 
      desc: "Integración total de ecosistemas",
      status: "SYNCED"
    },
  ];

  return (
    <section className="px-6 py-24 bg-white relative overflow-hidden">
      {/* Fondo técnico de ingeniería */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 rounded-[40px] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Indicador de Status superior */}
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.status}</span>
                </div>
                <span className="text-[10px] font-black text-slate-200">MOD-0{idx + 1}</span>
              </div>

              {/* Icono Potente */}
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                  <span className="material-symbols-outlined text-[40px] text-blue-600 group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </span>
                </div>
                {/* Glow de fondo al hacer hover */}
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
              </div>

              {/* Textos */}
              <h4 className="text-[24px] font-[950] text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                {item.desc}
              </p>

              {/* Decoración de esquina técnica */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-blue-100 text-[32px]">qr_code_2</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
