import React from 'react'

const Input = ({ label,  className, value, id, ...props }) => {
    return (
      <div
        className={`border-[#9960C3] border rounded-[8px] w-full relative  ${className}`}
      >
        <input id={id} {...props} type={"text"} className="p-4 pb-1 pl-1 w-full border rounded-[8px] outline-none" value={value}/>
        <label
          htmlFor="link"
          className="text-[#79768D] font-medium text-[0.75rem] absolute top-0 left-1"
        >
          {label}
        </label>
      </div>
    );
  };
export default Input