import React from 'react';

const ContactUs = () => {
  return (
    <section>
      <div className='container mx-auto  px-2'>
        <div className='flex flex-wrap flex-col justify-center'>
          <div className='my-10 text-4xl font-bold px-2 underline decoration-white'>Contact Us</div>
          <p className='mb-4'>Have questions or need assistance? Reach out to our friendly support team:</p>
          <ul>
            <li className='mb-2'>
              <span className='font-bold'>Email:</span> asn.cs21@gmail.com
            </li>
            <li className='mb-2'>
              <span className='font-bold'>Phone/Whatsapp:</span> +923091045145 / +923350078963
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
