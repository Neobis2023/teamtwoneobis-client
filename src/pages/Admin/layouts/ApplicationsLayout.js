import { Outlet } from "react-router-dom";
import AdminApplicationsNavbar from "../Applications/components/AdminApplicationsNavbar";



const ApplicationsLayout = () => {
  return (
    <section className="bg-[#EAF0FF] w-full flex flex-col justify-end">
        <div className="px-6 min-h-[85%] mt-[15vh]">
            <AdminApplicationsNavbar />
            <Outlet />
        </div>
    </section>
  );
};

export default ApplicationsLayout;