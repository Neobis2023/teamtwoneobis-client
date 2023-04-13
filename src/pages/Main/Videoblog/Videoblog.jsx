import React from "react";
import curlyArrow from './assets/images/arrowcurly.svg';
import DetailsButton from "../../../UI/DetailsButton/DetailsButton";
import computer from './assets/images/computer.png';
import MySlider from "../../../helpers/swiper/MySlider";

const Videoblog = () => {
  document.cookie = "myCookie=value; SameSite=Strict";
  const videoUrls = [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=zvTr3P43yUg",
    "https://www.youtube.com/watch?v=zvTr3P43yUg",
    "https://www.youtube.com/watch?v=zvTr3P43yUg",
    "https://www.youtube.com/watch?v=zvTr3P43yUg",
  ];

  return (
    <section
      className="bg-[rgba(232,_229,_255,_0.4)] py-20 videoblog"
    >
      <div>
        <div className="flex gap-5 myWrapper videoblog-title">
          <h2 className="mySubtitle">Видеоблог/Study plan</h2>
          <img src={curlyArrow} alt="curly" className="h-fit w-[30%]"/>
        </div>
        <MySlider videoblog={videoUrls} />
        <div className="relative">
          <img
            src={computer}
            alt="computer"
            className="absolute left-20 h-[6vw]"
          />
          <DetailsButton className={"mx-auto mt-5"} text="Узнать подробнее" to="videoblog/1"/>
        </div>
      </div>
    </section>
  );
};

export default Videoblog;
