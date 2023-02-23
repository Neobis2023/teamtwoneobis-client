import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
