'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Image, Button, Divider } from '@nextui-org/react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ITripInfo, TimeLeft } from '../utils/types';

function calculateTimeLeft(endTime: number): TimeLeft {
  const targetDate = new Date(endTime * 1000);
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

function formatTimeLeft(timeLeft: TimeLeft) {
  const formatTime = (time: number | undefined) => {
    return time !== undefined && time < 10 ? `0${time}` : time;
  };

  return `${timeLeft.days ? `${timeLeft.days} Day${timeLeft.days > 1 ? 's' : ''}, ` : ''}${formatTime(
    timeLeft.hours
  )}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`;
}
export default function TripInfoTripCard({ data }: { data?: ITripInfo }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const endTime = Number(data?.tripCard.timeEndsIn);

  useEffect(() => {
    // Start the timer after the component has mounted to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft(endTime));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  // If timeLeft is null (before the component has mounted), return an empty string
  if (timeLeft === null) {
    return null;
  }

  const formattedTime = formatTimeLeft(timeLeft);
  return (
    <>
      <div className='max-w-sm  bg-white/20 backdrop-blur  rounded-2xl shadow-lg shadow-black/30  mb-4 overflow-hidden'>
        <a href='#'>
          <Image className='rounded-t-lg' src={data?.tripCard.image} alt='' />
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
            </a>
          </div>
        </div>
        <div className='mt-0'>
          <div className='border-t-1 border-white py-2 px-2 flex flex-row justify-between bg-red-500'>
            <p className='font-bold'>Regs. ends in</p>
            {formattedTime ? <p>{formattedTime}</p> : <span>Time up!</span>}
          </div>
        </div>
      </div>
    </>
  );
}
