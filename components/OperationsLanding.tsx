import React from 'react';

interface OperationsLandingProps {
    onBack: () => void;
    onNavigateToContact: () => void;
}

const OperationsLanding: React.FC<OperationsLandingProps> = ({ onBack, onNavigateToContact }) => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500/30 selection:text-emerald-900">
            {/* BACKGROUND */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-slate-50"></div>
                {/* Subtle Emerald Gradient */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[120px] opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px] opacity-60"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">

                {/* 1. HERO SECTION */}
                <section className="text-center mb-32 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-8">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase">Consultant Ops</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
                        Detecta dónde la IA <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                            genera impacto real
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                        Analizamos tu negocio, cuantificamos oportunidades y te damos un plan claro para ejecutarlas. <br className="hidden md:block" />
                        <span className="text-slate-900 font-semibold">Decisiones informadas, no modas.</span>
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button
                            onClick={onNavigateToContact}
                            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 text-lg flex items-center gap-3 uppercase tracking-wide"
                        >
                            Explorar oportunidades
                            <span className="material-symbols-outlined">explore</span>
                        </button>
                    </div>
                </section>

                {/* 2. PROBLEM SECTION */}
                <section className="mb-32">
                    <div className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-16 shadow-xl shadow-slate-200/50">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                    ¿Por dónde empiezo? <br />
                                    <span className="text-emerald-600">Esa es la pregunta.</span>
                                </h3>
                                <p className="text-slate-600 text-lg font-medium leading-relaxed">
                                    Todo el mundo habla de IA, pero implementarla a ciegas es la forma más rápida de tirar el dinero. Sin estrategia, solo añades ruido.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative">
                                <span className="absolute -top-3 left-8 bg-white border border-slate-200 text-xs font-bold px-3 py-1 rounded-full text-slate-500 uppercase tracking-widest">Realidad Común</span>
                                <ul className="space-y-4 mt-2">
                                    {[
                                        "Automatizar lo que no funciona",
                                        "Herramientas caras infrautilizadas",
                                        "Equipo resistente al cambio",
                                        "Cero retorno de inversión (ROI)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-slate-600 font-medium">
                                            <span className="material-symbols-outlined text-red-400">warning</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. METHODOLOGY */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Nuestra Metodología</h2>
                        <p className="text-slate-500 font-medium text-lg">De la intuición al dato en 3 pasos.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[28%] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 -z-10"></div>

                        {[
                            {
                                step: "01",
                                title: "Auditoría Profunda",
                                desc: "Entrevistamos a tu equipo, mapeamos procesos y detectamos dónde se pierde tiempo y dinero real.",
                                icon: "inventory"
                            },
                            {
                                step: "02",
                                title: "Análisis & ROI",
                                desc: "Calculamos el impacto. ¿Cuánto ahorrarás? ¿Cuántos FTEs liberarás? Ponemos números a cada oportunidad.",
                                icon: "analytics"
                            },
                            {
                                step: "03",
                                title: "Roadmap Ejecutivo",
                                desc: "Priorizamos qué hacer primero. Te entregamos un plan paso a paso con costes, tiempos y responsables.",
                                icon: "map"
                            }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-emerald-400 transition-all hover:shadow-lg group text-center relative">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform border border-emerald-100 relative z-10">
                                    <span className="material-symbols-outlined text-3xl text-emerald-600">{card.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. RESULTADO */}
                <section className="mb-32 bg-emerald-900 rounded-[40px] p-10 md:p-20 relative overflow-hidden text-white text-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.2),transparent_70%)]"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-6 block">Entregable Final</span>
                        <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Claridad absoluta para decidir.</h3>
                        <p className="text-emerald-100 text-lg leading-relaxed mb-12 font-medium">
                            No te llevas un PDF genérico. Te llevas un plan de batalla. <br />
                            Sabrás exactamente qué herramienta contratar, qué proceso automatizar y cuánto vas a ganar.
                        </p>

                        <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Opciones de Ejecución</h4>
                            <div className="flex flex-col md:flex-row gap-8 text-left">
                                <div className="flex gap-3">
                                    <span className="material-symbols-outlined text-emerald-400">check_circle</span>
                                    <span className="text-slate-200 text-sm">Ejecuta tu equipo in-house</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="material-symbols-outlined text-emerald-400">check_circle</span>
                                    <span className="text-slate-200 text-sm">Ejecuta un partner externo</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="material-symbols-outlined text-emerald-400">check_circle</span>
                                    <span className="text-slate-200 text-sm">Ejecuta <strong>Builder Ops</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. FINAL CTA */}
                <section className="text-center py-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
                        Deja de adivinar.
                    </h2>
                    <div className="flex flex-col items-center gap-6">
                        <button
                            onClick={onNavigateToContact}
                            className="px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-xl flex items-center gap-3"
                        >
                            Explorar oportunidades
                            <span className="material-symbols-outlined">explore</span>
                        </button>
                    </div>
                </section>

                {/* BACK LINK */}
                <div className="text-center pb-10">
                    <button
                        onClick={onBack}
                        className="text-slate-400 hover:text-emerald-600 transition-colors font-bold flex items-center justify-center gap-2 uppercase text-xs tracking-widest"
                    >
                        <span className="material-symbols-outlined text-lg">arrow_back</span>
                        Volver a servicios
                    </button>
                </div>

            </div>
        </div>
    );
};

export default OperationsLanding;
