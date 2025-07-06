import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const TechCarousel = () => {
  const technologies = [
    { name: 'React', logo: '⚛️' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'Python', logo: '🐍' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Docker', logo: '🐳' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'Redis', logo: '🔴' },
    { name: 'GraphQL', logo: '💎' },
    { name: 'TypeScript', logo: '💙' },
    { name: 'Next.js', logo: '▲' },
    { name: 'Kubernetes', logo: '⚙️' },
    { name: 'Jenkins', logo: '🏗️' },
    { name: 'Git', logo: '🌳' },
    { name: 'Figma', logo: '🎨' },
    { name: 'Firebase', logo: '🔥' }
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
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Technologies We Master</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cutting-edge technologies that power our innovative solutions
          </p>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {technologies.map((tech, index) => (
              <div key={index} className="embla__slide flex-none w-48 mr-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="text-4xl mb-4">{tech.logo}</div>
                  <h3 className="text-lg font-semibold text-slate-900">{tech.name}</h3>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {technologies.map((tech, index) => (
              <div key={`duplicate-${index}`} className="embla__slide flex-none w-48 mr-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="text-4xl mb-4">{tech.logo}</div>
                  <h3 className="text-lg font-semibold text-slate-900">{tech.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCarousel;