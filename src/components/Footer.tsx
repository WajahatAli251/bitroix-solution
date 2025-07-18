
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Bitroix <span className="text-blue-400">Solution</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses through cutting-edge software solutions, cloud innovation, and AI integration. 
              Building the future, one solution at a time.
            </p>
            <div className="flex space-x-6">
              <div className="text-center">
                <a href="https://www.linkedin.com/in/bitroix-solution-a7a7b4372/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <span className="text-blue-400">💼</span>
                </a>
                <p className="text-xs text-gray-400 mt-1">LinkedIn</p>
              </div>
              <div className="text-center">
                <a href="https://www.instagram.com/bitroixsolution?igsh=MTNzNnM4NWhqMWVsZw==&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <span className="text-pink-400">📷</span>
                </a>
                <p className="text-xs text-gray-400 mt-1">Instagram</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('mission')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solutions')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📧 bitroixsolution@gmail.com</li>
              <li>📱 +92 3352222578</li>
              <li>📱 +92 321 2345194</li>
              <li>📍 Karachi, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Bitroix Solution. All rights reserved. Built with innovation and integrity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
