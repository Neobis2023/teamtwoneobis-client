import React, { useEffect, useState } from "react";
import logo from "../../../images/landing/logo.svg";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    setLanguage('РУС');
  }, [])
  

  return (
    // bg-[#EDEDED]
    <header className={`h-fit py-4 bg-[#FAFAFA]`}>
      <div className="myWrapper h-[inherit] flex justify-between gap-2 items-center">
        <NavLink to='/' className="header__logo basis-1/6">
          <img src={logo} alt="logo" className="h-auto w-[50%] min-w-[5rem]"/>
        </NavLink>
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
        <div className="header__lang-login basis-1/6 flex gap-x-2 h-fit items-center">
          <NavLink to='/signin' className={'basis-1/2'}><button className="header__login border py-2 px-6 hover:bg-[#E8E5FF] transition hover:text-[#662D91] bg-[#8860C3] rounded-[20px] w-full text-white">Вход</button></NavLink>
          <div className="header__lang ml-auto flex gap-2 basis-1/2 justify-end">
            <NavLink to={'/'} className={`${styles.language} hover:cursor-pointer ${language==='РУС' ? `${styles.chosen} text-[#662D91]`: 'text-[rgba(102,_45,_145,_0.6)]'}`} onClick={() => setLanguage('РУС')}>РУС</NavLink>
            <NavLink to={'/'} className={`${styles.language} hover:cursor-pointer ${language==='КЫРГ' ? `${styles.chosen} text-[#662D91]` : 'text-[rgba(102,_45,_145,_0.6)]'}`} onClick={() => setLanguage('КЫРГ')}>КЫРГ</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
