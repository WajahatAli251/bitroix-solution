import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { Moon, Sun, Gift } from 'lucide-react';
import PackagePopup from '@/components/PackagePopup';
import bitroixLogo from '@/assets/bitroix-logo-new.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPackagePopup, setShowPackagePopup] = useState(false);
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
    <nav className="fixed top-0 left-0 right-0 z-50 gradient-header backdrop-blur-lg border-b border-white/10 animate-slide-in-up" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={bitroixLogo} 
              alt="Bitroix Solution" 
              onClick={() => navigate('/')} 
              className="h-10 md:h-14 w-auto cursor-pointer hover-lift transition-transform duration-300 opacity-90 mix-blend-screen"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-6 xl:ml-10 flex items-baseline space-x-3 xl:space-x-5">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white/90 hover:text-white px-2 py-1.5 rounded-md text-sm font-medium hover-lift hover-glow"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
                className="text-white/90 hover:text-white px-2 py-1.5 rounded-md text-sm font-medium hover-lift hover-glow"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white/90 hover:text-white px-2 py-1.5 rounded-md text-sm font-medium hover-lift hover-glow"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-white/90 hover:text-white px-2 py-1.5 rounded-md text-sm font-medium hover-lift hover-glow"
              >
                Solutions
              </button>
              <button 
                onClick={() => navigate('/projects')}
                className="text-white/90 hover:text-white px-2 py-1.5 rounded-md text-sm font-medium hover-lift hover-glow"
              >
                Projects
              </button>
              <button 
                onClick={() => navigate('/products')}
                className="text-white/90 hover:text-white px-2 py-1.5 rounded-md text-sm font-medium hover-lift hover-glow"
              >
                Products
              </button>
              <button 
                onClick={() => navigate('/career')}
                className="text-white/90 hover:text-white px-2 py-1.5 rounded-md text-sm font-medium hover-lift hover-glow"
              >
                Career
              </button>
              <button 
                onClick={() => setShowPackagePopup(true)}
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-3 py-1.5 rounded-md text-sm font-bold hover-lift animate-pulse flex items-center gap-1.5"
              >
                <Gift className="w-4 h-4" />
                50% OFF
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent text-accent-foreground px-3 py-1.5 rounded-md text-sm font-medium hover-lift glow-accent animate-pulse-glow"
              >
                Contact
              </button>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-white/90 hover:text-white p-1.5 rounded-md hover-lift hover-glow"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-white/90 hover:text-white p-1.5 hover-lift rounded-md"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/90 hover:text-white p-1.5 hover-lift rounded-md"
            >
              <svg className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden animate-slide-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-xl rounded-xl border border-white/10 mx-1 shadow-2xl">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white/90 hover:text-white hover:bg-white/10 block px-4 py-2.5 rounded-lg text-sm font-medium w-full text-left transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
                className="text-white/90 hover:text-white hover:bg-white/10 block px-4 py-2.5 rounded-lg text-sm font-medium w-full text-left transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white/90 hover:text-white hover:bg-white/10 block px-4 py-2.5 rounded-lg text-sm font-medium w-full text-left transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-white/90 hover:text-white hover:bg-white/10 block px-4 py-2.5 rounded-lg text-sm font-medium w-full text-left transition-colors"
              >
                Solutions
              </button>
              <button 
                onClick={() => navigate('/projects')}
                className="text-white/90 hover:text-white hover:bg-white/10 block px-4 py-2.5 rounded-lg text-sm font-medium w-full text-left transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => navigate('/products')}
                className="text-white/90 hover:text-white hover:bg-white/10 block px-4 py-2.5 rounded-lg text-sm font-medium w-full text-left transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => navigate('/career')}
                className="text-white/90 hover:text-white hover:bg-white/10 block px-4 py-2.5 rounded-lg text-sm font-medium w-full text-left transition-colors"
              >
                Career
              </button>
              <div className="pt-2 space-y-2">
                <button 
                  onClick={() => { setShowPackagePopup(true); setIsMenuOpen(false); }}
                  className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black block px-4 py-2.5 rounded-lg text-sm font-bold w-full text-center flex items-center justify-center gap-2 shadow-lg"
                >
                  <Gift className="w-4 h-4" />
                  50% OFF Packages
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-accent text-accent-foreground block px-4 py-2.5 rounded-lg text-sm font-medium w-full text-center glow-accent"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <PackagePopup isOpen={showPackagePopup} onClose={() => setShowPackagePopup(false)} />
    </nav>
  );
};

export default Navigation;
