import React, { useEffect, useRef, useState } from "react";
import logo from "../../../images/logo.svg";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [language, setLanguage] = useState("РУС");
  

  return (
    // bg-[#EDEDED]
    <header className="h-fit py-4">
      <div className="myWrapper h-[inherit] flex justify-between gap-2 items-center">
        <div className="header__logo basis-1/6">
          <img src={logo} alt="logo" className="h-fit w-[50%]"/>
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
        <button className="header__login border py-2 px-6 bg-[#8860C3] rounded-[20px] text-white">Вход</button>
          <div className="header__lang ml-auto flex gap-2">
            <NavLink to={'/'} className={`${styles.language} hover:cursor-pointer ${language==='РУС' ? 'text-[#662D91]' : 'text-[rgba(102,_45,_145,_0.6)]'}`} onClick={() => setLanguage('РУС')}>РУС</NavLink>
            <NavLink to={'/'} className={`${styles.language} hover:cursor-pointer ${language==='КЫРГ' ? 'text-[#662D91]' : 'text-[rgba(102,_45,_145,_0.6)]'}`} onClick={() => setLanguage('КЫРГ')}>КЫРГ</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
