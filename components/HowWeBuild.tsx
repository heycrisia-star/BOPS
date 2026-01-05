
import React from 'react';

const HowWeBuild: React.FC = () => {
  const steps = [
    { 
      num: "01", 
      title: "Análisis de Procesos", 
      desc: "Auditamos tu flujo operativo actual para detectar oportunidades estratégicas de mejora y optimización." 
    },
    { 
      num: "02", 
      title: "Preparación de Propuesta", 
      desc: "Diseñamos la arquitectura tecnológica personalizada que transformará tus objetivos en sistemas escalables." 
    },
    { 
      num: "03", 
      title: "Puesta en Marcha", 
      desc: "Implementamos tu nueva infraestructura asegurando que cada conexión potencie la fluidez de tu equipo." 
    },
    { 
      num: "04", 
      title: "Mantenimiento", 
      desc: "Velamos por la estabilidad absoluta de tus sistemas con monitorización proactiva y evolución técnica mensual." 
    },
  ];

  return (
    <section className="px-6 py-24 bg-white border-t border-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-left">
          <span className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] block mb-4">
            Metodología BuildersOps
          </span>
          <h3 className="text-[36px] md:text-[54px] font-[900] text-slate-800 tracking-tight leading-[1.1] max-w-2xl">
            Cómo transformamos <br/> tu operativa
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-8 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm group-hover:border-blue-200 group-hover:bg-white transition-all duration-500">
                  <span className="text-blue-600 font-black text-[16px] leading-none">{step.num}</span>
                </div>
              </div>
              <div className="pt-1">
                <h4 className="text-[20px] font-[800] text-slate-900 mb-3 tracking-tight">{step.title}</h4>
                <p className="text-[15px] text-slate-500 leading-relaxed font-medium">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeBuild;
