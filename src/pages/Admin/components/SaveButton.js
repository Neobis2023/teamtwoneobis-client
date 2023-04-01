import React from 'react'

const SaveButton = ({ text, ...props }) => {
  return (
    <button type='submit' {...props} className={'w-[30%] rounded-[8px] bg-[#9960C3] text-white p-2'}>{text}</button>
  )
}

export default SaveButton