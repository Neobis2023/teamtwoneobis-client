import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  const isActiveVideoblog = location.pathname.startsWith('/videoblog');

  return (
    <nav className="header__nav basis-3/6">
      <ul className="header__links flex justify-between gap-4">
        <li className={styles.header__link}>
          <NavLink to="mentorship" className={'nav'} isActive={() => location.pathname === '/mentorship'}>Менторство</NavLink>
        </li>
        <li className={styles.header__link}>
          <NavLink to={`videoblog/1`} className={`nav ${isActiveVideoblog ? "active" : ""}`}>Видеоблог</NavLink>
        </li>
        <li className={styles.header__link}>
          <NavLink to="trainings" className={'nav'} >Тренинги</NavLink>
        </li>
        <li className={styles.header__link}>
          <NavLink to="forum" className={'nav'} isActive={() => location.pathname === '/forum'}>Форум</NavLink>
        </li>
        <li className={styles.header__link}>
          <NavLink to="contacts" className={'nav'} isActive={() => location.pathname === '/contacts'}>Контакты</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
