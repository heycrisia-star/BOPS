

import React, { useState, useRef, useEffect, useMemo } from 'react';
import jsPDF from 'jspdf';
import { supabase } from '../lib/supabase';
import ScrollVelocity from './ScrollVelocity';

interface Task {
  id: string;
  name: string;
  minutes: number;
  frequency: number;
  daysPerWeek: number;
}

const TASKS_SALES = [
  { id: 'sales', name: 'Prospección y Ventas', mins: 20 },
  { id: 'qual', name: 'Cualificación de leads', mins: 15 },
  { id: 'onb', name: 'Onboarding de clientes', mins: 45 },
  { id: 'citas', name: 'Agendamiento de citas', mins: 15 },
];

const TASKS_OPS = [
  { id: 'atc', name: 'Atención al cliente', mins: 30 },
  { id: 'billing', name: 'Facturación y cobros', mins: 20 },
  { id: 'budget', name: 'Presupuestos', mins: 25 },
  { id: 'reviews', name: 'Gestión de Reseñas', mins: 20 },
];

const TASKS_ENG = [
  { id: 'web', name: 'Diseño y Mant. Web', mins: 40 },
  { id: 'dash', name: 'Diseño de Dashboards', mins: 40 },
  { id: 'data', name: 'Extracción de datos', mins: 50 },
  { id: 'wpp', name: 'Agentes IA (Wpp/Tg)', mins: 45 },
];

// Combine for helper lookups if needed, or just iterate groups
const ALL_TASKS = [...TASKS_SALES, ...TASKS_OPS, ...TASKS_ENG];

const LOGO_URL = 'https://res.cloudinary.com/dk7xpxrvh/image/upload/v1767147299/asasasasasa_uyedrh.jpg';

const AIArchitectAssistant: React.FC = () => {
  const [employeeCost, setEmployeeCost] = useState<number>(1800);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [activeTab, setActiveTab] = useState('investment');
  const [openSection, setOpenSection] = useState<string | null>('team');
  const [isSaving, setIsSaving] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]); // Default all closed

  const toggleGroup = (title: string) => {
    setExpandedGroups(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

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

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSaving(true);

    // Extract only the names of active tasks (improvements)
    const selectedImprovements = tasks
      .filter(t => t.minutes > 0)
      .map(t => t.name);

    // Save strictly email + improvements array
    await supabase.from('calculator_leads').insert({
      email,
      improvements: selectedImprovements
    });

    setShowEmailModal(false);
    setIsSaving(false);
    setIsUnlocked(true);
    generateAndDownload(true);
  };

  const generateAndDownload = async (bypassCheck = false) => {
    if (!bypassCheck && !email) {
      setShowEmailModal(true);
      return;
    }

    setIsSubmitting(true);

    // PDF Logic restored
    const canvas = canvasRef.current;
    if (!canvas) {
      setIsSubmitting(false);
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setIsSubmitting(false);
      return;
    }

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

      // Use jsPDF for better quality than simple canvas image if desired, but code used link.download from canvas.
      // Replacing commented block with active code.
      // Wait, the original code used link.href = canvas.toDataURL. That doesn't use jsPDF.
      // Why did we install jsPDF? 
      // User asked to fix "no se esta descargando". The alert said "PDF generator is being updated".
      // Previous code used `canvas.toDataURL` which is just an image.
      // Maybe I should actually implement jsPDF if I imported it?
      // Or just enable the canvas download? 
      // The user issue is likely just that the code was commented out. 
      // I will sticking to restoring the code first (which downloads a .png).
      // However, the file is named `AIArchitectAssistant.tsx` and imports `jsPDF`.
      // Let's use `canvas.toDataURL` as it was there, but maybe the intention was to use jsPDF.
      // I'll stick to restoring the commented code exactly as it's the safest "fix" for "it's not downloading".
      // But wait, if I restore it, I need to remove the `*/` at the end.

      const link = document.createElement('a');
      link.download = `BuildersOps-ROI-${stats.fte}FTE-Report.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
      setIsSubmitting(false);
    };
    setIsSubmitting(false);
  };

  const summaryCards = [
    { label: 'AHORRO DÍA', time: `${stats.time.day}h`, money: `${formatNum(stats.money.day)}€`, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', accent: 'bg-emerald-600' },
    { label: 'AHORRO SEMANA', time: `${stats.time.week}h`, money: `${formatNum(stats.money.week)}€`, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100', accent: 'bg-amber-600' },
    { label: 'AHORRO MES', time: `${stats.time.month}h`, money: `${formatNum(stats.money.month)}€`, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', accent: 'bg-blue-600' },
    { label: 'AHORRO AÑO', time: `${stats.time.year}h`, money: `${formatNum(stats.money.year)}€`, color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100', accent: 'bg-violet-600' },
  ];

  return (
    <section className="py-24 px-6 relative bg-transparent">
      <canvas ref={canvasRef} className="hidden" />
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-left overflow-hidden">
          <span className="text-[12px] md:text-[14px] font-black text-cyan-500 uppercase tracking-[0.3em] block mb-6">ROI OPERATIVO & INGENIERÍA</span>
          <div className="mb-16 text-center overflow-hidden">
            <h3 className="text-[36px] md:text-[48px] font-[950] text-white tracking-tighter leading-none inline-block">
              Descubre tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Potencial de Ahorro</span>
            </h3>
          </div>
        </div>

        <div className="p-0 md:p-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* INPUTS COLUMN - ACCORDION (3 SECTIONS) */}
            <div className="lg:col-span-7 flex flex-col gap-6">

              {/* ACCORDION 1: ESTRUCTURA DEL EQUIPO */}
              <div className="border border-white/10 rounded-3xl bg-black/20 backdrop-blur-md overflow-hidden hover:border-cyan-500/30 transition-colors">
                <button
                  onClick={() => setOpenSection(openSection === 'team' ? null : 'team')}
                  className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                      <span className="material-symbols-outlined text-3xl">groups</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-[800] text-white uppercase tracking-tight text-left">Estructura del Equipo</h3>
                  </div>
                  <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${openSection === 'team' ? 'bg-cyan-500 text-black rotate-180' : 'text-slate-400'}`}>
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </button>
                <div className={`transition-[max-height] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${openSection === 'team' ? 'max-h-[300px]' : 'max-h-0'}`}>
                  <div className="p-8 pt-2">
                    <label className="text-[11px] font-[900] text-slate-400 uppercase tracking-[0.2em] block mb-4">Coste Operativo Mensual (Equipos)</label>
                    <div className="relative group">
                      <input
                        type="number"
                        value={employeeCost}
                        onChange={(e) => setEmployeeCost(Number(e.target.value))}
                        className="w-full bg-transparent border-b-2 border-slate-700/50 px-0 py-4 pr-24 text-white focus:outline-none focus:border-cyan-500 transition-all font-mono text-5xl font-bold tracking-tighter"
                        placeholder="0"
                      />
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-600 font-mono text-xl">€/mes</span>
                    </div>
                    <p className="text-slate-500 text-sm mt-4 font-medium leading-relaxed">Coste total mensual del equipo dedicado a estas tareas (Salarios + SS + Tools).</p>
                  </div>
                </div>
              </div>

              {/* SECTION 2: GESTIÓN DEL TIEMPO (ALWAYS VISIBLE) */}
              <div className="border border-white/10 rounded-3xl bg-black/20 backdrop-blur-md overflow-hidden relative">
                <div className="p-6 border-b border-white/5">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                      <span className="material-symbols-outlined text-3xl">schedule</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-[800] text-white uppercase tracking-tight text-left">Gestión del Tiempo</h3>
                  </div>
                </div>

                <div className="w-full">
                  <div className="p-8 pt-6">
                    <p className="text-slate-400 mb-6">Configura las horas dedicadas por tarea en los bloques inferiores.</p>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-8">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold uppercase text-slate-400">Total Horas/Semana</span>
                        <span className="font-mono text-cyan-400 font-bold text-xl">{stats.time.week}h</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-cyan-500 h-full rounded-full" style={{ width: `${Math.min(stats.time.week / 40 * 100, 100)}%` }}></div>
                      </div>
                    </div>

                    {/* TASKS LIST MOVED INSIDE ACCORDION */}
                    <div className="space-y-8">
                      {[
                        { title: 'VENTAS & EXPANSIÓN', items: TASKS_SALES, color: 'text-blue-400', border: 'border-blue-400/20' },
                        { title: 'GESTIÓN & OPERACIONES', items: TASKS_OPS, color: 'text-emerald-400', border: 'border-emerald-400/20' },
                        { title: 'INGENIERÍA & PRODUCTO', items: TASKS_ENG, color: 'text-violet-400', border: 'border-violet-400/20' }
                      ].map((block) => {
                        const isOpen = expandedGroups.includes(block.title);
                        return (
                          <div key={block.title} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-white/5 border-white/10' : 'bg-transparent border-transparent'}`}>
                            <button
                              onClick={() => toggleGroup(block.title)}
                              className={`w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors group rounded-2xl border ${block.border} ${isOpen ? 'bg-white/5' : 'bg-transparent'}`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`material-symbols-outlined text-[20px] ${block.color}`}>layers</span>
                                <span className={`text-[12px] font-black ${block.color} uppercase tracking-widest`}>{block.title}</span>
                              </div>
                              <span className={`material-symbols-outlined text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
                            </button>

                            <div className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                                {block.items.map(preset => {
                                  const activeTask = tasks.find(t => t.id === preset.id);
                                  const isZero = !activeTask || (activeTask.minutes === 0);
                                  const getValue = (field: keyof Task) => activeTask ? activeTask[field] : 0;

                                  const handleChange = (field: keyof Task, val: number) => {
                                    if (!activeTask) {
                                      const newTask: Task = {
                                        id: preset.id,
                                        name: preset.name,
                                        minutes: field === 'minutes' ? val : 0,
                                        frequency: field === 'frequency' ? val : 0,
                                        daysPerWeek: field === 'daysPerWeek' ? val : 0
                                      };
                                      setTasks(prev => [...prev, newTask]);
                                    } else {
                                      updateTask(preset.id, field, val);
                                    }
                                  };

                                  return (
                                    <div key={preset.id} className={`p-4 rounded-xl border transition-all duration-300 ${!isZero ? 'bg-cyan-950/30 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.1)]' : 'bg-black/20 border-white/5 hover:bg-white/5'}`}>
                                      <div className="flex items-center justify-between mb-3">
                                        <span className={`text-[13px] font-bold ${!isZero ? 'text-cyan-100' : 'text-slate-400'}`}>{preset.name}</span>
                                        {!isZero && (
                                          <span className="text-[10px] font-black text-cyan-300 bg-cyan-900/40 px-2 py-1 rounded-lg">
                                            +{formatNum((getValue('minutes') * getValue('frequency') * getValue('daysPerWeek') * 4.33 / 60).toFixed(0))} h/mes
                                          </span>
                                        )}
                                      </div>

                                      <div className="flex gap-2">
                                        {[
                                          { label: 'MINUTOS', field: 'minutes', ph: '0' },
                                          { label: 'VECES/DÍA', field: 'frequency', ph: '0' },
                                          { label: 'DÍAS/SEM', field: 'daysPerWeek', ph: '0' }
                                        ].map((cfg) => (
                                          <div key={cfg.field} className="flex-1">
                                            <label className="text-[8px] font-black block mb-1 text-center text-slate-500">{cfg.label}</label>
                                            <input
                                              type="number"
                                              placeholder={cfg.ph}
                                              value={activeTask ? (activeTask[cfg.field as keyof Task] || '') : ''}
                                              onChange={(e) => handleChange(cfg.field as keyof Task, Number(e.target.value))}
                                              className={`w-full h-8 rounded-lg text-center font-bold text-[12px] outline-none transition-all border ${!isZero ? 'bg-cyan-950/40 border-cyan-500/30 text-cyan-100' : 'bg-black/20 border-white/10 text-slate-400 focus:bg-white/10 focus:text-white'}`}
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
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RESULTS COLUMN - DARK MODE */}
            <div className="lg:col-span-12 xl:col-span-5">
              {/* CSS to hide number arrows (spinners) globally for this component */}
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

              <div className="sticky top-32 space-y-8">
                {tasks.length > 0 ? (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-10 duration-700">

                    {/* BLUR WRAPPER */}
                    <div className={`transition-all duration-700 ${!isUnlocked ? 'filter blur-xl select-none pointer-events-none opacity-80' : 'filter blur-0 opacity-100'}`}>

                      {/* Hero FTE & MONEY Card - NOW TRANSPARENT */}
                      <div className="p-10 md:p-12 rounded-[56px] bg-slate-900/20 backdrop-blur-xl border border-white/10 text-white shadow-2xl relative overflow-hidden flex flex-col items-center text-center group ring-1 ring-white/5">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                        <p className="text-[12px] font-black text-blue-400 uppercase tracking-[0.4em] mb-8 opacity-80">Impacto Mensual Recuperado</p>

                        <div className="flex flex-col items-center gap-1 mb-8">
                          <div className="flex items-baseline justify-center">
                            <span className="text-[32px] md:text-[40px] font-black text-blue-500 mr-2">€</span>
                            <span className="text-[72px] md:text-[100px] font-[1000] leading-none tracking-tighter text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                              {formatNum(stats.money.month)}
                            </span>
                          </div>
                          <span className="text-[14px] font-black text-slate-400 uppercase tracking-[0.2em]">CAPITAL MENSUAL LIBERADO</span>
                        </div>

                        <div className="w-48 h-px bg-white/10 mb-8"></div>

                        <div className="flex items-center gap-6 mb-8">
                          <div className="text-center">
                            <p className="text-[44px] font-[1000] leading-none text-blue-400">{stats.fte}</p>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">FTEs (TIEMPO)</p>
                          </div>
                          <div className="w-px h-12 bg-white/10"></div>
                          <div className="text-center">
                            <p className="text-[44px] font-[1000] leading-none text-emerald-400">{stats.percent}%</p>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">CAPACIDAD</p>
                          </div>
                        </div>

                        <p className="text-[14px] text-slate-400 font-bold leading-relaxed max-w-xs">
                          Al año recuperas un total de <span className="text-blue-400 font-black text-[18px]">{formatNum(stats.money.year)}€</span> netos.
                        </p>
                      </div>

                      {/* Matriz de Ahorro Real-Time */}
                      <div className="grid grid-cols-2 gap-4 mt-8">
                        {summaryCards.map((card, i) => (
                          <div key={i} className={`group p-6 md:p-8 rounded-[40px] border ${card.bg.replace('bg-', 'bg-opacity-5 bg-')} ${card.border.replace('border-', 'border-opacity-10 border-')} flex flex-col justify-between shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden bg-white/5 backdrop-blur-md`}>
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

                    </div>
                    {/* END BLUR WRAPPER */}

                    {/* LOCK OVERLAY & BUTTON */}
                    {!isUnlocked && (
                      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 pb-0">
                        <div className="w-24 h-24 bg-slate-900/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 shadow-2xl mb-8">
                          <span className="material-symbols-outlined text-5xl text-white/50">lock</span>
                        </div>
                        <button
                          onClick={() => generateAndDownload()}
                          disabled={isSubmitting}
                          className="px-8 py-4 bg-cyan-600/90 hover:bg-cyan-500 text-white rounded-full font-[800] text-[14px] uppercase tracking-widest backdrop-blur-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 border border-cyan-400/20 hover:scale-105"
                        >
                          <span className="material-symbols-outlined text-[20px]">lock_open</span>
                          {isSubmitting ? 'GENERANDO...' : 'DESBLOQUEAR Y DESCARGAR'}
                        </button>
                      </div>
                    )}


                    {/* DOWNLOAD BUTTON (ONLY WHEN UNLOCKED) */}
                    {isUnlocked && (
                      <div className="flex justify-center w-full mt-8">
                        <button
                          onClick={() => generateAndDownload()}
                          disabled={isSubmitting}
                          className="px-8 py-4 bg-cyan-600/90 hover:bg-cyan-500 text-white rounded-full font-[800] text-[14px] uppercase tracking-widest backdrop-blur-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 relative z-30 border border-cyan-400/20 hover:scale-105"
                        >
                          <span className="material-symbols-outlined text-[20px]">download</span>
                          {isSubmitting ? 'GENERANDO...' : 'DESCARGAR INFORME'}
                        </button>
                      </div>
                    )}

                    {/* EMAIL CAPTURE MODAL - Keep opaque for readability */}
                    {showEmailModal && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020617]/80 backdrop-blur-xl animate-in fade-in duration-200">
                        <div className="w-full max-w-md bg-slate-900/90 border border-white/10 p-8 rounded-[32px] shadow-2xl relative animate-in zoom-in-95 duration-200 backdrop-blur-2xl">
                          <button
                            onClick={() => setShowEmailModal(false)}
                            className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
                          >
                            <span className="material-symbols-outlined">close</span>
                          </button>

                          <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                              <span className="material-symbols-outlined text-blue-500 text-[32px]">forward_to_inbox</span>
                            </div>
                            <h3 className="text-2xl font-[900] text-white  mb-2">¿Dónde te enviamos el informe?</h3>
                            <p className="text-slate-400 text-sm">
                              Recibirás tu auditoría de rentabilidad detallada y una copia en alta calidad para tu equipo.
                            </p>
                          </div>

                          <form onSubmit={handleLeadSubmit} className="space-y-4">
                            <div>
                              <input
                                type="email"
                                required
                                placeholder="tu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-14 bg-black/20 border border-white/10 rounded-xl px-4 text-white placeholder-slate-500 focus:border-blue-500 outline-none transition-all font-medium text-center"
                              />
                            </div>
                            <button
                              type="submit"
                              disabled={isSaving}
                              className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {isSaving ? (
                                'UN MOMENTO...'
                              ) : (
                                <>
                                  <span>ENVIAR Y DESCARGAR</span>
                                  <span className="material-symbols-outlined">download</span>
                                </>
                              )}
                            </button>
                            <p className="text-[10px] text-center text-slate-500 uppercase font-bold tracking-widest">
                              Sin spam. Solo ingeniería.
                            </p>
                          </form>
                        </div>
                      </div>
                    )}

                    <p className="text-[11px] text-center text-slate-500 font-bold px-12 leading-relaxed italic opacity-70">
                      Informe técnico certificado de eficiencia operativa. Basado en ingeniería de sistemas de alta disponibilidad.
                    </p>
                  </div>
                ) : (
                  <div className="p-6 md:p-8 bg-white/5 backdrop-blur-3xl rounded-[40px] border border-white/10 text-left relative overflow-hidden transition-all duration-500 hover:bg-white/[0.07] h-full flex flex-col justify-center">

                    <h3 className="text-[20px] md:text-[24px] font-[900] text-white uppercase tracking-tight mb-8 relative z-10 flex items-center gap-4">
                      <span className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-[18px] shadow-lg shadow-blue-500/30 flex-shrink-0">?</span>
                      CÓMO FUNCIONA EL CÁLCULO
                    </h3>

                    <div className="relative z-10 space-y-6">

                      {/* SECTION 1 */}
                      <div className="pl-4 border-l-4 border-blue-500">
                        <h4 className="text-blue-400 font-black uppercase text-sm tracking-widest mb-2">1. Tu Coste Base</h4>
                        <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                          Introduce tu coste mensual total (Salario Bruto + Seguridad Social) en el campo superior.
                          <span className="block mt-1 text-slate-500 italic text-[11px]">Ejemplo: 2.500€</span>
                        </p>
                      </div>

                      {/* SECTION 2 */}
                      <div className="pl-4 border-l-4 border-emerald-500">
                        <h4 className="text-emerald-400 font-black uppercase text-sm tracking-widest mb-2">2. Referencia Temporal</h4>
                        <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                          El sistema asume una jornada estándar de <strong className="text-white">40h/semana</strong> (aprox. 173h/mes). Calculamos tu <strong className="text-white">precio/hora real</strong> dividiendo tu coste entre estas horas.
                        </p>
                      </div>

                      {/* SECTION 3 */}
                      <div className="pl-4 border-l-4 border-amber-500">
                        <h4 className="text-amber-400 font-black uppercase text-sm tracking-widest mb-2">3. Tu Ahorro</h4>
                        <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                          Al introducir los minutos diarios que dedicas a una tarea, multiplicamos ese tiempo recuperado por tu precio/hora.
                          <span className="block mt-2 text-amber-200/80 font-bold">Menos tareas manuales = Más dinero recuperado.</span>
                        </p>
                      </div>

                    </div>

                    <div className="mt-8 text-center relative z-10 pt-6 border-t border-white/5">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] animate-pulse flex flex-col items-center gap-2">
                        <span>Introduce un valor para comenzar</span>
                        <span className="material-symbols-outlined text-xl">arrow_downward</span>
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
