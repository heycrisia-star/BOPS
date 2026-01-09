
import React, { useState, useMemo, useRef } from 'react';

interface Task {
  id: string;
  name: string;
  minutes: number;
  frequency: number;
  daysPerWeek: number;
}

const PRESET_TASKS = [
  { id: 'sales', name: 'Ventas automatizadas', mins: 20 },
  { id: 'atc', name: 'Atención al cliente', mins: 30 },
  { id: 'budget', name: 'Presupuestos', mins: 25 },
  { id: 'billing', name: 'Facturación y cobros', mins: 20 },
  { id: 'qual', name: 'Cualificación de leads', mins: 15 },
  { id: 'onb', name: 'Onboarding de clientes', mins: 45 },
  { id: 'citas', name: 'Control de citas', mins: 15 },
  { id: 'data', name: 'Extracción de datos', mins: 50 },
  { id: 'reviews', name: 'Reseñas online', mins: 20 },
  { id: 'dash', name: 'Reportes y dashboards', mins: 40 },
  { id: 'wpp', name: 'Agente WhatsApp', mins: 45 },
  { id: 'tg', name: 'Agente Telegram', mins: 45 },
];

const LOGO_URL = 'https://res.cloudinary.com/dk7xpxrvh/image/upload/v1767147299/asasasasasa_uyedrh.jpg';

const AIArchitectAssistant: React.FC = () => {
  const [employeeCost, setEmployeeCost] = useState<number>(1800);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const formatNum = (num: number | string) => {
    return new Intl.NumberFormat('es-ES').format(Math.round(Number(num)));
  };

  const updateTask = (id: string, field: keyof Task, value: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, [field]: value } : t));
  };

  const stats = useMemo(() => {
    const fteMonthlyHours = 173.2;
    const hourlyRate = employeeCost / fteMonthlyHours;

    let totalWeeklyMins = 0;
    tasks.forEach(t => {
      totalWeeklyMins += (t.minutes * t.frequency * t.daysPerWeek);
    });

    const weeklyHours = totalWeeklyMins / 60;
    const dailyHours = weeklyHours / 5;
    const monthlyHours = weeklyHours * 4.33;
    const yearlyHours = monthlyHours * 12;

    return {
      hourlyRate: hourlyRate.toFixed(2),
      time: {
        day: dailyHours.toFixed(1),
        week: Math.round(weeklyHours),
        month: Math.round(monthlyHours),
        year: Math.round(yearlyHours)
      },
      money: {
        day: Math.round(dailyHours * hourlyRate),
        week: Math.round(weeklyHours * hourlyRate),
        month: Math.round(monthlyHours * hourlyRate),
        year: Math.round(yearlyHours * hourlyRate)
      },
      fte: (monthlyHours / fteMonthlyHours).toFixed(2),
      percent: Math.round((monthlyHours / fteMonthlyHours) * 100)
    };
  }, [tasks, employeeCost]);

  const generateAndDownload = async () => {
    setIsSubmitting(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1200;
    canvas.height = 2800;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = LOGO_URL;
    img.onload = () => {
      // Logo removed as per request
      // const logoW = 450;
      // ctx.drawImage(img, (canvas.width - logoW) / 2, 40, logoW, logoW);
      ctx.textAlign = 'center';
      ctx.fillStyle = '#0f172a';
      ctx.font = '900 80px Inter';
      ctx.fillText('AUDITORÍA DE RENTABILIDAD', canvas.width / 2, 540);
      ctx.font = '700 24px Inter';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('BUILDERSOPS • INGENIERÍA DE SISTEMAS OPERATIVOS', canvas.width / 2, 585);
      ctx.fillStyle = '#2563eb';
      ctx.beginPath(); ctx.roundRect(350, 620, 500, 60, 30); ctx.fill();
      ctx.fillStyle = '#ffffff'; ctx.font = '900 22px Inter';
      ctx.fillText(`COSTE EMPLEADO BASE: ${employeeCost}€ / MES`, canvas.width / 2, 658);
      const bX = 100, bY = 740, bW = 1000, bH = 480;
      ctx.fillStyle = '#0f172a';
      ctx.beginPath(); ctx.roundRect(bX, bY, bW, bH, 60); ctx.fill();
      ctx.fillStyle = '#3b82f6'; ctx.font = '900 32px Inter';
      ctx.fillText('CAPACIDAD OPERATIVA RECUPERADA (MENSUAL)', canvas.width / 2, bY + 100);
      ctx.fillStyle = '#ffffff'; ctx.font = '900 260px Inter';
      ctx.fillText(`${stats.fte}`, canvas.width / 2, bY + 330);
      ctx.font = 'bold 36px Inter'; ctx.fillStyle = '#64748b';
      ctx.fillText(`EQUIVALE AL ${stats.percent}% DE UN EMPLEADO AL MES`, canvas.width / 2, bY + 415);
      let listY = bY + bH + 110;
      ctx.textAlign = 'left';
      ctx.fillStyle = '#0f172a'; ctx.font = '900 38px Inter';
      ctx.fillText('ESTRATEGIA TÉCNICA DETALLADA:', 100, listY);
      listY += 80;
      const colors = ['#eff6ff', '#f0fdf4', '#fffbeb', '#fef2f2'];
      const borderColors = ['#2563eb', '#10b981', '#f59e0b', '#ef4444'];
      tasks.forEach((task, idx) => {
        const tHours = ((task.minutes * task.frequency * task.daysPerWeek * 4.33) / 60);
        const colorIdx = idx % colors.length;
        ctx.fillStyle = colors[colorIdx];
        ctx.beginPath(); ctx.roundRect(100, listY, 1000, 120, 24); ctx.fill();
        ctx.strokeStyle = borderColors[colorIdx]; ctx.lineWidth = 3; ctx.stroke();
        ctx.fillStyle = '#0f172a'; ctx.font = '900 26px Inter';
        ctx.fillText(task.name.toUpperCase(), 140, listY + 50);
        ctx.fillStyle = '#475569'; ctx.font = '700 19px Inter';
        ctx.fillText(`INPUT: ${task.minutes} min  •  ${task.frequency} veces/día  •  ${task.daysPerWeek} días/sem`, 140, listY + 90);
        ctx.textAlign = 'right';
        ctx.fillStyle = borderColors[colorIdx]; ctx.font = '900 36px Inter';
        ctx.fillText(`+${tHours.toFixed(1)} h/mes`, 1060, listY + 70);
        ctx.textAlign = 'left';
        listY += 145;
      });
      let tableY = listY + 90;
      ctx.textAlign = 'left';
      ctx.fillStyle = '#0f172a'; ctx.font = '900 38px Inter';
      ctx.fillText('RESUMEN DE AHORRO NETO:', 100, tableY);
      tableY += 90;
      const drawColorRow = (label: string, time: string, money: string, y: number, color: string, bg: string) => {
        ctx.fillStyle = bg; ctx.beginPath(); ctx.roundRect(100, y, 1000, 160, 32); ctx.fill();
        ctx.textAlign = 'left'; ctx.fillStyle = '#0f172a'; ctx.font = '900 28px Inter';
        ctx.fillText(label.toUpperCase(), 150, y + 95);
        ctx.textAlign = 'center'; ctx.fillStyle = '#0f172a'; ctx.font = '900 86px Inter';
        ctx.fillText(`${time}h`, 580, y + 105);
        ctx.textAlign = 'right'; ctx.fillStyle = color; ctx.font = '900 78px Inter';
        ctx.fillText(`${formatNum(money)}€`, 1050, y + 105);
      };
      drawColorRow('Ahorro Día', stats.time.day, stats.money.day.toString(), tableY, '#10b981', '#f0fdf4');
      drawColorRow('Ahorro Semana', stats.time.week.toString(), stats.money.week.toString(), tableY + 195, '#f59e0b', '#fffbeb');
      drawColorRow('Ahorro Mes', stats.time.month.toString(), stats.money.month.toString(), tableY + 390, '#3b82f6', '#eff6ff');
      drawColorRow('Ahorro Año', stats.time.year.toString(), stats.money.year.toString(), tableY + 585, '#8b5cf6', '#f5f3ff');
      const footerY = 2650;
      ctx.textAlign = 'center';
      ctx.fillStyle = '#94a3b8'; ctx.font = '700 24px Inter';
      ctx.fillText('Ingeniería de Sistemas de alta disponibilidad. © BuildersOps 2026', canvas.width / 2, footerY);
      ctx.fillStyle = '#2563eb'; ctx.font = '900 52px Inter';
      ctx.fillText('+34 691 708 138   •   cristiianguti@gmail.com', canvas.width / 2, footerY + 80);
      const link = document.createElement('a');
      link.download = `BuildersOps-ROI-${stats.fte}FTE-Report.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
      setIsSubmitting(false);
    };
  };

  const summaryCards = [
    { label: 'AHORRO DÍA', time: `${stats.time.day}h`, money: `${formatNum(stats.money.day)}€`, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', accent: 'bg-emerald-600' },
    { label: 'AHORRO SEMANA', time: `${stats.time.week}h`, money: `${formatNum(stats.money.week)}€`, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100', accent: 'bg-amber-600' },
    { label: 'AHORRO MES', time: `${stats.time.month}h`, money: `${formatNum(stats.money.month)}€`, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', accent: 'bg-blue-600' },
    { label: 'AHORRO AÑO', time: `${stats.time.year}h`, money: `${formatNum(stats.money.year)}€`, color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100', accent: 'bg-violet-600' },
  ];

  return (
    <section className="px-6 py-24 bg-[#020617] overflow-hidden relative border-t border-slate-800">
      <canvas ref={canvasRef} className="hidden" />
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-left">
          <span className="text-[14px] md:text-[16px] font-[900] text-blue-500 uppercase tracking-[0.15em] block mb-6">ROI OPERATIVO & INGENIERÍA</span>
          <h2 className="text-[36px] md:text-[54px] font-[950] text-white tracking-[-0.05em] leading-[1.1] max-w-2xl">Calcula tu <br /><span className="text-blue-500">Eficiencia Real.</span></h2>
        </div>

        <div className="p-6 md:p-12 rounded-[48px] bg-slate-900/50 border border-slate-800 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* INPUTS COLUMN */}
            <div className="lg:col-span-7 space-y-12">
              <div className="max-w-md">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest block mb-4">Inversión Bruta Mensual (FTE)</label>
                <div className="relative group">
                  <input
                    type="number"
                    value={employeeCost}
                    onChange={(e) => setEmployeeCost(Number(e.target.value))}
                    className="w-full h-20 pl-16 pr-8 rounded-3xl bg-slate-950 border-2 border-slate-800 font-black text-[26px] text-white focus:border-blue-600 focus:ring-4 focus:ring-blue-900/50 outline-none transition-all shadow-sm"
                  />
                  <span className="absolute left-7 top-1/2 -translate-y-1/2 text-blue-500 font-black text-[22px]">€</span>
                  <span className="absolute left-7 top-1/2 -translate-y-1/2 text-blue-500 font-black text-[22px]">€</span>
                  {/* CSS to hide number arrows (spinners) */}
                  <style>{`
                    input[type=number]::-webkit-inner-spin-button, 
                    input[type=number]::-webkit-outer-spin-button { 
                      -webkit-appearance: none; 
                      margin: 0; 
                    }
                    input[type=number] {
                        -moz-appearance: textfield;
                    }
                  `}</style>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-[11px] font-black text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">edit_square</span>
                  Introduce tus tiempos actuales (Estimación):
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PRESET_TASKS.map(preset => {
                    const activeTask = tasks.find(t => t.id === preset.id);
                    // Active if ANY field has value > 0 (or simply existence in array?) 
                    // Better: Active if minutes > 0 OR user started typing? 
                    // Let's stick to: isZero if minutes is 0. 
                    const isZero = !activeTask || (activeTask.minutes === 0);

                    // Helper to get value safely. Defaults to 0 for everything now.
                    const getValue = (field: keyof Task) => activeTask ? activeTask[field] : 0;

                    const handleChange = (field: keyof Task, val: number) => {
                      if (!activeTask) {
                        // First interaction: Create task with 0 defaults
                        const newTask: Task = {
                          id: preset.id,
                          name: preset.name,
                          minutes: field === 'minutes' ? val : 0,
                          frequency: field === 'frequency' ? val : 0, // Default 0
                          daysPerWeek: field === 'daysPerWeek' ? val : 0 // Default 0
                        };
                        setTasks(prev => [...prev, newTask]);
                      } else {
                        // Update existing
                        updateTask(preset.id, field, val);
                      }
                    };

                    return (
                      <div key={preset.id} className={`p-5 rounded-[24px] border transition-all duration-300 ${!isZero ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-500/20 ring-1 ring-blue-500/40 relative z-10 scale-[1.02]' : 'bg-slate-950 border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-700'}`}>
                        <div className="flex items-center justify-between mb-4">
                          <span className={`text-[13px] font-bold ${!isZero ? 'text-white' : 'text-slate-400'}`}>{preset.name}</span>
                          {!isZero && (
                            <span className="text-[10px] font-black text-blue-300 bg-blue-900/40 px-2 py-1 rounded-lg animate-in fade-in zoom-in border border-blue-500/30">
                              +{formatNum((getValue('minutes') * getValue('frequency') * getValue('daysPerWeek') * 4.33 / 60).toFixed(0))} h/mes
                            </span>
                          )}
                        </div>

                        <div className="flex gap-2">
                          {[
                            { label: 'MINUTOS', field: 'minutes', ph: '' },
                            { label: 'VECES/DÍA', field: 'frequency', ph: '' },
                            { label: 'DÍAS/SEM', field: 'daysPerWeek', ph: '' }
                          ].map((cfg) => (
                            <div key={cfg.field} className="flex-1">
                              <label className={`text-[8px] font-black block mb-1 text-center transition-colors ${!isZero ? 'text-blue-400' : 'text-slate-600'}`}>{cfg.label}</label>
                              <input
                                type="number"
                                placeholder={cfg.ph}
                                value={activeTask ? (activeTask[cfg.field as keyof Task] || '') : ''}
                                onChange={(e) => handleChange(cfg.field as keyof Task, Number(e.target.value))}
                                className={`w-full h-10 rounded-xl text-center font-bold text-[14px] outline-none transition-all border ${!isZero ? 'bg-blue-950/20 border-blue-500 text-blue-100 focus:bg-blue-900/40 shadow-inner' : 'bg-slate-900 border-slate-800 text-slate-500 focus:bg-slate-950 focus:text-white focus:border-blue-500'}`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RESULTS COLUMN - DARK MODE */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                {tasks.length > 0 ? (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-10 duration-700">

                    {/* Hero FTE & MONEY Card */}
                    <div className="p-10 md:p-12 rounded-[56px] bg-[#020617] text-white shadow-[0_30px_90px_-20px_rgba(2,6,23,0.8)] relative overflow-hidden flex flex-col items-center text-center border-b-[16px] border-blue-600 group ring-1 ring-white/10">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                      <p className="text-[12px] font-black text-blue-400 uppercase tracking-[0.4em] mb-8 opacity-80">Impacto Mensual Recuperado</p>

                      <div className="flex flex-col items-center gap-1 mb-8">
                        <div className="flex items-baseline justify-center">
                          <span className="text-[32px] md:text-[40px] font-black text-blue-500 mr-2">€</span>
                          <span className="text-[72px] md:text-[100px] font-[1000] leading-none tracking-tighter text-white">
                            {formatNum(stats.money.month)}
                          </span>
                        </div>
                        <span className="text-[14px] font-black text-slate-500 uppercase tracking-[0.2em]">CAPITAL MENSUAL LIBERADO</span>
                      </div>

                      <div className="w-48 h-px bg-slate-800 mb-8"></div>

                      <div className="flex items-center gap-6 mb-8">
                        <div className="text-center">
                          <p className="text-[44px] font-[1000] leading-none text-blue-400">{stats.fte}</p>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">FTEs (TIEMPO)</p>
                        </div>
                        <div className="w-px h-12 bg-slate-800"></div>
                        <div className="text-center">
                          <p className="text-[44px] font-[1000] leading-none text-emerald-400">{stats.percent}%</p>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">CAPACIDAD</p>
                        </div>
                      </div>

                      <p className="text-[14px] text-slate-400 font-bold leading-relaxed max-w-xs">
                        Al año recuperas un total de <span className="text-blue-400 font-black text-[18px]">{formatNum(stats.money.year)}€</span> netos.
                      </p>
                    </div>

                    {/* Matriz de Ahorro Real-Time */}
                    <div className="grid grid-cols-2 gap-4">
                      {summaryCards.map((card, i) => (
                        <div key={i} className={`group p-6 md:p-8 rounded-[40px] border ${card.bg.replace('bg-', 'bg-opacity-10 bg-')} ${card.border.replace('border-', 'border-opacity-20 border-')} flex flex-col justify-between shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden bg-slate-900/50 backdrop-blur-sm`}>
                          <div className={`absolute top-0 right-0 w-16 h-16 ${card.accent} opacity-[0.1] rounded-bl-full`}></div>
                          <p className={`text-[10px] font-black ${card.color} uppercase tracking-widest mb-6`}>{card.label}</p>
                          <div className="space-y-1">
                            <div className="flex items-baseline gap-1">
                              <span className="text-[28px] font-[1000] text-white leading-none">{card.time}</span>
                            </div>
                            <div className={`text-[22px] font-black ${card.color} tracking-tighter`}>{card.money}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={generateAndDownload}
                      disabled={isSubmitting}
                      className="w-full py-8 bg-blue-600 text-white rounded-[40px] font-[1000] text-[16px] uppercase tracking-widest hover:bg-blue-500 hover:scale-[1.02] transition-all shadow-[0_20px_50px_-15px_rgba(37,99,235,0.4)] flex items-center justify-center gap-4 active:scale-95 disabled:opacity-50"
                    >
                      <span className="material-symbols-outlined text-[28px]">{isSubmitting ? 'sync' : 'clinical_notes'}</span>
                      {isSubmitting ? 'DISEÑANDO...' : 'DESCARGAR AUDITORÍA COMPLETA'}
                    </button>

                    <p className="text-[11px] text-center text-slate-500 font-bold px-12 leading-relaxed italic opacity-70">
                      Informe técnico certificado de eficiencia operativa. Basado en ingeniería de sistemas de alta disponibilidad.
                    </p>
                  </div>
                ) : (
                  <div className="p-8 md:p-10 bg-slate-900/80 rounded-[40px] border border-slate-700/50 text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <span className="material-symbols-outlined text-[100px] text-blue-500">info</span>
                    </div>

                    <h3 className="text-[20px] font-[900] text-white uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-[14px]">?</span>
                      Cómo funciona el cálculo
                    </h3>

                    <div className="space-y-8 relative z-10">
                      <div className="flex gap-4">
                        <div className="w-1 min-h-full bg-blue-500/30 rounded-full"></div>
                        <div>
                          <h4 className="text-[14px] font-black text-blue-400 uppercase tracking-widest mb-2">1. Tu Coste Base</h4>
                          <p className="text-slate-400 text-[14px] leading-relaxed">
                            Introduce tu coste mensual total (Salario Bruto + Seguridad Social) en el campo superior.
                            <br /><span className="text-slate-500 text-[12px] italic mt-1 block">Ejemplo: 2.500€</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-1 min-h-full bg-emerald-500/30 rounded-full"></div>
                        <div>
                          <h4 className="text-[14px] font-black text-emerald-400 uppercase tracking-widest mb-2">2. Referencia Temporal</h4>
                          <p className="text-slate-400 text-[14px] leading-relaxed">
                            El sistema asume una jornada estándar de <strong className="text-white">40h/semana</strong> (aprox. 173h/mes).
                            Calculamos tu <strong className="text-white">precio/hora real</strong> dividiendo tu coste entre estas horas.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-1 min-h-full bg-amber-500/30 rounded-full"></div>
                        <div>
                          <h4 className="text-[14px] font-black text-amber-400 uppercase tracking-widest mb-2">3. Tu Ahorro</h4>
                          <p className="text-slate-400 text-[14px] leading-relaxed">
                            Al introducir los minutos diarios que dedicas a una tarea, multiplicamos ese tiempo recuperado por tu precio/hora.
                            <br /><span className="text-slate-300 font-bold mt-2 block">Menos tareas manuales = Más dinero recuperado.</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-800 text-center">
                      <p className="text-[12px] font-bold text-slate-500 uppercase tracking-widest animate-pulse">
                        Introduce un valor en las tarjetas para comenzar &darr;
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIArchitectAssistant;
