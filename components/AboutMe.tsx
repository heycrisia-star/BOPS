
import React from 'react';
import ProfileCard from './ProfileCard';

const AboutMe: React.FC = () => {
  return (
    <section className="px-6 py-32 bg-[#020617] border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="mb-16 text-center">
        <h3 className="text-[42px] font-black text-white tracking-tighter leading-none">
          Operaciones con <span className="text-blue-600">autoridad.</span>
        </h3>
      </div>

      {/* Cambiado items-center por md:items-start para subir la foto */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20 max-w-5xl mx-auto">
        {/* Añadido md:mt-2 para alineación precisa con el texto */}
        <div className="w-full max-w-[340px] flex-shrink-0 md:mt-2 flex flex-col items-center">
          <ProfileCard
            avatarUrl="https://res.cloudinary.com/dk7xpxrvh/image/upload/v1767581792/Gemini_Generated_Image_i3kgpci3kgpci3kg_tmmh8a.png"
          />

          {/* Founder Badge (Relocated) */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-700/50 rounded-2xl mt-8 shadow-lg shadow-blue-500/10 hover:border-blue-500/30 transition-colors">
            <img
              src="https://res.cloudinary.com/dk7xpxrvh/image/upload/v1767147299/asasasasasa_uyedrh.jpg"
              alt="BuildersOps Logo"
              className="h-8 w-auto object-contain"
              style={{ mixBlendMode: 'screen', filter: 'invert(1) grayscale(100%) brightness(200%) contrast(150%)' }}
            />
            <div className="h-4 w-[1px] bg-slate-700"></div>
            <span className="text-xs font-black text-white tracking-widest uppercase">Founder Builders Ops</span>
          </div>
        </div>

        <div className="max-w-md space-y-8">
          <p className="text-[24px] md:text-[28px] text-white leading-tight font-black tracking-tight">
            Soy <span className="text-blue-500">Cristian Gutiérrez</span>. <br />
            Ingeniero con 15 años de trayectoria en dirección operativa.
          </p>

          <div className="w-16 h-1.5 bg-blue-600 rounded-full"></div>

          <div className="space-y-6 text-[16px] text-slate-400 leading-relaxed font-medium">
            <p>
              Mi visión no nace solo de la teoría. Se ha forjado durante más de <b>15 años</b> liderando sectores operativos críticos como el <b>Petróleo, Retail y Casual Dining</b>. Entiendo el lenguaje de los resultados, los procesos masivos y la eficiencia real en entornos de alta presión.
            </p>
            <p>
              Tras 3 años de especialización en el ecosistema de IA, mi propósito es fusionar esa experiencia de campo con la automatización avanzada. No solo diseño flujos; construyo infraestructuras que soportan el peso de un negocio que escala.
            </p>
          </div>

          <div className="pt-6">
            <div className="p-8 rounded-[32px] bg-slate-900/50 border border-slate-800 shadow-sm relative group transition-all hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5">
              <span className="material-symbols-outlined text-blue-500 text-[32px] mb-4 opacity-40">engineering</span>
              <p className="text-[17px] font-bold text-slate-300 leading-relaxed">
                "La IA sin una base operativa sólida es solo un juguete. Yo te doy la ingeniería que tu rentabilidad necesita."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
