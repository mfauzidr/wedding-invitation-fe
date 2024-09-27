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
import { useState, useRef, useEffect } from 'react'

const Gallery = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(6).fill(false));
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Set visibility with a staggered timeout
          visibleItems.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const newVisibleItems = [...prev];
                newVisibleItems[index] = true; // Fade in
                return newVisibleItems;
              });
            }, index * 1500); // Adjust timing as needed
          });
        } else {
          // Handle fade out
          setVisibleItems((prev) =>
            prev.map((_, _index) => {
              return false; // This will trigger fade-out animations
            })
          );
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-maroon" ref={observerRef}>
      <div className="relative min-h-screen flex flex-col items-center">
        <div className='absolute flex inset-x-0 justify-between items-start z-10'>
          <img className='w-[46px] h-[109px]' src={topRoseLeft} />
          <div className='flex flex-col mt-6 items-center gap-2'>
            <img className='w-[92px] h-[17px]' src={middleTop} />
          </div>
          <img className='w-[46px] h-[109px]' src={topRoseRight} />
        </div>
        <div className={`font-cinzel-decorative mt-16 text-white text-3xl py-2 border-y ${visibleItems[0] ? 'fade-in fade-in-slide-up' : 'fade-out-slide-up'}`}>Our Gallery</div>
        {/* Gallery Images */}

        <div className="relative flex flex-col w-full px-6 mt-4 mb-14 gap-[4px] md:gap-2">
          <div className='relatve flex flex-col gap-[4px] md:gap-2 justify-between'>
            <div className='flex gap-[6px] md:gap-2 justify-between'>
              <div className={`h-[111px] md:h-[117px] w-[235px] md:w-[248px] overflow-hidden ${visibleItems[1] ? 'fade-in fade-in-slide-left' : 'fade-out-slide-left'}`}>
                <img src={gallery1} alt="Gallery 1" className='w-full h-full object-cover object-center' />
              </div>
              <div className='w-[134px] md:w-[144px]'></div>
            </div>
            <div className='flex gap-[6px] md:gap-2 justify-between'>
              <div className={`h-[257px] md:h-[269px] w-[134px] md:w-[144px] overflow-hidden  ${visibleItems[3] ? 'fade-in fade-in-slide-left' : 'fade-out-slide-left'}`}>
                <img src={gallery2} alt="Gallery 2" className='w-full h-full object-cover object-bottom' />
              </div>
              <div className='w-[235px] md:w-[248px]'></div>
            </div>
          </div>
          <div className='relative flex justify-between -mt-[259px] md:-mt-[278px]'>
            <div className='flex gap-[6px] md:gap-2 justify-between w-full'>
              <div className='w-[134px] md:w-[144px]'></div>
              <div className={`w-[92px] md:w-[96px] h-[138px] md:h-[144px] overflow-hidden  ${visibleItems[2] ? 'fade-in fade-in-slide-up' : 'fade-out-slide-up'}`}>
                <img src={gallery3} alt="Gallery 3" className='w-full h-full object-cover object-center' />
              </div>
              <div className='w-[134px] md:w-[144px]'></div>
            </div>
          </div>
          <div className='relatve flex flex-col gap-[6px] md:gap-2 -mt-[259px] md:-mt-[278px]'>
            <div className='relatve flex flex-col gap-[4px] md:gap-2 justify-between'>

              <div className='flex gap-[6px] md:gap-2 justify-between'>
                <div className='w-[235px] md:w-[248px]'></div>
                <div className={`h-[257px] md:h-[269px] w-[134px] md:w-[144px] overflow-hidden  ${visibleItems[1] ? 'fade-in fade-in-slide-right' : 'fade-out-slide-right'}`}>
                  <img src={gallery4} alt="Gallery 4" className='w-full h-full object-cover object-bottom' />
                </div>

              </div>
              <div className='flex gap-[6px] md:gap-2 justify-between'>

                <div className='w-[134px] md:w-[144px]'></div>
                <div className={`h-[111px] md:h-[117px] w-[234px] md:w-[248px] overflow-hidden  ${visibleItems[3] ? 'fade-in fade-in-slide-right' : 'fade-out-slide-right'}`}>
                  <img src={gallery5} alt="Gallery 5" className='w-full h-full object-cover object-center overflow-hidden' />
                </div>

              </div>
            </div>
          </div>
          <div className={`flex w-full h-[182px] mt-1  ${visibleItems[4] ? 'fade-in fade-in-slide-up' : 'fade-out-slide-up'}`}>
            <img src={gallery6} alt="Gallery 6" className='w-full h-full object-cover object-center' />
          </div>
          <div className='flex gap-2 mt-1'>
            <div className={`flex w-[275px] h-[142px]  ${visibleItems[5] ? 'fade-in fade-in-slide-left' : 'fade-out-slide-left'}`}>
              <img src={gallery7} alt="Gallery 7" className='w-full h-full object-cover object-center' />
            </div>
            <div className={`flex w-[112px] h-[142px]  ${visibleItems[5] ? 'fade-in fade-in-slide-right' : 'fade-out-slide-right'}`}>
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
