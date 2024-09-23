// pages/Countdown.tsx
import bgCountdown from '../assets/images/image-1.jpg'
import Count from '../components/Countdown.tsx'

const Countdown = () => {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-custom-mobile md:bg-custom-md lg:bg-custom-lg"
      style={{ backgroundImage: `url(${bgCountdown})` }}>
      <div className='flex flex-col h-full justify-end relative z-10'>
        <Count />
      </div>
    </div>

  );
};

export default Countdown;
