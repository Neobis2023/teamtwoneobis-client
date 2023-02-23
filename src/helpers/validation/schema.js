import * as yup from 'yup';

const phoneRegExp = /^\+?[0-9]{3}-?[0-9]{6,12}/$;

export const signupSchema = yup.object().shape({
    email: yup
        .string()
        .required('Введите адрес электронной почты')
        .email('Пожалуйста введите действительный адрес электронной почты'),
    password: yup 
        .string()
        .required('Введите пароль')
        .min(6, 'Пароль должен содержать не менее 8 знаков')
        .max(16, 'Пароль не должен превышать 16 знаков'),
    firstName: yup 
        .string()
        .required('Укажите имя')
        .min(2, 'Проверьте правильность своего имени')
        .min(16, 'Проверьте правильность своего имени'),
    lastName: yup
        .string()
        .required('Укажите фамилию'),
    phoneNumber: yup
        .string()
        .required('Укажите номер телефона')
        .matches(phoneRegExp, 'Номер телефона введен неверно')
})

export const signinSchema = yup.object().shape({
    email: yup
        .string()
        .email('Пожалуйста введите действительный адрес электронный почты')
        .nullable()
        .notRequired(),
    phoneNumber: yup
        .string()
        .nullable()
        .notRequired(), 
    password: yup
        .string()
        .required('Введите пароль')
}).test('at-least-one', 'Пожалуйста введите номер телефона или адрес электронной почты', (values) => {
    const {email, phoneNumber} = values;
    return !!email || !!number;
});