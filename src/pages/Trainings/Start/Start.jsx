import React from "react";
import girls from "./assets/images/girls.jpg";
import StartSection from "../../../modules/StartSection/components/StartSection";

const Start = () => {
  return (
    <section>
      <StartSection
        title={"Тренинги Girls for Girls"}
        subtitle={
          "Наш тренинг по расширению прав и возможностей девочек - это ступенька на пути к раскрытию потенциала и высвобождению уверенности, которая заложена в каждой девочке"
        }
        imgSource={girls}
      />
    </section>
  );
};

export default Start;
