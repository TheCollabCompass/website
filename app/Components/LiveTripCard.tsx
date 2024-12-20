'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, Image, CardFooter } from '@nextui-org/react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { ILiveTripData, TimeLeft } from '../utils/types';

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
  // Check if the time is up
  if (!timeLeft.days && !timeLeft.hours && !timeLeft.minutes && !timeLeft.seconds) {
    return 'Time up!';
  }
  const formatTime = (time: number | undefined) => {
    return time !== undefined && time < 10 ? `0${time}` : time;
  };

  return `${timeLeft.days ? `${timeLeft.days} Day${timeLeft.days > 1 ? 's' : ''}, ` : ''}${formatTime(
    timeLeft.hours
  )}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`;
}

export default function LiveTripCard({ data }: { data?: ILiveTripData }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const endTime = Number(data?.timeEndsIn);

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
    <Card
      className='w-full bg-white/20 backdrop-blur rounded-2xl shadow-lg shadow-black/30 mb-4 overflow-hidden'
      shadow='sm'
      key={data?.id}
      onPress={() => console.log('item pressed')}
    >
      <CardBody className='overflow-visible p-0'>
        <Image
          shadow='sm'
          radius='lg'
          width='100%'
          alt={data?.title}
          className='w-full object-cover max-h-[300px] h-[300px] overflow-hidden'
          src={data?.image}
        />
        <div className='p-5'>
          <a href='#'>
            <h5 className='w-full line-clamp-1 mb-2 text-2xl font-bold tracking-tight text-white'>{data?.title}</h5>
          </a>
          <div className='flex'>
            <div className='border-2 border-green-500 rounded-lg flex justify-center items-center'>
              <p className='text-small p-1 text-green-500'>Registration Open</p>
              <HowToRegIcon fontSize='small' sx={{ color: 'green', fill: '#22c55e' }} />
            </div>
          </div>
          <div className='mt-3'>
            <div className='flex flex-col'>
              <div className='mb-4'>
                <small className='text-default-300'>Collaborator</small>
                <p className='font-bold text-lg'>{data?.collaborator}</p>
              </div>

              <div className='mb-4'>
                <small className='text-default-300'>Expected Date</small>
                <p className='font-bold text-lg'>{data?.date}</p>
              </div>
            </div>
          </div>
          <div className='border-b-1 border-white mb-4'></div>
          <div className='flex flex-row justify-between'>
            <a
              href={'/trip-info/' + data?.id}
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Details
              <svg
                className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </a>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <div className='mt-0 w-full'>
          <div className='border-white py-2 px-2 flex flex-row justify-between bg-red-500 rounded-lg'>
            <p className='font-bold'>Regs. ends in</p>
            {formattedTime ? <p>{formattedTime}</p> : <span>Time up!</span>}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
