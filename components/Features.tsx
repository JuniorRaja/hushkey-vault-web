import React from 'react';
import { Database, Wifi, Search, RefreshCw, Zap, Briefcase } from 'lucide-react';
import { SectionId, FeatureItem } from '../types';
import { ScrollReveal } from './ui/ScrollReveal';

const features: FeatureItem[] = [
  {
    title: "12+ Item Types",
    description: "Secure more than just passwords. Store IDs, SSH keys, servers, cards, and secure notes with custom fields.",
    icon: Database
  },
  {
    title: "True Offline-First",
    description: "Powered by IndexedDB and Dexie.js. Your vault works perfectly without internet, syncing seamlessly when connected.",
    icon: Wifi
  },
  {
    title: "Smart Organization",
    description: "Advanced searching, tagging, and filtering. Find any credential in milliseconds, even in massive vaults.",
    icon: Search
  },
  {
    title: "Productivity",
    description: "One-click copy, auto-fill (soon), and keyboard shortcuts designed for power users and developers.",
    icon: Zap
  },
  {
    title: "Breach Detection",
    description: "Integrated with 'Have I Been Pwned' API to alert you instantly if your credentials appear in a data breach.",
    icon: RefreshCw
  },
  {
    title: "Developer Focused",
    description: "Store API tokens, ENV variables, and server configs securely. Copy connection strings with one click.",
    icon: Briefcase
  }
];

export const Features: React.FC = () => {
  return (
    <section id={SectionId.FEATURES} className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for <span className="text-primary-500">Security</span>, Designed for <span className="text-blue-500">Speed</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combined enterprise-grade security controls with a UI that doesn't get in your way.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <ScrollReveal key={idx} animation="scale-in" delay={idx * 100}>
              <div className="group p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-primary-500/50 hover:bg-gray-900 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/10 h-full">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-900/30 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-gray-300 group-hover:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-200 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};