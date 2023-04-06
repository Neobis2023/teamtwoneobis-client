import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Events from "../Applications/components/Events";

const MentoringProgramLayout = () => {
  const [program, setProgram] = useState([
    {
      id: 1,
      title: "Поток 1",
      status: "Закрыт",
      deadline: "03.02.2023",
    },
  ]);
  return (
    <>
      <Events data={program} event={"mentoring"} />
      <Outlet />
    </>
  );
};

export default MentoringProgramLayout;
