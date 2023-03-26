import React from "react";
import { Outlet } from "react-router-dom";
import EditNavbar from "../Edit/components/EditNavbar";

const EditLayout = () => {
  return (
    <section className="bg-[#EAF0FF] w-full flex flex-col justify-end">
      <div className="px-6 min-h-[85%] mt-[15vh]">
        <h1 className="text-[#662D91] font-bold text-2xl mb-6">
          Редактировать контент
        </h1>
        <div className="rounded-[10px] bg-[#fff] grid grid-cols-[25%_75%] gap-4 pr-6 pb-4">
          <EditNavbar />
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default EditLayout;
