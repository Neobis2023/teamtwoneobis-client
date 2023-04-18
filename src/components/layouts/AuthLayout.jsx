import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthFooter from '../../modules/AuthFooter/components/AuthFooter'
import Header from '../../modules/Header/components/Header/Header'
import Footer from '../../modules/Footer/components/Footer'

const AuthLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default AuthLayout