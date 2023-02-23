import React from "react";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
const SignupForm = () => {
  return (
    <form action="" className="w-full flex flex-col items-center gap-5 mb-5">
      <Input placeholder={'email'} type='email'/>
      <Input  placeholder={'Номер  телефона'} type='number'/>
      <Input  placeholder={'Имя'} type='text'/>
      <Input  placeholder={'Фамилия'} type='text'/>
      <Input  placeholder={'Пароль'} type='password'/>
      <Input  placeholder={'Пароль ещё раз'} type='password'/>
      <Button text={'Зарегистрироваться'}/>
    </form>
  );
};

export default SignupForm;
