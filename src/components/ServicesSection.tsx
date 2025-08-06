import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: "/lovable-uploads/cd558444-e92e-4a4d-96ba-889921baf64a.png",
      title: "Web Development",
      description: "Modern, scalable, and secure websites built to meet your business goals.",
      gradient: "from-blue-600 to-cyan-600",
      isImage: true
    },
    {
      icon: "/lovable-uploads/1f62994e-f120-42bf-a904-aa533ce1bce1.png",
      title: "AI Chatbots",
      description: "Intelligent conversational AI solutions for enhanced customer engagement.",
      gradient: "from-purple-600 to-pink-600",
      isImage: true
    },
    {
      icon: "/lovable-uploads/593872ff-f750-4ed1-a46b-40c29bde3106.png",
      title: "UI/UX Design",
      description: "Designing human-centered, interactive, and intuitive digital experiences.",
      gradient: "from-green-600 to-teal-600",
      isImage: true
    },
    {
      icon: "/lovable-uploads/eaca2941-4b1b-4f28-8826-23cc0619f641.png",
      title: "Social Media Marketing",
      description: "Helping your brand reach and resonate with the right audience.",
      gradient: "from-orange-600 to-red-600",
      isImage: true
    },
    {
      icon: "/lovable-uploads/ff9994ad-c41c-4256-b109-e4f6d56507b0.png",
      title: "Data Analytics",
      description: "Turn data into strategic decisions with real-time insights.",
      gradient: "from-indigo-600 to-purple-600",
      isImage: true
    },
    {
      icon: "/lovable-uploads/eeaca5fc-07f0-4302-8f4d-913c56069ea2.png",
      title: "DevOps & MLOps",
      description: "CI/CD pipelines, automation, and model deployment done right.",
      gradient: "from-gray-600 to-slate-600",
      isImage: true
    },
    {
      icon: "/lovable-uploads/c762a07b-6757-48c3-9700-91a8784506bb.png",
      title: "Team as a Service (TaaS)",
      description: "Extend your capabilities with our expert on-demand tech teams.",
      gradient: "from-emerald-600 to-green-600",
      isImage: true
    },
    {
      icon: "/lovable-uploads/4935cf0a-16b7-4f03-905d-3165d10f4581.png",
      title: "Design Consultancy",
      description: "Creative direction and digital design strategy to future-proof your product.",
      gradient: "from-yellow-600 to-orange-600",
      isImage: true
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(to right, #0D1B2A, #1B263B)'}}>
      {/* Futuristic 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#33F3FF10'}}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s', backgroundColor: '#00BFFF10'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-300/10 to-blue-400/10 rounded-full blur-xl animate-bounce" style={{backgroundColor: '#1EC8E810'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300 tracking-tight drop-shadow-lg" style={{color: '#F0F4F8'}}>Our Services</h2>
          <div className="w-32 h-1 mx-auto mb-8 animate-scale-in rounded-full shadow-lg" style={{background: 'linear-gradient(to right, #00BFFF, #33F3FF)', boxShadow: '0 0 20px #33F3FF50'}}></div>
          <p className="text-xl max-w-3xl mx-auto mb-8 animate-fade-in leading-relaxed drop-shadow-md" style={{animationDelay: '0.2s', color: '#9BE3FF'}}>
            We offer comprehensive digital solutions to transform your business and drive growth
          </p>
          <Link to="/schedule-meeting" className="animate-fade-in inline-block" style={{animationDelay: '0.4s'}}>
            <Button 
              className="px-10 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 backdrop-blur-sm border-2 hover:shadow-xl"
              style={{
                background: 'linear-gradient(to right, #00BFFF, #33F3FF)',
                color: '#0D1B2A',
                borderColor: '#264653',
                boxShadow: '0 10px 30px #00BFFF30'
              }}
            >
              Schedule a Meeting
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const ServiceCard = ({ children }: { children: React.ReactNode }) => {
              const baseClasses = "relative backdrop-blur-md p-8 rounded-2xl transition-all duration-500 hover:-translate-y-6 hover:scale-105 group overflow-hidden h-full min-h-[320px] flex flex-col shadow-2xl";
              const cardStyle = {
                background: 'rgba(13, 27, 42, 0.3)',
                borderColor: '#264653',
                borderWidth: '2px',
                borderStyle: 'solid',
                boxShadow: '0 10px 30px rgba(51, 243, 255, 0.1)'
              };
              
              if (service.title === "Web Development") {
                return (
                  <Link to="/web-development" className={baseClasses} style={cardStyle}>
                    {children}
                  </Link>
                );
              }
              if (service.title === "UI/UX Design") {
                return (
                  <Link to="/ui-ux-design" className={baseClasses} style={cardStyle}>
                    {children}
                  </Link>
                );
              }
              if (service.title === "DevOps & MLOps") {
                return (
                  <Link to="/devops-mlops" className={baseClasses} style={cardStyle}>
                    {children}
                  </Link>
                );
              }
              if (service.title === "Data Analytics") {
                return (
                  <Link to="/data-analytics" className={baseClasses} style={cardStyle}>
                    {children}
                  </Link>
                );
              }
              if (service.title === "Team as a Service (TaaS)") {
                return (
                  <Link to="/team-as-service" className={baseClasses} style={cardStyle}>
                    {children}
                  </Link>
                );
              }
              if (service.title === "Design Consultancy") {
                return (
                  <Link to="/design-consultancy" className={baseClasses} style={cardStyle}>
                    {children}
                  </Link>
                );
              }
              if (service.title === "AI Chatbots") {
                return (
                  <Link to="/ai-chatbots" className={baseClasses} style={cardStyle}>
                    {children}
                  </Link>
                );
              }
              return (
                <div className={baseClasses} style={cardStyle}>
                  {children}
                </div>
              );
            };

            return (
              <div className="animate-fade-in h-full" style={{animationDelay: `${index * 0.1}s`}} key={index}>
                <ServiceCard>
                  {/* Background Image for services with images */}
                  {service.isImage && (
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                      style={{
                        backgroundImage: `url(${service.icon})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {!service.isImage && (
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mb-4 text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 flex-shrink-0`}>
                        {service.icon}
                      </div>
                    )}
                    <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 flex-shrink-0" style={{color: '#F0F4F8'}}>{service.title}</h3>
                    <p className="leading-relaxed flex-grow text-base" style={{color: '#9BE3FF'}}>{service.description}</p>
                  </div>
                </ServiceCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;