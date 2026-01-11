import React, { useState, useMemo, useRef } from 'react';

const AIArchitectAssistant: React.FC = () => {
  // State for the 3 sliders
  const [teamSize, setTeamSize] = useState<number>(5);
  const [hoursLost, setHoursLost] = useState<number>(2);
  const [hourlyCost, setHourlyCost] = useState<number>(25);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Derived calculations
  const stats = useMemo(() => {
    const workingDaysPerMonth = 22; // Standard avg
    const monthlyHoursFreed = teamSize * hoursLost * workingDaysPerMonth;
    const monthlySavings = monthlyHoursFreed * hourlyCost;
    const annualSavings = monthlySavings * 12;

    return {
      monthlyHours: Math.round(monthlyHoursFreed),
      annualHours: Math.round(monthlyHoursFreed * 12),
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings)
    };
  }, [teamSize, hoursLost, hourlyCost]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section className="py-24 px-6 bg-transparent relative" id="calculator">
      <canvas ref={canvasRef} className="hidden" />

      <div className="max-w-6xl mx-auto">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN: INPUTS (Dark Card) */}
          <div className="lg:col-span-7 bg-[#0F172A] p-8 md:p-12 rounded-[32px] border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Subtle grid bg effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none"></div>

            <div className="space-y-12 relative z-10">
              {/* SLIDER 1: TEAM SIZE */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-white font-medium text-lg">Equipo administrativo</label>
                  <span className="text-cyan-400 font-bold text-2xl">{teamSize} <span className="text-slate-500 text-sm font-normal">personas</span></span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400 transition-all"
                />
                <div className="flex justify-between mt-2 text-xs text-slate-600 font-mono">
                  <span>1</span>
                  <span>50+</span>
                </div>
              </div>

              {/* SLIDER 2: HOURS LOST */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-white font-medium text-lg">Horas perdidas al día</label>
                  <span className="text-cyan-400 font-bold text-2xl">{hoursLost} <span className="text-slate-500 text-sm font-normal">horas/persona</span></span>
                </div>
                <p className="text-slate-500 text-sm mb-4">En emails, gestión de citas, respuestas repetitivas...</p>
                <input
                  type="range"
                  min="0.5"
                  max="8"
                  step="0.5"
                  value={hoursLost}
                  onChange={(e) => setHoursLost(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400 transition-all"
                />
              </div>

              {/* SLIDER 3: HOURLY COST */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-white font-medium text-lg">Coste promedio por hora</label>
                  <span className="text-cyan-400 font-bold text-2xl">{hourlyCost}€</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-violet-500 hover:accent-violet-400 transition-all"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: RESULTS (Dark Card) */}
          <div className="lg:col-span-5 sticky top-8">
            <div className="bg-[#0B1221] p-10 rounded-[32px] border border-slate-800 shadow-[0_0_40px_rgba(6,182,212,0.1)] flex flex-col justify-center relative overflow-hidden h-full">
              {/* Glow effects */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px]"></div>

              <div className="text-center mb-10 relative z-10">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Ahorro Potencial Anual</span>
                <h2 className="text-[64px] font-[900] text-white leading-none tracking-tight">
                  {formatCurrency(stats.annualSavings).replace('€', '').trim()} <span className="text-3xl text-slate-500">€</span>
                </h2>
              </div>

              <div className="flex justify-between items-center border-b border-slate-800 pb-8 mb-8 relative z-10">
                <span className="text-slate-400 text-lg">Ahorro Mensual</span>
                <span className="text-3xl font-[900] text-cyan-400">{formatCurrency(stats.monthlySavings)}</span>
              </div>

              {/* Info Box */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 mb-10 flex gap-3 text-sm text-cyan-100 relative z-10">
                <span className="material-symbols-outlined text-cyan-500 text-xl">info</span>
                <p>
                  Esto equivale a <span className="font-bold text-white">{stats.monthlyHours} horas</span> de trabajo liberadas cada mes.
                </p>
              </div>

              <button className="w-full py-4 bg-white hover:bg-slate-200 text-slate-900 rounded-xl font-[900] text-lg transition-all shadow-lg active:scale-95">
                Recuperar este dinero ahora
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIArchitectAssistant;
