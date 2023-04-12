import React, { useEffect, useState } from "react";
import girlsTr from "./assets/images/girlsTr.png";
import EventsSlider from "../../../helpers/swiper/EventsSlider";
import stars from './assets/images/stars.svg'
import computer from './assets/images/computer.svg'
import axios from "axios";


const FutureEvents = () => {
  const [trainings, setTrainings] = useState([]);
  useEffect(() => {
    axios.get("https://girls4girls.herokuapp.com/api/training").then((res) => setTrainings(res.data.data))
  }, [])

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
