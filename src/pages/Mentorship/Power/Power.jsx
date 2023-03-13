import React from "react";
import line from "./assets/images/line.svg";
import freedom from "./assets/images/freedom.svg";
import life from "./assets/images/life.svg";
import women from "./assets/images/women.svg";


const Power = () => {
  return (
    <section className="pt-20 bg-[radial-gradient(50%_50%_at_50%_50%,_#FAEFFF_0%,_#E8E5FF_100%)]">
      <div className="myWrapper flex flex-col items-center justify-between gap-6">
        <div>
          <h1 className="text-[#662D91] font-semibold text-[clamp(2rem,_3.3vw,_3.25rem)] pb-2 text-center">Менторство</h1>
          <img src={line} alt="line" />
        </div>
        <p className="text-[clamp(1.2rem,_2.5vw,_2.5rem)] text-[rgba(102,_45,_145,_0.6)] w-[55%] text-center m-auto pb-12">
          Мы верим в силу наставничества, обеспечивающего руководство, поддержку
          и положительные ролевые модели для девочек.
        </p>
        <div className="flex w-full justify-around">
            <img src={freedom} alt="freedom" className="w-[10%] h-auto"/>
            <img src={life} alt="life" className="w-[10%] h-auto"/>
            <img src={women} alt="women" className="w-[10%] h-auto"/>
        </div>
      </div>
    </section>
  );
};

export default Power;
