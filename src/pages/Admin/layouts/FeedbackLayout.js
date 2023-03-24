import { Outlet } from "react-router-dom";
import Chat from "../Feedback/components/Chat";
import LeftTop from "../Feedback/components/LeftTop";
import userImg from '../Feedback/assets/images/user-img.svg'
import { useState } from "react";

const FeedbackLayout = () => {
  const users = [
    {
      id: 1,
      imgUrl: userImg,
      fullName: "Ажар Асылбаева",
      date: "02.03.2023",
      time: "9:38",
      email: "example@gmail.com",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
    },
    {
      id: 2,
      imgUrl: userImg,
      fullName: "Диана Диана",
      date: "02.03.2023",
      time: "9:38",
      email: "example@gmail.com",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
    },
    {
      id: 3,
      imgUrl: userImg,
      fullName: "Аселя",
      date: "02.03.2023",
      time: "9:38",
      email: "example@gmail.com",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
    },
    {
      id: 4,
      imgUrl: userImg,
      fullName: "Юлия",
      date: "02.03.2023",
      time: "9:38",
      email: "example@gmail.com",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
    },
    {
      id: 5,
      imgUrl: userImg,
      fullName: "Стефани",
      date: "02.03.2023",
      time: "9:38",
      email: "example@gmail.com",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
    },
    {
      id: 6,
      imgUrl: userImg,
      fullName: "Роуз",
      date: "02.03.2023",
      time: "9:38",
      email: "example@gmail.com",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
    },
    {
      id: 7,
      imgUrl: userImg,
      fullName: "Ажар Асылбаева",
      date: "02.03.2023",
      time: "9:38",
      email: "example@gmail.com",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
    },
  ];
  return (
    <section className="bg-[#EAF0FF] w-full flex flex-col justify-end">
      <div className="mx-6 pb-6 pt-4 px-4 overflow-hidden rounded-[10px] min-h-[85%] mt-[15vh] bg-[#fff] grid grid-cols-[30%_70%] gap-4 ">
          <div className="h-full">
            <LeftTop />
            <Outlet />
          </div>
          <Chat user={users[0]}/>
      </div>
    </section>
  );
};

export default FeedbackLayout;
