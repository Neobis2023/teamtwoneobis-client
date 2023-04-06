import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import edit from "../../assets/images/edit.svg";

const VideoblogNav = () => {
  const location = useLocation();
  // const isActiveList = location.pathname.startsWith("/admin/edit/videoblog")
  return (
    <div className="text-[#292D32]">
      <div className="pt-3 bg-[#EAF0FF] p-4 rounded-[10px]">
        <h2 className="text-[#662D91] font-bold text-[1rem] mb-2">Навигация</h2>
        <div className="flex flex-col gap-4">
          <NavLink
            to={"/admin/edit/videoblog/list"}
            className="videoblogLink text-[0.875rem] text-[#79768D] flex gap-1"
          >
            <img src={edit} />
            Каталог
          </NavLink>
          <NavLink
            to={"/admin/edit/videoblog/categories"}
            className="videoblogLink text-[0.875rem] text-[#79768D] flex gap-1"
          >
            <img src={edit} />
            Категории
          </NavLink>
          <NavLink
            to={"/admin/edit/videoblog/tests"}
            className="videoblogLink text-[0.875rem] text-[#79768D] flex gap-1"
          >
            <img src={edit} />
            Тесты
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default VideoblogNav;
