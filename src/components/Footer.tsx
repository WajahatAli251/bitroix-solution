import linkedinLogo from '@/assets/linkedin-logo.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background dark:bg-background border-t border-border">
      <div className="gradient-navy min-h-[400px] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-bold mb-6 text-white">
                Bitroix <span className="text-gradient">Solution LLC</span>
              </h3>
              <p className="text-muted-foreground dark:text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
                Empowering businesses through cutting-edge software solutions, cloud innovation, and AI integration. 
                Building the future, one solution at a time.
              </p>
              <div className="flex space-x-6">
                <div className="text-center group">
                  <a 
                    href="https://www.linkedin.com/company/biroix-solution-llc/?viewAsMember=true" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110 glow-primary group-hover:glow-tech shadow-md"
                  >
                    <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6 rounded" />
                  </a>
                  <p className="text-sm text-muted-foreground dark:text-gray-400 mt-2 font-medium">LinkedIn</p>
                </div>
                <div className="text-center group">
                  <a 
                    href="https://www.instagram.com/bitroix_solution/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110 glow-primary group-hover:glow-tech shadow-md"
                  >
                    <img src="/lovable-uploads/a8c010da-52d0-4d7f-83db-1d1de7330de8.png" alt="Instagram" className="w-6 h-6" />
                  </a>
                  <p className="text-sm text-muted-foreground dark:text-gray-400 mt-2 font-medium">Instagram</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-muted-foreground dark:text-gray-300 hover:text-primary transition-colors duration-300 text-left font-medium hover:translate-x-1 transform"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('mission')}
                    className="text-muted-foreground dark:text-gray-300 hover:text-primary transition-colors duration-300 text-left font-medium hover:translate-x-1 transform"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-muted-foreground dark:text-gray-300 hover:text-primary transition-colors duration-300 text-left font-medium hover:translate-x-1 transform"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('solutions')}
                    className="text-muted-foreground dark:text-gray-300 hover:text-primary transition-colors duration-300 text-left font-medium hover:translate-x-1 transform"
                  >
                    Solutions
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-muted-foreground dark:text-gray-300">
                  <span className="text-primary text-lg">📧</span>
                  <span className="font-medium">info@bitroixsolution.com</span>
                </li>
                <li className="flex items-center space-x-3 text-muted-foreground dark:text-gray-300">
                  <span className="text-primary text-lg">📱</span>
                  <div className="flex flex-col">
                    <span className="font-medium">+1 (210) 201-3312</span>
                    <span className="font-medium">+92 335 2222 578</span>
                  </div>
                </li>
                <li className="flex items-center space-x-3 text-muted-foreground dark:text-gray-300">
                  <span className="text-primary text-lg">📍</span>
                  <div className="flex flex-col">
                    <span className="font-medium">San Francisco, California, USA</span>
                    <span className="font-medium">Gulistan e Johar, Karachi, Pakistan</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border dark:border-gray-700 mt-12 pt-8 text-center">
            <p className="text-muted-foreground dark:text-gray-400 text-lg">
              © 2024 <span className="text-primary font-bold">Bitroix Solution LLC</span>. All rights reserved. Built with innovation and integrity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
