import React, { useEffect, useState } from "react";
import StartSection from "../../modules/StartSection/components/StartSection";
import girlsTr from "./assets/images/girlsTr.png";
import eventGirls from "./assets/images/eventGirls.png";
import girls from "./assets/images/girls.jpg";
import MySlider from "../../helpers/swiper/MySlider";
import computer from "./assets/images/computer.svg";
import stars from "./assets/images/stars.svg";
import EventsSlider from "../../helpers/swiper/EventsSlider";
import axios from "axios";

const Forum = () => {
  const [forums, setForums] = useState([]);
  const events = [
    {
      id: 1,
      eventName: "Дебаты",
      imgSource: eventGirls,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 2,
      eventName: "Дебаты",
      imgSource: eventGirls,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 3,
      eventName: "Дебаты",
      imgSource: eventGirls,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 4,
      eventName: "Дебаты",
      imgSource: eventGirls,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 5,
      eventName: "Дебаты",
      imgSource: eventGirls,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 6,
      eventName: "Дебаты",
      imgSource: eventGirls,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
  ];

  useEffect(() => {
    axios.get("https://girls4girls.herokuapp.com/api/forum").then((res) => setForums(res.data.data))
  }, [])
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <section className="forum">
      <StartSection
        title={"Форум Girls for Girls"}
        subtitle={
          "Наш форум по расширению прав и возможностей девочек - это ступенька на пути к раскрытию потенциала и высвобождению уверенности, которая заложена в каждой девочке"
        }
        imgSource={girls}
      />
      <div className="relative pt-20 w-[95%] mx-auto pb-[4%]">
        <h2 className="text-[#662D91] font-semibold text-[clamp(2.2rem,_2.78vw,_2.8rem)] text-center">
          Предстоящие форумы
        </h2>
        <img
          src={computer}
          alt="computer"
          className="absolute left-0 top-[40%] w-[20%]"
        />
        <img
          src={stars}
          alt="stars"
          className="absolute top-[20%] right-36  w-[5%] mx-auto"
        />
      </div>
      <EventsSlider events={forums} />
      <MySlider dataEvents={events} />
    </section>
  );
};

export default Forum;
