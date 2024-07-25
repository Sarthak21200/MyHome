'use client'
import React from 'react'

export const CommonButton = ({ children, onclick = () => {} }) => {
  const handleClick = () => {
    if (onclick) {
      onclick();
    }
  };
  
  return (
    <button
      className='rounded-lg shadow-md py-[20px] px-[50px] text-white bg-[#101010] text-[24px] leading-[10px] w-fit mb-[10px]'
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
