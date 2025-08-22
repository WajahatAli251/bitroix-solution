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
    "Hello! Welcome to Bitroix Solutions. How can I help you today?",
    "Hi there! I'm here to help you learn about our services. What would you like to know?",
    "Welcome! I'm the Bitroix assistant. Ask me about our technology solutions!"
  ],
  services: {
    web: "We offer comprehensive web development services including React, Node.js, and modern web technologies. Our team creates responsive, fast, and user-friendly websites and web applications.",
    ai: "Our AI services include chatbot development, machine learning solutions, and AI integration. We help businesses leverage artificial intelligence to improve efficiency and customer experience.",
    data: "We provide data analytics and business intelligence services using tools like Python, Tableau, and Power BI. We help you make data-driven decisions and uncover valuable insights.",
    devops: "Our DevOps and MLOps services include CI/CD pipelines, cloud infrastructure, Docker, Kubernetes, and automated deployment solutions on AWS, Azure, and GCP.",
    design: "We offer UI/UX design and consultancy services, creating beautiful and intuitive user interfaces using Figma, Adobe Creative Suite, and modern design principles.",
    marketing: "Our digital marketing services include SEO, social media management, paid advertising, and marketing automation to help grow your online presence and reach your target audience."
  },
  default: "I understand you're interested in our services. We specialize in web development, AI solutions, data analytics, DevOps, UI/UX design, and digital marketing. Which area would you like to know more about?"
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
    
    // Services
    if (lowerMessage.match(/\b(web|website|development|react|javascript)\b/)) {
      return predefinedResponses.services.web;
    }
    
    if (lowerMessage.match(/\b(ai|artificial intelligence|chatbot|machine learning|ml)\b/)) {
      return predefinedResponses.services.ai;
    }
    
    if (lowerMessage.match(/\b(data|analytics|business intelligence|tableau|powerbi)\b/)) {
      return predefinedResponses.services.data;
    }
    
    if (lowerMessage.match(/\b(devops|mlops|aws|azure|docker|kubernetes|ci\/cd)\b/)) {
      return predefinedResponses.services.devops;
    }
    
    if (lowerMessage.match(/\b(design|ui|ux|figma|adobe)\b/)) {
      return predefinedResponses.services.design;
    }
    
    if (lowerMessage.match(/\b(marketing|seo|social media|advertising)\b/)) {
      return predefinedResponses.services.marketing;
    }
    
    // Contact/pricing
    if (lowerMessage.match(/\b(contact|price|cost|quote|meeting)\b/)) {
      return "I'd be happy to help you get in touch! You can contact us through the contact form on this website, or schedule a meeting using our calendar booking system. Our team will provide you with a customized quote based on your specific needs.";
    }
    
    // About company
    if (lowerMessage.match(/\b(about|company|bitroix|team)\b/)) {
      return "Bitroix Solutions is a technology company specializing in comprehensive digital solutions. We help businesses transform through web development, AI integration, data analytics, DevOps, design, and digital marketing services.";
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