import React from 'react';
import SpotlightCard from './SpotlightCard';
import ScrollVelocity from './ScrollVelocity';
import ShinyText from './ShinyText';
import { PixelCanvas } from './ui/pixel-canvas';

interface HowWeBuildProps {
  onNavigateToSales: () => void;
  onNavigateToSupport: () => void;
  onNavigateToOperations: () => void;
}

const HowWeBuild: React.FC<HowWeBuildProps> = ({ onNavigateToSales, onNavigateToSupport, onNavigateToOperations }) => {
  const services = [
    {
      icon: "smart_toy",
      title: "Captación y Ventas Automáticas",
      desc: "Automatizamos todo el proceso desde la entrada del lead hasta la agenda, sin intervención manual.",
      tags: ["Integracion WhatsApp", "Respuestas IA", "Multi-idioma"],
      action: onNavigateToSales // Special action for this card
    },
    {
      icon: "support_agent",
      title: "Atención al Cliente y Soporte",
      desc: "Automatizamos la atención al cliente y el soporte para resolver consultas frecuentes, incidencias y dudas técnicas.",
      tags: ["Soporte 24/7", "Incidencias Auto", "Happy Clients"],
      action: onNavigateToSupport
    },
    {
      icon: "settings_suggest",
      title: "Operaciones y Control del Negocio",
      desc: "Automatizamos tareas administrativas y operativas para reducir errores, ganar visibilidad y tomar mejores decisiones.",
      tags: ["Desarrollo Web", "Dashboard KPIs", "Facturación Auto", "Sistemas IDP"],
      action: onNavigateToOperations
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
    <div id="services" className="relative w-full py-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden rounded-3xl my-8">

      <div className="max-w-6xl mx-auto relative z-10">
        {/* SERVICIOS */}
        <div className="mb-20 text-center overflow-hidden">
          <span className="text-[12px] md:text-[14px] font-black text-cyan-600 uppercase tracking-[0.3em] block mb-8 bg-white/40 w-fit mx-auto px-4 py-1 rounded-full backdrop-blur-md border border-white/20">
            Nuestros Servicios
          </span>
          <div className="py-4">
            <h2 className="text-[36px] md:text-[54px] font-[900] text-slate-900 tracking-tight leading-[1.1] text-glow drop-shadow-sm">
              Soluciones que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">Escalan</span>
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
            Diseñamos ecosistemas digitales que trabajan por ti. Desde la captación automática hasta el control operativo total.
          </p>
        </div>

        {/* SERVICES GRID WITH SPOTLIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => service.action && service.action()}
              className={`h-full p-8 rounded-[32px] border border-white/50 bg-white/40 backdrop-blur-xl hover:bg-white/60 hover:border-cyan-500/30 transition-all group flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${service.action ? 'cursor-pointer' : ''}`}
            >
              {/* PIXEL CANVAS EFFECT */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={["#bae6fd", "#7dd3fc", "#0ea5e9"]}
                  variant="default"
                  noFocus={true}
                />
              </div>

              {/* Active Stripe Effect */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>

              <div className="mb-6 relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/70 border border-white/60 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-3xl text-cyan-700 group-hover:text-cyan-600 transition-colors">
                    {service.icon}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 z-10 relative drop-shadow-sm">{service.title}</h3>
              <p className="text-slate-700 leading-relaxed text-base mb-8 flex-grow z-10 relative font-medium">{service.desc}</p>

              <div className="flex flex-wrap gap-2 mb-8 z-10 relative">
                {service.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/50 border border-white/40 text-slate-700 text-xs font-bold uppercase tracking-wide backdrop-blur-md shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* POWERFUL CTA */}
              <div className="mt-auto relative z-20 w-full">
                <button className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold uppercase tracking-wider text-sm shadow-lg group-hover:bg-cyan-600 group-hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 transform group-hover:scale-[1.02]">
                  <span>Ver Detalles</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* METODOLOGÍA */}
        <div className="flex flex-col md:flex-row gap-16 items-start p-12 rounded-[40px] bg-white/40 backdrop-blur-2xl border border-white/50 shadow-2xl mb-20">
          <div className="md:w-1/3 sticky top-24">
            <span className="text-[12px] font-black text-cyan-700 uppercase tracking-[0.3em] block mb-4">
              Metodología
            </span>
            <h3 className="text-[32px] font-[900] text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
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
            <p className="text-slate-800 text-lg leading-relaxed font-semibold drop-shadow-sm">
              No solo implementamos tecnología; ejecutamos un plan de transformación diseñado para que tu negocio escale sin romperse.
            </p>
            <div className="h-1 w-20 bg-cyan-500 mt-8 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/60 border border-white/50 flex items-center justify-center shadow-md group-hover:border-cyan-500/50 group-hover:bg-cyan-50/50 transition-all duration-500 relative z-10 backdrop-blur-md">
                    <span className="text-cyan-800 font-black text-[16px] leading-none">{step.num}</span>
                  </div>
                  {/* Line connector vertically, conditional for last row if needed, but simple for now */}
                  {idx < steps.length - 2 && (
                    <div className="w-[1px] h-full bg-slate-400/30 group-hover:bg-cyan-500/50 transition-colors mt-4 hidden md:block"></div>
                  )}
                </div>
                <div className="pt-2">
                  <h4 className="text-[18px] font-[800] text-slate-900 mb-2 tracking-tight group-hover:text-cyan-700 transition-colors drop-shadow-sm">{step.title}</h4>
                  <p className="text-[14px] text-slate-800 leading-relaxed font-semibold drop-shadow-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowWeBuild;
