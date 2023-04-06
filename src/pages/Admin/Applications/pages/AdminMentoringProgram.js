import React, { useState } from "react";
import Events from "../components/Events";
import userPhoto from "../assets/images/userPhoto.svg";
import UsersList from "../components/UsersList";

const AdminMentoringProgram = () => {
  const [program, setProgram] = useState([
    {
      id: 1,
      title: "Поток 1",
      status: "Закрыт",
      deadline: "03.02.2023",
    },
  ]);
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
    <div>
      <Events data={program} event={"mentoring"} />
      <UsersList data={dataUsers} />
    </div>
  );
};

export default AdminMentoringProgram;
