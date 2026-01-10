
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
        <h3 className="text-[36px] md:text-[48px] font-[950] text-slate-900 tracking-tighter leading-none">
          Operaciones con <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">autoridad</span>
        </h3>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-5xl mx-auto relative z-10">
        <div className="w-full max-w-[340px] flex-shrink-0 flex flex-col items-center">
          {/* Static ID Card */}
          <div className="relative w-full aspect-[3/4.2] rounded-[32px] overflow-hidden shadow-2xl bg-slate-200 border border-slate-300/50 group">
            {/* User Photo with Blur Effect */}
            <div className="absolute inset-0">
              <img
                src="/cristian-profile.jpg"
                alt="Cristian Gutiérrez"
                className="w-full h-full object-cover"
              />
              {/* Heavy Blur Overlay to match "difuminada" request */}
              <div className="absolute inset-0 backdrop-blur-[12px] bg-white/10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-500/50 via-transparent to-slate-200/20 mix-blend-overlay"></div>
            </div>

            {/* Scanlines/Texture effect */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 text-white">

              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="px-3 py-1.5 rounded-lg border border-white/30 bg-white/10 backdrop-blur-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  <span className="text-[9px] font-black tracking-widest uppercase">Secure Access</span>
                </div>
                <span className="material-symbols-outlined opacity-80">ecg_heart</span>
              </div>

              {/* Center visual focus (optional, maybe fingerprint or just spacer) */}
              <div className="flex-grow"></div>

              {/* Footer Info */}
              <div className="text-center md:text-left space-y-6">
                <div>
                  <h3 className="text-3xl font-[900] uppercase tracking-tighter mb-1 drop-shadow-md">Cristian<br />Gutiérrez</h3>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-90">AI Solutions Architect</p>
                </div>

                <div className="pt-6 border-t border-white/20 flex justify-between items-end opacity-90">
                  <div>
                    <span className="block text-[8px] uppercase tracking-widest mb-1 opacity-70">ID Number</span>
                    <span className="font-mono text-sm tracking-wider">BOPS-8901-X</span>
                  </div>
                  <span className="material-symbols-outlined text-4xl opacity-80">fingerprint</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-md space-y-8 p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-slate-200 shadow-sm relative">
          {/* Decor elements */}
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl"></div>

          <p className="text-[24px] md:text-[28px] text-slate-900 leading-tight font-black tracking-tight relative z-10">
            Soy <span className="text-cyan-600">Cristian Gutiérrez</span>. <br />
            Ingeniero con 15 años de trayectoria en dirección operativa.
          </p>

          <div className="w-16 h-1.5 bg-cyan-600 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

          <div className="space-y-6 text-[16px] text-slate-600 leading-relaxed font-medium relative z-10">
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
