// pages/Gallery.tsx
import topRoseLeft from '../assets/images/topRoseLeft.webp'
import topRoseRight from '../assets/images/topRoseRight.webp'
import middleTop from '../assets/images/middleTop.webp'
import bottomLeft from '../assets/images/bottomLeft.webp'
import bottomRight from '../assets/images/bottomRight.webp'
import middleBottom from '../assets/images/middleBottom.webp'
import gallery1 from '../assets/images/gallery-images/gallery1.webp';
import gallery2 from '../assets/images/gallery-images/gallery2.webp';
import gallery3 from '../assets/images/gallery-images/gallery3.webp';
import gallery4 from '../assets/images/gallery-images/gallery4.webp';
import gallery5 from '../assets/images/gallery-images/gallery5.webp';
import gallery6 from '../assets/images/gallery-images/gallery6.webp';
import gallery7 from '../assets/images/gallery-images/gallery7.webp';
import gallery8 from '../assets/images/gallery-images/gallery8.webp';

const Gallery = () => {
  return (
    <div className="relative w-full min-h-screen bg-maroon">
      <div className="relative min-h-screen flex flex-col items-center">
        <div className='absolute flex inset-x-0 justify-between items-start z-10'>
          <img className='w-[46px] h-[109px]' src={topRoseLeft} />
          <div className='flex flex-col mt-6 items-center gap-2'>
            <img className='w-[92px] h-[17px]' src={middleTop} />
          </div>
          <img className='w-[46px] h-[109px]' src={topRoseRight} />
        </div>
        <div className='font-cinzel-decorative mt-16 text-white text-3xl py-2 border-y'>Our Gallery</div>
        {/* Gallery Images */}

        <div className="relative flex flex-col w-full px-[26px] mt-4 mb-14 gap-2">
          <div className='relatve flex flex-col gap-2'>
            <div className='bg-white h-[113px] w-[247px]'>
              <img src={gallery1} alt="Gallery 1" className='w-full h-full object-cover object-center' />
            </div>
            <div className='bg-white h-[264px] w-[142px]'>
              <img src={gallery2} alt="Gallery 2" className='w-full h-full object-cover object-center' />
            </div>
          </div>
          <div className='relative flex justify-center -mt-[272px]'>
            <div className='bg-white w-[98px] h-[142px]'>
              <img src={gallery3} alt="Gallery 3" className='w-full h-full object-cover object-center' />
            </div>
          </div>
          <div className='relatve flex flex-col gap-2 -mt-[271px] items-end'>
            <div className='bg-white h-[264px] w-[142px]'>
              <img src={gallery4} alt="Gallery 4" className='w-full h-full object-cover object-center' />
            </div>
            <div className='bg-white h-[113px] w-[247px]'>
              <img src={gallery5} alt="Gallery 5" className='w-full h-full object-cover object-center' />
            </div>
          </div>
          <div className='bg-white flex w-full h-[182px]'>
            <img src={gallery6} alt="Gallery 6" className='w-full h-full object-cover object-center' />
          </div>
          <div className='flex gap-2'>
            <div className='flex bg-white w-[275px] h-[142px]'>
              <img src={gallery7} alt="Gallery 7" className='w-full h-full object-cover object-center' />
            </div>
            <div className='flex bg-white w-[112px] h-[142px]'>
              <img src={gallery8} alt="Gallery 8" className='w-full h-full object-cover object-center' />
            </div>
          </div>

          <div className='flex items-center justify-center font-cardo text-lg text-white -mb-2'> Photo by : Eza @rezsa_pratama</div>

        </div>

      </div>
      <div className='absolute flex inset-x-0 bottom-0 justify-between items-end'>
        <img className='w-[46px] h-[109px]' src={bottomLeft} />
        <img className='w-[92px] h-[17px] mb-7' src={middleBottom} />
        <img className='w-[46px] h-[109px]' src={bottomRight} />
      </div>
    </div>
  );
};

export default Gallery;
