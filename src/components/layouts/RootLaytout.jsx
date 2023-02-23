import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../modules/Footer/components/Footer'
import Header from '../../modules/Header/components/Header/Header'

const RootLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default RootLayout