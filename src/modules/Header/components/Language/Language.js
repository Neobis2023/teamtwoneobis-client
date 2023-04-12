import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../../../UI/Button/Button";
import styles from './Language.module.css';
import userIcon from '../../assets/images/user.svg'

const Language = () => {
  const [language, setLanguage] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  const handleUserClick = () => {
    setUserMenuOpen((current) => !current)
    console.log(userMenuOpen)
  }

  const handleLogout = () => {
    localStorage.clear();
    setCurrentUser("");
    navigate('/');
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setLanguage('РУС');
    setCurrentUser(user);
    setUserMenuOpen(false);
  }, [])  
  
  return (
    <div className="header__lang-login basis-1/6 flex gap-x-6 h-fit items-center">
      <div className="header__lang ml-auto flex gap-2 basis-1/2 justify-end">
        <p
          className={`${styles.language} hover:cursor-pointer ${
            language === "РУС"
              ? `${styles.chosen} text-[#662D91]`
              : "text-[rgba(102,_45,_145,_0.6)]"
          }`}
          onClick={() => setLanguage("РУС")}
        >
          РУС
        </p>
        <p
          className={`${styles.language} hover:cursor-pointer ${
            language === "КЫРГ"
              ? `${styles.chosen} text-[#662D91]`
              : "text-[rgba(102,_45,_145,_0.6)]"
          }`}
          onClick={() => setLanguage("КЫРГ")}
        >
          КЫРГ
        </p>
      </div>
      {currentUser ? <div className="flex gap-2 items-center text-[#662D91] text-[0.8rem,_clamp(1.1vw,_1.3rem)] font-bold relative hover:cursor-pointer" onClick={handleUserClick} >
        <img src={currentUser.image.url || userIcon} className="w-10 h-10 rounded-full"/>
        {/* <p>{currentUser.firstName}</p> */}
        {userMenuOpen ? <div className="absolute top-[50px] right-0 border rounded-md p-4 bg-[white] z-15">
          <NavLink to={`/profile/${currentUser.id}`}>Профиль</NavLink>
          <div onClick={handleLogout}>Выйти</div>
        </div> : null}
      </div>  :       <NavLink to="/signin" className={"basis-1/2"}>
        <Button text={"Вход"} className={'!rounded-[20px] font-semibold text-[clamp(0.8rem,_1.1vw,_1.3rem)]'}/>
      </NavLink>}
    </div>
  );
};

export default Language;
