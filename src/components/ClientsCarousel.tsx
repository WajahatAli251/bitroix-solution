import { useEffect, memo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import OptimizedVideo from './OptimizedVideo';

import wcsLogo from '@/assets/clients/wcs-logo.png';
import bestTechLogo from '@/assets/clients/best-technology-logo.png';
import itruckLogo from '@/assets/clients/itruck-express-logo.png';
import eccLogo from '@/assets/clients/ecc-logo.png';
import surgiTechLogo from '@/assets/clients/us-surgitech-logo.png';
import zpdLogo from '@/assets/clients/zpd-learning-logo.png';

const ClientsCarousel = memo(() => {
  const clients = [
    { name: 'Warren Cleaning Services', logo: wcsLogo, founder: 'Robert Warren, CEO' },
    { name: 'Best Technology', logo: bestTechLogo, founder: 'James Mitchell, CTO' },
    { name: 'iTruck Express', logo: itruckLogo, founder: 'Michael Rodriguez, Operations Director' },
    { name: 'ECC', logo: eccLogo, founder: 'Dr. Patricia Anderson, Director' },
    { name: 'U.S. Surgitech', logo: surgiTechLogo, founder: 'Dr. Steven Martinez, Medical Director' },
    { name: 'ZPD Learning', logo: zpdLogo, founder: 'Sarah Thompson, Founder & CEO' },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
    slidesToScroll: 1
  });

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 2000);

      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <section className="py-20 relative overflow-hidden" aria-labelledby="clients-heading">
      {/* Video Background - Full coverage with wave effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <OptimizedVideo 
          src="/videos/sections-background.mp4" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
      </div>
      
      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-900/85 z-[1]" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]">
        <header className="text-center mb-16">
          <h2 id="clients-heading" className="text-3xl font-bold text-white mb-6">Our Successful Clients</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" aria-hidden="true"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by industry leaders and innovative businesses
          </p>
        </header>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {clients.map((client, index) => (
              <div key={index} className="embla__slide flex-none w-64 mr-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="h-24 mb-4 flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} - successful client of Bitroix Solution web development and digital marketing services`} 
                      className="max-h-20 max-w-full object-contain" 
                      loading="lazy"
                      decoding="async"
                      width="200"
                      height="80"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">{client.name}</h3>
                  <p className="text-xs text-slate-600">{client.founder}</p>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {clients.map((client, index) => (
              <div key={`duplicate-${index}`} className="embla__slide flex-none w-64 mr-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="h-24 mb-4 flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} - successful client of Bitroix Solution web development and digital marketing services`} 
                      className="max-h-20 max-w-full object-contain" 
                      loading="lazy"
                      decoding="async"
                      width="200"
                      height="80"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">{client.name}</h3>
                  <p className="text-xs text-slate-600">{client.founder}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ClientsCarousel.displayName = 'ClientsCarousel';

export default ClientsCarousel;
