import React from 'react'

const InputV2 = ({ label,  className, value, onChange, ...props }) => {
  return (
    <div
      className={`border-[#9960C3] border rounded-[8px] w-full relative  ${className}`}
    >
      <input onChange={onChange} value={value} {...props} type={"text"} className="p-4 pb-1 pl-1 w-full border rounded-[8px] outline-none" id="link"/>
      <label
        htmlFor="link"
        className="text-[#79768D] font-medium text-[0.75rem] absolute top-0 left-1"
      >
        {label}
      </label>
    </div>
  );
};

export default InputV2;
