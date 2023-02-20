import React from "react";
import curlyArrow from "../../../images/arrowcurly.svg";
import DetailsButton from "../DetailsButton";
import computer from "../../../images/computer.png";
import MySlider from "../MySlider";

const Videoblog = ({ ...animation }) => {
  document.cookie = "myCookie=value; SameSite=Strict";
  const videoUrls = [
    "https://www.youtube.com/watch?v=zvTr3P43yUg",
    "https://www.youtube.com/watch?v=zvTr3P43yUg",
    "https://www.youtube.com/watch?v=zvTr3P43yUg",
    "https://www.youtube.com/watch?v=zvTr3P43yUg",
    "https://www.youtube.com/watch?v=zvTr3P43yUg",
  ];

  return (
    <section
      className="bg-[rgba(232,_229,_255,_0.4)] py-20 videoblog"
    >
      <div {...animation}>
        <div className="flex gap-5 myWrapper videoblog-title">
          <h2 className="mySubtitle">Видеоблог/Study plan</h2>
          <img src={curlyArrow} alt="curly" />
        </div>
        <MySlider videoblog={videoUrls} />
        <div className="relative">
          <img
            src={computer}
            alt="computer"
            className="absolute left-20 h-[6vw]"
          />
          <DetailsButton className={"mx-auto mt-5"} text="Узнать подробнее" />
        </div>
      </div>
    </section>
  );
};

export default Videoblog;
