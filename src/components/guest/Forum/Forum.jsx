import React from "react";
import check from "../../../images/check.png";
import DetailsButton from "../DetailsButton";
import black from '../../../images/black.png';
import neutral from '../../../images/neutral.png';
import simple from '../../../images/simple.png';
import thoughts from '../../../images/thoughts.png';
import stars from '../../../images/stars.png';
import hearts from '../../../images/hearts.png';

const Forum = () => {
  return (
    <section className="bg-[#EDEDED] py-20">
      <div className="myWrapper">
        <div className="flex justify-center gap-4 mb-20">
          <h2 className="mySubtitle">Форум</h2>
          <img src={check} alt="check" />
        </div>
        <div className="flex gap-2">
          <div className="basis-[48%]">
            <div className="flex relative">
                <img src={thoughts} alt="thoughts" className="h-fit"/>
                <img src={black} alt="first" className="mr-auto "/>
                <img src={stars} alt="stars" className="absolute left-80"/>
            </div>
            <div className="flex gap-4 relative">
                <img src={hearts} alt="hearts" className="absolute -bottom-10 -left-5 z-10"/>
                <img src={simple} alt="simple" />
                <img src={neutral} alt="neutral" className="h-fit"/>
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
            <DetailsButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forum;
