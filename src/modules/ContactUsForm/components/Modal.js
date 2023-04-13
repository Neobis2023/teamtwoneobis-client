import React, { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "../../../UI/Button/Button";
import close from '../assets/images/close.svg'
import { useNavigate } from "react-router-dom";

function Modal(props) {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Do something with the input value here
    props.onClose();
  }

  return (
    <div className="fixed z-20 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
        <div className="relative bg-white rounded-[20px] w-1/2 p-6">
          <h2 className="text-[rgba(71,_18,_128,_0.8)] font-semibold text-[clamp(2.8rem,_3.33vw,_3.3rem)] border-b w-fit mx-auto pb-2">
            Обратная связь
          </h2>
          <form className="p-8 flex flex-col gap-6" onSubmit={handleSubmit}>
            <Input label={"Тема"} />
            <Textarea label={"Расскажите нам что-нибудь..."} />
            <Button text={'Отправить'} className={'!w-[70%] mx-auto'}/>
          </form>
          <img src={close} alt="close" className="absolute top-2 right-2 hover:cursor-pointer" onClick={() => navigate('/')}/>
        </div>
      </div>
    </div>
  );
}

export default Modal;
