import React from 'react';
import { GiMineralHeart } from 'react-icons/gi';
import { FiCoffee } from 'react-icons/fi';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { FaGlassCheers } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { FaHardHat } from 'react-icons/fa';

const MiningService = () => {
  return (
    <div className="flex flex-wrap">
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-xl">
      
        <div className="text-2xl mb-1">
          <GiMineralHeart style={{ color: 'gold', fontSize: '58px' }} /> {/* Increase the fontSize */}
     
        </div>
        <p className='text-black justify-normal'>Over the past year, our company has been at the forefront of mineral mining services in Liberia, diligently sourcing and extracting a wide range of valuable minerals from the region's abundant natural resources. Our comprehensive approach encompasses every aspect of the mining process, from initial exploration and assessment to extraction, processing, and delivery to international partners.

Through strategic partnerships and cutting-edge technologies, we ensure the efficient and sustainable extraction of minerals while adhering to the highest environmental and ethical standards. Our commitment to responsible resource management extends beyond mere extraction, as we actively engage with local communities to foster economic development and promote environmental conservation.

By leveraging our expertise and industry insights, we have successfully established ourselves as a trusted supplier of high-quality minerals to global markets. Our relentless pursuit of excellence, coupled with a deep respect for the land and its people, drives our continued success in the mineral mining sector. </p>
       
      </div>
    </div>

   

   
    
   

    

    



     
    </div>
  );
};

export default MiningService;
