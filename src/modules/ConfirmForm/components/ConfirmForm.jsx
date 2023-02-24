import React from "react";
import Button from '../../../UI/Button/Button'
import Input from "../../../UI/Input/Input";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { confirmSchema } from "../../../helpers/validation/schema";
import axios from "../api/axios";


const ConfirmForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    handleConfirm(values);
    actions.resetForm();
  }

  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: '', 
      phoneNumber: '', 
      code: ''
    },
    validationSchema: confirmSchema,
    onSubmit
  })

  const handleConfirm = async (user) => {
    try {
      const response = await axios.post('/login', JSON.stringify(user));
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
        <Input placeholder={'Электронная почта'} type='email' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email}/>
        {touched.email && errors.email ? <p className="text-sm text-red-500 mr-auto pl-2">{errors.email}</p> : null}
      </div>
      <div className="w-full">
        <Button text={'Подтвердить'} disabled={isSubmitting}/>
      </div>
    </form>
  );
};

export default ConfirmForm;