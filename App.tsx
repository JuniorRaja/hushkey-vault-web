import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SecurityArchitecture } from './components/SecurityArchitecture';
import { ComparisonTable } from './components/ComparisonTable';
import { Footer } from './components/Footer';
import { Button } from './components/ui/Button';
import { ScrollReveal } from './components/ui/ScrollReveal';

// Pages
import { Documentation } from './components/pages/Documentation';
import { ApiDocs } from './components/pages/ApiDocs';
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import { SecurityWhitepaper } from './components/pages/SecurityWhitepaper';
import { TermsOfService } from './components/pages/TermsOfService';

type View = 'home' | 'docs' | 'api' | 'privacy' | 'security' | 'terms';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  useEffect(() => {
    // Scroll to top when view changes
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleNavigate = (view: string) => {
    setCurrentView(view as View);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'docs':
        return <Documentation />;
      case 'api':
        return <ApiDocs />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'security':
        return <SecurityWhitepaper />;
      case 'terms':
        return <TermsOfService />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            
            {/* Value Prop Banner */}
            <section className="border-y border-gray-800 bg-gray-900/30 py-12">
                <ScrollReveal animation="fade-in">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                      <p className="text-2xl md:text-3xl font-light text-gray-300 font-display">
                          "Traditional password managers require internet. We don't. <br/>
                          <span className="font-bold text-white">Work anywhere, sync when you're ready.</span>"
                      </p>
                  </div>
                </ScrollReveal>
            </section>

            <SecurityArchitecture />
            <Features />
            
            {/* Simple Pricing Teaser */}
            <section id="pricing" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <ScrollReveal>
                      <h2 className="text-3xl font-bold text-white mb-6 font-display">Security Should Be Accessible</h2>
                      <p className="text-gray-400 mb-10 text-lg">
                          We believe basic security is a human right. That's why our core features—including unlimited vaults, 
                          offline access, and the Guardian scanner—are completely free.
                      </p>
                    </ScrollReveal>
                    <ScrollReveal animation="scale-in" delay={200}>
                      <div className="flex justify-center">
                          <div className="p-8 rounded-2xl bg-gray-800/50 border border-primary-500/30 max-w-sm w-full relative overflow-hidden group hover:border-primary-500/60 transition-colors duration-300 shadow-2xl">
                              <div className="absolute inset-0 bg-primary-600/10 blur-xl group-hover:bg-primary-600/20 transition-colors duration-500"></div>
                              <h3 className="text-2xl font-bold text-white mb-2 relative z-10 font-display">Personal Plan</h3>
                              <div className="text-4xl font-bold text-primary-400 mb-6 relative z-10 font-mono">$0<span className="text-lg text-gray-500 font-normal font-sans">/mo</span></div>
                              <ul className="text-left text-gray-300 space-y-3 mb-8 relative z-10">
                                  <li className="flex items-center"><span className="mr-2 text-emerald-400">✓</span> Unlimited Items</li>
                                  <li className="flex items-center"><span className="mr-2 text-emerald-400">✓</span> Guardian Scanner</li>
                                  <li className="flex items-center"><span className="mr-2 text-emerald-400">✓</span> Offline Sync</li>
                                  <li className="flex items-center"><span className="mr-2 text-emerald-400">✓</span> 12+ Item Types</li>
                              </ul>
                              <Button variant="primary" className="w-full relative z-10 group-hover:shadow-primary-600/50" pulse>Create Free Vault</Button>
                          </div>
                      </div>
                    </ScrollReveal>
                </div>
            </section>

            <ComparisonTable />

            {/* Final CTA */}
            <section className="py-24 relative overflow-hidden">
                 <div className="absolute inset-0 bg-primary-900/10"></div>
                 <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <ScrollReveal>
                      <h2 className="text-4xl font-bold text-white mb-6 font-display">Ready to secure your digital life?</h2>
                      <p className="text-xl text-gray-400 mb-10">
                          Join thousands of developers and privacy advocates who have switched to HushKey.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://hushkey.vercel.app">
                          <Button variant="primary" size="lg" pulse>Get Started Free</Button>
                        </a>
                      </div>
                      <p className="mt-6 text-sm text-gray-500">No credit card required. Import from LastPass supported.</p>
                    </ScrollReveal>
                 </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-primary-500/30">
      <Navbar onNavigate={handleNavigate} currentView={currentView} />
      
      <main>
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
