import React from "react";
import close from "../assets/images/close.svg";
import SaveButton from "../../components/SaveButton";

const Modal = ({
  id,
  firstName,
  lastName,
  email,
  phoneNumber,
  imgUrl,
  handleClose,
}) => {
  return (
    <div className="w-[100vw] h-[100vh] fixed left-0 z-10 top-0 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-[#f8f9fa] w-[70%] h-[95vh] rounded-[20px] px-10 py-6 relative overflow-y-scroll">
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex gap-2 items-center">
            <img src={imgUrl} alt="photo" className="w-[10%]" />
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
          <div className="text-[#000000] font-bold text-[1.25rem]">
            Регион: <span className="font-normal">Нарынская область</span>
          </div>
          <div className="text-[#000000] font-bold text-[1.25rem]">
            Укажите район и село:{" "}
            <span className="font-normal">Иссык-Атинская область, город Кант</span>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 mb-8">
            <p className="text-[#000000] font-bold text-[1.25rem]">Расскажите как вы узнали о нас?</p>
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
            <p className="text-[#000000] font-bold text-[1.25rem]">Расскажите как вы узнали о нас?</p>
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
            <p className="text-[#000000] font-bold text-[1.25rem]">Расскажите как вы узнали о нас?</p>
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
    </div>
  );
};

export default Modal;
