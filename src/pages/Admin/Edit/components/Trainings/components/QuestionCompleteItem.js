import React, { useEffect, useState } from "react";
import Input from "../../Input";
import arrowDown from "../assets/images/arrow-down.svg";
import trash from "../assets/images/trash.svg";
import circle from "../assets/images/circle.svg";
import square from "../assets/images/square.svg";
import circleEmpty from "../assets/images/circle-empty.svg";
import squareEmpty from "../assets/images/square-empty.svg";

const QuestionCompleteItem = ({ handleDelete, id }) => {
  const [questionType, setQuestionType] = useState("");
  const [chooseType, setChooseType] = useState(false);
  const [numberOfOptions, setNumberOfOptions] = useState(1);
  const [anotherOption, setAnotherOption] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const questionTypes = {
    Текст: "text",
    "Один из списка": "radio",
    "Несколько из списка": "checkbox",
    "Раскрывающийся список": "dropdown",
  };

  console.log(id);

  const handleOptions = (component) => {
    let count = [];
    for (let i = 0; i < numberOfOptions; i++) {
      count.push(i);
    }

    if (anotherOption) {
      count.push("another");
    }

    return count.map((option) => (
      <div key={option} className="flex gap-2 items-center w-[92%] ml-auto">
        {option !== "another" ? component : <Input label={"Другое"} disabled />}
      </div>
    ));
  };

  useEffect(() => {
    setQuestionType(Object.keys(questionTypes)[0]);
  }, []);
  return (
    <div className="flex justify-between my-4 border-b-2 pb-6">
      <div className="basis-[46%] flex flex-col justify-between gap-4">
        <Input label={"Вопрос"} />
        <Input label={"Уточнение"} />
        <div className="flex flex-col gap-2">
          {questionType === "Один из списка"
            ? handleOptions(
                <>
                  <img src={circleEmpty} />
                  <Input label={"Вариант"} />
                </>
              )
            : questionType === "Несколько из списка"
            ? handleOptions(
                <>
                  <img src={squareEmpty} />
                  <Input label={"Вариант"} />
                </>
              )
            : questionType === "Раскрывающийся список"
            ? handleOptions(
                <>
                  <Input label={"Вариант"} />
                </>
              )
            : null}
          {questionType !== "Текст" && (
            <div className="flex flex-col gap-2 my-2 ml-7">
              <button
                type="button"
                className="w-fit underline"
                onClick={() => setNumberOfOptions((curr) => curr + 1)}
              >
                Добавить вариант
              </button>
              <button
                type="button"
                className="w-fit underline text-red-500"
                onClick={() => setNumberOfOptions((curr) => curr - 1)}
              >
                Удалить вариант
              </button>

              {questionType !== "Раскрывающийся список" && (
                <div className="flex flex-col">
                  или
                  <button
                    type="button"
                    className="w-fit underline"
                    onClick={() => setAnotherOption(true)}
                  >
                    Добавить вариант "Другое"
                  </button>
                  <button
                    type="button"
                    className="w-fit underline text-red-500"
                    onClick={() => setAnotherOption(false)}
                  >
                    Удалить вариант "Другое"
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="border-l basis-[52%] pl-4 flex flex-col justify-between">
        <div
          className="flex justify-between p-3 pl-1 border-[#9960C3] border rounded-[8px] w-full relative hover:cursor-pointer"
          onClick={() => setChooseType((curr) => !curr)}
        >
          <div className="flex gap-1">
            {questionType === "Один из списка" ? (
              <img src={circle} alt="circle" />
            ) : questionType === "Несколько из списка" ? (
              <img src={square} alt="square" />
            ) : questionType === "Раскрывающийся список" ? (
              <img src={arrowDown} alt="arrow-down" />
            ) : null}
            <p>{questionType}</p>
          </div>
          <img src={arrowDown} alt="arrow-down" />
          {chooseType && (
            <div className="absolute top-11 left-0 border bg-[#fff] p-2 rounded-md z-20">
              {Object.keys(questionTypes).map((key) => (
                <p key={key} onClick={() => setQuestionType(key)}>
                  {key}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="flex text-[0.875rem] text-[#292D32] gap-2 justify-between">
          <div className="flex gap-2 items-center hover:cursor-pointer">
            <img src={trash} alt="trash" />
            <button type="button" onClick={() => handleDelete(id)}>
              Удалить вопрос
            </button>
          </div>
          <div className="flex gap-2 items-center hover:cursor-pointer">
            <input
              type="checkbox"
              id="isRequired"
              checked={isRequired}
              onClick={() => setIsRequired((curr) => !curr)}
            />
            <label htmlFor="isRequired" className="hover:cursor-pointer">
              Обязательный вопрос
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCompleteItem;
