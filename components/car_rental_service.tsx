import React from 'react';
import { GiMineralHeart } from 'react-icons/gi';
import { FiCoffee } from 'react-icons/fi';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { FaGlassCheers } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { FaHardHat } from 'react-icons/fa';

const CarRentalService = () => {
  return (
    <div className="flex flex-wrap">
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-xl">
      
        <div className="text-2xl mb-1">
          <FaCar style={{ color: 'gold', fontSize: '58px' }} /> {/* Increase the fontSize */}
     
        </div>
        <p className='text-black justify-normal'>Experience the freedom of the open road with our premier car rental services, where convenience meets reliability. Whether you're traveling for business or leisure, our extensive fleet of vehicles caters to your every need, ensuring a seamless journey from start to finish.

At our car rental service, we pride ourselves on offering a diverse range of vehicles, from compact cars perfect for city exploration to spacious SUVs ideal for family adventures. Each vehicle in our fleet is meticulously maintained and regularly serviced, guaranteeing optimal performance and safety on the road.

With a hassle-free booking process and flexible rental options, planning your next adventure has never been easier. Simply choose your desired vehicle, select your pickup and drop-off locations, and let us take care of the rest. Our dedicated team is committed to providing personalized service and ensuring your complete satisfaction throughout your rental experience.

Whether you're exploring the vibrant city streets or embarking on an epic road trip, trust our car rental service to be your reliable companion on the journey ahead. Discover the convenience and comfort of traveling on your terms, and let us help you make memories that last a lifetime. </p>
       
      </div>
    </div>

   
    </div>
  );
};

export default CarRentalService;
