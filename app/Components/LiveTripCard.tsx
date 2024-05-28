import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Divider,
} from "@nextui-org/react";

export default function LiveTripCard() {
  return (
    <>
      <div className="max-w-sm bg-white bg-opacity-10 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mb-4">
        <a href="#">
          <img className="rounded-t-lg" src="/assets/images/snow1.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              1 Day Trip to Mushkpuri Top
            </h5>
          </a>
          <div className="flex">
            <div className="border-2 border-green-500 rounded-lg ">
              <p className="text-small p-1 text-green-500">Registration Open</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex flex-col">
              <div className="mb-4">
                <small className="text-default-400">Collborator</small>
                <p className="font-bold text-lg">Rana Ahsan Ansar</p>
              </div>
              <div className="mb-4">
                <small className="text-default-400">Per Person</small>
                <p className="font-bold text-lg">Rs. 7000/-</p>
              </div>
              <div className="mb-4">
                <small className="text-default-400">Date</small>
                <p className="font-bold text-lg">3rd May, 2024</p>
              </div>
            </div>
          </div>
          <div className="border-b-1 border-white mb-4"></div>
          <div className="flex flex-row justify-between">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Explore
              <svg
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
              </svg>
            </a>
            {/* <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Explore
            <svg
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
            </svg>
          </a> */}
          </div>
          
        </div>
        <div className="mt-0">
            <div className="border-t-1 border-white py-2 px-2 flex flex-row justify-between bg-red-500">
              <p className="font-bold">REGISTRATION ENDS IN</p>
              <p >1D : 24H : 30M : 30S</p>
            </div>
          </div>
      </div>
    </>
  );
}

// {/* <Card className=" bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg">
//         <CardHeader className="">
//           {/* <p className="text-tiny uppercase font-bold text-black ">Daily Mix</p>
//         <small className="text-default-500">12 Tracks</small>
//         <h4 className="font-bold text-large text-black">Frontend Radio</h4> */}
//           <Image
//             alt="Tour and travel image"
//             className="object-cover rounded-xl"
//             src="https://nextui.org/images/hero-card-complete.jpeg"
//             width={270}
//           />
//         </CardHeader>
//         <CardBody className="overflow-visible py-2">
//           {/* <Image
//           alt="Card background"
//           className="object-cover rounded-xl"
//           src="https://nextui.org/images/hero-card-complete.jpeg"
//           width={270}
//         /> */}
//           <p className="text-tiny uppercase font-bold  ">Daily Mix</p>
//           <small className="text-default-500">12 Tracks</small>
//           <h4 className="font-bold text-large text-black">Frontend Radio</h4>
//         </CardBody>
//       </Card> */}