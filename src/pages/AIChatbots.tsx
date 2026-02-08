import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUp, Check, ExternalLink, Bot, MessageSquare, Zap, Brain, FileText, Mic, TrendingUp, Image, ShoppingCart, Code } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Import hero image
import aiChatbotsHero from "@/assets/ai-chatbots-hero.png";

// Import tech logos
import pythonLogo from "@/assets/tech-logos/python.png";
import tensorflowLogo from "@/assets/tech-logos/tensorflow.svg";
import chatgptLogo from "@/assets/tech-logos/chatgpt.png";
import openaiLogo from "@/assets/tech-logos/openai.svg";
import huggingfaceLogo from "@/assets/tech-logos/huggingface.svg";
import scikitLearnLogo from "@/assets/tech-logos/scikit-learn.svg";
import plotlyLogo from "@/assets/tech-logos/plotly.png";
import nodejsLogo from "@/assets/tech-logos/nodejs.svg";
import awsLogo from "@/assets/tech-logos/aws.png";
import reactLogo from "@/assets/tech-logos/react.svg";
import dockerLogo from "@/assets/tech-logos/docker.png";
import mongodbLogo from "@/assets/tech-logos/mongodb.png";

const AIChatbots = () => {
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
      title: "Discovery & Planning",
      description: "Initial research to gather relevant information about scope, objective, features, processes, and expectations for your AI solution.",
      deliverables: ["Use Case Analysis", "AI Feasibility Study", "Project Roadmap"]
    },
    {
      number: "02", 
      title: "Data Strategy",
      description: "We analyze your data landscape, identify training data requirements, and establish data pipelines for model development.",
      deliverables: ["Data Assessment", "Training Data Strategy", "Privacy Compliance Plan"]
    },
    {
      number: "03",
      title: "Model Development", 
      description: "Our AI engineers develop and train custom models tailored to your specific use case, leveraging cutting-edge frameworks and techniques.",
      deliverables: ["Custom AI Models", "Model Training", "Performance Benchmarks"]
    },
    {
      number: "04",
      title: "Integration & Testing",
      description: "We integrate the AI solution with your existing systems and conduct rigorous testing to ensure accuracy and reliability.",
      deliverables: ["API Integration", "System Testing", "User Acceptance Testing"]
    },
    {
      number: "05",
      title: "Deployment", 
      description: "Production-ready deployment with scalable infrastructure to handle real-world traffic and usage patterns.",
      deliverables: ["Cloud Deployment", "Scaling Configuration", "Monitoring Setup"]
    },
    {
      number: "06",
      title: "Optimization & Support",
      description: "Continuous monitoring, model retraining, and optimization to improve performance based on real-world feedback.",
      deliverables: ["Performance Monitoring", "Model Retraining", "Ongoing Support"]
    }
  ];

  const projects = [
    {
      name: "FloorDecor AI Shopping Assistant",
      image: "/lovable-uploads/3e881009-4665-4ed6-bb89-ce79ed6092ab.png",
      description: "Intelligent AI chatbot for a major flooring retailer, helping customers find the perfect flooring solutions with personalized recommendations.",
      challenge: "Customers struggled to navigate thousands of flooring options, leading to decision fatigue and abandoned carts.",
      solution: "Built a GPT-powered assistant that understands room requirements, style preferences, and budget to recommend ideal flooring products with visual comparisons.",
      results: ["45% increase in customer engagement", "32% reduction in return rates", "24/7 instant product guidance"],
      technologies: ["OpenAI GPT-4", "Python", "React", "AWS", "MongoDB"],
      industry: "E-Commerce / Retail"
    },
    {
      name: "TrueCare24 Healthcare Virtual Assistant",
      image: "/lovable-uploads/89639b18-4900-4542-9ccd-d1afd27ac2c9.png",
      description: "HIPAA-compliant AI assistant for TrueCare24 healthcare platform, handling patient intake, appointment scheduling, and medical FAQs.",
      challenge: "Healthcare provider overwhelmed with administrative tasks, long wait times, and inconsistent patient experience during intake.",
      solution: "Developed a conversational AI that guides patients through intake forms, schedules appointments, provides medication reminders, and answers health-related FAQs.",
      results: ["50% reduction in intake time", "92% patient satisfaction rating", "HIPAA compliant solution"],
      technologies: ["Python", "TensorFlow", "React", "AWS", "OpenAI"],
      industry: "Healthcare"
    },
    {
      name: "Copart Vehicle Inquiry Bot",
      image: "/lovable-uploads/eb7b0242-9c5d-4d81-9044-abe3320bd683.png",
      description: "AI-powered chatbot for Copart's online vehicle auction platform, assisting buyers with vehicle information and bidding processes.",
      challenge: "High volume of repetitive buyer inquiries about vehicle conditions, auction processes, and bidding strategies overwhelming support teams.",
      solution: "Created an intelligent chatbot that provides real-time vehicle details, explains auction procedures, and guides first-time bidders through the process.",
      results: ["70% of inquiries resolved without human intervention", "$400K annual support cost savings", "Multi-language support for global buyers"],
      technologies: ["OpenAI", "Python", "Node.js", "Docker", "Hugging Face"],
      industry: "Automotive / Auctions"
    },
    {
      name: "Valliani Jewelers Personal Shopper AI",
      image: "/lovable-uploads/bec8f18d-ee2a-4a17-bd69-6a1ee4845629.png",
      description: "Luxury jewelry shopping assistant that provides personalized recommendations and answers detailed product questions for high-value purchases.",
      challenge: "Online jewelry shoppers needed expert guidance similar to in-store experience to make confident purchase decisions.",
      solution: "Built a sophisticated AI concierge that understands jewelry preferences, occasion requirements, and provides detailed gemstone/metal information with visual comparisons.",
      results: ["55% increase in average order value", "40% reduction in pre-sale inquiries", "Enhanced luxury shopping experience"],
      technologies: ["OpenAI GPT-4", "Python", "React", "MongoDB", "AWS"],
      industry: "Luxury Retail"
    },
    {
      name: "ProFlowers Gift Assistant",
      image: "/lovable-uploads/c8ef734b-337b-463d-b2bc-fb0cf9520acd.png",
      description: "AI-powered gift recommendation chatbot helping customers find the perfect floral arrangements for any occasion.",
      challenge: "Customers often unsure which arrangements suit different occasions, leading to delayed purchases and cart abandonment.",
      solution: "Developed a conversational AI that understands occasions, recipient preferences, and budget to suggest personalized floral gifts with delivery scheduling.",
      results: ["38% increase in conversion rate", "60% faster purchase decisions", "Reduced customer support load by 45%"],
      technologies: ["ChatGPT API", "Python", "React", "Node.js", "PostgreSQL"],
      industry: "E-Commerce / Gifts"
    }
  ];

  const allTechnologies = [
    { name: "Python", logo: pythonLogo },
    { name: "TensorFlow", logo: tensorflowLogo },
    { name: "ChatGPT", logo: chatgptLogo },
    { name: "OpenAI", logo: openaiLogo },
    { name: "Hugging Face", logo: huggingfaceLogo },
    { name: "Scikit-learn", logo: scikitLearnLogo },
    { name: "Plotly", logo: plotlyLogo },
    { name: "Node.js", logo: nodejsLogo },
    { name: "AWS", logo: awsLogo },
    { name: "React", logo: reactLogo },
    { name: "Docker", logo: dockerLogo },
    { name: "MongoDB", logo: mongodbLogo },
  ];

  const duplicatedTech = [...allTechnologies, ...allTechnologies];

  const aiChatbotSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Chatbot Development Services",
    "provider": { "@id": "https://bitroixsolution.com/#organization" },
    "serviceType": "AI Development",
    "description": "Intelligent AI chatbot solutions powered by ChatGPT, OpenAI, and machine learning for customer engagement and automation.",
    "areaServed": ["US", "PK", "GB", "CA", "AU", "AE"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="AI Chatbot Development | ChatGPT, OpenAI Integration"
        description="Intelligent AI chatbot solutions powered by ChatGPT, OpenAI, and ML. Custom conversational AI for 24/7 customer support and automation. Free consultation!"
        keywords="AI chatbots development, conversational AI, ChatGPT integration, OpenAI API, machine learning chatbots, natural language processing, NLP solutions, customer service automation"
        canonicalUrl="https://bitroixsolution.com/ai-chatbots"
        schemaMarkup={aiChatbotSchema}
        breadcrumbs={[
          { name: "Home", url: "https://bitroixsolution.com/" },
          { name: "Services", url: "https://bitroixsolution.com/#services" },
          { name: "AI Chatbots", url: "https://bitroixsolution.com/ai-chatbots" }
        ]}
      />
      <Navigation />
      
      {/* Hero Section with Image */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Chatbots & Automation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                Intelligent conversational AI solutions that revolutionize customer engagement, automate support, and drive business growth 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/schedule-meeting">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full w-full sm:w-auto">
                    Start Your AI Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full w-full sm:w-auto">
                    View Our Work
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-gray-400">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-blue-400" />
                  <span>GPT-4 Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-purple-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <img 
                src={aiChatbotsHero}
                alt="AI Chatbot Technology - Intelligent Automation Solutions"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
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
              <div className="text-6xl text-blue-500 mb-6">"</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                AI-powered chatbots revolutionize customer interaction by providing instant, personalized, and scalable support. 
                They leverage natural language processing and machine learning to understand and respond to user queries, 
                automate tasks, and enhance user experience across various platforms.
              </p>
            </div>
          </div>

          {/* What We Offer Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              What We <span className="text-gray-500">Offer</span>
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                { name: "AI-Powered Chatbots", icon: Bot, color: "bg-blue-500" },
                { name: "Document Automation", icon: FileText, color: "bg-green-500" },
                { name: "Voice AI Assistants", icon: Mic, color: "bg-purple-500" },
                { name: "Predictive Analytics", icon: TrendingUp, color: "bg-orange-500" },
                { name: "Content Generation", icon: Zap, color: "bg-pink-500" },
                { name: "Image Recognition", icon: Image, color: "bg-cyan-500" },
                { name: "E-commerce AI", icon: ShoppingCart, color: "bg-indigo-500" },
                { name: "Custom NLP Solutions", icon: Code, color: "bg-red-500" }
              ].map((service, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl border border-gray-200">
                    <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center shadow-inner`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{service.name}</h4>
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
              Our <span className="text-blue-400">Development Process</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A structured approach to building AI solutions that deliver real business value and exceptional user experiences.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500/30 h-full" />
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full items-center justify-center z-10 shadow-lg shadow-blue-500/50">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-[1.02]">
                      <div className="flex items-center gap-4 mb-4 lg:hidden">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
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
              Our <span className="text-blue-500">AI Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore AI solutions we've built. Each project demonstrates our expertise in creating intelligent systems that drive real business results.
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
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{project.name}</h3>
                  <p className="text-gray-600 text-lg">{project.description}</p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl p-6 border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      The Challenge
                    </h4>
                    <p className="text-gray-700">{project.challenge}</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl p-6 border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Our Solution
                    </h4>
                    <p className="text-gray-700">{project.solution}</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-xl p-6 border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                      Results Achieved
                    </h4>
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
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-lg text-sm font-medium border border-blue-200 hover:scale-105 transition-transform cursor-default">
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
              Technologies <span className="text-blue-400">We Master</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Cutting-edge AI and machine learning technologies to build intelligent solutions
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
                <div className="w-28 h-28 bg-white/10 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center p-4 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:bg-white/20">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Customer Experience?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build intelligent AI solutions that revolutionize how you engage with your customers.
          </p>
          <Link to="/schedule-meeting">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold">
              Start Your AI Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <Footer />
    </div>
  );
};

export default AIChatbots;
