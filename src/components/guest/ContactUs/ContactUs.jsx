import React from "react";
import underline from "../../../images/landing/line.svg";
import DetailsButton from "../DetailsButton";
import styles from "./ContactUs.module.css";

const ContactUs = ({ ...animation }) => {
  return (
    <section className="py-20">
      <div className="myWrapper">
        <form className="bg-[#F2F1FA] w-full min-w-[600px] max-w-[1400px] mx-auto p-20 text-center rounded-[100px]" {...animation}>
          <h2 className="mySubtitle">Обратная связь</h2>
          <img src={underline} alt="underline" className="mx-auto my-4" />
          <p className="font-light text-3xl text-[rgba(71,_18,_128,_0.8)] mb-4">
            Девочки - это круто
          </p>
          <div className="flex flex-col gap-8">
            <div className="flex justify-between">
              <input type="text" placeholder="Имя" className={styles.myInput} />
              <input
                type="text"
                placeholder="Фамилия"
                className={styles.myInput}
              />
            </div>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Email"
                className={styles.myInput}
              />
              <input
                type="text"
                placeholder="Номер телефона"
                className={styles.myInput}
              />
            </div>
            <div className="flex">
              <input
                id={styles.subject}
                type="text"
                placeholder="Тема"
                className={styles.myInput}
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
              text="Отправить"
              arrow={false}
              className="!bg-[rgba(186,_148,_232,_0.7)] !w-[50%] justify-center mx-auto"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
