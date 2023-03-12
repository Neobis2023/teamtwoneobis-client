import React from "react";
import MySlider from "../../../helpers/swiper/MySlider";
import girls from '../../../assets/images/trainings/pastTrainings/girls.svg';
import EventsPast from "../../../modules/EventsPast/EventsPast";

const PastEvents = () => {
  const events = [
    {
      id: 1,
      eventName: "Дебаты",
      imgSource: girls,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 2,
      eventName: "Дебаты",
      imgSource: girls,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 3,
      eventName: "Дебаты",
      imgSource: girls,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 4,
      eventName: "Дебаты",
      imgSource: girls,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 5,
      eventName: "Дебаты",
      imgSource: girls,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 6,
      eventName: "Дебаты",
      imgSource: girls,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
  ];
  return (
    <section className="pastTrainings">
      <EventsPast title={'Прошедшие тренинги'}/>
      <MySlider dataEvents={events} />
    </section>
  );
};

export default PastEvents;
