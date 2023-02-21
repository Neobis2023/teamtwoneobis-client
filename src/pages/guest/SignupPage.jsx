import React from 'react'
import FooterSignin from '../../components/guest/FooterSignin/FooterSignin'
import Header from '../../components/guest/Header/Header'
import { Signup } from '../../components/guest/Signup/Signup'

const SignupPage = () => {
  return (
    <>
        <Header />
        <Signup />
        <FooterSignin />
    </>
  )
}

export default SignupPage