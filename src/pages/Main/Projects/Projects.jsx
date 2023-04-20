import React from "react";
import DetailsButton from "../../../UI/DetailsButton/DetailsButton";
import programs from './assets/images/mentor-programs.png';
import trainings from './assets/images/trainings.png';
import arrowRight from './assets/images/arrowright.svg';
import arrowDown from './assets/images/arrowdown.svg';
import mug from './assets/images/mug.png';
import circle from './assets/images/circle.png';
import circleTrain from './assets/images/circle-train.png';
import { useTranslation } from "react-i18next";


export const Results = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#A082DA] h-auto py-16">
      <div className="myWrapper text-white font-bold h-[inherit] flex justify-between gap-6">
        <div className="text-[clamp(1.5rem,_2.8vw,_3rem)] basis-[40%] leading-[normal]">{t('Main.Results.1')}</div>
        <div className="flex justify-between basis-[50%] items-center gap-4">
          <div className="text-center">
            <p className="text-[clamp(1.5rem,_5.5vw,_3rem)] leading-[40px]">200+</p>
            <p className="text-2xl text-[clamp(1rem,_2.2vw,_2rem)]">{t('Main.Results.2')}</p>
          </div>
          <div className="text-center">
            <p className="text-[clamp(1.5rem,_5.5vw,_3rem)] leading-[40px]">10</p>
            <p className="text-2xl text-[clamp(1rem,_2.2vw,_2rem)]">{t('Main.Results.3')}</p>
          </div>
          <div className="text-center">
            <p className="text-[clamp(1.5rem,_5.5vw,_3rem)] leading-[40px]">6</p>
            <p className="text-2xl text-[clamp(1rem,_2.2vw,_2rem)]">{t('Main.Results.4')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#FAFAFA] py-12">
      <div className="myWrapper text-[#662D91]">
        <div className="flex gap-5">
          <p className="font-medium text-[clamp(4rem,_6.5vw,_6.6rem)] leading-[7.5vw]">{t('Main.Projects.mentoringTitle')}</p>
          <img src={arrowRight} className='pt-10 h-fit w-[10%]' alt="arrow" />
        </div>
        <div className="mentor-program flex justify-between items-center gap-5 mt-10">
          <div className="basis-2/5 relative">
            <img src={programs} alt="mentor" className="relative z-10 w-[85%] h-[85%] mx-auto" />
            <img src={circle} alt="circle" className="absolute top-0 !-z-5"/>
          </div>
          <div className="basis-3/5 flex flex-col gap-4">
            <p className="text-[clamp(1.2rem,_2.7vw,_3.2rem)] font-bold">{t('Main.Projects.mentoringSubtitle')}</p>
            <p className="we-do">
            {t('Main.Projects.mentoringDesc')}
            </p>
            <DetailsButton text={t('Main.Projects.button')} to={"mentorship"} />
          </div>
        </div>
        <div className="trainings flex justify-between items-center gap-5 mt-12">
          <div className="basis-3/5 flex flex-col gap-4">
            <img src={arrowDown} alt="arrowDown" className='ml-32 w-[25px] h-[79px]'/>
            <p className="text-[clamp(1.2rem,_2.7vw,_3.2rem)] font-bold">{t('Main.Projects.trainingsSubtitle')}</p>
            <p className="we-do">
            {t('Main.Projects.trainingsDesc')}
            </p>
            <div className='flex gap-x-12'>
              <DetailsButton text={t('Main.Projects.button')} to={"trainings"} className='h-fit self-end'/>
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
