import React from "react";
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

  const onSubmit = async (values, actions) => {
    handleConfirm(values);
    actions.resetForm();
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

  const handleConfirm = async (user) => {
    try {
      const response = await axios.post('/confirm', JSON.stringify(user));
      console.log(user);

      if(!response.status === 200 || !response.status === 201) {
        console.log(response)
        throw new Error('Invalid data');
      }

      console.log(response);
      navigate('/confirmed');
      return response;

    } catch(e) {
      console.log('Error: ', e);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4 mb-5">
      <div className="w-full">
        <Input placeholder={'Код подтверждения'} type='text' name='code' onChange={handleChange} onBlur={handleBlur} value={values.code}/>
        {touched.code && errors.code ? <p className="text-sm text-red-500 mr-auto pl-2">{errors.code}</p> : null}
      </div>
      <button
        className="text-[rgba(41,_45,_50,_0.6)] ml-auto font-normal text-[1rem] hover:text-[rgba(102,_45,_145,_0.6)]"
      >
        Отправить повторно?
      </button>
      <div className="w-full">
        <Button text={'Подтвердить'} disabled={isSubmitting}/>
      </div>
    </form>
  );
};

export default ConfirmForm;