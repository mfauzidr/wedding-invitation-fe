import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import invitationImage from '../assets/images/image-2.webp';
import topLeft from '../assets/images/topLeft.webp';
import topRight from '../assets/images/topRight.webp';
import ring from '../assets/images/Rings.webp';
import frame from '../assets/images/frameName.webp';
import inviteButton from '../assets/images/inviteButton.webp';
import bottomLeft from '../assets/images/bottomLeft.webp';
import bottomRight from '../assets/images/bottomRight.webp';
import Countdown from './Countdown'; // Import Countdown component

const Invitation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [invitee, setInvitee] = useState('Invitee');
  const [startCountdownAnimation, setStartCountdownAnimation] = useState(false); // State to trigger countdown animation

  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    const getPost = async (username: string) => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/guest/${username}`);
        console.log(res.data.results[0]);
        if (res.data && res.data.results && res.data.results.length > 0) {
          setInvitee(res.data.results[0].name);
        } else {
          console.error("Invalid API response structure:", res.data);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (username) {
      getPost(username);
    } else {
      console.error("username is undefined");
    }
  }, [username]);

  const toggleInvitation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsVisible((prev) => !prev);
    setStartCountdownAnimation(true); // Trigger animation
  };

  return (
    <div>
      <div
        className={`fixed inset-y-0 bg-maroon transition-transform duration-1000 ${isVisible ? '' : '-translate-x-full md:-translate-x-220'
          } flex flex-col w-full z-20 max-w-md`}
      >
        <div className="absolute flex inset-x-0 justify-between z-10">
          <img className="w-[77px] h-[90px]" src={topLeft} alt="Top Left Decoration" />
          <img className="w-[77px] h-[90px]" src={topRight} alt="Top Right Decoration" />
        </div>
        <div className="flex-col relative h-3/5 bg-cover bg-bottom " style={{ backgroundImage: `url(${invitationImage})` }}>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-maroon to-transparent"></div>
          <div className="absolute right-0 top-24 transform -translate-y-1/2 flex flex-col gap-0 divide-y w-fit text-3xl font-bellefair text-white font-semibold mr-8 px-2 mt-2 shadow-md">
            <p>06</p>
            <p>10</p>
            <p>24</p>
          </div>
        </div>
        <div className="relative flex flex-col -mt-28 items-center text-white h-1/2">
          <div className="flex flex-col items-center gap-2 h-32 mb-8">
            <img src={ring} className="w-[51px] h-[51px]" alt="Ring Decoration" />
            <p className="font-cinzel-decorative text-2xl tracking-[.4em] pl-2">fauzi</p>
            <p className="font-delicious text-6xl -mt-7 -mb-7">and</p>
            <p className="font-cinzel-decorative [21px] text-2xl tracking-[.4em] pl-2">fauriza</p>
            <p className="font-cinzel-decorative text-sm/[11px] tracking-[.25em]">wedding invitation</p>
          </div>
          <div className="flex flex-col items-center justify-center mt-10">
            <p className="font-bellefair">Kepada Yth. Bapak/Ibu/Sdra/i:</p>
            <img src={frame} className="w-[328px] h-[53px]" alt="Name Frame" />
            <div className="relative font-the-seasons text-white text-xl md:2xl -mt-[40px]">{invitee}</div>
            <div className="flex font-bellefair mt-6 text-xs/[8px]">Mohon maaf bila ada salah penulisan nama / gelar.</div>
          </div>
          <button
            type="button"
            className="relative flex w-[272px] h-[39px] mt-7 hover:cursor-pointer z-10"
            onClick={toggleInvitation}
          >
            <img src={inviteButton} alt="Invite Button" />
          </button>
        </div>
        <div className="absolute flex inset-x-0 bottom-0 justify-between">
          <img className="w-[46px] h-[109px]" src={bottomLeft} alt="Bottom Left Decoration" />
          <img className="w-[46px] h-[109px]" src={bottomRight} alt="Bottom Right Decoration" />
        </div>
      </div>

      {/* Include the Countdown component and pass the trigger */}
      <Countdown startAnimation={startCountdownAnimation} />
    </div>
  );
};

export default Invitation;
