
import React from 'react';

const Mindset: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "El Aprendiz",
      desc: "Entendiendo las herramientas básicas. Flujos lineales y lógica de triggers/acciones.",
      active: true
    },
    {
      num: "02",
      title: "El Constructor",
      desc: "Conectando ecosistemas. Creación de bases de datos relacionales y eliminación de fricción manual.",
      active: false
    },
    {
      num: "03",
      title: "El Arquitecto",
      desc: "Diseño de sistemas autocorrectivos. Implementación de agentes de IA y escala masiva.",
      active: false
    }
  ];

  return (
    <section className="px-6 py-16">
      <h3 className="text-[20px] font-black text-slate-900 mb-12 tracking-tight">Mentalidad de Arquitecto</h3>
      
      <div className="relative">
        <div className="absolute left-[17px] top-4 bottom-4 w-[2px] bg-slate-100"></div>

        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex gap-6">
              <div className={`relative z-10 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all ${
                step.active ? 'bg-white border-[#2b8cee] text-[#2b8cee] scale-110 shadow-lg shadow-blue-100' : 'bg-white border-slate-200 text-slate-400'
              }`}>
                <span className="text-[12px] font-black">{step.num}</span>
              </div>
              <div>
                <h4 className={`text-[17px] font-bold mb-1 ${step.active ? 'text-slate-900' : 'text-slate-400'}`}>{step.title}</h4>
                <p className="text-[14px] text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mindset;
