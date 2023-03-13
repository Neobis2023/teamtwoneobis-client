import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.svg'

const Logo = () => {
  return (
    <NavLink to="/" className="header__logo basis-1/6">
      <img src={logo} alt="logo" className="h-auto w-[50%] min-w-[5rem]" />
    </NavLink>
  );
};

export default Logo;
