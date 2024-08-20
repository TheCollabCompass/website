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
import { whatsappLink } from './utils/constants';

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
                    Here you will get a chance to travel with the influencers you love and Follow
                  </p>
                  <p className='text-1xl mt-2 tracking-wider'>Pakistans First Influencer-Led Tourism Company!</p>
                </div>

                <div className='flex sm:mt-0 sm:justify-center md:justify-start items-center'>
                  {/* <a href='#' target='_blank' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
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
                  </a> */}

                  <a href={whatsappLink} target='_blank'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      // width='16'
                      // height='16'
                      fill='currentColor'
                      // className='bi bi-whatsapp'
                      className='w-8 h-8'
                      viewBox='0 0 16 16'
                    >
                      <path d='M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232' />
                    </svg>
                  </a>

                  <a
                    href='https://www.instagram.com/the.collab_compass?igsh=cm1iMjBwcG9mMW41'
                    target='_blank'
                    className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 '
                  >
                    {/* Instagram  */}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      // width='16'
                      // height='16'
                      fill='currentColor'
                      className='w-8 h-8'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334' />
                    </svg>
                  </a>

                  {/* <a href='#' target='_blank' className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'>
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
                  </a> */}
                  <a
                    href='https://github.com/TheCollabCompass'
                    target='_blank'
                    className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'
                  >
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
                    <div key={data.id}>
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
                    <div key={data.id}>
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
                    <div key={data.id}>
                      <CompletedTripCard key={data.id} data={data} />
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
