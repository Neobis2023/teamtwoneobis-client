import React from "react";
import UsersList from "../../components/UsersList";
import userPhoto from "../../assets/images/userPhoto.svg";
import { NavLink } from "react-router-dom";

const TrainingsSub = () => {
  const dataUsers = [
    {
      id: 1,
      imgUrl: userPhoto,
      firstName: "Чак",
      lastName: "Норрис",
      email: "david@gmail.com",
      phoneNumber: "+996709123456",
      isBlocked: false,
    },
    {
      id: 2,
      imgUrl: userPhoto,
      firstName: "Джими",
      lastName: "О Йанг",
      email: "linda@gmail.com",
      phoneNumber: "+99676599999",
      isBlocked: true,
    },
    {
      id: 3,
      imgUrl: userPhoto,
      firstName: "Спанч",
      lastName: "Боб",
      email: "spanchbob@gmail.com",
      phoneNumber: "+99670945645",
      isBlocked: true,
    },
    {
      id: 4,
      imgUrl: userPhoto,
      firstName: "Принц",
      lastName: "Чарльз",
      email: "prince@gmail.com",
      phoneNumber: "+99670456456",
      isBlocked: true,
    },
    {
      id: 5,
      imgUrl: userPhoto,
      firstName: "Диана",
      lastName: "Диана",
      email: "diana@gmail.com",
      phoneNumber: "+996709655555",
      isBlocked: false,
    },
    {
      id: 6,
      imgUrl: userPhoto,
      firstName: "Ханна",
      lastName: "Раппапорт",
      email: "henna@gmail.com",
      phoneNumber: "+99670000000",
      isBlocked: true,
    },
    {
      id: 7,
      imgUrl: userPhoto,
      firstName: "Эльза",
      lastName: "Шиф",
      email: "elsa@gmail.com",
      phoneNumber: "+9967345455",
      isBlocked: false,
    },
  ];
  return (
    <div className="mt-6">
      <NavLink
        to={"/"}
        className="w-fit text-[#9960C3] font-bold text-[0.875rem] bg-transparent border border-[#9960C3] px-3 py-2 rounded-[10px]"
      >
        Посмотреть анкету
      </NavLink>
      <UsersList data={dataUsers} />
    </div>
  );
};

export default TrainingsSub;
