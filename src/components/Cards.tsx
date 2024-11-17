import React from 'react';
import CardItem from './CardItem';
import { motion } from 'framer-motion';

const Cards: React.FC = () => {
  return (
    <div className='bg-white py-16'>
      <motion.h1 
        className='text-center text-4xl font-semibold mb-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Check out these EPIC Styles!
      </motion.h1>
      <div className='flex flex-col items-center max-w-7xl mx-auto'>
        <div className='relative w-full mb-10'>
          <motion.ul 
            className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CardItem
              src='images/img-1.jpg'
              text='Elevate your outfit with accessories that embody elegance and add a touch of luxury to your look.'
              label='Elegance Embodied'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Rock a casual chic vibe with a comfortable yet stylish ensemble that is perfect for a day out.'
              label='Casual Chic Look'
            />
          </motion.ul>
          <motion.ul 
            className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <CardItem
              src='images/img-4.jpg'
              text='Carry your essentials with a sophisticated and versatile bag that combines fashion and function.'
              label='Sophisticated Carryall'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Step into the spotlight with a pair of retro-inspired sunglasses that exude vintage glamour.'
              label='Retro Glamour'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Complete your urban explorer look with a trendy hat that adds an adventurous edge to your style.'
              label='Urban Explorer Vibes'
            />
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;