
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Modern, scalable, and secure websites built to meet your business goals.",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Cross-platform apps with seamless UX and rich functionality.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Designing human-centered, interactive, and intuitive digital experiences.",
      gradient: "from-green-600 to-teal-600"
    },
    {
      icon: "📢",
      title: "Social Media Marketing",
      description: "Helping your brand reach and resonate with the right audience.",
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Turn data into strategic decisions with real-time insights.",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      icon: "⚙️",
      title: "DevOps & MLOps",
      description: "CI/CD pipelines, automation, and model deployment done right.",
      gradient: "from-gray-600 to-slate-600"
    },
    {
      icon: "👥",
      title: "Team as a Service (TaaS)",
      description: "Extend your capabilities with our expert on-demand tech teams.",
      gradient: "from-emerald-600 to-green-600"
    },
    {
      icon: "💡",
      title: "Design Consultancy",
      description: "Creative direction and digital design strategy to future-proof your product.",
      gradient: "from-yellow-600 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            We offer comprehensive digital solutions to transform your business and drive growth
          </p>
          <Link to="/schedule-meeting">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg">
              Schedule a Meeting
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const ServiceCard = ({ children }: { children: React.ReactNode }) => {
              if (service.title === "Web Development") {
                return (
                  <Link 
                    to="/web-development"
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 block"
                  >
                    {children}
                  </Link>
                );
              }
              if (service.title === "UI/UX Design") {
                return (
                  <Link 
                    to="/ui-ux-design"
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 block"
                  >
                    {children}
                  </Link>
                );
              }
              if (service.title === "DevOps & MLOps") {
                return (
                  <Link 
                    to="/devops-mlops"
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 block"
                  >
                    {children}
                  </Link>
                );
              }
              if (service.title === "Data Analytics") {
                return (
                  <Link 
                    to="/data-analytics"
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 block"
                  >
                    {children}
                  </Link>
                );
              }
              if (service.title === "Team as a Service (TaaS)") {
                return (
                  <Link 
                    to="/team-as-service"
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 block"
                  >
                    {children}
                  </Link>
                );
              }
              if (service.title === "Design Consultancy") {
                return (
                  <Link 
                    to="/design-consultancy"
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 block"
                  >
                    {children}
                  </Link>
                );
              }
              return (
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  {children}
                </div>
              );
            };

            return (
              <ServiceCard key={index}>
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mb-4 text-2xl`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </ServiceCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
