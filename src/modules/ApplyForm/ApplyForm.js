import React, { useEffect, useState } from "react";
import Back from "./components/Back";
import Input from "./components/Input";
import Radio from "./components/Radio";
import Button from "./components/Button";
import Textarea from "./components/Textarea";
import Checkbox from "./components/Checkbox";
import InputDate from "./components/InputDate";

 {/* <div className="text-[#403A64] font-medium text-[clamp(0.7rem,_0.97vw,_1rem)] flex flex-col gap-4 border-b pb-4">
                <div>
                  <p className="mb-1">Дорогие девочки!</p>
                  <p>
                    Приглашаем Вас принять участие на 2-дневном тренинге "Girls
                    for Girls", который пройдет 7-8 Апреля, 2023г. в Канте.
                    Целью тренинга является - мотивация девочек к саморазвитию,
                    лидерству, защите своих прав, и участию в социальных
                    проектах, которые внесут вклад в развитие нашего общества.
                  </p>
                </div>
                <div>
                  <p className="mb-1">Тренинг включает в себя:</p>
                  <p>
                    - Сессии от тренеров на темы личностного роста, ментального
                    и репродуктивного здоровья, лидерства, здорового образа
                    жизни и права
                  </p>
                  <p>
                    - Сессии о программах по обмену, лидерских и менторских
                    программах
                  </p>
                  <p>
                    - Общество крутых девушек-менторов, которые помогут вам
                    поверить в себя
                  </p>
                  <p>- Сессии арт-терапии, медитации</p>
                  <p>- Питание на время тренингов и раздаточные материалы.</p>
                </div>
                <div>
                  <p className="mb-1">Требования к участницам:</p>
                  <p>- Девочки из Канта области в возрасте от 14 до 19 лет💁‍♀️</p>
                  <p>
                    - Быть заинтересованными в саморазвитии, изучении себя,
                    своих прав и лидерства💡
                  </p>
                  <p>
                    - Иметь возможность находиться в месте проведения тренингов
                    в течение 2 дней.
                  </p>
                </div>
                <div>
                  <p className="mb-1">Место и даты проведения:</p>
                  <p>7-8 апреля в г. Кант Американский уголок</p>
                </div>
                <div>Участие бесплатное!❗</div>
                <div>
                  <p className="mb-1">Дедлайн для подачи заявок на тренинг:</p>
                  <p>31 марта 23:59</p>
                </div>
                <div>
                  Проект финансируется в рамках программы SIDP грант и
                  администрируется Центром Гражданской Активности АУЦА.
                </div>
                <div>
                  <p className="mb-1">Контакты: </p>
                  <div className="flex flex-col">
                    <NavLink to={"/"}>girlsforgirls.kg@gmail.com </NavLink>
                    <NavLink to={"/"}>instagram.com/girlsforgirls_kg</NavLink>
                  </div>
                </div>
              </div> */}

const ApplyForm = () => {
  // const [pageNumber, setPageNumber] = useState(1);
  const CURRENT_YEAR = new Date().getFullYear();
  const [eventName, setEventName] = useState("");
  // user info

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)

  }, [eventName])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // }
  return (
    <section className="w-[85%]">
      <div className="myWrapper py-10 flex items-start">
        <Back className={"w-[20%] mt-2"} />
        <div className="w-[75%]">
          <h1 className="text-[clamp(1.8rem_,2.22vw,_2.3rem)] text-[#C192EE] font-extrabold mb-4 border-b pb-2">
            Заявка на {eventName} {CURRENT_YEAR}
          </h1>
            <div>
              <div className="mt-4">
                <h2 className="text-[#C192EE] font-extrabold text-[clamp(1.3rem,_1.66vw,_1.8rem)]">
                  Заполнение анкеты
                </h2>
                <div>
                  {/* <Input question={"Фамилия"} value={lastName} onChange={(e) => setFirstName(e.target.value)}/>
                  <Input question={"Имя"} value={firstName} onChange={(e) => setLastName(e.target.value)}/>
                  <Input question={"Адрес электронной почты"} value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <InputDate label={'Дата рождения'} selected={selectedDate} onChange={handleDateChange} sublabel={'На момент прохождения тренинга вам должно быть от 14 до 19 лет включительно.'}/>
                  <Input question={"Номер телефона"} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/> */}
                  <Radio question={'Из какого вы региона?'} options={['Кант']}/>
                  <Input
                    question={"Укажите ваш район, город или село"}
                  />
                  <Radio
                    question={
                      "Будет ли у вас возможность приезжать и уезжать на место тренинга в дни его проведения?"
                    }
                    options={["Да", "Нет"]}
                  />
                  {/* <Radio question={'Где вы узнали о тренинге?'} options={['Инстаграм', 'Фейсбук', 'От друзей']} another={true}/> */}
                </div>
                <Button text={"Отправить заявку"} />
              </div>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;
