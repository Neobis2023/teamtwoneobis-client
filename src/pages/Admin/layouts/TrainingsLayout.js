import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Events from "../Applications/components/Events";
import ApplicationsSlider from "../Applications/helpers/swiper/ApplicationsSlider";
import axios from "axios";

const TrainingsLayout = () => {
  const dataEvents = [
    {
      id: 1,
      title: "Образование",
      status: "Закрыт",
      deadline: "03.02.2023",
      city: "Нарын",
    },
    {
      id: 2,
      title: "Финансы",
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
      title: "Жизнь",
      status: "Открыт",
      deadline: "03.02.2023",
      city: "Бишкек",
    },
    {
      id: 5,
      title: "Работа",
      status: "Открыт",
      deadline: "03.02.2023",
      city: "Бишкек",
    },
    {
      id: 6,
      title: "Депрессия",
      status: "Открыт",
      deadline: "03.02.2023",
      city: "Бишкек",
    },
  ];
  const [trainings, setTrainings] = useState("");
  useEffect(() => {
    axios.get("https://girls4girls.herokuapp.com/api/training").then((res) => setTrainings(res.data.data));
  }, [])

  return (
    <>
      {/* <Events data={dataEvents} event={"trainings"} /> */}
      <ApplicationsSlider data={trainings} event={"trainings"}/>
      <Outlet />
    </>
  );
};

export default TrainingsLayout;
