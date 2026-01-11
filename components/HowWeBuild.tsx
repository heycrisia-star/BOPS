import React from 'react';
import SpotlightCard from './SpotlightCard';
import ScrollVelocity from './ScrollVelocity';
import ShinyText from './ShinyText';

interface HowWeBuildProps {
  onNavigateToSales: () => void;
}

const HowWeBuild: React.FC<HowWeBuildProps> = ({ onNavigateToSales }) => {
  const services = [
    {
      icon: "smart_toy",
      title: "Captación y Ventas Automáticas",
      desc: "Automatizamos todo el proceso desde la entrada del lead hasta la agenda, sin intervención manual.",
      tags: ["Integracion WhatsApp", "Respuestas IA", "Multi-idioma"],
      action: onNavigateToSales // Special action for this card
    },
    {
      icon: "account_tree",
      title: "Optimización de Procesos",
      desc: "Elimina el trabajo manual repetitivo conectando tus herramientas para que los datos fluyan solos.",
      tags: ["Facturación Auto", "Sincro CRM", "Sin Errores"]
    },
    {
      icon: "monitoring",
      title: "Análisis y Desarrollo Web con IA",
      desc: "Transformamos datos en decisiones y creamos experiencias web de alto impacto.",
      tags: ["Dashboards KPI", "Web Apps", "Scraping"]
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
    <section className="px-6 py-24 bg-transparent relative" id="method">
      {/* GRID OVERLAY REMOVED FOR CLEAN DESIGN */}
      <div className="hidden"></div>

      <div className="max-w-6xl mx-auto">
        {/* SERVICIOS */}
        <div className="mb-20 text-center overflow-hidden">
          <span className="text-[12px] md:text-[14px] font-black text-cyan-500 uppercase tracking-[0.3em] block mb-8">
            Nuestros Servicios
          </span>
          <div className="py-4">
            <h2 className="text-[36px] md:text-[54px] font-[900] text-slate-900 tracking-tight leading-[1.1] text-glow">
              Soluciones que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">Escalan</span>
            </h2>
          </div>
        </div>

        {/* SERVICES GRID WITH SPOTLIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => service.action && service.action()}
              className={`h-full p-8 rounded-[32px] border border-slate-200 bg-white hover:border-cyan-500/30 transition-all group flex flex-col shadow-lg hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${service.action ? 'cursor-pointer' : ''}`}
            >
              {/* Active Stripe Effect */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="mb-6 relative">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl text-cyan-600 group-hover:text-cyan-500 transition-colors">
                    {service.icon}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-base mb-8 flex-grow">{service.desc}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-300 mt-auto">
                <span className="text-sm font-bold text-cyan-600">Ver más</span>
                <span className="material-symbols-outlined text-cyan-600 text-lg">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>

        {/* METODOLOGÍA */}
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-24">
            <span className="text-[12px] font-black text-cyan-600 uppercase tracking-[0.3em] block mb-4">
              Metodología
            </span>
            <h3 className="text-[32px] font-[900] text-slate-900 tracking-tight leading-[1.1] mb-6">
              <ShinyText
                text="Cómo transformamos tu operativa"
                disabled={false}
                speed={1}
                delay={0.2}
                shineColor="#94a3b8"
                color="#0f172a"
                spread={150}
                direction="right"
                yoyo={true}
                className="block"
              />
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              No solo implementamos tecnología; ejecutamos un plan de transformación diseñado para que tu negocio escale sin romperse.
            </p>
            <div className="h-1 w-20 bg-cyan-500 mt-8 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-lg group-hover:border-cyan-500/50 group-hover:bg-slate-50 transition-all duration-500 relative z-10 backdrop-blur-sm">
                    <span className="text-cyan-600 font-black text-[16px] leading-none">{step.num}</span>
                  </div>
                  {/* Line connector vertically, conditional for last row if needed, but simple for now */}
                  {idx < steps.length - 2 && (
                    <div className="w-[1px] h-full bg-slate-200 group-hover:bg-cyan-500/30 transition-colors mt-4 hidden md:block"></div>
                  )}
                </div>
                <div className="pt-2">
                  <h4 className="text-[18px] font-[800] text-slate-900 mb-2 tracking-tight group-hover:text-cyan-600 transition-colors">{step.title}</h4>
                  <p className="text-[14px] text-slate-600 leading-relaxed font-medium">{step.desc}</p>
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
