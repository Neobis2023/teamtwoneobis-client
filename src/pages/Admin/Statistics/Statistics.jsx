import React from "react";
import SexDistributionChart from "./components/SexDistributionChart";
import AgeDistributionChart from "./components/AgeDistributionChart";
import AreaChart from "./components/AreaChart";
import girls from "./assets/images/girls.svg";
import ViewsChart from "./components/ViewsChart";
import VisitsChart from "./components/VisitsChart";
import calendar from './assets/images/calendar.svg';

const VideosStatistics = () => {
  const videos = [
    {
      id: 1,
      title: "Саморазвитие и образование",
      category: "Здоровье",
      views: 325,
      video: girls,
    },
    {
      id: 2,
      title: "Японская кухня",
      category: "Еда",
      views: 775,
      video: girls,
    },
    {
      id: 3,
      title: "Бизнес и финансы",
      category: "Бизнес",
      views: 420,
      video: girls,
    },
  ];

  return (
    <div>
      <h2 className="text-[#662D91] font-bold text-2xl mb-6">
        Статистика видеоблога
      </h2>
      <div>
        <div className="w-fit max-w-[100%] border rounded-[10px] bg-[#FDFDFD] py-4 pl-4 my-6">
          <div className="text-[#28252D] text-[0.875rem] font-medium">
            <div className="mb-2 font-medium text-[#06152B] opacity-70 text-[1.25rem]">
              Топ 3 самых просматриваемых видео
            </div>
            <div className="w-fit max-w-full">
              <div className="grid grid-cols-[1fr_0.5fr_0.5fr] justify-between border-b border-[#06152B] text-[#06152B] text-[0.81rem] pb-1">
                <div>Название</div>
                <div>Категория</div>
                <div className="justify-self-center">Просмотры</div>
              </div>
              <div className="flex flex-col gap-3 mt-3">
                {videos.map((video) => {
                  return (
                    <div className="grid grid-cols-[1fr_0.5fr_0.5fr] justify-between gap-4 items-center">
                      <div className="flex items-center gap-2">
                        <div className="">
                          <img src={video.video} alt="video" />
                        </div>
                        <div className="text-[#292D32] text-[0.875]">
                          {video.title}
                        </div>
                      </div>
                      <div className="text-[#79768D] text-[0.75rem] font-medium">
                        {video.category}
                      </div>
                      
                      <div className="p-2 justify-self-center bg-[rgba(243,_176,_195,_0.2)] w-fit rounded-[8.5px]">
                        <p className="text-[#3A36DB] text-[0.88rem]">
                          {video.views}
                        </p>
                      </div>
                      
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Statistics = () => {
  const currentMonth = new Date().toLocaleString("ru", { month: "long" });
  const capitalizedMonth =
    currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);
  const currentYear = new Date().getFullYear();
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
    Наарын: 250,
    "Джалал-Абад": 150,
    Чуй: 360,
    Ош: 80,
    Баткен: 70,
    "Ыссык-Куль": 70,
    Талас: 230,
  };

  const viewsData = {
    labels: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    views: [600, 650, 650, 760, 700, 900, 700, 600, 650, 745, 800, 850],
  };

  const visitsData = {
    labels: [
      "01.03",
      "02.03",
      "03.03",
      "04.03",
      "05.03",
      "06.03",
      "07.03",
      "08.03",
      "09.03",
      "10.03",
      "11.03",
      "12.03",
      "13.03",
      "14.03",
      "15.03",
      "16.03",
      "17.03",
      "18.03",
      "19.03",
      "20.03",
      "21.03",
      "22.03",
      "23.03",
      "24.03",
      "25.03",
      "26.03",
      "27.03",
      "28.03",
      "29.03",
      "30.03",
      "31.03",
    ],
    visits: [
      50, 70, 80, 60, 90, 75, 85, 100, 110, 95, 120, 140, 130, 110, 90, 100,
      120, 115, 95, 80, 70, 85, 90, 100, 110, 120, 115, 100, 120, 100, 100,
    ],
  };

  const todayViews = 500;
  return (
    <section className="bg-[#EAF0FF] w-full flex flex-col justify-end">
      <div className="px-6 min-h-[85%] mt-[15vh]">
        <h1 className="text-[#662D91] font-bold text-2xl mb-6">
          Статистика зарегистрированных пользователей
        </h1>
        <div className="flex w-[70%] gap-4">
          <div className="w-[45%] border rounded-[10px] bg-[#fff] p-4 pt-12 relative">
            <div className="absolute top-2 text-[#28252D] text-[1rem] font-semibold">
              Пол
            </div>
            <SexDistributionChart data={sexData} />
          </div>
          <div className="w-[55%] border rounded-[10px] bg-[#fff] p-4 pt-12 relative">
            <div className="absolute top-2 text-[#28252D] text-[1rem] font-semibold">
              Возраст
            </div>
            <AgeDistributionChart data={ageData} />
          </div>
        </div>
        <div className="w-[80%] h-[300px] border rounded-[10px] bg-[#fff] p-4 pt-12 relative my-6">
          <div className="absolute top-2 text-[#28252D] text-[1rem] font-semibold">
            Регион
          </div>
          <AreaChart data={cityData} />
        </div>
        <VideosStatistics />

        <div className="w-full border rounded-[10px] bg-[#fff] p-4 pt-12 relative my-6">
          <div className="absolute top-2 text-[#28252D] text-[1rem] font-semibold">
            Просмотры
          </div>
          <ViewsChart data={viewsData} todayViews={todayViews} />
        </div>

        <div className="flex justify-between items-center"> 
          <h2 className="text-[#662D91] font-bold text-2xl mb-6">
            Статистика посещений
          </h2>
          <div className="flex items-center gap-2 border rounded-[10px] bg-[#fff] px-4 py-2">
            <div>{capitalizedMonth}</div>
            <div>{currentYear}</div>
            <img src={calendar} alt="calendar" />
          </div>
        </div>

        <div className="w-full border rounded-[10px] bg-[#fff] p-4 pt-12 relative my-6">
          <div className="absolute top-2 text-[#28252D] text-[1rem] font-semibold">
            Статистика за {capitalizedMonth}
          </div>
          <VisitsChart data={visitsData} />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
