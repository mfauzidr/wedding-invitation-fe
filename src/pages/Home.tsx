import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import BrideGroom from './BrideGroom';
import Gallery from './Gallery';
import Invitation from './Invitation';
import LoveStory from './LoveStory';
import Rsvp from './Rsvp';
import WeddingInfo from './WeddingInfo';
import Audio from '../components/Audio';
import bgm from '../assets/music/right-here.mp3';
import Loading from '../components/Loading';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col w-full items-center bg-maroon overflow-x-hidden'>
      {isLoading && <Loading />}
      <Audio ref={audioRef} src={bgm} volume={0.5} autoplay={false} /> {/* No autoplay for testing */}

      <section className='w-full max-w-md' id="invitation">
        <Invitation audioRef={audioRef} /> {/* Pass the audioRef */}
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
