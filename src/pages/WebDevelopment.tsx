import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, ExternalLink } from "lucide-react";

// Technology Logo Imports
import reactLogo from '@/assets/tech-logos/react.svg';
import nextjsLogo from '@/assets/tech-logos/nextjs.png';
import nodejsLogo from '@/assets/tech-logos/nodejs.svg';
import typescriptLogo from '@/assets/tech-logos/typescript.svg';
import javascriptLogo from '@/assets/tech-logos/javascript.png';
import html5Logo from '@/assets/tech-logos/html5.png';
import css3Logo from '@/assets/tech-logos/css3.png';
import tailwindLogo from '@/assets/tech-logos/tailwind.png';
import bootstrapLogo from '@/assets/tech-logos/bootstrap.png';
import djangoLogo from '@/assets/tech-logos/django.png';
import laravelLogo from '@/assets/tech-logos/laravel.png';
import expressLogo from '@/assets/tech-logos/express.png';
import mongodbLogo from '@/assets/tech-logos/mongodb.png';
import postgresqlLogo from '@/assets/tech-logos/postgresql.png';
import mysqlLogo from '@/assets/tech-logos/mysql.png';
import pythonLogo from '@/assets/tech-logos/python.png';
import awsLogo from '@/assets/tech-logos/aws.png';
import dockerLogo from '@/assets/tech-logos/docker.png';
import gitLogo from '@/assets/tech-logos/git.png';

// Project Images
import cosbarProject from '@/assets/projects/cosbar-website.png';
import proflowersProject from '@/assets/projects/proflowers-website.png';
import taogroupProject from '@/assets/projects/taogroup-website.png';
import truecareProject from '@/assets/projects/truecare-website.png';

const WebDevelopment = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Animated tech carousel effect
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
      title: "Discovery & Consultation",
      description: "We begin with a deep-dive consultation to understand your business goals, target audience, and project requirements. We analyze your competitors and identify opportunities for differentiation.",
      deliverables: ["Requirements Document", "Competitor Analysis", "Project Roadmap"]
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "Based on our discovery, we create a comprehensive strategy including site architecture, user flows, and technical specifications. We define milestones and establish clear timelines.",
      deliverables: ["Information Architecture", "Technical Specifications", "Project Timeline"]
    },
    {
      number: "03",
      title: "UI/UX Design",
      description: "Our designers create wireframes and high-fidelity mockups that bring your vision to life. We focus on user experience, ensuring intuitive navigation and engaging interfaces.",
      deliverables: ["Wireframes", "UI Mockups", "Interactive Prototypes"]
    },
    {
      number: "04",
      title: "Development",
      description: "Our expert developers bring the designs to life using cutting-edge technologies. We follow agile methodologies with regular updates and iterative improvements.",
      deliverables: ["Frontend Development", "Backend Integration", "API Development"]
    },
    {
      number: "05",
      title: "Testing & QA",
      description: "Rigorous testing ensures your website works flawlessly across all devices and browsers. We conduct performance optimization, security audits, and user acceptance testing.",
      deliverables: ["Cross-browser Testing", "Performance Optimization", "Security Audit"]
    },
    {
      number: "06",
      title: "Launch & Support",
      description: "We handle the deployment process, ensuring a smooth transition to production. Post-launch, we provide ongoing support, maintenance, and performance monitoring.",
      deliverables: ["Deployment", "Training & Documentation", "Ongoing Support"]
    }
  ];

  const projects = [
    {
      name: "Cos Bar",
      image: cosbarProject,
      description: "Premium luxury cosmetics e-commerce platform featuring a sophisticated shopping experience.",
      challenge: "Cos Bar needed a modern e-commerce platform that could showcase their luxury beauty products while providing seamless checkout and inventory management.",
      solution: "We built a high-performance e-commerce site with elegant product galleries, advanced filtering, and integrated payment processing.",
      results: ["40% increase in online sales", "60% faster page load times", "Improved mobile conversion rate"],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe"]
    },
    {
      name: "ProFlowers",
      image: proflowersProject,
      description: "National flower delivery service with same-day delivery capabilities and seasonal collections.",
      challenge: "ProFlowers required a platform that could handle high traffic during peak seasons while managing complex delivery logistics and inventory.",
      solution: "We developed a scalable e-commerce solution with real-time inventory tracking, delivery scheduling, and seasonal campaign management.",
      results: ["200% traffic handling during Valentine's Day", "35% reduction in cart abandonment", "Integrated delivery tracking"],
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "AWS"]
    },
    {
      name: "TAO Group Hospitality",
      image: taogroupProject,
      description: "Multi-venue hospitality platform showcasing restaurants, nightclubs, and event spaces across major cities.",
      challenge: "TAO Group needed a unified digital presence for their diverse portfolio of venues while enabling reservations and event bookings.",
      solution: "We created an immersive, visually stunning platform with venue filtering, integrated reservation systems, and event management capabilities.",
      results: ["50% increase in online reservations", "Unified brand experience", "Streamlined event inquiries"],
      technologies: ["React", "Next.js", "Python", "Django", "PostgreSQL"]
    },
    {
      name: "TrueCare",
      image: truecareProject,
      description: "Healthcare services platform providing behavioral health and medical staffing solutions.",
      challenge: "TrueCare needed a HIPAA-compliant platform that could connect patients with healthcare providers while managing appointments and services.",
      solution: "We built a secure healthcare portal with provider directories, appointment scheduling, and patient resources while ensuring full regulatory compliance.",
      results: ["HIPAA compliant platform", "40% reduction in appointment no-shows", "Improved patient engagement"],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"]
    }
  ];

  const allTechnologies = [
    { name: "React", logo: reactLogo },
    { name: "Next.js", logo: nextjsLogo },
    { name: "TypeScript", logo: typescriptLogo },
    { name: "JavaScript", logo: javascriptLogo },
    { name: "Node.js", logo: nodejsLogo },
    { name: "Python", logo: pythonLogo },
    { name: "Django", logo: djangoLogo },
    { name: "Express.js", logo: expressLogo },
    { name: "Laravel", logo: laravelLogo },
    { name: "Tailwind CSS", logo: tailwindLogo },
    { name: "Bootstrap", logo: bootstrapLogo },
    { name: "HTML5", logo: html5Logo },
    { name: "CSS3", logo: css3Logo },
    { name: "MongoDB", logo: mongodbLogo },
    { name: "PostgreSQL", logo: postgresqlLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "AWS", logo: awsLogo },
    { name: "Docker", logo: dockerLogo },
    { name: "Git", logo: gitLogo },
  ];

  const webDevSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Web Development Services",
    "provider": { "@id": "https://bitroixsolution.com/#organization" },
    "serviceType": "Web Development",
    "description": "Professional web development services including custom applications, SaaS products, e-commerce platforms, and API development.",
    "areaServed": ["US", "PK", "GB", "CA", "AU", "AE"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Products" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Applications" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API Development" } }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Custom Web Development Services | React, Node.js, Python"
        description="Professional web development services: custom applications, SaaS, e-commerce, and APIs. Expert React, Node.js, Python, and Laravel developers. 150+ projects."
        keywords="web development services, custom web applications, SaaS development, e-commerce development, API development, React development, Node.js developer, Python Django, Laravel development, full stack web development, responsive web design, enterprise web solutions, San Francisco web developer"
        canonicalUrl="https://bitroixsolution.com/web-development"
        schemaMarkup={webDevSchema}
        breadcrumbs={[
          { name: "Home", url: "https://bitroixsolution.com/" },
          { name: "Services", url: "https://bitroixsolution.com/#services" },
          { name: "Web Development", url: "https://bitroixsolution.com/web-development" }
        ]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/lovable-uploads/eb7b0242-9c5d-4d81-9044-abe3320bd683.png')"
          }}
        />
        <div className="absolute inset-0 bg-slate-900/40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Custom Web <span className="text-blue-400">Design & Development</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From concept to deployment, we build websites that drive business growth and deliver exceptional user experiences.
          </p>
          <a 
            href="/meeting" 
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </a>
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

      {/* How We Build Your Website - Process Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We <span className="text-blue-400">Build Your Website</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our proven development process ensures transparency, quality, and results at every stage. Here's how we transform your vision into a powerful digital presence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500/30 h-full" />
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full items-center justify-center z-10 shadow-lg shadow-blue-500/50">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  
                  {/* Content card */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-[1.02]">
                      <div className="flex items-center gap-4 mb-4 lg:hidden">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{step.number}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <h3 className="hidden lg:block text-2xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                      <div className="space-y-2">
                        <span className="text-sm text-blue-400 font-semibold uppercase tracking-wider">Key Deliverables</span>
                        <ul className="space-y-2">
                          {step.deliverables.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300">
                              <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
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
              Our <span className="text-blue-500">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the websites we've built for our clients. Each project showcases our commitment to quality, innovation, and delivering real business results.
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <article 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={project.image}
                      alt={`${project.name} website screenshot`}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                      <span className="text-white font-semibold flex items-center gap-2">
                        View Project <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">{project.name}</h3>
                  <p className="text-lg text-gray-600">{project.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">The Challenge</h4>
                      <p className="text-gray-600">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Our Solution</h4>
                      <p className="text-gray-600">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results Achieved</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                        >
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

      {/* Animated Technologies Carousel */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies <span className="text-blue-400">We Master</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We leverage the latest technologies and frameworks to build fast, scalable, and secure web applications.
            </p>
          </div>

          {/* Animated Carousel */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              ref={scrollRef}
              className="flex gap-8 overflow-hidden"
              style={{ scrollBehavior: 'auto' }}
            >
              {/* Duplicate the technologies for seamless loop */}
              {[...allTechnologies, ...allTechnologies].map((tech, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 group"
                >
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center p-4 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group-hover:bg-white/20">
                    <img 
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="w-12 h-12 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-center text-white/80 text-sm mt-3 font-medium group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-800 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10" />
          </div>

          <p className="text-center text-gray-400 mt-8 text-sm">
            Hover to pause the animation
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/eb7b0242-9c5d-4d81-9044-abe3320bd683.png')] opacity-10 bg-cover bg-center" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a website that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/meeting"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="/projects"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;