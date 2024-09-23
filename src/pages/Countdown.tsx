// pages/Countdown.tsx
import bgCountdown from '../assets/images/image-1.jpg'
import Count from '../components/Countdown.tsx'
import bottomRose from '../assets/images/bottomRose.png'


const Countdown = () => {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-custom-mobile md:bg-custom-md lg:bg-custom-lg"
      style={{ backgroundImage: `url(${bgCountdown})` }}>
      <div className='flex flex-col h-full justify-between relative'>
        <div className='flex flex-col items-end pt-14 pr-10 text-maroon font-cinzel-decorative'>
          <div className='flex flex-col'>
            <div className='items-start tracking-[.25em]'>The Wedding Of</div>
            <div className='items-start text-4xl/[48px] tracking-[.25em]'>Fauzi &</div>
            <div className='items-start text-4xl/[48px] tracking-[.25em] ml-8'>Fauriza</div>
          </div>
        </div>
        <div>

          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-maroon to-transparent"></div>
          <div className='relative'>
            <Count />
          </div>
          <div className='relative w-full h-[109px] bottom-0'>
            <img src={bottomRose} alt="Bottom Rose" className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Countdown;
