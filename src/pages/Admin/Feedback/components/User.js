import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFeedbackCurrentUser } from "../../../../helpers/reduxToolkit/toolkitSlice";

const User = ({ id, imgUrl, fullName, date, message, time, email }) => {
  const feedbackCurrentUser = useSelector(state => state.toolkit.feedbackCurrentUser);
  const dispatch = useDispatch();
  const user = {
    id,
    imgUrl,
    fullName,
    date,
    message,
    time,
    email,
  }
  const handleClick = async () => {
    dispatch(
      setFeedbackCurrentUser(user)
    );
  };
  return (
    <div
      className={`flex flex-col gap-2 px-4 py-4 hover:cursor-pointer h-[100px] overflow-hidden`}
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <div className="flex gap-3">
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
