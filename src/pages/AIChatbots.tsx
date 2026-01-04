import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUp, Check, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
      name: "E-Commerce AI Assistant",
      image: "/lovable-uploads/eb7b0242-9c5d-4d81-9044-abe3320bd683.png",
      description: "Intelligent chatbot for a major online retailer handling customer inquiries and product recommendations.",
      challenge: "Customer support team overwhelmed with repetitive queries, leading to long wait times and customer dissatisfaction.",
      solution: "Built a GPT-powered chatbot that handles product inquiries, order status, returns, and personalized recommendations.",
      results: ["70% reduction in support tickets", "24/7 customer support coverage", "35% increase in product discovery"],
      technologies: ["OpenAI GPT-4", "Python", "Node.js", "AWS", "MongoDB"]
    },
    {
      name: "Healthcare Virtual Assistant",
      image: "/lovable-uploads/89639b18-4900-4542-9ccd-d1afd27ac2c9.png",
      description: "HIPAA-compliant AI assistant for patient intake and appointment scheduling.",
      challenge: "Healthcare provider struggling with administrative burden and patient experience during intake process.",
      solution: "Developed a conversational AI that guides patients through intake forms, schedules appointments, and answers FAQs.",
      results: ["50% reduction in intake time", "90% patient satisfaction rating", "HIPAA compliant solution"],
      technologies: ["Python", "TensorFlow", "React", "AWS", "OpenAI"]
    },
    {
      name: "Financial Services Chatbot",
      image: "/lovable-uploads/bec8f18d-ee2a-4a17-bd69-6a1ee4845629.png",
      description: "AI-powered chatbot for a fintech company handling account inquiries and transaction support.",
      challenge: "Growing customer base requiring scalable support solution without proportionally increasing support costs.",
      solution: "Created an intelligent chatbot with natural language understanding for account queries, transaction disputes, and financial guidance.",
      results: ["60% of inquiries resolved without human intervention", "$500K annual support cost savings", "Multi-language support"],
      technologies: ["OpenAI", "Python", "Node.js", "Docker", "Hugging Face"]
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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Chatbots & Automation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Intelligent conversational AI solutions that revolutionize customer engagement and automate interactions
          </p>
          <Link to="/schedule-meeting">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full">
              Start Your AI Project <ArrowRight className="ml-2 h-5 w-5" />
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
              {["AI-Powered Chatbots", "Document Automation", "Voice AI", "Predictive Analytics", "Content Generation", "Image Recognition", "E-commerce AI", "Custom NLP"].map((service, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <div className="w-8 h-8 bg-blue-500 rounded"></div>
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
                  <h3 className="text-3xl font-bold text-gray-900">{project.name}</h3>
                  <p className="text-gray-600 text-lg">{project.description}</p>
                  
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-800 mb-2">The Challenge</h4>
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
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
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
