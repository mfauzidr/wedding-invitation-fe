// pages/BrideGroom.tsx
import topRose from '../assets/images/topRose.png'
import bismillah from '../assets/images/bismillah.png'
import bottomRoseFoot from '../assets/images/bottomRoseFoot.png'



const BrideGroom = () => {
  return (
    <div className="w-full h-screen bg-maroon">
      <div className='flex flex-col items-center inset-x-0'>
        <img src={topRose} alt="Top Rose" className='w-full h-full object-cover' />
        <img src={bismillah} alt="Bismillah" className='relative -mt-16 w-[197px] h-[25px]' />
        <h2 className="flex text-sm mt-3 font-bellefair text-white text-center w-3/4">Dengan penuh rasa syukur dan rasa hormat, kami mengundang Bapak/Ibu/Saudara/i sekalian untuk menghadiri acara pernikahan kami:</h2>
      </div>
      <div className='flex mt-8 justify-between px-2 bg-black'>
        <div></div>
        <div className='flex flex-col justify-between h-[294px] text-3xl/[33px]'>
          <div className='font-great-vibes text-white border-b border-white text-end'>The Groom</div>
          <div className='bg-white w-[255px]'></div>
        </div>
      </div>
      <div className='flex text-white my-2 font-great-vibes'>With..</div>
      <div className='flex justify-between px-2 bg-black'>
        <div className='flex flex-col justify-between h-[294px] text-3xl/[33px]'>
          <div className='font-great-vibes text-white border-b border-white'>The Bride</div>
          <div className='bg-white w-[255px]'></div>
        </div>
        <div></div>
      </div>
      <div className='relative w-full h-[109px] -mt-3 md:-mt-20'>
        <img src={bottomRoseFoot} alt="Bottom Rose" className='w-full h-full object-cover' />
      </div>
    </div>
  );
};

export default BrideGroom;
