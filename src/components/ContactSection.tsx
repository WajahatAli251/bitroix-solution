
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS with public key
      emailjs.init('EetNNBAg1nuOPQjlT');

      // Send email using EmailJS
      await emailjs.send(
        'service_l5hd8qo', // Service ID
        'template_txvc1qq', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
        }
      );

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      
      // Fallback to mailto
      const subject = encodeURIComponent("New Contact Form Submission");
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:info@bitroixsolution.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_blank');

      toast({
        title: "Opening email client...",
        description: "Please send the message from your email client."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 md:mb-5 hover:scale-105 transition-transform duration-300 px-4">Contact Us</h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 md:mb-6 lg:mb-8 animate-scale-in"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto animate-fade-in px-4" style={{animationDelay: '0.2s'}}>
            Ready to transform your business? Let's discuss your project and build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-5 md:p-7 lg:p-8 rounded-xl border border-blue-100 dark:border-slate-600 animate-fade-in hover:shadow-xl hover:scale-[1.02] transition-all duration-500" style={{animationDelay: '0.1s'}}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-5 md:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-white">Let's Talk</h3>
              <button
                onClick={() => navigate('/schedule-meeting')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-md text-sm w-full sm:w-auto"
              >
                Schedule Meeting
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5 md:mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5 md:mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5 md:mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="+1 (XXX) XXX-XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5 md:mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 md:py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg border-2 text-sm md:text-base ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
                style={{
                  background: 'linear-gradient(to right, #00BFFF, #33F3FF)',
                  color: '#0D1B2A',
                  borderColor: '#264653',
                  boxShadow: '0 10px 30px rgba(0, 191, 255, 0.3)'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    const target = e.target as HTMLButtonElement;
                    target.style.background = 'linear-gradient(to right, #1EC8E8, #33F3FF)';
                    target.style.boxShadow = '0 15px 40px rgba(30, 200, 232, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    const target = e.target as HTMLButtonElement;
                    target.style.background = 'linear-gradient(to right, #00BFFF, #33F3FF)';
                    target.style.boxShadow = '0 10px 30px rgba(0, 191, 255, 0.3)';
                  }
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-5 md:space-y-6 lg:space-y-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="bg-slate-50 dark:bg-slate-800 p-5 md:p-7 lg:p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-4 md:mb-5 lg:mb-6">Get in Touch</h3>
              
              <div className="space-y-4 md:space-y-5">
                <div 
                  className="flex items-start space-x-2.5 sm:space-x-3 md:space-x-4 group cursor-pointer" 
                  onClick={() => window.open('mailto:info@bitroixsolution.com', '_blank')}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md">
                    <img src="/lovable-uploads/191a40b9-2313-4c17-babe-1602398a5d77.png" alt="Email" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" loading="lazy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm md:text-base">Email</h4>
                    <p className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs sm:text-sm md:text-base break-all">info@bitroixsolution.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5 sm:space-x-3 md:space-x-4 group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md">
                    <img src="/lovable-uploads/736381fa-97c8-4991-8408-188d30b9af20.png" alt="Phone" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" loading="lazy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm md:text-base">Phone</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base">+1 (210) 201-3312</p>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base">+92 335 2222 578</p>
                  </div>
                </div>

                <div 
                  className="flex items-start space-x-2.5 sm:space-x-3 md:space-x-4 group cursor-pointer" 
                  onClick={() => window.open('https://maps.google.com/?q=San+Francisco,+CA+94109,+USA', '_blank')}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md">
                    <img src="/lovable-uploads/a8de8db8-f140-41ec-b6e9-4c07811f905f.png" alt="Location" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" loading="lazy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm md:text-base">Offices</h4>
                    <p className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs sm:text-sm md:text-base">San Francisco, California, USA</p>
                    <p className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs sm:text-sm md:text-base mt-0.5 sm:mt-1">Gulistan e Johar, Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 dark:from-slate-800 dark:to-blue-800 p-5 md:p-7 lg:p-8 rounded-xl text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 md:mb-4 lg:mb-6">Follow Us</h3>
              <div className="flex space-x-3 md:space-x-4">
                <a href="https://www.linkedin.com/company/biroix-solution-llc/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center hover:bg-white/90 hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-md" aria-label="Visit our LinkedIn page">
                  <img src="/lovable-uploads/03513845-3b13-4cf0-87af-8293cad1a3e8.png" alt="LinkedIn" className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" loading="lazy" />
                </a>
                <a href="https://www.instagram.com/bitroix_solution/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center hover:bg-white/90 hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-md" aria-label="Visit our Instagram page">
                  <img src="/lovable-uploads/89639b18-4900-4542-9ccd-d1afd27ac2c9.png" alt="Instagram" className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" loading="lazy" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
