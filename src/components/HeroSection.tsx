
import heroTechImage from '@/assets/futuristic-hero-bg.jpg';

const HeroSection = () => {
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
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
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

            <div className="mb-8 md:mb-12 animate-slide-in-left px-4" style={{animationDelay: '0.4s'}}>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Bitroix Solution LLC specializes in custom web development, AI-powered chatbots, search engine optimization (SEO), social media marketing, 
                data analytics, and DevOps services. We help businesses increase online visibility, generate qualified leads, and maximize ROI through proven digital strategies.
              </p>
            </div>

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

            {/* Right Content - Tech Background */}
            <aside className="flex-1 flex justify-center lg:justify-end animate-slide-in-right mt-8 lg:mt-0" aria-label="Technology showcase">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <img 
                  src={heroTechImage} 
                  alt="Professional web development and digital marketing services - custom websites, SEO, AI chatbots, and online marketing solutions"
                  className="w-full h-auto rounded-2xl shadow-2xl glow-primary hover-lift float"
                  loading="eager"
                  width="500"
                  height="400"
                  fetchPriority="high"
                />
                {/* Vibrant gradient overlay with increased saturation */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-transparent rounded-2xl" aria-hidden="true"></div>
                
                {/* Animated moving lights - Dark and sharp colors */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none" aria-hidden="true">
                  <div 
                    className="absolute w-40 h-40 rounded-full blur-3xl"
                    style={{
                      background: 'radial-gradient(circle, hsl(194 100% 35% / 0.95), transparent)',
                      animation: 'movingLight 4s ease-in-out infinite',
                      top: '10%',
                      left: '5%'
                    }}
                  ></div>
                  <div 
                    className="absolute w-32 h-32 rounded-full blur-2xl"
                    style={{
                      background: 'radial-gradient(circle, hsl(280 100% 40% / 0.9), transparent)',
                      animation: 'movingLight2 5s ease-in-out infinite 1s',
                      top: '50%',
                      right: '5%'
                    }}
                  ></div>
                  <div 
                    className="absolute w-36 h-36 rounded-full blur-3xl"
                    style={{
                      background: 'radial-gradient(circle, hsl(220 100% 38% / 0.95), transparent)',
                      animation: 'movingLight3 4.5s ease-in-out infinite 2s',
                      bottom: '15%',
                      left: '25%'
                    }}
                  ></div>
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
