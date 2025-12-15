import { useState, useRef, useEffect, memo } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

const LazyImage = memo(({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExYTJlIi8+PC9zdmc+',
  width,
  height,
  priority = false,
  sizes = '100vw'
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px', threshold: 0.01 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <img
      ref={imgRef}
      src={hasError ? placeholder : (isInView ? src : placeholder)}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      sizes={sizes}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-50'} ${className}`}
      onLoad={() => setIsLoaded(true)}
      onError={handleError}
    />
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;
