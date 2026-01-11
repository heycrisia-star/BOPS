
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
import SalesAutomationLanding from './components/SalesAutomationLanding';
import CustomerSupportLanding from './components/CustomerSupportLanding';

const App: React.FC = () => {
  const [view, setView] = React.useState<'home' | 'sales-automation' | 'customer-support'>('home');

  const handleNavigateToSales = () => {
    setView('sales-automation');
    window.scrollTo(0, 0);
  };

  const handleNavigateToSupport = () => {
    setView('customer-support');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setView('home');
    window.scrollTo(0, 0); // Or scroll to #method if preferred, but top is safer
  };

  const handleNavigateToContact = () => {
    // If we are in landing, we might want to go to contact section of home, or just open bot
    // Ideally, the "Agenda una demo" just opens the bot/contact form.
    // For now, let's assume it scrolls to contact section on Home.
    setView('home');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div id="top" className="min-h-screen flex flex-col text-slate-900 overflow-x-hidden relative selection:bg-cyan-500/30 selection:text-cyan-900 bg-slate-50">

      {/* GLOBAL BACKGROUNDS - Keep pixel trail/threads only on Home or both? Landing has its own dark bg. */}
      {view === 'home' && (
        <>
          <div className="hidden md:block" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
            <PixelTrail
              gridSize={46}
              trailSize={0.05}
              maxAge={150}
              interpolate={2.5}
              color="#94a3b8"
              gooeyFilter={undefined}
            />
          </div>

          <div className="fixed inset-0 z-0 bg-slate-50">
            <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
              <Threads
                color={[0.95, 0.95, 0.95]}
                amplitude={1.5}
                distance={0.2}
                enableMouseInteraction={false}
              />
            </div>
          </div>
        </>
      )}


      <Navbar />

      {view === 'home' ? (
        <>
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
              <HowWeBuild
                onNavigateToSales={handleNavigateToSales}
                onNavigateToSupport={handleNavigateToSupport}
              />
            </div>

            <div id="about">
              <AboutMe />
            </div>
          </main>

          <div id="contact" className="max-w-7xl mx-auto w-full border-x border-slate-200/50">
            <Footer />
          </div>
        </>
      ) : view === 'sales-automation' ? (
        <SalesAutomationLanding
          onBack={handleBackToHome}
          onNavigateToContact={handleNavigateToContact}
        />
      ) : (
        <CustomerSupportLanding
          onBack={handleBackToHome}
          onNavigateToContact={handleNavigateToContact}
        />
      )}
    </div>
  );
};

export default App;
