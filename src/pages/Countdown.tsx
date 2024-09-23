// pages/Countdown.tsx
import bgCountdown from '../assets/images/image-1.jpg'
import Count from '../components/Countdown.tsx'

const Countdown = () => {
  return (
    <div className="h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bgCountdown})`, backgroundPosition: 'left -125px top 0' }}>
      <div className=' relative flex flex-col h-screen z-10 '>

        <Count />
      </div>
    </div>

  );
};

export default Countdown;
