import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => {
  return (
    <div className={`relative flex items-center justify-center group ${className}`}>
        {/* Glow behind logo */}
        <div className="absolute inset-0 bg-primary-500/30 blur-xl rounded-full animate-pulse-slow group-hover:bg-primary-500/50 transition-colors duration-500"></div>
        
        {/* SVG Logo */}
        <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full relative z-10 text-white drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 L50 5Z" 
                className="stroke-gray-100/20 stroke-[2] fill-gray-950/80" 
            />
            {/* Pulsating Border */}
            <path 
                d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 L50 5Z" 
                className="stroke-primary-500 stroke-[3] fill-transparent animate-pulse-glow" 
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* The H shape */}
            <path 
                d="M35 35 V75 M65 35 V75 M35 55 H65" 
                className="stroke-white stroke-[6] group-hover:stroke-primary-200 transition-colors duration-300" 
                strokeLinecap="round"
            />
        </svg>
    </div>
  );
};