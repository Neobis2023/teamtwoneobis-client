import React from "react";
import Back from "../components/Back";
import CreateQuestionnaire from '../../../../../../modules/CreateQuestionnaire/CreateQuestionnaire';

const AddQuestionnaire = () => {
  return (
    <div className="flex flex-col gap-4">
      <Back />
      <p className="text-[#000000] font-semibold text-[1.25rem]">
        Тренинг
      </p>
      <CreateQuestionnaire />
    </div>
  );
};

export default AddQuestionnaire;
