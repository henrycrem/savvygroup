'use client'
import React, { useEffect, useState } from 'react';
import SectionWithBackground from './SectionWithBackground';
import MiningService from './mining_service';
import CoffeeService from './coffee_services';
import RestaurantService from './restaurant_service';
import ConstructionService from './construction_service';
import CarRentalService from './car_rental_service';

const MyServices = () => {

  const [isMounted, setIsMounted] = useState(false)

    useEffect(() =>{
        setIsMounted(true)
    }, [])

    if(!isMounted){
        return null
    }

  return (
    <div className="mb-8"> {/* Add margin bottom */}
      <SectionWithBackground backgroundImageSrc="/images/mining.jpg">
        <div className="flex flex-wrap">
          {/* Section with Background Image */}
          <div className="mining-section bg-cover bg-center md:bg-contain">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 text-white">
              {/* Left Column */}
              <div>
                <h2 className="text-3xl font-extrabold mb-4 text-white"><span className="bg-black p-2">MINERAL MINING SERVICES</span></h2>
                <div>
                  <MiningService/>
                </div>
              </div>

              {/* Right Column */}
              <div className="bg-white p-8">
                <img src="/images/mining.jpg" alt="Right Column Image" />
              </div>
            </div>
          </div>

          {/* Section with Background Image */}
          <div className="coffee-section bg-cover bg-center md:bg-contain">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 text-white">
              {/* Left Column */}
              <div>
                <h2 className="text-3xl font-extrabold mb-4 text-white"><span className="bg-black p-2">COFFEE SHOP</span></h2>
                <div>
                  <CoffeeService/>
                </div>
              </div>

              {/* Right Column */}
              <div className="bg-white p-8">
                <img src="/images/coffee_img.avif" alt="Right Column Image" />
              </div>

            </div>
          </div>

          <div className="mining-section bg-cover bg-center md:bg-contain">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 text-white">
              {/* Left Column */}
              <div>
                <h2 className="text-3xl font-extrabold mb-4 text-white"><span className="bg-black p-2">CONSTRUCTION SERVICE</span></h2>
                <div>
                  <ConstructionService/>
                </div>
              </div>

              {/* Right Column */}
              <div className="bg-white p-8">
                <img src="/images/cons.jpg" alt="Right Column Image" />
              </div>
            </div>
          </div>

         



          <div className="coffee-section bg-cover bg-center md:bg-contain">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 text-white">
              {/* Left Column */}
              <div>
                <h2 className="text-3xl font-extrabold mb-4 text-white"><span className="bg-black p-2">RESTAURANT</span></h2>
                <div>
                  <RestaurantService/>
                </div>
              </div>

              {/* Right Column */}
              <div className="bg-white p-8">
                <img src="/images/restur.jpg" alt="Right Column Image" />
              </div>

            </div>
          </div>


          <div className="coffee-section bg-cover bg-center md:bg-contain">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 text-white">
              {/* Left Column */}
              <div>
                <h2 className="text-3xl font-extrabold mb-4 text-white"><span className="bg-black p-2">CAR RENTAL </span></h2>
                <div>
                  <CarRentalService/>
                </div>
              </div>

              {/* Right Column */}
              <div className="bg-white p-8">
                <img src="/images/car_rental.jpg" alt="Right Column Image" />
              </div>

            </div>
          </div>


        </div>
      </SectionWithBackground>
    </div>
  );
};

export default MyServices;
