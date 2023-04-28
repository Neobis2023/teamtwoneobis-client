import React from "react";

const DeleteButton = ({ text, onClick, className, ...props }) => {
  return (
    <button
      type="submit"
      className={`${className} rounded-[8px] bg-[transparent] text-[#9960C3] border border-[#9960C3] p-2`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default DeleteButton;
