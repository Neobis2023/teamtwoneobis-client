import React from "react";
import DetailsButton from "../../../UI/DetailsButton/DetailsButton";
import check from './assets/images/check.png';
import black from './assets/images/black.png';
import neutral from './assets/images/neutral.png';
import simple from './assets/images/simple.png'
import thoughts from './assets/images/thoughts.png';
import stars from './assets/images/stars.png';
import hearts from './assets/images/hearts.png';

const Forum = () => {
  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="myWrapper">
        <div className="flex justify-center gap-4 mb-16 items-center">
          <h2 className="mySubtitle">Форум</h2>
          <img src={check} alt="check" className="h-fit w-[5%]"/>
        </div>
        <div className="flex gap-2 justify-between items-center">
          <div className="basis-[48%]">
            <div className="flex relative">
                <img src={thoughts} alt="thoughts" className="h-fit w-[20%]"/>
                <img src={black} alt="first" className="mr-auto h-fit w-[50%]"/>
                <img src={stars} alt="stars" className="absolute left-[60%] w-[15%] h-auto"/>
            </div>
            <div className="flex gap-4 relative">
                <img src={hearts} alt="hearts" className="absolute -bottom-[10%] -left-5 z-10 w-[20%] h-auto"/>
                <img src={simple} alt="simple" className="h-fit w-[50%]"/>
                <img src={neutral} alt="neutral" className="h-fit w-[30%]"/>
            </div>
          </div>
          <div className="flex flex-col gap-5 basis-[48%]">
            <p className="we-do">
              Мы покрываем широкий спектр тем в нашей обучающей программе,
              которые образовывают девушек в личных и профессиональных областях.
              Кроме того, мы охватываем все 7 регионов Кыргызстана, чтобы
              достичь как можно большего числа девушек и помочь им развить свой
              потенциал.
            </p>
            <DetailsButton text='Узнать подробнее' to="forum"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forum;
