import Image from 'next/image';
import MainBar from './Components/MainNav';
import { Button } from '@nextui-org/react';
import LiveTripCard from './Components/LiveTripCard';
import ComingSoonTripCard from './Components/ComingSoonTripCard';
import CompletedTripCard from './Components/CompletedTripCard';

export default function Home() {
  return (
    <>
      <section id='hero-section' className='backgroundImage'>
        {/* <MainBar /> */}

        <div className='md:container md:mx-auto hero-container '>
          <div className='p-2'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1'>
              <div className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-8'>
                <div>
                  <div className='text-4xl font-bold tracking-wider'>
                    Explore Pakistan with Your Favorite Influencers!
                  </div>

                  <p className='text-2xl mt-4 tracking-wider font-semibold'>
                    Discover the majestic beauty of Pakistan's mountain regions with the influencers you follow and
                    love!
                  </p>
                  <p className='text-1xl mt-2 tracking-wider'>Pakistan's First Influencer-Led Tourism Company!</p>
                </div>

                <div className='mt-2'>
                  <a href='/trip-info'>
                    <Button color='success' variant='shadow'>
                      Explore
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='coming-trips-section'>
        <div className='container mx-auto'>
          <div className='py-20 px-2'>
            <div className='flex flex-col space-y-24'>
              <div className='flex flex-row items-center justify-center'>
                <h2 className='my-8 text-4xl font-bold px-2 underline decoration-white'>Live Trips</h2>
              </div>
              <div className='flex flex-row items-center  justify-around flex-wrap'>
                <div>
                  <LiveTripCard />
                </div>
                <div>
                  <LiveTripCard />
                </div>
                <div>
                  <LiveTripCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='upcoming-trips-section'>
        <div className='container mx-auto'>
          <div className='py-20 px-2'>
            <div className='flex flex-col space-y-24'>
              <div className='flex flex-row items-center justify-center'>
                <h2 className='my-8 text-4xl font-bold px-2 underline decoration-white'>Coming Soon</h2>
              </div>
              <div className='flex flex-row items-center  justify-around flex-wrap'>
                <div>
                  <ComingSoonTripCard />
                </div>
                <div>
                  <ComingSoonTripCard />
                </div>
                <div>
                  <ComingSoonTripCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='completed-trips-section'>
        <div className='container mx-auto'>
          <div className='py-20 px-2'>
            <div className='flex flex-col space-y-24'>
              <div className='flex flex-row items-center justify-center'>
                <h2 className='my-8 text-4xl font-bold px-2 underline decoration-white'>Completed Trips</h2>
              </div>
              <div className='flex flex-row items-center  justify-around flex-wrap'>
                <div>
                  <CompletedTripCard />
                </div>
                <div>
                  <CompletedTripCard />
                </div>
                <div>
                  <CompletedTripCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
