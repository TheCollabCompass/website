import React from 'react';
import LiveTripCard from '../../Components/LiveTripCard';
import TripInfoTripCard from '../../Components/TripInfoTripCard';
import TripInfoCollaboratorCard from '../../Components/TripInfoCollaboratorCard';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import GalleryImage from '../../Components/GalleryImage';
import ContactUs from '../../Components/ContactUs';
import { StartSvg } from '../../Constants/svgIcons';
import { tripInfoPageData } from '../../Constants/data';
import { ITripInfo } from '@/app/utils/types';

const TripInfo = ({ params }: { params: { tripId: string } }) => {
  const data: ITripInfo = tripInfoPageData[params.tripId];
  return (
    <>
      <section className='py-10'>
        <div className='container mx-auto h-full'>
          <div className='h-full flex items-center justify-center m-4'>
            <div className='w-full flex flex-wrap justify-around'>
              <div>
                <TripInfoTripCard data={data} />
              </div>
              <div>
                <TripInfoCollaboratorCard data={data} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='package-includes-section'>
        <div className='container mx-auto h-full'>
          <div className='flex flex-wrap flex-col justify-center'>
            <div className='flex flex-row items-center justify-center'>
              <div className=' text-5xl font-bold px-2 text-white my-10'>Package Includes</div>
            </div>
            <div id='packages-container' className='p-4 w-full'>
              <div className='flex flex-wrap flex-row w-full'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4 w-full'>
                  {data.package.map((item, index) => (
                    <div key={index} className='flex flex-row items-center justify-start mb-2'>
                      {StartSvg()}
                      <div className='text-2xl font-semibold ml-2'>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='plan-section'>
        <div className='container mx-auto h-full'>
          <div className='flex flex-wrap flex-col justify-center '>
            <div className='flex flex-row items-center justify-center'>
              <div className=' text-5xl font-bold px-2 text-white my-10'>Trip Plan</div>
            </div>
            <div id='plan-container' className='p-4 w-full'>
              <div className='flex flex-wrap flex-row w-full timeline-container'>
                <div className='mb-4  '>
                  {data.plan.map((item, index) => (
                    <div key={index} className='mb-4'>
                      <div className='text-2xl font-semibold mb-2'>Day : {item.day}</div>
                      {item.events.map((event, index) => (
                        <p
                          key={index}
                          className='p-2 bg-white bg-opacity-10 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden mb-2'
                        >
                          {event}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                <div className='timeline-line'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id='timeline-notes'>
        <div className='container mx-auto my-10'>
          <div className='p-2 bg-white bg-opacity-10 border border-red-500 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden mb-2'>
            <div className='text-white text-lg'>
              <span className='text-white underline text-lg font-bold'>Note:</span> Timings may vary 2-3 hours due to
              road and traffic conditions. Karachi people can join us either in Lahore or Islamabad
            </div>
          </div>
        </div>
      </div>

      <ContactUs />

      <section id='gallery-section'>
        <div className='container mx-auto px-2'>
          <div className='flex flex-wrap flex-col justify-center'>
            <div className='my-10 text-4xl font-bold px-2 underline decoration-white'>Attractions</div>
          </div>

          <div className='flex justify-center'>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 w-full'>
              {data.attractions.map((item, index) => (
                <div key={index} className='gallery-column overflow-visible'>
                  <div key={`${index}in1`} className='overflow-visible'>
                    <GalleryImage url={item} imageWidth='500px' imageHeight='500px' alt='tourism' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id='gallery-section'>
        <div className='container mx-auto px-2'>
          <div className='flex flex-wrap flex-col justify-center'>
            <div className='my-10 text-4xl font-bold px-2 underline decoration-white'>Join the Adventure!</div>
          </div>

          <div className='flex justify-center'>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 w-full'>
              <p>
                Ready to explore Pakistan like never before? Book your next adventure with The Collab Compas and create
                memories that will last a lifetime. Follow us on social media to stay updated on our latest trips and
                special offers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TripInfo;
