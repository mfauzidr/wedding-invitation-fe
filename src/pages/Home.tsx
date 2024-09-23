// pages/Home.tsx
import { Outlet } from 'react-router-dom';
import BrideGroom from './BrideGroom';
import Countdown from './Countdown';
import Gallery from './Gallery';
import Invitation from './Invitation';
import LoveStory from './LoveStory';
import Rsvp from './Rsvp';
import WeddingGift from './WeddingGift';
import WeddingInfo from './WeddingInfo';

interface Username {
  username: string
}

const Home = ({ username }: Username) => {
  return (
    <div className='flex flex-col w-full h-c px-0 mx-0 items-center bg-maroon border-0 overflow-x-hidden'>
      <section className='w-full md:w-[414px]' id="invitation">
        <Invitation username={username} />
      </section>

      <section className='w-full md:w-[414px]' id="countdown">
        <Countdown />
      </section>

      <section className='w-full md:w-[414px]' id="bridegroom">
        <BrideGroom />
      </section>

      <section className='w-full md:w-[414px]' id="wedding-info">
        <WeddingInfo />
      </section>

      <section className='w-full md:w-[414px]' id="love-story">
        <LoveStory />
      </section>

      <section className='w-full md:w-[414px]' id="gallery">
        <Gallery />
      </section>

      <section className='w-full md:w-[414px]' id="rsvp">
        <Rsvp />
      </section>

      <section className='w-full md:w-[414px]' id="wedding-gift">
        <WeddingGift />
      </section>
      <Outlet />
    </div>
  );
};

export default Home;
