import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle as faRegCheckCircle, faTimesCircle as faRegTimesCircle } from '@fortawesome/free-regular-svg-icons';

export const TableSection = () => {
  return (
    <section className='mt-[80px] mb-[60px] lg:max-w-[1290px] h-auto p-[40px] mx-auto flex flex-col justify-center gap-[35px] items-center w-full bg-[white]'>
      <h2 className={'text-black text-[23px] w-[370px] leading-[28px] text-center font-semibold'}>We serve our customers better than others</h2>
      <div className='w-full h-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-[27px] gap-[60px]'>
        <div className='grid grid-rows-6 gap-[20px] text-[17px] leading-5 font-medium'>
          <div className='bg-black text-[#fff] py-[17px] border border-[#B1B1B1] rounded-md flex items-center justify-center'>
            <span className='text-center'>Customer's Problems</span>
          </div>
          <div className='bg-[white] text-red-500 py-[17px] border border-[#B1B1B1] rounded-md flex items-center'>
            <span className='ml-4'>Insecure Payments, Higher Risk</span>
            <FontAwesomeIcon icon={faRegTimesCircle} className='text-gray-500 ml-auto mr-2' />
          </div>
          <div className='bg-[white] text-red-500 py-[17px] border border-[#B1B1B1] rounded-md flex items-center'>
            <span className='ml-4'>Improper Quality Checks</span>
            <FontAwesomeIcon icon={faRegTimesCircle} className='text-gray-500 ml-auto mr-2' />
          </div>
          <div className='bg-[white] text-red-500 py-[17px] border border-[#B1B1B1] rounded-md flex items-center'>
            <span className='ml-4'>No Remote Monitoring</span>
            <FontAwesomeIcon icon={faRegTimesCircle} className='text-gray-500 ml-auto mr-2' />
          </div>
          <div className='bg-[white] text-red-500 py-[17px] border border-[#B1B1B1] rounded-md flex items-center'>
            <span className='ml-4'>Cost keeps increasing</span>
            <FontAwesomeIcon icon={faRegTimesCircle} className='text-gray-500 ml-auto mr-2' />
          </div>
          <div className='bg-[white] text-red-500 py-[17px] border border-[#B1B1B1] rounded-md flex items-center'>
            <span className='ml-4'>No guarantee on timely delivery</span>
            <FontAwesomeIcon icon={faRegTimesCircle} className='text-gray-500 ml-auto mr-2' />
          </div>
        </div>
        <div className='grid grid-rows-6 gap-[20px] text-[17px] leading-5 font-medium'>
          <div className='bg-black text-[#fff] py-[17px] border border-[#B1B1B1] rounded-md flex items-center justify-center'>
            <span className='text-center'>My-Home Proposed Solution</span>
          </div>
          <div className='bg-[white] text-green-500 py-[17px] border border-[#B1B1B1] rounded-md flex items-center'>
            <span className='ml-4'>Secure Escrow Service</span>
            <FontAwesomeIcon icon={faRegCheckCircle} className='text-gray-500 ml-auto mr-2' />
          </div>
          <div className='bg-[white] text-green-500 py-[17px] border border-[#B1B1B1] rounded-md flex items-center'>
            <span className='ml-4'>Premium Quality Assurance</span>
            <FontAwesomeIcon icon={faRegCheckCircle} className='text-gray-500 ml-auto mr-2' />
          </div>
          <div className='bg-[white] text-green-500 py-[17px] border border-[#B1B1B1] rounded-md flex items-center'>
            <span className='ml-4'>Mobile App Monitoring</span>
            <FontAwesomeIcon icon={faRegCheckCircle} className='text-gray-500 ml-auto mr-2' />
          </div>
          <div className='bg-[white] text-green-500 py-[17px] border border-[#B1B1B1] rounded-md flex items-center'>
            <span className='ml-4'>Transparent Pricing</span>
            <FontAwesomeIcon icon={faRegCheckCircle} className='text-gray-500 ml-auto mr-2' />
          </div>
          <div className='bg-[white] text-green-500 py-[17px] border border-[#B1B1B1] rounded-md flex items-center'>
            <span className='ml-4'>Guaranteed On-Time Delivery</span>
            <FontAwesomeIcon icon={faRegCheckCircle} className='text-gray-500 ml-auto mr-2' />
          </div>
        </div>
      </div>
    </section>
  );
};
