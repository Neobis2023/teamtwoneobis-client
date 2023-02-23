import React from "react";
import facebook from '../../assets/images/auth/facebook.svg'
import google from '../../assets/images/auth/google.svg'
import { NavLink } from "react-router-dom";


const AnotherAuth = ({ to, text, action }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="text-[#292D32] text-base">
        или зарегистрироваться через аккаунт:
      </p>
      <div className="flex gap-5">
        <NavLink to="/">
          <img src={facebook} alt="facebook" />
        </NavLink>
        <NavLink to="/">
          <img src={google} alt="google" />
        </NavLink>
      </div>
      <p className="text-[#292D32] text-[1.25rem] font-semibold">
        {text}{" "}
        <NavLink className={"text-[#8860C3]"} to={to}>
          {action}
        </NavLink>
      </p>
    </div>
  );
};

export default AnotherAuth;
