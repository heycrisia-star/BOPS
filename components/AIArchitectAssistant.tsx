import React, { useState, useMemo, useRef } from 'react';

const AIArchitectAssistant: React.FC = () => {
  // State for the 3 sliders
  const [teamSize, setTeamSize] = useState<number>(5);
  const [hoursLost, setHoursLost] = useState<number>(2);
  const [monthlyCost, setMonthlyCost] = useState<number>(3600); // Changed from hourlyCost
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Derived calculations
  const stats = useMemo(() => {
    const workingDaysPerMonth = 22; // Standard avg
    const dailyWorkHours = 8; // Standard 40h week / 5 days

    // Hours freed calculation remains the same (physical hours lost)
    const monthlyHoursFreed = teamSize * hoursLost * workingDaysPerMonth;

    // Savings calculation based on Monthly Cost (Coste Empresa)
    // Formula: (Hours Lost / Daily Hours) * Monthly Cost * Team Size
    // This represents the % of the salary wasted on lost time.
    const productivityLostPercent = hoursLost / dailyWorkHours;
    const monthlySavings = teamSize * monthlyCost * productivityLostPercent;

    const annualSavings = monthlySavings * 12;

    return {
      monthlyHours: Math.round(monthlyHoursFreed),
      annualHours: Math.round(monthlyHoursFreed * 12),
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings)
    };
  }, [teamSize, hoursLost, monthlyCost]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
  };

  const formatNum = (val: number) => {
    return new Intl.NumberFormat('es-ES').format(val);
  };

  return (
    <section className="py-24 px-6 bg-transparent relative" id="calculator">
      <canvas ref={canvasRef} className="hidden" />

      <div className="max-w-6xl mx-auto">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN: INPUTS (Light Card) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[32px] border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">

            <div className="space-y-12 relative z-10">
              {/* SLIDER 1: TEAM SIZE */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-slate-900 font-bold text-lg">Equipo administrativo</label>
                  <span className="text-cyan-600 font-black text-3xl">{teamSize} <span className="text-slate-400 text-sm font-bold uppercase">personas</span></span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-cyan-600 hover:accent-cyan-500 transition-all"
                />
                <div className="flex justify-between mt-2 text-xs text-slate-400 font-bold">
                  <span>1</span>
                  <span>50+</span>
                </div>
              </div>

              {/* SLIDER 2: HOURS LOST */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-slate-900 font-bold text-lg">Horas perdidas al día</label>
                  <span className="text-cyan-600 font-black text-3xl">{hoursLost} <span className="text-slate-400 text-sm font-bold uppercase">h/persona</span></span>
                </div>
                <p className="text-slate-500 text-sm mb-4 font-medium">En emails, gestión de citas, respuestas repetitivas...</p>
                <input
                  type="range"
                  min="0.5"
                  max="6" // Capped at 6h because losing 8h is unrealistic/scary
                  step="0.5"
                  value={hoursLost}
                  onChange={(e) => setHoursLost(Number(e.target.value))}
                  className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-cyan-600 hover:accent-cyan-500 transition-all"
                />
              </div>

              {/* SLIDER 3: MONTHLY COST (CHANGED) */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-slate-900 font-bold text-lg">Coste medio de empresa (€/mes)</label>
                  <span className="text-cyan-600 font-black text-3xl">{formatNum(monthlyCost)}€</span>
                </div>
                <p className="text-slate-500 text-sm mb-4 font-medium">Euros brutos + coste de seguridad social</p>
                <input
                  type="range"
                  min="1500"
                  max="8000"
                  step="100"
                  value={monthlyCost}
                  onChange={(e) => setMonthlyCost(Number(e.target.value))}
                  className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-cyan-600 hover:accent-cyan-500 transition-all"
                />
                <div className="flex justify-between mt-2 text-xs text-slate-400 font-bold">
                  <span>1.500€</span>
                  <span>8.000€+</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: RESULTS (Light Card - Hierarchical) */}
          <div className="lg:col-span-5 sticky top-8">
            <div className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-2xl shadow-blue-900/5 flex flex-col justify-center relative overflow-hidden h-full group">
              {/* Subtle Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white -z-10"></div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-100/50 rounded-full blur-3xl group-hover:bg-cyan-100/80 transition-colors duration-700"></div>

              {/* ANNUAL SECTION (HERO) */}
              <div className="mb-12 relative z-10">
                <span className="text-xs font-black text-cyan-600 uppercase tracking-[0.2em] mb-6 block border-b border-slate-100 pb-4">
                  IMPACTO ANUAL ESTIMADO
                </span>

                {/* Money */}
                <div className="mb-6">
                  <h2 className="text-[64px] font-[1000] text-slate-900 leading-none tracking-tighter mb-1">
                    {formatCurrency(stats.annualSavings)}
                  </h2>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-widest pl-1">Ahorro en Costes</p>
                </div>

                {/* Hours */}
                <div>
                  <h2 className="text-[64px] font-[1000] text-cyan-600 leading-none tracking-tighter mb-1">
                    {formatNum(stats.annualHours)} h
                  </h2>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-widest pl-1">Tiempo Recuperado</p>
                </div>
              </div>

              {/* MONTHLY SECTION (SMALLER) */}
              <div className="flex gap-8 border-t border-slate-100 pt-8 mb-10 relative z-10">
                <div>
                  <p className="text-2xl font-[900] text-slate-700">{formatCurrency(stats.monthlySavings)}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Ahorro Mensual</p>
                </div>
                <div className="w-px bg-slate-100"></div>
                <div>
                  <p className="text-2xl font-[900] text-cyan-600">{formatNum(stats.monthlyHours)} h</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Horas Mensuales</p>
                </div>
              </div>

              <button className="w-full py-5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-[900] text-lg uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 group/btn">
                <span>Recuperar este dinero</span>
                <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIArchitectAssistant;
