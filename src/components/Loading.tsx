// components/Loading.tsx
import React, { useEffect, useState } from 'react';

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 30); // Increase progress every 30 ms

    // Set loading to false after the loading completes
    if (progress === 100) {
      const fadeOutTimeout = setTimeout(() => setIsLoading(false), 500);
      return () => clearTimeout(fadeOutTimeout);
    }

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className={`fixed z-30 max-w-md inset-y-0 px-8 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <h1 className='text-2xl mb-4 font-cinzel-decorative text-center'>
        You are invited to Fauzi & Fauriza's wedding
      </h1>
      <div className='text-lg mb-4 font-cardo'>Loading...</div>
      <div className='w-full max-w-md bg-gray-200 rounded-full h-4'>
        <div
          className={`bg-maroon h-full rounded-full`}
          style={{ width: `${progress}%`, transition: 'width 0.3s' }}
        />
      </div>
    </div>
  );
};

export default Loading;
