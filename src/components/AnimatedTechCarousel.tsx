import { useEffect, useRef, useState } from "react";

interface Technology {
  name: string;
  logo: string;
  category?: string;
}

interface AnimatedTechCarouselProps {
  technologies: Technology[];
  title: string;
  subtitle?: string;
  accentColor?: string;
}

const AnimatedTechCarousel = ({ 
  technologies, 
  title, 
  subtitle,
  accentColor = "blue" 
}: AnimatedTechCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate technologies for seamless loop
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section className="py-16 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technologies <span className={`text-${accentColor}-400`}>We Master</span>
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex overflow-x-hidden gap-8 pb-4"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedTech.map((tech, index) => (
            <div 
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 group"
            >
              <div className="w-28 h-28 bg-white/10 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center p-4 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:bg-white/20">
                <img 
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-12 h-12 object-contain mb-2"
                  loading="lazy"
                />
                <span className="text-white text-xs font-medium text-center truncate w-full">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedTechCarousel;
