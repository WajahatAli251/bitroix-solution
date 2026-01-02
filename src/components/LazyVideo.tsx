import { useEffect, useRef, useState, memo } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
  poster?: string;
}

const LazyVideo = memo(({ src, className = '', poster }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px', threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.load();
    }
  }, [isVisible]);

  return (
    <video
      ref={videoRef}
      autoPlay={isVisible}
      loop
      muted
      playsInline
      preload="none"
      poster={poster}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      aria-hidden="true"
      onLoadedData={() => setIsLoaded(true)}
    >
      {isVisible && <source src={src} type="video/mp4" />}
    </video>
  );
});

LazyVideo.displayName = 'LazyVideo';

export default LazyVideo;
