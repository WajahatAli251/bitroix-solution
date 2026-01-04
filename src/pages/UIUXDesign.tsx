import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
import tailwindLogo from '@/assets/tech-logos/tailwind.png';

// Project Images
import cosbarProject from '@/assets/projects/cosbar-website.png';
import proflowersProject from '@/assets/projects/proflowers-website.png';
import taogroupProject from '@/assets/projects/taogroup-website.png';
import truecareProject from '@/assets/projects/truecare-website.png';

const UIUXDesign = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

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
      title: "Product Definition",
      description: "We initiate the process by collecting, analyzing and defining requirements to understand user desires and goals. This foundation ensures all design decisions align with your business objectives.",
      deliverables: ["Requirements Analysis", "Stakeholder Interviews", "Project Scope"]
    },
    {
      number: "02", 
      title: "User Research",
      description: "User and market research is performed to understand the target audience and industry standards. We analyze user behavior, preferences, and pain points.",
      deliverables: ["User Personas", "User Journey Maps", "Market Analysis"]
    },
    {
      number: "03",
      title: "Information Architecture", 
      description: "We organize and structure content to ensure intuitive navigation and logical information flow. This creates a solid foundation for the user experience.",
      deliverables: ["Site Maps", "User Flows", "Content Hierarchy"]
    },
    {
      number: "04",
      title: "Wireframes & Prototypes",
      description: "Low-fidelity wireframes evolve into interactive prototypes that bring your product to life. We iterate based on feedback to perfect the user experience.",
      deliverables: ["Wireframes", "Interactive Prototypes", "Click-through Demos"]
    },
    {
      number: "05", 
      title: "Visual Design",
      description: "High-fidelity mockups with carefully chosen colors, typography, and visual elements create a cohesive and stunning design system.",
      deliverables: ["UI Mockups", "Design System", "Style Guide"]
    },
    {
      number: "06",
      title: "Usability Testing",
      description: "Real users test the design to identify issues and validate solutions. We iterate based on findings to ensure optimal user satisfaction.",
      deliverables: ["User Testing Sessions", "Feedback Analysis", "Design Iterations"]
    }
  ];

  const projects = [
    {
      name: "Cos Bar",
      image: cosbarProject,
      description: "Luxury cosmetics brand requiring an elegant, premium shopping experience design.",
      challenge: "Create a high-end e-commerce design that reflects the luxury brand positioning while ensuring seamless user navigation.",
      solution: "Designed an immersive visual experience with sophisticated product showcases, intuitive filtering, and a streamlined checkout flow.",
      results: ["55% improvement in user engagement", "Premium brand perception enhanced", "Mobile-first responsive design"],
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Testing"]
    },
    {
      name: "ProFlowers",
      image: proflowersProject,
      description: "National flower delivery service needing an emotional, conversion-focused design.",
      challenge: "Design an interface that evokes emotional connection while simplifying the gift-giving experience.",
      solution: "Created a warm, inviting design with occasion-based navigation, beautiful product photography integration, and urgency-driven checkout.",
      results: ["40% increase in conversion rate", "Reduced bounce rate by 30%", "Improved seasonal campaign flexibility"],
      technologies: ["Sketch", "InVision", "Adobe Photoshop", "User Research"]
    },
    {
      name: "TAO Group Hospitality",
      image: taogroupProject,
      description: "Multi-venue hospitality brand requiring a cohesive digital identity across diverse properties.",
      challenge: "Unite multiple nightlife and restaurant venues under one digital experience while maintaining individual venue personalities.",
      solution: "Developed a flexible design system with venue-specific themes, immersive imagery, and seamless reservation integration.",
      results: ["Unified brand experience", "60% increase in online bookings", "Award-winning visual design"],
      technologies: ["Figma", "Adobe Illustrator", "Framer", "Motion Design"]
    },
    {
      name: "TrueCare",
      image: truecareProject,
      description: "Healthcare platform requiring accessible, trustworthy, and compliant design.",
      challenge: "Design a healthcare interface that builds trust while making complex information accessible to all users.",
      solution: "Created an accessible, WCAG-compliant design with clear information architecture, calming visuals, and intuitive patient flows.",
      results: ["WCAG 2.1 AA compliance", "35% reduction in support calls", "Improved patient satisfaction scores"],
      technologies: ["Figma", "Adobe XD", "Accessibility Testing", "Miro"]
    }
  ];

  const allTechnologies = [
    { name: "Figma", logo: figmaLogo },
    { name: "Adobe XD", logo: adobeXdLogo },
    { name: "Sketch", logo: sketchLogo },
    { name: "InVision", logo: invisionLogo },
    { name: "Illustrator", logo: adobeIllustratorLogo },
    { name: "Photoshop", logo: adobePhotoshopLogo },
    { name: "Miro", logo: miroLogo },
    { name: "Framer", logo: framerLogo },
    { name: "React", logo: reactLogo },
    { name: "TypeScript", logo: typescriptLogo },
    { name: "Tailwind", logo: tailwindLogo },
  ];

  const duplicatedTech = [...allTechnologies, ...allTechnologies];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="UI/UX Design Services - Human-Centered Digital Experiences"
        description="Expert UI/UX design services creating intuitive digital experiences. Figma, Adobe XD specialists. Mobile & web design, prototyping, user research."
        keywords="UI UX design services, user interface design, user experience agency, Figma design, Adobe XD, mobile app design, web design, prototyping, wireframing, design system"
        canonicalUrl="https://bitroixsolution.com/ui-ux-design"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "UI/UX Design Services",
          "provider": {"@type": "Organization", "name": "Bitroix Solution LLC"},
          "description": "Professional UI/UX design services creating human-centered, intuitive digital experiences.",
          "serviceType": "Design Services"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://bitroixsolution.com" },
          { name: "Services", url: "https://bitroixsolution.com/#services" },
          { name: "UI/UX Design", url: "https://bitroixsolution.com/ui-ux-design" }
        ]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            UI/UX <span className="text-purple-400">Design Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Designing human-centered, interactive, and intuitive digital experiences that delight users and drive business results.
          </p>
          <Link to="/schedule-meeting">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full">
              Start Your Design Project <ArrowRight className="ml-2 w-5 h-5" />
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
              <div className="text-6xl text-purple-500 mb-6">"</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We design digital products with a user-first approach. Our team creates products that are 
                visually appealing and highly pleasant to interact with. We focus on understanding user needs 
                and creating intuitive experiences that drive engagement and satisfaction.
              </p>
            </div>
          </div>

          {/* What We Offer Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              What We <span className="text-gray-500">Offer</span>
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {["Mobile & Web Design", "Design Systems", "User Research", "Prototyping", "Usability Testing"].map((service, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <div className="w-8 h-8 bg-purple-500 rounded"></div>
                  </div>
                  <h4 className="font-semibold text-gray-900">{service}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Design - Process Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-purple-400">Design Process</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our user-centered design process ensures we create experiences that truly resonate with your audience and achieve your business goals.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-500/30 h-full" />
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-500 rounded-full items-center justify-center z-10 shadow-lg shadow-purple-500/50">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:scale-[1.02]">
                      <div className="flex items-center gap-4 mb-4 lg:hidden">
                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{step.number}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <h3 className="hidden lg:block text-2xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                      <div className="space-y-2">
                        <span className="text-sm text-purple-400 font-semibold uppercase tracking-wider">Key Deliverables</span>
                        <ul className="space-y-2">
                          {step.deliverables.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300">
                              <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
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
              Our <span className="text-purple-500">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the design transformations we've delivered. Each project showcases our commitment to user-centered design that drives real business results.
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
                      alt={`${project.name} design showcase`}
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
                  
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h4 className="font-semibold text-purple-800 mb-2">The Challenge</h4>
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
                    <h4 className="font-semibold text-gray-900 mb-3">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
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

      {/* Technologies We Master - Animated Carousel */}
      <section className="py-16 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies <span className="text-purple-400">We Master</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Industry-leading design tools and technologies we use to create stunning experiences
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
                <div className="w-28 h-28 bg-white/10 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center p-4 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 hover:bg-white/20">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your User Experience?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's create designs that your users will love and that drive real business results.
          </p>
          <Link to="/schedule-meeting">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold">
              Start Your Design Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UIUXDesign;
