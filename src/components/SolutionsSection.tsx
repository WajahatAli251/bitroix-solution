import React from 'react';

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
    <section id="solutions" className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(to right, #0D1B2A, #1B263B)'}}>
      {/* Futuristic 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-20 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#33F3FF10'}}></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s', backgroundColor: '#00BFFF08'}}></div>
        <div className="absolute top-20 right-1/3 w-64 h-64 rounded-full blur-xl animate-bounce" style={{animationDelay: '0.5s', backgroundColor: '#1EC8E808'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s', backgroundColor: '#33F3FF10'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Headline */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight animate-slide-in-left drop-shadow-lg" style={{color: '#F0F4F8'}}>
            Not Getting <span style={{color: '#00BFFF'}}>Leads</span>?<br />
            Let's Fix That — <span style={{color: '#00BFFF'}}>Fast</span>.
          </h2>
          <div className="w-32 h-1 mx-auto mb-8 animate-scale-in rounded-full shadow-lg" style={{background: 'linear-gradient(to right, #00BFFF, #33F3FF)', boxShadow: '0 0 20px #33F3FF50'}}></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-in drop-shadow-md" style={{animationDelay: '0.3s', color: '#9BE3FF'}}>
            We help businesses grow with powerful marketing automation, SEO, and paid ads — <span style={{color: '#F0F4F8', fontWeight: '600'}}>all under one roof</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="backdrop-blur-md p-8 rounded-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 group animate-fade-in relative overflow-hidden shadow-2xl"
                style={{
                  animationDelay: service.delay,
                  background: 'rgba(13, 27, 42, 0.3)',
                  borderColor: '#264653',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  boxShadow: '0 10px 30px rgba(51, 243, 255, 0.1)'
                }}
              >
                {/* Enhanced Gradient Background */}
                <div className="absolute inset-0 transition-all duration-500" style={{background: 'linear-gradient(135deg, rgba(0, 191, 255, 0.05), rgba(51, 243, 255, 0.05))'}}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4 transition-colors duration-300 drop-shadow-md" style={{color: '#F0F4F8'}}>
                    {service.title}
                  </h4>
                  <p className="leading-relaxed mb-6 drop-shadow-sm" style={{color: '#9BE3FF'}}>
                    {service.hook}
                  </p>
                  <button
                    onClick={() => handleCTAClick(service.title)}
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border-2"
                    style={{
                      background: 'linear-gradient(to right, #00BFFF, #33F3FF)',
                      color: '#0D1B2A',
                      borderColor: '#264653',
                      boxShadow: '0 8px 25px rgba(0, 191, 255, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.background = 'linear-gradient(to right, #1EC8E8, #33F3FF)';
                      target.style.boxShadow = '0 12px 35px rgba(30, 200, 232, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.background = 'linear-gradient(to right, #00BFFF, #33F3FF)';
                      target.style.boxShadow = '0 8px 25px rgba(0, 191, 255, 0.3)';
                    }}
                  >
                    {service.cta} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center p-12 animate-fade-in transition-all duration-500" style={{animationDelay: '0.8s'}}>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 animate-pulse-glow tracking-tight" style={{color: '#F0F4F8'}}>
            Let's Turn Your Website into a <span style={{color: '#00BFFF'}}>Growth Machine</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => handleCTAClick('Strategy Call')}
              className="font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl border-2"
              style={{
                background: 'linear-gradient(to right, #00BFFF, #33F3FF)',
                color: '#0D1B2A',
                borderColor: '#264653',
                boxShadow: '0 10px 30px rgba(0, 191, 255, 0.3)'
              }}
            >
              Schedule Free Strategy Call
            </button>
            <button
              onClick={() => handleCTAClick('Full Services')}
              className="font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm border-2"
              style={{
                background: 'rgba(13, 27, 42, 0.2)',
                color: '#9BE3FF',
                borderColor: '#264653'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.background = '#00BFFF';
                target.style.color = '#0D1B2A';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.background = 'rgba(13, 27, 42, 0.2)';
                target.style.color = '#9BE3FF';
              }}
            >
              Explore Full Services
            </button>
          </div>
        </div>

        {/* Platform Integrations */}
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '1s'}}>
          <h4 className="text-2xl md:text-3xl font-bold mb-8" style={{color: '#F0F4F8'}}>
            Launch Your Campaign from <span style={{color: '#00BFFF'}}>One Platform</span>
          </h4>
          <p className="text-lg mb-10 max-w-3xl mx-auto" style={{color: '#9BE3FF'}}>
            Launch and promote your content with ease using our integrated advertising platform.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6">
            {/* Google */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border-2" 
                 style={{background: 'rgba(13, 27, 42, 0.4)', borderColor: '#264653'}}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(45deg, #4285F4, #34A853, #FBBC05, #EA4335)'}}>
                <span className="text-white font-bold text-xs">G</span>
              </div>
            </div>

            {/* Gmail */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border-2" 
                 style={{background: 'rgba(13, 27, 42, 0.4)', borderColor: '#264653'}}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#EA4335'}}>
                <span className="text-white font-bold text-xs">M</span>
              </div>
            </div>

            {/* AdWords */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border-2" 
                 style={{background: 'rgba(13, 27, 42, 0.4)', borderColor: '#264653'}}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#4285F4'}}>
                <span className="text-white font-bold text-xs">A</span>
              </div>
            </div>

            {/* Instagram */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border-2" 
                 style={{background: 'rgba(13, 27, 42, 0.4)', borderColor: '#264653'}}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(45deg, #F56040, #F77737, #FCAF45, #FFDC80)'}}>
                <span className="text-white font-bold text-xs">📷</span>
              </div>
            </div>

            {/* Meta */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border-2" 
                 style={{background: 'rgba(13, 27, 42, 0.4)', borderColor: '#264653'}}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#1877F2'}}>
                <span className="text-white font-bold text-xs">f</span>
              </div>
            </div>

            {/* Central Platform (Rocket) */}
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 relative" 
                 style={{background: 'linear-gradient(135deg, #00BFFF, #33F3FF)', borderColor: '#264653', boxShadow: '0 0 30px rgba(51, 243, 255, 0.5)'}}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#0D1B2A'}}>
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse" style={{backgroundColor: '#33F3FF'}}></div>
            </div>

            {/* LinkedIn */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border-2" 
                 style={{background: 'rgba(13, 27, 42, 0.4)', borderColor: '#264653'}}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#0077B5'}}>
                <span className="text-white font-bold text-xs">in</span>
              </div>
            </div>

            {/* YouTube */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border-2" 
                 style={{background: 'rgba(13, 27, 42, 0.4)', borderColor: '#264653'}}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#FF0000'}}>
                <span className="text-white font-bold text-xs">▶</span>
              </div>
            </div>

            {/* Reddit */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border-2" 
                 style={{background: 'rgba(13, 27, 42, 0.4)', borderColor: '#264653'}}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#FF4500'}}>
                <span className="text-white font-bold text-xs">r</span>
              </div>
            </div>

            {/* Pinterest */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border-2" 
                 style={{background: 'rgba(13, 27, 42, 0.4)', borderColor: '#264653'}}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#E60023'}}>
                <span className="text-white font-bold text-xs">P</span>
              </div>
            </div>

            {/* X (Twitter) */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border-2" 
                 style={{background: 'rgba(13, 27, 42, 0.4)', borderColor: '#264653'}}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#000000'}}>
                <span className="text-white font-bold text-xs">X</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;