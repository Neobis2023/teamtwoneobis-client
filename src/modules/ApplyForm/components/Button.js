import React from 'react'

const Button = ({ text, className, ...props }) => {
  return (
    <button {...props} className={`${className} w-[20%] min-w-fit text-[#662D91] bg-[#E8E5FF] border-[#CDB4DB] border rounded-[40px] px-4 py-1 transition hover:!text-white hover:!bg-[#9960C3]`}>{text}</button>
  )
}

export default Button