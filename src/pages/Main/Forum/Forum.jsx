import React from "react";
import check from '../../../assets/images/forum/check.png';
import DetailsButton from "../../../UI/DetailsButton/DetailsButton";
import black from '../../../assets/images/forum/black.png';
import neutral from '../../../assets/images/forum/neutral.png';
import simple from '../../../assets/images/forum/simple.png'
import thoughts from '../../../assets/images/forum/thoughts.png';
import stars from '../../../assets/images/forum/stars.png';
import hearts from '../../../assets/images/forum/hearts.png';

const Forum = ({ ...animation }) => {
  return (
    <section className="bg-[#EDEDED] py-20">
      <div className="myWrapper" {...animation}>
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
            <DetailsButton text='Узнать подробнее'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forum;
