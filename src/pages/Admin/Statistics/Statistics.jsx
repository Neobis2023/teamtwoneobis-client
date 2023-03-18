import React from "react";
import Chart from "chart.js/auto";
import SexDistributionChart from "./components/SexDistributionChart";
import AgeDistributionChart from "./components/AgeDistributionChart";
import AreaChart from "./components/AreaChart";


const Statistics = () => {
  const sexData = {
    male: 220,
    female: 40,
  };
  const ageData = {
    age12to15: 20,
    age16to19: 35,
    age20plus: 5,
  };

  const cityData = {
    "Наарын": 250,
    "Джалал-Абад": 150,
    "Чуй": 360,
    "Ош": 80,
    "Баткен": 70,
    "Ыссык-Куль": 70,
    "Талас": 230,
  };
  return (
    <section className="bg-[#EAF0FF] w-full flex flex-col justify-end min-h-[700px]">
      <div className="px-6 min-h-[85%] mt-auto">
        <h1 className="text-[#662D91] font-bold text-2xl mb-6">
          Статистика зарегистрированных пользователей
        </h1>
        <div className="flex w-[70%] gap-4">
            <div className="w-[45%] border rounded-[10px] bg-[#FDFDFD] p-4 pt-12 relative">
                <div className="absolute top-2 text-[#28252D] text-[0.875rem] font-medium">Пол</div>
                <SexDistributionChart data={sexData} />
            </div>
            <div className="w-[55%] border rounded-[10px] bg-[#FDFDFD] p-4 pt-12 relative">
                <div className="absolute top-2 text-[#28252D] text-[0.875rem] font-medium">Возраст</div>
                <AgeDistributionChart data={ageData} />
            </div>
        </div>
        <div className="w-[70%] border rounded-[10px] bg-[#FDFDFD] p-4 pt-12 relative my-6">
            <div className="absolute top-2 text-[#28252D] text-[0.875rem] font-medium">Регион</div>
            <AreaChart data={cityData} />
        </div>

        <h2 className="text-[#662D91] font-bold text-2xl mb-6">
          Статистика зарегистрированных пользователей
        </h2>
      </div>
    </section>
  );
};

export default Statistics;
