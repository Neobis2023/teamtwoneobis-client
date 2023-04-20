import React from 'react'
import AnotherAuth from '../../components/auth/AnotherAuth'
import SignupForm from '../../modules/SignupForm/components/SignupForm'
import { useTranslation } from 'react-i18next'

const Signup = () => {
    const {t} = useTranslation();
    return (
      <section className=''>
          <div className="myWrapper py-20">
              <div className='bg-[#FFFFFF] rounded-[34px] h-[80%] w-[45%] min-w-[350px] max-w-[650px] m-auto py-8 px-14 flex flex-col items-center shadow-[0px_54px_54px_rgba(74,_58,_255,_0.02),_1px_4px_104px_rgba(20,_20,_43,_0.04),_0px_98px_66px_rgba(19,_18,_66,_0.02)]'>
                  <h2 className='font-semibold text-3xl mb-8'>Регистрация</h2>
                  <SignupForm />
                  <AnotherAuth text={t('Signup.already')} action={t('Signup.signin')} to='/signin'/>
              </div>
          </div>
      </section>
    )
}

export default Signup;