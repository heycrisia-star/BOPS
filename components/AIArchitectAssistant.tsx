
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
];

const LOGO_URL = 'https://res.cloudinary.com/dk7xpxrvh/image/upload/v1767147299/asasasasasa_uyedrh.jpg';

const AIArchitectAssistant: React.FC = () => {
  const [employeeCost, setEmployeeCost] = useState<number>(2500);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const formatNum = (num: number | string) => {
    return new Intl.NumberFormat('es-ES').format(Math.round(Number(num)));
  };

  const addTask = (name: string, defaultMins: number = 15) => {
    if (!name.trim()) return;
    if (tasks.find(t => t.name.toLowerCase() === name.toLowerCase())) return;
    
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      name: name,
      minutes: defaultMins,
      frequency: 5,
      daysPerWeek: 5,
    };
    setTasks(prev => [...prev, newTask]);
  };

  const updateTask = (id: string, field: keyof Task, value: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, [field]: value } : t));
  };

  const removeTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
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
      const logoW = 450;
      ctx.drawImage(img, (canvas.width - logoW) / 2, 40, logoW, logoW);
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
      ctx.fillText('+34 691 708 138   •   info@buildersops.xyz', canvas.width / 2, footerY + 80);
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
    <section className="px-6 py-24 bg-white overflow-hidden relative">
      <canvas ref={canvasRef} className="hidden" />
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-left">
          <span className="text-[14px] md:text-[16px] font-[900] text-blue-600 uppercase tracking-[0.15em] block mb-6">ROI OPERATIVO & INGENIERÍA</span>
          <h2 className="text-[36px] md:text-[54px] font-[950] text-slate-800 tracking-[-0.05em] leading-[1.1] max-w-2xl">Calcula tu <br/><span className="text-blue-600">Eficiencia Real.</span></h2>
        </div>

        <div className="p-6 md:p-12 rounded-[48px] bg-slate-50 border border-slate-100 shadow-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* INPUTS COLUMN */}
            <div className="lg:col-span-7 space-y-12">
              <div className="max-w-md">
                <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest block mb-4">Inversión Bruta Mensual (FTE)</label>
                <div className="relative group">
                  <input 
                    type="number" 
                    value={employeeCost} 
                    onChange={(e) => setEmployeeCost(Number(e.target.value))} 
                    className="w-full h-20 pl-16 pr-8 rounded-3xl bg-white border-2 border-slate-200 font-black text-[26px] focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all shadow-sm" 
                  />
                  <span className="absolute left-7 top-1/2 -translate-y-1/2 text-blue-600 font-black text-[22px]">€</span>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-black text-slate-400 uppercase">Input Reactivo</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                   Selecciona tus procesos críticos
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {PRESET_TASKS.map(preset => {
                    const isActive = tasks.find(t => t.name === preset.name);
                    return (
                      <button 
                        key={preset.id} 
                        onClick={() => addTask(preset.name, preset.mins)} 
                        disabled={!!isActive} 
                        className={`px-4 py-5 rounded-2xl border-2 transition-all text-center flex flex-col items-center justify-center min-h-[100px] active:scale-95 ${isActive ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-200' : 'border-white bg-white text-slate-500 hover:border-blue-200 shadow-sm'}`}
                      >
                        <span className="text-[11px] font-[900] uppercase tracking-tight leading-tight">{preset.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4">
                {tasks.map(task => (
                  <div key={task.id} className="p-6 rounded-[32px] bg-white border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8 relative group hover:border-blue-300 transition-all">
                    <button onClick={() => removeTask(task.id)} className="absolute -top-3 -right-3 w-9 h-9 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-red-500 shadow-lg opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                    
                    <div className="flex-grow w-full">
                      <span className="text-[16px] font-black text-slate-900 block mb-2">{task.name}</span>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-tighter bg-blue-50 px-3 py-1.5 rounded-xl inline-block">
                           {task.minutes}m • {task.frequency} v/d • {task.daysPerWeek} d/s
                        </span>
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-tighter bg-emerald-50 px-3 py-1.5 rounded-xl inline-block">
                           +{formatNum((task.minutes * task.frequency * task.daysPerWeek * 4.33 / 60).toFixed(1))} h/mes
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-4 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      {[
                        { label: 'Mins', field: 'minutes' },
                        { label: 'Frec', field: 'frequency' },
                        { label: 'Días', field: 'daysPerWeek' }
                      ].map((cfg) => (
                        <div key={cfg.field} className="flex flex-col items-center">
                          <span className="text-[8px] font-black text-slate-400 uppercase mb-1.5">{cfg.label}</span>
                          <input 
                            type="number" 
                            value={(task as any)[cfg.field]} 
                            onChange={(e) => updateTask(task.id, cfg.field as any, Number(e.target.value))} 
                            className="w-14 h-10 bg-white rounded-xl text-center font-black text-[14px] border-2 border-transparent focus:border-blue-400 outline-none transition-all shadow-inner" 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RESULTS COLUMN - RE-ENGINEERED FOR COST REACTIVITY */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                {tasks.length > 0 ? (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-10 duration-700">
                    
                    {/* Hero FTE & MONEY Card */}
                    <div className="p-10 md:p-12 rounded-[56px] bg-[#0f172a] text-white shadow-[0_30px_90px_-20px_rgba(15,23,42,0.4)] relative overflow-hidden flex flex-col items-center text-center border-b-[16px] border-blue-600 group">
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
                        <div key={i} className={`group p-6 md:p-8 rounded-[40px] border-2 ${card.bg} ${card.border} flex flex-col justify-between shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden`}>
                          <div className={`absolute top-0 right-0 w-16 h-16 ${card.accent} opacity-[0.03] rounded-bl-full`}></div>
                          <p className={`text-[10px] font-black ${card.color} uppercase tracking-widest mb-6`}>{card.label}</p>
                          <div className="space-y-1">
                             <div className="flex items-baseline gap-1">
                                <span className="text-[28px] font-[1000] text-slate-900 leading-none">{card.time}</span>
                             </div>
                             <div className={`text-[22px] font-black ${card.color} tracking-tighter`}>{card.money}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={generateAndDownload} 
                      disabled={isSubmitting}
                      className="w-full py-8 bg-blue-600 text-white rounded-[40px] font-[1000] text-[16px] uppercase tracking-widest hover:bg-slate-900 hover:scale-[1.02] transition-all shadow-[0_20px_50px_-15px_rgba(37,99,235,0.4)] flex items-center justify-center gap-4 active:scale-95 disabled:opacity-50"
                    >
                      <span className="material-symbols-outlined text-[28px]">{isSubmitting ? 'sync' : 'clinical_notes'}</span>
                      {isSubmitting ? 'DISEÑANDO...' : 'DESCARGAR AUDITORÍA COMPLETA'}
                    </button>
                    
                    <p className="text-[11px] text-center text-slate-400 font-bold px-12 leading-relaxed italic opacity-70">
                      Informe técnico certificado de eficiencia operativa. Basado en ingeniería de sistemas de alta disponibilidad.
                    </p>
                  </div>
                ) : (
                  <div className="p-24 bg-white rounded-[56px] border-4 border-dashed border-slate-200 text-center flex flex-col items-center justify-center opacity-40">
                    <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-8">
                      <span className="material-symbols-outlined text-[48px] text-slate-300">engineering</span>
                    </div>
                    <p className="text-[14px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">Configura procesos para <br/>activar la ingeniería</p>
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
