import React, { useState } from "react";
import Button from '../../../UI/Button/Button'
import Input from "../../../UI/Input/Input";
import line from '../assets/images/line-signin.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { signinSchema } from "../../../helpers/validation/schema";
import axios from "../api/axios";


const SigninForm = () => {
  const navigate = useNavigate();
  const [loggedin, setLoggedin] = useState(null);

  const onSubmit = async (values, actions) => {
    if (!values.email) {
      delete values.email;
    }
    if (!values.phoneNumber) {
      delete values.phoneNumber;
    }
    try {
      const response = await axios.post('/login', JSON.stringify(values));
      console.log(response);
  
      if (response.status === 200 || response.status === 201) {
        actions.resetForm();
        navigate('/loggedin');
      } else {
        throw new Error('Invalid data');
      }
  
    } catch(e) {
      console.log('Error: ', e.response.data.message);
      setLoggedin(false);
      console.log(errors)
      console.log(loggedin)
    }
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
        <Input placeholder={'Номер телефона'} type='text' name='phoneNumber' onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber}/>
        {touched.phoneNumber && errors.phoneNumber ? <p className="text-sm text-red-500 mr-auto pl-2">{errors.phoneNumber}</p> : null}
      </div>
      <div className="w-full">
        <Input placeholder={'Пароль'} type='password' name='password' onChange={handleChange} onBlur={handleBlur} value={values.password}/>
        {touched.password && errors.password ? <p className="text-sm text-red-500 mr-auto pl-2">{errors.password}</p> : null}
      </div>
      <div className="w-full">
        {/* <Button text={'Войти'} disabled={isSubmitting || (!values.password || (!values.phoneNumber && !values.email))}/> */}
        <Button text={'Войти'} disabled={isSubmitting || (!values.password || (!values.phoneNumber && !values.email)) || (errors.phoneNumber || errors.email)}/>
      </div>
      {loggedin===false && <p className="text-sm text-red-500 mr-auto pl-2 mx-auto">Неверный логин или пароль</p>}
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

