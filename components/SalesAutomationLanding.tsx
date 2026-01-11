import React from 'react';

interface SalesAutomationLandingProps {
    onBack: () => void;
    onNavigateToContact: () => void;
}

const SalesAutomationLanding: React.FC<SalesAutomationLandingProps> = ({ onBack, onNavigateToContact }) => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500/30 selection:text-cyan-900">
            {/* GRID BACKGROUND (Light Mode) */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">

                {/* 1. HERO SECTION */}
                <section className="text-center mb-32">
                    <span className="inline-block text-xs font-bold tracking-[0.3em] text-cyan-600 mb-6 uppercase">
                        Automatización de Ventas
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
                        Convierte leads en clientes <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                            en piloto automático
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        Automatizamos el proceso completo desde que un lead entra en tu web hasta que agenda o recibe su presupuesto, sin seguimiento manual.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button
                            onClick={onNavigateToContact}
                            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg flex items-center gap-2"
                        >
                            Activar automatización
                        </button>
                        <button className="px-8 py-4 text-slate-500 hover:text-cyan-600 font-bold transition-colors flex items-center gap-2">
                            Ver cómo funciona <span className="material-symbols-outlined text-sm">arrow_downward</span>
                        </button>
                    </div>
                </section>

                {/* 2. EL PROBLEMA */}
                <section className="mb-32">
                    <div className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-12 shadow-xl shadow-slate-200/50">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-black text-slate-900 mb-2 leading-tight">
                                    El problema no es generar leads. <br />
                                    <span className="text-slate-400">El problema es gestionarlos.</span>
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Leads sin responder",
                                    "Seguimientos manuales",
                                    "Presupuestos lentos",
                                    "Citas que nunca se agendan"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-600 font-bold">
                                        <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                                            <span className="material-symbols-outlined text-sm">close</span>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 3. AUTOMATIZACIONES INCLUIDAS */}
                <section className="mb-32">
                    <h2 className="text-3xl font-black text-center mb-16 text-slate-900">Automatizaciones incluidas</h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: "filter_alt", title: "Cualificación de Leads", desc: "Analizamos cada lead automáticamente y lo clasificamos según interés, urgencia y potencial." },
                            { icon: "hub", title: "Gestión de Ventas", desc: "Centralizamos leads, actualizamos estados y activamos acciones sin depender del equipo comercial." },
                            { icon: "request_quote", title: "Presupuestos Auto", desc: "Genera y envía presupuestos automáticamente según reglas definidas, sin copiar ni pegar." },
                            { icon: "event_available", title: "Agendamiento Smart", desc: "El lead agenda directamente según disponibilidad real, sin correos ni fricción." }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-cyan-500/30 transition-all group shadow-lg hover:shadow-xl hover:-translate-y-1">
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-50 transition-colors border border-slate-100">
                                    <span className="material-symbols-outlined text-2xl text-cyan-600">{card.icon}</span>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-3 text-lg">{card.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. ANTES VS DESPUÉS */}
                <section className="mb-32">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* ANTES */}
                        <div className="p-10 border border-slate-200 rounded-3xl bg-slate-100/50">
                            <h4 className="text-slate-400 font-black tracking-widest uppercase text-sm mb-8">Antes</h4>
                            <ul className="space-y-6">
                                {[
                                    "Seguimiento manual",
                                    "Leads olvidados",
                                    "Presupuestos lentos",
                                    "Citas perdidas"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-400 font-medium line-through decoration-slate-300 decoration-2">
                                        <span className="material-symbols-outlined text-slate-300">close</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* DESPUÉS */}
                        <div className="p-10 border border-cyan-200/50 rounded-3xl bg-white shadow-2xl shadow-cyan-900/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100/50 blur-[50px]"></div>
                            <h4 className="text-cyan-600 font-black tracking-widest uppercase text-sm mb-8">Después</h4>
                            <ul className="space-y-6">
                                {[
                                    "Flujo automático",
                                    "Respuesta inmediata",
                                    "Presupuestos en minutos",
                                    "Agenda organizada"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-900 font-bold">
                                        <span className="material-symbols-outlined text-cyan-600">check_circle</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 5. PARA QUIÉN ES */}
                <section className="mb-32 max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-black mb-12 text-slate-900">¿Para quién es esta automatización?</h2>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {[
                            "Negocios de servicios",
                            "Empresas B2B",
                            "Webs que generan leads",
                            "Equipos comerciales"
                        ].map((tag, i) => (
                            <span key={i} className="px-6 py-3 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-bold text-sm uppercase tracking-wide">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="text-slate-500 text-sm font-medium">Funciona tanto en webs existentes como en páginas web diseñadas por nosotros.</p>
                </section>

                {/* 6. CTA FINAL */}
                <section className="text-center py-20 border-t border-slate-200">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
                        Empieza a convertir <br />
                        <span className="text-slate-400">sin perseguir clientes</span>
                    </h2>
                    <div className="flex flex-col items-center gap-6">
                        <button
                            onClick={onNavigateToContact}
                            className="px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-xl flex items-center gap-3"
                        >
                            Quiero esta automatización
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <div className="flex items-center gap-4 text-slate-500 text-sm font-bold uppercase tracking-wider">
                            <span>Activación rápida</span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span>Sin fricción</span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span>Escalable</span>
                        </div>
                    </div>
                </section>

                {/* BACK LINK */}
                <div className="text-center pb-12">
                    <button
                        onClick={onBack}
                        className="text-slate-400 hover:text-cyan-600 transition-colors font-bold flex items-center justify-center gap-2 uppercase text-xs tracking-widest"
                    >
                        <span className="material-symbols-outlined text-lg">arrow_back</span>
                        Volver a servicios
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SalesAutomationLanding;
