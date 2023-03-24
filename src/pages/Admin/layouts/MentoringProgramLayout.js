import React from 'react'
import { Outlet } from "react-router-dom";
import Events from '../Applications/components/Events';


const MentoringProgramLayout = () => {
    const dataEvents = [
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
  return (
    <>
        <Events data={dataEvents} event={'mentoring'}/>
        <Outlet />
    </>
  )
}

export default MentoringProgramLayout