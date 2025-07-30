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
    { name: 'JavaScript', logo: '/lovable-uploads/ea84eed2-aedd-4e10-bf63-c50b58e678d0.png', isImage: true },
    { name: 'HTML5', logo: '/lovable-uploads/f091ac58-58b7-460b-9945-9e4d90478c20.png', isImage: true },
    { name: 'CSS3', logo: '/lovable-uploads/eb7b0242-9c5d-4d81-9044-abe3320bd683.png', isImage: true }
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
                  <div className="h-16 mb-4 flex items-center justify-center">
                    {tech.isImage ? (
                      <img src={tech.logo} alt={tech.name} className="h-12 w-12 object-contain" />
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
                      <img src={tech.logo} alt={tech.name} className="h-12 w-12 object-contain" />
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