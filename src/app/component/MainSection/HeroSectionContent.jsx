'use client'
import React from 'react'
import { CommonButton } from '../Button/CommonButton'
import { HeroSectionButton } from '../Button/HeroSectionButton'
import { useDispatch } from 'react-redux'
import { SCREENS } from '../Utils/CustomModal/Modal'
import { toggleModal } from '../../store/slice/slice'
// import { BookForm } from '../MainSection/BookingPopUP/BookForm' // Corrected import
import { BookForm } from './BookingPopUp/BookForm'
export const HeroSectionContent = () => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      toggleModal({
        screen: SCREENS.LEAD_POPUP,
        visible: true,
      })
    );
  }

  return (
    <section 
      className='relative lg:max-w-[1450px] w-full mx-auto h-[700px] flex flex-col lg:flex-row items-center'
      style={{
        backgroundImage: "url('/assets/images/background.jpeg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='absolute inset-0'></div> 
      <div className='relative flex flex-col lg:w-1/2 w-full pl-[130px] text-white'>
        <div className='flex flex-col w-full lg:w-[500px] gap-[10px] text-[40px] font-semibold leading-[37px]'>
          <h1 className='text-black px-8 text-[40px]'>Reinvent your</h1>
          <h1 className='text-[#101010] px-10 text-[37px]'>Dream Home</h1>
        </div>
        <p className='text-[18px] px-10 leading-[24px] lg:w-[377px] w-[230px] font-medium mt-[22px] mb-[30px] text-black'>
          Your End to End Solution
        </p>
        <CommonButton onClick={handleClick}>Start your Journey</CommonButton>
        <div className='flex items-center text-[12px] leading-[17px] gap-[12px] mt-[10px] font-medium text-black'>
          <div className='text-white'>Popular:</div>
          <HeroSectionButton onClick={handleClick} title='Interior designing' />
          <HeroSectionButton onClick={handleClick} title='End to End Const.' />
        </div>
      </div>
      <div className='relative lg:w-1/2 w-full lg:pl-[104px] mt-10 lg:mt-0'>
        <BookForm />
      </div>
    </section>
  )
}