import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Count: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const eventDate = new Date('2024-10-06T00:00:00'); // Example target date
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex justify-center gap-4 -mb-16 font-bellefair bottom-0">
      {Object.keys(timeLeft).map((interval, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-80 rounded-lg p-2 w-[70px] h-[80px] text-center shadow-md"
        >
          <p className="text-maroon text-3xl font-bold">{timeLeft[interval as keyof TimeLeft]}</p>
          <p className="text-maroon text-md mt-1">{interval.charAt(0).toUpperCase() + interval.slice(1)}</p>
        </div>
      ))}
    </div>
  );
};

export default Count;
