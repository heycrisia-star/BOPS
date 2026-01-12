
import React from 'react';
import Hero from './components/Hero';
import HowWeBuild from './components/HowWeBuild';
import Footer from './components/Footer';
import AIArchitectAssistant from './components/AIArchitectAssistant';
import AboutMe from './components/AboutMe';
import ContactBot from './components/ContactBot';
import Navbar from './components/Navbar';
import Threads from './components/Threads';

import SuccessCases from './components/SuccessCases';
import Metrics from './components/Metrics';
import PixelTrail from './components/PixelTrail';
import SalesAutomationLanding from './components/SalesAutomationLanding';
import CustomerSupportLanding from './components/CustomerSupportLanding';
import OperationsLanding from './components/OperationsLanding';

const App: React.FC = () => {
  const [view, setView] = React.useState<'home' | 'sales-automation' | 'customer-support' | 'operations'>('home');

  const handleNavigateToSales = () => {
    setView('sales-automation');
    window.scrollTo(0, 0);
  };

  const handleNavigateToSupport = () => {
    setView('customer-support');
    window.scrollTo(0, 0);
  };

  const handleNavigateToOperations = () => {
    setView('operations');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  const handleNavigateToContact = () => {
    setView('home');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div id="top" className="min-h-screen flex flex-col text-slate-900 overflow-x-hidden relative selection:bg-cyan-500/30 selection:text-cyan-900 bg-slate-50">

      {view === 'home' && (
        <>
          {/* GLOBAL BACKGROUNDS - Optional if Video covers Hero, but good for other sections */}
          <div className="fixed inset-0 z-0 bg-slate-50">
            <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
              <Threads color={[0.95, 0.95, 0.95]} amplitude={1.5} distance={0.2} enableMouseInteraction={false} />
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

          <main className="flex-grow max-w-7xl mx-auto w-full relative z-10">

            {/* 1. CALCULADORA ROI (AI Architect) */}
            <div id="ai-assistant">
              <AIArchitectAssistant />
            </div>

            {/* 2. SERVICIOS (How We Build) */}
            <div id="method">
              <HowWeBuild
                onNavigateToSales={handleNavigateToSales}
                onNavigateToSupport={handleNavigateToSupport}
                onNavigateToOperations={handleNavigateToOperations}
              />
            </div>

            {/* 3. RESEÑAS (Success Cases) */}
            <div id="testimonials">
              <SuccessCases />
            </div>

            {/* 4. SOBRE MÍ (About Me) */}
            <div id="about">
              <AboutMe />
            </div>

          </main>

          {/* CONTACT SECTION */}
          <ContactBot />

          <div id="contact" className="max-w-7xl mx-auto w-full border-x border-slate-200/50">
            <Footer />
          </div>
        </>
      ) : view === 'sales-automation' ? (
        <SalesAutomationLanding
          onBack={handleBackToHome}
          onNavigateToContact={handleNavigateToContact}
        />
      ) : view === 'customer-support' ? (
        <CustomerSupportLanding
          onBack={handleBackToHome}
          onNavigateToContact={handleNavigateToContact}
        />
      ) : (
        <OperationsLanding
          onBack={handleBackToHome}
          onNavigateToContact={handleNavigateToContact}
        />
      )}
    </div>
  );
};

export default App;
