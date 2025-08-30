import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

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

Which solution interests you? 💡`,

  serviceDetails: {
    webdev: `💻 **Custom Web Development**
• Modern responsive websites
• E-commerce platforms  
• Web applications
• CMS development
• API integration

**Ready to start?** Type **"7"** to schedule consultation or **"0"** for main menu`,

    uiux: `🎨 **UI/UX Design Services**
• User research & analysis
• Wireframing & prototyping
• Visual design systems
• Mobile app design
• User testing

Type **"7"** to discuss your project or **"0"** for main menu`,

    devops: `⚙️ **DevOps & MLOps**
• Cloud infrastructure setup
• CI/CD pipeline development
• Container orchestration
• Monitoring & logging
• ML model deployment

Type **"7"** for consultation or **"0"** for main menu`,

    analytics: `📊 **Data Analytics & BI**
• Business intelligence dashboards
• Data visualization
• Predictive analytics
• ETL processes
• Real-time reporting

Type **"7"** to get started or **"0"** for main menu`,

    team: `👥 **Team as Service**
• Dedicated development teams
• Flexible engagement models
• Agile methodology
• 24/7 support
• Scalable solutions

Type **"7"** to discuss your needs or **"0"** for main menu`,

    ai: `🤖 **AI Chatbots & Automation**
• Customer service chatbots
• Process automation
• AI-powered workflows
• Integration services
• 24/7 intelligent support

Type **"7"** for demo or **"0"** for main menu`,

    design: `🎯 **Design Consultancy**
• Brand strategy development
• Design system creation
• User experience audits
• Design workshops
• Strategic guidance

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

  pricing: `💰 **Pricing & Quotes**

We offer flexible pricing models:
• Project-based pricing
• Hourly consultation rates  
• Monthly retainer packages
• Team augmentation pricing

**Get Your Quote:**
**1** - Schedule free consultation
**2** - Request detailed quote
**3** - View pricing guide
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (message: string): string => {
    const userInput = message.trim();
    
    // Handle navigation commands
    if (userInput.toLowerCase().includes('menu') || userInput === '0') {
      setCurrentMenu('main');
      return responses.mainMenu;
    }

    if (userInput.toLowerCase().includes('services')) {
      setCurrentMenu('services');
      return responses.services;
    }

    if (userInput.toLowerCase().includes('meeting') || userInput === '7') {
      setTimeout(() => {
        navigate('/schedule-meeting');
      }, 2000);
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
          setTimeout(() => navigate('/schedule-meeting'), 2000);
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
      switch (userInput) {
        case '1':
          setCurrentMenu('service-detail');
          return responses.serviceDetails.webdev;
        case '2':
          setCurrentMenu('service-detail');
          return responses.serviceDetails.uiux;
        case '3':
          setCurrentMenu('service-detail');
          return responses.serviceDetails.devops;
        case '4':
          setCurrentMenu('service-detail');
          return responses.serviceDetails.analytics;
        case '5':
          setCurrentMenu('service-detail');
          return responses.serviceDetails.team;
        case '6':
          setCurrentMenu('service-detail');
          return responses.serviceDetails.ai;
        case '7':
          setCurrentMenu('service-detail');
          return responses.serviceDetails.design;
        case '0':
          setCurrentMenu('main');
          return responses.mainMenu;
        default:
          return responses.default;
      }
    }

    // Solutions menu navigation
    if (currentMenu === 'solutions') {
      switch (userInput) {
        case '1':
          setTimeout(() => navigate('/solutions/lead-generation'), 1000);
          return "🚀 **Opening Lead Generation page...**\n\nYou'll be redirected to learn about our lead generation systems and strategies.";
        case '2':
          setTimeout(() => navigate('/solutions/seo-dominance'), 1000);
          return "🔍 **Opening SEO Dominance page...**\n\nDiscover our comprehensive SEO packages and strategies.";
        case '3':
          setTimeout(() => navigate('/solutions/paid-ads-management'), 1000);
          return "💰 **Opening Paid Ads Management page...**\n\nLearn about our expert paid advertising management services.";
        case '4':
          setTimeout(() => navigate('/solutions/marketing-automation'), 1000);
          return "⚡ **Opening Marketing Automation page...**\n\nExplore our marketing automation solutions.";
        case '5':
          setTimeout(() => navigate('/solutions/conversion-optimization'), 1000);
          return "📈 **Opening Conversion Optimization page...**\n\nSee how we optimize your conversion rates.";
        case '6':
          setTimeout(() => navigate('/solutions/social-media-growth'), 1000);
          return "📱 **Opening Social Media Growth page...**\n\nDiscover our social media growth strategies.";
        case '0':
          setCurrentMenu('main');
          return responses.mainMenu;
        default:
          return responses.default;
      }
    }

    // Projects menu navigation
    if (currentMenu === 'projects') {
      switch (userInput) {
        case '1':
          setTimeout(() => navigate('/projects'), 1000);
          return "📂 **Opening Projects page...**\n\nYou'll see our complete portfolio and case studies.";
        case '2':
          setTimeout(() => navigate('/schedule-meeting'), 1000);
          return "📅 **Opening meeting scheduler...**\n\nSchedule a discussion about your project needs.";
        case '3':
          setCurrentMenu('main');
          return "📋 **Case studies request noted!**\n\nOur team will prepare relevant case studies for your review. Would you like to schedule a meeting to discuss them?\n\nType **7** to schedule or **0** for main menu.";
        case '0':
          setCurrentMenu('main');
          return responses.mainMenu;
        default:
          return responses.default;
      }
    }

    // Products menu navigation  
    if (currentMenu === 'products') {
      switch (userInput) {
        case '1':
          setTimeout(() => navigate('/products'), 1000);
          return "🛍️ **Opening Products page...**\n\nExplore our ready-made software solutions.";
        case '2':
        case '3':
        case '4':
          setTimeout(() => navigate('/products'), 1000);
          return "🔧 **Opening Products page...**\n\nYou'll find detailed information about all our products.";
        case '0':
          setCurrentMenu('main');
          return responses.mainMenu;
        default:
          return responses.default;
      }
    }

    // Career menu navigation
    if (currentMenu === 'career') {
      switch (userInput) {
        case '1':
          setTimeout(() => navigate('/career'), 1000);
          return "💼 **Opening Career page...**\n\nExplore opportunities to join our team!";
        case '2':
        case '3':
        case '4':
          setTimeout(() => navigate('/career'), 1000);
          return "🚀 **Opening Career page...**\n\nFind all career-related information there.";
        case '0':
          setCurrentMenu('main');
          return responses.mainMenu;
        default:
          return responses.default;
      }
    }

    // Contact, Pricing, About menus
    if (currentMenu === 'contact' || currentMenu === 'pricing' || currentMenu === 'about') {
      if (userInput === '1') {
        setTimeout(() => navigate('/schedule-meeting'), 1000);
        return responses.meeting;
      }
      if (userInput === '0') {
        setCurrentMenu('main');
        return responses.mainMenu;
      }
    }

    // Default fallback
    return responses.default;
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