// pages/BrideGroom.tsx
import topRose from '../assets/images/topRose.png';
import bismillah from '../assets/images/bismillah.png';
import bottomRoseFoot from '../assets/images/bottomRoseFoot.png';
import bg from '../assets/images/bg-brideGroom.jpg';
import groom from '../assets/images/groom.png'
import bride from '../assets/images/bride.png'

const BrideGroom = () => {
  return (
    <div className='relative w-full h-screen'>
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 w-full h-screen">
        <img src={bg} className="w-full h-full object-cover object-center" alt="Background" />
        <div className="absolute inset-0 bg-maroon opacity-80"></div>
      </div>

      {/* Content without opacity */}
      <div className="relative z-10 flex flex-col items-center inset-x-0">
        <img src={topRose} alt="Top Rose" className="w-full h-full object-cover" />
        <img src={bismillah} alt="Bismillah" className="relative -mt-16 w-[197px] h-[25px]" />
        <h2 className="flex text-sm mt-3 font-bellefair text-white text-center w-3/4">
          Dengan penuh rasa syukur dan rasa hormat, kami mengundang Bapak/Ibu/Saudara/i sekalian untuk menghadiri acara pernikahan kami:
        </h2>

        <div className="relative flex mt-8 justify-between px-2">
          <div className='w-[187px] h-[294px] z-10'>
            <img src={groom} alt="Groom" className='w-full' />
          </div>
          <div className="flex flex-col justify-between items-end h-[294px] text-3xl/[33px]">
            <div className="font-great-vibes text-white border-b border-white text-center w-[155px] pt-5 mr-5 text-4.5xl">The Groom</div>
            <div className="flex flex-col bg-white w-[185px] text-right text-grey pt-[17px] pr-[17px] pb-[17px] pl-[4px]">
              <div className='font-great-vibes text-xl/9'>Moch. Fauzi Dwi R.</div>
              <div className="flex border-b border-amber-700 w-3/4 "></div>
              <div className='font-cardo text-xs mt-6'>Putra kedua dari
                Alm. Bpk. Dedi R. & Ibu Dewi A.
              </div>
              <div className='font-bellefair text-xs mt-6'>
                Logo <span>@ziiryujin</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex text-white my-4 font-great-vibes justify-center text-2xl">With..</div>

        <div className="flex justify-between px-2">
          <div className="flex flex-col justify-between h-[294px] text-3xl/[33px]">
            <div className="font-great-vibes text-white border-b border-white text-center w-[155px] pt-5 mr-5 text-4.5xl">The Bride</div>
            <div className="flex flex-col bg-white w-[185px] text-left text-grey pt-[17px] pl-[17px] pb-[17px] pr-[4px]">
              <div className='font-great-vibes text-xl/9'>Fauriza Prameswari G.</div>
              <div className="flex border-b border-amber-700 w-3/4 ml-auto "></div>
              <div className='font-cardo text-xs mt-6'>Putri pertama dari
                Alm. Bpk. Ridwan G. & Ibu Hamida R.
              </div>
              <div className='font-bellefair text-xs mt-6'>
                Logo <span>@frz.pramsr23</span>
              </div>
            </div>
          </div>
          <div className='w-[187px] h-[294px] z-10'>
            <img src={bride} alt="Bride" className='w-full' />
          </div>
        </div>

        <div className="relative w-full h-[109px] -mt-9 md:-mt-20">
          <img src={bottomRoseFoot} alt="Bottom Rose" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default BrideGroom;
