
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

          {/* Right Content - Tech Visualization */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Central Core */}
              <div className="absolute inset-1/4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse shadow-2xl shadow-blue-500/25"></div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-green-400 rounded-full -translate-x-1/2 shadow-lg shadow-green-400/50"></div>
                <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-blue-400 rounded-full -translate-x-1/2 shadow-lg shadow-blue-400/50"></div>
                <div className="absolute left-0 top-1/2 w-4 h-4 bg-purple-400 rounded-full -translate-y-1/2 shadow-lg shadow-purple-400/50"></div>
                <div className="absolute right-0 top-1/2 w-4 h-4 bg-pink-400 rounded-full -translate-y-1/2 shadow-lg shadow-pink-400/50"></div>
              </div>

              {/* Tech Icons Floating */}
              <div className="absolute inset-8 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
                <div className="absolute top-0 left-0 w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-blue-400 text-sm font-bold shadow-lg">AI</div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-green-400 text-xs font-bold shadow-lg">ML</div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-purple-400 text-xs font-bold shadow-lg">CV</div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-pink-400 text-xs font-bold shadow-lg">UI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
