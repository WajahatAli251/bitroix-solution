import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUp, Check, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Technology Logo Imports
import slackLogo from '@/assets/tech-logos/slack.svg';
import jiraLogo from '@/assets/tech-logos/jira.png';
import confluenceLogo from '@/assets/tech-logos/confluence.svg';
import notionLogo from '@/assets/tech-logos/notion.png';
import trelloLogo from '@/assets/tech-logos/trello.png';
import asanaLogo from '@/assets/tech-logos/asana.svg';
import zoomLogo from '@/assets/tech-logos/zoom.svg';
import gitLogo from '@/assets/tech-logos/git.png';
import githubLogo from '@/assets/tech-logos/github.png';
import gitlabLogo from '@/assets/tech-logos/gitlab.png';
import reactLogo from '@/assets/tech-logos/react.svg';
import nodejsLogo from '@/assets/tech-logos/nodejs.svg';
import pythonLogo from '@/assets/tech-logos/python.png';
import awsLogo from '@/assets/tech-logos/aws.png';
import dockerLogo from '@/assets/tech-logos/docker.png';
import figmaLogo from '@/assets/tech-logos/figma.svg';

// Project Images
import teamImage from '@/assets/team-collaboration.jpg';
import cosbarProject from '@/assets/projects/cosbar-website.png';
import truecareProject from '@/assets/projects/truecare-website.png';
import taogroupProject from '@/assets/projects/taogroup-website.png';

const TeamAsService = () => {
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
      title: "Discussion & Discovery",
      description: "Reach out and we'll discuss your needs including technologies, team composition, availability, and pricing with our senior tech leads and your team.",
      deliverables: ["Requirements Assessment", "Team Composition Plan", "Budget Proposal"]
    },
    {
      number: "02", 
      title: "Team Assembly",
      description: "We carefully select team members based on your project requirements, ensuring the right mix of skills, experience, and cultural fit.",
      deliverables: ["Candidate Profiles", "Skills Assessment", "Team Matching"]
    },
    {
      number: "03",
      title: "Onboarding & Integration", 
      description: "Face-to-face or virtual kickoff meetings to finalize project requirements, workflows, communication channels, and working arrangements.",
      deliverables: ["Onboarding Sessions", "Tool Setup", "Process Alignment"]
    },
    {
      number: "04",
      title: "Execution & Delivery",
      description: "Your dedicated team works as an extension of your organization, with daily updates, sprint planning, and continuous delivery of results.",
      deliverables: ["Daily Standups", "Sprint Deliveries", "Progress Reports"]
    },
    {
      number: "05", 
      title: "Quality Assurance",
      description: "Rigorous quality checks and code reviews ensure all deliverables meet the highest standards and your specific requirements.",
      deliverables: ["Code Reviews", "QA Testing", "Performance Audits"]
    },
    {
      number: "06",
      title: "Scale & Adapt",
      description: "Teams can be modified at any time - expanded, reduced, or changed according to your evolving business needs and project requirements.",
      deliverables: ["Team Scaling", "Skill Adjustments", "Continuous Optimization"]
    }
  ];

  const projects = [
    {
      name: "Cos Bar Digital Transformation",
      image: cosbarProject,
      description: "Provided a dedicated development team for a 12-month e-commerce platform transformation project.",
      challenge: "Cos Bar needed to modernize their aging e-commerce platform but lacked in-house development expertise.",
      solution: "Assembled a dedicated team of 5 developers, 1 UX designer, and 1 project manager working as an integrated extension of their team.",
      results: ["Platform rebuilt in 8 months", "40% increase in online sales", "Team scaled from 5 to 8 during peak development"],
      technologies: ["React", "Node.js", "AWS", "Figma", "Jira"]
    },
    {
      name: "TrueCare Healthcare Platform",
      image: truecareProject,
      description: "Provided HIPAA-compliant development team for healthcare technology product development.",
      challenge: "TrueCare needed specialized healthcare developers with HIPAA compliance experience but couldn't find local talent.",
      solution: "Deployed a specialized team with healthcare industry experience, including developers certified in HIPAA compliance.",
      results: ["HIPAA compliant platform delivered", "Ongoing team engagement for 2+ years", "Zero security incidents"],
      technologies: ["React", "Python", "PostgreSQL", "AWS", "Slack"]
    },
    {
      name: "TAO Group Multi-Project Team",
      image: taogroupProject,
      description: "Provided flexible development resources across multiple concurrent hospitality technology projects.",
      challenge: "TAO Group had multiple digital initiatives but fluctuating resource needs across different project phases.",
      solution: "Established a flexible team pool that could be allocated across projects based on priority and phase requirements.",
      results: ["3 projects delivered concurrently", "30% cost savings vs individual contractors", "Seamless team transitions"],
      technologies: ["React", "Next.js", "Node.js", "GitHub", "Notion"]
    }
  ];

  const allTechnologies = [
    { name: "Slack", logo: slackLogo },
    { name: "Jira", logo: jiraLogo },
    { name: "Confluence", logo: confluenceLogo },
    { name: "Notion", logo: notionLogo },
    { name: "Trello", logo: trelloLogo },
    { name: "Asana", logo: asanaLogo },
    { name: "Zoom", logo: zoomLogo },
    { name: "Git", logo: gitLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "GitLab", logo: gitlabLogo },
    { name: "React", logo: reactLogo },
    { name: "Node.js", logo: nodejsLogo },
    { name: "Python", logo: pythonLogo },
    { name: "AWS", logo: awsLogo },
    { name: "Docker", logo: dockerLogo },
    { name: "Figma", logo: figmaLogo },
  ];

  const duplicatedTech = [...allTechnologies, ...allTechnologies];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Team as a Service (TaaS) - On-Demand Tech Teams"
        description="Scale your development with expert on-demand tech teams. Full-stack developers, UI/UX designers, DevOps engineers. Flexible scaling, 24/7 support."
        keywords="team as a service, TaaS, staff augmentation, on-demand developers, remote tech team, hire developers, software outsourcing, dedicated development team"
        canonicalUrl="https://bitroixsolution.com/team-as-service"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Team as a Service (TaaS)",
          "provider": {"@type": "Organization", "name": "Bitroix Solution LLC"},
          "description": "Scale your development with expert on-demand tech teams.",
          "serviceType": "Staff Augmentation"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://bitroixsolution.com" },
          { name: "Services", url: "https://bitroixsolution.com/#services" },
          { name: "Team as a Service", url: "https://bitroixsolution.com/team-as-service" }
        ]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Dedicated <span className="text-emerald-400">Tech Teams</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Scale your development capabilities with our expert on-demand tech teams tailored to your project needs.
          </p>
          <Link to="/schedule-meeting">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-full">
              Build Your Team <ArrowRight className="ml-2 w-5 h-5" />
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
              <div className="text-6xl text-emerald-500 mb-6">"</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our expert team is ready to contribute to your project. We provide you the ability to scale up 
                and down at any time and get the best tailor-made solutions. Your dedicated team works as an 
                extension of your organization with full transparency and communication.
              </p>
            </div>
          </div>

          {/* Team Expertise */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              Our Team <span className="text-gray-500">Expertise</span>
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {["Full-Stack Developers", "UI/UX Designers", "DevOps Engineers", "Data Scientists", "QA Engineers"].map((role, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                    <div className="w-8 h-8 bg-emerald-500 rounded"></div>
                  </div>
                  <h4 className="font-semibold text-gray-900">{role}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Process Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How <span className="text-emerald-400">It Works</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A streamlined process to assemble your perfect team and integrate them seamlessly into your organization.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-500/30 h-full" />
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-emerald-500 rounded-full items-center justify-center z-10 shadow-lg shadow-emerald-500/50">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group hover:transform hover:scale-[1.02]">
                      <div className="flex items-center gap-4 mb-4 lg:hidden">
                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{step.number}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <h3 className="hidden lg:block text-2xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                      <div className="space-y-2">
                        <span className="text-sm text-emerald-400 font-semibold uppercase tracking-wider">Key Deliverables</span>
                        <ul className="space-y-2">
                          {step.deliverables.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300">
                              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
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
              Our <span className="text-emerald-500">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how our dedicated teams have helped companies scale their development capabilities and deliver exceptional results.
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
                  
                  <div className="bg-emerald-50 rounded-xl p-6">
                    <h4 className="font-semibold text-emerald-800 mb-2">The Challenge</h4>
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
                        <span key={i} className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
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
              Collaboration <span className="text-emerald-400">& Development Tools</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We use industry-leading tools for seamless collaboration and efficient delivery
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
                <div className="w-28 h-28 bg-white/10 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center p-4 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:scale-110 hover:bg-white/20">
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale Your Team?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let's build your dedicated team that works as an extension of your organization.
          </p>
          <Link to="/schedule-meeting">
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold">
              Build Your Team Today <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <Footer />
    </div>
  );
};

export default TeamAsService;
