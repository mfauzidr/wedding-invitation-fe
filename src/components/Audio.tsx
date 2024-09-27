import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

interface BGMProps {
  src: string;
  volume?: number;
  autoplay?: boolean; // Ensure this property is declared
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
      }
    }
  }, [volume, autoplay]);

  return (
    <div id="audio-container" className="audio-box">
      <audio ref={audioRef} loop>
        <source src={src} type="audio/mp3" />
      </audio>
      {!autoplay && (
        <button onClick={() => audioRef.current?.play()} className="play-button hidden">
        </button>
      )}
    </div>
  );
});

export default Audio;
