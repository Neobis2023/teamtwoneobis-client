import React from "react";
import { Outlet } from "react-router-dom";
import VideoblogNav from "../Edit/components/VideoblogNav";
import Sidebar from "../Sidebar/Sidebar";

const ListLayout = () => {
  return (
    <div className="">
      <h2 className="text-[#662D91] font-bold text-[1.5rem] pt-6">Видеоблог</h2>  
      <div className="flex gap-2 mt-6">
        <VideoblogNav />
        <Outlet />
      </div>
    </div>
  );
};

export default ListLayout;
