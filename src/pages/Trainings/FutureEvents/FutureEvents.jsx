import React, { useState } from "react";
import girlsTr from "./assets/images/girlsTr.png";
import EventsSlider from "../../../helpers/swiper/EventsSlider";
import stars from './assets/images/stars.svg'
import computer from './assets/images/computer.svg'

const FutureEvents = () => {
  const [trainings, setTrainings] = useState([
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

  // useEffect(() => {
  //   axios.get("https://girls4girls.herokuapp.com/api/training").then((res) => setTrainings(res.data.data))
  // }, [])

  return (
    <section>
      <div className="relative pt-20 w-[95%] mx-auto pb-[4%]">
        <h2 className="text-[#662D91] font-semibold text-[clamp(2.2rem,_2.78vw,_2.8rem)] text-center">
          Предстоящие тренинги
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
      <EventsSlider events={trainings} />
    </section>
  );
};

export default FutureEvents;
