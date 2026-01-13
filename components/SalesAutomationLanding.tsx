import React from 'react';

interface SalesAutomationLandingProps {
    onBack: () => void;
    onNavigateToContact: () => void;
}

const SalesAutomationLanding: React.FC<SalesAutomationLandingProps> = ({ onBack, onNavigateToContact }) => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500/30 selection:text-amber-900">
            {/* BACKGROUND */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-slate-50"></div>
                {/* Subtle Amber Gradient */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px] opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-[100px] opacity-60"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">

                {/* 1. HERO SECTION */}
                <section className="text-center mb-32 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-8">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">Builders Ops</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
                        Lo construimos y lo <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                            dejamos funcionando
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                        Diseñamos y desarrollamos sistemas digitales para vender y operar sin fricción. <br className="hidden md:block" />
                        <span className="text-slate-900 font-semibold">Sin teoría. Solo ejecución.</span>
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button
                            onClick={onNavigateToContact}
                            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-amber-500/30 hover:-translate-y-1 text-lg flex items-center gap-3 uppercase tracking-wide"
                        >
                            Empezar a construir
                            <span className="material-symbols-outlined">construction</span>
                        </button>
                    </div>
                </section>

                {/* 2. PROBLEM SECTION */}
                <section className="mb-32">
                    <div className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-16 shadow-xl shadow-slate-200/50">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                    El problema no es la estrategia. <br />
                                    <span className="text-amber-600">Es la ejecución.</span>
                                </h3>
                                <p className="text-slate-600 text-lg font-medium leading-relaxed">
                                    Tienes claro qué necesitas, pero tus herramientas no hablan entre sí, los leads se enfrían por falta de respuesta y tu equipo pierde horas en tareas manuales.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Procesos manuales y lentos",
                                    "Herramientas desconectadas",
                                    "Fugas de información",
                                    "Dependencia humana crítica"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 rounded-xl bg-orange-50/50 border border-orange-100">
                                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                                            <span className="material-symbols-outlined text-sm font-bold">close</span>
                                        </div>
                                        <span className="font-bold text-slate-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. CAPABILITIES: WHAT WE BUILD */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Qué Construimos</h2>
                        <p className="text-slate-500 font-medium text-lg">Sistemas a medida, integrados y listos para escalar.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Webs & Apps (Vibe Coding)",
                                desc: "Desarrollo moderno y rápido con React. Webs que no solo informan, sino que convierten y operan.",
                                icon: "code"
                            },
                            {
                                title: "Chatbots & Voz",
                                desc: "Asistentes IA que atienden 24/7, agendan citas y cualifican leads por WhatsApp o Web.",
                                icon: "smart_toy"
                            },
                            {
                                title: "Gestión de Leads",
                                desc: "Sistemas CRM que centralizan, etiquetan y persiguen a tus contactos automáticamente.",
                                icon: "hub"
                            },
                            {
                                title: "Presupuestos Auto",
                                desc: "Generación y envío de propuestas comerciales en segundos, personalizadas y tracked.",
                                icon: "request_quote"
                            },
                            {
                                title: "Facturación Auto",
                                desc: "Emisión de facturas y control de cobros conectado directamente a tus operaciones.",
                                icon: "receipt_long"
                            },
                            {
                                title: "Automatizaciones n8n",
                                desc: "Conexiones complejas entre herramientas para eliminar el copy-paste de tu empresa.",
                                icon: "account_tree"
                            }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-amber-400 transition-all hover:shadow-lg group">
                                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                                    <span className="material-symbols-outlined text-2xl text-amber-600">{card.icon}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. HOW WE WORK */}
                <section className="mb-32 bg-slate-900 rounded-[40px] p-10 md:p-20 relative overflow-hidden text-white">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 block">Metodología Builders</span>
                            <h3 className="text-3xl md:text-5xl font-black mb-6">Sin fricción.</h3>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                No te vendemos horas de desarrollo. Te vendemos un sistema funcionando.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { title: "Entrega llave en mano", desc: "Te lo damos configurado, testado y listo para usar." },
                                    { title: "Formación al equipo", desc: "Enseñamos a tu gente a usar el 100% de la herramienta." },
                                    { title: "Soporte y Garantía", desc: "Si algo falla, estamos ahí para ajustarlo." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm mt-1">✓</span>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">{item.title}</h4>
                                            <p className="text-slate-400 text-sm">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                            <div className="font-mono text-sm space-y-4">
                                <div className="text-slate-500"># System Build Status</div>
                                <div className="flex justify-between text-slate-300">
                                    <span>Architecture</span>
                                    <span className="text-amber-400">[DONE]</span>
                                </div>
                                <div className="flex justify-between text-slate-300">
                                    <span>Integration</span>
                                    <span className="text-amber-400">[DONE]</span>
                                </div>
                                <div className="flex justify-between text-slate-300">
                                    <span>Testing</span>
                                    <span className="text-amber-400">[DONE]</span>
                                </div>
                                <div className="h-px bg-white/10 my-4"></div>
                                <div className="flex justify-between font-bold">
                                    <span className="text-white">DEPLOYMENT</span>
                                    <span className="text-green-400">READY 🚀</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. FINAL CTA */}
                <section className="text-center py-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
                        ¿Listo para construir?
                    </h2>
                    <div className="flex flex-col items-center gap-6">
                        <button
                            onClick={onNavigateToContact}
                            className="px-10 py-5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-xl flex items-center gap-3"
                        >
                            Empezar a construir
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </section>

                {/* BACK LINK */}
                <div className="text-center pb-10">
                    <button
                        onClick={onBack}
                        className="text-slate-400 hover:text-amber-600 transition-colors font-bold flex items-center justify-center gap-2 uppercase text-xs tracking-widest"
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
