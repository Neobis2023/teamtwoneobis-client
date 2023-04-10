import React from 'react'
import { NavLink } from 'react-router-dom'
import key from '../assets/images/key.svg'
import arrowRight from '../assets/images/arrow-right.svg'

const PasswordChange = () => {
  return (
    <div className='w-[48%] mt-2'>
        <p className='text-[#662D91] font-bold text-[0.75rem] mb-1'>Пароль</p>
        <div className='flex justify-between gap-2 items-center'>
            <img src={key} alt='key'/>
            <NavLink to={'/'}>Изменить пароль</NavLink>
            <img src={arrowRight} alt='arrow-right'/>
        </div>
    </div>
  )
}

export default PasswordChange