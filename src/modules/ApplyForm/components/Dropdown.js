import React, { useEffect, useState } from "react";
import arrowDown from "../assets/images/arrow-down.svg";

const Dropdown = ({
  question,
  sublabel,
  options,
  value,
  onChange,
  ...props
}) => {
  const [option, setOption] = useState("");
  const [optionModal, setOptionModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  useEffect(() => {
    setOption((options && options[0]) || null);
  }, []);

  const handleOptionChoose = (item, index) => {
    setOption(item);
    setSelectedIndex(index)
  } 

  console.log(selectedIndex)

  return (
    <div className="flex flex-col gap-2 my-6">
      <div>
        <div className="text-[#662D91] font-semibold text-[clamp(0.8rem,_1.1vw,_1.3rem)]">
          {question}
        </div>
        {sublabel && (
          <div className="text-[#662D91] font-medium text-[clamp(0.5rem,_0.83vw,_1.05rem)]">
            {sublabel}
          </div>
        )}
      </div>
      <div
        className="flex items-center gap-6 relative hover:cursor-pointer border w-fit p-2 rounded-md"
        onClick={() => setOptionModal((curr) => !curr)}
      >
        {option}
        <img src={arrowDown} alt="arrow down" />
        {optionModal && (
          <div className="absolute top-11 z-20 bg-[#fff] border p-2 rounded-[8px]">
            {options &&
              options.map((item, index) => (
                <p key={index} onClick={() => handleOptionChoose(item, index)}>
                  {item}
                </p>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
