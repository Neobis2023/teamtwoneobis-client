import React from "react";
import computer from './assets/images/comp-stars.svg';

const Heading = () => {
  return (
    <section className="py-10 relative">
      <div className="myWrapper flex gap-4">
        <div className="flex flex-col gap-4 w-[60%]">
          <h1 className="text-[#662D91] font-bold text-[clamp(2rem,_2.5vw,_2.5rem)]">
            Видеоблог
          </h1>
          <p className="text-[#4E477A] font-medium text-[clamp(1.2rem,_1.11vw,_1.8rem)]">
            Наш видеоблог - это сборник лекций от наших менторов на самые
            различные темы: от ментального здоровья до личной гигиены.
          </p>
        </div>
        <div className="w-[40%] absolute right-0 top-0">
            <img src={computer} alt='computer and stars' className="mx-auto w-[70%]" />
        </div>
      </div>
    </section>
  );
};

export default Heading;
