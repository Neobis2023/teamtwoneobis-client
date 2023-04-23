import React from "react";
import MySlider from "../../../helpers/swiper/MySlider";
import girls from './assets/images/girls.png';
import EventsPast from "../../../modules/EventsPast/EventsPast";
import { useTranslation } from "react-i18next";
import hormones from '../images/hormones.jpg'
import food from '../images/food.webp'
import education from '../images/education.jpg'
import finances from '../images/finances.jpg'
import parents from '../images/parents.jpg'

const PastEvents = () => {
  const events = [
    {
      id: 1,
      eventName: "Образование",
      imgSource: education,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 2,
      eventName: "Финансы",
      imgSource: finances,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 3,
      eventName: "Ментальное здоровье",
      imgSource: girls,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 4,
      eventName: "Гормональный фон",
      imgSource: hormones,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 5,
      eventName: "Питание",
      imgSource: food,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 6,
      eventName: "Отношения с родителями",
      imgSource: parents,
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
