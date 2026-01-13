import React from 'react';

interface OperationsLandingProps {
    onBack: () => void;
    onNavigateToContact: () => void;
}

const OperationsLanding: React.FC<OperationsLandingProps> = ({ onBack, onNavigateToContact }) => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500/30 selection:text-emerald-900">
            {/* GRID BACKGROUND */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">

                {/* 1. HERO SECTION: STRATEGY FOCUS */}
                <section className="text-center mb-32 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase">Consultant Ops</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
                        No empieces a automatizar <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                            sin saber dónde ganas dinero
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        Analizamos tu negocio, detectamos los cuellos de botella reales y diseñamos el plan exacto para escalar sin romper nada.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button
                            onClick={onNavigateToContact}
                            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-emerald-200 hover:-translate-y-1 text-lg flex items-center gap-3"
                        >
                            Solicitar auditoría operativa
                            <span className="material-symbols-outlined">analytics</span>
                        </button>
                    </div>
                </section>

                {/* 2. THE TRAP: BLIND AUTOMATION */}
                <section className="mb-32">
                    <div className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-12 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                    Automatizar el caos <br />
                                    solo genera un <span className="text-red-500">caos más rápido.</span>
                                </h3>
                                <p className="text-slate-600 text-lg font-medium leading-relaxed mb-6">
                                    La mayoría de empresas fallan al digitalizarse porque empiezan comprando herramientas sin entender sus flujos de trabajo.
                                </p>
                                <div className="p-4 bg-red-50 rounded-xl border border-red-100 text-red-800 font-bold flex gap-3 text-sm">
                                    <span className="material-symbols-outlined">warning</span>
                                    <span>Resultado: Herramientas caras que nadie usa.</span>
                                </div>
                            </div>
                            <div className="relative">
                                {/* VISUAL REPRESENTATION OF STRATEGY */}
                                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative z-10">
                                    <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-4">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Análisis de Impacto</span>
                                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded">High ROI</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm font-medium text-slate-600">
                                            <span>Coste Manual</span>
                                            <span className="text-red-500">4.500€ / mes</span>
                                        </div>
                                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                            <div className="bg-red-400 h-full w-[80%]"></div>
                                        </div>
                                        <div className="mt-4 flex justify-between text-sm font-medium text-slate-600">
                                            <span>Coste Automático</span>
                                            <span className="text-emerald-600">250€ / mes</span>
                                        </div>
                                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                            <div className="bg-emerald-500 h-full w-[10%]"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-4 -right-4 w-full h-full bg-emerald-100/50 rounded-2xl -z-10"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. METHODOLOGY */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Nuestra Metodología</h2>
                        <p className="text-slate-500 font-medium">No adivinamos. Medimos.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* STEP 1 */}
                        <div className="relative p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-lg transition-all group">
                            <div className="absolute -top-6 left-8 bg-emerald-500 text-white w-12 h-12 flex items-center justify-center rounded-xl text-xl font-black shadow-lg shadow-emerald-200">1</div>
                            <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">Auditoría Radical</h3>
                            <p className="text-slate-600 font-medium leading-relaxed text-sm">
                                Entrevistamos a tu equipo y destripamos tus procesos. ¿Quién hace qué? ¿Cuánto tardan? ¿Dónde se pierde dinero?
                            </p>
                        </div>

                        {/* STEP 2 */}
                        <div className="relative p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-lg transition-all group">
                            <div className="absolute -top-6 left-8 bg-emerald-500 text-white w-12 h-12 flex items-center justify-center rounded-xl text-xl font-black shadow-lg shadow-emerald-200">2</div>
                            <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">Scoring & Priorización</h3>
                            <p className="text-slate-600 font-medium leading-relaxed text-sm">
                                No todo se debe automatizar. Clasificamos oportunidades por ROI e impacto inmediato para tu negocio.
                            </p>
                        </div>

                        {/* STEP 3 */}
                        <div className="relative p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-lg transition-all group">
                            <div className="absolute -top-6 left-8 bg-emerald-500 text-white w-12 h-12 flex items-center justify-center rounded-xl text-xl font-black shadow-lg shadow-emerald-200">3</div>
                            <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">Roadmap Ejecutivo</h3>
                            <p className="text-slate-600 font-medium leading-relaxed text-sm">
                                Te entregamos el plan exacto. Qué herramientas usar, cuánto cuesta y en qué orden implementarlas.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. DELIVERABLES: WHAT YOU GET */}
                <section className="mb-32">
                    <div className="bg-emerald-900 rounded-[40px] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent_50%)]"></div>

                        <h2 className="text-3xl md:text-4xl font-black mb-12 relative z-10">¿Qué te entregamos?</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 text-left">
                            {[
                                { title: "Diagnóstico Operativo", desc: "Radiografía completa de tus ineficiencias actuales." },
                                { title: "Mapa de Herramientas", desc: "Stack tecnológico recomendado (sin comisiones)." },
                                { title: "Cálculo de ROI", desc: "Proyección económica real de los ahorros." },
                                { title: "Plan de Ejecución", desc: "Cronograma faseado listo para implementar." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md hover:bg-white/20 transition-all">
                                    <h4 className="font-bold text-emerald-300 mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-200 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-emerald-950/50 rounded-2xl border border-emerald-500/30 inline-block">
                            <p className="text-emerald-200 text-sm font-medium">
                                <span className="font-bold text-white uppercase tracking-wider mr-2">Opciones de Ejecución:</span>
                                Puedes ejecutarlo con BuilderOps, con tu equipo o con terceros. <span className="text-white underline decoration-emerald-500 underline-offset-4">Tú decides.</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. FINAL CTA */}
                <section className="text-center py-10">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
                        Pon orden antes de <br />
                        <span className="text-slate-400">poner tecnología.</span>
                    </h2>
                    <div className="flex flex-col items-center gap-6">
                        <button
                            onClick={onNavigateToContact}
                            className="px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-xl flex items-center gap-3"
                        >
                            Explore opportunities
                            <span className="material-symbols-outlined">explore</span>
                        </button>
                    </div>
                </section>

                {/* BACK LINK */}
                <div className="text-center pt-20 pb-10">
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
