import React, { useEffect, useState } from "react";
import search from "./assets/images/search.svg";
import userPhoto from "./assets/images/userPhoto.svg";
import menu from "./assets/images/menu.svg";
import axios from "axios";

const User = ({ id, image, firstName, lastName, email, phoneNumber, status, isDeleted }) => {
  return (
    <div
      className={`${
        id % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#EAF0FF]"
      } rounded-[10px] grid grid-cols-[1fr_1fr_0.6fr_0.6fr_0.6fr] gap-4 items-center py-4 px-2 justify-between text-[0.875rem] my-3`}
    >
      <div className="flex items-center gap-2">
        <img src={image.url} alt="user" className="w-[30px] h-[30px]"/>
        <div>
          {firstName}
          {" "}
          {lastName}
        </div>
      </div>
      <div>{email}</div>
      <div className="text-[#616161]">{phoneNumber}</div>
      <div className="text-[#292D32] text-[0.875rem]">
        {status === 'VISITOR' ? "Пользователь" : null}
      </div>
      <div className="flex items-center gap-2">
        <div
          className={`bg-[rgba(64,_58,_100,_0.1)] px-3 py-1 rounded-[33px] text-[#E21C1C]           ${
            isDeleted ? "text-[#E21C1C]" : "text-[#616161]"
          }`} 
        >
          <p className={`opacity-100 font-semibold`}>
            {isDeleted ? "Да" : "Нет"}
            {/* Нет */}
          </p>
        </div>
        <div className="hover:cursor-pointer hover:opacity-40 p-2">
          <img src={menu} alt="dots" />
        </div>
      </div>
    </div>
  );
};

const Users = () => {
  // search
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);

  // const users = [
  //   {
  //     id: 1,
  //     imgUrl: userPhoto,
  //     fullName: "Девид Вуд",
  //     email: "david@gmail.com",
  //     phoneNumber: "+996709123456",
  //     status: "Ментор",
  //     isBlocked: false,
  //   },
  //   {
  //     id: 2,
  //     imgUrl: userPhoto,
  //     fullName: "Линда Роуз",
  //     email: "linda@gmail.com",
  //     phoneNumber: "+99676599999",
  //     status: "Ментор",
  //     isBlocked: true,
  //   },
  //   {
  //     id: 3,
  //     imgUrl: userPhoto,
  //     fullName: "Спанч Боб",
  //     email: "spanchbob@gmail.com",
  //     phoneNumber: "+99670945645",
  //     status: "Ментор",
  //     isBlocked: true,
  //   },
  //   {
  //     id: 4,
  //     imgUrl: userPhoto,
  //     fullName: "Принц Саудии",
  //     email: "prince@gmail.com",
  //     phoneNumber: "+99670456456",
  //     status: "Ментор",
  //     isBlocked: true,
  //   },
  //   {
  //     id: 5,
  //     imgUrl: userPhoto,
  //     fullName: "Диана Грег",
  //     email: "diana@gmail.com",
  //     phoneNumber: "+996709655555",
  //     isBlocked: false,
  //   },
  //   {
  //     id: 6,
  //     imgUrl: userPhoto,
  //     fullName: "Ханна Раппопорт",
  //     email: "henna@gmail.com",
  //     phoneNumber: "+99670000000",
  //     isBlocked: true,
  //   },
  //   {
  //     id: 7,
  //     imgUrl: userPhoto,
  //     fullName: "Эльза Шиф",
  //     email: "elsa@gmail.com",
  //     phoneNumber: "+9967345455",
  //     isBlocked: false,
  //   },
  //   {
  //     id: 8,
  //     imgUrl: userPhoto,
  //     fullName: "Эвелина Леви",
  //     email: "evelina@gmail.com",
  //     phoneNumber: "+996709123456",
  //     isBlocked: false,
  //   },
  //   {
  //     id: 9,
  //     imgUrl: userPhoto,
  //     fullName: "Ланг Имбер",
  //     email: "lang@gmail.com",
  //     phoneNumber: "+9967345354",
  //     isBlocked: false,
  //   },
  //   {
  //     id: 10,
  //     imgUrl: userPhoto,
  //     fullName: "Спанч Боб",
  //     email: "spanchbob@gmail.com",
  //     phoneNumber: "+99673748573",
  //     isBlocked: false,
  //   },
  //   {
  //     id: 11,
  //     imgUrl: userPhoto,
  //     fullName: "Спанч Боб",
  //     email: "spanchbob@gmail.com",
  //     phoneNumber: "+99655333343",
  //     isBlocked: true,
  //   },
  //   {
  //     id: 12,
  //     imgUrl: userPhoto,
  //     fullName: "Спанч Боб",
  //     email: "spanchbob@gmail.com",
  //     phoneNumber: "+996723672362",
  //     isBlocked: true,
  //   },
  //   {
  //     id: 13,
  //     imgUrl: userPhoto,
  //     fullName: "Спанч Боб",
  //     email: "spanchbob@gmail.com",
  //     phoneNumber: "+996709123400",
  //     isBlocked: false,
  //   },
  //   {
  //     id: 14,
  //     imgUrl: userPhoto,
  //     fullName: "Спанч Боб",
  //     email: "spanchbob@gmail.com",
  //     phoneNumber: "+996709654321",
  //     isBlocked: false,
  //   },
  // ];

  useEffect(() => {
    axios.get("https://girls4girls.herokuapp.com/api/user").then(res => setUsers(res.data.data))
  }, [])

  return (
    <section className="bg-[#EAF0FF] w-full flex flex-col justify-end">
      <div className="px-6 min-h-[85%] mt-[15vh]">
        <h1 className="text-[#662D91] font-bold text-2xl mb-6">Пользователи</h1>
        <div className="relative w-[40%] mb-4">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="search"
            id="gsearch"
            name="gsearch"
            placeholder="Поиск пользователя..."
            className="w-full placeholder:text-[#616161] placeholder:text-[1rem] border border-[#662D91] rounded-[8px] pl-12 pr-2 py-2 outline-none"
          />
          <img
            src={search}
            alt="search-icon"
            className="absolute my-auto top-0 bottom-0 left-2"
          />
        </div>
        <div className="w-full bg-[#FDFDFD] rounded-[20px] min-h-[700px] p-4">
          <div className="grid grid-cols-[1fr_1fr_0.6fr_0.6fr_0.6fr] gap-4 items-center justify-between text-[#616161] font-semibold text-[0.875rem] mb-4">
            <div>Имя и фамилия</div>
            <div>Электронная почта</div>
            <div>Номер телефона</div>
            <div>Статус</div>
            <div>Блокировка</div>
          </div>
          <div>
            {!searchValue ?
              users.map((user) => {
                return <User {...user} key={user.id} />;
              })
            :
              users.filter((user) => {
                return ((user.firstName.toLowerCase().includes(searchValue.toLocaleLowerCase()) || user.email.toLowerCase().includes(searchValue.toLocaleLowerCase()) || user.lastName.toLowerCase().includes(searchValue.toLocaleLowerCase()) || user.phoneNumber.toLowerCase().includes(searchValue.toLocaleLowerCase())))      
              }).map((user) => {
                return <User {...user} key={user.id} />
              })
            }
            {/* {   users &&           users.map((user) => {
                return <User {...user} key={user.id} />;
              })} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
