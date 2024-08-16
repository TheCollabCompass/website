import Image from 'next/image';
import MainBar from './Components/MainNav';
import { Button } from '@nextui-org/react';
import LiveTripCard from './Components/LiveTripCard';
import ComingSoonTripCard from './Components/ComingSoonTripCard';
import CompletedTripCard from './Components/CompletedTripCard';
import ContactUs from './Components/ContactUs';
import { Instagram } from '@mui/icons-material';
import { liveTripCardData, comingSoonTripCardData, completedTripCardData } from './Constants/data';
import { IComingSoonTripData, ICompletedTripData, ILiveTripData } from './utils/types';

export default function Home() {
  return (
    <>
      <section id='hero-section' className='backgroundImage'>
        {/* <MainBar /> */}

        <div className='md:container md:mx-auto hero-container '>
          <div className='p-2'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1'>
              <div className='bg-white/10 backdrop-blur rounded-xl shadow-[#1c2418] backdrop-brightness-150 shadow-2xl p-12'>
                <div className='mb-4'>
                  <div className='text-4xl font-bold tracking-wider'>
                    Explore Pakistan with Your Favorite Influencers!
                  </div>

                  <p className='text-2xl mt-4 tracking-wider font-semibold'>
                    Discover the majestic beauty of Pakistan's mountain regions with the influencers you follow and
                    love!
                  </p>
                  <p className='text-1xl mt-2 tracking-wider'>Pakistan's First Influencer-Led Tourism Company!</p>
                </div>

                {/* <div className='my-2'>
                  <a href='/trip-info'>
                    <Button color='success' variant='shadow'>
                      Explore
                    </Button>
                  </a>
                </div> */}
                <div className='flex sm:mt-0 sm:justify-center md:justify-start items-center'>
                  <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                    <svg
                      className='w-8 h-8'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 8 19'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    <span className='sr-only'>Facebook page</span>
                  </a>

                  <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 '>
                    <Instagram fontSize='small' className='w-8 h-8' />
                  </a>

                  <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'>
                    <svg
                      className='w-8 h-8'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 17'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    <span className='sr-only'>Twitter page</span>
                  </a>
                  <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'>
                    <svg
                      className='w-8 h-8'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    <span className='sr-only'>GitHub account</span>
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
                <h2 className=' text-5xl font-bold px-2 text-white'>Live Trips</h2>
              </div>
              <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-6'>
                {liveTripCardData.map((data: ILiveTripData) => {
                  return (
                    <div>
                      <LiveTripCard data={data} />
                    </div>
                  );
                })}
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
                <h2 className=' text-5xl font-bold px-2 text-white '>Coming Soon</h2>
              </div>
              <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-6'>
                {comingSoonTripCardData.map((data: IComingSoonTripData) => {
                  return (
                    <div>
                      <ComingSoonTripCard data={data} />
                    </div>
                  );
                })}
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
                <h2 className='text-5xl font-bold px-2 text-white '>Completed Trips</h2>
              </div>
              <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-6'>
                {completedTripCardData.map((data: ICompletedTripData) => {
                  return (
                    <div>
                      <CompletedTripCard data={data} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <ContactUs /> */}
    </>
  );
}
