import React from "react";
import kyrgyzstan from './assets/images/kyrgyzstan.png';
import line from './assets/images/line.svg';
import talas from './assets/images/talas.png';
import chui from './assets/images/chui.png';
import issyk from './assets/images/issyk.png';
import { useTranslation } from "react-i18next";

const Map = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20">
      <div className="myWrapper flex flex-col gap-16">
        <div className="text-center">
          <div className="pb-8">
            <h2 className="mySubtitle pb-2">{t('Main.Map.mapTitle')}</h2>
            <img src={line} alt="line" className="mx-auto" />
          </div>
          <p className="text-[clamp(1rem,_1.66vw,_1.8rem)] text-[#662D91] font-medium">
          {t('Main.Map.mapDesc')}
          </p>
        </div>
        <div className="relative w-full h-[0] pb-[20rem]">
          <img src={kyrgyzstan} alt="map" style={{ marginInline: 'auto' }} className='w-[70%]'/>
          <img src={talas} alt="talas" className="absolute top-[8%] left-[36%] h-fit w-[4%]"/>
          <img src={chui} alt="chui" className="absolute top-[1%] left-[47.5%] h-fit w-[4%]"/>
          <img src={issyk} alt="issyk" className='absolute top-[18%] right-[27%] h-fit w-[4%]'/>
        </div>
      </div>
    </section>
  );
};

export default Map;
