
// Logo will be loaded from public folder

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
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)]">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Innovating the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Digital Future
              </span>{' '}
              with Smart Technology
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl animate-fade-in">
              We empower businesses through cutting-edge software solutions, cloud innovation, and AI integration.
            </p>

            <div className="mb-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 animate-fade-in">
              <p className="text-gray-200 leading-relaxed">
                Bitroix Solution is a software company focused on delivering intelligent, scalable, and future-ready digital solutions. 
                From enterprise-grade systems to consumer-facing apps, we enable growth through innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <button
                onClick={scrollToServices}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Explore Our Services
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Let's Build Together
              </button>
            </div>
          </div>

          {/* Right Content - Bitroix Logo */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <img 
                src="/bitroix-logo.png" 
                alt="Bitroix Solution - Innovating Digital Future" 
                className="w-full h-auto max-w-md mx-auto filter drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
