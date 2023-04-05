import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../../UI/Button/Button";
import styles from './Language.module.css';

const Language = () => {
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    setLanguage('РУС');
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
      <NavLink to="/signin" className={"basis-1/2"}>
        <Button text={"Вход"} className={'!rounded-[20px] font-semibold text-[clamp(0.8rem,_1.1vw,_1.3rem)]'}/>
      </NavLink>
    </div>
  );
};

export default Language;
