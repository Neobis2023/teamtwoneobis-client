import React from "react";
import flower from '../assets/images/flower.svg'
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ContactUsForm = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="bg-[#FFFFFF] rounded-[20px] py-8 px-8 w-[70%] m-auto relative">
        <div className="text-center flex flex-col gap-6 items-center">
          <h2 className="text-[rgba(71,_18,_128,_0.8)] font-semibold text-[clamp(2.8rem,_3.33vw,_3.3rem)] border-b w-fit mx-auto pb-2">{t('Main.ContactUs.title')}</h2>
          <p className="text-[#4E477A] text-[clamp(0.925rem,_1.25vw,_1.425rem)]">
            {t('Main.ContactUs.desc')}
          </p>
          <NavLink to={'/text-us'} className="py-4 px-6 bg-[rgba(102,_45,_145,_0.6)] rounded-[47px] text-[#fff] w-fit">{t('Main.ContactUs.button')}</NavLink>
        </div>
        <img src={flower} alt="flower" className="absolute -right-[8%] -bottom-[12%] w-[15%]"/>
      </div>
      {/* <Modal /> */}
    </section>
  );
};

export default ContactUsForm;
