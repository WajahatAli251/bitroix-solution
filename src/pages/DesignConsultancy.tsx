import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUp } from "lucide-react";
import designImage from '@/assets/ui-ux-design.jpg';
import figmaLogo from '@/assets/tech-logos/figma.svg';
import adobeXDLogo from '@/assets/tech-logos/adobe-xd.png';
import sketchLogo from '@/assets/tech-logos/sketch.png';
import invisionLogo from '@/assets/tech-logos/invision.png';
import illustratorLogo from '@/assets/tech-logos/adobe-illustrator.png';
import photoshopLogo from '@/assets/tech-logos/adobe-photoshop.svg';
import miroLogo from '@/assets/tech-logos/miro.png';
import framerLogo from '@/assets/tech-logos/framer.png';

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

  const designTools = [
    { name: "Figma", logo: figmaLogo },
    { name: "Adobe XD", logo: adobeXDLogo },
    { name: "Sketch", logo: sketchLogo },
    { name: "InVision", logo: invisionLogo },
    { name: "Illustrator", logo: illustratorLogo },
    { name: "Photoshop", logo: photoshopLogo },
    { name: "Miro", logo: miroLogo },
    { name: "Framer", logo: framerLogo }
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Design & Prototyping Tools</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {designTools.map((tool, index) => (
              <div key={index} className="group text-center transition-transform duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h4 className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-300">{tool.name}</h4>
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