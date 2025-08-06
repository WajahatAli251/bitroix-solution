import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import uiuxImage from '@/assets/ui-ux-design.jpg';

// Technology Logo Imports
import figmaLogo from '@/assets/tech-logos/figma.svg';
import adobeIllustratorLogo from '@/assets/tech-logos/adobe-illustrator.png';
import adobePhotoshopLogo from '@/assets/tech-logos/adobe-photoshop.svg';
import adobeXdLogo from '@/assets/tech-logos/adobe-xd.png';
import miroLogo from '@/assets/tech-logos/miro.png';
import sketchLogo from '@/assets/tech-logos/sketch.png';
import invisionLogo from '@/assets/tech-logos/invision.png';
import framerLogo from '@/assets/tech-logos/framer.png';
import reactLogo from '@/assets/tech-logos/react.svg';
import typescriptLogo from '@/assets/tech-logos/typescript.svg';
import nodejsLogo from '@/assets/tech-logos/nodejs.svg';
import dockerLogo from '@/assets/tech-logos/docker.png';
import awsLogo from '@/assets/tech-logos/aws.png';
import mongodbLogo from '@/assets/tech-logos/mongodb.png';

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

  const uiuxTechnologies = [
    { name: "Figma", logo: figmaLogo, category: "Design" },
    { name: "Adobe Illustrator", logo: adobeIllustratorLogo, category: "Design" },
    { name: "Adobe Photoshop", logo: adobePhotoshopLogo, category: "Design" },
    { name: "Adobe XD", logo: adobeXdLogo, category: "Design" },
    { name: "Miro", logo: miroLogo, category: "Collaboration" },
    { name: "Sketch", logo: sketchLogo, category: "Design" },
    { name: "InVision", logo: invisionLogo, category: "Prototyping" },
    { name: "Framer", logo: framerLogo, category: "Prototyping" }
  ];

  const developmentTechnologies = [
    { name: "React", logo: reactLogo, category: "Frontend" },
    { name: "TypeScript", logo: typescriptLogo, category: "Language" },
    { name: "Node.js", logo: nodejsLogo, category: "Backend" },
    { name: "Docker", logo: dockerLogo, category: "DevOps" },
    { name: "AWS", logo: awsLogo, category: "Cloud" },
    { name: "MongoDB", logo: mongodbLogo, category: "Database" }
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
      <section className="py-16 bg-background dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Technologies <span className="text-primary">We Master</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional tools and technologies we use to create stunning digital experiences
            </p>
          </div>
          
          {/* UI/UX Design Tools */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Design & <span className="text-primary">Prototyping Tools</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
              {uiuxTechnologies.map((tech, index) => (
                <div key={index} className="group text-center hover-lift">
                  <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 glow-primary group-hover:glow-tech">
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Development Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Development & <span className="text-primary">Infrastructure</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {developmentTechnologies.map((tech, index) => (
                <div key={index} className="group text-center hover-lift">
                  <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 glow-primary group-hover:glow-tech">
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UIUXDesign;