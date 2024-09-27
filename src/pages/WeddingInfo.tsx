// pages/WeddingInfo.tsx
import topRoseLeft from '../assets/images/topRoseLeft.webp'
import topRoseRight from '../assets/images/topRoseRight.webp'
import middleTop from '../assets/images/middleTop.webp'
import infoImg from '../assets/images/info-img.webp';
import frame from '../assets/images/frame-time.webp';
import houseIcon from '../assets/images/house-icon.webp';
import mapButton from '../assets/images/map-button.webp';
import InfiniteSlider from '../components/Carrousel';
import bottomLeft from '../assets/images/bottomLeft.webp'
import bottomRight from '../assets/images/bottomRight.webp'
import middleBottom from '../assets/images/middleBottom.webp'
import { useState, useRef, useEffect } from 'react';


const WeddingInfo = () => {
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
        <div className='flex flex-col bg-white rounded-[4rem] mx-2 p-3 items-center mt-14'>
          <div className={`font-the-seasons text-3xl text-maroon z-10 ${visibleItems[0] ? 'fade-in fade-in-slide-up' : 'fade-out-slide-up'}`}>Save The Date</div>
          <div>
            <img src={infoImg} alt="Image" className={`opacity-70 -mt-4 ${visibleItems[0] ? 'fade-in fade-in-slide-up' : 'fade-out-slide-up'}`} />
          </div>
          <div className={`flex justify-center items-center mt-5 text-maroon ${visibleItems[1] ? 'fade-in fade-in-slide-up' : 'fade-out-slide-up'}`}>
            {/* Left section */}
            <div className="flex items-center justify-center mr-4 italic w-[70px] border-y h-8 border-maroon">
              <div className="text-xs font-cardo">MINGGU</div>
            </div>
            <div className="flex flex-col items-center text-center font-bellefair">

              {/* Top section (Month and Year) */}
              <div className="text-xs">OKT</div>

              {/* Middle section (Main Date) */}
              <div className="text-6xl font-great-vibes text-maroon">06</div>

              {/* Bottom section (Year) */}
              <div className="text-xs">2024</div>
            </div>


            {/* Right section */}
            <div className="flex items-center justify-center ml-4 italic w-[70px] border-y h-8 border-maroon">
              <div className="text-xs font-cardo">SUKABUMI</div>
            </div>
          </div>
          <div className={`relative w-[335px] h-[71px] mt-5 ${visibleItems[2] ? 'fade-in fade-in-slide-up' : 'fade-out-slide-up'}`}>
            {/* Gambar sebagai latar belakang */}
            <img src={frame} alt="Frame" className="object-cover" />

            {/* Elemen teks yang tumpang tindih dengan gambar */}
            <div className={`absolute inset-0 flex justify-between items-center px-10 font-cardo ${visibleItems[2] ? 'fade-in fade-in-slide-up' : 'fade-out-slide-up'}`}>
              {/* Elemen A di kiri */}
              <div className="flex flex-col text-maroon text-center items-center justify-center gap-0">
                <div className='text-black'>Akad Nikah</div>
                <div className='text maroon italic'>10.00 WIB</div>
              </div>

              {/* Elemen A di kanan */}
              <div className="flex flex-col text-maroon text-center items-center justify-center pr-2 gap-0">
                <div className='text-black'>Resepsi</div>
                <div className='text maroon italic'>12.30 WIB</div>
              </div>
            </div>
          </div>
          <div className={`flex mt-5 items-center gap-2 ${visibleItems[3] ? 'fade-in fade-in-slide-up' : 'fade-out-slide-up'}`}>
            <img src={houseIcon} alt="House Icon" className='w-14 h-12' />
            <div className='flex flex-col justify-center'>
              <div className='font-cardo text-xs'>Bertempat di kediaman mempelai wanita</div>
              <div className='font-cardo text-sm text-maroon italic'>Jl. Gunung Karang RT 03 RW 09, Kelurahan</div>
              <div className='font-cardo text-sm text-maroon italic'>Limus Nunggal, Cibeureum, Kota Sukabumi</div>
            </div>
          </div>
          <button
            className='mt-5 w-[306px] h-[65px]'
            onClick={() => window.open('https://maps.app.goo.gl/bcfHY7EDzugwvgjd6', '_blank', 'noopener noreferrer')}
          >
            <img src={mapButton} alt="Map Button" className='object-cover' />
          </button>
          <div className='mt-5 font-cardo text-maroon text-sm'>Dress Code : Maroon / Grey</div>
        </div>
        <div className='mt-5 mb-14'>
          <InfiniteSlider />
        </div>
        <div className='absolute flex inset-x-0 bottom-0 justify-between items-end z-10'>
          <img className='w-[46px] h-[109px]' src={bottomLeft} />
          <img className='w-[92px] h-[17px] mb-7' src={middleBottom} />
          <img className='w-[46px] h-[109px]' src={bottomRight} />
        </div>
      </div>
    </div>
  );
};

export default WeddingInfo;
