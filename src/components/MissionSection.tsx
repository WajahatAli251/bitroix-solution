
import React, { useState, useEffect } from 'react';

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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 hover:scale-105 transition-transform duration-300 animate-slide-in-left">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Bitroix Solution</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-8 animate-scale-in rounded-full shadow-lg"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
            Leading digital transformation through expert web development, proven SEO strategies, and innovative technology solutions that deliver measurable business results
          </p>
        </div>

        <div className="relative">
          {/* Large Success Celebration Illustration Overlay */}
          <div className="absolute inset-0 flex justify-center items-center z-20 pointer-events-none">
            <div className="relative group animate-fade-in" style={{animationDelay: '0.2s'}}>
              {/* Animated Purple Lines Background */}
              <div className="absolute inset-0 -m-16">
                <svg className="w-full h-full animate-float" viewBox="0 0 600 500" style={{animationDelay: '0.5s'}}>
                  <defs>
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#8B5CF6', stopOpacity: 0.6}} />
                      <stop offset="50%" style={{stopColor: '#A855F7', stopOpacity: 0.4}} />
                      <stop offset="100%" style={{stopColor: '#C084FC', stopOpacity: 0.3}} />
                    </linearGradient>
                  </defs>
                  
                  <path 
                    d="M50,250 Q200,150 350,250 T650,250" 
                    stroke="url(#purpleGradient)" 
                    strokeWidth="3" 
                    fill="none" 
                    className="animate-pulse"
                    style={{animationDelay: '0.2s'}}
                  />
                  <path 
                    d="M0,200 Q150,100 300,200 T600,200" 
                    stroke="url(#purpleGradient)" 
                    strokeWidth="2" 
                    fill="none" 
                    className="animate-pulse"
                    style={{animationDelay: '0.8s'}}
                  />
                  <path 
                    d="M100,400 Q250,300 400,400 T700,400" 
                    stroke="url(#purpleGradient)" 
                    strokeWidth="2.5" 
                    fill="none" 
                    className="animate-pulse"
                    style={{animationDelay: '1.2s'}}
                  />
                </svg>
              </div>
              
              <div className="relative z-10 transform hover:scale-105 transition-all duration-700">
                <img 
                  src="/src/assets/success-celebration-no-laptop.png" 
                  alt="Success Celebration - Digital Solutions Achievement" 
                  className="w-[500px] h-[400px] object-contain animate-float drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(139, 92, 246, 0.2))',
                    animationDelay: '0.3s'
                  }}
                />
                
                {/* Floating purple particles */}
                <div className="absolute top-10 left-16 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-20 right-20 w-2 h-2 bg-purple-500 rounded-full animate-bounce opacity-70" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-20 left-20 w-4 h-4 bg-purple-300 rounded-full animate-bounce opacity-50" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute bottom-10 right-16 w-2.5 h-2.5 bg-purple-600 rounded-full animate-bounce opacity-65" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-1 gap-8 relative z-10">
            <div className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-2xl border border-blue-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 animate-fade-in hover:scale-105 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Expert Digital Solutions</h3>
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

            <div className="bg-gradient-to-br from-white to-green-50 p-10 rounded-2xl border border-green-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 animate-fade-in hover:scale-105 relative overflow-hidden group" style={{animationDelay: '0.2s'}}>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 animate-pulse-glow" style={{animationDelay: '0.5s'}}>
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Proven Track Record</h3>
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
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
