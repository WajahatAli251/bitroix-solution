import { useEffect, useRef, useState, memo } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
  poster?: string;
  priority?: boolean;
}

const LazyVideo = memo(({ src, className = '', poster, priority = false }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (priority) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px', threshold: 0.01 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      // Use requestIdleCallback for non-priority videos
      if (!priority && 'requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          videoRef.current?.load();
        });
      } else {
        videoRef.current.load();
      }
    }
  }, [isVisible, priority]);

  return (
    <video
      ref={videoRef}
      autoPlay={isVisible}
      loop
      muted
      playsInline
      preload={priority ? "auto" : "none"}
      poster={poster}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      aria-hidden="true"
      onLoadedData={() => setIsLoaded(true)}
      onCanPlayThrough={() => setIsLoaded(true)}
    >
      {isVisible && <source src={src} type="video/mp4" />}
    </video>
  );
});

LazyVideo.displayName = 'LazyVideo';

export default LazyVideo;
