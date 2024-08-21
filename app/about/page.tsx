import React from 'react';
import TravelWithUsCard from '../Components/TravelWithUsCard';
import { HowItWorksData, WhyTravelData } from '../Constants/AboutUsContrants';
import HowItWorkItem from '../Components/HowItWorkItem';

const About = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div id='about-us' className='w-full'>
          <div className='flex flex-wrap flex-col justify-start mb-10 px-2'>
            <div className='flex flex-row items-center justify-center'>
              <div className=' text-5xl font-bold px-2 text-white my-10'>About Us</div>
            </div>
            <p className='tracking-wider'>
              Welcome to The Collab Compass, where travel meets influence! We are a pioneering tourism company dedicated
              to creating unforgettable experiences by connecting social influencers, vloggers, and their followers on
              exciting trips. Our mission is to offer more than just travel; we provide unique opportunities for
              followers to become part of their favorite influencers journey, gaining exposure and creating memories
              that last a lifetime. With us, every trip is a story waiting to be told, every adventure a chance to
              shine. Join us in redefining travel—where you are not just a tourist but a star in the making!
            </p>
          </div>

          <div className='flex flex-wrap flex-col justify-start mb-10 px-2'>
            <div className='flex flex-row items-center justify-center'>
              <div className=' text-5xl font-bold px-2 text-white my-10'>Why Travel with Us?</div>
            </div>

            <div className='w-full grid md:grid-cols-3 gap-3 sm:grid-cols-3 justify-center'>
              {WhyTravelData.map((data) => (
                <TravelWithUsCard key={data.title} {...data} />
              ))}
            </div>
          </div>

          <div className='flex flex-wrap flex-col justify-start mb-10 px-2'>
            <div className='flex flex-row items-center justify-center'>
              <div className=' text-5xl font-bold px-2 text-white my-10'>How It Works?</div>
            </div>

            <div className='w-full grid md:grid-cols-3 gap-3 sm:grid-cols-3 justify-center'>
              {HowItWorksData.map((data: any) => (
                <HowItWorkItem key={data.title} {...data} />
              ))}
            </div>
          </div>
        </div>
        <div id='why-us'></div>
      </div>
    </>
  );
};

export default About;
