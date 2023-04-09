import React, { useEffect, useState } from "react";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { confirmSchema } from "../../../helpers/validation/schema";
import axios from "../api/axios";
import useLocalStorage from "../../../helpers/hooks/useLocalStorage";

const ConfirmForm = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useLocalStorage("phoneNumber", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [errorMessage, setErrorMessage] = useState("");
  const [sendAgain, setSendAgain] = useState(null);
  const [seconds, setSeconds] = useState(60);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    if (seconds > 0 && sendAgain === 'TIMER') {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => {
        clearTimeout(timer);
      };
    } 
    if (seconds === 0) {
      setSendAgain("STOP");
    }
  }, [seconds, sendAgain]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  // Calculate the minutes and seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Format the time as a string
  const timeString = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;

  // Send again

  // const handleSendAgain = (values) => {

  // }

  const onSubmit = async (values, actions) => {
    // handleConfirm(values);
    // actions.resetForm();

    try {
      const response = await axios.post("/confirm", JSON.stringify(values));
      console.log(values);

      if (response.status === 200 || response.status === 201) {
        console.log(response);
        setIsConfirmed(true);
        actions.resetForm();
        navigate("/signin");
      }

      console.log(response);
      return response;
    } catch (e) {
      console.log("Error: ", e.response.data.message);
      setErrorMessage(e.response.data.message);
      setSendAgain('TIMER');
      setSeconds(60);
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: email,
      phoneNumber: phoneNumber,
      code: "",
    },
    validationSchema: confirmSchema,
    onSubmit,
  });

  return (
    <> 
    {isConfirmed ?  <div className="text-center text-[#79768D] text-[clamp(0.925rem,_1.25vw,_1.425rem)] mb-4">Ваш аккаунт успешно подтвержден! <NavLink className={'text-[#8860c3] font-semibold'} to={'/signin'}>Войти</NavLink></div> :       <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center gap-4 mb-5"
    >
      <p className="text-center text-[#79768D] text-[clamp(0.925rem,_1.25vw,_1.425rem)] mb-4">
        Введите 6-значный код, отправленный на эл.почту {email} и номер телефона {phoneNumber}. Код действителен в течение 10 минут
      </p>
      <div className="w-full">
        <Input
          placeholder={"Введите 6-ти значный код подтверждения"}
          type="text"
          name="code"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.code}
        />
        {touched.code && errors.code ? (
          <p className="text-sm text-red-500 mr-auto pl-2">{errors.code}</p>
        ) : null}
      </div>
      {errorMessage && (
        <p className="mx-auto text-[red]">Неверный код подтверждения</p>
      )}

      <div className="w-full">
        <Button
          text={"Подтвердить"}
          disabled={isSubmitting || errors.code || !values.code}
        />
      </div>
      {sendAgain === 'TIMER' ? <p className="text-[#79768D] font-semibold text-base">Отправить код повторно через {timeString}</p> : sendAgain === 'STOP' ? <button type='submit' className="text-[#292D32] mx-auto font-semibold text-base hover:text-[rgba(102,_45,_145,_0.6)]" onClick={() =>  {
        setSendAgain('TIMER') 
        setSeconds(60) 
      }}>
        Отправить код ещё раз
      </button> : null}
    </form> }
    </>
    
  );
};

export default ConfirmForm;
