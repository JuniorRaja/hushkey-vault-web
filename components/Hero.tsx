import React from 'react';
import { ArrowRight, Lock, ShieldCheck, WifiOff, FileKey } from 'lucide-react';
import { Button } from './ui/Button';
import { SectionId } from '../types';
import { ScrollReveal } from './ui/ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-600/20 rounded-full blur-[100px] opacity-50 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] opacity-30 animate-float-delayed"></div>
      </div>

      {/* ECG-like Pulsating Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Horizontal ECG Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-ecg-wave-1"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/25 to-transparent animate-ecg-wave-2"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-ecg-wave-3"></div>

        {/* Vertical Pulse Lines */}
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-pulse-vertical-1"></div>
        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse-vertical-2"></div>
        <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-400/25 to-transparent animate-pulse-vertical-3"></div>



        {/* Glowing Grid Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-900/5 animate-grid-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <ScrollReveal animation="fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
            New: Version 2.0 with Guardian Scanner
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal animation="slide-up" delay={100}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 font-display">
            Your Digital Life, <br />
            <span className="gradient-text">Secured & Simplified</span>
          </h1>
        </ScrollReveal>

        {/* Subhead */}
        <ScrollReveal animation="slide-up" delay={200}>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10 leading-relaxed font-sans">
            HushKey Vault is a zero-knowledge password manager with military-grade encryption, 
            intelligent security scanning, and seamless offline access. Take control of your digital identity.
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal animation="slide-up" delay={300}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a href="https://hushkey.vercel.app">
              <Button variant="primary" size="lg" icon={<ArrowRight className="h-5 w-5" />} className="group" pulse>
                Start Securing Now
              </Button>
            </a>
            <a href="https://hushkey.vercel.app">
              <Button variant="outline" size="lg">
                View Live Demo
              </Button>
            </a>
          </div>
        </ScrollReveal>

        {/* Trust Stats */}
        <ScrollReveal animation="fade-in" delay={500}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-12">
            <div className="flex flex-col items-center hover:transform hover:scale-105 transition-transform duration-300 cursor-default group">
              <div className="flex items-center text-primary-400 mb-2">
                <Lock className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                <span className="font-mono font-bold">AES-256-GCM</span>
              </div>
              <span className="text-sm text-gray-500">Encryption Standard</span>
            </div>
            <div className="flex flex-col items-center hover:transform hover:scale-105 transition-transform duration-300 cursor-default group">
              <div className="flex items-center text-emerald-400 mb-2">
                <ShieldCheck className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                <span className="font-bold font-display">9.4/10</span>
              </div>
              <span className="text-sm text-gray-500">Security Rating</span>
            </div>
            <div className="flex flex-col items-center hover:transform hover:scale-105 transition-transform duration-300 cursor-default group">
              <div className="flex items-center text-blue-400 mb-2">
                <WifiOff className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                <span className="font-bold font-display">100%</span>
              </div>
              <span className="text-sm text-gray-500">Offline Capable</span>
            </div>
            <div className="flex flex-col items-center hover:transform hover:scale-105 transition-transform duration-300 cursor-default group">
              <div className="flex items-center text-rose-400 mb-2">
                <FileKey className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                <span className="font-bold font-display">Zero-Know</span>
              </div>
              <span className="text-sm text-gray-500">Architecture</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
