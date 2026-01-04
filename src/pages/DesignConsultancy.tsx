import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUp, Check, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Technology Logo Imports
import figmaLogo from '@/assets/tech-logos/figma.svg';
import adobeXDLogo from '@/assets/tech-logos/adobe-xd.png';
import sketchLogo from '@/assets/tech-logos/sketch.png';
import invisionLogo from '@/assets/tech-logos/invision.png';
import illustratorLogo from '@/assets/tech-logos/adobe-illustrator.png';
import photoshopLogo from '@/assets/tech-logos/adobe-photoshop.svg';
import miroLogo from '@/assets/tech-logos/miro.png';
import framerLogo from '@/assets/tech-logos/framer.png';
import notionLogo from '@/assets/tech-logos/notion.png';

const DesignConsultancy = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const processSteps = [
    {
      number: "01",
      title: "Question Framing",
      description: "We define the problem to ensure the team understands the challenge. We aim to develop designs focused on improving the system as a whole.",
      deliverables: ["Problem Statement", "Success Criteria", "Stakeholder Alignment"]
    },
    {
      number: "02", 
      title: "User Research",
      description: "Deep dive into understanding your users through interviews, surveys, and behavioral analysis. We uncover needs, motivations, and pain points.",
      deliverables: ["User Interviews", "Survey Results", "Behavioral Insights"]
    },
    {
      number: "03",
      title: "Synthesis & Insights", 
      description: "All research (qualitative, quantitative, competitive) is brought together to produce high-level insights and opportunities to focus on.",
      deliverables: ["Insight Report", "Opportunity Map", "Priority Framework"]
    },
    {
      number: "04",
      title: "Ideation & Brainstorming",
      description: "We generate diverse ideas related to the insights and opportunities prioritized previously. Creativity meets strategy in this collaborative phase.",
      deliverables: ["Concept Sketches", "Solution Ideas", "Feature Prioritization"]
    },
    {
      number: "05", 
      title: "Design & Prototype",
      description: "We create wireframes, high-fidelity mockups, and interactive prototypes that bring concepts to life for testing and validation.",
      deliverables: ["Wireframes", "UI Mockups", "Interactive Prototypes"]
    },
    {
      number: "06",
      title: "Validation & Testing",
      description: "Real users test the designs to identify issues and validate solutions. We iterate based on feedback to ensure optimal user satisfaction.",
      deliverables: ["Usability Testing", "Feedback Analysis", "Design Iterations"]
    }
  ];

  const projects = [
    {
      name: "Brand Identity Transformation",
      image: "/lovable-uploads/ea84eed2-aedd-4e10-bf63-c50b58e678d0.png",
      description: "Complete brand identity redesign for a tech startup entering competitive market.",
      challenge: "A tech startup needed to differentiate from competitors with a memorable brand that resonates with enterprise clients.",
      solution: "Conducted competitive analysis, stakeholder interviews, and developed a comprehensive brand system including logo, colors, typography, and guidelines.",
      results: ["Brand recognition increased by 150%", "Consistent brand application across 20+ touchpoints", "Enterprise client acquisition improved"],
      technologies: ["Figma", "Illustrator", "Photoshop", "Notion"]
    },
    {
      name: "Digital Product Strategy",
      image: "/lovable-uploads/493057ed-0ac4-4d3e-8757-4d74738ae407.png",
      description: "Strategic design consulting for a fintech company launching a new mobile banking product.",
      challenge: "Fintech company needed to understand user needs and define product-market fit before investing in development.",
      solution: "Conducted extensive user research, competitive analysis, and developed product strategy with validated wireframes and prototype.",
      results: ["Product-market fit validated before development", "User testing confirmed 85% task completion rate", "Clear product roadmap established"],
      technologies: ["Miro", "Figma", "User Research", "InVision"]
    },
    {
      name: "Design System Creation",
      image: "/lovable-uploads/d2c59e78-f414-40f1-8239-a8d004e25144.png",
      description: "Comprehensive design system for a growing SaaS company with multiple products.",
      challenge: "Multiple product teams were creating inconsistent user experiences with duplicated design effort.",
      solution: "Created a unified design system with reusable components, patterns, documentation, and governance framework.",
      results: ["50% reduction in design time", "Consistent experience across 5 products", "Improved developer-designer collaboration"],
      technologies: ["Figma", "Storybook", "Notion", "Framer"]
    }
  ];

  const allTechnologies = [
    { name: "Figma", logo: figmaLogo },
    { name: "Adobe XD", logo: adobeXDLogo },
    { name: "Sketch", logo: sketchLogo },
    { name: "InVision", logo: invisionLogo },
    { name: "Illustrator", logo: illustratorLogo },
    { name: "Photoshop", logo: photoshopLogo },
    { name: "Miro", logo: miroLogo },
    { name: "Framer", logo: framerLogo },
    { name: "Notion", logo: notionLogo },
  ];

  const duplicatedTech = [...allTechnologies, ...allTechnologies];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Digital Strategy Consulting - Design Thinking & UX Strategy"
        description="Strategic design consulting services. User research, brand strategy, design systems, and product strategy. Transform your digital presence with expert guidance."
        keywords="design consulting, UX strategy, design thinking, brand strategy, design systems, product strategy, user research"
        canonicalUrl="https://bitroixsolution.com/design-consultancy"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Digital Strategy Consulting",
          "provider": {"@type": "Organization", "name": "Bitroix Solution LLC"},
          "description": "Strategic design consulting services with design thinking and UX strategy.",
          "serviceType": "Design Consulting"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://bitroixsolution.com" },
          { name: "Services", url: "https://bitroixsolution.com/#services" },
          { name: "Design Consultancy", url: "https://bitroixsolution.com/design-consultancy" }
        ]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Digital Strategy <span className="text-yellow-400">Consulting</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Creative direction and digital design strategy to future-proof your product with human-centered design solutions.
          </p>
          <Link to="/schedule-meeting">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg rounded-full">
              Start Your Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
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
                Our design team uncovers deep insights about your customers, helping you gain clear understanding 
                of their needs. We integrate design thinking with human-centered design process to perform audits 
                of apps, SaaS products, websites, and other digital products.
              </p>
            </div>
          </div>

          {/* What We Offer Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              What We <span className="text-gray-500">Offer</span>
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
              {["User Research", "Design Strategy", "Brand Identity", "Design Systems", "UX Audits", "Prototyping"].map((service, index) => (
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

      {/* Our Approach - Process Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-yellow-400">Approach</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven design thinking methodology that ensures we deliver solutions grounded in user insights and business goals.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-500/30 h-full" />
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-500 rounded-full items-center justify-center z-10 shadow-lg shadow-yellow-500/50">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 group hover:transform hover:scale-[1.02]">
                      <div className="flex items-center gap-4 mb-4 lg:hidden">
                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{step.number}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <h3 className="hidden lg:block text-2xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                      <div className="space-y-2">
                        <span className="text-sm text-yellow-400 font-semibold uppercase tracking-wider">Key Deliverables</span>
                        <ul className="space-y-2">
                          {step.deliverables.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300">
                              <Check className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-yellow-500">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore strategic design engagements we've delivered. Each project showcases our commitment to human-centered design thinking.
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <article 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={project.image}
                      alt={`${project.name} project`}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                      <span className="text-white font-semibold flex items-center gap-2">
                        View Project <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">{project.name}</h3>
                  <p className="text-gray-600 text-lg">{project.description}</p>
                  
                  <div className="bg-yellow-50 rounded-xl p-6">
                    <h4 className="font-semibold text-yellow-800 mb-2">The Challenge</h4>
                    <p className="text-gray-700">{project.challenge}</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="font-semibold text-green-800 mb-2">Our Solution</h4>
                    <p className="text-gray-700">{project.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Results Achieved</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Tools & Methods</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Design <span className="text-yellow-500">Portfolio</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of design work across different categories
            </p>
          </div>

          {/* Character Design/Illustration */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Character Design & <span className="text-yellow-500">Illustration</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "/lovable-uploads/493057ed-0ac4-4d3e-8757-4d74738ae407.png",
                "/lovable-uploads/d2c59e78-f414-40f1-8239-a8d004e25144.png",
                "/lovable-uploads/a68b44d7-785d-4ffa-af57-1847ab8e3d37.png",
                "/lovable-uploads/9a5b5349-376f-4606-acdf-25f2b6941152.png"
              ].map((src, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={src} 
                    alt={`Illustration ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Card */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Business Card & <span className="text-yellow-500">Print Design</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "/lovable-uploads/3e881009-4665-4ed6-bb89-ce79ed6092ab.png",
                "/lovable-uploads/f091ac58-58b7-460b-9945-9e4d90478c20.png",
                "/lovable-uploads/37e4eb15-b9a8-4e36-9e73-9dfba8dc36c2.png",
                "/lovable-uploads/41bed1ea-35ec-4ef7-aab7-4f0d0759bcba.png"
              ].map((src, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={src} 
                    alt={`Business Card Design ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Master - Animated Carousel */}
      <section className="py-16 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Design <span className="text-yellow-400">Tools We Master</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Industry-leading tools for research, design, and prototyping
            </p>
          </div>

          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex overflow-x-hidden gap-8 pb-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedTech.map((tech, index) => (
              <div 
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-28 h-28 bg-white/10 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center p-4 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:scale-110 hover:bg-white/20">
                  <img 
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="w-12 h-12 object-contain mb-2"
                    loading="lazy"
                  />
                  <span className="text-white text-xs font-medium text-center truncate w-full">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Digital Strategy?</h2>
          <p className="text-xl text-yellow-100 mb-8">
            Let's create a design strategy that delivers measurable results for your business.
          </p>
          <Link to="/schedule-meeting">
            <Button className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold">
              Start Your Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-yellow-600 hover:bg-yellow-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <Footer />
    </div>
  );
};

export default DesignConsultancy;
