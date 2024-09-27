import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

interface BGMProps {
  src: string;
  volume?: number;
  autoplay?: boolean;
}

const Audio = forwardRef<HTMLAudioElement, BGMProps>(({ src, volume = 0.5, autoplay = false }, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Expose the audioRef to the parent component via the ref
  useImperativeHandle(ref, () => audioRef.current as HTMLAudioElement);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;

      // Autoplay logic
      if (autoplay) {
        audioRef.current.play().catch((error) => {
          console.error('Audio play failed:', error);
        });
      } else {
        // If autoplay is not enabled, restart autoplay after 3 seconds
        const timer = setTimeout(() => {
          audioRef.current?.play().catch((error) => {
            console.error('Audio play failed after 3 seconds:', error);
          });
        }, 3000);

        return () => clearTimeout(timer); // Clean up the timer on component unmount
      }
    }
  }, [volume, autoplay]);

  return (
    <div id="audio-container" className="audio-box">
      <audio ref={audioRef} loop>
        <source src={src} type="audio/mp3" />
      </audio>
      {!autoplay && (
        <button onClick={() => audioRef.current?.play()} className="play-button">
          Play Audio
        </button>
      )}
    </div>
  );
});

export default Audio;
