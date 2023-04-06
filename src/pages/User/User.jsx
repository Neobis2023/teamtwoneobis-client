import React, { useEffect, useState } from 'react'
import TopContent from './components/TopContent'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

const User = () => {
  return (
    <div className='relative'>
        <TopContent  />
        <div className='flex justify-between myWrapper w-full pt-8'>
            <Navbar />
            <Profile />
        </div>
    </div>
  )
}

export default User