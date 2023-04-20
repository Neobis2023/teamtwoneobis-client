import React from "react";
import Button from "./Button";
import close from "../assets/images/close.svg";
import { useNavigate } from "react-router-dom";

const Modal = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex flex-col">
      <div className="relative modal-content bg-white rounded-[20px] shadow-lg mx-auto my-12 p-4 max-h-[30vh] max-w-[40vw] overflow-y-auto flex-grow flex flex-col items-center justify-between">
        <h2 className="text-[clamp(1.3rem,_1.66vw,_1.8rem)] text-[#662D91] font-semibold mb-4">
          Вы успешно подали заявку на участие в тренинге. Результат будет
          отправлен на вашу электронную почту
        </h2>

        <img
          src={close}
          alt="close-icon"
          className="absolute top-0 right-0 hover:cursor-pointer"
          onClick={onClose}
        />

        <Button
          text={"На страницу Тренинги"}
          onClick={() => navigate("/trainings")}
        />
      </div>
    </div>
  );
};

export default Modal;
