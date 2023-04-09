import React, { useEffect, useState } from "react";
import StartSection from "../../modules/StartSection/components/StartSection";
import girlsTr from "./assets/images/girlsTr.png";
import eventGirls from "./assets/images/eventGirls.png";
import girls from "./assets/images/girls.jpg";
import MySlider from "../../helpers/swiper/MySlider";
import computer from "./assets/images/computer.svg";
import stars from "./assets/images/stars.svg";
import EventsSlider from "../../helpers/swiper/EventsSlider";

const Forum = () => {
  const [forums, setForums] = useState([
    {
      id: 1,
      imgUrl: girlsTr,
      eventName: "Time management",
      description:
        "Lorem ipsum dolor sit amet consecte adipiscing elit amethendrerit pretium nu.Lorem ipsum dolor sit nu.Lorem ipsum dolor sit amet consecteadipiscing elit amet",
      time: "18:00",
      date: "21 марта",
      location: "Нарынская область, ул.Центральная 28а",
    },
    {
      id: 2,
      imgUrl: girlsTr,
      eventName: "Education",
      description:
        "Lorem ipsum dolor sit amet consecte adipiscing elit amethendrerit pretium nu.Lorem ipsum dolor sit nu.Lorem ipsum dolor sit amet consecteadipiscing elit amet",
      time: "18:00",
      date: "21 марта",
      location: "Нарынская область, ул.Центральная 28а",
    },
    {
      id: 3,
      imgUrl: girlsTr,
      eventName: "Society and Its role",
      description:
        "Lorem ipsum dolor sit amet consecte adipiscing elit amethendrerit pretium nu.Lorem ipsum dolor sit nu.Lorem ipsum dolor sit amet consecteadipiscing elit amet",
      time: "18:00",
      date: "21 марта",
      location: "Нарынская область, ул.Центральная 28а",
    },
    {
      id: 4,
      imgUrl: girlsTr,
      eventName: "Cooking",
      description:
        "Lorem ipsum dolor sit amet consecte adipiscing elit amethendrerit pretium nu.Lorem ipsum dolor sit nu.Lorem ipsum dolor sit amet consecteadipiscing elit amet",
      time: "18:00",
      date: "21 марта",
      location: "Нарынская область, ул.Центральная 28а",
    },
  ]);
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
