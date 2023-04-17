import React, { useState } from "react";
import userPhoto from '../assets/images/userPhoto.svg';


const User = ({ id, image, firstName, lastName, email, phoneNumber, handleClick, questionnaire }) => {
  return (
    <div
      className={`${
        id % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#EAF0FF]"
      } rounded-[10px] grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4 items-center py-4 px-2 justify-between text-[0.875rem] my-3`}
    >
      <div className="flex items-center gap-2">
        <img src={image?.url || userPhoto} alt="user" className="h-8 w-8 rounded-full"/>
        <div>
          {firstName}
          {" "}
          {lastName}
        </div>
      </div>
      <div>{email}</div>
      <div className="text-[#616161]">{phoneNumber}</div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="text-[#FFFFFF] font-bold bg-[#9960C3] p-2 rounded-[8px]"
        >
          Одобрить
        </button>
        <button
          type="button"
          className="text-[#9960C3] font-bold bg-transparent border border-[#9960C3] p-2 rounded-[8px]"
        >
          Отклонить
        </button>
      </div>
      <button
        type="button"
        className={"justify-self-center underline text-[#616161]"}
        onClick={(e) => handleClick({
          id,
          email,
          phoneNumber,
          image: image?.url || userPhoto,
          firstName,
          lastName,
          questionnaire
        })}
      >
        Открыть
      </button>
    </div>
  );
};

export default User;
