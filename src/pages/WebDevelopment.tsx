
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WebDevelopment = () => {
  const approachSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Initial research is done to gather relevant information about scope, objective, features, processes & expectations."
    },
    {
      number: "02", 
      title: "Information Architecture",
      description: "Arrange information to meet user requirements that shows hierarchy of how the information on your website is organized."
    },
    {
      number: "03",
      title: "Wireframes, Mockups & Prototypes", 
      description: "Schema of web page is created to show low-fidelity representation of different screens that form a product. That schema is converted to high-fidelity mockups that mimic the look and feel of website before it is actually developed."
    },
    {
      number: "04",
      title: "Development",
      description: "Our exceptional programmers code the business logic, integrate user interface with the backend database, and build custom features that are specific to the given project."
    },
    {
      number: "05", 
      title: "Quality Assurance",
      description: "Ensure proper quality of the software and compliance with the gathered requirements. This step is crucial to ensure that the final end product is smooth and bug free."
    },
    {
      number: "06",
      title: "Launch", 
      description: "This is the final phase where the application is rolled into production and made available to users."
    }
  ];

  const technologies = [
    { name: "HTML 5", icon: "🌐" },
    { name: "CSS 3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: ".NET", icon: "🔷" }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background Image with Transparency */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/lovable-uploads/eb7b0242-9c5d-4d81-9044-abe3320bd683.png')"
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-900/40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Web <span className="text-blue-400">Development</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Crafting digital experiences that drive business growth
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Overview <span className="text-gray-500">Of Service</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl text-yellow-500 mb-6">"</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We utilize top web technologies to bring your idea into existence. From simple responsive web 
                applications to complex enterprise platform, we are your one stop shop for all. We understand the 
                needs of our users and develop websites that are not only aesthetically pleasing but have great 
                user experience too.
              </p>
            </div>
          </div>

          {/* What We Offer Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              What We <span className="text-gray-500">Offer</span>
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {["SaaS Products", "Custom Applications", "Web Portals", "E-Commerce", "API Development"].map((service, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                    <div className="w-8 h-8 bg-yellow-500 rounded"></div>
                  </div>
                  <h4 className="font-semibold text-gray-900">{service}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Title */}
            <div>
              <h2 className="text-5xl font-bold text-white mb-6">
                Our <span className="text-yellow-500">Approach</span>
              </h2>
            </div>

            {/* Right side - Steps */}
            <div className="space-y-8">
              {approachSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <span className="text-3xl font-bold text-gray-900">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Technologies <span className="text-gray-500">We Have Experts In</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <span className="text-3xl">{tech.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
