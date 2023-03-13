import React from "react";
import StartSection from "../../modules/StartSection/components/StartSection";
import Events from "../../modules/Events/Events";
import girlsTr from "./assets/images/girlsTr.png";
import eventGirls from './assets/images/eventGirls.png';
import girls from './assets/images/girls.jpg';
import EventsPast from "../../modules/EventsPast/EventsPast";
import MySlider from "../../helpers/swiper/MySlider";


const Forum = () => {
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
  return (
    <section className="forum">
      <StartSection
        title={"Форум Girls for Girls"}
        subtitle={
          "Наш форум по расширению прав и возможностей девочек - это ступенька на пути к раскрытию потенциала и высвобождению уверенности, которая заложена в каждой девочке"
        }
        imgSource={girls}
      />
      <Events
        title={"Предстоящие форумы"}
        imgSource={girlsTr}
        eventName={"Education"}
        description={
          "Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nu.Lorem ipsum dolor sit nu.Lorem ipsum dolor sit amet consecteadipiscing elit amet "
        }
        time={"10:00"}
        date={"20 марта"}
        location={"Бишкек"}
      />
      <EventsPast title={"Прошедшие форумы"} />
      <MySlider dataEvents={events} />
    </section>
  );
};

export default Forum;
