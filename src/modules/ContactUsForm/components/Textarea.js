import React from "react";

const Textarea = ({ label, className, value, ...props }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <textarea
        className={`border-[rgba(71,_18,_128,_0.4)] p-4 border-2 rounded-[20px] w-full`}
        value={value}
        placeholder="Расскажите нам что-нибудь"
        {...props}
      ></textarea>
      {/* <label className="absolute top-2 left-4 text-[#79768D] font-medium text-[0.75rem]">
        {label}
      </label> */}
    </div>
  );
};

export default Textarea;
