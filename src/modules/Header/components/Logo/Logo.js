import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.svg'

const Logo = () => {
  return (
    <NavLink to="/" className="header__logo basis-1/6">
      <img src={logo} alt="logo" className="h-auto w-[clamp(5.175rem,_5.972vw,_5.675rem)] min-w-[5rem]" />
    </NavLink>
  );
};

export default Logo;
