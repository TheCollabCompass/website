import React from 'react';
import LiveTripCard from '../Components/LiveTripCard';
import TripInfoTripCard from '../Components/TripInfoTripCard';
import TripInfoCollaboratorCard from '../Components/TripInfoCollaboratorCard';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import GalleryImage from '../Components/GalleryImage';
import ContactUs from '../Components/ContactUs';

const TripInfo = () => {
  return (
    <>
      <section className='py-10'>
        <div className='container mx-auto h-full'>
          <div className='h-full flex items-center justify-center m-4'>
            <div className='w-full flex flex-wrap justify-around'>
              <div>
                <TripInfoTripCard />
              </div>
              <div>
                <TripInfoCollaboratorCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='package-includes-section'>
        <div className='container mx-auto h-full'>
          <div className='flex flex-wrap flex-col justify-center'>
            <div className='my-10 text-4xl font-bold px-2 underline decoration-white'>Package Includes</div>
            <div id='packages-container' className='p-4 w-full'>
              <div className='flex flex-wrap flex-row w-full'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4 w-full'>
                  <div className='flex flex-row items-center justify-center mb-2'>
                    <DirectionsBusIcon style={{ fontSize: '5rem', color: 'white' }} className='mr-2' />
                    <div className='text-2xl font-semibold '>Luxury Transport</div>
                  </div>
                  <div className='flex flex-row items-center justify-center mb-2'>
                    <DirectionsBusIcon style={{ fontSize: '5rem', color: 'white' }} className='mr-2' />
                    <div className='text-2xl font-semibold '>Luxury Transport</div>
                  </div>
                  <div className='flex flex-row items-center justify-center mb-2'>
                    <DirectionsBusIcon style={{ fontSize: '5rem', color: 'white' }} className='mr-2' />
                    <div className='text-2xl font-semibold '>Luxury Transport</div>
                  </div>
                  <div className='flex flex-row items-center justify-center mb-2'>
                    <DirectionsBusIcon style={{ fontSize: '5rem', color: 'white' }} className='mr-2' />
                    <div className='text-2xl font-semibold '>Luxury Transport</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='plan-section'>
        <div className='container mx-auto h-full'>
          <div className='flex flex-wrap flex-col justify-center '>
            <div className='my-10 text-4xl font-bold px-2 underline decoration-white'>Trip Plan</div>
            <div id='plan-container' className='p-4 w-full'>
              <div className='flex flex-wrap flex-row w-full timeline-container'>
                <div className='mb-4  '>
                  <div className='text-2xl font-semibold mb-2'>Day : 0</div>
                  <p className='p-2 bg-white bg-opacity-10 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden mb-2'>
                    Departure from Thokar or Kalma Chowk terminal at 9:00PM
                  </p>
                  <p className='p-2 bg-white bg-opacity-10 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden'>
                    Arrived in Islamabad at 12:00PM
                  </p>
                </div>

                <div className='timeline-line'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id='timeline-notes'>
        <div className='container mx-auto my-10'>
          <div className='mx-2 border-2 border-red-500 p-2 rounded'>
            <div className='text-red-500 text-lg'>
              <span className='text-red-500 underline text-lg font-bold'>Note:</span> Timings may vary 2-3 hours due to
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
              <div className='gallery-column overflow-visible'>
                <div className='overflow-visible'>
                  <GalleryImage url='/assets/images/snow1.jpg' imageWidth='500px' imageHeight='500px' alt='tourism' />
                </div>
              </div>
              <div className='gallery-column overflow-visible'>
                <div>
                  <GalleryImage
                    url='/assets/images/mainBackground.jpg'
                    imageWidth='500px'
                    imageHeight='500px'
                    alt='tourism'
                  />
                </div>
              </div>
              <div className='gallery-column overflow-visible'>
                <div>
                  <GalleryImage url='/assets/images/snow1.jpg' imageWidth='500px' imageHeight='500px' alt='tourism' />
                </div>
              </div>
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
                Ready to explore Pakistan like never before? Book your next adventure with "The Collab Compas" and
                create memories that will last a lifetime. Follow us on social media to stay updated on our latest trips
                and special offers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TripInfo;
