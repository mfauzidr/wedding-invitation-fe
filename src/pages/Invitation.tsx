// pages/Invitation.tsx
import invitationImage from '../assets/images/image-2.jpg'
import leftHead from '../assets/images/LeftHead.png'
import rightHead from '../assets/images/RightHead.png'
import ring from '../assets/images/Rings.png'
import andLine from '../assets/images/andLine.png'
import frame from '../assets/images/frameName.png'
import inviteButton from '../assets/images/inviteButton.png'
import bottomRose from '../assets/images/bottomRose.png'


interface Username {
  username: string;
}

const Invitation = ({ username }: Username) => {
  return (
    <div className="w-full h-screen bg-maroon">
      <div className="flex-col relative h-3/5 bg-cover bg-bottom" style={{ backgroundImage: `url(${invitationImage})` }} >
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-maroon to-transparent"></div>
        <div className='flex inset-x-0 justify-between'>
          <img className='w-[77px] h-[90px]' src={rightHead} />
          <img className='w-[77px] h-[90px]' src={leftHead} />
        </div>
        <div className="absolute right-0 top transform -translate-y-1/2 flex flex-col gap-0 divide-y w-fit text-3xl font-bellefair text-white pr-10 pt-2">
          <p>06</p>
          <p>10</p>
          <p>24</p>
        </div>
      </div>
      <div className='relative flex flex-col -mt-28 items-center justify-center text-white'>
        <img src={ring} className='w-[51px] h-[51px]' />
        <p className='font-cinzel-decorative mt-[9px] text-2xl tracking-[.4em] pl-2'>fauzi</p>
        <p className='font-cinzel-decorative mt-[21px] text-2xl tracking-[.4em] pl-2'>fauriza</p>
        <p className='font-cinzel-decorative mt-[3px] text-sm/[11px] tracking-[.25em]'>wedding invitation</p>
        <div className='relative -mt-[100px]'>
          <img src={andLine} className='w-[310px] h-[123px] shadow-2xl' />
        </div>
        <p className='font-bellefair mt-6 md:mt-3'>Kepada Yth. Bapak/Ibu/Sdra/i:</p>
        <div className='flex flex-col mt-5 items-center justify-center'>
          <img src={frame} className='w-[328px] md:w-64 h-[53px] md:h-10' />
          <div className='relative font-the-seasons text-white text-xl -mt-[42px] md:-mt-9'>
            {username}
          </div>
        </div>
        <div className='flex font-bellefair mt-6 md:mt-[14px] text-xs/[8px]'>
          Mohon maaf bila ada salah penulisan nama / gelar.
        </div>
        <button type='button' className='relative flex w-[272px] md:w-64 h-[39px] md:h-8 mt-[38px] md:mt-7 hover:cursor-pointer z-10' >
          <img src={inviteButton} />
        </button>
        <div className='relative w-full h-[109px] -mt-9 md:-mt-20'>
          <img src={bottomRose} alt="Bottom Rose" className='w-full h-full object-cover' />
        </div>
      </div>


    </div>
  );
};

export default Invitation;
