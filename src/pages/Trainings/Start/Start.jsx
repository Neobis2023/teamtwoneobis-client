import React from "react";
import girls from "../../../assets/images/trainings/start/girls.svg";
import StartSection from "../../../modules/StartSection/components/StartSection";

const Start = () => {
  return (
    <section>
      {/* <div>
        <div className="pt-20 pb-[4%] relative">
          <div className="flex flex-col text-center w-1/2 mx-auto">
            <div>
              <h1 className="text-[#9960C3] text-[clamp(2rem,_3.3vw,_3.25rem)] font-semibold">
                Тренинги Girls for Girls
              </h1>
              <img src={line} alt="line" className="mx-auto" />
            </div>
            <p className="text-[#403A64] font-normal text-[clamp(1rem,_1.38vw,_1.5rem)]">
              Наш тренинг по расширению прав и возможностей девочек - это
              ступенька на пути к раскрытию потенциала и высвобождению
              уверенности, которая заложена в каждой девочке
            </p>
          </div>
          <img
            src={stars}
            alt="stars"
            className="absolute left-0 top-[1%] ml-auto min-w-[170px] w-[15%] h-fit"
          />
          <img
            src={triangles}
            alt="triangles"
            className="absolute right-0 -top-[10%] min-w-[180px] -z-10 mr-auto w-[20%] h-fit"
          />
        </div>
        <div className="myWrapper">
          <img src={girls} alt="girls" className="mx-auto w-full" />
        </div>
      </div> */}
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
