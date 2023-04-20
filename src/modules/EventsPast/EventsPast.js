import React from 'react'
import stars from "./assets/images/stars.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const EventsPast = ({ title }) => {
  const { t } = useTranslation();
  return (
    <div className="myWrapper pt-20 relative flex flex-col gap-6 pb-10">
        <div className="flex justify-center">
          <h2 className="text-[#662D91] font-semibold text-[clamp(2.2rem,_2.78vw,_2.8rem)] text-center">
            {title}
          </h2>
          <img
            src={stars}
            alt="stars"
            className="absolute top-[20%] w-[45%] right-0 left-0 mx-auto"
          />
        </div>
        <NavLink
          to={"/"}
          className="self-end flex justify-between w-fit items-center px-4 py-2 bg-[#F1E7FF] rounded-[12px] text-base text-[#662D91]"
        >
          {t('Trainings.fourthSection.allTrainings')}
          <KeyboardArrowRightIcon />
        </NavLink>
      </div>
  )
}

export default EventsPast