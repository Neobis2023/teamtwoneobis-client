import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from './Navbar.module.css';
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const isActiveVideoblog = location.pathname.startsWith('/videoblog');

  const scrollToBottom = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }
  
  return (
    <nav className="header__nav basis-3/6">
      <ul className="header__links flex justify-between gap-4">
        <li className={styles.header__link}>
          <NavLink to="mentorship" className={'nav'} isActive={() => location.pathname === '/mentorship'}>{t('Main.Nav.Mentoring')}</NavLink>
        </li>
        <li className={styles.header__link}>
          <NavLink to={`videoblog/1`} className={`nav ${isActiveVideoblog ? "active" : ""}`}>{t('Main.Nav.Videoblog')}</NavLink>
        </li>
        <li className={styles.header__link}>
          <NavLink to="trainings" className={'nav'} >{t('Main.Nav.Trainings')}</NavLink>
        </li>
        <li className={styles.header__link}>
          <NavLink to="forum" className={'nav'} isActive={() => location.pathname === '/forum'}>{t('Main.Nav.Forum')}</NavLink>
        </li>
        <li className={styles.header__link}>
          {/*<NavLink to="contacts" onclick className={'nav'} isActive={() => location.pathname === '/contacts'}>{t('Main.Nav.Contacts')}</NavLink>*/}
          <p onClick={scrollToBottom} style={{ cursor: 'pointer'}}>{t('Main.Nav.Contacts')}</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
