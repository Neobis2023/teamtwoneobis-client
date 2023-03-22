import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from './assets/images/userPhoto.svg'
import User from "./components/User";

const Applications = () => {
  const data = [
    {
      id: 1,
      imgUrl: userPhoto,
      fullName: "Девид Вуд",
      email: "david@gmail.com",
      phoneNumber: "+996709123456",
      isBlocked: false,
    },
    {
      id: 2,
      imgUrl: userPhoto,
      fullName: "Линда Роуз",
      email: "linda@gmail.com",
      phoneNumber: "+99676599999",
      isBlocked: true,
    },
    {
      id: 3,
      imgUrl: userPhoto,
      fullName: "Спанч Боб",
      email: "spanchbob@gmail.com",
      phoneNumber: "+99670945645",
      isBlocked: true,
    },
    {
      id: 4,
      imgUrl: userPhoto,
      fullName: "Принц Саудии",
      email: "prince@gmail.com",
      phoneNumber: "+99670456456",
      isBlocked: true,
    },
    {
      id: 5,
      imgUrl: userPhoto,
      fullName: "Диана Грег",
      email: "diana@gmail.com",
      phoneNumber: "+996709655555",
      isBlocked: false,
    },
    {
      id: 6,
      imgUrl: userPhoto,
      fullName: "Ханна Раппопорт",
      email: "henna@gmail.com",
      phoneNumber: "+99670000000",
      isBlocked: true,
    },
    {
      id: 7,
      imgUrl: userPhoto,
      fullName: "Эльза Шиф",
      email: "elsa@gmail.com",
      phoneNumber: "+9967345455",
      isBlocked: false,
    },
    {
      id: 8,
      imgUrl: userPhoto,
      fullName: "Эвелина Леви",
      email: "evelina@gmail.com",
      phoneNumber: "+996709123456",
      isBlocked: false,
    },
    {
      id: 9,
      imgUrl: userPhoto,
      fullName: "Ланг Имбер",
      email: "lang@gmail.com",
      phoneNumber: "+9967345354",
      isBlocked: false,
    },
    {
      id: 10,
      imgUrl: userPhoto,
      fullName: "Спанч Боб",
      email: "spanchbob@gmail.com",
      phoneNumber: "+99673748573",
      isBlocked: false,
    },
    {
      id: 11,
      imgUrl: userPhoto,
      fullName: "Спанч Боб",
      email: "spanchbob@gmail.com",
      phoneNumber: "+99655333343",
      isBlocked: true,
    },
    {
      id: 12,
      imgUrl: userPhoto,
      fullName: "Спанч Боб",
      email: "spanchbob@gmail.com",
      phoneNumber: "+996723672362",
      isBlocked: true,
    },
    {
      id: 13,
      imgUrl: userPhoto,
      fullName: "Спанч Боб",
      email: "spanchbob@gmail.com",
      phoneNumber: "+996709123400",
      isBlocked: false,
    },
    {
      id: 14,
      imgUrl: userPhoto,
      fullName: "Спанч Боб",
      email: "spanchbob@gmail.com",
      phoneNumber: "+996709654321",
      isBlocked: false,
    },
  ];
  return (
    <section className="bg-[#EAF0FF] w-full flex flex-col justify-end">
      <div className="px-6 min-h-[85%] mt-[15vh]">
        <div className="flex flex-col gap-6 mb-8">
          <div className="text-[#662D91] flex gap-4">
            <NavLink to={"/"} className="bg-[#FDFDFD] px-4 py-3 rounded-[10px]">
              Менторская программа
            </NavLink>
            <NavLink to={"/"} className="bg-[#FDFDFD] px-4 py-3 rounded-[10px]">
              Тренинги
            </NavLink>
            <NavLink to={"/"} className="bg-[#FDFDFD] px-4 py-3 rounded-[10px]">
              Форумы
            </NavLink>
          </div>
          <div className="text-[#403A64] flex gap-4">
            <div className="border border-[#79768D] rounded-[10px] p-2 w-fit flex flex-col gap-2">
              <p className="text-[1.25rem] font-bold">Поток 1</p>
              <p className="text-[0.875rem] font-bold mb-2">
                Подача заявок закрыта
              </p>
              <p className="text-[0.875rem] font-semibold">
                Дедлайн: 21.04.2023
              </p>
            </div>
            <div className="border border-[#79768D] rounded-[10px] p-2 w-fit flex flex-col gap-2">
              <p className="text-[1.25rem] font-bold">Поток 2</p>
              <p className="text-[0.875rem] font-bold mb-2">
                Подача заявок закрыта
              </p>
              <p className="text-[0.875rem] font-semibold">
                Дедлайн: 21.04.2023
              </p>
            </div>
            <div className="border border-[#79768D] rounded-[10px] p-2 w-fit flex flex-col gap-2">
              <p className="text-[1.25rem] font-bold">Поток 3</p>
              <p className="text-[0.875rem] font-bold mb-2">
                Подача заявок закрыта
              </p>
              <p className="text-[0.875rem] font-semibold">
                Дедлайн: 21.04.2023
              </p>
            </div>
          </div>
        <NavLink
          to={"/"}
          className="w-fit text-[#9960C3] font-bold text-[0.875rem] bg-transparent border border-[#9960C3] px-3 py-2 rounded-[10px]"
        >
          Посмотреть анкету
        </NavLink>
        </div>
        <div className="flex justify-between">
          <h1 className="text-[#662D91] font-bold text-2xl mb-6">Заявки</h1>
          <div className="text-[#79768D] font-semibold text-[1rem]">Всего {data.length}</div>
        </div>
        <div className="w-full min-w-[90%] bg-[#FDFDFD] rounded-[20px] min-h-[700px] p-4">
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4 items-center justify-between text-[#28252D] font-bold text-[0.875rem] mb-4">
            <div>Имя и фамилия</div>
            <div>Электронная почта</div>
            <div>Номер телефона</div>
            <div>Результат</div>
            <div className="justify-self-center">Подробная анкета</div>
          </div>
          <div>
              {data.map((user) => {
                return <User {...user} key={user.id} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
