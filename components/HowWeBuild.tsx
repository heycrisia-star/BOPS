import React from 'react';
import SpotlightCard from './SpotlightCard';
import ScrollVelocity from './ScrollVelocity';
import ShinyText from './ShinyText';

const HowWeBuild: React.FC = () => {
  const services = [
    {
      icon: "smart_toy",
      title: "Automatización & IA",
      desc: "Multiplica tus ingresos con agentes que venden y atienden 24/7. Captura cada oportunidad al instante y libera a tu equipo para cerrar los tratos de mayor valor.",
      tags: ["CHATBOT WHATSAPP", "AGENTES IA 24/7", "CUALIFICA & SIGUE TUS LEADS", "ATENCIÓN AL CLIENTE"]
    },
    {
      icon: "code_blocks",
      title: "Optimización de Procesos",
      desc: "Convierte el tiempo perdido en rentabilidad. Automatizamos el trabajo manual para que tu operativa cueste menos y produzca el doble, permitiendo a tu equipo brillar.",
      tags: ["DISEÑO WEB & APPS", "AGENDAMIENTO AUTO", "PRESUPUESTOS & FACTURACIÓN", "ONBOARDING DIGITAL"]
    },
    {
      icon: "insights",
      title: "Análisis con IA",
      desc: "Domina tu mercado con certeza matemática. Detecta fugas de capital y patrones de venta ocultos en tiempo real para tomar decisiones que maximizan tu beneficio neto.",
      tags: ["DASHBOARDS KPI", "EXTRACCIÓN DATOS", "ANÁLISIS RESEÑAS", "PREDICCIÓN VENTAS"]
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
    <section className="px-6 py-24 bg-transparent border-t border-slate-800/50 backdrop-blur-sm relative" id="method">
      {/* GRID OVERLAY FOR SECTION DISTINCTIVENESS */}
      {/* GRID OVERLAY REMOVED FOR TRANSPARENCY */}
      <div className="hidden"></div>

      <div className="max-w-6xl mx-auto">
        {/* SERVICIOS */}
        <div className="mb-20 text-center overflow-hidden">
          <span className="text-[12px] md:text-[14px] font-black text-cyan-500 uppercase tracking-[0.3em] block mb-8">
            Nuestros Servicios
          </span>
          <div className="py-4">
            <h2 className="text-[36px] md:text-[54px] font-[900] text-white tracking-tight leading-[1.1] text-glow">
              Soluciones que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Escalan</span>
            </h2>
          </div>
        </div>

        {/* SERVICES GRID WITH SPOTLIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {services.map((service, idx) => (
            <SpotlightCard
              key={idx}
              className="h-full p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-500/30 transition-all group flex flex-col"
            >
              <div className="mb-6 relative">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-transparent border border-white/10 shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {service.icon}
                  </span>
                </div>
                {/* Floating visual effect element */}
                <div className="absolute -inset-2 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm mb-8 flex-grow">{service.desc}</p>

              <div className="flex flex-col gap-3 mt-auto">
                {service.tags.map((tag, i) => {
                  const colors = [
                    "bg-cyan-500/10 border-cyan-500/20 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.1)]",
                    "bg-violet-500/10 border-violet-500/20 text-violet-300 shadow-[0_0_10px_rgba(139,92,246,0.1)]",
                    "bg-emerald-500/10 border-emerald-500/20 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.1)]",
                    "bg-rose-500/10 border-rose-500/20 text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.1)]"
                  ];
                  const colorClass = colors[i % colors.length];

                  return (
                    <span key={i} className={`px-4 py-2.5 rounded-xl border text-[11px] font-black uppercase tracking-widest text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-opacity-20 ${colorClass}`}>
                      {tag}
                    </span>
                  );
                })}
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* METODOLOGÍA */}
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-24">
            <span className="text-[12px] font-black text-cyan-600 uppercase tracking-[0.3em] block mb-4">
              Metodología
            </span>
            <h3 className="text-[32px] font-[900] text-white tracking-tight leading-[1.1] mb-6">
              <ShinyText
                text="Cómo transformamos tu operativa"
                disabled={false}
                speed={1}
                delay={0.2}
                shineColor="#2b2212"
                color="#ffffff"
                spread={150}
                direction="right"
                yoyo={true}
                className="block"
              />
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              No solo implementamos tecnología; ejecutamos un plan de transformación diseñado para que tu negocio escale sin romperse.
            </p>
            <div className="h-1 w-20 bg-cyan-500 mt-8 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center shadow-sm group-hover:border-cyan-500/50 group-hover:bg-slate-800 transition-all duration-500 relative z-10 backdrop-blur-sm">
                    <span className="text-cyan-500 font-black text-[16px] leading-none">{step.num}</span>
                  </div>
                  {/* Line connector vertically, conditional for last row if needed, but simple for now */}
                  {idx < steps.length - 2 && (
                    <div className="w-[1px] h-full bg-slate-800 group-hover:bg-cyan-900/50 transition-colors mt-4 hidden md:block"></div>
                  )}
                </div>
                <div className="pt-2">
                  <h4 className="text-[18px] font-[800] text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">{step.title}</h4>
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
