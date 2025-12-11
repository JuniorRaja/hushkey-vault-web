import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => onNavigate('home')}>
              <Logo className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold font-display text-white">HushKey Vault</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The secure, offline-first password manager that puts you in control. Open source principles, military-grade encryption.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold font-display mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => onNavigate('home')} className="hover:text-primary-400 transition-colors">Features</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-primary-400 transition-colors">Security</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-primary-400 transition-colors">Roadmap</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-primary-400 transition-colors">Pricing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold font-display mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => onNavigate('docs')} className="hover:text-primary-400 transition-colors">Documentation</button></li>
              <li><button onClick={() => onNavigate('api')} className="hover:text-primary-400 transition-colors">API</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-primary-400 transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('security')} className="hover:text-primary-400 transition-colors">Security Whitepaper</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold font-display mb-4">Stack</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span className="flex items-center">React 19 & TypeScript</span></li>
              <li><span className="flex items-center">IndexedDB & Dexie</span></li>
              <li><span className="flex items-center">Supabase & PostgreSQL</span></li>
              <li><span className="flex items-center">Web Crypto API</span></li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} HushKey Security. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-600">
             <button onClick={() => onNavigate('privacy')} className="hover:text-gray-400">Terms</button>
             <button onClick={() => onNavigate('privacy')} className="hover:text-gray-400">Privacy</button>
             <button onClick={() => onNavigate('privacy')} className="hover:text-gray-400">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};