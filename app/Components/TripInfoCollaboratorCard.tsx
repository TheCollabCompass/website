'use client';
import React from 'react';
import { Card, CardHeader, CardBody, Image, Button, Divider } from '@nextui-org/react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { ITripInfo } from '../utils/types';

export default function TripInfoCollaboratorCard({ data }: { data?: ITripInfo | undefined }) {
  const handleIconClick = (type: string) => {
    if (type == 'TIKTOK') {
      window.open(data?.collaboratorCard.tiktok, '_blank');
    } else if (type == 'THREADS') {
      window.open(data?.collaboratorCard.instagram, '_blank');
    }
  };
  return (
    <>
      <div className='max-w-sm bg-black bg-opacity-30 rounded-lg shadow-white/30 shadow-lg mb-4 overflow-hidden'>
        <a href='#'>
          <Image className='rounded-t-lg' src={data?.collaboratorCard.image} alt='' />
        </a>
        <div className='p-5'>
          <small className='text-default-400'>Collaborator</small>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>{data?.collaboratorCard.name}</h5>
          </a>

          <div className='mt-3'>
            <div>
              <div className='mb-4'>
                <small className='text-default-400'>
                  {data?.collaboratorCard.description && data?.collaboratorCard.description}
                </small>
              </div>
              <div className='mb-1 flex flex-wrap'>
                <div className='mr-4'>
                  {/* TDOD: add link tag for these */}

                  <a href={data?.collaboratorCard.instagram ? data?.collaboratorCard.instagram : '#'} target='_blank'>
                    <InstagramIcon fontSize='large' />
                  </a>
                </div>

                <div
                  onClick={() => {
                    handleIconClick('TIKTOK');
                  }}
                  className='w-6 flex items-center mr-4 cursor-pointer'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='white'>
                    <path d='M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z' />
                  </svg>
                </div>
                <div className='mr-4'>
                  <a href={data?.collaboratorCard.facebook ? data?.collaboratorCard.facebook : '#'} target='_blank'>
                    <FacebookIcon fontSize='large' />
                  </a>
                </div>

                <div
                  onClick={() => {
                    handleIconClick('THREADS');
                  }}
                  className='w-6 flex items-center mr-4 cursor-pointer'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='white'>
                    <path d='M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="border-b-1 border-white mb-4"></div> */}
        </div>
      </div>
    </>
  );
}
