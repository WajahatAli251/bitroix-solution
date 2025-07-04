import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import uiuxImage from '@/assets/ui-ux-design.jpg';

const UIUXDesign = () => {
  const approachSteps = [
    {
      number: "01",
      title: "Product Definition",
      description: "We initiate the process by collecting, analyzing and defining requirements to understand user desires and goals."
    },
    {
      number: "02", 
      title: "Product Research",
      description: "User and market research is performed that helps to understand the target audience and understand industry standards."
    },
    {
      number: "03",
      title: "Analysis", 
      description: "Insights are drawn from collected data during research phase. This phase includes: User personas, User flows, Storyboarding"
    },
    {
      number: "04",
      title: "Design",
      description: "The design phase includes: Wireframes, Mockups, Prototypes, Design System"
    },
    {
      number: "05", 
      title: "Validation (Testing)",
      description: "A website, app or other digital product's design (UI) and usability (UX) user experience is tested with real users."
    }
  ];

  const technologies = [
    { name: "Figma", icon: "🎨" },
    { name: "Adobe Illustrator", icon: "🔶" },
    { name: "Adobe Photoshop", icon: "🟦" },
    { name: "Miro", icon: "💡" },
    { name: "Sketch", icon: "💎" },
    { name: "Adobe XD", icon: "🔮" },
    { name: "InVision", icon: "🎯" },
    { name: "Principle", icon: "⚡" },
    { name: "Framer", icon: "🎭" },
    { name: "Zeplin", icon: "📐" }
  ];

  const handleScheduleMeeting = () => {
    // For now, we'll redirect to a calendar booking service
    // You can replace this with your actual scheduling system
    window.open("https://calendly.com/your-calendar", "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            UI/UX <span className="text-purple-400">Design</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Designing human-centered, interactive, and intuitive digital experiences
          </p>
          <Button 
            onClick={handleScheduleMeeting}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
          >
            Schedule a Meeting
          </Button>
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
                We at Bitroix design digital products with user-first approach. We create products that are 
                visually appealing and highly pleasant to interact with. Our design process focuses on 
                understanding user needs and creating intuitive experiences that drive engagement and satisfaction.
              </p>
            </div>
          </div>

          {/* What We Offer Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              What We <span className="text-gray-500">Offer</span>
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
              {["Mobile & Web Design", "Cross Platform Compatibility", "Software Redesign"].map((service, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                    <div className="text-2xl">✨</div>
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

export default UIUXDesign;