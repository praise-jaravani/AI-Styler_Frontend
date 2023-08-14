import React from 'react';
import { Link } from 'react-router-dom';

interface CardItemProps {
  src: string;
  text: string;
  label: string;
  path: string;
}

const CardItem: React.FC<CardItemProps> = ({ src, text, label, path }) => {
  return (
    <li className='bg-white rounded-lg overflow-hidden shadow-lg'>
      <Link className='flex flex-col w-full h-full transition-transform transform hover:scale-105' to={path}>
        <figure className='relative w-full h-0 pt-[67%]'>
          <img className='absolute top-0 left-0 w-full h-full object-cover' alt='Travel Image' src={src} />
        </figure>
        <div className='flex flex-col justify-between h-full p-4'>
          <div className='flex items-center mb-2'>
            <div className='px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-md'>{label}</div>
          </div>
          <h5 className='text-base font-semibold text-gray-800'>{text}</h5>
        </div>
      </Link>
    </li>
  );
};

export default CardItem;
