import React from 'react'

const Input = ({ label,  className, value, id, ...props }) => {
    return (
      <div
        className={`border-[rgba(71,_18,_128,_0.4)] border rounded-[20px] w-full relative  ${className}`}
      >
        <input id={id} {...props} type={"text"} className="p-4 pb-1 w-full border rounded-[20px] outline-none" value={value}/>
        <label
          htmlFor="link"
          className="text-[#79768D] font-medium text-[0.75rem] absolute top-0 left-4"
        >
          {label}
        </label>
      </div>
    );
  };
export default Input