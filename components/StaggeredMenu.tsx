import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './StaggeredMenu.css';

const menuItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
};

interface MenuItem {
  label: string;
  ariaLabel?: string;
  link: string;
}

interface StaggeredMenuProps {
  items?: MenuItem[];
  logoUrl?: string; // Kept for prop compatibility but unused
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  items = [],
  logoUrl
}) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className={`staggered-menu-root ${open ? 'menu-is-open' : ''}`}>
      <header className="sm-header">
        <div className="sm-header-inner flex justify-end items-center">

          <button className="sm-menu-trigger" onClick={toggleMenu} aria-label="Menu" style={{ position: 'relative', zIndex: 99999 }}>
            <div className="sm-trigger-text-box">
              <div className="sm-trigger-text-inner">
                <span className="sm-label text-white">{open ? 'CLOSE' : 'MENU'}</span>
              </div>
            </div>
            <span className={`sm-plus-icon ${open ? 'rotate-45' : ''} transition-transform duration-300`}>
              <span className="sm-plus-line sm-h bg-white" />
              <span className="sm-plus-line sm-v bg-white" />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9990] bg-[#020617]"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            <div className="h-full flex flex-col justify-center px-6 md:px-20 relative z-10 overflow-y-auto">
              <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center py-20">

                {/* MENU LINKS */}
                <div className="space-y-6">
                  {items.map((item, i) => (
                    <motion.div
                      key={item.label}
                      custom={i}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <a
                        href={item.link}
                        onClick={toggleMenu}
                        className="block text-[48px] md:text-[80px] font-[1000] text-transparent stroke-text hover:text-white transition-all duration-300 uppercase tracking-tighter leading-[0.9]"
                        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
                      >
                        {item.label}
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* INFO */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="hidden lg:block space-y-12 text-left"
                >
                  <div>
                    <h4 className="text-blue-500 font-black text-[14px] uppercase tracking-[0.2em] mb-4">Direct Ops Contact</h4>
                    <p className="text-[12px] font-bold text-slate-500 uppercase mb-2">Phone</p>
                    <a href="tel:+34691708138" className="text-[32px] font-[900] text-white tracking-tight hover:text-blue-500 transition-colors">+34 691 708 138</a>
                  </div>

                  <div>
                    <p className="12px] font-bold text-slate-500 uppercase mb-2">Email</p>
                    <a href="mailto:info@buildersops.xyz" className="text-[32px] font-[900] text-white tracking-tight hover:text-blue-500 transition-colors">
                      info@buildersops.xyz
                    </a>
                  </div>

                  <div className="pt-12 border-t border-slate-800">
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">BuildersOps © 2026</p>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StaggeredMenu;
