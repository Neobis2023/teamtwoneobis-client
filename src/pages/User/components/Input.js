import React, { useState } from 'react'

const Input = ({ label, value, ...props }) => {
//   const [value, setValue] = useState('');  
  return (
    <label className='mb-2 w-[48%]'>
        <p className='text-[#662D91] font-bold text-[0.75rem] mb-1'>{label}</p>
        <input {...props} placeholder={label} value={value} className='bg-[#FAF7FF] p-2 rounded-[8px] outline-none' />
        
    </label>
  )
}

export default Input