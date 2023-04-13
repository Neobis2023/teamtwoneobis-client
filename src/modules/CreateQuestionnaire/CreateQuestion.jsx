import React, { useEffect, useState } from "react";
import { arrowDown, circle, trash, square, circleEmpty, squareEmpty } from './assets/images';
import InputV2 from './InputV2';

const CreateQuestion = ({ handleDelete, id, idx, getDataFromChild }) => {
  const [questionType, setQuestionType] = useState("");
  const [chooseType, setChooseType] = useState(false);
  const [numberOfOptions, setNumberOfOptions] = useState(1);
  const [anotherOption, setAnotherOption] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  
  // Data to send for questionnaire
  const [variants, setVariants] = useState([{ text: '' }]);
  const [text, setText] = useState('');
  const [description, setDescription] = useState(null);
  
  const questionTypes = {
    "Текст": 'TEXT',
    "Один из списка": "VARIANTS",
    "Несколько из списка": "CHECK_BOX",
    "Раскрывающийся список": "DROP_DOWN",
  };
  
  const QuestionType =  {
    VARIANTS: 'VARIANTS',
    CHECK_BOX: 'CHECK_BOX',
    TEXT:'TEXT',
    DROP_DOWN: 'DROP_DOWN',
  }
  
  
  const handleOptions = (component) => {
    let count = [];
    for (let i = 0; i < numberOfOptions; i++) {
      count.push(i);
    }
    
    if (anotherOption) {
      count.push("another");
    }
    
    return count.map((option, index) => (
      <div key={option} className="flex gap-2 items-center w-[92%] ml-auto">
        {option !== "another"
          ?
           <>
            {component}
             <InputV2 onChange={(e) => handleVariantsChange(index, e.target.value)} label={"Вариант"} />
           </>
           : <InputV2 label={"Другое"} disabled />}
      </div>
    ));
  };
  
  const addOption = () => {
    setNumberOfOptions((curr) => curr + 1)
    setVariants((cur) => [...cur, { text: '' }]);
  }
  
  const removeOption = () => {
    setNumberOfOptions((curr) => curr - 1);
    setVariants((cur) => cur.slice(0, -1));
  }
  
  const handleVariantsChange = (index, value) => {
    const newVariants = [...variants];
    newVariants[index].text = value;
    setVariants(newVariants);
  }
  
  const sendToParent = () => {
    const question = {};
    question.text = text;
    question.description = description;
    question.type = questionTypes[questionType];
    if (question.type !== QuestionType.TEXT) {
      question.variants = variants;
    }
    getDataFromChild(id, question);
    console.log(question);
  }
  
  useEffect(() => {
    setQuestionType(Object.keys(questionTypes)[0]);
    console.log('changed')
  }, []);
  
  return (
    <div className="flex justify-between my-4 border-b-2 pb-6">
      <div className="basis-[46%] flex flex-col justify-between gap-4">
        <InputV2 value={text} onChange={(e) => setText(e.target.value)} label={"Вопрос"} />
        <InputV2 value={description} onChange={(e) => setDescription(e.target.value)} label={"Уточнение"} />
        <div className="flex flex-col gap-2">
          {questionType === "Один из списка"
            ? handleOptions(
                <img src={circleEmpty} alt="circle empty"/>
            )
            : questionType === "Несколько из списка"
              ? handleOptions(
                  <img src={squareEmpty} alt="square empty"/>
              )
              : questionType === "Раскрывающийся список"
                ? handleOptions(
                  <>
                  </>
                )
                : null}
          {questionType !== "Текст" && (
            <div className="flex flex-col gap-2 my-2 ml-7">
              <button
                type="button"
                className="w-fit underline"
                onClick={addOption}
              >
                Добавить вариант
              </button>
              <button
                type="button"
                className="w-fit underline text-red-500"
                onClick={removeOption}
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
          onClick={() => setChooseType((curr) => !curr) }
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
              onClick={() => {setIsRequired((curr) => !curr); sendToParent()}}
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

export default CreateQuestion;
