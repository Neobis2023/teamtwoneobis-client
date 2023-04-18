import React, { useEffect, useState } from "react";
import close from "../assets/images/close.svg";
import SaveButton from "../../components/SaveButton";
import axios from "axios";

const Modal = ({
  id,
  firstName,
  lastName,
  email,
  phoneNumber,
  image,
  handleClose,
  questionnaire,
  statusInfo,
}) => {
  const ApplyStatus = {
    "PENDING" : "В ожидании",
    "APPROVED" : "Заявка одобрена",
    "DECLINED" : "Заявка отклонена"
  } 
  const [status, setStatus] = useState(ApplyStatus[statusInfo.applyStatus]);

  console.log(questionnaire, "questionnaire");
  console.log(statusInfo, "this is status info");
  console.log(status)

  const handleApprove = () => {
    try {
      axios
        .patch("https://girls4girls.herokuapp.com/api/training/apply", {
          applicationId: statusInfo.id,
          applyStatus: "APPROVED",
        })
        .then((res) => {
          console.log(res);
          setStatus("Заявка одобрена");
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
          setStatus("Заявка отклонена");
          setTimeout(() => {
            window.location.reload();
          }, 1500)
        });
    } catch (e) {
      console.log(e.error);
    }
  };
  return (
    <>
      <div className="w-[100vw] h-[100vh] fixed left-0 top-0 flex items-center justify-center bg-black opacity-40"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#f8f9fa] w-[70%] h-[95vh] rounded-[20px] px-10 py-6 z-30 overflow-y-scroll m-auto modal-applications">
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex gap-2 items-center">
            <img src={image} alt="photo" className="w-12 h-12 rounded-full" />
            <div className="flex flex-col">
              <div className="text-[#000000] font-bold text-[1.25rem]">
                Имя: <span className="font-normal">{firstName}</span>
              </div>
              <div className="text-[#000000] font-bold text-[1.25rem]">
                Фамилия: <span className="font-normal">{lastName}</span>
              </div>
            </div>
          </div>
          <div className="text-[#000000] font-bold text-[1.25rem]">
            Email: <span className="font-normal">{email}</span>
          </div>
          <div className="text-[#000000] font-bold text-[1.25rem]">
            Номер телефона: <span className="font-normal">{phoneNumber}</span>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 mb-8">
            {questionnaire?.questionAnswers.map((qa) => {
              switch (qa.type) {
                case "TEXT":
                  return (
                    <>
                      <p className="text-[#000000] font-bold text-[1.25rem]">
                        {qa.questionText}
                      </p>
                      <p className="font-normal">{qa.text}</p>
                    </>
                  );
                case "CHECK_BOX":
                  return (
                    <>
                      <p className="text-[#000000] font-bold text-[1.25rem]">
                        {qa.questionText}
                      </p>
                      <p className="font-normal">
                        {qa.multipleChoices.map((choice) => (
                          <p>{choice}</p>
                        ))}
                      </p>
                    </>
                  );
                case "VARIANTS":
                  return (
                    <>
                      <p className="text-[#000000] font-bold text-[1.25rem]">
                        {qa.questionText}
                      </p>
                      <p className="font-normal">{qa.answerText}</p>
                    </>
                  );
                default:
                  return null;
              }
            })}
          </div>
          {status === "В ожидании" ? (
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
            <p className="text-base text-green-500">{status}</p>
          )}
        </div>
        <img
          src={close}
          className="fixed top-[5%] right-[17%] hover:cursor-pointer"
          onClick={handleClose}
        />
      </div>
    </>
  );
};

export default Modal;
