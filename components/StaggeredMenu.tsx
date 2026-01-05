
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import LetterGlitch from './LetterGlitch';
import './StaggeredMenu.css';

interface MenuItem {
  label: string;
  ariaLabel?: string;
  link: string;
}

interface StaggeredMenuProps {
  position?: 'left' | 'right';
  colors?: string[];
  items?: MenuItem[];
  isFixed?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  logoUrl?: string;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  colors = ['#0f172a', '#1e293b', '#2563eb'],
  items = [],
  isFixed = true,
  onMenuOpen,
  onMenuClose,
  logoUrl
}) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const panelRef = useRef<HTMLElement>(null);
  const preLayersRef = useRef<HTMLDivElement>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);
  const iconRef = useRef<HTMLSpanElement>(null);
  const textInnerRef = useRef<HTMLDivElement>(null);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;
      if (!panel || !icon || !textInner) return;

      let preLayers: HTMLElement[] = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen });
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      gsap.set(textInner, { yPercent: 0 });
    });
    return () => ctx.revert();
  }, [position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    const itemLabels = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const contactInfo = panel.querySelector('.sm-panel-contact');

    const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }));
    const panelStart = Number(gsap.getProperty(panel, 'xPercent'));

    if (itemLabels.length) {
      gsap.set(itemLabels, { yPercent: 140, rotate: 5 });
    }
    if (contactInfo) {
      gsap.set(contactInfo, { opacity: 0, y: 20 });
    }

    const tl = gsap.timeline({ paused: true });
    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });
    tl.fromTo(panel, { xPercent: panelStart }, { xPercent: 0, duration: 0.65, ease: 'power4.out' }, (layerStates.length * 0.07) + 0.05);

    if (itemLabels.length) {
      tl.to(itemLabels, { yPercent: 0, rotate: 0, duration: 0.8, ease: 'power4.out', stagger: 0.1 }, "-=0.3");
    }
    if (contactInfo) {
      tl.to(contactInfo, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, "-=0.4");
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);

    if (target) {
      onMenuOpen?.();
      const tl = buildOpenTimeline();
      tl?.play(0);
    } else {
      onMenuClose?.();
      const panel = panelRef.current;
      const layers = preLayerElsRef.current;
      if (!panel) return;
      const offscreen = position === 'left' ? -100 : 100;
      gsap.to([...layers, panel], { xPercent: offscreen, duration: 0.4, ease: 'power3.inOut' });
    }

    const icon = iconRef.current;
    if (icon) gsap.to(icon, { rotate: target ? 225 : 0, duration: 0.6, ease: 'power3.out' });

    const inner = textInnerRef.current;
    if (inner) {
      gsap.to(inner, { yPercent: target ? -50 : 0, duration: 0.4, ease: 'power2.inOut' });
    }
  }, [buildOpenTimeline, position, onMenuOpen, onMenuClose]);

  return (
    <div className={`staggered-menu-root ${isFixed ? 'is-fixed' : ''} ${open ? 'menu-is-open' : ''}`}>
      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {colors.map((c, i) => <div key={i} className="sm-prelayer" style={{ background: c }} />)}
      </div>

      <header className="sm-header">
        <div className={`sm-header-inner flex ${logoUrl ? 'justify-between' : 'justify-end'} items-center`}>
          {logoUrl && (
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg shadow-lg shadow-blue-900/20 overflow-hidden">
                <img src={logoUrl} alt="Logo" className="h-10 md:h-14 w-auto object-contain mix-blend-multiply" />
              </div>
              <span className="text-[12px] md:text-[14px] font-black text-white tracking-tighter uppercase hidden sm:block">BuildersOps</span>
            </div>
          )}
          <button className="sm-menu-trigger" onClick={toggleMenu} aria-label="Menu">
            <div className="sm-trigger-text-box">
              <div ref={textInnerRef} className="sm-trigger-text-inner">
                <span className="sm-label">MENU</span>
                <span className="sm-label">CLOSE</span>
              </div>
            </div>
            <span ref={iconRef} className="sm-plus-icon">
              <span className="sm-plus-line sm-h" />
              <span className="sm-plus-line sm-v" />
            </span>
          </button>
        </div>
      </header>

      <aside ref={panelRef} className="sm-side-panel">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <LetterGlitch glitchColors={['#2563eb', '#3b82f6', '#0f172a']} />
        </div>

        <div className="sm-panel-content relative z-10">
          <div className="sm-panel-grid">
            <div className="sm-panel-contact order-2 md:order-1">
              <div className="mb-10">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] block mb-4">Direct Ops Contact</span>
                <div className="space-y-6">
                  <a href="tel:+34691708138" className="group block">
                    <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">PHONE</p>
                    <p className="text-[20px] md:text-[24px] font-black text-white group-hover:text-blue-400 transition-colors tracking-tight">+34 691 708 138</p>
                  </a>
                  <a href="mailto:info@buildersops.xyz" className="group block">
                    <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">EMAIL</p>
                    <p className="text-[20px] md:text-[24px] font-black text-white group-hover:text-blue-400 transition-colors tracking-tight">info@buildersops.xyz</p>
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800 mt-auto">
                <p className="text-[9px] text-slate-300 font-black uppercase tracking-[0.5em]">BUILDERSOPS © 2026</p>
              </div>
            </div>

            <nav className="sm-nav order-1 md:order-2">
              {items.map((it, idx) => (
                <a key={idx} className="sm-nav-link" href={it.link} onClick={() => toggleMenu()}>
                  <span className="sm-panel-itemLabel">{it.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default StaggeredMenu;
