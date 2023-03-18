import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";


const AdminLayout = () => {
  return (
    <section className="flex">
      <Sidebar />
      <Outlet />
    </section>
  );
};

export default AdminLayout;
