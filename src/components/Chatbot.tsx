import React, { useState, useRef, useEffect, useCallback, useMemo, memo } from 'react';
import { MessageCircle, X, Send, User, Sparkles, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

// Safe text formatting helper - parses bold markers and returns React elements
const formatBoldText = (text: string): React.ReactNode[] => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2);
      return (
        <strong key={i} className="text-primary font-bold text-base sm:text-lg">
          {boldText}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

// Memoized message formatting component - uses safe React elements instead of dangerouslySetInnerHTML
const FormattedMessage = memo(({ content }: { content: string }) => {
  const formattedContent = useMemo(() => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      // Handle headers and text with ** (bold markers) - safely formatted
      if (line.includes('**') && !line.match(/^\*\*\d+\*\*/)) {
        return (
          <div key={index} className="mb-2 sm:mb-3">
            {formatBoldText(line)}
          </div>
        );
      }
      
      // Handle bullet points
      if (line.startsWith('• ') || line.startsWith('✅ ')) {
        return (
          <div key={index} className="flex items-start gap-2 mb-1.5 sm:mb-2 ml-1 sm:ml-2">
            <span className="text-primary text-xs sm:text-sm mt-0.5 sm:mt-1 flex-shrink-0">•</span>
            <span className="text-xs sm:text-sm leading-relaxed">{line.substring(2)}</span>
          </div>
        );
      }
      
      // Handle numbered options
      if (line.match(/^\*\*\d+\*\*/)) {
        const number = line.match(/^\*\*(\d+)\*\*/)?.[1];
        const text = line.replace(/^\*\*\d+\*\*\s*-?\s*/, '');
        return (
          <div key={index} className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 p-2 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer border border-primary/20">
            <Badge variant="default" className="bg-gradient-to-r from-primary to-blue-600 text-white font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm text-xs sm:text-sm flex-shrink-0">
              {number}
            </Badge>
            <span className="font-medium text-foreground text-xs sm:text-sm leading-tight">{text}</span>
          </div>
        );
      }
      
      // Handle regular text
      if (line.trim()) {
        return (
          <div key={index} className="mb-1.5 sm:mb-2">
            <span className="text-xs sm:text-sm leading-relaxed">{line}</span>
          </div>
        );
      }
      
      return <div key={index} className="mb-0.5 sm:mb-1" />;
    });
  }, [content]);

  return <div className="prose prose-sm max-w-none">{formattedContent}</div>;
});

FormattedMessage.displayName = 'FormattedMessage';

// Menu-based interactive responses
const responses = {
  mainMenu: `🤖 **Welcome to Bitroix Solution!** 
I'm here to help you navigate our website and services. Please select an option:

**📋 MAIN MENU:**
**1** - Our Services (Web Dev, AI, Design, etc.)
**2** - Digital Marketing Solutions  
**3** - Projects & Portfolio
**4** - Our Products
**5** - About Us & Mission
**6** - Career Opportunities
**7** - Schedule a Meeting
**8** - Contact Information
**9** - Pricing & Quotes

Just type the number of your choice! 👆`,

  services: `🛠️ **OUR SERVICES** - Choose what interests you:

**1** - Custom Web Development
**2** - UI/UX Design Services  
**3** - DevOps & MLOps
**4** - Data Analytics & BI
**5** - Team as Service
**6** - AI Chatbots & Automation
**7** - Design Consultancy
**0** - Back to Main Menu

Type the number to learn more! 🚀`,

  solutions: `📈 **DIGITAL MARKETING SOLUTIONS:**

**1** - Lead Generation Systems
**2** - SEO Dominance Packages
**3** - Paid Ads Management
**4** - Marketing Automation
**5** - Conversion Optimization
**6** - Social Media Growth
**0** - Back to Main Menu

**💰 Popular Packages:**
• **Starter Package:** $2,000 - $4,000/month
• **Growth Package:** $4,000 - $8,000/month
• **Enterprise Package:** $8,000 - $15,000/month

Which solution interests you? 💡`,

  serviceDetails: {
    webdev: `💻 **Custom Web Development**
• Modern responsive websites
• E-commerce platforms  
• Web applications
• CMS development
• API integration

**💰 Pricing:**
• **Simple Website:** $3,000 - $8,000
• **E-commerce Store:** $8,000 - $25,000
• **Web Application:** $15,000 - $50,000+
• **Hourly Rate:** $35 - $75/hour

**Ready to start?** Type **"7"** to schedule consultation or **"0"** for main menu`,

    uiux: `🎨 **UI/UX Design Services**
• User research & analysis
• Wireframing & prototyping
• Visual design systems
• Mobile app design
• User testing

**💰 Pricing:**
• **Logo & Branding:** $1,500 - $5,000
• **Website Design:** $3,000 - $15,000
• **Mobile App Design:** $8,000 - $25,000
• **Hourly Rate:** $50 - $85/hour

Type **"7"** to discuss your project or **"0"** for main menu`,

    devops: `⚙️ **DevOps & MLOps**
• Cloud infrastructure setup
• CI/CD pipeline development
• Container orchestration
• Monitoring & logging
• ML model deployment

**💰 Pricing:**
• **Cloud Setup:** $5,000 - $20,000
• **CI/CD Pipeline:** $3,000 - $12,000
• **MLOps Platform:** $2,500 - $8,000/month
• **Hourly Rate:** $75 - $150/hour

Type **"7"** for consultation or **"0"** for main menu`,

    analytics: `📊 **Data Analytics & BI**
• Business intelligence dashboards
• Data visualization
• Predictive analytics
• ETL processes
• Real-time reporting

**💰 Pricing:**
• **Simple Dashboard:** $5,000 - $15,000
• **Complex BI System:** $25,000 - $75,000
• **Monthly Analytics:** $2,000 - $8,000/month
• **Hourly Rate:** $65 - $125/hour

Type **"7"** to get started or **"0"** for main menu`,

    team: `👥 **Team as Service**
• Dedicated development teams
• Flexible engagement models
• Agile methodology
• 24/7 support
• Scalable solutions

**💰 Pricing:**
• **Junior Developer:** $2,500 - $4,000/month
• **Senior Developer:** $4,500 - $7,500/month
• **Full Team (5-8 people):** $25,000 - $45,000/month
• **Project Manager:** $3,500 - $6,000/month

Type **"7"** to discuss your needs or **"0"** for main menu`,

    ai: `🤖 **AI Chatbots & Automation**
• Customer service chatbots
• Process automation
• AI-powered workflows
• Integration services
• 24/7 intelligent support

**💰 Pricing:**
• **Simple Chatbot:** $2,000 - $8,000
• **Advanced AI Assistant:** $8,000 - $25,000
• **Enterprise Solution:** $25,000 - $75,000+
• **Monthly Maintenance:** $500 - $2,500/month

Type **"7"** for demo or **"0"** for main menu`,

    design: `🎯 **Design Consultancy**
• Brand strategy development
• Design system creation
• User experience audits
• Design workshops
• Strategic guidance

**💰 Pricing:**
• **Brand Strategy:** $3,000 - $15,000
• **Design System:** $8,000 - $25,000
• **UX Audit:** $2,000 - $8,000
• **Hourly Rate:** $75 - $150/hour

Type **"7"** for consultation or **"0"** for main menu`
  },

  projects: `🚀 **Our Projects & Portfolio**

We've delivered 50+ successful projects! 

**Want to see our work?**
**1** - Visit Projects Page
**2** - Schedule project discussion  
**3** - Request case studies
**0** - Back to Main Menu

Type your choice! 📱`,

  products: `🔥 **Our Products**

Check out our ready-made solutions:

**1** - Visit Products Page
**2** - AI Chatbot Systems
**3** - Hotel Management System
**4** - Exhibition Management
**0** - Back to Main Menu

Which interests you? 💼`,

  about: `🌟 **About Bitroix Solution**

Leading digital transformation company with:
✅ 50+ successful projects
✅ Expert development teams  
✅ 24/7 technical support
✅ Agile methodology

**Learn More:**
**1** - Our mission & values
**2** - Meet the team
**3** - Company achievements
**0** - Back to Main Menu`,

  career: `💼 **Career Opportunities**

Join our innovative team!

**1** - Visit Career Page
**2** - Current openings
**3** - Application process
**4** - Company culture
**0** - Back to Main Menu

Ready to grow with us? 🚀`,

  contact: `📞 **Contact Information**

**Multiple ways to reach us:**
📧 Email: contact@bitroixsolution.com
📱 Phone: [Contact Number]
🌐 Website: [Your Website]

**Quick Actions:**
**1** - Schedule a meeting
**2** - Request a callback
**3** - Live chat support
**0** - Back to Main Menu`,

  pricing: `💰 **Pricing & Service Packages**

**🎯 POPULAR SERVICE PACKAGES:**

**💼 Starter Package ($3,000 - $8,000)**
• Basic website or simple app
• Logo & brand identity
• 3 months support

**🚀 Growth Package ($8,000 - $25,000)**
• Custom web application
• Complete UI/UX design
• SEO optimization
• 6 months support

**🏢 Enterprise Package ($25,000 - $75,000+)**
• Complex web platform
• Data analytics & BI
• DevOps & cloud setup
• 12 months support

**📊 DIGITAL MARKETING PACKAGES:**
• **Basic:** $2,000 - $4,000/month
• **Professional:** $4,000 - $8,000/month  
• **Enterprise:** $8,000 - $15,000/month

**Get Your Quote:**
**1** - Schedule free consultation
**2** - Request detailed quote
**3** - Discuss custom package
**0** - Back to Main Menu`,

  meeting: `📅 **Redirecting to Schedule Meeting...**

Opening our meeting scheduler where you can:
• Choose your preferred time
• Select meeting type
• Add project details
• Get instant confirmation

**Please wait while we redirect you...** ⏰`,

  default: `❓ **I didn't understand that!**

Please type a number from the menu options or try:
• **"menu"** - Show main menu
• **"services"** - View our services
• **"meeting"** - Schedule consultation
• **"help"** - Get assistance

How can I help you? 🤔`
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState('main');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: responses.mainMenu,
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const generateResponse = useCallback((message: string): string => {
    const userInput = message.trim();
    const lowerInput = userInput.toLowerCase();
    
    // Handle navigation commands
    if (lowerInput.includes('menu') || userInput === '0') {
      setCurrentMenu('main');
      return responses.mainMenu;
    }

    if (lowerInput.includes('services')) {
      setCurrentMenu('services');
      return responses.services;
    }

    if (lowerInput.includes('meeting') || userInput === '7') {
      setTimeout(() => navigate('/schedule-meeting'), 1000);
      return responses.meeting;
    }

    // Main menu navigation
    if (currentMenu === 'main') {
      switch (userInput) {
        case '1':
          setCurrentMenu('services');
          return responses.services;
        case '2':
          setCurrentMenu('solutions');
          return responses.solutions;
        case '3':
          setCurrentMenu('projects');
          return responses.projects;
        case '4':
          setCurrentMenu('products');
          return responses.products;
        case '5':
          setCurrentMenu('about');
          return responses.about;
        case '6':
          setCurrentMenu('career');
          return responses.career;
        case '7':
          setTimeout(() => navigate('/schedule-meeting'), 1000);
          return responses.meeting;
        case '8':
          setCurrentMenu('contact');
          return responses.contact;
        case '9':
          setCurrentMenu('pricing');
          return responses.pricing;
        default:
          return responses.default;
      }
    }

    // Services menu navigation
    if (currentMenu === 'services') {
      const serviceMap: Record<string, string> = {
        '1': 'webdev', '2': 'uiux', '3': 'devops', '4': 'analytics',
        '5': 'team', '6': 'ai', '7': 'design'
      };
      if (serviceMap[userInput]) {
        setCurrentMenu('service-detail');
        return responses.serviceDetails[serviceMap[userInput] as keyof typeof responses.serviceDetails];
      }
      if (userInput === '0') {
        setCurrentMenu('main');
        return responses.mainMenu;
      }
      return responses.default;
    }

    // Solutions menu navigation
    if (currentMenu === 'solutions') {
      const solutionRoutes: Record<string, { route: string; message: string }> = {
        '1': { route: '/solutions/lead-generation', message: '🚀 **Opening Lead Generation page...**' },
        '2': { route: '/solutions/seo-dominance', message: '🔍 **Opening SEO Dominance page...**' },
        '3': { route: '/solutions/paid-ads-management', message: '💰 **Opening Paid Ads Management page...**' },
        '4': { route: '/solutions/marketing-automation', message: '⚡ **Opening Marketing Automation page...**' },
        '5': { route: '/solutions/conversion-optimization', message: '📈 **Opening Conversion Optimization page...**' },
        '6': { route: '/solutions/social-media-growth', message: '📱 **Opening Social Media Growth page...**' }
      };
      if (solutionRoutes[userInput]) {
        setTimeout(() => navigate(solutionRoutes[userInput].route), 800);
        return solutionRoutes[userInput].message;
      }
      if (userInput === '0') {
        setCurrentMenu('main');
        return responses.mainMenu;
      }
      return responses.default;
    }

    // Projects menu navigation
    if (currentMenu === 'projects') {
      if (userInput === '1') {
        setTimeout(() => navigate('/projects'), 800);
        return "📂 **Opening Projects page...**";
      }
      if (userInput === '2') {
        setTimeout(() => navigate('/schedule-meeting'), 800);
        return "📅 **Opening meeting scheduler...**";
      }
      if (userInput === '3') {
        setCurrentMenu('main');
        return "📋 **Case studies request noted!**\n\nType **7** to schedule or **0** for main menu.";
      }
      if (userInput === '0') {
        setCurrentMenu('main');
        return responses.mainMenu;
      }
      return responses.default;
    }

    // Products menu navigation  
    if (currentMenu === 'products') {
      if (['1', '2', '3', '4'].includes(userInput)) {
        setTimeout(() => navigate('/products'), 800);
        return "🛍️ **Opening Products page...**";
      }
      if (userInput === '0') {
        setCurrentMenu('main');
        return responses.mainMenu;
      }
      return responses.default;
    }

    // Career menu navigation
    if (currentMenu === 'career') {
      if (['1', '2', '3', '4'].includes(userInput)) {
        setTimeout(() => navigate('/career'), 800);
        return "💼 **Opening Career page...**";
      }
      if (userInput === '0') {
        setCurrentMenu('main');
        return responses.mainMenu;
      }
      return responses.default;
    }

    // Contact, Pricing, About menus
    if (currentMenu === 'contact' || currentMenu === 'pricing' || currentMenu === 'about') {
      if (userInput === '1') {
        setTimeout(() => navigate('/schedule-meeting'), 800);
        return responses.meeting;
      }
      if (userInput === '0') {
        setCurrentMenu('main');
        return responses.mainMenu;
      }
    }

    return responses.default;
  }, [currentMenu, navigate]);

  const handleSendMessage = useCallback(() => {
    if (!input.trim()) return;

    const trimmedInput = input.trim();
    const userMessage: Message = {
      id: Date.now().toString(),
      content: trimmedInput,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Faster response time for better UX
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(trimmedInput),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  }, [input, generateResponse]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  const handleQuickAction = useCallback((value: string) => {
    setInput(value);
  }, []);

  return (
    <>
      {/* Enhanced Chat Toggle Button - Mobile Responsive */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        {/* Glow effect background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-purple-600 rounded-full blur-lg opacity-70 animate-pulse"></div>
        
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-primary via-blue-600 to-purple-600 hover:from-primary/90 hover:via-blue-600/90 hover:to-purple-600/90 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-2 border-white/20 touch-manipulation"
          size="icon"
        >
          {isOpen ? (
            <X className="h-6 w-6 sm:h-7 sm:w-7" />
          ) : (
            <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          )}
        </Button>
      </div>

      {/* Enhanced Chat Window - Mobile Responsive */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-20 sm:bottom-24 sm:right-6 sm:left-auto sm:w-[420px] h-[70vh] sm:h-[600px] max-h-[600px] z-40 flex flex-col animate-scale-in">
          {/* Background with gradient and blur */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/20 dark:border-gray-700/30"></div>
          
          {/* Enhanced Header - Mobile Responsive */}
          <div className="relative bg-gradient-to-r from-primary via-blue-600 to-purple-600 text-white p-4 sm:p-6 rounded-t-2xl border-b border-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-t-2xl"></div>
            <div className="relative flex items-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 bg-white/20 rounded-full backdrop-blur-sm">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white animate-pulse" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-bold flex items-center gap-1 sm:gap-2 truncate">
                  <span className="truncate">Bitroix AI Assistant</span>
                  <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300 animate-bounce flex-shrink-0" />
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-medium truncate">
                  {isTyping ? "🤖 Typing..." : "💬 Ask me anything about our services"}
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Messages Container - Mobile Responsive */}
          <div className="relative flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-b from-transparent to-white/50 dark:to-gray-900/50">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex animate-fade-in ${message.isBot ? 'justify-start' : 'justify-end'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex items-start gap-2 sm:gap-3 max-w-[90%] sm:max-w-[85%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Avatar */}
                  <div className={`p-1.5 sm:p-2 rounded-full shadow-lg flex-shrink-0 ${
                    message.isBot 
                      ? 'bg-gradient-to-r from-primary to-blue-600 text-white' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  }`}>
                    {message.isBot ? (
                      <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                    ) : (
                      <User className="h-3 w-3 sm:h-4 sm:w-4" />
                    )}
                  </div>
                  
                  {/* Message Bubble */}
                  <div className={`relative p-3 sm:p-4 rounded-2xl shadow-lg backdrop-blur-sm border ${
                    message.isBot
                      ? 'bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50'
                      : 'bg-gradient-to-r from-primary to-blue-600 text-white border-primary/30'
                  }`}>
                    {/* Message tail */}
                    <div className={`absolute top-3 ${
                      message.isBot ? '-left-2' : '-right-2'
                    } w-3 h-3 sm:w-4 sm:h-4 rotate-45 ${
                      message.isBot
                        ? 'bg-white/80 dark:bg-gray-800/80 border-l border-b border-gray-200/50 dark:border-gray-600/50'
                        : 'bg-gradient-to-br from-primary to-blue-600'
                    }`}></div>
                    
                    {/* Message Content */}
                    <div className="relative z-10">
                      {message.isBot ? (
                        <FormattedMessage content={message.content} />
                      ) : (
                        <p className="text-xs sm:text-sm font-medium leading-relaxed">{message.content}</p>
                      )}
                    </div>
                    
                    {/* Timestamp */}
                    <div className={`text-xs mt-1.5 sm:mt-2 ${
                      message.isBot ? 'text-gray-500 dark:text-gray-400' : 'text-white/70'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="flex items-start gap-2 sm:gap-3 max-w-[90%] sm:max-w-[85%]">
                  <div className="p-1.5 sm:p-2 rounded-full shadow-lg bg-gradient-to-r from-primary to-blue-600 text-white flex-shrink-0">
                    <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/80 p-3 sm:p-4 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Input Section - Mobile Responsive */}
          <div className="relative p-3 sm:p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-b-2xl border-t border-white/20 dark:border-gray-700/30">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex-1 relative">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a number (1-9) or ask..."
                  className="pr-10 sm:pr-12 h-10 sm:h-12 text-sm sm:text-base bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-600/50 focus:border-primary/70 rounded-xl shadow-sm transition-all duration-200 focus:shadow-lg touch-manipulation"
                />
                <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary animate-pulse" />
                </div>
              </div>
              
              <Button 
                onClick={handleSendMessage} 
                disabled={!input.trim() || isTyping}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                size="icon"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
            
            {/* Quick Action Badges - Mobile Responsive */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
              <Badge 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary/20 transition-colors text-xs px-2 sm:px-3 py-1 touch-manipulation"
                onClick={() => handleQuickAction('menu')}
              >
                📋 <span className="hidden xs:inline">Main </span>Menu
              </Badge>
              <Badge 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary/20 transition-colors text-xs px-2 sm:px-3 py-1 touch-manipulation"
                onClick={() => handleQuickAction('7')}
              >
                📅 <span className="hidden xs:inline">Schedule </span>Meeting
              </Badge>
              <Badge 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary/20 transition-colors text-xs px-2 sm:px-3 py-1 touch-manipulation"
                onClick={() => handleQuickAction('1')}
              >
                🛠️ Services
              </Badge>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;