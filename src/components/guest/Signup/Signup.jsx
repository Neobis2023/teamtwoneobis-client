import React from 'react'
import styles from './Signup.module.css';
import google from '../../../images/google.svg';
import facebook from '../../../images/facebook.svg';
import { NavLink } from 'react-router-dom';

export const Signup = () => {
  return (
    <section className=''>
        <div className="myWrapper py-20">
            <div className='bg-[#FFFFFF] rounded-[34px] h-[80%] w-[45%] min-w-[350px] max-w-[650px] m-auto py-8 px-14 flex flex-col items-center shadow-[0px_54px_54px_rgba(74,_58,_255,_0.02),_1px_4px_104px_rgba(20,_20,_43,_0.04),_0px_98px_66px_rgba(19,_18,_66,_0.02)]'>
                <h2 className='font-semibold text-3xl mb-8'>Регистрация</h2>
                <form action="" className='w-full flex flex-col items-center gap-5 mb-5'>
                    <input type="text" placeholder='Электронная почта' className={styles.myInput}/>
                    <input type="text" placeholder='Номер телефона' className={styles.myInput}/>
                    <input type="text" placeholder='Имя' className={styles.myInput}/>
                    <input type="text" placeholder='Фамилия' className={styles.myInput}/>
                    <input type="text" placeholder='Пароль' className={styles.myInput}/>
                    <input type="text" placeholder='Пароль ещё раз' className={styles.myInput}/>
                    <NavLink to={'/signup/continue'} className='w-full'>
                        <button type='submit' className={styles.myButton}>Продолжить</button>
                    </NavLink>
                </form>
                <div className='flex flex-col gap-4 items-center'>
                    <p className='text-[#292D32] text-base'>или зарегистрироваться через аккаунт:</p>
                    <div className='flex gap-5'>
                        <NavLink to='/'><img src={facebook} alt="facebook" /></NavLink>
                        <NavLink to='/'><img src={google} alt="google" /></NavLink>
                    </div>
                    <p className='text-[#292D32] text-[1.25rem] font-semibold'>Уже есть аккаунт? <NavLink className={'text-[#8860C3]'} to='/signin'>Войти</NavLink></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export const SignupContinue = () => {
    return (
      <section className=''>
          <div className="myWrapper py-20">
              <div className='bg-[#FFFFFF] rounded-[34px] h-[80%] w-[45%] min-w-[350px] max-w-[650px] m-auto py-8 px-14 flex flex-col items-center shadow-[0px_54px_54px_rgba(74,_58,_255,_0.02),_1px_4px_104px_rgba(20,_20,_43,_0.04),_0px_98px_66px_rgba(19,_18,_66,_0.02)]'>
                  <h2 className='font-semibold text-3xl mb-8'>Регистрация</h2>
                  <form action="" className='w-full flex flex-col items-center gap-5 mb-5'>
                      <input type="text" placeholder='Регион' className={styles.myInput}/>
                      <input type="text" placeholder='Дата рождения' className={styles.myInput}/>
                      <input type="text" placeholder='Имя' className={styles.myInput}/>
                      <input type="text" placeholder='Фамилия' className={styles.myInput}/>
                      <input type="text" placeholder='Пароль' className={styles.myInput}/>
                      <input type="text" placeholder='Пароль ещё раз' className={styles.myInput}/>
                      <NavLink to='/' className={'flex justify-between w-full items-center'}>
                            <NavLink to={'/'} className='text-[rgba(41,_45,_50,_0.6)] ml-auto font-normal text-[1.25rem] basis-1/2'>Заполнить позже</NavLink>
                            <button type='submit' className={`${styles.myButton} h-fit basis-1/2`}>Завершить</button>
                      </NavLink>
                  </form>
                  <div className='flex flex-col gap-4 items-center'>
                      <p className='text-[#292D32] text-base'>или зарегистрироваться через аккаунт:</p>
                      <div className='flex gap-5'>
                          <NavLink to='/'><img src={facebook} alt="facebook" /></NavLink>
                          <NavLink to='/'><img src={google} alt="google" /></NavLink>
                      </div>
                      <p className='text-[#292D32] text-[1.25rem] font-semibold'>Уже есть аккаунт? <NavLink className={'text-[#8860C3]'} to='/signin'>Войти</NavLink></p>
                  </div>
              </div>
          </div>
      </section>
    )
  }
  