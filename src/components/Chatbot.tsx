import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const predefinedResponses = {
  greetings: [
    "Hello! Welcome to Bitroix Solution. I'm your 24/7 digital assistant. How can I help you today?",
    "Hi there! I'm here to help you discover how Bitroix Solution can transform your digital presence. What would you like to know?",
    "Welcome to Bitroix Solution! I'm available 24/7 to answer your questions about our digital marketing, web development, and IT services. How can I assist you?"
  ],
  services: {
    all: "At Bitroix Solution, we provide comprehensive digital services including:\n\n• Digital Marketing & SEO Optimization\n• Social Media Marketing & Management\n• Professional Web Development\n• Creative Graphic Design\n• Strategic Content Creation\n• IT Solutions & Cloud Services\n\nWould you like me to share details about a specific service, or would you prefer to speak with our team for a custom consultation?",
    web: "Our web development services include custom website design, responsive development, e-commerce solutions, and modern web applications. We create fast, secure, and user-friendly websites that drive results. Would you like to see our portfolio or get a free quote for your project?",
    marketing: "Our digital marketing services cover SEO optimization, social media marketing, content strategy, online advertising, and brand development. We help businesses increase their online visibility and drive qualified leads. Would you like me to connect you with our marketing team for a free consultation?",
    design: "We offer comprehensive graphic design services including logo design, branding, marketing materials, social media graphics, and visual identity development. Our creative team brings your brand vision to life. Interested in seeing our design portfolio?",
    seo: "Our SEO optimization services help improve your website's search engine rankings, increase organic traffic, and boost online visibility. We use proven strategies and provide detailed analytics. Would you like a free SEO audit of your website?",
    social: "Our social media marketing includes strategy development, content creation, community management, paid advertising, and performance analytics across all major platforms. Ready to grow your social media presence?",
    it: "Our IT solutions include cloud services, system integration, cybersecurity, data backup, and technical support. We help businesses streamline their technology infrastructure. Need a consultation about your IT needs?"
  },
  pricing: "Our pricing depends on your specific project scope and requirements. We offer flexible packages tailored to your budget and goals. I'd be happy to connect you with our team for a free consultation and custom quote. Would you like me to schedule a call for you?",
  portfolio: "We've successfully completed projects for various clients in digital marketing, web development, branding, and cloud-based solutions. Our portfolio showcases our expertise across different industries. Would you like me to connect you with our team to discuss your project and see relevant case studies?",
  contact: "I'd be happy to connect you with our expert team! You can:\n\n• Schedule a free consultation call\n• Request a custom quote\n• Chat with our sales team\n• Email us directly\n\nWhich option works best for you? I can help arrange the connection right away.",
  availability: "I'm available 24/7 to answer your basic questions about Bitroix Solution. For complex inquiries or detailed project discussions, I'll connect you with our human experts who will get back to you promptly. How can I assist you right now?",
  default: "I'm here to help you learn about Bitroix Solution's services including digital marketing, web development, graphic design, and IT solutions. You can ask me about our services, pricing, portfolio, or I can connect you with our team. What interests you most?"
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: predefinedResponses.greetings[0],
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // Greetings
    if (lowerMessage.match(/\b(hi|hello|hey|greetings)\b/)) {
      const responses = predefinedResponses.greetings;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // All services inquiry
    if (lowerMessage.match(/\b(services|what do you do|what services|all services)\b/)) {
      return predefinedResponses.services.all;
    }
    
    // Specific services
    if (lowerMessage.match(/\b(web|website|development|web development)\b/)) {
      return predefinedResponses.services.web;
    }
    
    if (lowerMessage.match(/\b(marketing|digital marketing|advertising|online marketing)\b/)) {
      return predefinedResponses.services.marketing;
    }
    
    if (lowerMessage.match(/\b(design|graphic design|logo|branding|visual)\b/)) {
      return predefinedResponses.services.design;
    }
    
    if (lowerMessage.match(/\b(seo|search engine|optimization|rankings)\b/)) {
      return predefinedResponses.services.seo;
    }
    
    if (lowerMessage.match(/\b(social media|social|facebook|instagram|twitter)\b/)) {
      return predefinedResponses.services.social;
    }
    
    if (lowerMessage.match(/\b(it|cloud|technical|support|infrastructure)\b/)) {
      return predefinedResponses.services.it;
    }
    
    // Pricing inquiries
    if (lowerMessage.match(/\b(price|cost|pricing|quote|how much|budget)\b/)) {
      return predefinedResponses.pricing;
    }
    
    // Portfolio/projects
    if (lowerMessage.match(/\b(portfolio|projects|work|examples|case studies)\b/)) {
      return predefinedResponses.portfolio;
    }
    
    // Contact inquiries
    if (lowerMessage.match(/\b(contact|reach|connect|talk|consultation|meeting)\b/)) {
      return predefinedResponses.contact;
    }
    
    // Availability
    if (lowerMessage.match(/\b(available|hours|support|help|assistance)\b/)) {
      return predefinedResponses.availability;
    }
    
    // About company
    if (lowerMessage.match(/\b(about|company|bitroix|who are you|team)\b/)) {
      return "Bitroix Solution is a leading digital agency specializing in comprehensive digital services. We help businesses transform their online presence through digital marketing, web development, graphic design, and IT solutions. Our expert team is dedicated to delivering results that drive growth and success.";
    }
    
    return predefinedResponses.default;
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(input.trim()),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-background border border-border rounded-lg shadow-xl z-40 flex flex-col">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <h3 className="font-semibold">Bitroix Assistant</h3>
            <p className="text-sm opacity-90">Ask me about our services</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-muted text-muted-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our services..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;