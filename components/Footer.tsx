
import React from 'react';

const Footer: React.FC = () => {
  return (

    <footer className="px-6 py-24 text-center bg-transparent border-t border-slate-200/50 relative overflow-hidden backdrop-blur-sm">
      {/* Glow decorativo de fondo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-slate-200/50 rounded-full blur-[100px] -z-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto bg-transparent backdrop-blur-sm p-8 md:p-12 rounded-[32px] border border-white/50 shadow-sm">
        <h3 className="text-[32px] md:text-[48px] font-[950] text-slate-900 mb-4 tracking-tighter leading-none">
          ¿Hablamos de tu <span className="text-blue-600">arquitectura?</span>
        </h3>
        <p className="text-[16px] md:text-[18px] text-slate-600 mb-12 max-w-[450px] mx-auto font-medium leading-relaxed">
          Escala tu operativa con sistemas que no fallan. Cuéntanos tu reto y nosotros diseñamos la infraestructura.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8">
          {[
            { label: 'Email', icon: 'mail', href: 'mailto:cristiianguti@gmail.com', color: 'decoration-violet-500' },
            { label: 'Móvil', icon: 'call', href: 'tel:+34691708138', color: 'decoration-emerald-500' },
            { label: 'Instagram', icon: 'photo_camera', href: 'https://www.instagram.com/heycrisia/', color: 'decoration-pink-500' },
            { label: 'YouTube', icon: 'play_circle', href: 'https://www.youtube.com/@Heycrisia', color: 'decoration-red-500' }
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-slate-100 transition-all w-24 md:w-32"
            >
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white group-hover:scale-110 transition-transform backdrop-blur-md">
                <span className="material-symbols-outlined text-slate-400 text-xl group-hover:text-slate-900">{item.icon}</span>
              </div>
              <span className={`text-[12px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-slate-900 group-hover:underline ${item.color} underline-offset-4 transition-colors`}>{item.label}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center pt-24 border-t border-slate-200 mt-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Sistemas 100% Optimizados</span>
          </div>
          <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.5em]">
            BUILDERSOPS © 2026 • TODOS LOS DERECHOS RESERVADOS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
