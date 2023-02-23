import React from "react";
import { NavLink } from "react-router-dom";
import instagram from '../../../assets/images/authFooter/instagram-footer.svg';
import youtube from '../../../assets/images/authFooter/youtube-footer.svg';
import logo from '../../../assets/images/authFooter/logo-footer.svg';

const AuthFooter = () => {
  return (
    <footer className="bg-[#FFFFFF] relative z-20">
      <div className="myWrapper flex justify-between items-center py-6">
        <div className="flex items-center gap-12">
          {" "}
          <img src={logo} alt="" className="w-[60%] h-fit max-w-[200px] mx-auto my-auto"/>
          <div className="flex flex-col text-[#9795B5] font-normal text-1.08rem">
            <NavLink to={"/"}>Номер</NavLink>
            <NavLink to={"/"}>Email</NavLink>
          </div>
        </div>
        <div className="flex gap-4">
          <NavLink to='/'><img src={instagram} alt="instagram" /></NavLink>
          <NavLink to='/'><img src={youtube} alt="youtube" /></NavLink>
        </div>
      </div>
    </footer>
  );
};

export default AuthFooter;
