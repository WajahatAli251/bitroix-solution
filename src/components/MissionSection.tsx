
const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 hover:scale-105 transition-transform duration-300">Our Mission</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-scale-in"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-500 animate-fade-in hover:scale-105">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Why We Exist</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                At Bitroix Solution, our mission is to harness the power of emerging technologies to deliver smart, secure, 
                and sustainable software systems that accelerate business transformation worldwide.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl border border-green-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-500 animate-fade-in hover:scale-105" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                We aim to become a global leader in tech-driven growth by putting innovation, integrity, 
                and impact at the center of everything we do.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center animate-fade-in relative" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer hover:shadow-xl relative overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                  style={{
                    backgroundImage: "url('/lovable-uploads/0f40bbf6-4d8b-4465-b3fb-ea78c3c26da6.png')"
                  }}
                />
                <span className="text-2xl font-bold text-white relative z-10">🚀</span>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2 hover:text-blue-600 transition-colors duration-300">Innovation First</h4>
              <p className="text-slate-600">Pushing boundaries with cutting-edge technology solutions</p>
            </div>

            <div className="text-center animate-fade-in relative" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer hover:shadow-xl relative overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                  style={{
                    backgroundImage: "url('/lovable-uploads/686cd42c-ad4d-462e-a245-872be0dbcc50.png')"
                  }}
                />
                <span className="text-2xl font-bold text-white relative z-10">🤝</span>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2 hover:text-green-600 transition-colors duration-300">Integrity</h4>
              <p className="text-slate-600">Building trust through transparent and ethical practices</p>
            </div>

            <div className="text-center animate-fade-in relative" style={{animationDelay: '0.5s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer hover:shadow-xl relative overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                  style={{
                    backgroundImage: "url('/lovable-uploads/d5ab1a33-ea91-4095-a0cf-5ee283b6a191.png')"
                  }}
                />
                <span className="text-2xl font-bold text-white relative z-10">📈</span>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2 hover:text-purple-600 transition-colors duration-300">Impact</h4>
              <p className="text-slate-600">Creating meaningful change that drives business growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
