import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SaveButton from "../../../../components/SaveButton";
import QuestionCompleteItem from "../components/QuestionCompleteItem";

const AddQuestionnaire = () => {
  const [questions, setQuestions] = useState([{ id: 0, index: 0 }]);

  console.log(questions);

  const handleDelete = (id) => {
    setQuestions((prev) => prev.filter((curr) => curr.id !== id));
  };

  useEffect(() => {
    console.log(questions);
  }, [questions]);
  const trainingName = useSelector(
    (state) => state.toolkit.trainingAddQuestionnaire
  );
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
        onClick={() =>
          setQuestions((prev) => [
            ...prev,
            { id: prev.length, index: prev.length },
          ])
        }
      >
        Добавить вопрос
      </button>
      <SaveButton text={"Сохранить"} className="w-fit" />
    </div>
  );
};

export default AddQuestionnaire;
