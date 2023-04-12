import React from 'react'

const AddButton = ({ text, ...props }) => {
  return (
    <button {...props} type='button' className='text-[#9960C3] font-bold w-fit text-[clamp(0.675rem,_0.972vw,_1.175rem)] p-2 border border-[#9960C3] rounded-[8px]'>{text}</button>
  )
}

export default AddButton