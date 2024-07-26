'use client'
import React from 'react'
import { HeroSectionContent } from './HeroSectionContent'
import Image from 'next/image'
import whatsappicon from "../../../../public/assets/images/whatsapp.svg"
import phoneNoicon from "../../../../public/assets/images/phone.svg"
import messageicon from "../../../../public/assets/images/message.svg"
import { useDispatch } from 'react-redux'
import { toggleModal } from '../../store/slice/slice'
import { SCREENS } from '../Utils/CustomModal/Modal'

export const HeroSection = ( {bannerimage, altText} ) => {
  const dispatch = useDispatch();
  const style = ' cursor-pointer inline  z-[20] fixed  right-0 overflow-hidden  bg-white px-[10px] py-[7px]  rounded-l-[6px] shadow-xl flex items-center  w-[44px] h-[44px]'

  const handleButton = () => {
    dispatch(
      toggleModal({
        screen: SCREENS.LEAD_POPUP,
        visible: true,
      })
    );
  }

  function openLink (){
    window.location.href = this
  }

  return (
   <>
    <div className=" w-full relative">
        <img src={bannerimage} alt={altText} className=' w-full h-[600px] object-cover object-bottom hidden'/>
        <HeroSectionContent />
   </div>
   </>
  )
}