
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

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-2xl border border-blue-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 animate-fade-in hover:scale-105 relative overflow-hidden group">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                style={{backgroundImage: "url('/src/assets/web-development.jpg')"}}
              />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Expert Digital Solutions</h3>
                </div>
                <TypewriterText 
                  lines={[
                    "Welcome to Bitroix Solution LLC",
                    "We specialize in professional web development",
                    "Expert search engine optimization services", 
                    "Digital marketing that drives results",
                    "AI solutions for business automation",
                    "Data analytics for measurable growth",
                    "Helping businesses achieve higher search rankings",
                    "Increased online visibility and sustainable growth",
                    "Through proven digital strategies",
                    "Your success is our mission"
                  ]}
                  speed={40}
                  lineDelay={800}
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50 p-10 rounded-2xl border border-green-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 animate-fade-in hover:scale-105 relative overflow-hidden group" style={{animationDelay: '0.2s'}}>
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                style={{backgroundImage: "url('/src/assets/data-analytics.jpg')"}}
              />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 animate-pulse-glow" style={{animationDelay: '0.5s'}}>
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Proven Track Record</h3>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We deliver measurable results including improved search engine rankings, increased website traffic, higher conversion rates, 
                  and enhanced online presence for businesses across multiple industries through data-driven digital marketing strategies.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* Innovation Card */}
            <div className="text-center animate-fade-in relative group" style={{animationDelay: '0.1s'}}>
              <div className="relative mx-auto mb-6 w-28 h-28 group-hover:scale-110 transition-all duration-700">
                <div className="w-28 h-28 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:rotate-12 transition-all duration-500 cursor-pointer hover:shadow-2xl relative overflow-hidden animate-float">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    style={{backgroundImage: "url('/src/assets/it-concepts-revolving.jpg')"}}
                  />
                  <span className="text-3xl font-bold text-white relative z-10 animate-pulse-glow">🚀</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce opacity-80"></div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors duration-300 animate-slide-in-left">Advanced Technology</h4>
              <p className="text-slate-600 text-lg leading-relaxed max-w-sm mx-auto">Latest web development frameworks, AI integration, and cloud technologies for competitive advantage</p>
            </div>

            {/* Integrity Card */}
            <div className="text-center animate-fade-in relative group" style={{animationDelay: '0.3s'}}>
              <div className="relative mx-auto mb-6 w-28 h-28 group-hover:scale-110 transition-all duration-700">
                <div className="w-28 h-28 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center hover:rotate-12 transition-all duration-500 cursor-pointer hover:shadow-2xl relative overflow-hidden animate-float" style={{animationDelay: '0.5s'}}>
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    style={{backgroundImage: "url('/src/assets/team-collaboration.jpg')"}}
                  />
                  <span className="text-3xl font-bold text-white relative z-10 animate-pulse-glow" style={{animationDelay: '0.3s'}}>🤝</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-bounce opacity-80" style={{animationDelay: '0.3s'}}></div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3 hover:text-green-600 transition-colors duration-300 animate-slide-in-left" style={{animationDelay: '0.3s'}}>Transparent Process</h4>
              <p className="text-slate-600 text-lg leading-relaxed max-w-sm mx-auto">Clear project timelines, regular progress updates, and honest communication throughout development</p>
            </div>

            {/* Impact Card */}
            <div className="text-center animate-fade-in relative group" style={{animationDelay: '0.5s'}}>
              <div className="relative mx-auto mb-6 w-28 h-28 group-hover:scale-110 transition-all duration-700">
                <div className="w-28 h-28 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:rotate-12 transition-all duration-500 cursor-pointer hover:shadow-2xl relative overflow-hidden animate-float" style={{animationDelay: '1s'}}>
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    style={{backgroundImage: "url('/src/assets/devops-infrastructure.jpg')"}}
                  />
                  <span className="text-3xl font-bold text-white relative z-10 animate-pulse-glow" style={{animationDelay: '0.6s'}}>📈</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce opacity-80" style={{animationDelay: '0.6s'}}></div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3 hover:text-purple-600 transition-colors duration-300 animate-slide-in-left" style={{animationDelay: '0.5s'}}>Measurable Results</h4>
              <p className="text-slate-600 text-lg leading-relaxed max-w-sm mx-auto">Data-driven strategies with trackable KPIs, ROI optimization, and continuous performance improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
