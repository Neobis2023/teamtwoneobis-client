import React, { useState } from "react";
import SaveButton from "../../../components/SaveButton";
import Input from "../Input";

const AdminMain = () => {
  const [trainings, setTrainings] = useState("200+");
  const [graduates, setGraduates] = useState(10);
  const [regions, setRegions] = useState(6);
  return (
    <div>
      <h2 className="text-[#662D91] font-bold text-[1.5rem] pt-6 mb-6">
        Результаты
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-[#000000] font-semibold text-base">Статистика</p>
          <div className="flex gap-2">
            <Input
              label={"Тренинги"}
              onChange={(e) => setTrainings(e.target.value)}
              value={trainings}
            />
            <Input
              label={"Выпускницы"}
              onChange={(e) => setGraduates(e.target.value)}
              value={graduates}
            />
            <Input
              label={"Регионы"}
              onChange={(e) => setRegions(e.target.value)}
              value={regions}
            />
          </div>
        </div>
        <SaveButton text={'Сохранить'}/>
      </div>
    </div>
  );
};

export default AdminMain;
