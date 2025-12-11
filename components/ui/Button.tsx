import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  pulse?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  icon,
  pulse = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-95 transform relative overflow-hidden";
  
  const variants = {
    primary: "bg-primary-600 hover:bg-primary-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 focus:ring-primary-600 border border-transparent",
    secondary: "bg-white text-gray-900 hover:bg-gray-100 focus:ring-white border border-transparent hover:-translate-y-0.5 shadow-lg shadow-white/10",
    outline: "bg-transparent border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white focus:ring-gray-700 hover:bg-gray-800/50",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-gray-800 focus:ring-gray-700"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {/* Pulsating background for primary buttons */}
      {pulse && variant === 'primary' && (
        <span className="absolute inset-0 rounded-lg animate-pulse-glow bg-primary-400/20 pointer-events-none"></span>
      )}
      
      <span className="relative flex items-center">
        {children}
        {icon && <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200 inline-block">{icon}</span>}
      </span>
    </button>
  );
};