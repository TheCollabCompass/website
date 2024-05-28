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
            <div className='my-8 text-4xl font-bold underline decoration-white'>About Us</div>
            <p className='tracking-wider'>
              At The Collab Compas, we bring a unique twist to your travel adventures. We are proud to be Pakistan's
              first travel agency that organizes exclusive trips to breathtaking mountain areas with the influencers you
              admire. Our mission is to blend the thrill of exploration with the excitement of meeting and traveling
              with your favorite social media stars.
            </p>
          </div>

          <div className='flex flex-wrap flex-col justify-start mb-10 px-2'>
            <div className='my-8 text-4xl font-bold underline decoration-white'>Why Travel with Us?</div>

            <div className='w-full grid md:grid-cols-3 gap-3 sm:grid-cols-3 justify-center'>
              {WhyTravelData.map((data) => (
                <TravelWithUsCard key={data.title} {...data} />
              ))}
            </div>
          </div>

          <div className='flex flex-wrap flex-col justify-start mb-10 px-2'>
            <div className='my-8 text-4xl font-bold underline decoration-white'>How It Works?</div>

            <div className='w-full grid md:grid-cols-3 gap-3 sm:grid-cols-3 justify-center'>
              {HowItWorksData.map((data) => (
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
