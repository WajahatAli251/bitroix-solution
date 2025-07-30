import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Code, Lightbulb, Rocket, Target, Users, Zap } from "lucide-react";

// Import tech logos
import pythonLogo from "@/assets/tech-logos/python.png";
import tensorflowLogo from "@/assets/tech-logos/tensorflow.svg";
import chatgptLogo from "@/assets/tech-logos/chatgpt.png";
import openaiLogo from "@/assets/tech-logos/openai.svg";
import huggingfaceLogo from "@/assets/tech-logos/huggingface.svg";
import scikitLearnLogo from "@/assets/tech-logos/scikit-learn.svg";
import plotlyLogo from "@/assets/tech-logos/plotly.png";
import nodejsLogo from "@/assets/tech-logos/nodejs.svg";

const AIChatbots = () => {
  const offerings = [
    "AI-Powered Chatbots",
    "Document & Text Automation", 
    "Image Recognition / Computer Vision",
    "AI in E-commerce",
    "Predictive Analytics",
    "Voice-Based Interfaces (NLP & Speech AI)",
    "AI Content Generation"
  ];

  const approach = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Initial research is done to gather relevant information about scope, objective, features, processes & expectations."
    },
    {
      number: "02", 
      title: "Information Architecture",
      description: "Arrange information to meet user requirements that shows hierarchy of how the information on your website is organized."
    },
    {
      number: "03",
      title: "Wireframes, Mockups & Prototypes", 
      description: "Schema of web page is created to show low-fidelity representation of different screens that form a product. That schema is converted to high-fidelity mockups that mimic the look and feel of website before it is actually developed."
    },
    {
      number: "04",
      title: "Development",
      description: "Our exceptional programmers code the business logic, integrate user interface with the backend database, and build custom features that are specific to the given project."
    },
    {
      number: "05",
      title: "Quality Assurance", 
      description: "Ensure proper quality of the software and compliance with the gathered requirements. This step is crucial to ensure that the final end product is smooth and bug free."
    },
    {
      number: "06",
      title: "Launch",
      description: "This is the final phase where the application is rolled into production and made available to users."
    }
  ];

  const technologies = [
    { name: "Python", logo: pythonLogo },
    { name: "TensorFlow", logo: tensorflowLogo },
    { name: "ChatGPT", logo: chatgptLogo },
    { name: "OpenAI", logo: openaiLogo },
    { name: "Hugging Face", logo: huggingfaceLogo },
    { name: "Scikit-learn", logo: scikitLearnLogo },
    { name: "Plotly", logo: plotlyLogo },
    { name: "Node.js", logo: nodejsLogo }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Chatbots
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Intelligent conversational AI solutions that revolutionize customer engagement and automate interactions
            </p>
            <Link to="/schedule-meeting">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-lg hover:scale-105 transition-all duration-300">
                Start Your AI Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Overview of Service</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-5xl mx-auto">
              AI-powered chatbots are revolutionizing customer interaction by providing instant, personalized, and scalable support. 
              They leverage natural language processing (NLP) and machine learning to understand and respond to user queries, 
              automate tasks, and enhance user experience across various platforms. Our intelligent conversational solutions 
              transform how businesses engage with customers, providing 24/7 support while reducing operational costs and improving satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">What We Offer</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{offering}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approach.map((step, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Master Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Technologies We Master</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge AI and machine learning technologies to build intelligent chatbot solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-white text-center font-medium">{tech.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Customer Experience?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's build intelligent AI chatbots that revolutionize how you engage with your customers
          </p>
          <Link to="/schedule-meeting">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-lg hover:scale-105 transition-all duration-300">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIChatbots;