import React from "react";

const Textarea = ({ label, className, value, ...props }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <textarea
        className={`border-[rgba(71,_18,_128,_0.4)] p-4 border-2 rounded-[20px] w-full`}
        value={value}
        placeholder={label}
        {...props}
      ></textarea>
    </div>
  );
};

export default Textarea;
