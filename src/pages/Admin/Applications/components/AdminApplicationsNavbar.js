import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { setCurrentTrainingIdApplications } from "../../../../helpers/reduxToolkit/adminSlice.";

const AdminApplicationsNavbar = () => {
  const location = useLocation();
  const isActiveMentoringProgram = location.pathname.startsWith('/admin/applications/mentoring-program');
  const isActiveTrainings = location.pathname.startsWith('/admin/applications/trainings');
  const isActiveForums = location.pathname.startsWith('/admin/applications/forums');
  console.log(location)
  const dispatch = useDispatch();
  const [trainings, setTrainings] = useState("");
  useEffect(() => {
    axios.get("https://girls4girls.herokuapp.com/api/training").then((res) => { 
      setTrainings(res.data.data)
      dispatch(setCurrentTrainingIdApplications(res.data?.data[0]?.id))
   });
  }, [])


  const dataEventsMentoringProgram = [
    {
        id: 1, 
        title: 'Поток 1',
        status: 'Закрыт',
        deadline: '03.02.2023'
    },
    {
        id: 2, 
        title: 'Поток 2',
        status: 'Закрыт',
        deadline: '03.02.2023'
    },
    {
        id: 3, 
        title: 'Поток 3',
        status: 'Открыт',
        deadline: '03.02.2023'
    }
  ]

  const dataEventsTrainings = [
    {
        id: 1, 
        title: 'Образование',
        status: 'Закрыт',
        deadline: '03.02.2023',
        city: 'Нарын'
    },
    {
        id: 2, 
        title: 'Финансы',
        status: 'Закрыт',
        deadline: '03.02.2023',
        city: 'Ош'
    },
    {
        id: 3, 
        title: 'Кухня',
        status: 'Открыт',
        deadline: '03.02.2023',
        city: 'Бишкек'
    }
  ]

  const dataEventsForums = [
    {
        id: 1, 
        title: 'Менторство',
        status: 'Закрыт',
        deadline: '03.02.2023',
        city: 'Нарын'
    },
    {
        id: 2, 
        title: 'Как работает наша система?',
        status: 'Закрыт',
        deadline: '03.02.2023',
        city: 'Ош'
    },
    {
        id: 3, 
        title: 'Кухня',
        status: 'Открыт',
        deadline: '03.02.2023',
        city: 'Бишкек'
    }
  ]

  return (
    <div className="text-[#662D91] flex gap-4 mb-4">
      <NavLink to={`/admin/applications/mentoring-program/${dataEventsMentoringProgram[0].title.toLowerCase().split(' ').join('-')}`} className={`nav-applications ${isActiveMentoringProgram ? 'active' : ''} bg-[#FDFDFD] px-4 py-3 rounded-[10px]`}>
        Менторская программа
      </NavLink>
      <NavLink to={`/admin/applications/trainings/${trainings[0]?.title.toLowerCase().split(' ').join('-')}`} className={`nav-applications ${isActiveTrainings ? 'active' : ''} bg-[#FDFDFD] px-4 py-3 rounded-[10px]`}>
        Тренинги
      </NavLink>
      <NavLink to={`/admin/applications/forums/${dataEventsForums[0].title.toLowerCase().split(' ').join('-')}`} className={`nav-applications ${isActiveForums ? 'active' : ''} bg-[#FDFDFD] px-4 py-3 rounded-[10px]`}>
        Форумы
      </NavLink>
    </div>
  );
};

export default AdminApplicationsNavbar;
