import React from 'react';

interface CustomerSupportLandingProps {
    onBack: () => void;
    onNavigateToContact: () => void;
}

const CustomerSupportLanding: React.FC<CustomerSupportLandingProps> = ({ onBack, onNavigateToContact }) => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500/30 selection:text-blue-900">
            {/* GRID BACKGROUND (Subtle Light) */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">

                {/* 1. HERO SECTION */}
                <section className="text-center mb-32">
                    <span className="inline-block text-xs font-bold tracking-[0.3em] text-blue-600 mb-6 uppercase">
                        Atención Automatizada 24/7
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
                        Atiende a tus clientes <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                            sin aumentar tu equipo
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        Automatizamos la atención al cliente y el soporte para resolver consultas frecuentes, incidencias y dudas técnicas de forma inmediata.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button
                            onClick={onNavigateToContact}
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-blue-200 hover:-translate-y-1 text-lg flex items-center gap-2"
                        >
                            Activar atención automática
                        </button>
                        <button className="px-8 py-4 text-slate-500 hover:text-blue-600 font-bold transition-colors flex items-center gap-2">
                            Ver cómo funciona <span className="material-symbols-outlined text-sm">arrow_downward</span>
                        </button>
                    </div>
                </section>

                {/* 2. EL PROBLEMA */}
                <section className="mb-32 max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-black text-slate-900 leading-tight">
                            Más clientes no debería significar más tickets.
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { text: "Consultas repetidas", icon: "repeat" },
                            { text: "Soporte saturado", icon: "warning" },
                            { text: "Respuestas lentas", icon: "hourglass_empty" },
                            { text: "Clientes frustrados", icon: "sentiment_dissatisfied" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center gap-3 text-center">
                                <span className="material-symbols-outlined text-slate-400 text-3xl">{item.icon}</span>
                                <span className="font-bold text-slate-700 text-sm leading-tight">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. AUTOMATIZACIONES INCLUIDAS */}
                <section className="mb-32">
                    <h2 className="text-3xl font-black text-center mb-16 text-slate-900">Automatizaciones incluidas</h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {[
                            { icon: "support_agent", title: "Atención al Cliente Auto", desc: "Resuelve dudas frecuentes sobre servicios, pedidos o procesos de forma inmediata, 24/7." },
                            { icon: "build_circle", title: "Soporte Técnico Guiado", desc: "Guía a clientes o usuarios paso a paso en la resolución de incidencias técnicas comunes." },
                            { icon: "reviews", title: "Gestión de Reseñas", desc: "Recoge, analiza y responde reseñas automáticamente para proteger y mejorar tu reputación." }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-[32px] hover:border-blue-500/30 transition-all group shadow-lg hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors border border-blue-100">
                                    <span className="material-symbols-outlined text-3xl text-blue-600">{card.icon}</span>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-4 text-xl">{card.title}</h4>
                                <p className="text-slate-500 text-base leading-relaxed font-medium flex-grow">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Optional Card */}
                    <div className="bg-slate-100/50 border border-slate-200/50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left max-w-2xl mx-auto">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <span className="material-symbols-outlined text-slate-500">face</span>
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900 mb-1">Derivación a Humano Inteligente</h5>
                            <p className="text-slate-500 text-sm font-medium">Cuando la automatización no es suficiente, deriva la conversación a una persona de forma ordenada.</p>
                        </div>
                    </div>
                </section>

                {/* 4. ANTES VS DESPUÉS */}
                <section className="mb-32">
                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        {/* ANTES */}
                        <div className="p-10 border border-red-100 rounded-[32px] bg-red-50/30">
                            <h4 className="text-red-400 font-black tracking-widest uppercase text-xs mb-8">Antes</h4>
                            <ul className="space-y-6">
                                {[
                                    "Tickets repetidos",
                                    "Respuestas tardías",
                                    "Soporte desbordado",
                                    "Clientes insatisfechos"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-500 font-medium">
                                        <span className="material-symbols-outlined text-red-300">close</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* DESPUÉS */}
                        <div className="p-10 border border-green-100 rounded-[32px] bg-green-50/30">
                            <h4 className="text-green-500 font-black tracking-widest uppercase text-xs mb-8">Después</h4>
                            <ul className="space-y-6">
                                {[
                                    "Respuestas instantáneas",
                                    "Menos incidencias",
                                    "Soporte ordenado",
                                    "Clientes atendidos 24/7"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-900 font-bold">
                                        <span className="material-symbols-outlined text-green-500 fill-current">check_circle</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 5. PARA QUIÉN ES */}
                <section className="mb-32 max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-black mb-12 text-slate-900">Ideal para negocios con volumen</h2>
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {[
                            "Ecommerce",
                            "Servicios con soporte",
                            "Empresas postventa",
                            "Negocios con reseñas clave"
                        ].map((tag, i) => (
                            <span key={i} className="px-5 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold text-sm shadow-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </section>

                {/* 6. CTA FINAL */}
                <section className="text-center py-20 border-t border-slate-100">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
                        Atiende mejor <br />
                        <span className="text-slate-400">sin contratar más personas</span>
                    </h2>
                    <div className="flex flex-col items-center gap-6">
                        <button
                            onClick={onNavigateToContact}
                            className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-xl flex items-center gap-3"
                        >
                            Quiero esta automatización
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <div className="flex items-center gap-4 text-slate-500 text-sm font-bold">
                            <span>Respuesta inmediata</span>
                            <span className="text-slate-300">•</span>
                            <span>Escalable</span>
                            <span className="text-slate-300">•</span>
                            <span>Sin fricción</span>
                        </div>
                    </div>
                </section>

                {/* BACK LINK */}
                <div className="text-center pb-12">
                    <button
                        onClick={onBack}
                        className="text-slate-400 hover:text-blue-600 transition-colors font-bold flex items-center justify-center gap-2 uppercase text-xs tracking-widest"
                    >
                        <span className="material-symbols-outlined text-lg">arrow_back</span>
                        Volver a servicios
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CustomerSupportLanding;
