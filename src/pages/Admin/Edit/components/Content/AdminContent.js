import React from "react";
import AdminMain from "./AdminMain";
import AdminFooter from "./AdminFooter";
import FAQ from "./FAQ";

const AdminContent = () => {
  return (
    <div className="flex flex-col">
      <AdminMain />
      <FAQ />
      <AdminFooter />
    </div>
  );
};

export default AdminContent;
