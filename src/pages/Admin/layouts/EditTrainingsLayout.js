import React from 'react'
import { Outlet } from 'react-router-dom';

const EditTrainingsLayout = () => {
  return (
    <div className="">
      <h2 className="text-[#662D91] font-bold text-[1.5rem] pt-6 mb-6">Тренинги</h2>  
        <Outlet />
    </div>
  );
}

export default EditTrainingsLayout