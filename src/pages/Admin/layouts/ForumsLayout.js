import React from "react";
import { Outlet } from "react-router-dom";
import Events from "../Applications/components/Events";

const ForumsLayout = () => {
  const dataEvents = [
    {
      id: 1,
      title: "Менторство",
      status: "Закрыт",
      deadline: "03.02.2023",
      city: "Нарын",
    },
    {
      id: 2,
      title: "Как работает наша система?",
      status: "Закрыт",
      deadline: "03.02.2023",
      city: "Ош",
    },
    {
      id: 3,
      title: "Кухня",
      status: "Открыт",
      deadline: "03.02.2023",
      city: "Бишкек",
    },
  ];
  return (
    <>
      <Events data={dataEvents} event={"forums"} />
      <Outlet />
    </>
  );
};

export default ForumsLayout;
