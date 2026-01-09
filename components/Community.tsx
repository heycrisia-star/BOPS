
import React from 'react';

const Community: React.FC = () => {
  return (
    <section className="px-6 py-16">
      <div className="mb-12">
        <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Recomendado</div>
        <h3 className="text-[24px] font-black text-slate-900 mb-4 tracking-tight">La Comunidad</h3>
        <p className="text-[15px] text-slate-600 leading-relaxed mb-8">
          Únete a nuestro espacio en <b>Skool</b>. Sin distracciones, solo ingenieros de operaciones compartiendo blueprints reales y resolviendo problemas técnicos.
        </p>

        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {[10, 11, 12, 13].map((i) => (
              <img
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                src={`https://picsum.photos/seed/${i}/100/100`}
                alt="Miembro"
              />
            ))}
          </div>
          <span className="text-[13px] font-bold text-slate-400">+400 expertos activos</span>
        </div>
      </div>

      <div className="relative mt-20 p-8 rounded-[32px] bg-slate-50 border border-slate-100">


        <div className="pt-10">
          <h4 className="text-[18px] font-black text-slate-900 leading-none">El Arquitecto</h4>

          <p className="text-[15px] text-slate-600 italic leading-relaxed font-medium">
            "Mi misión no es venderte un curso. Es enseñarte a pensar en sistemas para que seas el dueño de una infraestructura que no para nunca."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
