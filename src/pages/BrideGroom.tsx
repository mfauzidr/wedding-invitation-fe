import { useEffect, useRef, useState } from 'react';
import topRoseLeft from '../assets/images/topRoseLeft.webp';
import topRoseRight from '../assets/images/topRoseRight.webp';
import middleTop from '../assets/images/middleTop.webp';
import bismillah from '../assets/images/bismillah.webp';
import bg from '../assets/images/bg-brideGroom.webp';
import groom from '../assets/images/groom.webp';
import bride from '../assets/images/bride.webp';
import instaIcon from '../assets/images/instagram-icon.webp';
import bottomLeft from '../assets/images/bottomLeft.webp';
import bottomRight from '../assets/images/bottomRight.webp';
import middleBottom from '../assets/images/middleBottom.webp';

const BrideGroom = () => {
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
    <div className='relative w-full min-h-screen' ref={observerRef}>
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 w-full min-h-screen">
        <img src={bg} className="w-full h-full object-cover object-center" alt="Background" />
        <div className="absolute inset-0 bg-maroon opacity-80"></div>
      </div>

      {/* Content without opacity */}
      <div className="relative z-10 flex flex-col items-center inset-x-0 overflow-y-auto">
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-maroon to-transparent"></div>

        <div className='absolute flex inset-x-0 justify-between items-start z-10'>
          <img className='w-[46px] h-[109px]' src={topRoseLeft} />
          <div className='flex flex-col mt-6 items-center gap-2'>
            <img className='w-[92px] h-[17px]' src={middleTop} />
            <img className='w-[197px] h-[25px]' src={bismillah} />
          </div>
          <img className='w-[46px] h-[109px]' src={topRoseRight} />
        </div>

        {/* Ucapan fade in slide up */}
        <h2 className={`flex text-sm mt-[80px] font-bellefair text-white text-center w-3/4 z-10 ${visibleItems[0] ? 'fade-in fade-in-slide-up' : 'fade-out-slide-up'}`}>
          Dengan penuh rasa syukur dan rasa hormat, kami mengundang Bapak/Ibu/Saudara/i sekalian untuk menghadiri acara pernikahan kami:
        </h2>

        <div className="relative flex mt-2 justify-between mx-2">
          {/* Groom Photo */}
          <div className='max-w-[187px] max-h-[294px] z-10'>
            <img src={groom} alt="Groom" className={`w-full ${visibleItems[1] ? 'fade-in fade-in-slide-left' : 'fade-out-slide-left'}`} />
          </div>

          {/* The Groom and Description */}
          <div className={`flex flex-col justify-between items-end max-h-[294px] text-3xl/[33px] ${visibleItems[1] ? 'fade-in fade-in-slide-right' : 'fade-out-slide-right'}`}>
            <div className="font-great-vibes text-white border-b border-white text-center w-[155px] pt-5 mr-5 text-4.5xl">The Groom</div>
            <div className="flex flex-col bg-white w-[185px] text-right text-grey pt-[17px] pr-[17px] pb-[17px] pl-[4px]">
              <div className='font-great-vibes text-xl/9'>Moch. Fauzi Dwi R.</div>
              <div className="flex border-b border-amber-700 w-3/4 "></div>
              <div className='font-cardo text-xs mt-6'>Putra kedua dari Alm. Bpk. Dedi R. & Ibu Dewi A.</div>
              <div className='flex items-center justify-end font-bellefair text-xs mt-6'>
                <img src={instaIcon} alt="Instagram Icon" className='w-4 h-4' /> <span>@ziiryujin</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex text-white mt-4 font-great-vibes justify-center text-xl ${visibleItems[2] ? 'fade-in fade-in-slide-up' : 'fade-out-slide-up'}`}>With..</div>

        <div className="flex justify-between mx-2 md:mb-16">
          {/* The Bride and Description */}
          <div className={`flex flex-col justify-between items-end max-h-[294px] text-3xl/[33px] ${visibleItems[3] ? 'fade-in fade-in-slide-left' : 'fade-out-slide-left'}`}>
            <div className="font-great-vibes text-white border-b border-white text-center w-[155px] pt-5 mr-5 text-4.5xl">The Bride</div>
            <div className="flex flex-col bg-white w-[185px] text-right text-grey pt-[17px] pr-[17px] pb-[17px] pl-[4px] z-20">
              <div className='font-great-vibes text-xl/9'>Fauriza Prameswari G.</div>
              <div className="flex border-b border-amber-700 w-3/4 ml-auto "></div>
              <div className='font-cardo text-xs mt-6'>Putri pertama dari Alm. Bpk. Ridwan G. & Ibu Hamida R.</div>
              <div className='flex items-center justify-start font-bellefair text-xs mt-6'>
                <img src={instaIcon} alt="Instagram Icon" className='w-4 h-4' /> <span>@frz.pramsr23</span>
              </div>
            </div>
          </div>
          {/* Bride Photo */}
          <div className='max-w-[187px] max-h-[294px] z-10'>
            <img src={bride} alt="Bride" className={`w-full ${visibleItems[3] ? 'fade-in fade-in-slide-right' : 'fade-out-slide-right'}`} />
          </div>
        </div>

        {/* Bottom Decorations */}
        <div className="absolute flex inset-x-0 bottom-0 justify-between items-end z-10">
          <img className='w-[80px] h-[198px]' src={bottomLeft} />
          <img className='w-[92px] mb-6' src={middleBottom} />
          <img className='w-[80px] h-[198px]' src={bottomRight} />
        </div>
      </div>
    </div>
  );
};

export default BrideGroom;
