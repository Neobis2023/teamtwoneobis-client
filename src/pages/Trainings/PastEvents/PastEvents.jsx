import React from "react";
import MySlider from "../../../helpers/swiper/MySlider";
import girls from './assets/images/girls.png';
import EventsPast from "../../../modules/EventsPast/EventsPast";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <section className="pastTrainings">
      <EventsPast title={t('Trainings.fourthSection.title')}/>
      <MySlider dataEvents={events} />
    </section>
  );
};

export default PastEvents;
