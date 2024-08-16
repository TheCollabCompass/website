import React from 'react';
import LiveTripCard from '../Components/LiveTripCard';
import TripInfoTripCard from '../Components/TripInfoTripCard';
import TripInfoCollaboratorCard from '../Components/TripInfoCollaboratorCard';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import GalleryImage from '../Components/GalleryImage';
import { tripInfoPageData } from '../Constants/data';

const Highlights = () => {
  return (
    <>
      <section className='py-10'>
        <div className='container mx-auto h-full'>
          <div className='h-full flex items-center justify-center m-4'>
            <div className='w-full flex flex-wrap justify-around'>
              <div>
                <TripInfoCollaboratorCard data={tripInfoPageData['s1t1']} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='package-includes-section'>
        <div className='container mx-auto h-full'>
          <div className='flex flex-wrap flex-col justify-center items-center'>
            <div className='my-8 text-4xl font-bold px-2 underline decoration-white'>Highlights of the Tour</div>
            <div className='w-full flex flex-row justify-start'>
              {/* <div className='my-8 ml-2 text-small font-bold px-2 underline decoration-white'>
                <a href=''>View All</a>
              </div> */}
            </div>

            <div id='packages-container' className='p-4 w-full'>
              <div className='flex flex-wrap flex-row w-full'>
                <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 w-full items-center justify-center'>
                  <div>
                    <GalleryImage url='/assets/images/snow1.jpg' imageWidth='500px' imageHeight='500px' alt='tourism' />
                  </div>
                  <div>
                    <GalleryImage url='/assets/images/snow1.jpg' imageWidth='500px' imageHeight='500px' alt='tourism' />
                  </div>
                  <div>
                    <GalleryImage url='/assets/images/snow1.jpg' imageWidth='500px' imageHeight='500px' alt='tourism' />
                  </div>
                  <div>
                    <GalleryImage url='/assets/images/snow1.jpg' imageWidth='500px' imageHeight='500px' alt='tourism' />
                  </div>
                  <div>
                    <GalleryImage url='/assets/images/snow1.jpg' imageWidth='500px' imageHeight='500px' alt='tourism' />
                  </div>
                  <div>
                    <GalleryImage url='/assets/images/snow1.jpg' imageWidth='500px' imageHeight='500px' alt='tourism' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Highlights;
