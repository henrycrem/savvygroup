import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import Button from './ui/button';
import { FaCoffee, FaStar, FaTools } from 'react-icons/fa';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={100}
      >
        {/* Carousel Item 1 */}
        <div className="carousel-item relative w-full h-[600px]">
          <img src="/images/banner.png" alt="Image 1" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white">
            
          </div>
        </div>

        {/* Carousel Item 2 */}
        <div className="carousel-item relative w-full h-[600px]">
          <img src="/images/banner2.png" alt="Image 1" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white">
           
          </div>
        </div>

        {/* Carousel Item 3 */}
        <div className="carousel-item relative w-full h-[600px]">
          <img src="/images/banner3.png" alt="Image 1" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white">
            
          </div>
        </div>

        {/* Carousel Item 4 (Extended) */}
        <div className="carousel-item relative w-full h-[600px]">
          <img src="/images/banner5.png" alt="Image 1" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white">
            
          </div>
        </div>

      </Carousel>
    </div>
  );
};

export default LandingPage;

