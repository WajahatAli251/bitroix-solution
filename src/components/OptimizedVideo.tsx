import { useEffect, useRef, useState, memo } from 'react';

interface OptimizedVideoProps {
  src: string;
  className?: string;
  poster?: string;
  priority?: boolean;
  quality?: 'low' | 'auto';
}

/**
 * OptimizedVideo - Performance-focused video component
 * - Lazy loads videos when they enter viewport
 * - Uses poster images to show content before video loads
 * - Defers loading with requestIdleCallback for non-priority videos
 * - Reduces bandwidth by only loading visible videos
 */
const OptimizedVideo = memo(({ 
  src, 
  className = '', 
  poster,
  priority = false,
  quality = 'auto'
}: OptimizedVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);

  // Observe when video container enters viewport
  useEffect(() => {
    if (priority) {
      setShouldLoad(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '200px', // Start loading 200px before visible
        threshold: 0.01 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Defer actual video loading for better performance
  useEffect(() => {
    if (!isVisible) return;

    // Use requestIdleCallback for non-priority videos
    if (!priority && 'requestIdleCallback' in window) {
      const idleId = (window as any).requestIdleCallback(
        () => setShouldLoad(true),
        { timeout: 3000 }
      );
      return () => (window as any).cancelIdleCallback?.(idleId);
    } else {
      // Small delay for priority videos to not block initial render
      const timer = setTimeout(() => setShouldLoad(true), priority ? 0 : 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, priority]);

  // Load and play video when ready
  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      const video = videoRef.current;
      video.load();
      
      // Attempt to play (may be blocked by browser autoplay policies)
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, video will still show poster
        });
      }
    }
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Poster image shown before video loads */}
      {poster && !isLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
          aria-hidden="true"
        />
      )}
      
      <video
        ref={videoRef}
        autoPlay={shouldLoad}
        loop
        muted
        playsInline
        preload={priority ? "metadata" : "none"}
        poster={poster}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className.includes('scale-') ? '' : ''}`}
        style={{ minWidth: '100%', minHeight: '100%' }}
        aria-hidden="true"
        onLoadedData={() => setIsLoaded(true)}
        onCanPlayThrough={() => setIsLoaded(true)}
      >
        {shouldLoad && <source src={src} type="video/mp4" />}
      </video>
    </div>
  );
});

OptimizedVideo.displayName = 'OptimizedVideo';

export default OptimizedVideo;
