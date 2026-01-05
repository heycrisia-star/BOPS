
import React from 'react';
import Hero from './components/Hero';
import HowWeBuild from './components/HowWeBuild';
import Footer from './components/Footer';
import AIArchitectAssistant from './components/AIArchitectAssistant';
import AboutMe from './components/AboutMe';
import ContactBot from './components/ContactBot';
import StaggeredMenu from './components/StaggeredMenu';

const App: React.FC = () => {
  const menuItems = [
    { label: 'CALCULADORA', link: '#ai-assistant' },
    { label: 'MÉTODO', link: '#method' },
    { label: 'SOBRE MÍ', link: '#about' },
  ];

  return (
    <div id="top" className="min-h-screen flex flex-col bg-white overflow-x-hidden relative">
      <StaggeredMenu
        items={menuItems}
        colors={['#0f172a', '#1e293b', '#2563eb']}
        logoUrl="/logo.png"
      />

      <ContactBot />

      <main className="flex-grow max-w-5xl mx-auto w-full border-x border-slate-50 shadow-sm bg-white">
        <Hero />

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

      <div className="max-w-5xl mx-auto w-full border-x border-slate-50">
        <Footer />
      </div>
    </div>
  );
};

export default App;
