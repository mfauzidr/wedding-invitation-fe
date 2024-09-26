import { useState } from 'react';
import giftIcon from '../assets/images/gift-icon.webp';
import bca from '../assets/images/bca.webp';
import mandiri from '../assets/images/mandiri.webp';
import shopee from '../assets/images/shopee.webp';
import FeatherIcon from 'feather-icons-react';

interface WeddingGiftProps {
  onClose?: () => void;
}

const WeddingGift: React.FC<WeddingGiftProps> = ({ onClose }) => {
  const [bcaCopied, setBcaCopied] = useState(false);
  const [mandiriCopied, setMandiriCopied] = useState(false);
  const [shopeeCopied, setShopeeCopied] = useState(false);

  const handleCopy = (event: React.MouseEvent<HTMLButtonElement>, text: string, setCopied: (value: boolean) => void) => {
    event.stopPropagation(); // Mencegah propagasi event
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className="flex flex-col justify-center items-center p-3 z-40" onClick={onClose}>
      <div
        className='max-h-screen md:max-w-lg flex flex-col bg-red-100 rounded-[4rem] p-8 items-center w-full gap-4 overflow-hidden overflow-y-auto'
        onClick={(e) => e.stopPropagation()}  // Mencegah modal tertutup saat klik di dalam modal
      >
        <div className="flex gap-14">
          <div className='font-the-seasons text-2xl text-maroon border-b border-maroon pb-1 items-center'>Wedding Gift</div>
          <div className='flex w-[42px] h-[42px]'>
            <img src={giftIcon} alt="Gift Icon" className='w-full h-full object-fit object-center' />
          </div>
        </div>
        <div className='flex font-bellefair text-maroon px-2 text-center'>
          Kami sangat menghargai kehadiran dan doa restu Bapak/Ibu, dan jika berkenan memberikan tanda
          kasih kepada kami, kado dapat diberikan secara
          cashless atau pengiriman paket / kado fisik ke:
        </div>

        {/* BCA Section */}
        <div className='flex flex-col bg-white items-center border border-black rounded-xl w-full p-6'>
          <div className='flex w-full justify-between items-center mb-1'>
            <div className='flex w-32 h-[52px]'>
              <img src={bca} alt="BCA Logo" className='w-full h-full object-cover object-center' />
            </div>
            <div className='flex bg-maroon rounded-2xl'>
              <button
                type='button'
                className='flex items-center px-3 py-2 text-white'
                onClick={(event) => handleCopy(event, '3770504308', setBcaCopied)} // Menambahkan event
              >
                <FeatherIcon icon="copy" className='w-6 h-6' />
                <span className='ml-2 text-white'>{bcaCopied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>
          <div className='flex flex-col text-maroon self-start'>
            <div className='font-lora text-xl font-bold'>3770504308</div>
            <div className='font-bellefair text-xl'>Fauriza Prameswari Gunadi</div>
          </div>
        </div>

        {/* Mandiri Section */}
        <div className='flex flex-col bg-white items-center border border-black rounded-xl w-full p-6'>
          <div className='flex w-full justify-between items-center mb-1'>
            <div className='flex h-[51px]'>
              <img src={mandiri} alt="Mandiri Logo" className='w-full h-full object-cover object-center' />
            </div>
            <div className='flex bg-maroon rounded-2xl'>
              <button
                type='button'
                className='flex items-center px-3 py-2 text-white'
                onClick={(event) => handleCopy(event, '1820013444682', setMandiriCopied)}
              >
                <FeatherIcon icon="copy" className='w-6 h-6' />
                <span className='ml-2 text-white'>{mandiriCopied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>
          <div className='flex flex-col text-maroon self-start'>
            <div className='font-lora text-xl font-bold'>1820013444682</div>
            <div className='font-bellefair text-xl'>Fauriza Prameswari Gunadi</div>
          </div>
        </div>

        {/* Shopee Section */}
        <div className='flex flex-col bg-white items-center border border-black rounded-xl w-full p-6'>
          <div className='flex w-full justify-between items-center mb-2'>
            <div className='flex h-[51px]'>
              <img src={shopee} alt="Shopee Logo" className='w-full h-full object-fit object-center' />
            </div>
            <div className='flex bg-maroon rounded-2xl'>
              <button
                type='button'
                className='flex items-center px-3 py-2 text-white'
                onClick={(event) => handleCopy(event, 'Fauriza - 085939714992, Perum Tiara Regency, Blok E no 53, Jl. Goalpara KM 4, Desa Limbangan, Kec. Sukaraja, Kab. Sukabumi.', setShopeeCopied)}
              >
                <FeatherIcon icon="copy" className='w-6 h-6' />
                <span className='ml-2 text-white'>{shopeeCopied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>
          <div className='flex flex-col text-maroon self-start'>
            <div className='font-bellefair text-xl'>Fauriza - 085939714992</div>
            <div className='font-bellefair'>
              Perum Tiara Regency, Blok E no 53,
              Jl. Goalpara KM 4, Desa Limbangan,
              Kec. Sukaraja, Kab. Sukabumi.
            </div>
          </div>
        </div>
        {/* Close Button with feather icons */}
        <div className='flex bg-maroon rounded-2xl'>
          <button
            type='button'
            className='flex items-center px-3 py-2 text-white'
            onClick={onClose}
          >
            <FeatherIcon icon="x-circle" className='w-6 h-6' />
            <span className='ml-2 text-white'>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeddingGift;
