import React from "react";
import { Outlet } from "react-router-dom";
import Events from "../Applications/components/Events";
import ApplicationsSlider from "../Applications/helpers/swiper/ApplicationsSlider";

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
    {
      id: 4,
      title: "Обучение за границей",
      status: "Открыт",
      deadline: "03.02.2023",
      city: "Бишкек",
    },
    {
      id: 5,
      title: "Важность иностранных языков",
      status: "Открыт",
      deadline: "03.02.2023",
      city: "Бишкек",
    },
    {
      id: 6,
      title: "Илона Маск",
      status: "Открыт",
      deadline: "03.02.2023",
      city: "Бишкек",
    },
  ];
  return (
    <>
      {/* <Events data={dataEvents} event={"forums"} /> */}
      <ApplicationsSlider data={dataEvents} event={"trainings"}/>
      <Outlet />
    </>
  );
};

export default ForumsLayout;
