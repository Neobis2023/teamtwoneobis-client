import React from "react";
import close from "../assets/images/close.svg";
import SaveButton from "../../components/SaveButton";

const Modal = ({
  id,
  firstName,
  lastName,
  email,
  phoneNumber,
  image,
  handleClose,
  questionnaire,
}) => {
  console.log(questionnaire);
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
            {questionnaire.questionAnswers.map((qa) => {
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
                      <p className="font-normal">{qa.multipleChoices.map((choice) => <p>{choice}</p>)}</p>
                    </>
                  );
                default:
                  return null;
              }
            })}
            {/* <p className="text-[#000000] font-bold text-[1.25rem]">
              Расскажите как вы узнали о нас?
            </p>
            <p className="font-normal">
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Dorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum, ac aliquet odio mattis.Dorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquet odio mattis.Dorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <p className="text-[#000000] font-bold text-[1.25rem]">
              Расскажите как вы узнали о нас?
            </p>
            <p className="font-normal">
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Dorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum, ac aliquet odio mattis.Dorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquet odio mattis.Dorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <p className="text-[#000000] font-bold text-[1.25rem]">
              Расскажите как вы узнали о нас?
            </p>
            <p className="font-normal">
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Dorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum, ac aliquet odio mattis.Dorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquet odio mattis.Dorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis.
            </p> */}
          </div>
          <div className="flex gap-2">
            <SaveButton text={"Одобрить"} />
            <button
              type="button"
              className="rounded-[8px] bg-[transparent] text-[#9960C3] border border-[#9960C3] p-2"
            >
              Отклонить
            </button>
          </div>
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
