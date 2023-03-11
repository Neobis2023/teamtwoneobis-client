import React from "react";
import girls from "../../../assets/images/trainings/futureTrainings/girls.svg";
import Events from "../../../modules/Events/Events";

const FutureEvents = () => {
  return (
    <section>
      <Events
        title={"Предстоящие тренинги"}
        imgSource={girls}
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
