import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import wcsLogo from '@/assets/clients/wcs-logo.png';
import bestTechLogo from '@/assets/clients/best-technology-logo.png';
import itruckLogo from '@/assets/clients/itruck-express-logo.png';
import eccLogo from '@/assets/clients/ecc-logo.png';
import surgiTechLogo from '@/assets/clients/us-surgitech-logo.png';
import zpdLogo from '@/assets/clients/zpd-learning-logo.png';

const ClientsCarousel = () => {
  const clients = [
    { name: 'Warren Cleaning Services', logo: wcsLogo },
    { name: 'Best Technology', logo: bestTechLogo },
    { name: 'iTruck Express', logo: itruckLogo },
    { name: 'ECC', logo: eccLogo },
    { name: 'U.S. Surgitech', logo: surgiTechLogo },
    { name: 'ZPD Learning', logo: zpdLogo },
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Successful Clients</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Trusted by industry leaders and innovative businesses
          </p>
        </div>

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
                      width="200"
                      height="80"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-700">{client.name}</h3>
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
                      width="200"
                      height="80"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-700">{client.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
