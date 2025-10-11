import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  label: string;
  color: string;
  suffix?: string;
}

const AnimatedCounter = ({ end, label, color, suffix = "+" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = end / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(Math.round(stepValue * currentStep), end);
      setCount(newValue);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div 
      ref={counterRef}
      className="text-center p-4 md:p-6 lg:p-8 transform hover:scale-105 transition-all duration-300 hover:-translate-y-2"
    >
      <div className="mb-2 md:mb-4">
        <span 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-pulse"
          style={{ color }}
        >
          {count}{suffix}
        </span>
      </div>
      <p className="text-sm sm:text-base md:text-lg font-medium text-foreground/80 tracking-wider">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      end: 50,
      label: "Projects",
      color: "hsl(var(--primary))", // Electric Blue
      suffix: "+"
    },
    {
      end: 25,
      label: "Happy Clients",
      color: "hsl(var(--primary-glow))", // Bright Electric Blue
      suffix: "+"
    },
    {
      end: 2,
      label: "Years Experience",
      color: "hsl(194 100% 70%)", // Lighter Blue
      suffix: "+"
    },
    {
      end: 24,
      label: "Support",
      color: "hsl(210 20% 85%)", // Silver Accent
      suffix: "/7"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 gradient-primary"
      >
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full blur-3xl animate-pulse opacity-20 bg-primary/30"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full blur-2xl animate-pulse opacity-30 bg-primary-glow/40" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full blur-xl animate-bounce opacity-25 bg-secondary/50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 left-1/2 w-36 h-36 rounded-full blur-2xl animate-pulse opacity-20 bg-accent/30" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glass morphism effect */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/20 shadow-2xl"></div>
              
              <AnimatedCounter
                end={stat.end}
                label={stat.label}
                color={stat.color}
                suffix={stat.suffix}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-3 h-3 bg-primary rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-10 left-10 w-4 h-4 bg-secondary rounded-full animate-bounce opacity-70" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full animate-bounce opacity-80" style={{animationDelay: '1.5s'}}></div>
    </section>
  );
};

export default StatsSection;