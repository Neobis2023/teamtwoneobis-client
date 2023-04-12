import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SaveButton from "../../../../components/SaveButton";
import QuestionCompleteItem from "../components/QuestionCompleteItem";

const AddQuestionnaire = () => {
  // const [questions, setQuestions] = useState([{ id: 0, index: 0 }]);
  const [questions, setQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const trainingName = useSelector(
    (state) => state.toolkit.trainingAddQuestionnaire
  );

  console.log(questions);

  // const handleDelete = (id) => {
  //   setQuestions((prev) => prev.filter((curr) => curr.id !== id));
  // };
  const handleDelete = (id) => {
    setQuestions(prev => {
      // filter out the deleted question
      const remainingQuestions = prev.filter(curr => curr.id !== id);
  
      // re-calculate the index values for the remaining questions
      const updatedQuestions = remainingQuestions.map((curr, index) => ({
        ...curr,
        index
      }));
  
      return updatedQuestions;
    });
  };

  const handleAddQuestion = () => {
    setQuestions(prev => {
      const newQuestion = {
        id: questionCount,
        index: prev.length
      };
  
      setQuestionCount(prev => prev + 1);
  
      return [...prev, newQuestion];
    });
  };

  useEffect(() => {
    console.log(questions);
  }, [questions]);
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[#000000] font-semibold text-[1.25rem]">
        {trainingName}
      </p>
      {questions.map(({ id, index }) => (
        <QuestionCompleteItem
          key={id}
          id={id}
          index={index}
          handleDelete={handleDelete}
        />
      ))}
      <button
        type="button"
        className="w-fit text-[#9960C3] rounded-[8px] border border-[ #9960C3] p-2"
        onClick={handleAddQuestion}
      >
        Добавить вопрос
      </button>
      <SaveButton text={"Сохранить"} className="w-fit" />
    </div>
  );
};

export default AddQuestionnaire;
