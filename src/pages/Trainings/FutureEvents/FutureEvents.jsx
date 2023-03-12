import React from "react";
import girlsTr from "../../../assets/images/trainings/futureTrainings/girlsTr.svg";
import Events from "../../../modules/Events/Events";

const FutureEvents = () => {
  return (
    <section>
      <Events
        title={"Предстоящие тренинги"}
        imgSource={girlsTr}
        eventName={"Time management"}
        description={
          "Lorem ipsum dolor sit amet consecte adipiscing elit amethendrerit pretium nu.Lorem ipsum dolor sit nu.Lorem ipsum dolor sit amet consecteadipiscing elit amet"
        }
        time={"18:00"}
        date={"21 марта"}
        location={"Нарынская область"}
      />
    </section>
  );
};

export default FutureEvents;
