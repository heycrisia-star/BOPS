import React from 'react';
import CountUp from './CountUp';
import ScrollVelocity from './ScrollVelocity';

const cases = [
    {
        title: 'Legacy Tours Spain',
        metric: 'DISEÑO WEB & MARCA',
        desc: 'Cristian entendió a la perfección la esencia de nuestra marca. La web ahora transmite el lujo y la exclusividad que siempre buscamos. ¡Mil gracias por este cambio radical!',
        icon: 'public',
        link: 'https://www.legacytoursspain.com'
    },
    {
        title: 'Experience TukTuk',
        metric: 'AUTOMATIZACIÓN DE RESERVAS',
        desc: 'Pasamos de gestionar reservas a mano a tener el calendario lleno automáticamente. Nos has ahorrado horas de trabajo administrativo y dolores de cabeza. ¡Un trabajo impecable!',
        icon: 'travel_explore',
        link: 'https://www.experiencetuktuktours.com'
    },
    {
        title: 'Tu Protocolo',
        metric: 'WEB APP & FITNESS',
        desc: 'La plataforma que has creado ha llevado mis asesorías al siguiente nivel. Mis clientes están encantados con lo fácil que es ver sus dietas y entrenos. ¡Gracias por impulsarnos!',
        icon: 'fitness_center',
        link: 'https://tu-protocolo-transformacion.vercel.app'
    },
    {
        title: 'Seven Eight Services',
        metric: 'IA & ODOO CRM',
        desc: 'La integración con Odoo y los bots de llamadas han revolucionado nuestra gestión de incidencias. Ahora todo se conecta solo y el equipo se centra en resolver, no en administrar. ¡Brutal!',
        icon: 'smart_toy',
        link: 'https://www.seveneightservices.es'
    }
];

const SuccessCases: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-transparent">
            {/* Transparent Container */}
            <div className="max-w-6xl mx-auto">

                <div className="mb-20 text-center relative overflow-hidden">
                    {/* Glow effect simplified or removed to avoid 'bad' aesthetic */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] -z-10"></div>

                    <span className="text-[12px] md:text-[14px] font-black text-cyan-500 uppercase tracking-[0.3em] block mb-4">
                        RESULTADOS PROBADOS
                    </span>
                    <h3 className="text-[36px] md:text-[48px] font-[950] text-white tracking-tighter leading-none mx-auto max-w-3xl">
                        Impacto que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Transforma Negocios</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cases.map((c, i) => (
                        <div key={i} className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all hover:bg-slate-900/80 duration-300 relative overflow-hidden flex flex-col justify-between backdrop-blur-md">
                            <div className="relative z-10 mb-6 flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} className="material-symbols-outlined text-yellow-500 text-xl">star</span>
                                ))}
                            </div>

                            <div className="relative z-10 mb-8">
                                <p className="text-slate-300 text-lg leading-relaxed italic font-medium">
                                    "{c.desc}"
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between pt-6 border-t border-slate-700/50 gap-6 md:gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-cyan-900/20 flex items-center justify-center text-cyan-500 font-black text-sm shrink-0">
                                        {c.title.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg md:text-2xl leading-tight mb-1 md:mb-2">
                                            {c.title}
                                        </h4>
                                        <span className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest block">
                                            {c.metric}
                                        </span>
                                    </div>
                                </div>

                                {c.link && (
                                    <a
                                        href={c.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full md:w-auto shrink-0 flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-slate-700/50 text-slate-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-600 transition-all group/link"
                                        title="Ver Proyecto"
                                    >
                                        <span className="text-xs font-bold uppercase tracking-wider">Visitar Web</span>
                                        <span className="material-symbols-outlined text-lg group-hover/link:translate-x-0.5 transition-transform">arrow_outward</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SuccessCases;
