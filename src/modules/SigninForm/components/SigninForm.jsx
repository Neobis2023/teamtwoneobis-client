import React from "react";
import Button from '../../../UI/Button/Button'
import Input from "../../../UI/Input/Input";
import line from '../../../assets/images/auth/line-signin.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { signinSchema } from "../../../helpers/validation/schema";
import axios from "../api/axios";


const SigninForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    handleSignin(values);
    actions.resetForm();
  }

  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: '', 
      phoneNumber: '', 
      password: ''
    },
    validationSchema: signinSchema,
    onSubmit
  })

  const handleSignin = async (user) => {
    try {
      const response = await axios.post('/login', JSON.stringify(user));
      console.log(user);

      if(!response.status === 200 || !response.status === 201) {
        console.log(response)
        throw new Error('Invalid data');
      }

      console.log(response);
      navigate('/loggedin');
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
      <div className="flex items-center gap-2">
        <img src={line} alt="line" className="h-fit" />
        <p className="text-[rgba(41,_45,_50,_0.6)]">или</p>
        <img src={line} alt="line" className="h-fit" />
      </div>
      <div className="w-full">
        <Input placeholder={'Номер телефона'} type='number' name='phoneNumber' onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber}/>
        {touched.phoneNumber && errors.phoneNumber ? <p className="text-sm text-red-500 mr-auto pl-2">{errors.phoneNumber}</p> : null}
      </div>
      <div className="w-full">
        <Input placeholder={'Пароль'} type='password' name='password' onChange={handleChange} onBlur={handleBlur} value={values.password}/>
        {touched.password && errors.password ? <p className="text-sm text-red-500 mr-auto pl-2">{errors.password}</p> : null}
      </div>
      <div className="w-full">
        <Button text={'Войти'} disabled={isSubmitting}/>
      </div>
      <NavLink
        to="/"
        className="text-[rgba(41,_45,_50,_0.6)] ml-auto font-normal text-[1.25rem]"
      >
        Забыли пароль?
      </NavLink>
    </form>
  );
};

export default SigninForm;

