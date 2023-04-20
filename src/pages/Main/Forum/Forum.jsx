import React from "react";
import DetailsButton from "../../../UI/DetailsButton/DetailsButton";
import check from './assets/images/check.png';
import black from './assets/images/black.png';
import neutral from './assets/images/neutral.png';
import simple from './assets/images/simple.png'
import thoughts from './assets/images/thoughts.png';
import stars from './assets/images/stars.png';
import hearts from './assets/images/hearts.png';
import { useTranslation } from "react-i18next";

const Forum = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="myWrapper">
        <div className="flex justify-center gap-4 mb-16 items-center">
          <h2 className="mySubtitle">{t('Main.Forum.forumTitle')}</h2>
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
              {t('Main.Forum.forumDesc')}
            </p>
            <DetailsButton text={t('Main.Forum.button')} to="forum"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forum;
