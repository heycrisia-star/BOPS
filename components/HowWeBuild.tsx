
import React from 'react';

const HowWeBuild: React.FC = () => {
  const services = [
    {
      icon: "hub",
      title: "Automatización con n8n",
      desc: "Conectamos todas tus herramientas (CRM, Email, Marketing) para que trabajen solas. Adiós a las tareas repetitivas.",
      features: ["Flujos de trabajo personalizados", "Reducción de errores humanos", "Ahorro de horas semanales"]
    },
    {
      icon: "code_blocks",
      title: "Vibe Coding & Webs",
      desc: "Desarrollo web ágil y moderno. No solo creamos páginas bonitas, creamos herramientas útiles que funcionan y venden.",
      features: ["Diseño premium y rápido", "Webs enfocadas a conversión", "Sin tecnicismos innecesarios"]
    },
    {
      icon: "monitoring",
      title: "Dashboards Inteligentes",
      desc: "Todo tu negocio en una sola pantalla. Visualiza tus datos en tiempo real para tomar decisiones con seguridad.",
      features: ["Control total de KPIs", "Datos actualizados al segundo", "Visibilidad 360º del negocio"]
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Análisis de Procesos",
      desc: "Auditamos tu flujo operativo actual para detectar oportunidades estratégicas de mejora y optimización."
    },
    {
      num: "02",
      title: "Arquitectura & Propuesta",
      desc: "Diseñamos la solución tecnológica personalizada que transformará tus objetivos en sistemas escalables."
    },
    {
      num: "03",
      title: "Implementación Ágil",
      desc: "Construimos e integramos tu nueva infraestructura asegurando que cada conexión potencie a tu equipo."
    },
    {
      num: "04",
      title: "Evolución Continua",
      desc: "Velamos por la estabilidad de tus sistemas con monitorización proactiva y mejoras mensuales."
    }
  ];

  return (
    <section className="px-6 py-24 bg-[#020617] border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* SERVICIOS */}
        <div className="mb-20 text-center">
          <span className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] block mb-4">
            Nuestros Servicios
          </span>
          <h3 className="text-[36px] md:text-[54px] font-[900] text-white tracking-tight leading-[1.1]">
            Tecnología que <span className="text-blue-500">impulsa resultados</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {services.map((service, idx) => (
            <div key={idx} className="group p-8 rounded-[32px] bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-blue-500">{service.icon}</span>
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-blue-500 text-[28px]">{service.icon}</span>
                </div>

                <h4 className="text-[24px] font-[800] text-white mb-4 tracking-tight">{service.title}</h4>
                <p className="text-[15px] text-slate-400 leading-relaxed font-medium mb-8">
                  {service.desc}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                      <span className="material-symbols-outlined text-emerald-500 text-[18px]">check_circle</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* METODOLOGÍA (LO QUE TENÏA ANTES) */}
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-24">
            <span className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] block mb-4">
              Metodología
            </span>
            <h3 className="text-[32px] font-[900] text-white tracking-tight leading-[1.1] mb-6">
              Cómo transformamos <br className="hidden md:block" />tu operativa
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              No solo implementamos tecnología; ejecutamos un plan de transformación diseñado para que tu negocio escale sin romperse.
            </p>
            <div className="h-1 w-20 bg-blue-500 mt-8 rounded-full"></div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-sm group-hover:border-blue-500/50 group-hover:bg-slate-800 transition-all duration-500 relative z-10">
                    <span className="text-blue-500 font-black text-[16px] leading-none">{step.num}</span>
                  </div>
                  {/* Line connector vertically, conditional for last row if needed, but simple for now */}
                  {idx < steps.length - 2 && (
                    <div className="w-[1px] h-full bg-slate-800 group-hover:bg-blue-900/50 transition-colors mt-4 hidden md:block"></div>
                  )}
                </div>
                <div className="pt-2">
                  <h4 className="text-[18px] font-[800] text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">{step.title}</h4>
                  <p className="text-[14px] text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeBuild;
