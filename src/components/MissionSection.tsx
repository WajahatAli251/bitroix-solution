

import React, { useState, useEffect } from 'react';
import astronautImage from '@/assets/astronaut-marketing.png';

const TypewriterText = ({ lines, speed = 50, lineDelay = 800 }: {
  lines: string[];
  speed?: number;
  lineDelay?: number;
}) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    
    if (currentText.length < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentText('');
      }, lineDelay);
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentLineIndex, lines, speed, lineDelay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="text-lg text-slate-700 leading-relaxed bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border-l-4 border-primary shadow-sm">
      {lines.slice(0, currentLineIndex).map((line, index) => (
        <div key={index} className="mb-2 flex items-center">
          <span className="text-primary mr-2 font-semibold">•</span>
          <span>{line}</span>
        </div>
      ))}
      {currentLineIndex < lines.length && (
        <div className="mb-2 flex items-center">
          <span className="text-primary mr-2 font-semibold">•</span>
          <span>{currentText}</span>
          {showCursor && <span className="bg-primary text-primary animate-pulse ml-1">|</span>}
        </div>
      )}
    </div>
  );
};

const MissionSection = () => {
  return (
    <section id="mission" className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #F8FAFC, #EDF2F7, #E2E8F0)'}}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse opacity-30" style={{backgroundColor: '#3B82F620'}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-2xl animate-pulse opacity-20" style={{backgroundColor: '#8B5CF620', animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-xl animate-float opacity-10" style={{backgroundColor: '#10B98120'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 hover:scale-105 transition-transform duration-300 animate-slide-in-left px-4">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Bitroix Solution</span>
          </h2>
          <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-6 md:mb-8 animate-scale-in rounded-full shadow-lg"></div>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in px-4" style={{animationDelay: '0.3s'}}>
            Leading digital transformation through expert web development, proven SEO strategies, and innovative technology solutions that deliver measurable business results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            {/* Expert Digital Solutions */}
            <div className="bg-gradient-to-br from-white to-purple-50 p-6 md:p-8 lg:p-10 rounded-2xl border border-purple-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 hover:scale-105 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mr-3 md:mr-4 animate-pulse-glow flex-shrink-0">
                    <span className="text-xl md:text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">Expert Digital Solutions</h3>
                </div>
                <TypewriterText 
                  lines={[
                    "Full-stack web development with modern frameworks",
                    "SEO optimization that ranks #1 on Google",
                    "AI-powered marketing automation systems", 
                    "Real-time data analytics and insights",
                    "Custom CRM and business management tools",
                    "Cloud infrastructure and DevOps solutions",
                    "End-to-end digital transformation strategy"
                  ]}
                  speed={40}
                  lineDelay={800}
                />
              </div>
            </div>

            {/* Proven Track Record */}
            <div className="bg-gradient-to-br from-white to-purple-50 p-6 md:p-8 lg:p-10 rounded-2xl border border-purple-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 hover:scale-105 relative overflow-hidden group" style={{animationDelay: '0.2s'}}>
              <div className="relative z-10">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mr-3 md:mr-4 animate-pulse-glow flex-shrink-0" style={{animationDelay: '0.5s'}}>
                    <span className="text-xl md:text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">Proven Track Record</h3>
                </div>
                <TypewriterText 
                  lines={[
                    "500+ websites launched with 95% client retention",
                    "Average 300% increase in organic traffic",
                    "4.8/5 star rating across 50+ client reviews", 
                    "ROI improvements of 250% within 6 months",
                    "Page 1 Google rankings in competitive markets",
                    "24/7 support with <2 hour response time",
                    "ISO certified processes and data security"
                  ]}
                  speed={40}
                  lineDelay={800}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="relative flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative group animate-fade-in" style={{animationDelay: '0.3s'}}>
              {/* Main Illustration */}
              <div className="relative z-10">
                <img 
                  src={astronautImage} 
                  alt="Astronaut Marketing - Elevated Digital Solutions" 
                  className="w-full h-auto max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] object-cover drop-shadow-2xl animate-astronaut-float"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(139, 92, 246, 0.5))'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
