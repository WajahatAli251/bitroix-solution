import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUp } from "lucide-react";

const DesignConsultancy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scheduleRedirect = () => {
    window.location.href = "mailto:contact@bitroixsolution.com?subject=Schedule Meeting - Design Consultancy";
  };

  const offerings = [
    "User Research",
    "Information Architecture", 
    "Competitor Analysis",
    "Wireframes & Mockups",
    "Prototyping",
    "Usability Testing"
  ];

  const approach = [
    {
      number: "01",
      title: "Question Framing",
      description: "The problem is defined so that the team can begin to examine it. It aims to develop designs focused on improving the system as a whole."
    },
    {
      number: "02", 
      title: "User Research",
      description: "The problem is defined so that the team can begin to examine it. It aims to develop designs focused on improving the system as a whole."
    },
    {
      number: "03",
      title: "Synthesis", 
      description: "All the research (qualitative, quantitative, competitve etc) is bring together to produce high-level insights and opportunities to focus on."
    },
    {
      number: "04",
      title: "Ideation & Brainstorming",
      description: "In this step we create as many ideas as possible related to the insights and opportunities prioritized previously."
    },
    {
      number: "05",
      title: "Design",
      description: "The design phase includes: Wireframes, Mockups, Prototypes, Design System"
    },
    {
      number: "06",
      title: "Validation (Testing)", 
      description: "A website, app or other digital product's design (UI) and usability (UX) user experience is tested with real users."
    }
  ];

  const technologies = [
    { name: "Figma", icon: "🎨" },
    { name: "Adobe XD", icon: "🔷" },
    { name: "Sketch", icon: "💎" },
    { name: "InVision", icon: "🔮" },
    { name: "Principle", icon: "⚡" },
    { name: "Framer", icon: "🖼️" },
    { name: "Miro", icon: "📝" },
    { name: "Hotjar", icon: "📊" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 to-yellow-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Design Consultancy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Creative direction and digital design strategy to future-proof your product with human-centered design solutions.
            </p>
            <Button 
              onClick={scheduleRedirect}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg text-lg"
            >
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Overview Of Service</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="text-6xl text-orange-400 mb-6">"</div>
                <p className="text-xl text-slate-600 leading-relaxed italic">
                  Our design team at ByteCorp uncover deep insights about your customers where we help you gain clear understanding of your customers and their needs. We integrate design thinking with human-centered design process to perform audits of apps, SaaS products, websites and other digital products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <div className="text-3xl">🎯</div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{offering}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approach.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-yellow-500 bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Technologies We Have Experts In</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-medium text-slate-900">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-yellow-600 hover:bg-yellow-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <Footer />
    </div>
  );
};

export default DesignConsultancy;