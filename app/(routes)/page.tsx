"use client"


import React from 'react';
import LandingPage from "@/components/landingPage";
import Container from "@/components/ui/container";
import SectionWithBackground from "@/components/SectionWithBackground";
import MyServices from "@/components/myServices";
import Features from "@/components/featureSec";
import Teammember from '@/components/teammember';
import Testimonials from '@/components/testimonials';
import ContactUs from '@/components/contactUs';

export const revalidate = 0;

const HomePage = () => {
  return (
    <div className='bg-slate-100'>
      <div className="space-y-10 pb-10 bg-slate-100">
        <LandingPage />
        <div>
        <MyServices/>

        </div>
        
     

        
      </div>
      <div className="bg-white-100 py-12 mt-5 md:mt-0 max-sm:mt-[85rem] sm:mt-[55rem]">
  <h2 className="text-3xl font-semibold mb-4 text-black text-center">OUR AMAZING FEATURES</h2>
  <div className="relative">
    <Features />
  </div>
</div>
<div>

<Teammember/>
</div>

 {/* Add the Testimonials component below the Teammember */}
 <div>
        <Testimonials />
      </div>

      <div>
       <ContactUs/>
      </div>


    </div>
  );
};

export default HomePage;
