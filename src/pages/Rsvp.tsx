import { useState } from 'react';
import axios from 'axios';
import topRoseLeft from '../assets/images/topRoseLeft.webp';
import topRoseRight from '../assets/images/topRoseRight.webp';
import middleTop from '../assets/images/middleTop.webp';
import CommentSection from '../components/CommentSection';
import thanksIgame from '../assets/images/thanks-image.webp';
import bottomLeft from '../assets/images/bottomLeft.webp';
import bottomRight from '../assets/images/bottomRight.webp';
import WeddingGift from '../components/WeddingGift';
import SuccessModal from '../components/SuccessModal';

interface IRsvpBody {
  id?: number;
  name: string;
  message: string;
  attendance: string;
}

const Rsvp = () => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [attendance, setAttendance] = useState<string>('Hadir');
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [triggerFetch, setTriggerFetch] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAttendance(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/attendance/`;

    const rsvpData: IRsvpBody = {
      name,
      message,
      attendance,
    };

    try {
      await axios.post(url, rsvpData);
      setIsSuccessModalOpen(true);
      setName('');
      setMessage('');
      setAttendance('Hadir');
    } catch (error) {
      setError('Failed to submit your RSVP. Please try again later.');
    }
  };

  const openGiftModal = () => {
    setIsGiftModalOpen(true);
  };

  const closeGiftModal = () => {
    setIsGiftModalOpen(false);
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    setTriggerFetch((prev) => !prev)
  };

  return (
    <div className="relative w-full min-h-screen bg-maroon">
      <div className="relative flex flex-col items-center">
        <div className='absolute flex inset-x-0 justify-between items-start z-10'>
          <img className='w-[46px] h-[109px]' src={topRoseLeft} alt="Top Rose Left" />
          <div className='flex flex-col mt-6 items-center gap-2'>
            <img className='w-[92px] h-[17px]' src={middleTop} alt="Middle Top" />
          </div>
          <img className='w-[46px] h-[109px]' src={topRoseRight} alt="Top Rose Right" />
        </div>
        <div className='font-the-seasons mt-16 text-white text-4xl py-2 tracking-tight'>RSVP & Wishes</div>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 px-10 mt-6 mb-6 font-bellefair'>
        <label htmlFor="name" className='flex w-full justify-start text-white text-lg'>Nama:</label>
        <input
          type="text"
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='flex w-full h-10 rounded-xl outline-white outline border border-maroon active:outline-white px-2 font-cardo mb-2'
          required
          title="Please enter your name"
        />
        <label htmlFor="wishes" className='flex w-full justify-start text-white text-lg'>Ucapan:</label>
        <textarea
          id='wishes'
          name='wishes'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='flex w-full h-28 rounded-xl outline-white outline border border-maroon active:outline-white p-2 font-cardo mb-2 overflow-auto'
          required
          title="Please enter your message"
        />
        <label htmlFor="attendance" className='flex w-full justify-start text-white text-lg'>Kehadiran:</label>
        <select
          id="attendance"
          value={attendance}
          onChange={handleChange}
          className="flex w-full p-2 rounded-xl outline-white outline border border-maroon active:outline-white px-2 font-cardo mb-2"
        >
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
          <option value="Masih Ragu">Masih Ragu</option>
        </select>
        <div className='flex justify-between w-full font-cardo font-extrabold text-maroon tracking-wide px-6 mt-3 gap-2 md:gap-4'>
          <button
            type='submit'
            className='flex items-center justify-center bg-white border border-maroon outline outline-1 outline-white w-[135px] h-[41px] rounded-xl'
          >
            Kirim Ucapan
          </button>
          <button
            type='button'
            onClick={openGiftModal}
            className='flex items-center justify-center bg-white border border-maroon outline outline-1 outline-white w-[135px] h-[41px] rounded-xl'>
            Kirim Hadiah
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className='mb-6'>
        <CommentSection triggerFetch={triggerFetch} />
      </div>

      <div className='flex h-96'>
        <img src={thanksIgame} alt="Thank You" className='w-full h-full object-cover object-center' />
        <div className="absolute inset-x-0 mb-36 bottom-0 h-60 bg-gradient-to-b from-maroon to-transparent"></div>
        <div className='absolute w-full h-96 flex flex-col justify-between items-center py-8'>
          <div className='flex font-great-vibes text-white text-6xl'>Thank You</div>
          <div className='flex flex-col font-cinzel-decorative text-white items-center'>
            <div className='tracking-[.2em] mb-2'>tHe Wedding Of</div>
            <div className='text-2xl tracking-[.25em] mb-1'>fauzi & fauriza</div>
            <div className='text-sm tracking-[0.1em]'>06 oktober 2024</div>
          </div>
        </div>
      </div>
      <div className='absolute flex inset-x-0 bottom-0 justify-between items-end z-10'>
        <img className='w-[46px] h-[109px]' src={bottomLeft} alt="Bottom Left" />
        <div className='font-cardo text-white text-sm flex w-full justify-center mb-1 gap-2  md:gap-4'>
          <div className='flex text-xs md:text-base'>Website by: Fauzi</div>
          <div className='flex text-xs md:text-base'> - </div>
          <div className='flex text-xs md:text-base'>Design By: Fauriza</div>
        </div>
        <img className='w-[46px] h-[109px]' src={bottomRight} alt="Bottom Right" />
      </div>

      {isGiftModalOpen && (
        <div
          className="fixed inset-0 h-screen bg-black bg-opacity-50 flex justify-center items-center z-20"
          onClick={closeGiftModal}
        >
          <WeddingGift onClose={closeGiftModal} />
        </div>
      )}

      {isSuccessModalOpen && (
        <SuccessModal
          message="Thank you for your RSVP!"
          onClose={closeSuccessModal}
        />
      )}
    </div>
  );
};

export default Rsvp;
