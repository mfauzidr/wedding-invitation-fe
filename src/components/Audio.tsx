import React, { useEffect, useRef } from 'react';

interface BGMProps {
  src: string;
  volume?: number; // Optional: default volume
}

const Audio: React.FC<BGMProps> = ({ src, volume = 0.5 }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          console.log("Autoplay succeeded");
        } catch (error) {
          console.error("Autoplay failed:", error);
          // Optionally retry after a delay
          setTimeout(() => {
            audioRef.current?.play().catch((retryError) => {
              console.error("Retrying autoplay failed:", retryError);
            });
          }, 1000); // Retry after 3 seconds
        }
      }
    };

    playAudio();
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="hidden">
      <audio ref={audioRef} src={src} loop />
    </div>
  );
};

export default Audio;
