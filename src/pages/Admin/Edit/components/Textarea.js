import React from "react";

const Textarea = ({ label, className, value, ...props }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <textarea
        className={`border-[#9960C3] p-4 pb-1 pl-1 border-2 rounded-[8px] w-full`}
        value={value}
        {...props}
      ></textarea>
      <label className="absolute top-1 left-1 text-[#79768D] font-medium text-[0.75rem]">
        {label}
      </label>
    </div>
  );
};

export default Textarea;
