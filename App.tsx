
import React from 'react';
import Hero from './components/Hero';
import HowWeBuild from './components/HowWeBuild';
import Footer from './components/Footer';
import AIArchitectAssistant from './components/AIArchitectAssistant';
import AboutMe from './components/AboutMe';
import ContactBot from './components/ContactBot';
import Squares from './components/Squares';
import Navbar from './components/Navbar';
import Threads from './components/Threads';

import SuccessCases from './components/SuccessCases';
import Metrics from './components/Metrics';
import PixelTrail from './components/PixelTrail';

const App: React.FC = () => {
  const menuItems = [ // This array is unused now with Navbar, but keeping to minimize diff noise if desired, or can remove.
    { label: 'SERVICIOS', link: '#method' },
    { label: 'CALCULADORA', link: '#ai-assistant' },
    { label: 'TESTIMONIOS', link: '#testimonials' },
    { label: 'SOBRE MÍ', href: '#about' }, // Fixed typo in previous array but irrelevant now as Navbar handles it.
  ];

  return (
    <div id="top" className="min-h-screen flex flex-col text-slate-100 overflow-x-hidden relative selection:bg-cyan-500/30 selection:text-cyan-200">
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
        <PixelTrail
          gridSize={46}
          trailSize={0.05}
          maxAge={150}
          interpolate={2.5}
          color="#2d00f5"
        />
      </div>

      <div className="fixed inset-0 z-0 bg-[#0f172a]">
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
          <Threads
            color={[0.05, 0.2, 0.4]} // Even darker for mobile matching
            amplitude={1.5}
            distance={0.2}
            enableMouseInteraction={false}
          />
        </div>
      </div>


      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* METRICS SECTION */}
      <Metrics />

      <ContactBot />

      <main className="flex-grow max-w-7xl mx-auto w-full relative z-10">

        <div id="testimonials">
          <SuccessCases />
        </div>

        <div id="ai-assistant">
          <AIArchitectAssistant />
        </div>

        <div id="method">
          <HowWeBuild />
        </div>

        <div id="about">
          <AboutMe />
        </div>
      </main>

      <div id="contact" className="max-w-7xl mx-auto w-full border-x border-white/5">
        <Footer />
      </div>
    </div>
  );
};

export default App;
