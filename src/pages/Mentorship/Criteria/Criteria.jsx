import React from "react";
import one from "./assets/images/1.svg";
import two from "./assets/images/2.svg";
import three from "./assets/images/3.svg";
import four from "./assets/images/4.svg";
import arrow from "./assets/images/arrow.svg";
import crown from "./assets/images/crown.svg";
import { useTranslation } from "react-i18next";

const Criteria = ({ className }) => {
  const { t } = useTranslation();
  return (
    <section className={`py-20 bg-[#F8F9FA] ${className}`}>
      <div className="myWrapper text-[#662D91] relative">
        <img
          src={crown}
          alt="crown"
          className="absolute -top-[10%] left-[35%] w-[5%] h-fit min-w-[50px]"
        />
        <img
          src={arrow}
          alt="arrow"
          className="absolute top-[8%] left-0 right-0 mx-auto w-[35%] h-fit min-w-[250px]"
        />
        <h2 className="text-[clamp(1.2rem,_2.5vw,_2.5rem)] pb-10 text-center font-bold">
          {t("Mentorship.thirdSection.title")}
        </h2>
        <div className="text-2xl flex justify-between gap-16 text-[clamp(1rem,_1.6vw,_1.7rem)] leading-normal">
          <div className="flex flex-col justify-between gap-6">
            <div className="h-60 flex items-center justify-between gap-6 px-8">
              <img src={one} alt="one" className="h-fit w-[20%] min-w-[55px]" />
              <p className="p-6 font-medium text-[clamp(1rem_,_1.67vw,_1.75rem)] text-[#403A64]">
              {t("Mentorship.thirdSection.1")}
              </p>
            </div>
            <div className="h-60 flex items-center justify-center gap-6 px-8">
              <img
                src={three}
                alt="three"
                className="h-fit w-[20%] min-w-[55px]"
              />
              <p className="p-6 font-medium text-[clamp(1rem_,_1.67vw,_1.75rem)] text-[#403A64]">
              {t("Mentorship.thirdSection.3")}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6">
            <div className="h-60 flex items-center justify-center gap-6 px-8">
              <img src={two} alt="two" className="h-fit w-[20%] min-w-[55px]" />
              <p className="p-6 font-medium text-[clamp(1rem_,_1.67vw,_1.75rem)] text-[#403A64]">
              {t("Mentorship.thirdSection.2")}
              </p>
            </div>
            <div className="h-60 flex items-center justify-center gap-6 px-8">
              <img
                src={four}
                alt="four"
                className="h-fit w-[20%] min-w-[55px]"
              />
              <p className="p-6 font-medium text-[clamp(1rem_,_1.67vw,_1.75rem)] text-[#403A64]">
              {t("Mentorship.thirdSection.4")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Criteria;
