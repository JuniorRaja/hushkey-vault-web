import React from 'react';
import { useTheme } from './ThemeProvider';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => {
  const { theme } = useTheme();

  return (
    <div className={`relative flex items-center justify-center group ${className}`}>
        {/* Glow behind logo */}
        <div className="absolute inset-0 bg-primary-500/30 blur-xl rounded-full animate-pulse-slow group-hover:bg-primary-500/50 transition-colors duration-500"></div>

        {/* Theme-based Logo Image */}
        <img
            src={theme === 'dark' ? '/hushkey-icon-dark.png' : '/hushkey-icon-light.png'}
            alt="HushKey Vault Logo"
            className="w-full h-full relative z-10 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
        />
    </div>
  );
};
