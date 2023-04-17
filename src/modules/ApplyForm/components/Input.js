import React, { useState } from "react";

const Input = ({
  id,
  question,
  sublabel = null,
  className,
  setData,
  ...props
}) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const questionData = {
      questionId: id,
      type: "TEXT",
      answerIndex: 1,
      multipleChoices: [0, 1],
      text: value,
    };

    setData(curr => ({...curr, answers: [...curr.answers.filter((ans) => ans.questionId !== id), questionData]}));
  };
  return (
    <div className="border-b py-2 flex flex-col gap-1 my-6">
      <div className="flex flex-col">
        <label
          htmlFor="answer"
          className="text-[#662D91] font-semibold text-[clamp(0.8rem,_1.1vw,_1.3rem)]"
        >
          {question}
        </label>
        {sublabel && (
          <label
            htmlFor="answer"
            className="text-[#662D91] font-medium text-[clamp(0.5rem,_0.83vw,_1.05rem)]"
          >
            {sublabel}
          </label>
        )}
      </div>
      <input
        value={inputValue}
        onChange={handleChange}
        {...props}
        placeholder="Мой ответ"
        id="answer"
        className={`placeholder:text-[#AFA9D0] outline-none ${className}`}
      />
    </div>
  );
};

export default Input;
