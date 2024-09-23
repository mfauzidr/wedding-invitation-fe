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
    <div className='flex flex-col items-center bg-maroon w-full'>
      <section id="invitation">
        <Invitation username={username} />
      </section>

      <section id="countdown">
        <Countdown />
      </section>

      <section id="bridegroom">
        <BrideGroom />
      </section>

      <section id="wedding-info">
        <WeddingInfo />
      </section>

      <section id="love-story">
        <LoveStory />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="rsvp">
        <Rsvp />
      </section>

      <section id="wedding-gift">
        <WeddingGift />
      </section>
      <Outlet />
    </div>
  );
};

export default Home;
