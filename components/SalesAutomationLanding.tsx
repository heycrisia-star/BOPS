import React from 'react';

interface SalesAutomationLandingProps {
    onBack: () => void;
    onNavigateToContact: () => void;
}

const SalesAutomationLanding: React.FC<SalesAutomationLandingProps> = ({ onBack, onNavigateToContact }) => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/30 selection:text-indigo-900">
            {/* GRID BACKGROUND */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">

                {/* 1. HERO SECTION: EXECUTION FOCUS */}
                <section className="text-center mb-32 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
                        <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] text-indigo-700 uppercase">Builders Ops</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
                        Lo construimos y lo <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                            dejamos funcionando
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        Diseñamos, programamos e implementamos los sistemas digitales que tu negocio necesita para vender y operar sin fricción. Sin teoría, solo ejecución.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button
                            onClick={onNavigateToContact}
                            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg flex items-center gap-3"
                        >
                            Empezar a construir
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </section>

                {/* 2. THE PROBLEM: EXECUTION GAP */}
                <section className="mb-32">
                    <div className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-12 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

                        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                    Tu problema no es la estrategia. <br />
                                    <span className="text-indigo-600">Es la ejecución.</span>
                                </h3>
                                <p className="text-slate-600 text-lg font-medium leading-relaxed mb-6">
                                    Sabes lo que tienes que hacer, pero las herramientas no conectan, los datos se pierden y acabas haciéndolo todo manual.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { icon: "handyman", text: "Procesos manuales y repetitivos" },
                                    { icon: "link_off", text: "Herramientas desconectadas" },
                                    { icon: "group_off", text: "Dependencia total del equipo humano" },
                                    { icon: "visibility_off", text: "Datos dispersos y sin control" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm text-slate-400">
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                        </div>
                                        <span className="font-bold text-slate-700">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. CAPABILITIES: WHAT WE BUILD */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Qué construimos</h2>
                        <p className="text-slate-500 font-medium">Sistemas completos, no parches aislados.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* CARD 1 */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-indigo-500/30 transition-all hover:shadow-xl group">
                            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl text-indigo-600">web</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Webs & Apps Operativas</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                No solo páginas bonitas. Construimos webs que captan datos, cualifican usuarios y se conectan con tu CRM en tiempo real.
                            </p>
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-indigo-500/30 transition-all hover:shadow-xl group">
                            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl text-indigo-600">smart_toy</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Chatbots & IA</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                Asistentes que atienden, venden y dan soporte 24/7 en tu web o WhatsApp. Conectados a tu base de conocimiento.
                            </p>
                        </div>

                        {/* CARD 3 */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-indigo-500/30 transition-all hover:shadow-xl group">
                            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl text-indigo-600">hub</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Sistemas de Gestión</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                CRMs a medida, facturación automática y dashboards de control. Todo conectado para que el dato fluya solo.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. HOW WE WORK: SIMPLE */}
                <section className="mb-32">
                    <div className="bg-slate-900 rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-black mb-6">Ejecución sin fricción.</h3>
                                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                    No te mareamos con tecnicismos. Entendemos tu necesidad, diseñamos la arquitectura y la construimos.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Entrega llave en mano",
                                        "Formación a tu equipo",
                                        "Soporte y mantenimiento",
                                        "Escalable desde el día 1"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 font-bold text-indigo-200">
                                            <span className="material-symbols-outlined text-indigo-400">check_circle</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-md">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="space-y-4 font-mono text-sm text-slate-400">
                                    <div className="flex gap-4">
                                        <span className="text-indigo-400">$</span>
                                        <span>initializing_system...</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-indigo-400">$</span>
                                        <span>connecting_integrations [OK]</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-indigo-400">$</span>
                                        <span>optimizing_workflows [OK]</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-green-400">$</span>
                                        <span className="text-white">system_ready_to_scale</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. FINAL CTA */}
                <section className="text-center py-10">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
                        Deja de hacerlo manual. <br />
                        <span className="text-slate-400">Empieza a escalar.</span>
                    </h2>
                    <div className="flex flex-col items-center gap-6">
                        <button
                            onClick={onNavigateToContact}
                            className="px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-xl flex items-center gap-3"
                        >
                            Start building
                            <span className="material-symbols-outlined">construction</span>
                        </button>
                    </div>
                </section>

                {/* BACK LINK */}
                <div className="text-center pt-20 pb-10">
                    <button
                        onClick={onBack}
                        className="text-slate-400 hover:text-indigo-600 transition-colors font-bold flex items-center justify-center gap-2 uppercase text-xs tracking-widest"
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
