import React, { useState } from "react";
import Button from '../../../UI/Button/Button'
import Input from "../../../UI/Input/Input";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { confirmSchema } from "../../../helpers/validation/schema";
import axios from "../api/axios";
import useLocalStorage from "../../../helpers/hooks/useLocalStorage";


const ConfirmForm = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useLocalStorage('phoneNumber', '');
  const [email, setEmail] = useLocalStorage('email', '');
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (values, actions) => {
    // handleConfirm(values);
    // actions.resetForm();
    try {
      const response = await axios.post('/confirm', JSON.stringify(values));
      console.log(values);

      if(response.status === 200 || response.status === 201) {
        console.log(response)
        actions.resetForm();
        navigate('/signin');
      }

      console.log(response);
      return response;

    } catch(e) {
      console.log('Error: ', e.response.data.message);
      setErrorMessage(e.response.data.message)
    }
  }

  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: email, 
      phoneNumber: phoneNumber, 
      code: ''
    },
    validationSchema: confirmSchema,
    onSubmit
  })


  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4 mb-5">
      <div className="w-full">
        <Input placeholder={'Код подтверждения'} type='text' name='code' onChange={handleChange} onBlur={handleBlur} value={values.code}/>
        {touched.code && errors.code ? <p className="text-sm text-red-500 mr-auto pl-2">{errors.code}</p> : null}
      </div>
      {errorMessage && <p className="mx-auto text-[red]">Неверный код подтверждения</p>}
      <button
        className="text-[rgba(41,_45,_50,_0.6)] ml-auto font-normal text-[1rem] hover:text-[rgba(102,_45,_145,_0.6)]"
      >
        Отправить повторно?
      </button>
      <div className="w-full">
        <Button text={'Подтвердить'} disabled={isSubmitting || errors.code || !values.code}/>
      </div>
    </form>
  );
};

export default ConfirmForm;