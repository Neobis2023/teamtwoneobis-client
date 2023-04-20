import React, { useEffect, useState } from "react";
import Back from "./components/Back";
import Input from "./components/Input";
import Radio from "./components/Radio";
import Button from "./components/Button";
import Textarea from "./components/Textarea";
import Checkbox from "./components/Checkbox";
import InputDate from "./components/InputDate";
import Dropdown from "./components/Dropdown";
import axios from "./api/axios";
import Modal from "./components/Modal";

const ApplyForm = ({ questionnaire }) => {
  // const [pageNumber, setPageNumber] = useState(1);

  const [isModalActive, setIsModalActive] = useState(false);
  const CURRENT_YEAR = new Date().getFullYear();
  const [eventName, setEventName] = useState("");
  const [questionnaireId, setQuestionnaireId] = useState(0);
  const [questionnaireData, setQuestionnaireData] = useState({
    questionnaireId: questionnaire?.id,
    answers: [],
  });

  const handleCheckboxChange = (checkedOptions) => {
    console.log(checkedOptions);
  };

  // user info

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const event = sessionStorage.getItem("eventName");
    setEventName(event);
    console.log(user);
  }, [eventName]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    console.log(questionnaire?.questions.map((f) => f));
    setQuestionnaireId(questionnaire && questionnaire.id);
  }, [questionnaire]);

  useEffect(() => {
    if (questionnaire) {
      setQuestionnaireData((prevData) => ({
        ...prevData,
        questionnaireId: questionnaire.id,
      }));
    }
  }, [questionnaire]);

  useEffect(() => {
    console.log(questionnaireData);
  }, [questionnaireData]);

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    console.log(token)
    console.log(questionnaireData);
    try {
      const res = await axios.post(
        "/questionnaire/response",
        questionnaireData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(res);

      const trainingId = sessionStorage.getItem("eventId");
      const questionnaireResponseId = res.data.id;

      console.log(trainingId, questionnaireResponseId);

      const isApplied = await axios.post(
        `/training/apply?trainingId=${trainingId}&questionnaireResponseId=${questionnaireResponseId}`, null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsModalActive(true);
      console.log(isApplied);
    } catch (e) {
      console.log(e);
    }
  };

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // }
  return (
    <section className="w-[85%]">
      {isModalActive ? <Modal onClose={() => setIsModalActive(false)}/> : null}
      
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
              <form>
                {questionnaire &&
                  questionnaire.questions.map((question, index) => {
                    switch (question.type) {
                      case "CHECK_BOX":
                        return (
                          <Checkbox
                            options={question?.variants}
                            question={question?.text}
                            sublabel={question?.description}
                            id={question?.id}
                            setData={setQuestionnaireData}
                          />
                        );
                      case "VARIANTS":
                        return (
                          <Radio
                            options={question?.variants}
                            question={question?.text}
                            sublabel={question?.description}
                            id={question?.id}
                            setData={setQuestionnaireData}
                          />
                        );
                      case "TEXT":
                        return (
                          <Input
                            question={question?.text}
                            sublabel={question?.description}
                            id={question?.id}
                            setData={setQuestionnaireData}
                          />
                        );
                      case "DROP_DOWN":
                        <Dropdown
                          sublabel={question?.description}
                          question={question?.text}
                          options={question?.variants}
                          id={question?.id}
                          setData={setQuestionnaireData}
                        />;
                      default:
                        console.log("Unknown question type: ", question?.type);
                        return null;
                    }
                  })}
                <Button
                  text={"Отправить заявку"}
                  type="button"
                  onClick={handleSubmit}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;
