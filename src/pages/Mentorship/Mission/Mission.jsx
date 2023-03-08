import React from "react";
import girls from "../../../assets/images/mentorship/mission/girls.svg";

const Mission = () => {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="myWrapper flex items-center justify-between gap-3">
        <div className="basis-[45%]">
          <img src={girls} alt="girls" className="w-[90%] h-[90%]"/>
        </div>
        <div className="basis-[50%] text-[#662D91] text-[clamp(1.2rem,_2.5vw,_2.5rem)]">
          <span className="font-bold">Наша миссия</span> - дать тебе возможность поверить в себя и свои
          способности, повысить твою самооценку и устойчивость, а также
          поддержать тебя в преодолении трудностей, связанных с взрослением в
          современном мире.
        </div>
      </div>
    </section>
  );
};

export default Mission;
