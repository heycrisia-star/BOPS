import React from 'react';

const cases = [
    {
        title: 'Productividad Personal',
        metric: '+50%',
        desc: 'Tu equipo enfocado en lo importante, eliminando tareas repetitivas.',
        icon: 'speed'
    },
    {
        title: 'Operativa 24/7',
        metric: '24/7',
        desc: 'Tu negocio sigue funcionando y vendiendo mientras duermes.',
        icon: 'schedule'
    },
    {
        title: 'Mejora del Margen',
        metric: 'x2',
        desc: 'Mayor rentabilidad reduciendo costes operativos innecesarios.',
        icon: 'trending_up'
    }
];

const SuccessCases: React.FC = () => {
    return (
        <section className="py-24 bg-slate-950 px-6 border-t border-white/5 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">

                <div className="mb-16 text-center">
                    <h3 className="text-blue-500 font-mono text-sm tracking-[0.2em] uppercase mb-4">
                        Impacto Real
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                        Resultados que <span className="text-blue-500">Escalan</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((c, i) => (
                        <div key={i} className="group p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all hover:bg-slate-900 duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-blue-500">{c.icon}</span>
                            </div>

                            <div className="relative z-10">
                                <div className="text-5xl font-black text-white mb-2 tracking-tighter">
                                    {c.metric}
                                </div>
                                <h4 className="text-xl font-bold text-blue-400 mb-3">
                                    {c.title}
                                </h4>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {c.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SuccessCases;
