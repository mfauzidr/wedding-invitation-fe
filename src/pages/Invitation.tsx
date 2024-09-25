// pages/Invitation.tsx
import invitationImage from '../assets/images/image-2.jpg'
import topLeft from '../assets/images/topLeft.png'
import topRight from '../assets/images/topRight.png'
import ring from '../assets/images/Rings.png'
import frame from '../assets/images/frameName.png'
import inviteButton from '../assets/images/inviteButton.png'
import bottomLeft from '../assets/images/bottomLeft.png'
import bottomRight from '../assets/images/bottomRight.png'


interface Username {
  username: string;
}

const Invitation = ({ username }: Username) => {
  return (
    <div className="relative h-screen bg-maroon justify-center">
      <div className='absolute flex inset-x-0 justify-between z-10'>
        <img className='w-[77px] h-[90px]' src={topLeft} />
        <img className='w-[77px] h-[90px]' src={topRight} />
      </div>
      <div className="flex-col relative h-3/5 bg-cover bg-bottom" style={{ backgroundImage: `url(${invitationImage})` }} >
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-maroon to-transparent"></div>
        <div className="absolute right-0 top-24 transform -translate-y-1/2 flex flex-col gap-0 divide-y w-fit text-3xl font-bellefair text-white font-semibold mr-8 px-2 mt-2 shadow-md">
          <p>06</p>
          <p>10</p>
          <p>24</p>
        </div>
      </div>
      <div className='relative flex flex-col -mt-28 items-center text-white h-1/2'>
        <div className='flex flex-col items-center gap-2 h-32 mb-8'>
          <img src={ring} className='w-[51px] h-[51px]' />
          <p className='font-cinzel-decorative text-2xl tracking-[.4em] pl-2'>fauzi</p>
          <p className='font-delicious text-6xl -mt-7 -mb-7'>and</p>
          <p className='font-cinzel-decorative [21px] text-2xl tracking-[.4em] pl-2'>fauriza</p>
          <p className='font-cinzel-decorative text-sm/[11px] tracking-[.25em]'>wedding invitation</p>
        </div>
        <div className='flex flex-col items-center justify-center mt-10'>
          <p className='font-bellefair'>Kepada Yth. Bapak/Ibu/Sdra/i:</p>
          <img src={frame} className='w-[328px] h-[53px]' />
          <div className='relative font-the-seasons text-white text-xl md:2xl -mt-[40px]'>
            {username}
          </div>
          <div className='flex font-bellefair mt-6 text-xs/[8px]'>
            Mohon maaf bila ada salah penulisan nama / gelar.
          </div>
        </div>
        <button type='button' className='relative flex w-[272px] h-[39px] mt-7 hover:cursor-pointer z-10' >
          <img src={inviteButton} />
        </button>
      </div>
      <div className='absolute flex inset-x-0 bottom-0 justify-between '>
        <img className='w-[46px] h-[109px]' src={bottomLeft} />
        <img className='w-[46px] h-[109px]' src={bottomRight} />
      </div>


    </div>
  );
};

export default Invitation;
