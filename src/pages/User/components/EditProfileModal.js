import React, { useEffect, useState } from "react";
import close from "../assets/images/close.svg";
import user from "../assets/images/user.svg";
import camera from "../assets/images/camera.svg";
import Input from "./Input";
import Dropwdown from "./Dropwdown";
import InputDate from "./InputDate";
import PasswordChange from "./PasswordChange";
import axios from "../api/axios";

const EditProfileModal = ({ onClose }) => {
  const [saveStatus, setSaveStatus] = useState("");
  const [token, setToken] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentGender, setCurrentGender] = useState("");
  const [currentRegion, setCurrentRegion] = useState("");
  const [currentPhoneNumber, setCurrentPhoneNumber] = useState("");
  const [currentFirstName, setCurrentFirstName] = useState("");
  const [currentLastName, setCurrentLastName] = useState("");
  const [currentUserImage, setCurrentUserImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const [image, setImage] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(typeof date, date, "calendar");
  };

  const handleGenderChange = (option) => {
    setCurrentGender(option);
  };

  const handleRegionChange = (option) => {
    setCurrentRegion(option);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleImageClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", handleImageChange);
    input.click();
  };

  const handleSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const date = new Date(selectedDate);
    const formData = new FormData();
    formData.append("image", image);
    const updatedData = {
      email: currentEmail,
      firstName: currentFirstName,
      lastName: currentLastName,
      phoneNumber: currentPhoneNumber,
      dateOfBirth: date.toISOString(),
      gender: currentGender === "Мужской" ? "MALE" : "FEMALE",
      region:
        currentRegion === "Ош"
          ? "OSH"
          : "Чуй"
          ? "CHUI"
          : "Кант"
          ? "KANT"
          : null,
    };
    if (user.phoneNumber === currentPhoneNumber) delete updatedData.phoneNumber;
    if (user.email === currentEmail) delete updatedData.email;

    console.log(updatedData, "data sent");
    try {
      const response = await axios.patch("/user/profile", updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response, "resp for info change");

      if (image) {
        const res = await axios.post("/user", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res, "this is req with imaage");
      }
      const getUser = await axios.get("/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userInfo = {
        email: getUser.data.email,
        firstName: getUser.data.firstName,
        lastName: getUser.data.lastName,
        phoneNumber: getUser.data.phoneNumber,
        region: getUser.data.region,
        role: getUser.data.role,
        status: getUser.data.status,
        gender: getUser.data.gender,
        id: getUser.data.id,
        image: getUser.data.image,
        dateOfBirth: getUser.data.dateOfBirth,
      };
      localStorage.setItem("user", JSON.stringify(userInfo));
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      setSaveStatus("Данные сохранены");
    } catch (e) {
      console.log(e, "err");
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    setToken(token);
    const gender = user.gender;
    setCurrentEmail(user.email);
    setCurrentUserImage(user.image.url);
    setCurrentRegion(user.region);
    setCurrentPhoneNumber(user.phoneNumber);
    setCurrentFirstName(user.firstName);
    setCurrentLastName(user.lastName);
    setSelectedDate(user.dateOfBirth);
    return gender === "FEMALE"
      ? setCurrentGender("Женский")
      : setCurrentGender("Мужской");
  }, []);
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6">
        <div className="flex items-start border-b relative justify-between">
          <h2 className="text-2xl font-bold pb-2 text-[#403A64] text-[1.3rem,_1.66vw,_1.8rem]">
            Редактировать информацию
          </h2>
          <img src={close} onClick={onClose} className="hover:cursor-pointer" />
        </div>
        <form className="flex flex-col items-center mt-4 border-b pb-2">
          <div
            className="relative hover:cursor-pointer"
            onClick={handleImageClick}
          >
            <img
              src={image ? URL.createObjectURL(image) : currentUserImage}
              alt="user photo"
              className="h-24 w-24 rounded-full"
            />
            <div className="rounded-full absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50"></div>
            <img
              src={camera}
              className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[40%]"
            />
          </div>
          <div className="flex gap-3 justify-between mt-2 w-full">
            <Input
              label={"Имя"}
              value={currentFirstName}
              type="text"
              onChange={(e) => setCurrentFirstName(e.target.value)}
            />
            <Input
              label={"Фамилия"}
              value={currentLastName}
              type="text"
              onChange={(e) => setCurrentLastName(e.target.value)}
            />
          </div>
          <div className="flex w-full gap-3 justify-between mt-2">
            <Dropwdown
              label={"Пол"}
              options={["Мужской", "Женский"]}
              value={currentGender}
              onChange={handleGenderChange}
            />
            <InputDate
              label={"Дата рождения"}
              selected={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="flex gap-3 justify-between mt-2 w-full">
            <Dropwdown
              label={"Выберите регион"}
              options={["Кант", "Чуй", "Ош"]}
              onChange={handleRegionChange}
              value={!currentRegion ? "Не выбрано" : currentRegion}
            />
            <Input
              label={"Номер телефона"}
              value={currentPhoneNumber}
              onChange={(e) => setCurrentPhoneNumber(e.target.value)}
              type="text"
            />
          </div>
          {!saveStatus ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-[#8860C3] text-white px-4 py-2 rounded-lg mt-4 mr-auto w-[48%] mb-2"
            >
              Сохранить и выйти
            </button>
          ) : (
            <p className="text-base text-green-500">{saveStatus}</p>
          )}
        </form>
        <PasswordChange />
      </div>
    </div>
  );
};

export default EditProfileModal;
