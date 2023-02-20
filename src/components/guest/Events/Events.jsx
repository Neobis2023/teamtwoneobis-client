import React from "react";
import DetailsButton from "../DetailsButton";
import MySlider from "../MySlider";
import firstFutureE from "../../../images/firstFutureE.png";
import secondFutureE from "../../../images/secondFutureE.png";
import thirdFutureE from "../../../images/thirdFutureE.png";
import firstPastE from "../../../images/firstPastE.png";
import secondPastE from "../../../images/secondPastE.png";
import thirdPastE from "../../../images/thirdPastE.png";

const data = {
  futureEvents: [
    {
      img: firstFutureE,
      title: "Выпуск менти 1 потока",
    },
    {
      img: secondFutureE,
      title: "Книжный марафон",
    },
    {
      img: thirdFutureE,
      title: "Челлендж неделя",
    },
    {
      img: thirdFutureE,
      title: "Выпуск менти 1 потока",
    },
    {
      img: thirdFutureE,
      title: "Выпуск менти 1 потока",
    },
    {
      img: thirdFutureE,
      title: "Выпуск менти 1 потока",
    },
  ],
  pastEvents: [
    {
      img: firstPastE,
      title: "Выпуск менти 1 потока",
    },
    {
      img: secondPastE,
      title: "Челледж неделя",
    },
    {
      img: thirdPastE,
      title: "Книжный марафон",
    },
    {
      img: thirdPastE,
      title: "Выпуск менти 1 потока",
    },
    {
      img: thirdPastE,
      title: "Выпуск менти 1 потока",
    },
    {
      img: thirdPastE,
      title: "Выпуск менти 1 потока",
    },
  ],
};

export const FutureEvents = ({ ...animation }) => {
  return (
    <section className="py-20 events">
      <div {...animation}>
        <div className="myWrapper pb-16">
          <h2 className="mySubtitle text-center future-events-title">
            Предстоящие события
          </h2>
        </div>
        <MySlider events={data.futureEvents} />
        <DetailsButton className="mx-auto mt-14" text="Узнать подробнее" />
      </div>
    </section>
  );
};

export const PastEvents = ({ ...animation }) => {
  return (
    <section className="pb-20">
      <div {...animation}>
        <div className="myWrapper pb-16">
          <h2 className="mySubtitle text-center future-events-title">
            Прошедшие события
          </h2>
        </div>
        <MySlider events={data.pastEvents} />
        <DetailsButton text="Узнать подробнее" className="mx-auto mt-14" />
      </div>
    </section>
  );
};
