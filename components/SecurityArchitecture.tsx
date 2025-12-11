import React from 'react';
import { Key, Lock, Shield, FileLock, Server, User } from 'lucide-react';
import { SectionId } from '../types';
import { ScrollReveal } from './ui/ScrollReveal';

export const SecurityArchitecture: React.FC = () => {
  return (
    <section id={SectionId.SECURITY} className="py-24 bg-gray-950 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Zero-Knowledge Architecture</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We never see your data. Encryption happens locally on your device before it ever touches our servers.
              Your master password is the only key, and we don't have it.
            </p>
          </div>
        </ScrollReveal>

        {/* Diagram Container */}
        <ScrollReveal animation="scale-in" delay={200}>
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/50 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
              
              {/* Step 1: User */}
              <div className="flex flex-col items-center text-center w-full md:w-1/4 group cursor-default">
                <div className="w-16 h-16 bg-blue-900/30 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-900/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                  <User className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">You</h3>
                <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">Enters Master Password. <br/>Key derived via PBKDF2 (600k iter).</p>
              </div>

              {/* Arrow 1 */}
              <div className="hidden md:flex flex-1 h-0.5 bg-gray-700 relative items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/50 -translate-x-full animate-[shimmer_2s_infinite]"></div>
                  <div className="absolute -top-3 text-xs text-gray-500 font-mono">Derive Key</div>
                  <div className="w-2 h-2 bg-gray-700 rotate-45 border-t border-r border-gray-500 absolute right-0"></div>
              </div>

              {/* Step 2: Local Encryption */}
              <div className="flex flex-col items-center text-center w-full md:w-1/4 group cursor-default">
                <div className="w-16 h-16 bg-emerald-900/30 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-900/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
                  <Lock className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Local Encryption</h3>
                <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">AES-256-GCM wraps your data <br/>using the derived key.</p>
              </div>

              {/* Arrow 2 */}
              <div className="hidden md:flex flex-1 h-0.5 bg-gray-700 relative items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-500/50 -translate-x-full animate-[shimmer_2s_infinite_1s]"></div>
                  <div className="absolute -top-3 text-xs text-gray-500 font-mono">Sync Blob</div>
                   <div className="w-2 h-2 bg-gray-700 rotate-45 border-t border-r border-gray-500 absolute right-0"></div>
              </div>

              {/* Step 3: Cloud Storage */}
              <div className="flex flex-col items-center text-center w-full md:w-1/4 group cursor-default">
                <div className="w-16 h-16 bg-gray-800 border border-gray-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gray-700 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                  <Server className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">HushKey Cloud</h3>
                <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">Receives only encrypted blobs.<br/>Cannot decrypt or read data.</p>
              </div>
              
            </div>
          </div>
        </ScrollReveal>

        {/* Security Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <ScrollReveal animation="slide-up" delay={300} className="h-full">
                <div className="glass-panel p-6 rounded-xl border border-gray-800 h-full group hover:-translate-y-1 transition-all duration-300">
                    <Shield className="h-6 w-6 text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-semibold text-white mb-2">Guardian Scanner</h4>
                    <p className="text-sm text-gray-400">Automated checking against "Have I Been Pwned" database and weak password detection.</p>
                </div>
            </ScrollReveal>
            <ScrollReveal animation="slide-up" delay={400} className="h-full">
                <div className="glass-panel p-6 rounded-xl border border-gray-800 h-full group hover:-translate-y-1 transition-all duration-300">
                    <Key className="h-6 w-6 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-semibold text-white mb-2">Key Wrapping</h4>
                    <p className="text-sm text-gray-400">Non-extractable keys ensure memory dump attacks cannot retrieve your master password.</p>
                </div>
            </ScrollReveal>
            <ScrollReveal animation="slide-up" delay={500} className="h-full">
                <div className="glass-panel p-6 rounded-xl border border-gray-800 h-full group hover:-translate-y-1 transition-all duration-300">
                    <FileLock className="h-6 w-6 text-rose-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-semibold text-white mb-2">Data Integrity</h4>
                    <p className="text-sm text-gray-400">HMAC-SHA256 verification ensures no one has tampered with your data in transit.</p>
                </div>
            </ScrollReveal>
        </div>

      </div>
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};