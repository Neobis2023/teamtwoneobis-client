import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../helpers/hooks/useLocalStorage";
import { signupSchema } from "../../../helpers/validation/schema";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import axios from "../api/axios";

const SignupForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  const onSubmit = async (values, actions) => {
    try {
      const response = await handleSignup(values);
      if (response?.status === 200 || response?.status === 201) {
        actions.resetForm();
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleSignup = async (user) => {
    const userCopy = { ...user };
    delete userCopy.confirmPassword;
    try {
      const response = await axios.post("/signup", JSON.stringify(userCopy));

      if (response?.status === 201 || response?.status === 200) {
        localStorage.setItem("email", JSON.stringify(values.email));
        localStorage.setItem("phoneNumber", JSON.stringify(values.phoneNumber));
        navigate("/signup/confirm");
        console.log(response);
      }
    } catch (error) {
      console.log("Error:", error);
      setError(error.response.data.message)
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "", // only gmail for that
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit,
  });
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center gap-4  mb-5"
    >
      <div className="w-full">
        <Input
          placeholder={"email"}
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      {touched.email && errors.email ? (
        <p className="text-sm text-red-500 mr-auto pl-2">{errors.email}</p>
      ) : null}
      <div className="w-full">
        <Input
          placeholder={"Номер  телефона"}
          name="phoneNumber"
          type="text"
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      {touched.phoneNumber && errors.phoneNumber ? (
        <p className="text-sm text-red-500 mr-auto pl-2">
          {errors.phoneNumber}
        </p>
      ) : null}
      <div className="w-full">
        <Input
          placeholder={"Имя"}
          name="firstName"
          type="text"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      {touched.firstName && errors.firstName ? (
        <p className="text-sm text-red-500 mr-auto pl-2">{errors.firstName}</p>
      ) : null}
      <div className="w-full">
        {" "}
        <Input
          placeholder={"Фамилия"}
          name="lastName"
          type="text"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      {touched.lastName && errors.lastName ? (
        <p className="text-sm text-red-500 mr-auto pl-2">{errors.lastName}</p>
      ) : null}
      <div className="w-full">
        <Input
          placeholder={"Пароль"}
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      {touched.password && errors.password ? (
        <p className="text-sm text-red-500 mr-auto pl-2">{errors.password}</p>
      ) : null}
      <div className="w-full">
        {" "}
        <Input
          placeholder={"Пароль ещё раз"}
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      {touched.confirmPassword && errors.confirmPassword ? (
        <p className="text-sm text-red-500 mr-auto pl-2">
          {errors.confirmPassword}
        </p>
      ) : null}
      <div className="w-full">
        <Button
          text={"Зарегистрироваться"}
          disabled={
            isSubmitting ||
            errors.email ||
            errors.password ||
            errors.confirmPassword ||
            errors.firstName ||
            errors.lastName ||
            errors.phoneNumber ||
            !values.email ||
            !values.password ||
            !values.confirmPassword ||
            !values.firstName ||
            !values.lastName ||
            !values.phoneNumber
          }
        />
      </div>
      {error && <p className="text-sm text-red-500 mx-auto">{error === 'User already exists' ? 'Пользователь уже существует' : null}</p>}
    </form>
  );
};

export default SignupForm;
