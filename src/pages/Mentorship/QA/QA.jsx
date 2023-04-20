import React from "react";
import QAItem from "./QAItem";
import { useTranslation } from "react-i18next";

const QA = () => {
  const { t } = useTranslation();
  const firstQuestion = t('Mentorship.lastSection.firstQuestion');
  const secondQuestion = t('Mentorship.lastSection.secondQuestion');
  const thirdQuestion = t('Mentorship.lastSection.thirdQuestion');
  const fourthQuestion = t('Mentorship.lastSection.fourthQuestion');
  const data = [
    {
      id: 1,
      question: firstQuestion,
      answer: (
        <ol>
          <li>
            {t('Mentorship.lastSection.firstAnswer.1')}
          </li>
          <li>
          {t('Mentorship.lastSection.firstAnswer.2')}
          </li>
          <li>
          {t('Mentorship.lastSection.firstAnswer.3')}
          </li>
          <li>
          {t('Mentorship.lastSection.firstAnswer.4')}
          </li>
          <li>
          {t('Mentorship.lastSection.firstAnswer.5')}
          </li>
        </ol>
      ),
    },
    {
      id: 2,
      question: secondQuestion,
      answer: (
        <ol>
          <li>{t('Mentorship.lastSection.secondAnswer.1')}</li>
          <li>
          {t('Mentorship.lastSection.secondAnswer.2')}
          </li>
          <li>{t('Mentorship.lastSection.secondAnswer.3')}</li>
          <li>
          {t('Mentorship.lastSection.secondAnswer.4')}
          </li>
          <li>{t('Mentorship.lastSection.secondAnswer.5')}</li>
          <li>
          {t('Mentorship.lastSection.secondAnswer.6')}
          </li>
          <li>{t('Mentorship.lastSection.secondAnswer.7')} </li>
          <li>
          {t('Mentorship.lastSection.secondAnswer.8')}
          </li>
          <li>{t('Mentorship.lastSection.secondAnswer.9')}</li>
          <li>
          {t('Mentorship.lastSection.secondAnswer.10')}
          </li>
        </ol>
      ),
    },
    {
      id: 3,
      question: thirdQuestion,
      answer: (
        <p>
          {t('Mentorship.lastSection.thirdAnswer.1')}
        </p>
      ),
    },
    {
      id: 4,
      question: fourthQuestion,
      answer: (
        <p>
          {t('Mentorship.lastSection.fourthAnswer.1')}
        </p>
      ),
    },
  ];
  return (
    <section className="qa py-20 bg-[#F8F9FA]">
      <div className="myWrapper">
        <h2 className="text-[#662D91] font-semibold text-[clamp(1.2rem,_2.5vw,_2.5rem)] text-center pb-10">
          Ответы на часто задаваемые вопросы
        </h2>
        <div className="accordion px-20">
          {data.map((item) => {
            return (
              <QAItem key={item.id} question={item.question} answer={item.answer} />
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default QA;
