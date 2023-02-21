import React from 'react'
import FooterSignin from '../../components/guest/FooterSignin/FooterSignin'
import Header from '../../components/guest/Header/Header'
import { SignupContinue } from '../../components/guest/Signup/Signup'

const SignupContinuePage = () => {
  return (
    <>
        <Header />
        <SignupContinue />
        <FooterSignin />
    </>
  )
}

export default SignupContinuePage