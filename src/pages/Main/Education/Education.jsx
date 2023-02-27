import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section className={styles.education}>
      <div className="myWrapper">
        <div className="text absolute top-0 bottom-0 left-0 right-0 w-3/4 h-3/4 m-auto flex justify-center flex-col">
          <h1 className="font-extrabold text-[clamp(2rem,_6vw,_6rem)] text-white leading-[6.5vw] mb-12">
            Образование для <span className="text-[#F8D4E4]">девушек</span> –
            прогресс для общества
          </h1>
          <p className="font-semibold text-[clamp(1rem,_3.8vw,_4rem)] text-white leading-[4.5vw]">
            Открываем новые возможности к становлению лучшей версией себя!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
