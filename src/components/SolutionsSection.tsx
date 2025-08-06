
const SolutionsSection = () => {
  const services = [
    {
      title: "Lead Generation Systems",
      hook: "Say goodbye to cold outreach. Our systems deliver hot leads — automatically.",
      cta: "Book Free Demo",
      delay: "0s"
    },
    {
      title: "SEO That Dominates",
      hook: "Be found by customers who are already searching. Top Google rankings, guaranteed.",
      cta: "Start Ranking",
      delay: "0.1s"
    },
    {
      title: "Paid Ads Management",
      hook: "Stop wasting ad spend. We run performance-focused Google & Meta ads that bring results.",
      cta: "Launch My Campaign",
      delay: "0.2s"
    },
    {
      title: "Marketing Automation",
      hook: "Work smarter, not harder. Automate follow-ups, lead nurturing, and reporting.",
      cta: "Automate My Marketing",
      delay: "0.3s"
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      hook: "Visitors aren't buying? We fix that. Smart UI/UX + psychology-backed CTAs.",
      cta: "Fix My Funnel",
      delay: "0.4s"
    },
    {
      title: "Social Media Growth",
      hook: "Build a brand that people follow, trust, and buy from. No fluff — just ROI.",
      cta: "Boost My Socials",
      delay: "0.5s"
    }
  ];

  const handleCTAClick = (service: string) => {
    // Redirect to schedule meeting or contact form
    window.location.href = '/schedule-meeting';
  };

  return (
    <section id="solutions" className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0C1A2E 0%, #0F172A 50%, #00C2FF 50%, #00E0FF 100%)'}}>
      {/* Futuristic 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-tr from-cyan-400/15 to-blue-500/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-20 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-300/10 to-cyan-400/10 rounded-full blur-xl animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Headline */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-in-left">
            Not Getting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Leads</span>?<br />
            Let's Fix That — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Fast</span>.
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 animate-scale-in rounded-full shadow-lg shadow-cyan-500/50"></div>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            We help businesses grow with powerful marketing automation, SEO, and paid ads — <span className="text-cyan-300 font-semibold">all under one roof</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-cyan-400/60 transition-all duration-500 hover:-translate-y-4 hover:scale-105 group animate-fade-in relative overflow-hidden shadow-2xl hover:shadow-cyan-500/25"
                style={{animationDelay: service.delay}}
              >
                {/* Enhanced Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 group-hover:from-cyan-400/15 group-hover:to-blue-500/15 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-200 leading-relaxed mb-6">
                    {service.hook}
                  </p>
                  <button
                    onClick={() => handleCTAClick(service.title)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 border border-cyan-400/30 hover:border-cyan-300/60"
                  >
                    {service.cta} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/30 hover:border-cyan-400/50 animate-fade-in shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500" style={{animationDelay: '0.8s'}}>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-pulse-glow tracking-tight">
            Let's Turn Your Website into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Growth Machine</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => handleCTAClick('Strategy Call')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/40 border border-cyan-400/30 hover:border-cyan-300/60"
            >
              Schedule Free Strategy Call
            </button>
            <button
              onClick={() => handleCTAClick('Full Services')}
              className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm bg-white/5"
            >
              Explore Full Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
