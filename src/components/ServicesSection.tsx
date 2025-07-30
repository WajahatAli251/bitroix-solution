
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
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 animate-scale-in"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            We offer comprehensive digital solutions to transform your business and drive growth
          </p>
          <Link to="/schedule-meeting" className="animate-fade-in inline-block" style={{animationDelay: '0.4s'}}>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:scale-105 hover:shadow-lg transition-all duration-300">
              Schedule a Meeting
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const ServiceCard = ({ children }: { children: React.ReactNode }) => {
              const baseClasses = "relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-4 hover:scale-105 group overflow-hidden h-full min-h-[280px] flex flex-col";
              
              if (service.title === "Web Development") {
                return (
                  <Link to="/web-development" className={baseClasses}>
                    {children}
                  </Link>
                );
              }
              if (service.title === "UI/UX Design") {
                return (
                  <Link to="/ui-ux-design" className={baseClasses}>
                    {children}
                  </Link>
                );
              }
              if (service.title === "DevOps & MLOps") {
                return (
                  <Link to="/devops-mlops" className={baseClasses}>
                    {children}
                  </Link>
                );
              }
              if (service.title === "Data Analytics") {
                return (
                  <Link to="/data-analytics" className={baseClasses}>
                    {children}
                  </Link>
                );
              }
              if (service.title === "Team as a Service (TaaS)") {
                return (
                  <Link to="/team-as-service" className={baseClasses}>
                    {children}
                  </Link>
                );
              }
              if (service.title === "Design Consultancy") {
                return (
                  <Link to="/design-consultancy" className={baseClasses}>
                    {children}
                  </Link>
                );
              }
              if (service.title === "AI Chatbots") {
                return (
                  <Link to="/ai-chatbots" className={baseClasses}>
                    {children}
                  </Link>
                );
              }
              return (
                <div className={baseClasses}>
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
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300 flex-shrink-0">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed flex-grow text-base">{service.description}</p>
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
