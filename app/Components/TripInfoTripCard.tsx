import React from 'react';
import { Card, CardHeader, CardBody, Image, Button, Divider } from '@nextui-org/react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ITripInfo } from '../utils/types';

export default function TripInfoTripCard({ data }: { data?: ITripInfo }) {
  return (
    <>
      <div className='max-w-sm  bg-white/20 backdrop-blur  rounded-2xl shadow-lg shadow-black/30  mb-4 overflow-hidden'>
        <a href='#'>
          <img className='rounded-t-lg' src={data?.tripCard.image} alt='' />
        </a>
        <div className='p-5'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>{data?.tripCard.title}</h5>
          </a>
          <div className='flex'>
            <div className='border-2 border-green-500 rounded-lg '>
              <p className='text-small p-1 text-green-500'>Registration Open</p>
            </div>
          </div>
          <div className='mt-3'>
            <div className='flex flex-row justify-between'>
              <div className='mb-4'>
                <small className='text-default-400'>Per Person</small>
                <p className='font-bold text-lg'>Rs. {data?.tripCard.price}/-</p>
              </div>
              <div className='mb-4'>
                <small className='text-default-400'>Date</small>
                <p className='font-bold text-lg'>{data?.tripCard.date}</p>
              </div>
            </div>
          </div>
          <div className='border-b-1 border-white mb-4'></div>
          <div className='flex flex-row justify-between'>
            <a
              href='#'
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full justify-center'
            >
              <div className='mr-2'>
                <WhatsAppIcon />
              </div>
              Contact On Whatsapp
              {/* TODO: Replace with Whatsapp Icon  */}
              {/* <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
                
              </svg> */}
            </a>
          </div>
        </div>
        <div className='mt-0'>
          <div className='border-t-1 border-white py-2 px-2 flex flex-row justify-between bg-red-500'>
            <p className='font-bold'>REGISTRATION ENDS IN</p>
            <p>1D : 24H : 30M : 30S</p>
          </div>
        </div>
      </div>
    </>
  );
}
