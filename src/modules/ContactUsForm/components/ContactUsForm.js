import React from "react";
import underline from "../../../assets/images/main/contactus/line.svg";
import Input from "../../../UI/Input/Input";
import DetailsButton from "../../../UI/DetailsButton/DetailsButton";
import styles from './ContactUsForm.module.css';

const ContactUsForm = ({ animation }) => {
  return (
    <form
      className="bg-[#F2F1FA] w-full min-w-[600px] max-w-[1400px] mx-auto p-20 text-center rounded-[100px]"
      {...animation}
    >
      <h2 className="mySubtitle">Обратная связь</h2>
      <img src={underline} alt="underline" className="mx-auto my-4" />
      <p className="font-light text-3xl text-[rgba(71,_18,_128,_0.8)] mb-4">
        Девочки - это круто
      </p>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <Input
            type={"text"}
            placeholder="Имя"
            className={
              "basis-[49.5%] !border-2 !border-[rgba(71,_18,_128,_0.4)]"
            }
          />
          <Input
            type={"text"}
            placeholder="Фамилия"
            className={
              "basis-[49.5%] !border-2 !border-[rgba(71,_18,_128,_0.4)]"
            }
          />
        </div>
        <div className="flex justify-between">
          <Input
            type={"email"}
            placeholder="Электронная почта"
            className={
              "basis-[49.5%] !border-2 !border-[rgba(71,_18,_128,_0.4)]"
            }
          />
          <Input
            type={"number"}
            placeholder="Номер телефона"
            className={
              "basis-[49.5%] !border-2 !border-[rgba(71,_18,_128,_0.4)]"
            }
          />
        </div>
        <div className="flex">
          <Input
            type={"text"}
            placeholder="Тема"
            className={
              "!border-2 !border-[rgba(71,_18,_128,_0.4)]"
            }
          />
        </div>
        <div className="flex">
          <textarea
            id={styles.textarea}
            name="textarea"
            cols="30"
            rows="10"
            placeholder="Расскажите нам что-нибудь"
            className={styles.myInput}
          ></textarea>
        </div>
        <DetailsButton
          text={"Отправить"}
          arrow={false}
          className="!bg-[rgba(186,_148,_232,_0.7)] !w-[50%] justify-center mx-auto"
        />
      </div>
    </form>
  );
};

export default ContactUsForm;
