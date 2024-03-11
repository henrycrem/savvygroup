import React from 'react';
import { GiMineralHeart } from 'react-icons/gi';
import { FiCoffee } from 'react-icons/fi';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { FaGlassCheers } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { FaHardHat } from 'react-icons/fa';

const CoffeeService = () => {
  return (
    <div className="flex flex-wrap">
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-xl">
      
        <div className="text-2xl mb-1">
          <FiCoffee style={{ color: 'gold', fontSize: '58px' }} /> {/* Increase the fontSize */}
     
        </div>
        <p className='text-black justify-normal'>Welcome to our Coffee Shop Service, where we redefine the coffee experience in Liberia. With a dedication to excellence and a commitment to sourcing only the finest beans from local growers, we offer a taste of perfection in every cup.

At our coffee shop, we pride ourselves on crafting beverages that awaken the senses and ignite the spirit of community. Our skilled baristas meticulously prepare each cup, ensuring that every sip delivers an unparalleled blend of flavor and aroma.

What sets us apart is not just the quality of our coffee, but also the passion and expertise that we bring to every step of the process. From bean selection to brewing techniques, we prioritize excellence and innovation, setting the standard for coffee culture in Liberia.

Step into our coffee shop and experience the warmth of our hospitality, the richness of our blends, and the vibrancy of our atmosphere. Whether you're seeking a moment of relaxation or a burst of energy, we invite you to savor the finest coffee in Liberia, served with a touch of excellence that only we can provide. </p>
       
      </div>
    </div>

   
    </div>
  );
};

export default CoffeeService;
