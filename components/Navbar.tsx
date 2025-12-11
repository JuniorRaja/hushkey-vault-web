import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './ui/Button';
import { NavItem, SectionId } from '../types';
import { Logo } from './Logo';
import { useTheme } from './ThemeProvider';

const navItems: NavItem[] = [
  { label: 'Features', href: `#${SectionId.FEATURES}` },
  { label: 'Security', href: `#${SectionId.SECURITY}` },
  { label: 'Comparison', href: `#${SectionId.COMPARISON}` },
  { label: 'Pricing', href: `#${SectionId.PRICING}` },
];

interface NavbarProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (currentView !== 'home') {
        onNavigate('home');
        // Wait for render then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Already on home, just scroll
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled || currentView !== 'home' ? 'bg-gray-950/90 backdrop-blur-md border-gray-800' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
            <Logo className="h-10 w-10 mr-3" />
            <span className="text-2xl font-display font-bold text-white tracking-tight group-hover:text-primary-100 transition-colors">
              HushKey<span className="text-primary-500 group-hover:text-primary-400">Vault</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors font-display"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a href="https://hushkey.vercel.app">
              <Button variant="primary" size="sm" pulse>Get Started Free</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left font-display"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
              <a href="https://hushkey.vercel.app">
                <Button variant="primary" className="w-full" pulse>Get Started Free</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
