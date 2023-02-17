import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section className={styles.education}>
      <div className="myWrapper">
        <div className="text absolute top-0 bottom-0 left-0 right-0 w-3/4 h-3/4 m-auto flex justify-center flex-col">
          <h1 className="font-extrabold text-7xl text-white leading-[88px] mb-12">
            Образование для <span className="text-[#F8D4E4]">девушек</span> –
            прогресс для общества
          </h1>
          <p className="font-semibold text-5xl text-white leading-[56px]">
            Открываем новые возможности к становлению лучшей версией себя!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
