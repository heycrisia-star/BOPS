import React, { useRef } from 'react';
import { GlassButton, GlassFilter } from './ui/LiquidGlass';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollToCalc = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('ai-assistant');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* 1. VIDEO BACKGROUND (Full Screen) */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          src="https://pppwfgqjnfdprcpbzudk.supabase.co/storage/v1/object/sign/bops/ezgif.com-video-to-webp-converter%20(1).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hY2Y3MDNhOS03NTRlLTQ3OGItYTRiYy0wMjE4MjA1MTY1NjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib3BzL2V6Z2lmLmNvbS12aWRlby10by13ZWJwLWNvbnZlcnRlciAoMSkubXA0IiwiaWF0IjoxNzY4MTY3OTA5LCJleHAiOjIwODM1Mjc5MDl9.uYjb_HfMHedwoq2RsDmmmpEVowzoOXswklfqWCxUILU"
        />

        {/* TINT OVERLAY: Blue/Cyan mix to match site identity */}
        <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 pointer-events-none"></div>

        {/* BOTTOM GRADIENT: Transition to Slate-50 (Page BG) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/10 to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* 2. CONTENT (Pushed to bottom/sides) */}
      <div className="absolute bottom-0 left-0 w-full z-20 p-8 md:p-12 flex flex-col md:flex-row items-end justify-between gap-8">

        {/* Left Side: Pill + Description */}
        <div className="text-left max-w-lg">
          {/* PILL - High Contrast for light gradient area */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-slate-700 text-[10px] font-bold tracking-widest uppercase">Next-Gen Automation</span>
          </div>

          {/* Description - Light Theme (Dark Text) */}
          <p className="text-slate-900 text-lg md:text-xl font-medium leading-relaxed drop-shadow-none">
            Tecnología compleja, hecha simple para ti. <br />
            <span className="text-slate-600 font-light text-base">Impulsamos tu negocio con IA.</span>
          </p>
        </div>

        {/* Right Side: CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {/* CONTRATAR - Liquid Glass */}
          <GlassButton
            href="https://wa.me/34691708138"
            target="_blank"
            className="text-slate-900"
          >
            <span className="material-symbols-outlined text-[20px] text-blue-600">handshake</span>
            <span className="font-bold tracking-wide uppercase text-sm">Consultoría</span>
          </GlassButton>

          {/* FORMACION - Liquid Glass */}
          <GlassButton
            href="#about"
            className="text-slate-900"
          >
            <span className="material-symbols-outlined text-[20px] text-cyan-500">school</span>
            <span className="font-bold tracking-wide uppercase text-sm">Formación</span>
          </GlassButton>
        </div>

      </div>

      {/* Glass Filter Definition for the Liquid Effect */}
      <GlassFilter />

      {/* SCROLL INDICATOR - Dark color for Slate-50 background compatibility */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-20">
        <span className="material-symbols-outlined text-slate-400 text-2xl">keyboard_arrow_down</span>
      </div>

    </section>
  );
};

export default Hero;
