import React, { useEffect, useRef } from 'react';

interface BGMProps {
  src: string;
  volume?: number; // Optional: default volume
}

const Audio: React.FC<BGMProps> = ({ src, volume = 0.5 }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    }
  }, [volume]);

  return (
    <div className="hidden">
      <audio ref={audioRef} src={src} autoPlay loop />
    </div>
  );
};

export default Audio;
