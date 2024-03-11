import React from 'react';
import { GiMineralHeart } from 'react-icons/gi';
import { FiCoffee } from 'react-icons/fi';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { FaGlassCheers } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { FaHardHat } from 'react-icons/fa';

const RestaurantService = () => {
  return (
    <div className="flex flex-wrap">
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-xl">
      
        <div className="text-2xl mb-1">
          <GiForkKnifeSpoon style={{ color: 'gold', fontSize: '58px' }} /> {/* Increase the fontSize */}
     
        </div>
        <p className='text-black justify-normal'>Indulge in a culinary journey like no other with our Restaurant Service, where passion meets flavor to create unforgettable dining experiences in Liberia. Nestled in the heart of our vibrant community, our restaurant is a haven for food enthusiasts seeking a taste of excellence.

At our restaurant, we take pride in curating menus that showcase the best of Liberian cuisine alongside international flavors. Each dish is a masterpiece crafted with care and precision, using locally sourced ingredients and innovative techniques to delight the palate.

What sets us apart is not just the quality of our food, but also the warmth of our hospitality and the attention to detail in every aspect of your dining experience. From the moment you step through our doors, you'll be greeted with a welcoming atmosphere and a commitment to exceeding your expectations.

Join us for a culinary adventure that celebrates the rich diversity of Liberian cuisine while embracing the global influences that inspire our chefs. Whether you're dining with friends, family, or colleagues, our restaurant promises a feast for the senses that will leave you craving more. </p>
       
      </div>
    </div>

   
    </div>
  );
};

export default RestaurantService;
