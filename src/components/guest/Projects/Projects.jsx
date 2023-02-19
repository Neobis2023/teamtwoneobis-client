import React from "react";
import DetailsButton from "../DetailsButton";
import programs from "../../../images/mentor-programs.png";
import trainings from "../../../images/trainings.png";
import arrowRight from '../../../images/arrowright.svg';
import arrowDown from '../../../images/arrowdown.svg';
import mug from '../../../images/mug.png'
import circle from '../../../images/circle.png'
import circleTrain from '../../../images/circle-train.png'
import splash from '../../../images/projectsSplash.svg'
import splashTwo from '../../../images/projectsSplashTwo.svg'

export const Results = () => {
  return (
    <section className="bg-[#A082DA] h-auto py-16">
      <div className="myWrapper text-white font-bold h-[inherit] flex justify-between gap-6">
        <div className="text-4xl basis-[30%]">Наши результаты в цифрах</div>
        <div className="flex justify-between basis-[50%] items-center">
          <div className="text-center">
            <p className="text-[2.7rem] leading-[40px]">200+</p>
            <p className="text-2xl">тренингов</p>
          </div>
          <div className="text-center">
            <p className="text-[2.7rem] leading-[40px]">10</p>
            <p className="text-2xl">выпускниц</p>
          </div>
          <div className="text-center">
            <p className="text-[2.7rem] leading-[40px]">6</p>
            <p className="text-2xl">регионов</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="bg-[#EDEDED] py-12">
      <div className="myWrapper text-[#662D91]">
        <div className="flex gap-5">
          <h2 className="font-medium text-8xl">Наши проекты</h2>
          <img src={arrowRight} className='pt-10' alt="arrow" />
        </div>
        <div className="mentor-program flex justify-between items-center gap-5 mt-10">
          <div className="basis-2/5 relative">
            <img src={programs} alt="mentor" className="relative z-10 w-[85%] h-[85%] mx-auto" />
            <img src={circle} alt="circle" className="absolute top-0 !-z-5"/>
            <img src={splash} alt="splash" className="absolute border top-[20%] -left-[10%] h-auto w-[60%]"/>
          </div>
          <div className="basis-3/5 flex flex-col gap-4">
            <p className="text-4xl font-bold">Менторская программа</p>
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
            <p className="text-4xl font-bold">Тренинги</p>
            <p className="we-do">
              Мы покрываем широкий спектр тем в нашей обучающей программе,
              которые образовывают девушек в личных и профессиональных областях.
            </p>
            <div className='flex gap-12'>
              <DetailsButton text="Узнать подробнее" to={"/"} className='h-fit self-end'/>
              <img src={mug} alt="mug"/>
            </div>
            
          </div>
          <div className='basis-2/5 relative'>
            <img src={trainings} alt="mentor" className="mx-auto relative z-10 w-[85%] h-[85%]"/>
            <img src={circleTrain} alt="cicrle" className="absolute top-0 z-0"/>
            <img src={splashTwo} alt="splash" className="absolute border top-[40%] -right-[10%] h-auto w-[60%]"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
