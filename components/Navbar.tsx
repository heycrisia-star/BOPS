import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StaggeredMenu from './StaggeredMenu';

const Navbar: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Inicio');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'Inicio', link: '#top' },
        { label: 'Servicios', link: '#method' },
        { label: 'Calculadora ROI', link: '#ai-assistant' },
        { label: 'Resultados', link: '#testimonials' },
        { label: 'Sobre mí', link: '#about' },
        { label: 'Contacto', link: '#contact' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center items-center px-4"
        >
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-center">

                {/* LOGO */}
                <div className="flex-shrink-0 mr-8 md:mr-10">
                    <img
                        src="/buildersops-logo.png"
                        alt="BuildersOps"
                        className="h-24 md:h-28 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                    />
                </div>

                {/* DESKTOP PILL MENU */}
                <div className={`
                    hidden md:flex items-center p-1.5 rounded-full border transition-all duration-300
                    ${scrolled ? 'bg-white/80 border-slate-200/50 backdrop-blur-md shadow-lg shadow-black/5' : 'bg-white/40 border-slate-200/30 backdrop-blur-sm'}
                `}>
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.link}
                            onClick={() => setActiveTab(item.label)}
                            className="relative px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                        >
                            {activeTab === item.label && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className={`relative z-10 ${activeTab === item.label ? 'text-cyan-700 font-bold' : 'text-slate-600 hover:text-slate-900'}`}>
                                {item.label}
                            </span>
                            {activeTab === item.label && (
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.4)]"></span>
                            )}
                        </a>
                    ))}
                </div>

                {/* MOBILE MENU (StaggeredMenu) */}
                <div className="md:hidden pt-4">
                    <StaggeredMenu items={menuItems} />
                </div>

                {/* CTA Button separated - Hidden on mobile as StaggeredMenu covers nav */}
                <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                    className="hidden lg:flex px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full text-sm hover:shadow-[0_0_20px_-5px_rgba(34,211,238,0.6)] hover:scale-105 transition-all shadow-lg"
                >
                    REVISAMOS TU CASO GRATIS
                </button>

            </div>
        </motion.nav>
    );
};

export default Navbar;
