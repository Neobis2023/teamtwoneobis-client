import React from "react";
import DetailsButton from "../DetailsButton";
import programs from "../../../images/landing/mentor-programs.png";
import trainings from "../../../images/landing/trainings.png";
import arrowRight from '../../../images/landing/arrowright.svg';
import arrowDown from '../../../images/landing/arrowdown.svg';
import mug from '../../../images/landing/mug.png'
import circle from '../../../images/landing/circle.png'
import circleTrain from '../../../images/landing/circle-train.png'


export const Results = ({ ...animation }) => {

  return (
    <section className="bg-[#A082DA] h-auto py-16">
      <div className="myWrapper text-white font-bold h-[inherit] flex justify-between gap-6" {...animation}>
        <div className="text-[clamp(1.5rem,_2.8vw,_3rem)] basis-[40%]">Наши результаты в цифрах</div>
        <div className="flex justify-between basis-[50%] items-center gap-4">
          <div className="text-center">
            <p className="text-[clamp(1.5rem,_5.5vw,_3rem)] leading-[40px]">200+</p>
            <p className="text-2xl text-[clamp(1rem,_2.2vw,_2rem)]">тренингов</p>
          </div>
          <div className="text-center">
            <p className="text-[clamp(1.5rem,_5.5vw,_3rem)] leading-[40px]">10</p>
            <p className="text-2xl text-[clamp(1rem,_2.2vw,_2rem)]">выпускниц</p>
          </div>
          <div className="text-center">
            <p className="text-[clamp(1.5rem,_5.5vw,_3rem)] leading-[40px]">6</p>
            <p className="text-2xl text-[clamp(1rem,_2.2vw,_2rem)]">регионов</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = ({ ...animation }) => {
  return (
    <section className="bg-[#EDEDED] py-12">
      <div className="myWrapper text-[#662D91]" {...animation}>
        <div className="flex gap-5">
          <p className="font-medium text-[clamp(4rem,_6.5vw,_6.6rem)] leading-[7.5vw]">Наши проекты</p>
          <img src={arrowRight} className='pt-10 h-fit w-[10%]' alt="arrow" />
        </div>
        <div className="mentor-program flex justify-between items-center gap-5 mt-10">
          <div className="basis-2/5 relative">
            <img src={programs} alt="mentor" className="relative z-10 w-[85%] h-[85%] mx-auto" />
            <img src={circle} alt="circle" className="absolute top-0 !-z-5"/>
          </div>
          <div className="basis-3/5 flex flex-col gap-4">
            <p className="text-[clamp(1.2rem,_2.7vw,_3.2rem)] font-bold">Менторская программа</p>
            <p className="we-do">
              Программа индивидуального наставничества поможет вам поставить
              личные и профессиональные цели и достичь их
            </p>
            <DetailsButton text="Узнать подробнее" to={"/"} />
          </div>
        </div>
        <div className="trainings flex justify-between items-center gap-5 mt-12">
          <div className="basis-3/5 flex flex-col gap-4">
            <img src={arrowDown} alt="arrowDown" className='ml-32 w-[25px] h-[79px]'/>
            <p className="text-[clamp(1.2rem,_2.7vw,_3.2rem)] font-bold">Тренинги</p>
            <p className="we-do">
              Мы покрываем широкий спектр тем в нашей обучающей программе,
              которые образовывают девушек в личных и профессиональных областях.
            </p>
            <div className='flex gap-x-12'>
              <DetailsButton text="Узнать подробнее" to={"/"} className='h-fit self-end'/>
              <img src={mug} alt="mug" className="h-fit w-[15%]"/>
            </div>
            
          </div>
          <div className='basis-2/5 relative'>
            <img src={trainings} alt="mentor" className="mx-auto relative z-10 w-[85%] h-[85%]"/>
            <img src={circleTrain} alt="cicrle" className="absolute top-0 z-0"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
