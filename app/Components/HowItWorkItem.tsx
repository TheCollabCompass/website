import React from 'react';

const HowItWorkItem = (props) => {
  const { sr, title, description } = props;
  return (
    <div>
      {/* <div className='text-2xl font-bold mb-3'>{sr}</div> */}
      <div className='text-2xl font-bold mb-3'>{title}</div>
      <div className='mb-3'>{description}</div>
    </div>
  );
};

export default HowItWorkItem;
