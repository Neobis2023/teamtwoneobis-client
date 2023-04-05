import React, { useEffect, useState } from "react";
import Back from "./components/Back";
import { NavLink, useLocation } from "react-router-dom";
import Input from "./components/Input";
import Radio from "./components/Radio";
import Button from "./components/Button";
import Textarea from "./components/Textarea";
import Checkbox from "./components/Checkbox";
import { useSelector } from "react-redux";
import useLocalStorage from "../../helpers/hooks/useLocalStorage";

const ApplyForm = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const CURRENT_YEAR = new Date().getFullYear();
  const [eventName, setEventName] = useState("");
  useEffect(() => {
    setEventName(JSON.parse(sessionStorage.getItem('eventName')));
  }, [eventName])
  return (
    <section className="w-[85%]">
      <div className="myWrapper py-10 flex items-start">
        <Back className={"w-[20%] mt-2"} />
        <div className="w-[75%]">
          <h1 className="text-[clamp(1.8rem_,2.22vw,_2.3rem)] text-[#C192EE] font-extrabold mb-4 border-b pb-2">
            Заявка на {eventName} {CURRENT_YEAR}
          </h1>
          {pageNumber === 1 && (
            <div>
              <div className="text-[#403A64] font-medium text-[clamp(0.7rem,_0.97vw,_1rem)] flex flex-col gap-4 border-b pb-4">
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
              </div>
              <div className="mt-4">
                <h2 className="text-[#C192EE] font-extrabold text-[clamp(1.3rem,_1.66vw,_1.8rem)]">
                  Заполнение анкеты
                </h2>
                <div>
                  <Input question={"Фамилия"} />
                  <Input question={"Имя"} />
                  <Input question={"Адрес электронной почты"} />
                  <Input
                    question={"Дата рождения"}
                    type={"date"}
                    sublabel={
                      "Формат месяц/день/год. На момент прохождения тренинга вам должно быть от 14 до 19 лет включительно."
                    }
                    onfocus="(this.type = 'date')"
                    id="date"
                    className="hover:cursor-pointer"
                  />
                  <Input question={"Номер телефона"} />
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
                <Button text={"Далее"} onClick={() => setPageNumber(2)} />
              </div>
            </div>
          )}
          {pageNumber === 2 && (
            <div>
              <h2 className="text-[#C192EE] font-extrabold text-[clamp(1.3rem,_1.66vw,_1.8rem)]">
                Главные вопросы для прохождения
              </h2>
              <Textarea
                question={
                  "Почему именно вы должны принять участие в этом тренинге?"
                }
                sublabel={
                  "Перечислите 3 причины и объясните. Максимум 100 слов"
                }
              />
              <Textarea
                question={
                  "Что вы ожидаете от нашего тренинга? Чему вы хотите научиться?"
                }
                sublabel={"50-100 слов"}
              />
              <Checkbox
                question={"Какие из тем тренинга вас интересуют больше всего?"}
                options={[
                  "Карьерная готовность",
                  "Тайм-менеджмент",
                  "Цифровая грамотность",
                  "Здоровый образ жизни",
                  "Школьное насилие",
                  "Репродуктивное здоровье",
                  "Соблюдение прав человека",
                ]}
                another={true}
              />
              <Input
                question={"Какие темы еще вас интересуют?"}
                sublabel={
                  "Мы хотим узнать ваши предпочтения, чтобы сделать тренинг как можно полезным именно для вас."
                }
              />
              <Radio
                question={"Где вы узнали о тренинге?"}
                another={true}
                options={["Инстаграм", "Фейсбук", "От друзей"]}
              />
              {/* <button type="button" onClick={() => setPageNumber((currentNum) => currentNum - 1)}>Назад</button> */}
              <div className="flex gap-2">
                <Button text={"Назад"} type="button" className="bg-[#fff]" onClick={() => setPageNumber((currentPage) => currentPage - 1)}/>
                <Button text={"Отправить"} type="submit" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;
