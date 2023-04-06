import React from "react";
import close from "../assets/images/close.svg";
import user from "../assets/images/user.svg";
import camera from "../assets/images/camera.svg";
import Input from "./Input";
import Dropwdown from "./Dropwdown";

const EditProfileModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6">
        <div className="flex items-start border-b relative justify-between">
          <h2 className="text-2xl font-bold pb-2 text-[#403A64] text-[1.3rem,_1.66vw,_1.8rem]">
            Редактировать информацию
          </h2>
          <img src={close} onClick={onClose} className="hover:cursor-pointer" />
        </div>
        <form className="flex flex-col items-center mt-4">
          <div className="relative">
            <img src={user} alt="user photo" className="" />
            <div className="rounded-full absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50"></div>
            <img
              src={camera}
              className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[40%]"
            />
          </div>
          <div className="flex gap-4">
            <Input label={'Имя'} value={'ex'} type='text'/>
            <Input label={'Фамилия'} value={'ex'} type='text'/>
          </div>
          <div>
            <Dropwdown label={'Пол'} options={['Мужской', 'Женский']}/>
          </div>
        </form>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
          Close
        </button>
      </div>
    </div>
  );
};

export default EditProfileModal;
