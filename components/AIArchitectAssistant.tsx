import React, { useState, useMemo, useRef } from 'react';
import { supabase } from '../lib/supabase';

// TYPES
interface Task {
  id: string;
  name: string;
  minutes: number;
  frequency: number;
  daysPerWeek: number;
}

// DATA STRUCTURES
const CATEGORIES = [
  {
    id: 'chatbots',
    title: 'Chatbots Inteligentes',
    icon: 'smart_toy',
    description: 'Asistentes virtuales que atienden a tus clientes 24/7, responden preguntas y generan ventas automáticamente.',
    tags: ['Integracion WhatsApp', 'Respuestas IA', 'Multi-idioma'],
    color: 'text-cyan-400',
    bg: 'bg-slate-700', // Inner icon bg
    richContent: {
      headline: 'Asistentes de IA que <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">realmente entienden</span> a tus clientes',
      subtext: 'Olvídate de los chatbots antiguos. Creamos cerebros digitales entrenados con tu información para ofrecer conversaciones fluidas, humanas y resolutivas.',
      features: [
        {
          id: 'chat_support',
          icon: 'support_agent',
          name: 'Atención al Cliente',
          desc: 'Resuelve dudas, gestiona pedidos y devoluciones en cualquier idioma 24/7.',
          mins: 30
        },
        {
          id: 'chat_onboarding',
          icon: 'badge',
          name: 'Asistente Onboarding',
          desc: 'Guía a nuevos empleados por la documentación y procesos internos.',
          mins: 20
        },
        {
          id: 'chat_tech',
          icon: 'precision_manufacturing',
          name: 'Soporte Técnico',
          desc: 'Ayuda a técnicos a resolver incidencias complejas paso a paso.',
          mins: 15
        },
      ]
    }
  },
  {
    id: 'optimization',
    title: 'Optimización de Procesos',
    icon: 'account_tree',
    description: 'Elimina el trabajo manual repetitivo conectando tus herramientas para que los datos fluyan solos.',
    tags: ['Facturación Auto', 'Sincro CRM', 'Sin Errores'],
    color: 'text-emerald-400',
    bg: 'bg-slate-700',
    richContent: {
      headline: 'Procesos que funcionan en <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">piloto automático</span>',
      subtext: 'Conectamos tus herramientas (CRM, ERP, Email) para que los datos fluyan solos y tu equipo se centre en aportar valor.',
      features: [
        {
          id: 'auto_invoice',
          icon: 'receipt_long',
          name: 'Facturación Automática',
          desc: 'Emisión, envío y reclamación de facturas sin tocar un botón.',
          mins: 25
        },
        {
          id: 'auto_docs',
          icon: 'cloud_upload',
          name: 'Gestión Documental',
          desc: 'Clasificación y extracción de datos de documentos automática.',
          mins: 20
        },
        {
          id: 'auto_crm',
          icon: 'sync_alt',
          name: 'Sincronización CRM',
          desc: 'Mantén tus bases de datos de clientes siempre actualizadas.',
          mins: 30
        },
      ]
    }
  },
  {
    id: 'web_dash',
    title: 'Análisis y Desarrollo Web con IA',
    icon: 'monitoring',
    description: 'Transformamos datos en decisiones y creamos experiencias web de alto impacto.',
    tags: ['Dashboards KPI', 'Web Apps', 'Scraping'],
    color: 'text-violet-400',
    bg: 'bg-slate-700',
    richContent: {
      headline: 'Visualiza el futuro de tu negocio con <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500">claridad total</span>',
      subtext: 'Transformamos datos brutos en decisiones inteligentes. Webs de alto rendimiento y dashboards que te dicen la verdad.',
      features: [
        {
          id: 'dash_kpi',
          icon: 'bar_chart',
          name: 'Dashboards KPI',
          desc: 'Controla métricas clave en tiempo real para tomar decisiones rápidas.',
          mins: 40
        },
        {
          id: 'web_app',
          icon: 'web',
          name: 'Webs Corporativas',
          desc: 'Presencia digital moderna, rápida y optimizada para conversión.',
          mins: 45
        },
        {
          id: 'data_extract',
          icon: 'dataset',
          name: 'Scraping de Datos',
          desc: 'Monitoriza a tu competencia y captura leads automáticamente.',
          mins: 15
        },
      ]
    }
  }
];

const AIArchitectAssistant: React.FC = () => {
  const [employeeCost, setEmployeeCost] = useState<number>(1800);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Keep these for email modal logic
  const [email, setEmail] = useState('');
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const updateTask = (id: string, field: keyof Task, value: number, name: string) => {
    setTasks(prev => {
      const exists = prev.find(t => t.id === id);
      if (!exists) {
        return [...prev, {
          id,
          name,
          minutes: field === 'minutes' ? value : 0,
          frequency: field === 'frequency' ? value : 1,
          daysPerWeek: field === 'daysPerWeek' ? value : 5
        }];
      }
      return prev.map(t => t.id === id ? { ...t, [field]: value } : t);
    });
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
    const annualHours = monthlyHours * 12;
    const monthlySavings = monthlyHours * hourlyRate;
    const annualSavings = monthlySavings * 12;

    return {
      monthlyHours: Math.round(monthlyHours),
      annualHours: Math.round(annualHours),
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      fte: (monthlyHours / fteMonthlyHours).toFixed(2),
      percent: Math.round((monthlyHours / fteMonthlyHours) * 100)
    };
  }, [tasks, employeeCost]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSaving(true);
    const selectedImprovements = tasks.filter(t => t.minutes > 0).map(t => t.name);
    await supabase.from('calculator_leads').insert({ email, improvements: selectedImprovements });
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
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement('a');
      link.download = `BuildersOps-ROI.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    }
    setIsSubmitting(false);
  };


  return (
    <section className="py-24 px-6 bg-transparent relative" id="calculator">
      <canvas ref={canvasRef} className="hidden" />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-[12px] md:text-[14px] font-black text-cyan-500 uppercase tracking-[0.3em] block mb-4">
            RENTABILIDAD
          </span>
          <h3 className="text-[36px] md:text-[54px] font-[900] text-slate-900 tracking-tight leading-none mb-6">
            Calcula tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Impacto</span>
          </h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Descubre cuánto dinero está perdiendo tu empresa en tareas repetitivas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">

          {/* LEFT COLUMN: INTERACTIVE CARDS */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Cost Configuration Card */}
            <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm relative overflow-hidden">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Tu Coste Promedio</label>
              <div className="flex items-end gap-2">
                <input
                  type="number"
                  value={employeeCost}
                  onChange={(e) => setEmployeeCost(Number(e.target.value))}
                  className="bg-transparent border-b-2 border-slate-200 text-5xl font-[900] text-slate-900 w-48 focus:border-cyan-500 outline-none transition-colors"
                />
                <span className="text-xl font-bold text-slate-400 mb-2">€ / mes</span>
              </div>
            </div>

            {/* 3 FEATURE CARDS - DARK THEME */}
            <div className="grid grid-cols-1 gap-6">
              {CATEGORIES.map((cat) => {
                const activeCount = tasks.filter(t => cat.richContent.features.some(f => f.id === t.id) && t.minutes > 0).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setOpenSection(cat.id)}
                    className={`text-left p-6 rounded-[24px] border transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-lg ${activeCount > 0 ? 'bg-cyan-50 border-cyan-200 ring-1 ring-cyan-200' : 'bg-white border-slate-200 hover:border-cyan-300'}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl ${activeCount > 0 ? 'bg-white' : cat.bg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                        <span className={`material-symbols-outlined text-3xl ${activeCount > 0 ? 'text-cyan-600' : 'text-slate-500'}`}>{cat.icon}</span>
                      </div>
                      {activeCount > 0 && (
                        <span className="text-[10px] font-black bg-cyan-600 text-white px-3 py-1 rounded-full">
                          {activeCount} ACTIVO{activeCount > 1 ? 'S' : ''}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-[900] text-slate-900 mb-2 leading-tight">{cat.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{cat.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: RESULTS */}
          <div className="lg:col-span-5 sticky top-8">
            <div className="p-8 md:p-10 rounded-[32px] bg-white border border-slate-200 shadow-2xl flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white -z-10"></div>
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700"></div>

              <div className="text-center mb-12 relative z-10">
                <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2 block">Ahorro Potencial Anual</span>
                <h2 className="text-[64px] md:text-[80px] font-[1000] text-slate-900 leading-none tracking-tighter">
                  {formatCurrency(stats.annualSavings)}
                </h2>
              </div>

              <div className="flex justify-between items-end border-b border-slate-100 pb-8 mb-8 relative z-10">
                <span className="text-slate-500 font-bold text-lg">Ahorro Mensual</span>
                <span className="text-4xl font-[900] text-cyan-600 tracking-tight">{formatCurrency(stats.monthlySavings)}</span>
              </div>

              <div className="bg-cyan-50/50 border border-cyan-100 rounded-2xl p-6 relative z-10 overflow-hidden backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-cyan-600 text-xl">schedule</span>
                  <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Tiempo Recuperado</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[40px] font-[1000] text-slate-900 leading-none tracking-tight">{stats.annualHours.toLocaleString()} h</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mt-2">ANUALES</p>
                  </div>
                  <div className="text-right pb-1">
                    <p className="text-3xl font-[900] text-cyan-600 leading-none">{stats.monthlyHours} h</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mt-2">MENSUALES</p>
                  </div>
                </div>
              </div>

              <button className="mt-10 w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-[900] text-lg uppercase tracking-widest transition-all shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 active:scale-95">
                Recuperar este dinero ahora
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RICH MODAL */}
      {openSection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-5xl rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh] animate-in slide-in-from-bottom-10 duration-500">

            {(() => {
              const cat = CATEGORIES.find(c => c.id === openSection);
              if (!cat) return null;

              return (
                <div className="flex flex-col h-full">
                  {/* Modal Header */}
                  <div className="p-10 pb-6 relative overflow-hidden bg-slate-50 border-b border-slate-100 shrink-0">
                    <button
                      onClick={() => setOpenSection(null)}
                      className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white text-slate-400 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-all z-20 shadow-sm"
                    >
                      <span className="material-symbols-outlined">close</span>
                    </button>

                    <div className="max-w-3xl mx-auto text-center relative z-10">
                      <div className={`w-16 h-16 rounded-2xl ${cat.bg} mx-auto flex items-center justify-center mb-6`}>
                        <span className={`material-symbols-outlined text-4xl ${cat.color}`}>{cat.icon}</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-[1000] text-slate-900 mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: cat.richContent.headline }} />
                      <p className="text-lg text-slate-600 font-medium leading-relaxed">{cat.richContent.subtext}</p>
                    </div>
                  </div>

                  {/* Modal Content - 3 Rich Cards */}
                  <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                      {cat.richContent.features.map((feature) => {
                        const activeTask = tasks.find(t => t.id === feature.id);
                        const val = activeTask ? activeTask.minutes : 0;
                        const freq = activeTask ? activeTask.frequency : 1;

                        return (
                          <div key={feature.id} className={`p-8 rounded-[32px] border transition-all duration-300 relative group flex flex-col ${val > 0 ? 'bg-cyan-50/50 border-cyan-200 shadow-lg shadow-cyan-500/10' : 'bg-slate-50 border-slate-100 hover:border-cyan-200 hover:shadow-lg'}`}>
                            <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm border border-slate-100 ${val > 0 ? 'text-cyan-600' : 'text-slate-400'} group-hover:scale-110 transition-transform`}>
                              <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                            </div>

                            <h3 className="text-xl font-[900] text-slate-900 mb-3">{feature.name}</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6 min-h-[60px]">{feature.desc}</p>

                            <div className="mt-auto space-y-4">
                              <div>
                                <div className="flex justify-between items-center mb-2">
                                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Duración (min)</label>
                                  <span className="text-xs font-bold text-slate-900">{val} min</span>
                                </div>
                                <input
                                  type="range"
                                  min="0" max="120" step="5"
                                  value={val}
                                  onChange={(e) => updateTask(feature.id, 'minutes', Number(e.target.value), feature.name)}
                                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                                />
                              </div>

                              <div className={`transition-all duration-300 ${val > 0 ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
                                <div className="flex justify-between items-center mb-2">
                                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Frecuencia / día</label>
                                  <span className="text-xs font-bold text-slate-900">{freq} veces</span>
                                </div>
                                <input
                                  type="range"
                                  min="1" max="20" step="1"
                                  value={freq}
                                  onChange={(e) => updateTask(feature.id, 'frequency', Number(e.target.value), feature.name)}
                                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                                />
                              </div>
                            </div>

                            {val > 0 && (
                              <div className="absolute top-6 right-6">
                                <span className="material-symbols-outlined text-cyan-500 animate-bounce">check_circle</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Feature Footer */}
                  <div className="p-6 border-t border-slate-100 bg-white flex justify-center shrink-0">
                    <button
                      onClick={() => setOpenSection(null)}
                      className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-slate-900/20 active:scale-95 flex items-center gap-2"
                    >
                      <span>Confirmar Selección</span>
                      <span className="material-symbols-outlined text-base">check</span>
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
};

export default AIArchitectAssistant;
