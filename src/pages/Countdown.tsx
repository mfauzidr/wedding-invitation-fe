// pages/Countdown.tsx
import bgCountdown from '../assets/images/image-1.webp'
import Count from '../components/Countdown.tsx'
import bottomLeft from '../assets/images/bottomLeft.webp'
import bottomRight from '../assets/images/bottomRight.webp'


const Countdown = () => {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-custom-mobile mobile-l:bg-custom-mobile-l mobile-m:bg-custom-mobile-l md:bg-custom-md lg:bg-custom-lg"
      style={{ backgroundImage: `url(${bgCountdown})` }}>
      <div className='flex flex-col h-full justify-between relative'>
        <div className='flex flex-col items-end pt-14 pr-10 md:pr-5 text-maroon font-cinzel-decorative'>
          <div className='flex flex-col'>
            <div className='items-start tracking-[.25em]'>THe Wedding Of</div>
            <div className='items-start text-4xl/[48px] tracking-[.25em]'>Fauzi &</div>
            <div className='items-start text-4xl/[48px] tracking-[.25em] ml-8'>Fauriza</div>
          </div>
        </div>
        <div>

          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-maroon to-transparent"></div>
          <div className='absolute inset-x-0 bottom-32'>
            <Count />
          </div>
          <div className='absolute flex inset-x-0 bottom-0 justify-between '>
            <img className='w-[46px] h-[109px]' src={bottomLeft} />
            <img className='w-[46px] h-[109px]' src={bottomRight} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Countdown;
