
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              Bitroix <span className="text-blue-400">Solution</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
