
import React from 'react';
import ReflectiveCard from './ReflectiveCard';
import ScrollVelocity from './ScrollVelocity';
import LightRays from './LightRays';

const AboutMe: React.FC = () => {
  return (
    <section className="px-6 py-32 bg-transparent border-t border-slate-800/50 relative overflow-hidden backdrop-blur-sm">
      <div className="absolute inset-0 bg-transparent -z-10">
        <LightRays
          raysColor="#eddee3"
          raysSpeed={0.6}
          lightSpread={1}
          rayLength={1.9}
          fadeDistance={1.5}
          saturation={1.3}
          mouseInfluence={0.7}
          noiseAmount={0.29}
          className="custom-rays opacity-40"
        />
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="mb-16 text-center overflow-hidden">
        <h3 className="text-[36px] md:text-[48px] font-[950] text-white tracking-tighter leading-none">
          Operaciones con <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">autoridad</span>
        </h3>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-5xl mx-auto relative z-10">
        <div className="w-full max-w-[340px] flex-shrink-0 flex flex-col items-center">
          <ReflectiveCard
            blurStrength={2}
            roughness={0.7}
            displacementStrength={0}
            noiseScale={0.5}
            specularConstant={0}
            glassDistortion={0}
          />
        </div>

        <div className="max-w-md space-y-8 p-8 rounded-3xl bg-transparent backdrop-blur-sm border border-white/5 shadow-2xl">
          <p className="text-[24px] md:text-[28px] text-white leading-tight font-black tracking-tight">
            Soy <span className="text-cyan-500">Cristian Gutiérrez</span>. <br />
            Ingeniero con 15 años de trayectoria en dirección operativa.
          </p>

          <div className="w-16 h-1.5 bg-cyan-600 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>

          <div className="space-y-6 text-[16px] text-slate-300 leading-relaxed font-medium">
            <p>
              Mi visión no nace solo de la teoría. Se ha forjado durante más de <b>15 años</b> liderando sectores operativos críticos como el <b>Petróleo, Retail y Casual Dining</b>. Entiendo el lenguaje de los resultados, los procesos masivos y la eficiencia real en entornos de alta presión.
            </p>
            <p>
              Tras 3 años de especialización en el ecosistema de IA, mi propósito es fusionar esa experiencia de campo con la automatización avanzada. No solo diseño flujos; construyo infraestructuras que soportan el peso de un negocio que escala.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
