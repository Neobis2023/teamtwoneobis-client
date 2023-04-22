import React, { useEffect, useState } from "react";
import userPhoto from '../assets/images/userPhoto.svg';
import SaveButton from "../../components/SaveButton";
import axios from "../../../Videoblog/api/axios";
import {textShortener} from '../../../../utils/text-shortener';


const User = ({ id, image, firstName, lastName, email, phoneNumber, handleClick, questionnaire, statusInfo }) => {
  const ApplyStatus = {
    "PENDING" : "В ожидании",
    "APPROVED" : "Заявка одобрена",
    "DECLINED" : "Заявка отклонена"
  }
  const [statusUser, setStatusUser] = useState(ApplyStatus[statusInfo.applyStatus]);
  const userData = {
    id,
    email,
    phoneNumber,
    image: image?.url || userPhoto,
    firstName,
    lastName,
    questionnaire,
    statusInfo
  }

  const handleApprove = () => {
    try {
      axios
        .patch("https://girls4girls.herokuapp.com/api/training/apply", {
          applicationId: statusInfo.id,
          applyStatus: "APPROVED",
        })
        .then((res) => {
          console.log(res);
          setStatusUser("Заявка одобрена");
          setTimeout(() => {
            window.location.reload();
          }, 1500)
        });
    } catch (e) {
      console.log(e.error);
    }
  };

  const handleDecline = () => {
    try {
      axios
        .patch("https://girls4girls.herokuapp.com/api/training/apply", {
          applicationId: statusInfo.id,
          applyStatus: "DECLINED",
        })
        .then((res) => {
          console.log(res);
          setStatusUser("Заявка отклонена");
          setTimeout(() => {
            window.location.reload();
          }, 1500)
        });
    } catch (e) {
      console.log(e.error);
    }
  };
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
      <div>{textShortener(email, 20)}</div>
      <div className="text-[#616161]">{phoneNumber}</div>
      {/* {statusInfo.applyStatus === 'PENDING' ? <div className="flex items-center gap-2">
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
      </div> : statusInfo.applyStatus === 'APPROVED' ? <p className="text-base text-green-500">Одобрено</p> : <p className="text-base text-red-500">Отклонено</p>} */}
                {statusUser === "В ожидании" ? (
            <div className="flex gap-2">
              <SaveButton text={"Одобрить"} onClick={handleApprove} />
              <button
                type="button"
                className="rounded-[8px] bg-[transparent] text-[#9960C3] border border-[#9960C3] p-2"
                onClick={handleDecline}
              >
                Отклонить
              </button>
            </div>
          ) : (
            <p className="text-base text-green-500">{statusUser}</p>
          )}
      <button
        type="button"
        className={"justify-self-center underline text-[#616161]"}
        onClick={(e) => handleClick(userData)}
      >
        Открыть
      </button>
    </div>
  );
};

export default User;
