// pages/LoveStory.tsx
import topRoseLeft from '../assets/images/topRoseLeft.webp'
import topRoseRight from '../assets/images/topRoseRight.webp'
import middleTop from '../assets/images/middleTop.webp'
import bg from '../assets/images/bg-lovestory.webp'
import img2015 from '../assets/images/2015.webp'
import img2020 from '../assets/images/2020.webp'
import img2021 from '../assets/images/2021.webp'
import img2024 from '../assets/images/2024.webp'
import middleBottom from '../assets/images/middleBottom.webp'
import { useState, useRef, useEffect } from 'react'

const LoveStory = () => {
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
            prev.map((_, index) => {
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
      <div className="absolute inset-0 max-w-md min-h-screen overflow-hidden">
        <img src={bg} className="w-full h-full object-cover object-bottom bottom-0 scale-125 overflow-hidden inset-" alt="Background" />
        <div className="absolute inset-0 bg-maroon opacity-80"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center inset-x-0">
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-maroon to-transparent"></div>
        <div className='absolute flex inset-x-0 justify-between items-start z-20'>
          <img className='w-[46px] h-[109px]' src={topRoseLeft} />
          <div className='flex flex-col mt-6 items-center gap-2'>
            <img className='w-[92px] h-[17px]' src={middleTop} />
          </div>
          <img className='w-[46px] h-[109px]' src={topRoseRight} />
        </div>
        {/* Header Section */}
        <div className={`font-cinzel-decorative mt-16 text-white text-3xl py-2 border-y z-10 ${visibleItems[0] ? 'fade-in fade-in-slide-left' : 'fade-out-slide-left'}`}>Our Story</div>

        {/* Text Section */}
        <div className='flex flex-col gap-6 font-cardo italic text-white mx-8 text-xl/[22px] z-10'>
          <div className={`flex flex-col justify-center ${visibleItems[1] ? 'fade-in fade-in-slide-left' : 'fade-out-slide-left'}`}>
            <div className='flex items-center'>
              <img src={img2015} className='w-[30px] h-[30px]' alt="" />
              <div className='ml-2'>2015</div>
            </div>
            <div className='pb-4 pt-1'>
              Kami berkenalan di sebuah komunitas cosplay dan setelah 1 bulan berkenalan kami menyatakan bahwa kami saling suka.
            </div>
            <div className='border border-white w-3/5'></div>
          </div>
          <div className={`flex flex-col justify-center ${visibleItems[2] ? 'fade-in fade-in-slide-left' : 'fade-out-slide-left'}`}>
            <div className='flex items-center'>
              <img src={img2020} className='w-[30px] h-[30px]' alt="" />
              <div className='ml-2'>2020</div>
            </div>
            <div className='pb-4 pt-1'>
              Setelah berpacaran selama 5 tahun, kami menemukan masalah besar yang tidak bisa kami selesaikan dengan baik kali ini..
            </div>
            <div className='border border-white w-3/5'></div>
          </div>
          <div className={`flex flex-col justify-center ${visibleItems[3] ? 'fade-in fade-in-slide-left' : 'fade-out-slide-left'}`}>
            <div className='flex items-center'>
              <img src={img2021} className='w-[30px] h-[30px]' alt="" />
              <div className='ml-2'>2021</div>
            </div>
            <div className='pb-4 pt-1'>
              1,5 tahun berpisah menyadarkan kami bahwa tidak ada orang lain yang bisa menggantikan kami satu sama lain.
            </div>
            <div className='border border-white w-3/5'></div>
          </div>
          <div className={`flex flex-col justify-center ${visibleItems[4] ? 'fade-in fade-in-slide-left' : 'fade-out-slide-left'}`}>
            <div className='flex items-center'>
              <img src={img2024} className='w-[30px] h-[30px]' alt="" />
              <div className='ml-2'>2024</div>
            </div>
            <div className='pb-4 pt-1'>
              Akhirnya jalan 9 tahun bersama kami memutuskan untuk ke jenjang yang       lebih serius.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-maroon to-transparent"></div>
      <div className='absolute flex inset-x-0 bottom-0 justify-center items-end'>
        <img className='w-[92px] h-[17px] mb-7' src={middleBottom} />
      </div>
    </div>
  );
};

export default LoveStory;
