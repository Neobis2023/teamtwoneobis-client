
import React, { useState } from "react";

const Checkbox = ({
  id,
  question,
  options,
  label,
  checked,
  another,
  handleAnotherChange,
  setData,
  sublabel,
  ...props
}) => {
  const [checkedIndexes, setCheckedIndexes] = useState([]);
  console.log(checkedIndexes);

  function handleCheckboxChange(event) {
    const index = parseInt(event.target.value);
    const isChecked = event.target.checked;
  
  
    if (isChecked) {
      setCheckedIndexes(prevIndexes => [...prevIndexes, index]);
    } else {
      setCheckedIndexes(prevIndexes =>
        prevIndexes.filter((checkedIndex) => checkedIndex !== index)
      );
    }

    const questionData = {
      questionId: id,
      type: "CHECK_BOX",
      answerIndex: 1,
      text: "Text",
      multipleChoices: isChecked ? [...checkedIndexes, index] : checkedIndexes.filter((checkedIndex) => checkedIndex !== index)
    };
  
    console.log(questionData);
  
    setData(curr => ({
      ...curr,
      answers: [
        ...curr.answers.filter((ans) => ans.questionId !== id),
        questionData,
      ],
    }));
  }

  return (
    <div className="my-6">
      <div className="text-[#662D91] font-semibold text-[clamp(0.8rem,_1.1vw,_1.3rem)] flex flex-col mb-2">
        {question}
        {sublabel && (
          <label
            htmlFor="answer"
            className="text-[#662D91] font-medium text-[clamp(0.5rem,_0.83vw,_1.05rem)]"
          >
            {sublabel}
          </label>
        )}
      </div>

      <div className="flex flex-col gap-1">
        {options.map((option, index) => {
          return (
            <label
              className="flex gap-2 items-center hover:cursor-pointer text-[#403A64] font-medium text-[clamp(0.8rem,_1.1vw,_1.3rem)]"
              key={index}
            >
              <input
                onChange={handleCheckboxChange}
                value={index}
                checked={checkedIndexes.includes(index)}
                type="checkbox"
                id={id}
                className="hover:cursor-pointer "
                {...props}
              />
              {option.text}
              <span class="custom-checkbox"></span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Checkbox;
