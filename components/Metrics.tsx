import React from 'react';

const Metrics: React.FC = () => {
    const stats = [
        { value: '200+', label: 'Automatizaciones' },
        { value: '98%', label: 'Satisfacción' },
        { value: '24/7', label: 'Soporte' },
        { value: '3x', label: 'ROI Promedio' },
    ];

    return (
        <section className="px-6 py-12 relative z-10">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors group"
                    >
                        <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300 block">
                            {stat.value}
                        </span>
                        <span className="text-slate-400 text-sm md:text-base font-medium uppercase tracking-wider">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Metrics;
