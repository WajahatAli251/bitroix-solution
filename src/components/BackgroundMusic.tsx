import { useState, useRef, useEffect, memo } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = memo(() => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Try to autoplay when component mounts (will likely be blocked by browser)
    const tryAutoplay = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.volume = 0.3; // Set initial volume to 30%
          await audioRef.current.play();
          setIsPlaying(true);
          setHasInteracted(true);
        } catch (error) {
          // Autoplay was blocked, user needs to interact
          console.log('Autoplay blocked, waiting for user interaction');
        }
      }
    };
    
    tryAutoplay();
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        audioRef.current.volume = 0.3;
        await audioRef.current.play();
        setIsPlaying(true);
        setHasInteracted(true);
      } catch (error) {
        console.error('Failed to play audio:', error);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
      
      {/* Music control button - fixed position */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
        title={isPlaying ? 'Mute music' : 'Play music'}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
        
        {/* Tooltip */}
        <span className="absolute left-full ml-3 px-3 py-1 bg-popover text-popover-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {isPlaying ? 'Click to mute' : 'Click to play music'}
        </span>
      </button>
    </>
  );
});

BackgroundMusic.displayName = 'BackgroundMusic';

export default BackgroundMusic;
