
import React, { useState } from 'react';

const ContactBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Listen for navbar trigger
  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-contact', handleOpen);
    return () => window.removeEventListener('open-contact', handleOpen);
  }, []);

  const contactOptions = [
    {
      label: 'Email',
      icon: 'mail',
      action: () => window.location.href = 'mailto:cristiianguti@gmail.com',
      color: 'text-violet-400',
      bg: 'hover:bg-violet-500/10 border-violet-500/30'
    },
    {
      label: 'Móvil',
      icon: 'call',
      action: () => window.location.href = 'tel:+34691708138',
      color: 'text-emerald-400',
      bg: 'hover:bg-emerald-500/10 border-emerald-500/30'
    },
    {
      label: 'Instagram',
      icon: 'photo_camera',
      action: () => window.open('https://www.instagram.com/heycrisia/', '_blank'),
      color: 'text-pink-400',
      bg: 'hover:bg-pink-500/10 border-pink-500/30'
    },
    {
      label: 'YouTube',
      icon: 'play_circle',
      action: () => window.open('https://www.youtube.com/@Heycrisia', '_blank'),
      color: 'text-red-400',
      bg: 'hover:bg-red-500/10 border-red-500/30'
    }
  ];

  return (
    <>
      {/* Botón Flotante */}
      {/* Botón Flotante REMOVED per user request (triggered by Navbar now) */}
      <div className="hidden"></div>

      {/* Menú de Contacto - TRANSPARENT GLASS */}
      {
        isOpen && (
          <div className="fixed bottom-24 right-4 md:right-8 w-[300px] md:w-[320px] flex flex-col gap-3 z-[99] animate-in slide-in-from-bottom-10 fade-in duration-300 origin-bottom-right">

            <div className="p-1 rounded-2xl bg-slate-950/70 backdrop-blur-3xl border border-white/20 shadow-2xl overflow-hidden ring-1 ring-white/10 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors z-50"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
              <div className="px-6 py-4 border-b border-white/5 bg-white/5">
                <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-cyan-400 pr-6">REVISAMOS TU CASO GRATIS</h4>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Mensaje enviado (Simulado)"); setIsOpen(false); }}>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Nombre</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Móvil o Email</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="Contacto directo" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">¿Qué te interesa diseñar?</label>
                    <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none transition-colors h-20 resize-none" placeholder="Breve descripción..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-bold text-sm shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-[1.02]">
                    ENVIAR SOLICITUD
                  </button>
                  <p className="text-[10px] text-slate-500 text-center">
                    Te contactaremos en menos de 24h.
                  </p>
                </form>
              </div>
            </div>

          </div>
        )
      }
    </>
  );
};

export default ContactBot;
