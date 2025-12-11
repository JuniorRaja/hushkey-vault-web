import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'scale-in' | 'slide-in-right' | 'slide-in-left';
  delay?: number;
  duration?: number;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  animation = 'slide-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: threshold, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getInitialState = () => {
    switch (animation) {
      case 'fade-in': return 'opacity-0';
      case 'slide-up': return 'opacity-0 translate-y-8';
      case 'slide-in-right': return 'opacity-0 -translate-x-8';
      case 'slide-in-left': return 'opacity-0 translate-x-8';
      case 'scale-in': return 'opacity-0 scale-95';
      default: return 'opacity-0';
    }
  };

  const getVisibleState = () => {
    switch (animation) {
      case 'scale-in': return 'opacity-100 scale-100';
      default: return 'opacity-100 translate-y-0 translate-x-0';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`transition-all ease-out ${className} ${isVisible ? getVisibleState() : getInitialState()}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};