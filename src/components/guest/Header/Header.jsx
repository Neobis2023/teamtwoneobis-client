import React from "react";
import logo from "../../../images/logo.png";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    // bg-[#EDEDED]
    <header className="h-fit py-4">
      <div className="myWrapper h-[inherit] flex justify-between gap-2 items-center">
        <div className="header__logo basis-1/6">
          <img src={logo} alt="logo" />
        </div>
        <nav className="header__nav basis-3/6">
          <ul className="header__links flex justify-between gap-4">
            <li className={styles.header__link}>
              <NavLink to="/">Менторство</NavLink>
            </li>
            <li className={styles.header__link}>
              <NavLink to="/">Видеоблог</NavLink>
            </li>
            <li className={styles.header__link}>
              <NavLink to="/">Тренинги</NavLink>
            </li>
            <li className={styles.header__link}>
              <NavLink to="/">Форум</NavLink>
            </li>
            <li className={styles.header__link}>
              <NavLink to="/">Контакты</NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__lang-login basis-1/6 flex gap-1 h-fit items-center">
          <div className="header__lang ml-auto border py-1 px-2 rounded-md h-fit border-black hover:cursor-pointer flex gap-1">
            <LanguageIcon />
            Русский
            <ArrowDropDownIcon />
          </div>
          <button className="header__login border py-2 px-4 bg-[linear-gradient(90deg,_#311280_0%,_#A484B7_51.77%,_#471280_108.03%)] rounded-md text-white">Вход</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
