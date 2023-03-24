import React from "react";

const User = ({ imgUrl, fullName, date, message }) => {
  return (
    <div className="flex flex-col gap-2 pr-2 py-4 hover:cursor-pointer">
      <div className="flex justify-between">
        <div className="flex gap-2">
          {" "}
          <img src={imgUrl} alt="user" />
          <p className="text-[#06152B] text-[0.875rem] font-bold">{fullName}</p>
        </div>
        <div className="text-[#000] text-[0.7rem]">{date}</div>
      </div>
      <div className="text-[#888888] text-[0.7rem]">{message}</div>
    </div>
  );
};

export default User;
