import React, { useEffect, useState } from "react";
import StartSection from "../../modules/StartSection/components/StartSection";
import eventGirls from "./assets/images/eventGirls.png";
import girls from "./assets/images/girls.jpg";
import MySlider from "../../helpers/swiper/MySlider";
import computer from "./assets/images/computer.svg";
import stars from "./assets/images/stars.svg";
import EventsSlider from "../../helpers/swiper/EventsSlider";
import axios from "axios";
import { useTranslation } from "react-i18next";
import mentoring from './images/mentoring.jpg'
import depression from './images/depression.jpg'
import family from './images/family.jpg'
import education from './images/education.jpg'
import book from './images/book.jpg'

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
      eventName: "Депрессия в 21 веке",
      imgSource: depression,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 3,
      eventName: "О менторстве",
      imgSource: mentoring,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 4,
      eventName: "Карьера и семья",
      imgSource: family,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 5,
      eventName: "Саморазвитие",
      imgSource: book,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
    {
      id: 6,
      eventName: "Обучение за рубежом",
      imgSource: education,
      description:
        "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor tortor feugiat.",
    },
  ];
  const { t } = useTranslation();

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
        title={t('Forums.firstSection.title')}
        subtitle={t('Forums.firstSection.desc')}
        imgSource={girls}
      />
      <div className="relative pt-20 w-[95%] mx-auto pb-[4%]">
        <h2 className="text-[#662D91] font-semibold text-[clamp(2.2rem,_2.78vw,_2.8rem)] text-center">
          {t('Forums.secondSection.title')}
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
