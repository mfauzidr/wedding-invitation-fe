import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

interface BGMProps {
  src: string;
  volume?: number;
}

const Audio = forwardRef<HTMLAudioElement, BGMProps>(({ src, volume = 0.5 }, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Expose the audioRef to the parent component via the ref
  useImperativeHandle(ref, () => audioRef.current as HTMLAudioElement);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Trigger play on user interaction
    }
  };

  return (
    <div>
      <button onClick={handlePlayAudio} className='hidden'>Play Audio</button>
      <audio ref={audioRef} src={src} loop />
    </div>
  );
});

export default Audio;
