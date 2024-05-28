import React from 'react';

const TravelWithUsCard = (props: any) => {
  const { title, description } = props;
  return (
    <>
      <div>
        <div className='max-w-sm bg-white bg-opacity-10 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mb-4 overflow-hidden'>
          <div className='flex flex-col justify-center items-center p-4'>
            <div className='text-2xl font-bold mb-3'>{title}</div>
            <p className='text-center'>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelWithUsCard;
