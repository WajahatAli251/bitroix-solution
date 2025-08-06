
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
        <div className="text-center backdrop-blur-md rounded-3xl p-12 animate-fade-in shadow-2xl transition-all duration-500" style={{animationDelay: '0.8s', background: 'rgba(13, 27, 42, 0.4)', borderColor: '#264653', borderWidth: '2px', borderStyle: 'solid', boxShadow: '0 20px 50px rgba(51, 243, 255, 0.15)'}}>
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
      </div>
    </section>
  );
};

export default SolutionsSection;
