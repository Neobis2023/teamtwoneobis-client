import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className="header__nav basis-3/6">
      <ul className="header__links flex justify-between gap-4">
        <li className={styles.header__link}>
          <NavLink to="mentorship">Менторство</NavLink>
        </li>
        <li className={styles.header__link}>
          <NavLink to="videoblog">Видеоблог</NavLink>
        </li>
        <li className={styles.header__link}>
          <NavLink to="trainings">Тренинги</NavLink>
        </li>
        <li className={styles.header__link}>
          <NavLink to="forum">Форум</NavLink>
        </li>
        <li className={styles.header__link}>
          <NavLink to="contacts">Контакты</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
