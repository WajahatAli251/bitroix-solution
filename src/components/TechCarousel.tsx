import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import pythonLogo from '@/assets/tech-logos/python.png';
import reactLogo from '@/assets/tech-logos/react.svg';
import nodejsLogo from '@/assets/tech-logos/nodejs.svg';
import awsLogo from '@/assets/tech-logos/aws.png';
import dockerLogo from '@/assets/tech-logos/docker.png';
import mongodbLogo from '@/assets/tech-logos/mongodb.png';
import postgresqlLogo from '@/assets/tech-logos/postgresql.png';
import typescriptLogo from '@/assets/tech-logos/typescript.svg';
import nextjsLogo from '@/assets/tech-logos/nextjs.png';
import kubernetesLogo from '@/assets/tech-logos/kubernetes.png';
import jenkinsLogo from '@/assets/tech-logos/jenkins.png';
import gitLogo from '@/assets/tech-logos/git.png';
import figmaLogo from '@/assets/tech-logos/figma.svg';

const TechCarousel = () => {
  const technologies = [
    { name: 'React', logo: reactLogo, isImage: true },
    { name: 'Node.js', logo: nodejsLogo, isImage: true },
    { name: 'Python', logo: pythonLogo, isImage: true },
    { name: 'AWS', logo: awsLogo, isImage: true },
    { name: 'Docker', logo: dockerLogo, isImage: true },
    { name: 'MongoDB', logo: mongodbLogo, isImage: true },
    { name: 'PostgreSQL', logo: postgresqlLogo, isImage: true },
    { name: 'TypeScript', logo: typescriptLogo, isImage: true },
    { name: 'Next.js', logo: nextjsLogo, isImage: true },
    { name: 'Kubernetes', logo: kubernetesLogo, isImage: true },
    { name: 'Jenkins', logo: jenkinsLogo, isImage: true },
    { name: 'Git', logo: gitLogo, isImage: true },
    { name: 'Figma', logo: figmaLogo, isImage: true },
    { name: 'HTML5', logo: '/lovable-uploads/ef0428f3-6e15-4ddb-b663-413981cfa279.png', isImage: true },
    { name: 'CSS3', logo: '/lovable-uploads/ad733c59-7366-45bc-bc79-5662c8d51a89.png', isImage: true },
    { name: 'JavaScript', logo: '/lovable-uploads/c756960a-e602-4ebc-9c72-e51c64fab3dd.png', isImage: true }
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
    <section className="py-20 relative overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/sections-background.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-slate-900/80 z-[1]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Technologies We Master</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies that power our innovative solutions
          </p>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {technologies.map((tech, index) => (
              <div key={index} className="embla__slide flex-none w-48 mr-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="h-16 mb-4 flex items-center justify-center">
                    {tech.isImage ? (
                      <img 
                        src={tech.logo} 
                        alt={`${tech.name} logo - technology used by Bitroix Solution`} 
                        className="h-12 w-12 object-contain" 
                        loading="lazy"
                        width="48"
                        height="48"
                      />
                    ) : (
                      <span className="text-4xl">{tech.logo}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{tech.name}</h3>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {technologies.map((tech, index) => (
              <div key={`duplicate-${index}`} className="embla__slide flex-none w-48 mr-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="h-16 mb-4 flex items-center justify-center">
                    {tech.isImage ? (
                      <img 
                        src={tech.logo} 
                        alt={`${tech.name} logo - technology used by Bitroix Solution`} 
                        className="h-12 w-12 object-contain" 
                        loading="lazy"
                        width="48"
                        height="48"
                      />
                    ) : (
                      <span className="text-4xl">{tech.logo}</span>
                    )}
                  </div>
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