import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthFooter from '../../modules/AuthFooter/components/AuthFooter'
import Header from '../../modules/Header/components/Header/Header'

const AuthLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <AuthFooter />
    </>
  )
}

export default AuthLayout