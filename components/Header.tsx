import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-end px-6 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-50">
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Estado del Sistema</p>
          <p className="text-[10px] font-bold text-blue-600 uppercase">Operativo 100%</p>
        </div>
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
      </div>
    </header>
  );
};

export default Header;