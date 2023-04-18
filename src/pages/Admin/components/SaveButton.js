import React from 'react'

const SaveButton = ({ text, onClick, className, ...props }) => {
  return (
    <button type='submit' onClick={onClick} {...props} className={`w-fit rounded-[8px] bg-[#9960C3] text-white p-2 ${className}`}>{text}</button>
  )
}

export default SaveButton
