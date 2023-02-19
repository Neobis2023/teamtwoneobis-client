import React from 'react'
import FooterSecond from '../../components/guest/FooterSecond/FooterSecond'
import Header from '../../components/guest/Header/Header'
import { Signup } from '../../components/guest/Signup/Signup'

const SignupPage = () => {
  return (
    <>
        <Header />
        <Signup />
        <FooterSecond />
    </>
  )
}

export default SignupPage