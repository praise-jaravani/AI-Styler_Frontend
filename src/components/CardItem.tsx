import React from 'react';
import Popup from './Popup';
import { useState } from 'react';

interface CardItemProps {
  src: string;
  text: string;
  label: string;
}

const CardItem: React.FC<CardItemProps> = ({ src, text, label}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <li className='bg-white rounded-lg overflow-hidden shadow-lg'>
        <div
          className='flex flex-col w-full h-full transition-transform transform hover:scale-105'
          onClick={openPopup}
          style={{ cursor: 'pointer' }}
        >
          <figure className='relative w-full h-0 pt-[67%]'>
            <img
              className='absolute top-0 left-0 w-full h-full object-cover'
              alt='Travel Image'
              src={src}
            />
          </figure>
          <div className='flex flex-col justify-between h-full p-4'>
            <div className='flex items-center mb-2'>
              <div className='px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-md'>
                {label}
              </div>
            </div>
            <h5 className='text-base font-semibold text-gray-800'>{text}</h5>
          </div>
        </div>
      </li>

      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default CardItem;
