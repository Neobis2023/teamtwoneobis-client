import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./assets/images/logo.svg";
import chart from "./assets/images/chart.svg";
import edit from "./assets/images/edit.svg";
import applications from "./assets/images/applications.svg";
import users from "./assets/images/users.svg";
import feedback from "./assets/images/feedback.svg";
import logout from "./assets/images/logout.svg";
import axios from "axios";

const Sidebar = () => {
  const location = useLocation();
  const isActiveApplications = location.pathname.startsWith("/admin/applications");
  const isActiveFeedback = location.pathname.startsWith("/admin/feedback");
  const isActiveEdit = location.pathname.startsWith("/admin/edit");
  const isActiveStatistics = location.pathname.startsWith("/admin/statistics");
  const isActiveUsers = location.pathname.startsWith("/admin/users");
  // const dataEvents = [
  //   {
  //       id: 1, 
  //       title: 'Поток 1',
  //       status: 'Закрыт',
  //       deadline: '03.02.2023'
  //   },
  //   {
  //       id: 2, 
  //       title: 'Поток 2',
  //       status: 'Закрыт',
  //       deadline: '03.02.2023'
  //   },
  //   {
  //       id: 3, 
  //       title: 'Поток 3',
  //       status: 'Открыт',
  //       deadline: '03.02.2023'
  //   }
  // ]
  const [trainings, setTrainings] = useState("");
  useEffect(() => {
    axios.get("https://girls4girls.herokuapp.com/api/training").then((res) => setTrainings(res.data.data));
  }, [])
  console.log(trainings, 'from sidebar')
  return (
    <section className="bg-[#FDFDFD] min-w-[270px] h-screen">
      <div className="flex flex-col h-full fixed min-h-[650px] w-[270px]">
        <div className="h-[15%] flex items-center px-8">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <nav className="h-[70%]">
          <ul className="text-[#79768D] flex flex-col gap-2">
            <li>
              <NavLink
                to={"/admin/statistics"}
                className={`nav-admin flex items-center gap-2 py-3 px-8 ${isActiveStatistics ? "active" : ""}`}
                isActive={() => location.pathname === "/admin/statistics"}
              >
                <img src={chart} alt="chart" className="" />
                <p className="text-[0.875rem] font-semibold">Статистика</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin/edit/content"}
                className={`nav-admin flex items-center gap-2 py-3 px-8 ${isActiveEdit ? "active" : ""}`}
                
              >
                <img
                  src={edit}
                  alt="chart"
                  className="
                  "
                />
                <p className="text-[0.875rem] font-semibold">
                  Редактировать контент
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={trainings && `/admin/applications/trainings/${trainings[0].title.toLowerCase().split(' ').join('-')}`}
                className={`nav-admin flex items-center gap-2 py-3 px-8 ${
                  isActiveApplications ? "active" : ""
                }`}
              >
                <img src={applications} alt="chart" />
                <p className="text-[0.875rem] font-semibold">Заявки</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin/users"}
                className={`nav-admin flex items-center gap-2 py-3 px-8 ${isActiveUsers ? "active" : ""}`}
                
              >
                <img
                  src={users}
                  alt="chart"
                  className="
                  "
                />
                <p className="text-[0.875rem] font-semibold">Пользователи</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin/feedback/all"}
                className={`nav-admin flex items-center gap-2 py-3 px-8 ${
                  isActiveFeedback ? "active" : ""
                }`}
              >
                <img
                  src={feedback}
                  alt="chart"
                  className="
                  "
                />
                <p className="text-[0.875rem] font-semibold">Обратная связь</p>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="h-[15%] px-8">
          <NavLink to="/" className={"flex gap-2 items-center text-[#79768D]"}>
            <p className="text-[0.875rem] font-semibold">Выход</p>
            <img src={logout} alt="logout" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
