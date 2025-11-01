import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait a bit for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 gradient-primary backdrop-blur-lg border-b border-white/10 animate-slide-in-up glow-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              onClick={() => navigate('/')} 
              className="text-xl md:text-2xl font-bold text-white hover-lift cursor-pointer text-gradient-accent"
            >
              Bitroix <span className="text-gradient">Solution</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover-lift hover-glow"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover-lift hover-glow"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover-lift hover-glow"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover-lift hover-glow"
              >
                Solutions
              </button>
              <button 
                onClick={() => navigate('/projects')}
                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover-lift hover-glow"
              >
                Projects
              </button>
              <button 
                onClick={() => navigate('/products')}
                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover-lift hover-glow"
              >
                Products
              </button>
              <button 
                onClick={() => navigate('/career')}
                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover-lift hover-glow"
              >
                Career
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-medium hover-lift glow-accent animate-pulse-glow"
              >
                Contact
              </button>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-white/90 hover:text-white p-2 rounded-md hover-lift hover-glow"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-white/90 hover:text-white p-2 hover-lift rounded-md"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/90 hover:text-white p-2 hover-lift rounded-md"
            >
              <svg className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-in-up">
            <div className="px-3 pt-3 pb-4 space-y-2 bg-white/10 backdrop-blur-lg rounded-b-xl border-t border-white/10 mx-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white/90 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover-glow"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
                className="text-white/90 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover-glow"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white/90 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover-glow"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-white/90 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover-glow"
              >
                Solutions
              </button>
              <button 
                onClick={() => navigate('/projects')}
                className="text-white/90 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover-glow"
              >
                Projects
              </button>
              <button 
                onClick={() => navigate('/products')}
                className="text-white/90 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover-glow"
              >
                Products
              </button>
              <button 
                onClick={() => navigate('/career')}
                className="text-white/90 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover-glow"
              >
                Career
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent text-accent-foreground block px-3 py-2 rounded-md text-base font-medium w-full text-left glow-accent"
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
