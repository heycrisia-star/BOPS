
import React from 'react';
import Hero from './components/Hero';
import HowWeBuild from './components/HowWeBuild';
import Footer from './components/Footer';
import AIArchitectAssistant from './components/AIArchitectAssistant';
import AboutMe from './components/AboutMe';
import ContactBot from './components/ContactBot';
import StaggeredMenu from './components/StaggeredMenu';
import SuccessCases from './components/SuccessCases';

const App: React.FC = () => {
  const menuItems = [
    { label: 'CALCULADORA', link: '#ai-assistant' },
    { label: 'MÉTODO', link: '#method' },
    { label: 'SOBRE MÍ', link: '#about' },
  ];

  return (
    <div id="top" className="min-h-screen flex flex-col bg-slate-950 text-white overflow-x-hidden relative selection:bg-blue-500/30 selection:text-blue-200">
      <StaggeredMenu
        items={menuItems}
        colors={['#0B1121', '#1e293b', '#3b82f6']}
        logoUrl="https://res.cloudinary.com/dk7xpxrvh/image/upload/v1767147299/asasasasasa_uyedrh.jpg"
      />

      <ContactBot />

      <main className="flex-grow max-w-7xl mx-auto w-full border-x border-white/5 shadow-2xl shadow-blue-900/5 bg-slate-950 relative z-10">
        <Hero />

        <SuccessCases />

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

      <div className="max-w-7xl mx-auto w-full border-x border-white/5">
        <Footer />
      </div>
    </div>
  );
};

export default App;
