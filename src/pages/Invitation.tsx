// pages/Invitation.tsx
import invitationImage from '../assets/images/image-2.jpg'
import leftHead from '../assets/images/LeftHead.png'
import rightHead from '../assets/images/RightHead.png'
import ring from '../assets/images/Rings.png'
import andLine from '../assets/images/andLine.png'


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
      </div>


    </div>
  );
};

export default Invitation;
