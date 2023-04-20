import React from "react";
import girls from "./assets/images/girls.jpg";
import StartSection from "../../../modules/StartSection/components/StartSection";
import { useTranslation } from "react-i18next";

const Start = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StartSection
        title={t('Trainings.firstSection.title')}
        subtitle={
          t('Trainings.firstSection.desc')
        }
        imgSource={girls}
      />
    </section>
  );
};

export default Start;
