// pages/Home.tsx
import { Outlet } from 'react-router-dom';
import BrideGroom from './BrideGroom';
import Countdown from './Countdown';
import Gallery from './Gallery';
import Invitation from './Invitation';
import LoveStory from './LoveStory';
import Rsvp from './Rsvp';
import WeddingInfo from './WeddingInfo';
import Audio from '../components/Audio'
import bgm from '../assets/music/right-here.mp3';


const Home = () => {
  return (
    <div className='flex flex-col w-full items-center bg-maroon overflow-x-hidden'>
      <Audio src={bgm} volume={0.5} />
      <section className='w-full max-w-md' id="invitation">
        <Invitation />
      </section>

      <section className='w-full max-w-md' id="countdown">
        <Countdown />
      </section>

      <section className='w-full max-w-md' id="bridegroom">
        <BrideGroom />
      </section>

      <section className='w-full max-w-md' id="wedding-info">
        <WeddingInfo />
      </section>

      <section className='w-full max-w-md' id="love-story">
        <LoveStory />
      </section>

      <section className='w-full max-w-md' id="gallery">
        <Gallery />
      </section>

      <section className='w-full max-w-md' id="rsvp">
        <Rsvp />
      </section>
      <Outlet />
    </div>
  );
};

export default Home;
