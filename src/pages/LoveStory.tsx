// pages/LoveStory.tsx
import topRoseLeft from '../assets/images/topRoseLeft.png'
import topRoseRight from '../assets/images/topRoseRight.png'
import middleTop from '../assets/images/middleTop.png'
import bg from '../assets/images/bg-lovestory.jpg'
import img2015 from '../assets/images/2015.png'
import img2020 from '../assets/images/2020.png'
import img2021 from '../assets/images/2021.png'
import img2024 from '../assets/images/2024.png'
import middleBottom from '../assets/images/middleBottom.png'

const LoveStory = () => {
  return (
    <div className='relative w-full min-h-screen'>
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 max-w-md min-h-screen overflow-hidden">
        <img src={bg} className="w-full h-full object-cover object-bottom bottom-0 scale-125 overflow-hidden inset-" alt="Background" />
        <div className="absolute inset-0 bg-maroon opacity-80"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center inset-x-0">
        <div className='absolute flex inset-x-0 justify-between items-start z-20'>
          <img className='w-[46px] h-[109px]' src={topRoseLeft} />
          <div className='flex flex-col mt-6 items-center gap-2'>
            <img className='w-[92px] h-[17px]' src={middleTop} />
          </div>
          <img className='w-[46px] h-[109px]' src={topRoseRight} />
        </div>
        {/* Header Section */}
        <div className='font-cinzel-decorative mt-16 text-white text-3xl py-2 border-y'>Our Story</div>

        {/* Text Section */}
        <div className='flex flex-col gap-6 font-cardo italic text-white mx-8 text-xl/[22px]'>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center'>
              <img src={img2015} className='w-[30px] h-[30px]' alt="" />
              <div className='ml-2'>2015</div>
            </div>
            <div className='pb-4 pt-1'>
              Kami berkenalan di sebuah komunitas cosplay dan setelah 1 bulan berkenalan kami menyatakan bahwa kami saling suka.
            </div>
            <div className='border border-white w-3/5'></div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center'>
              <img src={img2020} className='w-[30px] h-[30px]' alt="" />
              <div className='ml-2'>2015</div>
            </div>
            <div className='pb-4 pt-1'>
              Setelah berpacaran selama 5 tahun, kami menemukan masalah besar yang tidak bisa kami selesaikan dengan baik kali ini..
            </div>
            <div className='border border-white w-3/5'></div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center'>
              <img src={img2021} className='w-[30px] h-[30px]' alt="" />
              <div className='ml-2'>2015</div>
            </div>
            <div className='pb-4 pt-1'>
              1,5 tahun berpisah menyadarkan kami bahwa tidak ada orang lain yang bisa menggantikan kami satu sama lain.
            </div>
            <div className='border border-white w-3/5'></div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center'>
              <img src={img2024} className='w-[30px] h-[30px]' alt="" />
              <div className='ml-2'>2015</div>
            </div>
            <div className='pb-4 pt-1'>
              Akhirnya jalan 9 tahun bersama kami memutuskan untuk ke jenjang yang       lebih serius.
            </div>
          </div>
        </div>
      </div>
      <div className='absolute flex inset-x-0 bottom-0 justify-center items-end'>
        <img className='w-[92px] h-[17px] mb-7' src={middleBottom} />
      </div>
    </div>
  );
};

export default LoveStory;
