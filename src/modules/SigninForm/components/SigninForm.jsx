import React, { useEffect, useState } from "react";
import Button from '../../../UI/Button/Button'
import Input from "../../../UI/Input/Input";
import line from '../assets/images/line-signin.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { signinSchema } from "../../../helpers/validation/schema";
import axios from "../api/axios";
import { useTranslation } from "react-i18next";


const SigninForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedin, setLoggedin] = useState(null);
  const fromPage = location.state?.from?.pathname;
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  const onSubmit = async (values, actions) => {
    if (!values.email) {
      delete values.email;
    }
    if (!values.phoneNumber) {
      delete values.phoneNumber;
    }
    try {
      const response = await axios.post('/auth/login', JSON.stringify(values));
      console.log(response);
  
      if (response.status === 200 || response.status === 201) {
        actions.resetForm();
        localStorage.setItem("token", response.data.access_token.toString());
        console.log(response, 'this is response')
        console.log(response.data.access_token.toString(), 'this is token')
        const token = response.data.access_token.toString();
        const getUser = await axios.get('/user/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        const getFavorites = await axios.get('/like', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        getFavorites.data.map((blog) => {
          if (blog.blog) {
            localStorage.setItem(`blog-${blog.blog.id}-isFavorite`, "true");
          }
        });
      
        console.log(getUser, 'this is user')
        const userInfo = {
          email: getUser.data.email,
          firstName: getUser.data.firstName,
          lastName: getUser.data.lastName,
          phoneNumber: getUser.data.phoneNumber,
          region: getUser.data.region,
          role: getUser.data.role,
          status: getUser.data.status,
          gender: getUser.data.gender,
          id: getUser.data.id,
          image: getUser.data.image,
          dateOfBirth: getUser.data.dateOfBirth,
        }
        localStorage.setItem("user", JSON.stringify(userInfo));

        
        const getUsers = await axios.get('/user');

        fromPage ? navigate(fromPage, { replace: true }) : navigate(`/profile/${getUser.data.id}`);
        console.log(getUsers);
      } 
    } catch(e) {
      console.log('Error: ', e);
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
        <Input placeholder={t('Signin.email')} type='email' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email}/>
        {touched.email && errors.email ? <p className="text-sm text-red-500 mr-auto pl-2">{errors.email}</p> : null}
      </div>
      <div className="flex items-center gap-2">
        <img src={line} alt="line" className="h-fit" />
        <p className="text-[rgba(41,_45,_50,_0.6)]">{t('Signin.or')}</p>
        <img src={line} alt="line" className="h-fit" />
      </div>
      <div className="w-full">
        <Input placeholder={t('Signin.phoneNumber')} type='text' name='phoneNumber' onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber}/>
        {touched.phoneNumber && errors.phoneNumber ? <p className="text-sm text-red-500 mr-auto pl-2">{errors.phoneNumber}</p> : null}
      </div>
      <div className="w-full">
        <Input placeholder={t('Signin.password')} type='password' name='password' onChange={handleChange} onBlur={handleBlur} value={values.password}/>
        {touched.password && errors.password ? <p className="text-sm text-red-500 mr-auto pl-2">{errors.password}</p> : null}
      </div>
      <div className="w-full">
        {/* <Button text={'Войти'} disabled={isSubmitting || (!values.password || (!values.phoneNumber && !values.email))}/> */}
        <Button text={t('Signin.login')} disabled={isSubmitting || (!values.password || (!values.phoneNumber && !values.email)) || (errors.phoneNumber || errors.email)}/>
      </div>
      {loggedin===false && <p className="text-sm text-red-500 mr-auto pl-2 mx-auto">{t('Signin.error')}</p>}
      <NavLink
        to="/"
        className="text-[rgba(41,_45,_50,_0.6)] ml-auto font-normal text-[1.25rem]"
      >
        {t('Signin.forget')}
      </NavLink>
    </form>
  );
};

export default SigninForm;

