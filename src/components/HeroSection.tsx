
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
    <section id="home" className="min-h-screen gradient-primary pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float float-delayed"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)]">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-in-left">
              Innovating the{' '}
              <span className="text-gradient animate-pulse-glow">
                Digital Future
              </span>{' '}
              with Smart Technology
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl animate-slide-in-left" style={{animationDelay: '0.2s'}}>
              We empower businesses through cutting-edge software solutions, cloud innovation, and AI integration.
            </p>

            <div className="mb-12 p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 animate-slide-in-left glow-secondary" style={{animationDelay: '0.4s'}}>
              <p className="text-white/90 leading-relaxed">
                Bitroix Solution is a software company focused on delivering intelligent, scalable, and future-ready digital solutions. 
                From enterprise-grade systems to consumer-facing apps, we enable growth through innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-left" style={{animationDelay: '0.6s'}}>
              <button
                onClick={scrollToServices}
                className="gradient-secondary text-white px-8 py-4 rounded-xl font-semibold hover-lift glow-secondary pulse-glow"
              >
                Explore Our Services
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-accent text-accent px-8 py-4 rounded-xl font-semibold hover:bg-accent hover:text-white hover-lift transition-all duration-300"
              >
                Let's Build Together
              </button>
            </div>
          </div>

          {/* Right Content - Tech Background */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative w-full max-w-lg">
              <img 
                src={heroTechImage} 
                alt="Modern technology and innovation" 
                className="w-full h-auto rounded-2xl shadow-2xl glow-primary hover-lift float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
