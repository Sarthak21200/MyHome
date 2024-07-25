import React from 'react'

export const SubmitButton = ({ children, className }) => {
  return (
    <button className={`bg-[#090808] text-white rounded-full py-[10px] px-[30px] ${className}`}>
      {children}
    </button>
  )
}
