import React from 'react';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddTaskIcon from '@mui/icons-material/AddTask';
const CompletedTripCard = () => {
  return (
    <>
      <div className='max-w-sm  bg-white/20 backdrop-blur  rounded-2xl shadow-lg shadow-black/30  mb-4 overflow-hidden'>
        <a href='#'>
          <img className='rounded-t-lg' src='/assets/images/snow1.jpg' alt='' />
        </a>
        <div className='p-5'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>1 Day Trip to Mushkpuri Top</h5>
          </a>
          <div className='flex'>
            <div className='border-2 border-green-500 rounded-lg flex justify-center items-center'>
              <p className='text-small p-1 text-green-500'>Completed</p>
              <AddTaskIcon fontSize='small' sx={{ color: 'blue', fill: '#22c55e', marginRight: '2px' }} />
            </div>
          </div>
          <div className='mt-3'>
            <div className='flex flex-col'>
              <div className='mb-4'>
                <small className='text-default-400'>Collborator</small>
                <p className='font-bold text-lg'>Rana Ahsan Ansar</p>
              </div>

              <div className='mb-4'>
                <small className='text-default-400'>Expected Date</small>
                <p className='font-bold text-lg'>3rd May, 2024</p>
              </div>
            </div>
          </div>
          <div className='border-b-1 border-white mb-4'></div>
          <div className='flex flex-row justify-between'>
            <a
              href='/highlights'
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Vew Highlights
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
              {/* <svg
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
              </svg> */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompletedTripCard;