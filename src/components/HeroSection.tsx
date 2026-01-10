import { useEffect, useRef, useState } from 'react';
import heroTechImage from '@/assets/futuristic-hero-bg.jpg';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Load video immediately for faster display
    if (videoRef.current) {
      videoRef.current.src = '/videos/hero-background-new.mp4';
      videoRef.current.load();
    }
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <section id="home" className="min-h-screen gradient-primary pt-16 relative overflow-hidden" role="banner">
        {/* Video Background - Deferred loading for better performance */}
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-30' : 'opacity-0'}`}
          aria-hidden="true"
          onLoadedData={() => setVideoLoaded(true)}
        />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 z-[2]" aria-hidden="true">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float float-delayed"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)]">
            {/* Left Content */}
            <header className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 animate-slide-in-left px-4">
                Professional{' '}
                <span className="text-white">
                  Web Development
                </span>{' '}
                & Digital Marketing Services
              </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl animate-slide-in-left px-4" style={{animationDelay: '0.2s'}}>
              Expert web development, AI chatbots, SEO optimization, and digital marketing solutions that drive measurable business growth and online success.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-left px-4" style={{animationDelay: '0.6s'}}>
              <button
                onClick={scrollToServices}
                className="gradient-secondary text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover-lift glow-secondary pulse-glow text-sm sm:text-base"
                aria-label="Explore our comprehensive digital services"
              >
                Explore Our Services
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-accent text-accent px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-accent hover:text-white hover-lift transition-all duration-300 text-sm sm:text-base"
                aria-label="Contact us to start building your digital solution"
              >
                Let's Build Together
              </button>
            </div>
            </header>

            {/* Right Content - Tech Image */}
            <aside className="flex-1 flex justify-center lg:justify-end animate-slide-in-right mt-8 lg:mt-0" aria-label="Technology showcase">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={heroTechImage} 
                    alt="Professional web development and digital marketing services - custom websites, SEO, AI chatbots, and online marketing solutions"
                    className="w-full h-auto max-w-[500px] sm:max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] object-contain animate-float"
                    loading="eager"
                    width="750"
                    height="600"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" aria-hidden="true"></div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
