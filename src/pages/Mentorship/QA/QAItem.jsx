import React, { useState } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const QAItem = ({ question, answer, ...props }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="item border-b border-solid border-[#D4D2E3] py-6 hover:cursor-pointer" {...props}>
      <div
        className="question transition flex items-center justify-between"
        onClick={() => setActive(!active)}
      >
        <h3 className="font-bold text-[#662D91] text-[clamp(1rem,_1.53vw,_1.5rem)]">
          {question}
        </h3>
        <AddCircleRoundedIcon
          className={`text-[#662D91] transition ${active ? "rotate-45" : ""}`}
          style={{ transition: "transform 0.3s" }}
        />
      </div>
      <div
        className={`answer font-normal text-[clamp(0.8rem_,1.25vw,_1.4rem)] max-h-[0] overflow-hidden transition-all easy-in-out !duration-300 text-[rgba(102,_45,_145,_0.6)] ${
          active ? `max-h-[500px] pt-2` : "max-h-[0]"
        }`} 
      >
        {answer}
      </div>
    </div>
  );
};

export default QAItem;
