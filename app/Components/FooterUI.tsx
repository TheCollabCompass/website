import { Instagram } from '@mui/icons-material';
import { Image } from '@nextui-org/react';
import React from 'react';
import ContactUs from './ContactUs';
import logoImage from '@/public/assets/images/theCollabCompassLogoDark.png';

const FooterUI = () => {
  return (
    <>
      <footer className='p-5  bg-black/30'>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />

        <div className='grid md:grid-cols-3 gap-6 justify-around w-full mb-5 sm:grid-col-1  '>
          <div className='flex flex-col justify-between items-center align-middle gap-5'>
            <Image src={logoImage.src} width={250} height={250} />
            <div className='flex mt-4 sm:justify-center sm:mt-0 items-center'>
              <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                <svg
                  className='w-4 h-4'
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
                <Instagram fontSize='small' className='w-4 h-4' />
              </a>

              <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'>
                <svg
                  className='w-4 h-4'
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
                  className='w-4 h-4'
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
          <div className='flex flex-col justify-center gap-10'>
            <div>
              <h1 className=' font-bold text-4xl'>Contact Us</h1>
            </div>
            <div>
              <p>Have questions or need assistance? Reach out to our friendly support team:</p>
              <ul>
                <li>
                  <span className='font-bold'>Email:</span> asn.cs21@gmail.com
                </li>
                <li>
                  <span className='font-bold'>Phone/Whatsapp:</span> +923091045145 / +923350078963
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col justify-center gap-10'>
            <div>
              <h1 className=' font-bold text-4xl'>About Us</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum debitis recusandae, vitae beatae
                eligendi, non eos odit numquam quaerat praesentium totam officia dolorem at velit sed. Dicta corrupti
                omnis vero!
              </p>
            </div>
          </div>
        </div>
        <div className='sm:flex sm:items-center sm:justify-center'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2024{' '}
            <a href='https://flowbite.com/' className='hover:underline'>
              The Collab Compass™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default FooterUI;
