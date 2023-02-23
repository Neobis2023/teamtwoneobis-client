import React from "react";
import Button from '../../../UI/Button/Button'
import Input from "../../../UI/Input/Input";
import line from '../../../assets/images/auth/line-signin.png'
import { NavLink } from 'react-router-dom';


const SigninForm = () => {
  return (
    <form action="" className="w-full flex flex-col items-center gap-5 mb-5">
      <Input placeholder={'Электронная почта'} type='email'/>
      <div className="flex items-center gap-2">
        <img src={line} alt="line" className="h-fit" />
        <p className="text-[rgba(41,_45,_50,_0.6)]">или</p>
        <img src={line} alt="line" className="h-fit" />
      </div>
      <Input placeholder={'Номер телефона'} type='number'/>
      <Input placeholder={'Пароль'} type='password'/>
      <Button text={'Войти'}/>
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

