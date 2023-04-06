import React, { useState } from "react";
import Input from "../Input";

const AdminMentoringProgram = () => {
  const [qa, setQa] = useState([
    {
      id: 1,
      question: "Какие цели у программы?",
      answer: (
        <ol>
          <li>
            1. Укрепить самоуважения и уверенность в себе у молодых девушек.
          </li>
          <li>
            2. Вооружить девочек навыками и знаниями, необходимыми для того
            чтобы справляться с трудными ситуациями и преодолевать препятствия.
          </li>
          <li>
            3. Обеспечить безопасную и благоприятную среду для девочек, чтобы
            они могли исследовать свои интересы, увлечения и цели.{" "}
          </li>
          <li>
            4. Развивать чувство общности и принадлежности среди девочек из
            разных слоев общества.{" "}
          </li>
          <li>
            5. Поощрять девочек быть лидерами и вдохновлять их на позитивное
            влияние в своих сообществах.
          </li>
        </ol>
      ),
    },
    {
      id: 2,
      question: "Ценности",
      answer: (
        <ol>
          <li>1. Расширение прав и возможностей.</li>
          <li>
            2. Мы верим в расширение прав и возможностей девочек, чтобы они
            могли взять свою жизнь в свои руки и полностью раскрыть свой
            потенциал.
          </li>
          <li>3. Инклюзивность.</li>
          <li>
            4. Мы стремимся создать инклюзивную среду, в которой девочки из всех
            слоев общества чувствуют, что их ценят и поддерживают.
          </li>
          <li>5. Устойчивость/стойкость.</li>
          <li>
            6. Мы верим в воспитание стойкости у девочек, помогая им
            преодолевать препятствия и добиваться успеха в жизни.
          </li>
          <li>7. Менторство. </li>
          <li>
            8. Мы верим в силу наставничества, обеспечивающего руководство,
            поддержку и положительные ролевые модели для девочек.{" "}
          </li>
          <li>9. Рост</li>
          <li>
            10. Мы верим в то, что способствуем личностному и профессиональному
            росту девочек, вооружая их навыками, необходимыми для достижения
            успеха в жизни.
          </li>
        </ol>
      ),
    },
    {
      id: 3,
      question: "Видение",
      answer: (
        <p>
          Наше видение - создать мир, в котором у каждой девочки есть
          инструменты, навыки и поддержка, необходимые для успешной жизни,
          независимо от того, с какими препятствиями она может столкнуться.
        </p>
      ),
    },
    {
      id: 4,
      question: "Миссия",
      answer: (
        <p>
          Наша миссия - дать девочкам возможность поверить в себя и свои
          способности, повысить их самооценку и устойчивость, а также поддержать
          их в преодолении трудностей, связанных с взрослением в современном
          мире.
        </p>
      ),
    },
  ]);
  return (
    <div>
      <h2 className="text-[#662D91] font-bold text-[1.5rem] pt-6 mb-6">
        Менторская программа
      </h2>
      <div className="">
        <p className="text-[#000000] font-semibold text-[1.25rem] mb-2">
          Часто задаваемые вопросы
        </p>
        <div className="flex flex-col gap-2 w-[60%]">
          {/* <p className="font-semibold text-base text-[#000]">Вопрос 1</p>
          <Input label={"Вопрос"} />
          <Input label={"Ответ"} /> */}
        </div>
      </div>
    </div>
  );
};

export default AdminMentoringProgram;
