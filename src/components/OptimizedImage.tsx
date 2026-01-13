import { useState, useRef, useEffect, memo, ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  aspectRatio?: string;
  placeholderColor?: string;
}

/**
 * OptimizedImage - Performance-focused image component
 * - Native lazy loading with Intersection Observer fallback
 * - Low-quality placeholder before image loads
 * - Proper width/height to prevent layout shift
 * - Async decoding for smoother rendering
 */
const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  sizes = '100vw',
  aspectRatio,
  placeholderColor = '#1a1a2e',
  width,
  height,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '300px', // Start loading 300px before visible
        threshold: 0.01 
      }
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

  // Generate placeholder SVG data URL
  const placeholder = `data:image/svg+xml;base64,${btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width || 400}" height="${height || 300}">
      <rect width="100%" height="100%" fill="${placeholderColor}"/>
    </svg>`
  )}`;

  return (
    <div 
      className={`relative overflow-hidden ${aspectRatio ? `aspect-[${aspectRatio}]` : ''}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Placeholder background */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 animate-pulse"
          style={{ backgroundColor: placeholderColor }}
          aria-hidden="true"
        />
      )}
      
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
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        {...props}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
