import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './Language.module.css';

const Language = () => {
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    setLanguage('РУС');
  }, [])  
  
  return (
    <div className="header__lang-login basis-1/6 flex gap-x-2 h-fit items-center">
      <NavLink to="/signin" className={"basis-1/2"}>
        <button className="header__login border py-2 px-6 hover:bg-[#E8E5FF] transition hover:text-[#662D91] bg-[#8860C3] rounded-[20px] w-full text-white">
          Вход
        </button>
      </NavLink>
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
    </div>
  );
};

export default Language;
