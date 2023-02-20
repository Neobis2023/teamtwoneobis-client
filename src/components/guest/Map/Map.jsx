import React from "react";
import kyrgyzstan from "../../../images/kyrgyzstan.png";
import line from '../../../images/line.svg';
import talas from '../../../images/talas.png';
import chui from '../../../images/chui.png';
import issyk from '../../../images/issyk.png';

const Map = ({ ...animation }) => {
  return (
    <section className="py-20">
      <div className="myWrapper flex flex-col gap-16" {...animation}>
        <div className="text-center">
          <div className="pb-8">
            <h2 className="mySubtitle pb-2">Мы на карте</h2>
            <img src={line} alt="line" className="mx-auto" />
          </div>
          <p>
            Двухдневные тренинги были проведены для 200+ девочек из четырех
            областей и г. Бишкек.
          </p>
        </div>
        <div className="relative w-full h-[0] pb-[60%]">
          <img src={kyrgyzstan} alt="map" style={{ marginInline: 'auto' }} className='w-full'/>
          <img src={talas} alt="talas" className="absolute top-[12%] left-[30%] h-fit w-[5%]"/>
          <img src={chui} alt="chui" className="absolute top-[1%] left-[46%] h-fit w-[6%]"/>
          <img src={issyk} alt="issyk" className='absolute top-[25%] right-[18%] h-fit w-[6%]'/>
        </div>
      </div>
    </section>
  );
};

export default Map;
