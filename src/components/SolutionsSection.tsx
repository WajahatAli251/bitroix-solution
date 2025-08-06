
const SolutionsSection = () => {
  const services = [
    {
      emoji: "📈",
      title: "SEO That Ranks — and Converts",
      hook: "Stop being invisible on Google",
      description: "We'll put your business at the top of Google and in front of people who are ready to buy. No more guessing games.",
      cta: "Start Ranking Today",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      emoji: "💰",
      title: "Paid Ads That Actually Work",
      hook: "Stop wasting money on ads that don't convert",
      description: "Get more clicks, leads, and customers without blowing your budget. We run smart campaigns that deliver results.",
      cta: "Launch My Ads",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      emoji: "🎯",
      title: "Automated Lead Generation",
      hook: "Still chasing customers? Let us bring them to you",
      description: "We'll build you a system that brings leads in daily — even while you sleep. No more cold calling.",
      cta: "Book a Free Demo",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      emoji: "📱",
      title: "Social Media That Sells",
      hook: "Turn followers into paying customers",
      description: "We don't just post. We build content that gets attention, grows trust, and drives actual sales.",
      cta: "Grow My Brand",
      gradient: "from-orange-500 to-red-600"
    },
    {
      emoji: "⚙️",
      title: "Marketing Systems & Automation",
      hook: "Free up your time while growing your business",
      description: "We'll automate follow-ups, emails, and lead tracking — so nothing slips through the cracks.",
      cta: "Automate My Marketing",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      emoji: "📊",
      title: "Conversion Rate Optimization",
      hook: "Already getting traffic but no sales?",
      description: "We'll fix your funnel, optimize your pages, and turn more visitors into paying customers.",
      cta: "Fix My Funnel",
      gradient: "from-teal-500 to-green-600"
    }
  ];

  const handleCTAClick = (service: string) => {
    // Redirect to schedule meeting or contact form
    window.location.href = '/schedule-meeting';
  };

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Headline */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            🚀 Struggling to Get <span className="text-yellow-400">Customers</span>?<br />
            We'll Fix That.
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Your business deserves more leads, more sales, and more freedom. If you're tired of wasting money on random ads or not ranking on Google — <span className="text-yellow-400 font-semibold">you're in the right place.</span>
          </p>
          <p className="text-2xl font-bold text-white mt-6 mb-8">
            We turn slow growth into <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">unstoppable momentum.</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            💡 What We'll Do for <span className="text-yellow-400">You</span>:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-slate-800/70 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 group animate-fade-in relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{service.emoji}</div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-sm text-yellow-400 font-semibold mb-3 italic">
                    {service.hook}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>
                  <button
                    onClick={() => handleCTAClick(service.title)}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25"
                  >
                    → {service.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-12 border border-yellow-400/30">
          <h3 className="text-4xl font-bold text-white mb-4">
            Ready to Stop Guessing — and Start <span className="text-yellow-400">Growing</span>?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            📞 Let's Talk Strategy. Your First Call Is <span className="text-yellow-400 font-bold">FREE</span>.
          </p>
          <button
            onClick={() => handleCTAClick('Strategy Call')}
            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-slate-900 font-bold py-4 px-12 rounded-2xl text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/30 animate-pulse"
          >
            🚀 Book Your Free Strategy Call Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
